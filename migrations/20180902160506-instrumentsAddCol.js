'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'instruments',
      'studentId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'students',
          key: 'id'
        },
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('instruments', 'studentId');
  }
};
