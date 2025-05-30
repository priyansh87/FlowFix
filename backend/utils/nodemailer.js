import nodemailer from "nodemailer";

const {
  EMAIL_PASSWORD,
  MAIL_TRAP_SMTP_HOST,
  MAIL_TRAP_SMTP_PORT,
  MAIL_TRAP_SMTP_USER,
  MAIL_TRAP_SMTP_PASS,
} = process.env;

export const sendMail = async (to, subject, text) => {
  try {
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
      host: MAIL_TRAP_SMTP_HOST,
      port: MAIL_TRAP_SMTP_PORT,

      auth: {
        user: MAIL_TRAP_SMTP_USER,
        pass: MAIL_TRAP_SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"INNGEST TMS "',
      to,
      subject,
      text, // plain‑text body
      // html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("mail error " , error ) 
    throw error
  }
};
