import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createFetch } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const searchForm = document.querySelector(".search-form");
const galleryList = document.querySelector(".gallery")
const loader = document.querySelector(".loader")

searchForm.addEventListener("submit", handleClick);

function handleClick(event) {
    event.preventDefault();
    loader.classList.toggle('isHiden');
    
    let searchValue = searchForm.elements[0].value.trim();
    if (!searchValue) {
        loaderToggle();
        return iziToast.error({
            position: "topRight",
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
    }
    createFetch(searchValue)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
        .then(data => {
            if (data.hits.length === 0) {
                return iziToast.error({
                    position: "topRight",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            }
            let gallery = new SimpleLightbox('.gallery a', {
                captionsData: "alt",
                captionDelay: 250,
                captionClass: 'text-center'
            });
            
            galleryList.innerHTML = createMarkup(data.hits);
            gallery.refresh();
            
        })
        .catch(err => iziToast.error({
                    position: "topRight",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                }))
        .finally(() => {
            searchForm.elements[0].value = "";
            loaderToggle();
        })
}

function loaderToggle() {
    loader.classList.toggle('isHiden');
}


