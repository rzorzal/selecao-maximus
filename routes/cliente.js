const fs = require('fs');

module.exports = {
    addClientePage: (req, res) => {
        res.render('add-cliente.ejs', {
            title: "Bem-vindo a Maximus | Adicionar um novo Cliente"
            ,message: ''
        });
    },
    addCliente: (req, res) => {

    let message = '';
    let nome = req.body.nome;
    let datanascimento = req.body.dataNascimento;
    let saldoDevedor = req.body.saldoDevedor;

    let usernameQuery = "SELECT * FROM `Clientes` WHERE nome = '" + nome + "'";

    db.query(usernameQuery, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (result.length > 0) {
        message = 'Cliente já cadastrado!';
        res.render('add-cliente.ejs', {
          message,
          title: "Bem-vindo a Maximus | Adicionar novo cliente"
        });
      } else {
        // upload the file to the /public/assets/img directory
        if (err) {
          return res.status(500).send(err);
        }
        // send the cliente's details to the database
        let query = "INSERT INTO `Clientes` (nome, dataNascimento, saldoDevedor) VALUES ('" +
        nome + "', '" + datanascimento + "', '" + saldoDevedor + "')";
        db.query(query, (err, result) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.redirect('/');
        });
        }
  });
},
    editClientePage: (req, res) => {
        let clientesId = req.params.clientesId;
        let query = "SELECT * FROM `Clientes` WHERE clientesId = '" + clientesId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-cliente.ejs', {
                title: "Edit  Cliente"
                ,cliente: result[0]
                ,message: ''
            });
        });
    },
    editCliente: (req, res) => {
        let clientesId = req.params.clientesId;
        let nome = req.body.nome;
        let datanascimento = req.body.dataNascimento;
        let saldoDevedor = req.body.saldoDevedor;

        let query = "UPDATE `Clientes` SET `nome` = '" + nome + "', `saldoDevedor` = '" + saldoDevedor + "' WHERE `Clientes`.`clientesId` = '" + clientesId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteCliente: (req, res) => {
        let clientesId = req.params.clientesId;
        let deleteUserQuery = 'DELETE FROM Clientes WHERE clientesId = "' + clientesId + '"';
                db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
    },

    vendaClientePage: (req, res) => {
      let vendasId = req.params.vendasId;
      let query = "SELECT * FROM `Vendas` WHERE vendasId = '" + vendasId + "' ";
      db.query(query, (err, result) => {
          if (err) {
              return res.status(500).send(err);
          }
          res.render('modal-venda.ejs', {
              title: "Vendas  Cliente"
              ,venda: result[0]
              ,message: ''
          });
      });
  },
  vendaCliente: (req, res) => {
    let message = '';
    let clienteId = req.body.clientesId
    let valor = req.body.valor;
    let datarealizacao = req.body.dataRealizacao;
    let saldoDevedor = req.body.saldoDevedor;
              // send the cliente's details to the database
    let query = "INSERT INTO `Vendas` (valor, dataRealizacao, saldo, clientesId) VALUES ('" +
        nome + "', '" + datarealizacao + "', '" + saldoDevedor + "', '" + clienteId + "')";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
  }
};
