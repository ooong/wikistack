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
  }, {
    hooks: {
        beforeValidate: function generateUrlTitle(page) {
            if (page.title) {
                // Removes all non-alphanumeric characters from title
                // And make whitespace underscore
                page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
              } else {
                // Generates random 5 letter string
                page.urlTitle = Math.random().toString(36).substring(2, 7);
              } 
              console.log("this is page and pageUrlTitle", page, page.urlTitle);
        }
    }
  }
);

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

