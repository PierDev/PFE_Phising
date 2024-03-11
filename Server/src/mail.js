const nodemailer = require("nodemailer");
const async = require('async')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testpfe2024@gmail.com',
        pass: 'xhvk zpjj kuef wguu'
    }
});
  


function send_email(destination, subject, content, campagneId) {
    var mailOptions = {
        from: 'testpfe2024@gmail.com',
        to: destination,
        subject: subject,
        text: content
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

async function send_email_mult(destinations, subject, content, campagneId) {
    let compt = 0
    for await ( dest of destinations){
        console.log("Compteur: ", compt)
        compt += 1
        send_email(dest, subject, content);
        await new Promise(resolve => setTimeout(resolve, 60000)); // wait a minute between each mail sent
    }
}

module.exports = {
    send_email,
    send_email_mult
};