var express = require('express');
var router = express.Router();
var about=
/* GET home page. */
router.get('/', function(req, res, next) {
  const sendObj={
    title:'Wamilah website',
     companyName: 'wamilah-org.co.za',
     email:'sisanda@wamila-org.co.za',
     phone:'072 797 7033',
     address:'140 Madison Square Rivonia Road, Rivonia',
     contactUsSlogan:'We will transform your space',
     ourTeam:'',
     ourPartners:'',
     portfolio:'Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for.',
     about:'Wamilah.Org is a professional organizing company based in Johannesburg. It is female owned and managed company founded by Sisanda Tezapi Wamilah.Org offers quality service across the the board with the highest standards of client’s specifications and needs. Our company is ran woman that means we can multi task and we aim to reach our targets on time and finish the job on time in order to move to the next task.<br> Our team is experienced, driven and passionate. Our aim is to build long term relationships with our clients as offer an efficient personalized service in the most efficient manner. Our focus is is to provide our clients with value added solutions. We love transforming lives, families and spaces at the same time save them time and money. We also mindful of the fact that no client is the same and End results are different.<br> The stuff that we get from generous clients we donate to charities and homes. We are passionate about giving back to the less fortunate.We pride ourselves by going all out, as long as it’s reasonable requests. Just as our slogan says we go all our, we really do.<br>We love doing what we do it gives us fulfillment and satisfaction. When clients are happy we happy.<br>Our area of focus is the Johannesburg Nothern Surbubs. '
                    }
  res.render('index', sendObj);
});

module.exports = router;
