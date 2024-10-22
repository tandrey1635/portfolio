// Смена фотки на мобилке по дизайну такая
const img = document.querySelector('.fabric__img img')
function changeImg(){  
    if  (document.body.clientWidth <=375 || window.width <=375) {
        img.setAttribute('src', '../img/fabric-img-mobile.jpg')
    }
} 

changeImg()

// Смена активного пункта меню
const leftMenuList = document.querySelectorAll('#fabric li')
const leftMenuLink = document.querySelectorAll('#fabric a')

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
            if (window.pageYOffset < 2240) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[0])
                addClass(leftMenuLink[0])
            }
            
            if (window.pageYOffset >=3300 && window.pageYOffset < 4300) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[1])
                addClass(leftMenuLink[1])
            }

            if (window.pageYOffset >= 4400) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[2])
                addClass(leftMenuLink[2])
            }
        })
        
    }
    changeActiveMenuItem()

   
}