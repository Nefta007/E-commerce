const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

//id: integer, doesn't allow null value, set primary key, use auto-increment
//tag_name: string
Tag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
