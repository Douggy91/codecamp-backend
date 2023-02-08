// 휴대폰 인증 토큰 전송하기
let token;
let timelap;
const endpoint = 'http://localhost:3000';

const setTimer=()=>{
  let time = 60;  
  timelap = setInterval(()=>{
  if (time>=0){      
    let min = String(Math.floor(time/60)).padStart(2,"0");
    let sec = String(Math.floor(time%60)).padStart(2,"0");
    let lastTime = `${min}:${sec}`;
    document.getElementById('LimitTime').textContent = lastTime;
    time = time -1;
  } else if (time <0) {
    clearInterval(timelap)
    document.getElementById('LimitTime').textContent = '인증이 만료되었습니다.';
    document.getElementById('NumberVailidationBtn').disabled = 'true';
  }
}, 1000)
}

const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
  const phoneArray = document.querySelectorAll(`[id^=PhoneNumber]`)
  let myphone='';
  for (i=0;i<phoneArray.length;i++){
    myphone+=phoneArray[i].value
  }
  const query = `mutation { 
    sendSMSToken(myphone:"${myphone}") 
  }`
  console.log(query)
  fetch(endpoint,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })   
  })
  .then(res=>res.json())
  .then((json)=>{
    console.log(json.data.sendSMSToken)
    token=json.data.sendSMSToken
  })
  setTimer()
}

const submitToken = () => {
  if (document.getElementById('TokenInput').value == token) {
    clearInterval(timelap);
    document.querySelectorAll('.NumberVailidationBtn')[1].innerText= '인증 완료';
    document.querySelectorAll('.NumberVailidationBtn')[0].disabled = 'true';
    document.querySelectorAll('.NumberVailidationBtn')[1].disabled = 'true';
    alert('인증이 완료되었습니다.');
  }
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const userArray = document.querySelectorAll('input')
  const user = {
    name : userArray[0].value,
    registNum : `${userArray[1].value}-${userArray[2].value}`,
    phone : `${userArray[3].value}${userArray[4].value}${userArray[5].value}`,
    preferSite : userArray[7].value,
    email : userArray[8].value,
    passwd : userArray[9].value,
  }
  const query = `mutation { sendEmailTemplate(
    name:"${user.name}",
    registNum: "${user.registNum}",
    phone: "${user.phone}",
    preferSite: "${user.preferSite}",
    email: "${user.email}",
    passwd: "${user.passwd}") }`
  fetch(endpoint,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
  .then(res=>res.json())
  .then((json)=>{
    console.log(json.data)
  })
  console.log('회원 가입 이메일 전송')
}

