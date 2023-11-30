const mysql = require('mysql2');


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


const insertQuery = `
  INSERT INTO Produtos (NomeProduto, Preco, QuantidadeEmEstoque) VALUES
    ('Smartphone', 799.99, 20),
    ('Tablet', 349.99, 10),
    ('Fone de Ouvido', 49.99, 50);
`;


const updateQuery = `
  UPDATE Produtos SET QuantidadeEmEstoque = 25, Preco = 849.99 WHERE NomeProduto = 'Smartphone';
`;

)
const vendaQuery = `
  DELETE FROM Produtos WHERE (NomeProduto = 'Tablet' AND QuantidadeEmEstoque >= 5) OR
                              (NomeProduto = 'Fone de Ouvido' AND QuantidadeEmEstoque >= 10);
`;


connection.connect(async (err) => {
  if (err) throw err;

  try {
    await executeQuery(insertQuery);
    console.log('Produtos inseridos com sucesso.');

    await executeQuery(updateQuery);
    console.log('Estoque do Smartphone atualizado com sucesso.');

    await executeQuery(vendaQuery);
    console.log('Venda de produtos simulada com sucesso.');


    connection.end();
  } catch (error) {
    console.error('Erro:', error);
 
    connection.end();
  }
});
