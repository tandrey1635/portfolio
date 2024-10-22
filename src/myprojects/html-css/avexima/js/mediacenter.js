const newsText = document.querySelectorAll('.mediacenter__page__news__text')
const eventText = document.querySelectorAll('.mediacenter__page__events__text')


function trimText(text){
    text.forEach(text=>{
        text.textContent = `${text.textContent.slice(0, 200) + ''}`
    })
}

trimText(newsText)
trimText(eventText)


// Дроп меню новостей и галереи
const filters = document.querySelector('[data-set="filters"]')
const filtersGallery = document.querySelector('[data-set="filters-gallery"]')
const dropMenu = document.querySelector('.drop-down__filters__menu')
const dropMenuGallery = document.querySelector('.drop-down__filters__menu-gallery')

function showMenu(filter, menu){
    filter.addEventListener('click', ()=>{
        menu.classList.toggle('active-drop-menu')

        if (menu.classList.contains('active-drop-menu')) {
            filter.classList.add('filter-active') 
        }
        else{
            filter.classList.remove('filter-active') 
        }
        
    })
}
    
showMenu(filters, dropMenu)
showMenu(filtersGallery, dropMenuGallery)

 
// Табы мероприятия
const tabsNews = document.querySelectorAll('.mediacenter__page__item-news')
const tabsItemsNews = document.querySelectorAll('.mediacenter__page__events__block__items-division')
// Табы галереи слайдер
const tabsGallery = document.querySelectorAll('.mediacenter__page__item-gallery')
const tabsItemsGallery = document.querySelectorAll('.mediacenter__page__gallery__block__items-division')

// Табы галереи
const tabsMainGallery = document.querySelectorAll('.mediacenter__page__gallery__tabs')
const tabsMainGalleryItem = document.querySelectorAll('.mediacenter__page__gallery__main-gallery__block-items')


function changeTabs(tabsItems, tabs, classNameTab){
    function hideTabs(){
        tabsItems.forEach(tabsItem => {
            tabsItem.classList.add('hide-tabs')
        })
        tabs.forEach(tab => {
            tab.classList.remove(classNameTab)
        })
    
    }
    hideTabs()
    
    
    function showTabs(i = 0){
        tabsItems[i].classList.remove('hide-tabs')
        tabs[i].classList.add(classNameTab)
    }
    
    showTabs()

    tabs.forEach((tabsItem,i) => {
        tabsItem.addEventListener('click', (e)=>{
            if (e.target == tabsItem) {
                hideTabs()
                showTabs(i)
            }
        })
    })
}

changeTabs(tabsItemsNews, tabsNews, 'tab-active')
changeTabs(tabsItemsGallery, tabsGallery, 'tab-active')
changeTabs(tabsMainGalleryItem, tabsMainGallery, 'main-gallery-tabs-active')



// Слайдер сверху галерея
const gallerySwiperTopNoPrescriptionDivision = new Swiper('.mediacenter__page__gallery__swiper-top' , {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    navigation: {
        prevEl: '.mediacenter__page__gallery__left-no-prescription-division',
        nextEl: '.mediacenter__page__gallery__right-no-prescription-division',
    },
    breakpoints: {
        375: {
          slidesPerView: 1,
        },
    }   
      
});

const gallerySwiperTopPrescriptionDivision = new Swiper('.mediacenter__page__gallery__swiper-bottom' , {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    navigation: {
        prevEl: '.mediacenter__page__gallery__left-prescription-division',
        nextEl: '.mediacenter__page__gallery__right-prescription-division',
    },
    breakpoints: {
        375: {
          slidesPerView: 1,
        },
    }        
});


// Fancybox
Fancybox.bind("[data-fancybox]", {
    Thumbs: false,     
    contentClick: "iterateZoom",
    Images: {
        Panzoom: {
            maxScale: 2,
        },
        initialSize: 'cover'
    },
});


const leftMenuList = document.querySelectorAll('#mediacenter li')
const leftMenuLink = document.querySelectorAll('#mediacenter a')

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
        if (window.pageYOffset < 2500) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[0])
            addClass(leftMenuLink[0])
        }
        if (window.pageYOffset >= 2500 && window.pageYOffset < 3250) {
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[1])
            addClass(leftMenuLink[1])
        }
        if (window.pageYOffset >= 3250){
            removeClass(leftMenuList)
            removeClass(leftMenuLink)
            addClass(leftMenuList[2])
            addClass(leftMenuLink[2])
        }

    })
    
}
    changeActiveMenuItem()
}
