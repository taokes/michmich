/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Project = require('../api/project/project.model');
var Shop = require('../api/shop/shop.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});


Shop.find({}).remove(function() {
	  Shop.create(	  	
	  	 {
    "name": "Azurite",
    "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    "shine": 8,
    "price": 110.50,
    "rarity": 7,
    "color": "#CCC",
    "faces": 14,
    "images": [
      "assets/images/gem-02.gif",
      "assets/images/gem-05.gif",
      "assets/images/gem-09.gif"
    ],
    "reviews": []
  },
  {
    "name": "Bloodstone",
    "description": "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    "shine": 9,
    "price": 22.90,
    "rarity": 6,
    "color": "#EEE",
    "faces": 12,
    "images": [
      "assets/images/gem-01.gif",
      "assets/images/gem-03.gif",
      "assets/images/gem-04.gif"
    ],
    "reviews": []
  },
  {
    "name": "Zircon",
    "description": "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    "shine": 70,
    "price": 1100,
    "rarity": 2,
    "color": "#000",
    "faces": 6,
    "images": [
      "assets/images/gem-06.gif",
      "assets/images/gem-07.gif",
      "assets/images/gem-08.gif"
    ],
    "reviews": []
  } 
	  );
	});





Project.find({}).remove(function() {
	  Project.create({
	    userId: 'Test User',
	    name : 'créer une société civile immobilière',
	    info : 'Cette structure permet de loger tout ou partie de vos actifs immobiliers afin d’éviter l’indivision.'
	  }, {
	    userId: 'Test User',
	    name : 'Food truck',
	    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
	  }, {
	      userId: 'Test User',
	    name : 'Smart Build System',
	    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
	  },  {
	     userId: 'Test User',
	    name : 'Modular Structure',
	    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
	  },  {
	     userId: 'Test User',
	    name : 'Optimized Build',
	    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
	  },{
	      userId: 'Test User',
	    name : 'Deployment Ready',
	    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
	  });
	});







User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});