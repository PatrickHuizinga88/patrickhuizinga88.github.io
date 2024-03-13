import { Resend } from 'resend'

const resendApiKey = useRuntimeConfig().resendApiKey as string
const resend = new Resend(resendApiKey)

export default defineEventHandler(async (event) => {
    const { name, email, message } = await readBody(event)

    try {
        const { data, error } = await resend.emails.send({
            from: `${name} <noreply@notifications.patrickhuizinga.nl>`,
            to: 'patrickhuizinga44@gmail.com',
            reply_to: email,
            subject: 'New message from patrickhuizinga.nl',
            text: message,
        })

        if (error) {
            return createError({
                statusMessage: error.name,
                message: error.message,
            })
        }
        
        return data
    } catch (error) {
        throw error
    }
});
