// Смена активного пункта меню
const leftMenuList = document.querySelectorAll('#scientific li')
const leftMenuLink = document.querySelectorAll('#scientific a')

if (document.body.clientWidth > 1400 || window.width > 1400) {

    function changeActiveMenuItem(){
        
        function removeClass(item) {
            item.forEach(item=>{
                item.classList.remove('active')
            })
        }

        function addClass(item) {
            item.classList.add('active')
        }

        document.addEventListener('scroll', ()=>{
            if (window.pageYOffset < 1320) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[0])
                addClass(leftMenuLink[0])
            }
            
            if (window.pageYOffset >=2160 && window.pageYOffset < 4140) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[1])
                addClass(leftMenuLink[1])
            }

            if (window.pageYOffset >= 4140) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[2])
                addClass(leftMenuLink[2])
            }
            if (window.pageYOffset >= 5495) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[3])
                addClass(leftMenuLink[3])
            }
        })
        
    }
    changeActiveMenuItem()

   
}

// сменить цвет языковой панели
const divisionBlockLang = document.querySelector('.divisions-top-lang-mobile')

function changeLangColor(){
    if (document.body.clientWidth <=991 || window.width <=991) {
        divisionBlockLang.classList.remove('release__block-lang')
    
    }
}
changeLangColor()