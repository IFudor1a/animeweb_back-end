const nodemailer = require('nodemailer');

class mailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationLink(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Activation of Account " + "Animeijin",
            text: '',
            html:
                `
            <div>
               <h1>For activation of account go by link</h1>
               <a href="${link}">${link}</a>
            </div>
            `
        }, (err, info) => {
            if(err) return console.log(err);
            console.log('Message sent', info.messageId, info.response);
        })
    }
}

module.exports = new mailService();