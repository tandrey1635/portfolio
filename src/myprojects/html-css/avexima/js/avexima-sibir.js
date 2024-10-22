// добавить бр на мобилке
const aveximaText = document.querySelectorAll('.avexima-sibir__text')
function changeTextAvexima(){  
    if  (document.body.clientWidth <=375 || window.width <=375) {
            aveximaText.forEach(text=>{
                text.innerHTML =  `${text.textContent.slice(0, 16)} <br> ${text.textContent.slice(16)}`
            })
    }
} 

changeTextAvexima()