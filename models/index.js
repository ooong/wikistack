var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});
console.log('it worked')

var Page = db.define('page', {
  title: {
      type: Sequelize.STRING,
      allowNull: false
  },
  urlTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    //   get() {
    //       var wikilink = this.getDataValue()
    //   }
  },
  content: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  status: {
      type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

var User = db.define('user', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
        }
  }
});

module.exports = {
Page: Page,
User: User,
db: db    //connecting  db to app.js when you wanna use to sync in app.js
};

//want a dfined server route for each page
//a model instance proprty that we might want to call route
