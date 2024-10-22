// убрать пробел в заголовке 
const manufactureHeader = document.querySelector('.manufacture__project-red-bg-header-four')
function changeTextManufactureHeader(){  
    if  (document.body.clientWidth <=920 || window.width <=920) {
        manufactureHeader.textContent = `${manufactureHeader.textContent.slice(0, 33)}${manufactureHeader.textContent.slice(34)}`
    }
} 

changeTextManufactureHeader()

// Синий футер на мобилке убрали из дизайна
// const footerMobile = document.querySelector('.footer')
// const footerMobilePhoto = document.querySelector('.footer__photo')


// function changeFooterTheme(){
//     if  (document.body.clientWidth <=375 || window.width <=375) {
//         footerMobile.classList.add('footer-mobile')
//         footerMobilePhoto.setAttribute('src', '/icons/mainpage/avexima-logo.svg')
//     }
// }
// changeFooterTheme()




const leftMenuList = document.querySelectorAll('#manufacture li')
const leftMenuLink = document.querySelectorAll('#manufacture a')

if (document.body.clientWidth > 1400 || window.width > 1400) {
    // Смена активного пункта меню
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
        if (window.pageYOffset < 2800) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[0])
            addClass(leftMenuLink[0])
        }
        if (window.pageYOffset >= 2800 && window.pageYOffset < 3900) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[1])
            addClass(leftMenuLink[1])
        }
        if (window.pageYOffset >= 3900 && window.pageYOffset < 5000
            ) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[2])
            addClass(leftMenuLink[2])
        }

        if (window.pageYOffset >= 5200) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[3])
            addClass(leftMenuLink[3])
        }

        if (window.pageYOffset >= 6200) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[4])
            addClass(leftMenuLink[4])
        }
    })
    
}
changeActiveMenuItem()
}


