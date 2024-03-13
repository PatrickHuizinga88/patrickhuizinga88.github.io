import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
    const { name, email, message } = await readBody(event)

    try {
        const data = await resend.emails.send({
            from: `${name} <noreply@notifications.patrickhuizinga.nl>`,
            to: 'patrickhuizinga44@gmail.com',
            reply_to: email,
            subject: 'New message from patrickhuizinga.nl',
            text: message,
        })

        return data
    } catch (error) {
        throw { error }
    }
});
