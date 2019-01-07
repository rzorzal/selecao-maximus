module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `Clientes` ORDER BY clientesId ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Bem-vindo a Maximus | Ver Clientes"
                ,clientes: result
            });
        });

    },
};
