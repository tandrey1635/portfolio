const leftMenuList = document.querySelectorAll('#career li')
const leftMenuLink = document.querySelectorAll('#career a')

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
        if (window.pageYOffset < 1100) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[0])
            addClass(leftMenuLink[0])
        }
        if (window.pageYOffset >= 2120 && window.pageYOffset < 3500) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[1])
            addClass(leftMenuLink[1])
        }
        if (window.pageYOffset >= 3500){
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[2])
            addClass(leftMenuLink[2])
        }

    })
    
}
    changeActiveMenuItem()
}
