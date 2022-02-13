import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const imageMarkup = createImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);

galleryContainer.addEventListener('click', onGallaryContainerClick)

console.log(galleryItems);
console.log(createImagesMarkup(galleryItems));

function createImagesMarkup(items) {
  
    return items.map(({preview, original, description})=> {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    }).join('');

}

function onGallaryContainerClick(event) {
    
    
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(event.target.dataset.source);
    event.preventDefault()
    modalShow(event.target.dataset.source);
}

let instance;
function modalShow(src) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:80vh; display:block"></img>
    </div>
`,
    {
      onShow: instance => {
        openModalImg();
      },
      onClose: instance => {
        closeModalImg()
      
      },
    },
  );
  instance.show();
};
function openModalImg() {
  window.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function closeModalImg() {
    window.removeEventListener('keydown', onEscKeyPress);
}


