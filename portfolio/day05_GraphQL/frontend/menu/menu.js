// 커피 목록 조회 API를 요청해주세요.
const getCoffee = () => {
  const endpoint = 'http://localhost:3000/'
  const query =`query { 
    coffeePlease {
      name kcal 
    }
  }`
  fetch(endpoint,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
    .then(res=>res.json())
    .then((json) => {
      dataArray = json.data.coffeePlease
      for(i=0;i<dataArray.length;i++){
        createMenuCard({
          name : dataArray[i].name,
          kcal : dataArray[i].kcal })
      }
    })
}    

  // 2. 받은 데이터로 createMenuCard 함수를 이용해 메뉴 카드를 모두 만들어주세요.
  // createMenuCard({ name: '아메리카노', kcal: 5 })

const createMenuCard = (data) => {
  const menuCardWrapper = document.createElement('div')
  menuCardWrapper.className = 'Menu_Card_Wrapper'

  const menuCardImgBox = document.createElement('div')
  menuCardImgBox.className = 'Menu_Card_ImgBox'

  const menuCardName = document.createElement('div')
  menuCardName.className = 'Menu_Card_Name'
  menuCardName.textContent = data?.name || '메뉴이름'

  const menuCardInfo = document.createElement('div')
  menuCardInfo.className = 'Menu_Card_Info'
  menuCardInfo.textContent = data?.kcal || '칼로리'

  const menuWrapper = document.querySelector('#Menu_Background')
  menuCardWrapper.appendChild(menuCardImgBox)
  menuCardWrapper.appendChild(menuCardName)
  menuCardWrapper.appendChild(menuCardInfo)
  menuWrapper.appendChild(menuCardWrapper)
}
