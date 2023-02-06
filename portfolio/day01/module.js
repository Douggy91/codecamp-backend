export const transRegiNumber=(regiNumber)=>{
    const regiNumberArray = regiNumber.split("-");
    const openNumber = regiNumberArray[0];
    const closeNumber = String(regiNumberArray[1][0]).padEnd(regiNumberArray[1].length,"*");
    const securedNumber = `${openNumber}-${closeNumber}`
    return securedNumber;
}

export const reginumberValidation1=(regiNumber)=>{
    const regiNumberArray = regiNumber.split('-');
    if (regiNumberArray.length !== 2) {
        return false;
    } else { return true; }
}

export const reginumberValidation2=(regiNumber)=>{
    const regiNumberArray = regiNumber.split('-');
    if (regiNumberArray[0].length !== 6 || regiNumberArray[1].length !== 7) {
        return false;
    } else { return true; }
}

export const customRegistrationNumber=(regiNumber)=>{
    const isVal_1 = reginumberValidation1(regiNumber); 
    const isVal_2 = reginumberValidation2(regiNumber); 
    if (!isVal_1) {
        // console.log('에러 발생!!! 형식이 올바르지 않습니다!!!')
        return '에러 발생!!! 형식이 올바르지 않습니다!!!'
    } else if (!isVal_2){
        // console.log('에러 발생!!! 개수를 제대로 입력해 주세요!!!')
        return '에러 발생!!! 개수를 제대로 입력해 주세요!!!'
    } else if (isVal_1 && isVal_2) {
        const securedNumber = transRegiNumber(regiNumber);
        // console.log(securedNumber);
        return securedNumber;
    } 
}
