const nodemailer = require('nodemailer')


const sendEmail = async(option)=>{
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "08a11853132a9c",
            pass: "c59bf12e778907"
        }
    });

    const mailOption = {
        from:'nimamahini81@gmail.com',
        to:option.email,
        subjecy:'test',
        text:'test',
        html:`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Document</title>
        
            <style>
        .main{
            border: 1px solid black;
            width: max-content;
            height: max-content;
            margin: 4rem auto;
            padding: 2rem 6rem;
            background-color: #333;
        }
        .title{
            color: white;
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 1rem;
        }
        
        .btn{
            margin: 1rem 9rem;
            padding: .5rem 1rem;
            background-color: rgb(95, 228, 95);
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }
        
        .btn a{
            text-decoration: none;
            color: black;
        }
            </style>
        </head>
        <body>
                <div class="main" >
                    <h3 class="title">click the below button to reset your password</h3>
                    <button class="btn"><a href="http://localhost:3000/pass-recovery">click here!</a></button>
                </div>
                
        </body>
        </html>`
    }

    await transport.sendMail(mailOption)
}



module.exports = {sendEmail}