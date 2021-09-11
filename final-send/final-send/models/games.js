const { sequelize } = require("../config/database");

module.exports = (sequelize,DataTypes) => {
    var Games = sequelize.define('games',{
        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        tempo: {
            type: DataTypes.DOUBLE
        },
        price: {
            type: DataTypes.DOUBLE
        }
    })
    //Games.sync( { force:true } )
    return Games

}