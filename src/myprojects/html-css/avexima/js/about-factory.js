// Убрать пробел в заголовке не помещается при др разрешение
const aboutFactoryHeader = document.querySelectorAll('[data-trim="about__factory__header"]')

function trimAboutFactoryHeader(){
    if  (document.body.clientWidth <=700 || window.width <=700) {
        aboutFactoryHeader.forEach(header=>{
            header.innerHTML = `21500<span class="about__factory__span">м<sup>2</sup></span>`
        })
    }
}
trimAboutFactoryHeader()
