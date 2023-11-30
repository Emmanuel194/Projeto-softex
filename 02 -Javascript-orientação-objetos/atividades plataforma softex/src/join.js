const mysql = require('mysql2');

os
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'emmanu',
  password: '1515',
  database: 'localhost',
});


const executeQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


const insertDataQuery = `
  INSERT INTO Autores (Nome, Nacionalidade) VALUES
    ('Autor1', 'Nacionalidade1'),
    ('Autor2', 'Nacionalidade2'),
    ('Autor3', 'Nacionalidade3');

  INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES
    ('Livro1', 2020, 1),
    ('Livro2', 2018, 2),
    ('Livro3', 2019, 1),
    ('Livro4', 2021, 3),
    ('Livro5', 2017, 2);
`;


const simpleQuery = 'SELECT * FROM Autores;';


const innerJoinQuery = 'SELECT Autores.Nome, Livros.Titulo FROM Autores INNER JOIN Livros ON Autores.AutorID = Livros.AutorID;';


const leftJoinQuery = 'SELECT Autores.Nome, Livros.Titulo FROM Autores LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;';


const filterByNationalityQuery = "SELECT Autores.Nome, Livros.Titulo FROM Autores LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID WHERE Autores.Nacionalidade = 'Nacionalidade1';";


const aggregatedQuery = 'SELECT Autores.Nome, COUNT(Livros.LivroID) AS QuantidadeLivros FROM Autores LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID GROUP BY Autores.Nome;';


connection.connect(async (err) => {
  if (err) throw err;

  try {
 
    await executeQuery(insertDataQuery);
    console.log('1. Dados inseridos com sucesso.');

   
    const resultSimple = await executeQuery(simpleQuery);
    console.log('2. Consulta simples:', resultSimple);

  
    const resultInnerJoin = await executeQuery(innerJoinQuery);
    console.log('3. Consulta com INNER JOIN:', resultInnerJoin);


    const resultLeftJoin = await executeQuery(leftJoinQuery);
    console.log('4. Consulta com LEFT JOIN:', resultLeftJoin);

   
    const resultFiltered = await executeQuery(filterByNationalityQuery);
    console.log('5. Consulta com filtro por nacionalidade:', resultFiltered);

   
    const resultAggregated = await executeQuery(aggregatedQuery);
    console.log('6. Consulta agregada:', resultAggregated);


    connection.end();
  } catch (error) {
    console.error('Erro:', error);
 
    connection.end();
  }
});
