// Смена скролящегося меню
const leftMenuRoll = document.querySelector('[data-set="hide"]')
const leftMenuFullscreen = document.querySelectorAll('[data-set="remove"]')
const sectionWrapper = document.querySelector('.section__wrapper')

const leftMenuList = document.querySelectorAll('#history li')
const leftMenuLink = document.querySelectorAll('#history a')

if (document.body.clientWidth > 1400 || window.width > 1400) {
    function rollMenu(){
        document.addEventListener('scroll', ()=>{
            if (window.pageYOffset < 8900){
                leftMenuRoll.classList.remove('active')
                leftMenuFullscreen.forEach(item=>{
                    item.classList.remove('active')
                })
                sectionWrapper.classList.remove('active')
            }
    
            if (window.pageYOffset > 9550 && window.pageYOffset < 12850){
                leftMenuRoll.classList.add('active')
                leftMenuFullscreen.forEach(item=>{
                    item.classList.add('active')
                })
                sectionWrapper.classList.add('active')
            }
        
            if (window.pageYOffset > 12850){
                leftMenuRoll.classList.remove('active')
                leftMenuFullscreen.forEach(item=>{
                    item.classList.add('active')
                })
                sectionWrapper.classList.remove('active')
            }
        })
    }
    rollMenu()
    
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
            if (window.pageYOffset < 12850) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[0])
                addClass(leftMenuLink[0])
            }
            if (window.pageYOffset >= 12850 && window.pageYOffset < 17200) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[2])
                addClass(leftMenuLink[2])
            }
            if (window.pageYOffset >= 17200 && window.pageYOffset < 20100) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[3])
                addClass(leftMenuLink[3])
            }
            if (window.pageYOffset >= 20100) {
                removeClass(leftMenuList)
                removeClass(leftMenuLink)
                addClass(leftMenuList[4])
                addClass(leftMenuLink[4])
            }
        })
        
    }
    changeActiveMenuItem()
}