import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.MAILER_SERVER,
  port: process.env.MAILER_PORT, // Use whichever port here.
  secure: true, // use TLS
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
})
//[1]

export default async (req, res) => {
  const {
    senderMail,
    name,
    content,
    recipientMail,
    telefon,
    adresse,
    betreff,
  } = req.body
  //[2]

  // Check if fields are all filled
  if (
    senderMail === '' ||
    name === '' ||
    content === '' ||
    recipientMail === '' ||
    telefon === '' ||
    adresse === '' ||
    betreff === ''
  ) {
    res.status(403).send('')
    return
  }
  //[3]
  const mergedContent = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
      <style>
        h1 {
          text-align: center;
        }
        button {
          all: unset;
          padding: 10px;
          background: blue;
          color: white;
          border-radius: 20px;
        }
        .button__wrapper {
          display: flex;
          justify-content: center;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <h1>
        This is a static template, there is no bundler or bundling involved!
      </h1>
      <div class="button__wrapper">
        <button>TestButton</button>
      </div>
    </body>
  </html>
`
  //     const mergedContent = `
  // Name: ${name}
  // Telefon: ${telefon}
  // Adresse: ${adresse}
  // Betreff: ${betreff}
  // Nachricht:
  // ${content}`

  const mailerRes = await mailer({
    senderMail,
    name,
    text: mergedContent,
    recipientMail,
  })
  res.send(mailerRes)
  //[4]
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
  const message = {
    from,
    to: `${recipientMail}`,
    subject: `Neue Nachricht von ${from}`,
    html: text,
    replyTo: from,
  }
  //[5]

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
  //[6]
}
