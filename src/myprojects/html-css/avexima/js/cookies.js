const cookieBtn = document.querySelector('.cookies-btn')
const cookieModal = document.querySelector('.modal__cookies')

function hideCookies(){
    cookieBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        cookieModal.classList.add('cookies-hide')
    })
}

hideCookies()