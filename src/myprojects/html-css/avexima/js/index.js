const body = document.querySelector('body')


const header = document.querySelector('.header')
const headerLogo = document.querySelector('.header__logo')
const headerPhoto = document.querySelectorAll('.header__photo')
const headerText = document.querySelector('.header__text')
const aveximaLogo = document.querySelector('.header__logo__scroll-resizer')


// Фиксированный логотип при прокрутке
function scrollMainLogo(){
    window.addEventListener('scroll', ()=>{
        if (window.pageYOffset > 200) {
            aveximaLogo.classList.add('header__logo__scroll-resizer-active')
            headerLogo.classList.add('header__logo-active')
            headerText.classList.add('header__text-active')
        }  else{
            aveximaLogo.classList.remove('header__logo__scroll-resizer-active')
            headerLogo.classList.remove('header__logo-active')
            headerText.classList.remove('header__text-active')
        }
    })
}

scrollMainLogo()


// Убрать <br> блок карьера    
const careerHeader = document.querySelector('.career__header')

function removeCareerHeaderTagBr(){  
    if  (body.clientWidth <=991 || window.width <=991) {
            careerHeader.innerHTML = careerHeader.textContent 
        }
    } 
removeCareerHeaderTagBr() 

// Добавить <br> блок препараты  
const preparationHeader = document.querySelector('.preparations__header')

function addPreparationHeaderTagBr(){  
    if  (body.clientWidth <=375 || window.width <=375) {
        preparationHeader.innerHTML = `${preparationHeader.textContent.slice(0, 90)} <br> ${preparationHeader.textContent.slice(90)}` 
    } 
}
addPreparationHeaderTagBr()

// Скролл слайдов изменение размера и жирности заголовка активному слайду блок productions
const productItems = document.querySelectorAll('.production__items')
const productHeaders = document.querySelectorAll('.production__header')
const productInfo = document.querySelector('.production__info')

// Изменить стиль заголовка на жирный у ховер элемента
function rollSlideStart(){
    productItems.forEach((productHeader, i)=>{
        productHeader.addEventListener('mouseenter', (e)=>{
            if (e.target == productHeader) {
                hide()
                show(i)
            }   
        })
    })
}
rollSlideStart()

// Вернуть стандартные стили
function rollSlideEnd(){
    productItems.forEach((productHeader)=>{
        productHeader.addEventListener('mouseout', ()=>{
            setDefaultStyle()
        })
    })
    function setDefaultStyle(){
        productHeaders.forEach(header=>{
            header.classList.remove('active-slide-fw')
            header.classList.remove('active-slide')
        })
    }
}

rollSlideEnd()




function hide(){
    productHeaders.forEach(header=>{
        header.classList.add('active-slide')
        header.classList.remove('active-slide-fw')
    })
}

function show(i){
    productHeaders[i].classList.remove('active-slide')
    productHeaders[i].classList.add('active-slide-fw')
}




// Плавное появление заголовка в 1 item блок productions
function addTransitionHeader(item, header, delay) {
    item[0].addEventListener('mouseenter', ()=>{
        setTimeout(() => {
            header.classList.add('scroll-right')
        }, delay);
       
    })
}
addTransitionHeader(productItems, productInfo, 300)


// Плавное появление заголовка в 1 item блок productions удалить класс
function removeTransitionHeader(item, header) {
    item[0].addEventListener('mouseleave', ()=>{
        header.classList.remove('scroll-right')
    })
}

removeTransitionHeader(productItems, productInfo)






