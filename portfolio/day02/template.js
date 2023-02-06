import { customRegistrationNumber } from "../day01/module.js";

const createTemplate=({username, email, reginumber, phonenumber, site})=>{
    if (username=== undefined || email === undefined || reginumber=== undefined || phonenumber=== undefined || site=== undefined) {} else {     
        return `
            <html>
                <body>
                    <h1>${username}님 가입을 환영합니다.</h1>
                    <hr />
                    <div>이메일 : ${email}</div>
                    <div>주민번호 : ${reginumber}</div>
                    <div>휴대폰 번호 : ${phonenumber}</div>
                    <div>내가 좋아하는 사이트 : ${site}</div>
                </body>
            </html>
            ` 
    }
}

const checkValidation_Email=(email)=>{
    const check1=email.includes("@")
    const check2=email.split("@")
    if (check1&&check2) {
        return true;
    } else { return false; }
}

const checkValidation_phonenumber=(phonenumber)=>{
    const check=phonenumber.split("-")
    switch (true) {
        case (check.length === 3) :
            if ((check[1].length === 3)&&(phonenumber.length === 10)) {
                return true;
            } else if ((check[1].length === 4)&&(phonenumber.length === 11)) {
                return true;
            }
            break;
        default :
            return false;
    }
}

const entryUser=(username, email, reginumber, phonenumber, site)=>{
    reginumber=customRegistrationNumber(reginumber)
    email=checkValidation_Email(email)
    phonenumber=checkValidation_phonenumber(phonenumber)
    if (reginumber&&email&&phonenumber) {
        const user = {
            username,
            email,
            reginumber,
            phonenumber,
            site,
        }
        return user
    } else {
        if (!email) {
            console.log('잘못된 값을 입력했습니다. : 이메일');
            return false;
        } 
        else if (!phonenumber) {
            console.log('잘못된 값을 입력했습니다. : 전화번호');
            return false;
        }
    }
}

const user = entryUser('코드캠프','support@codecbootdcamp.co.kr','210510-1063311','000-0000-0000','codebootcamp.co.kr')
console.log(createTemplate(user))


