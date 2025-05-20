import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method Not Allowed' })
    return
  }

  let name, contact, email, subject, message
  try {
    ({ name, contact, email, subject, message } = req.body)
  } catch (err) {
    res.status(400).json({ success: false, error: 'Invalid request body' })
    return
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: 'info@accessretailpk.com',
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Contact:</b> ${contact}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Subject:</b> ${subject}</p>
             <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    })
    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
} 