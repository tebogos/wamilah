var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const { validateBody, schemas } = require('../helpers/routeHelpers');





/* GET users listing. */
router.route('/').post(validateBody(schemas.mailerForm), function(req, res, next) {
  const sendObj={
    title:'Wamilah website',
     companyName: 'Wamilah.org',
     email:'sisanda@wamila.org',
     phone:'079 293 4826',
     address:'140 Madison Square Rivonia Road, Rivonia',
     contactUsSlogan:'We will transform your space',
     ourTeam:'A creative agency based on Candy Land, ready to boost your business with some beautifull templates. MOOZ Agency is one of the best in town see more you will be amazed.',
     ourPartners:'Mida sit una namet, cons uectetur adipiscing adon elit.',
     portfolio:'Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for.',
     about:'Wamilah.Org is a black female owned and managed company founded by Sisanda Tezapi.<br>Our aim is to build long term relationships with our clients and offer an efficient personalized yet professional service in a most efficient manner.<br> At Wamilah.Org we know no Client is the same and their needs and end results are different.<br>Our philosophy is dedication to excellence while our preferred mode of operation is through strategic alliances.As our company is ran by woman it means we can multi task and we aim to reach our targets on time and finish the job on time in order to move on the next task. We have an experienced, passionate and driven team. Our focus is on providing customers with valued added solutions.'
                    }

     var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
               user: 'wamilahorg@gmail.com',
               pass: 'wam009org'
               },
               tls: { rejectUnauthorized: false }
         });
                    
     var mailOptions = {
         from: req.body.email,
         to: 'stezapi@gmail.com , sisanda@wamilah-org.co.za',
         subject: 'Wamilah Concact Form',
          text: "From " +req.body.name+"\n Email : "+req.body.email+"\n\n"+req.body.message
          };
          console.log("About to send email message");
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("email sending error",error);
        } else {
            res.send('Email sent: ' + info.response);
          console.log('Email sent: ' + info.response);
          
        }
      });
      res.render('index', sendObj);
      transporter.close();
  
});

module.exports = router;