const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'



const oauth2Client = new google.auth.OAuth2(
    process.env.MAILING_SERVICE_CLIENT_ID,
    process.env.MAILING_SERVICE_CLIENT_SECRET,
    process.env.MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)

export default async (req,res) => {
    switch(req.method) {
        case 'POST':
            await sendEmail (req, res)
            break;
    }
}

// send mail
 const sendEmail = async(req,res) => {
     try {
         
     

            const {name, email, message} = req.body 
            
            oauth2Client.setCredentials({
                refresh_token: process.env.MAILING_SERVICE_REFRESH_TOKEN
            })

            
                const accessToken = await oauth2Client.getAccessToken()
            const smtpTransport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.USER_EMAIL_ADDRESS,
                    clientId: process.env.MAILING_SERVICE_CLIENT_ID,
                    clientSecret: process.env.MAILING_SERVICE_CLIENT_SECRET,
                    refreshToken: process.env.MAILING_SERVICE_REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })

            const mailOptions = {
                from: `${name}`,
                to: process.env.USER_EMAIL_ADDRESS,
                subject: `New Inquiry from ${name}`,
                html: `
                    <div style="background-color: #051937;">
                    <div style="max-width: 700px; margin:auto; background-color: #fff; border: 2px solid #ddd; padding: 50px 20px; font-size: 110%;">
                    <h2 style="text-align: center; text-transform: uppercase;color: #051937;">You have a new message!</h2>
                    <p>You have received the following message from , ${email}.
                        
                    </p>
                    
                    <p> Message:- ${message}</p>
                
                    
                    </div>
                    </div>
                `
            };
        
         smtpTransport.sendMail(mailOptions, ( info) => {
                    console.log("Mail Sent");
                    res.json({msg: 'Message Sent'});
            });  
    
        } catch (err) {
            return res.status(500).json({err: err.message})
        }
    
    
}

// module.exports = sendEmail




