const nodemailer = require('nodemailer')


const sendEmail = async()=>{
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
        to:'test@gmail.com',
        subjecy:'test',
        text:'test',
        html:`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
            </style>
        </head>
        <body>
                <div class="main" >
                    <h3 class="title">click the below button to reset your password</h3>
                    <button class="btn">click here!</button>
                </div>
                <script>
                    let btn = document.querySelector('.btn')
                    btn.addEventListener('click' , ()=>{
                        window.open('http://localhost:3000/auth')
                    })
                </script>
        </body>
        </html>`
    }

    await transport.sendMail(mailOption)
}



module.exports = {sendEmail}