const blockModal = document.querySelector('.modal__block__medics')

// Запрет прокрутки пока модалка активна
function changeOverflow(){
    document.body.style.overflow = 'hidden'
}

// Скрыть модалку
function hideModal(){
    blockModal.addEventListener('click', (e)=>{
        e.preventDefault()
        if (e.target.classList.contains('modal__medics__close') || e.target.classList.contains('modal__medics__btn-yes')) {
            blockModal.classList.add('hide-modal')
            document.body.style.overflow = ''
        }
        else if(e.target.classList.contains('modal__medics__btn-no')){
            document.location = '../index.html'
        }
        
    })
}

changeOverflow()
hideModal()
