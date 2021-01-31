import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.MAILER_SERVER,
    port: process.env.MAILER_PORT , // Use whichever port here.
    secure: true, // use TLS
    auth: {
        user: process.env.MAILER_USERNAME,
        pass: process.env.MAILER_PASSWORD
    }
})
//[1]

export default async (req, res) => {
    const { senderMail, name, content, recipientMail, telefon, adresse, betreff } = req.body
//[2]

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === ""  || telefon === "" || adresse === "" || betreff === "") {
        res.status(403).send("")
        return
    }
//[3]

    const mergedContent = `
Name: ${name}
Telefon: ${telefon}
Adresse: ${adresse}
Betreff: ${betreff}
Nachricht: 
${content}`

    const mailerRes = await mailer({ senderMail, name, text: mergedContent, recipientMail })
    res.send(mailerRes)
//[4]
}

const mailer = ({ senderMail, name, text, recipientMail}) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `Neue Nachricht von ${from}`,
        text,
        replyTo: from
    }
//[5]

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
//[6]
}