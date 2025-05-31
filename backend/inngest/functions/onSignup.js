import { User } from "../../models/user.model.js";
import { sendMail } from "../../utils/nodemailer.js";
import { inngest } from "../client.js";
import { NonRetriableError } from "inngest";
export const onUserSignup = inngest.createFunction(
    {id: "on-user-signup" , retries:2} , 
    {event:"user/signup" } , 
    async ({event , step}) => {
        try {
            const {email} = event.data
            const user = await step.run("get-user-email" , async () => {
                const userObject = await User.findOne({email})
                if( !userObject ) {
                    throw new NonRetriableError("User no longer exists in out database")

                }
                return userObject ; 
            })

            await step.run("send-welcome-email" , async () => {
                const subject = "Welcome to the app "
                const message = `Hi , 
                    \n\n
                    Thanks for signing up. We're glad to have you
                `
                await sendMail(user.email , subject , message)
            })

            return { success : true } ; 

        } catch (error) {
            console.log(error)
            return {success : false }
        }
    }
)