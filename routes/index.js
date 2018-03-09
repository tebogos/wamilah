var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const sendObj={
     companyName: 'Wamilah.org',
     email:'sisanda@wamila.org',
     phone:'079 293 4826',
     address:'140 Madison Square Rivonia Road, Rivonia',
     contactUsSlogan:'We will transform your space',
     ourTeam:'A creative agency based on Candy Land, ready to boost your business with some beautifull templates. MOOZ Agency is one of the best in town see more you will be amazed.',
     ourPartners:'Mida sit una namet, cons uectetur adipiscing adon elit.',
     portfolio:'Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for.',
     about:'A creative agency based on Candy Land, ready to boost your business with some beautifull templates. MOOZ Agency is one of the best in town see more you will be amazed.'
                    }
  res.render('index', sendObj);
});

module.exports = router;
