import axios from 'axios'

export const sendContactMail = async (
  recipientMail,
  name,
  senderMail,
  content,
  telefon,
  adresse,
  betreff,
  email
) => {
  const data = {
    recipientMail,
    name,
    senderMail,
    content,
    telefon,
    adresse,
    betreff,
    email,
  }

  try {
    const res = await axios({
      method: 'post',
      url: '/api/mailer',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    })
    return res
  } catch (error) {
    return error
  }
}
//[1]
