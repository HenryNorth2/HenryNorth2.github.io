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

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // getting data from request body
    let data = request.body;

    const toEmail = 'henlol999@outlook.com';

    const mailOptions = {
      from: 'Henry North <henrywebtesting@gmail.com>',
      to: toEmail,
      subject: `Enquiry from ${data.name}`,
      html: `<p style="font-size: 16px;">Test Body</p>`
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if(erro) {
        console.log(info);
        return response.send(erro.toString());
      }
      return response.send('Sent');
    });
  });
});
