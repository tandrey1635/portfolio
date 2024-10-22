const tabsBlock = document.querySelector('.preparation__page__menu')
const tabsBlockMobile = document.querySelector('.preparation__page__menu-mobile')
const tabsItems = document.querySelectorAll('.preparation__page__item')
const tabs = document.querySelectorAll('.preparation__page__list')


function changeTabs(tabsItem){
    tabsItem.addEventListener('click', (e)=>{
        if(e.target.classList.contains('all')){
            hideTabs()
            showTabs('all')
        }
        if(e.target.classList.contains('virology')){
            hideTabs()
            showTabs('virology')
        }
        if(e.target.classList.contains('gastroenterology')){
            hideTabs()
            showTabs('gastroenterology')
        }
        if(e.target.classList.contains('gynecology')){ 
           hideTabs()
           showTabs('gynecology')
        }
        if(e.target.classList.contains('cardiology')){
            hideTabs()
            showTabs('cardiology')
        }
        if(e.target.classList.contains('neurology')){
            hideTabs()
            showTabs('neurology')
        }
        if(e.target.classList.contains('rheumatology')){
            hideTabs()
            showTabs('rheumatology')
        }
        if(e.target.classList.contains('urology')){
            hideTabs()
            showTabs('urology')
        }
        if(e.target.classList.contains('therapy')){
            hideTabs()
            showTabs('therapy')
        }
    
    })
    
    
    function hideTabs(){
        tabsItems.forEach(tab=>{
            tab.classList.add('hide-tab')
        })
        tabs.forEach(tab=>{
            tab.classList.remove('active')
        })   
    }
    
    
    function showTabs(showClass){
        tabsItems.forEach(tab=>{
            if (tab.classList.contains(showClass)) {
                tab.classList.remove('hide-tab')
            } 
        })
        tabs.forEach(tab=>{
            if (tab.classList.contains(showClass)) {
                tab.classList.add('active')
            } 
        })
    }
}

changeTabs(tabsBlock)
changeTabs(tabsBlockMobile)

