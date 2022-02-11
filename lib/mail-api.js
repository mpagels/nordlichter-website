import axios from 'axios'

export const sendContactMail = async ({
  senderMail,
  name,
  recipientMail,
  content,
  telefon,
  adresse,
  betreff,
  email,
  ImInterestedIn,
}) => {
  const data = {
    recipientMail,
    name,
    senderMail,
    content,
    telefon,
    adresse,
    betreff,
    email,
    ImInterestedIn,
  }
  console.log(data)
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
    return { status: 400, error }
  }
}
//[1]
