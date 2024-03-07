import { Resend } from 'resend'

type Query = { 
    email: string, 
    name: string, 
    message: string
}

const resendApiKey = useRuntimeConfig().resendApiKey as string
const resend = new Resend(resendApiKey)

export default defineEventHandler(async (event) => {
    const { name, email, message } = getQuery(event) as Query

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
        return error
    }
});
