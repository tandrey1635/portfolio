const showFancybox = () =>{
    Fancybox.bind('[data-fancybox="video-gallery"]', {
        Carousel: {
            transition: "slide",   
        },
        
    });
}


export { showFancybox }