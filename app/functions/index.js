const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: '*'});
admin.initializeApp();


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'henrywebtesting@gmail.com',
        pass: 'Password123#'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    // getting users email by query string
    const toEmail = req.query.toEmail;

    const mailOptions = {
      from: 'Henry North <henrywebtesting@gmail.com>',
      to: toEmail,
      subject: 'Test Subject',
      html: `<p style="font-size: 16px;">Test Body</p>`
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if(erro){
        return res.send(erro.toString());
      }
      return res.send('Sent');
    });
  });
});
