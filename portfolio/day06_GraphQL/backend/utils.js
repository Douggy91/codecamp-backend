const date = new Date()

date.getFullYear();         // 연도를 반환합니다.
date.getMonth();            // 월을 반환합니다. 0(월)부터 시작하므로 주의하세요!
date.getDate();             // 일을 반환합니다.
date.getDay();              // 요일을 반환합니다.(일요일: 0)
date.getHours();            // 시를 반환합니다.
date.getMinutes();          // 분을 반환합니다.
date.getSeconds();          // 초를 반환합니다.
date.getMilliseconds();     // 밀리초를 반환합니다.

export const getToday=()=>{
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2,"0")
    const dd = String(date.getDate()).padStart(2,"0")

    return `${yyyy}-${mm}-${dd}`
}

console.log(getToday())