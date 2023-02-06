const nowDate=()=>{
    const now = new Date()
    const yyyy = now.getFullYear()
    const mm = String(now.getMonth() + 1).padStart(2,"0")
    const dd = String(now.getDate()).padStart(2,"0")
    const hour = String(now.getHours()).padStart(2,"0")
    const min = String(now.getMinutes()).padStart(2,"0")
    const sec = String(now.getSeconds()).padStart(2,"0")

    return `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec}입니다.`
}

console.log(nowDate())