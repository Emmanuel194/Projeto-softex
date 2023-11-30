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


const selectTransactionsQuery = 'SELECT * FROM transacoes;';


const renameColumnsQuery = 'SELECT IDTransacao AS "ID Transacao", Data, Valor AS "Valor" FROM transacoes;';


const filterTransactionsQuery = 'SELECT * FROM transacoes WHERE Valor > 100;';


const orderTransactionsQuery = 'SELECT * FROM transacoes ORDER BY Valor DESC;';


const aggregateFunctionsQuery = `
  SELECT
    AVG(Valor) AS Media,
    MAX(Valor) AS ValorMaximo,
    MIN(Valor) AS ValorMinimo,
    COUNT(*) AS TotalTransacoes
  FROM transacoes;
`;


const groupByQuery = `
  SELECT
    Produto,
    AVG(Valor) AS MediaValorPorProduto
  FROM transacoes
  GROUP BY Produto;
`;


const combinedQuery = `
  SELECT
    COUNT(*) AS QuantidadeTotalProdutosVendidos,
    SUM(Valor) AS ValorTotalVendas,
    AVG(Valor) AS MediaValorPorTransacao,
    CategoriaProduto
  FROM transacoes
  GROUP BY CategoriaProduto;
`;


connection.connect(async (err) => {
  if (err) throw err;

  try {

    const transactions = await executeQuery(selectTransactionsQuery);
    console.log('1. Seleção de dados:', transactions);

  
    const renamedColumns = await executeQuery(renameColumnsQuery);
    console.log('2. Renomeando colunas:', renamedColumns);


    const filteredTransactions = await executeQuery(filterTransactionsQuery);
    console.log('3. Filtragem com a cláusula WHERE:', filteredTransactions);


    const orderedTransactions = await executeQuery(orderTransactionsQuery);
    console.log('4. Ordenação com a cláusula ORDER BY:', orderedTransactions);

  
    const aggregationResults = await executeQuery(aggregateFunctionsQuery);
    console.log('5. Agregação com funções SQL:', aggregationResults);

 
    const groupedResults = await executeQuery(groupByQuery);
    console.log('6. Agrupamento com a cláusula GROUP BY:', groupedResults);


    const combinedResults = await executeQuery(combinedQuery);
    console.log('7. Consulta combinada:', combinedResults);

  
    connection.end();
  } catch (error) {
    console.error('Erro:', error);
    // Certifique-se de fechar a conexão em caso de erro
    connection.end();
  }
});
