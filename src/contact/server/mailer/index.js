import nodemailer from 'nodemailer';
import config from './config';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
});

const send = ({ firstName, lastName, phoneNumber, emailId, text }) => {
  const from = firstName && emailId ? '${firstName} <${emailId}>' : '${firstName || emailId}'
  const message = {
    from,
    to: 'ssharmapraveen2007@gmail.com',
    subject: 'New message from ${from} at my profile query',
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send;