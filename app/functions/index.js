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
    const data = request.body;

    const mailOptions = {
      from: 'Website Enquiry <henrywebtesting@gmail.com>',
      to: 'henrywebtesting@gmail.com',
      subject: `Enquiry from ${data.name}`,
      html: `<h2>Name: ${data.name}</h2>
        <h2>Email: ${data.email}</h2>
        <h2>Enquiry/Message:</h2>
        <p>${data.message}</p>`
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if(erro) {
        return response.send(erro.toString());
      }
      return response.send('"Sent"');
    });
  });
});
