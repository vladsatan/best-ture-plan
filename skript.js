import cardsInfo from './cards.js'

const root = document.getElementById('root')

const createCard = (obj) =>{

    //Создание елементов

    const container = document.querySelector('.container_for_card')
    const card = document.createElement('div')
    const imgOfCard = document.createElement('img')
    const cardInfo = document.createElement('div')
    const cardInfoTitle = document.createElement('h2')
    const textContent1 = document.createElement('div')
    const textContent2 = document.createElement('div')
    const textContent3 = document.createElement('div')
    const cardLogo1 = document.createElement('img')
    const cardLogo2 = document.createElement('img')
    const cardLogo3 = document.createElement('img')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const pastPrise = document.createElement('div')
    const newprise = document.createElement('div')
    const button =  document.createElement('button')
    const FlashOffer = document.createElement('div')

    


    
    const newContainer = document.createElement('div')
    const cardInfoContainer = document.createElement('div')
    const newCardInfoTitle = document.createElement('h2')
    const newTextContent1 = document.createElement('div')
    const newTextContent2 = document.createElement('div')
    const newTextContent3 = document.createElement('div')
    const newCardLogo1 = document.createElement('img')
    const newCardLogo2 = document.createElement('img')
    const newCardLogo3 = document.createElement('img')
    const newP1 = document.createElement('p')
    const newP2 = document.createElement('p')
    const newP3 = document.createElement('p')
    const newP4 = document.createElement('p')
    const newPastPrise = document.createElement('div')
    const newNewprise = document.createElement('div')
    const newButton =  document.createElement('button')
    const aboutInfo = document.createElement('p')
    const starContainer = document.createElement('div')
    const star = document.createElement('img')
    const star2 = document.createElement('img')
    const star3 = document.createElement('img')
    const star4 = document.createElement('img')
    const star5 = document.createElement('img')

    newCardInfoTitle.classList.add('newCardInfoTitle')
    newTextContent1.classList.add('text-content')
    newTextContent2.classList.add('text-content')
    newTextContent3.classList.add('text-content')
    newCardLogo1.classList.add('card-logo')
    newCardLogo2.classList.add('card-logo')
    newCardLogo3.classList.add('card-logo')
    newPastPrise.classList.add('newPastPrise')
    newNewprise.classList.add('newprise')
    newButton.classList.add('book-button')
    aboutInfo.classList.add('aboutInfo')
    starContainer.classList.add('starContainer')
    star.classList.add('star')
    star2.classList.add('star')
    star3.classList.add('star')
    star4.classList.add('star')
    star5.classList.add('star')

    newCardInfoTitle.textContent = obj.title
    newCardLogo1.src = './logo/locations.svg'
    newCardLogo2.src = './logo/user.svg'
    newCardLogo3.src = './logo/home.svg'
    newP1.textContent = obj.location
    newP2.textContent = obj.guests
    newP3.textContent = obj.room
    newP4.textContent = obj.prise
    newButton.textContent = 'Book Now'
    newPastPrise.textContent = obj.pastPrise
    newNewprise.textContent = obj.newprise
    aboutInfo.textContent = 'Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit. Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit ea ullamco do'
    star.src = './logo/stars.svg'
    star2.src = './logo/stars.svg'
    star3.src = './logo/stars.svg'
    star4.src = './logo/stars.svg'
    star5.src = './logo/stars.svg'

    


    
    
    
    
    //Назначение класса

    container.classList.add('container_for_card')
    card.classList.add('card')
    imgOfCard.classList.add('card-img')
    cardInfo.classList.add('card-info')
    cardInfoTitle.classList.add('card-info-title')
    textContent1.classList.add('text-content')
    textContent2.classList.add('text-content')
    textContent3.classList.add('text-content')
    cardLogo1.classList.add('card-logo')
    cardLogo2.classList.add('card-logo')
    cardLogo3.classList.add('card-logo')
    pastPrise.classList.add('past-prise')
    newprise.classList.add('newprise')
    button.classList.add('book-button')
    FlashOffer.classList.add('Flash_Offer')
    newContainer.classList.add('newContainer')
    

    

   //Text Content

   imgOfCard.src = obj.photo
   cardInfoTitle.textContent = obj.title
   cardLogo1.src = './logo/locations.svg'
   cardLogo2.src = './logo/user.svg'
   cardLogo3.src = './logo/home.svg'
   p1.textContent = obj.location
   p2.textContent = obj.guests
   p3.textContent = obj.room
   p4.textContent = obj.prise
   button.textContent = 'Book Now'
   FlashOffer.textContent = 'Flash Offer'
   pastPrise.textContent = obj.pastPrise
   newprise.textContent = obj.newprise

   //Appendes
   newContainer.append(card,cardInfoContainer)
   container.append(newContainer)
   card.append(imgOfCard, cardInfo, FlashOffer)
   cardInfo.append(cardInfoTitle,textContent1,textContent2,textContent3,pastPrise,newprise)
   textContent1.append(cardLogo1,p1)
   textContent2.append(cardLogo2,p2)
   textContent3.append(cardLogo3,p3)
   newprise.append(button)
   
   



   newContainer.addEventListener('mouseenter',()=>{
      imgOfCard.classList.remove('card-img')
      imgOfCard.classList.add('card-img-active')
      cardInfoContainer.classList.add('cardInfoContainer')
      cardInfoTitle.remove()
    textContent1.remove()
    textContent2.remove()
    textContent3.remove()
    cardLogo1.remove()
    cardLogo2.remove()
    cardLogo3.remove()
    pastPrise.remove()
    newprise.remove()
    button.remove()
    cardInfoContainer.append(starContainer,newCardInfoTitle,aboutInfo,newTextContent1,newTextContent2,newTextContent3,newPastPrise,newNewprise)
    newTextContent1.append(newCardLogo1,newP1)
    newTextContent2.append(newCardLogo2,newP2)
    newTextContent3.append(newCardLogo3,newP3)
    newNewprise.append(newButton)
    starContainer.append(star,star2,star3,star4,star5)
   })

   
   
   
   newContainer.addEventListener('mouseleave',()=>{
      imgOfCard.classList.remove('card-img-active')
      imgOfCard.classList.add('card-img')
      cardInfoContainer.classList.remove('cardInfoContainer')
      cardInfo.append(cardInfoTitle,textContent1,textContent2,textContent3,pastPrise,newprise)
      newprise.append(button)
      newCardInfoTitle.remove()
      newTextContent1.remove()
      newTextContent2.remove()
      newTextContent3.remove()
      newPastPrise.remove()
      newNewprise.remove()
      aboutInfo.remove()
      starContainer.remove()
   })
}

