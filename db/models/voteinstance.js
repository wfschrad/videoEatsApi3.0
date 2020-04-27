'use strict';
module.exports = (sequelize, DataTypes) => {
  const VoteInstance = sequelize.define('VoteInstance', {
    typeId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    reviewId: { type: DataTypes.INTEGER, allowNull: false }
  },
    {
      indexes: [
        {
          unique: true,
          fields: ['typeId', 'userId', 'reviewId']
        }
      ]
    }, {});
  VoteInstance.associate = function (models) {
    // VoteInstance.belongsToMany(models.VoteType, { foreignKey: 'typeId' });
    // VoteInstance.belongsToMany(models.User, { foreignKey: 'userId' });
    // VoteInstance.belongsToMany(models.Review, { foreignKey: 'reviewId' });
  };
  return VoteInstance;
};