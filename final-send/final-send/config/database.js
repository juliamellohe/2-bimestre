const Sequelize = require('sequelize');
sequelize = new Sequelize('DB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}