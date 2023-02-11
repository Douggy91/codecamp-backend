// 커피 목록 조회 API를 요청해주세요.
const getCoffee = async () => {
  // 받은 데이터로 createMenuCard 함수를 이용해
  // 메뉴 카드를 만들어주세요.
  axios.get('http://localhost:3000/starbucks')
    .then((res)=>{
      const data=res.data
      console.log(data)
      for (i=0;i<data.length;i++) {
        createMenuCard(data[i])
      }
    })
  
}

const createMenuCard = (data) => {
  const menuCardWrapper = document.createElement('div')
  menuCardWrapper.className = 'Menu_Card_Wrapper'

  const menuCardImgBox = document.createElement('div')
  menuCardImgBox.className = 'Menu_Card_ImgBox'

  // 메뉴 이미지가 있으면 추가
  if (data?.image) {
    const imgEle = document.createElement('img')
    imgEle.src = data.image
    imgEle.className = 'Menu_Card_ImgBox'
    menuCardImgBox.appendChild(imgEle)
  }

  // 메뉴 이름
  const menuCardName = document.createElement('div')
  menuCardName.className = 'Menu_Card_Name'
  menuCardName.textContent = data?.name || '메뉴이름'

  // 메뉴 _id
  const menuCardInfo = document.createElement('div')
  menuCardInfo.className = 'Menu_Card_Info'
  menuCardInfo.textContent = data?._id || 'id'

  // 합체
  const menuWrapper = document.querySelector('#Menu_Background')
  menuCardWrapper.appendChild(menuCardImgBox)
  menuCardWrapper.appendChild(menuCardName)
  menuCardWrapper.appendChild(menuCardInfo)
  menuWrapper.appendChild(menuCardWrapper)
}
