const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'emmanu',
  password: '1515',
  database: 'localhost',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }


  connection.query(`
    CREATE TABLE Livro (
      LivroID INT PRIMARY KEY,
      Titulo VARCHAR(255),
      ISBN VARCHAR(20),
      AnoPublicacao INT,
      -- Outros atributos
    );
  `, (err) => {
    if (err) throw err;
    console.log('Tabela Livro criada com sucesso.');
  });

  
  connection.query(`
    CREATE TABLE Autor (
      AutorID INT PRIMARY KEY,
      Nome VARCHAR(255),
      Nacionalidade VARCHAR(50),
      -- Outros atributos
    );
  `, (err) => {
    if (err) throw err;
    console.log('Tabela Autor criada com sucesso.');
  });

 
  connection.query(`
    CREATE TABLE Usuario (
      UsuarioID INT PRIMARY KEY,
      Nome VARCHAR(255),
      Endereco VARCHAR(255),
      -- Outros atributos
    );
  `, (err) => {
    if (err) throw err;
    console.log('Tabela Usuario criada com sucesso.');
  });

 
  connection.query(`
    CREATE TABLE Emprestimo (
      EmprestimoID INT PRIMARY KEY,
      DataEmprestimo DATE,
      DataDevolucaoPrevista DATE,
      UsuarioID INT,
      FOREIGN KEY (UsuarioID) REFERENCES Usuario(UsuarioID),
      -- Outros atributos
    );
  `, (err) => {
    if (err) throw err;
    console.log('Tabela Emprestimo criada com sucesso.');
  });


  connection.query(`
    CREATE TABLE Devolucao (
      DevolucaoID INT PRIMARY KEY,
      DataDevolucaoReal DATE,
      EmprestimoID INT,
      FOREIGN KEY (EmprestimoID) REFERENCES Emprestimo(EmprestimoID),
      -- Outros atributos
    );
  `, (err) => {
    if (err) throw err;
    console.log('Tabela Devolucao criada com sucesso.');

    s
    connection.end();
  });
});
