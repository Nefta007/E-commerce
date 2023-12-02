const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    //id: integer doesn't allow null value, set primary key, set auto increment
    //product_id: integer, references product models, id
    //tag_id: integer, refernces tag modes id
    id:{
      type: DataTypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
