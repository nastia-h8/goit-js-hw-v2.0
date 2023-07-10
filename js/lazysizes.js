/* .blur-up {
  filter: blur(5px);
  transition: filter 400ms;
}

.blur-up.lazyloaded {
  filter: blur(0);
} */


// .appear{
//   transform: translateX(-50%);
//   opacity: 0;
//   transition: all 500ms linear;
//   object-fit: cover;
// }

// .lazyloaded.appear{
//   transform: translateX(0);
//   opacity: 1;
// }

// src="https://via.placeholder.com/960"


// для нативного loading="lazy" свої налаштування
// const lazyImg = document.querySelectorAll('img.blur-up')

// lazyImg.forEach(img => {
//     img.addEventListener('load', onImgLoad, {once:true})
// })

// function onImgLoad(evt) {
//     console.log('loaded');
//     evt.target.classList.add('lazyloaded');
// }

//--------------------------------------- lazy loading + feature detection---------------------------------------//
if ('loading' in HTMLImageElement.prototype) {
    console.log('підтримує lazy loading');
    addSrcAttrToLazyImg();
} else {
    console.log('не підтримує lazy loading');  
    addLazySizesScript();
}

function addLazySizesScript() {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
    script.referrerpolicy = "no-referrer";

    document.body.appendChild(script)
}

function addSrcAttrToLazyImg() {
    const lazyImg = document.querySelectorAll('img.blur-up')
    lazyImg.forEach(img => {
        img.src = img.dataset.src;
    })
}