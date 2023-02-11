// 휴대폰 인증 토큰 전송하기
let phone="";


const getValidationNumber = async () => {
  const PhoneArray = document.querySelectorAll('[id^=PhoneNumber]')
  for(i=0;i<PhoneArray.length;i++){
    phone = phone + PhoneArray[i].value
  }
  axios.post('http://localhost:3000/tokens/phone', {phone: phone})
    .then()
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const token = document.querySelector('#TokenInput').value
  axios.patch('http://localhost:3000/tokens/phone', {phone: phone, token: token})
    .then((res)=>{
      if (res.date === true) {
        document.querySelector('.NumberVailidationBtn').disabled = true
      }
    })
  console.log('핸드폰 인증 완료')
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const element=document.querySelectorAll('.SignupInput')
  const user = {
    name : element[0].value,
    personal : `${element[1].value}-${element[2].value}`,
    phone : `${element[3].value}${element[4].value}${element[5].value}`,
    prefer : element[6].value,
    email  : element[7].value,
    pwd : element[8].value,
  }
  axios.post('http://localhost:3000/users', user)
    .then(res=>console.log(res))
  
  console.log('회원 가입 완료')
}
