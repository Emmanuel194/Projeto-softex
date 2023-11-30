const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'emmanu',
  password: '1515',
  database: 'BlogDB',
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL');

  
  const createAutorTable = `
    CREATE TABLE Autor (
      AutorID INT PRIMARY KEY,
      NomeAutor VARCHAR(255),
      Email VARCHAR(255)
    )`;

 
  const createPostTable = `
    CREATE TABLE Post (
      PostID INT PRIMARY KEY,
      Titulo VARCHAR(255),
      Conteudo TEXT,
      DataPublicacao DATE,
      AutorID INT,
      FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
    )`;

  
  const createComentarioTable = `
    CREATE TABLE Comentario (
      ComentarioID INT PRIMARY KEY,
      TextoComentario TEXT,
      DataComentario DATE,
      AutorID INT,
      PostID INT,
      FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
      FOREIGN KEY (PostID) REFERENCES Post(PostID)
    )`;

  
  connection.query(createAutorTable, (err) => {
    if (err) throw err;
    console.log('Tabela Autor criada com sucesso');
  });

  connection.query(createPostTable, (err) => {
    if (err) throw err;
    console.log('Tabela Post criada com sucesso');
  });

  connection.query(createComentarioTable, (err) => {
    if (err) throw err;
    console.log('Tabela Comentario criada com sucesso');

    connection.end();
  });
});
