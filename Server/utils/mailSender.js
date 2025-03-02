//pre middleware -> this should be used in models folder after schema code and before model object code
const nodemailer = require("nodemailer");
require("dotenv").config();


const mailSender = async (email, title , body ) => {
    try {
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
            secure:false,
        })

        let info = await transporter.sendMail({
            from : 'StudyNotion',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(info);
        return info;

    } catch (error) {
        console.error(error.message);
    }
}

module.exports = mailSender;
