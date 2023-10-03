var mysql = require('mysql2');

var con = mysql.createConnection({
    host:"localhost",
    user:'root',
    password: 'fatec',
    database: 'node'
})

con.connect(function(err){
    if (err) throw err;
    console.log('Connected');
    
    //criando tabelas

    var sql = 'USE node;'
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })
    var sql = 'CREATE TABLE Clientes(cli_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,'+'cli_nome VARCHAR(100) NOT NULL,'+'cli_endereco VARCHAR(150));'
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    });
    var sql = 'CREATE TABLE Pedido(ped_id INT NOT NULL AUTO_INCREMENT,'+'ped_desc VARCHAR(150),'+'ped_qntd INT NOT NULL,'+'ped_data DATE,'+'cli_id INT NOT NULL,'+'PRIMARY KEY(ped_id),'+'FOREIGN KEY(cli_id) REFERENCES Clientes(cli_id));'
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })

    //inserindo dados

    var sql = "INSERT INTO Clientes(cli_nome, cli_endereco) VALUES('Gabriel', 'R.Homero Malinvero,76')"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })
    var sql = "INSERT INTO Clientes(cli_nome, cli_endereco) VALUES('Wellington', 'R.Tilapo Saudito,69')"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })
    var sql = "INSERT INTO Clientes(cli_nome, cli_endereco) VALUES('Ryan', 'R.Borboleto,157')"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })
    var sql = "INSERT INTO Pedido(ped_desc, ped_qntd, ped_data, cli_id) VALUES('Computador da Positivo 2002', 1, CURDATE(), 1)"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })
    var sql = "INSERT INTO Pedido(ped_desc, ped_qntd, ped_data, cli_id) VALUES('Tijolo Baiano', 50, CURDATE(), 2)"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })
    var sql = "INSERT INTO Pedido(ped_desc, ped_qntd, ped_data, cli_id) VALUES('Camisa do Santos Edição 2002', 100, CURDATE(), 3)"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })

    //atualizando

    var sql = "UPDATE Pedido SET ped_data = '2023-10-02', ped_qntd = 200 WHERE cli_id = 3"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })

    //deletando

    var sql = "DELETE FROM Pedido WHERE cli_id = 1"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })

    //selecionando com join

    var sql = "SELECT Clientes.cli_nome, Pedido.ped_desc FROM Clientes INNER JOIN Pedido ON Clientes.cli_id = Pedido.cli_id;"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })

    //selecionando 
    
    var sql = "SELECT * FROM Pedido"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    })
})