const showCards = (array) => {
   array.forEach(element => {
    createCard(element)
   })
}

showCards(cardsInfo)


const modalWind = (obj)=>{

   const window = document.createElement('div')
   const title = document.createElement('div')
   const namebox = document.createElement('div')
   const numberbox = document.createElement('div')
   const massagebox = document.createElement('div')
   const close = document.createElement('div')

   window.classList.add('modalWind')
   title.classList.add('modal-title')
   namebox.classList.add('namebox')
   numberbox.classList.add('numberbox')
   massagebox.classList.add('massagebox')
   close.classList.add('close-modal')

   title.textContent = obj.messSend()
  namebox.textContent = `Name: ${obj.userName}`
  numberbox.textContent = `Number: ${obj.userNumber}`
  massagebox.textContent = `Message: ${obj.userMess}`
  close.textContent = 'x'

  window.append(title,namebox,numberbox,massagebox,close)
  root.append(window)

  close.addEventListener('click',()=>{
   window.remove()
  })
}




 
 const sendBtn = document.getElementById('sendBtn')

 sendBtn.addEventListener('click', ()=>{
 let name = document.getElementById('name').value
 let phone = document.getElementById('phone').value
 let message = document.getElementById('massage').value
 const errorBox = document.getElementById('error-input')
 const errorMassage = document.getElementById('error-input2')

if (name.length < 2 || isNaN(name)==false){return errorBox.textContent = 'invalid name format'}else{errorBox.textContent = ''}
if (phone.length<10 || isNaN(phone)== true){return errorBox.textContent = 'invalid number format'}else{errorBox.textContent = ''}
if(message.length < 5){return errorMassage.textContent = 'You need to wright something...'} else {errorMassage.textContent = ''}


let userMessage = {
   userName: name,
   userNumber: phone,
   userMess: message,

   messSend(){
   let windMessage = `${this.userName}, your message has been sent successfully`
   return windMessage
   }
}

modalWind(userMessage);

document.getElementById('name').value = ""
document.getElementById('phone').value = ""
document.getElementById('massage').value = ""

})