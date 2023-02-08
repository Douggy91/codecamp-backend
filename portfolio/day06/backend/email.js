import { getToday } from "./utils.js";
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()


export const checkValidationEmail=(email)=>{
    if (email === undefined || !email.includes('@')) {
        console.log('정확한 이메일 주소를 입력해주세요');
        return false;
    } else {
        return true;
    }
}

export const getWelcomeTemplate=({name, phone, preferSite})=>{
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름 : ${name}</div>
                <div>전화번호 : ${phone}살</div>
                <div>좋아하는 사이트 : ${preferSite}</div>
                <div>가입일 : ${getToday()}</div>
            </body>
        </html>
    `   
}

export async function sendWelcomeTemplateToEmail(email, template) {
    const MAIL_USER = process.env.MAIL_USER
    const MAIL_SENDER = process.env.MAIL_SENDER
    const MAIL_PASS = process.env.MAIL_PASS 
    const transPorter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: MAIL_USER,
            pass: MAIL_PASS,
        }
    })
    const result = await transPorter.sendMail({
        from: MAIL_SENDER,
        to: email,
        subject: "welcome~!! 가입을 축하합니다!!!",
        html: template,
    })
    // console.log(result)
    // console.log(`${email}로 템플릿 ${template}를 전송합니다.`)
}