import coolsms from "coolsms-node-sdk"
import dotenv from 'dotenv'

dotenv.config()


export function checkValidationPhone(myphone) {
    if (myphone.length !== 10 && myphone.length !== 11) {
        console.log('핸드폰 번호를 제대로 입력해주세요.')
        return false
    } else { return true
    } 
}


export function getToken(count) {
    switch (true) {
        case (count<4) : console.log("자릿 수가 너무 작습니다.")
            break
        case (count>8) : console.log("자릿 수가 너무 많습니다.")
            break
        default : 
            const result = String(Math.floor(Math.random()*(10**count))).padStart(count,"0")
            return result
    }
}

export async function sendTokenToSMS(myphone, token){
    // const SMS_KEY = process.env.SMS_KEY
    // const SMS_SECRET = process.env.SMS_SECRET
    // const SMS_SENDER = process.env.SMS_SENDER

    // const mysms = coolsms.default 
    // const messageService = new mysms(SMS_KEY, SMS_SECRET)
    // const result = await messageService.sendOne({ // 한 명일 땐 객체, 여럿일 때는 배
    //         to: myphone,
    //         from: SMS_SENDER,
    //         text: `인증번호는 ${token} 입니다.`
    // })
    console.log(result) //await가 없으면 promise<{pending}>이 반환될 것
    console.log(`${myphone} 으로 인증번호 ${token} 을 전송합니다.`) 
}
