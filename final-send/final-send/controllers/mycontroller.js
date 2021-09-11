const games = require('../models/games')
const { sequelize, Sequelize } = require('../config/database')
const games = require('../models/games')(sequelize,Sequelize)

exports.save = (req, res) => {
    const gamesSetData = {
        title: req.body.title,
        description: req.body.description,
        tempo: req.body.tempo,
        price: req.body.price
    }

    gamesModel.create(gamesSetData).then(data => {
        console.log("Data saved")
        res.redirect('/')
    }).catch(err => {
        console.log("error: " + err)
    })
}

exports.show = (req,res) => {
    gamesModel.findAll({
        order: [['price', 'DESC']] //buscando jogos ordenando pelo preço
    }).then(results=>{
        res.render("show", { results:results })
    }).catch(err => {
        res.status(500).send({message: "error: " + err.message})
    })
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await gamesModel.destroy({
            where: {id}
        });

        res.redirect('/show');
    } catch (err) {
        res.status(500).send({message: "error: " + err.message});
    }
}
