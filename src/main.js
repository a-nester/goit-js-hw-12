import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createFetch } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const searchForm = document.querySelector(".search-form");
const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".js-load-more");

searchForm.addEventListener("submit", handleClick);
loadBtn.addEventListener("click", handleLoadMore);
let page = 1;
let searchValue = "";

async function handleClick(event) {
    event.preventDefault();
    loaderToggle();
    
    searchValue = searchForm.elements[0].value.trim();
    if (!searchValue) {
        loaderToggle();
        return iziToast.error({
            position: "topRight",
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
    }
    await createFetch(searchValue, page)
        .then(({ data }) => {
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
            const totalPages = Math.ceil(data.totalHits/data.hits.length)
            if (page < totalPages) {
                loadBtn.classList.replace("load-more-hiden", "load-more")
            }
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

async function handleLoadMore() {
    loadBtn.classList.replace("load-more", "load-more-hiden")
    loaderToggle();
    page += 1;
    await createFetch(searchValue, page)
        .then(({ data }) => {
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
            
            galleryList.insertAdjacentHTML("beforeend", createMarkup(data.hits));
            gallery.refresh();
            const totalPages = Math.ceil(data.totalHits/data.hits.length)
    
            if (page < totalPages) {
                loadBtn.classList.replace("load-more-hiden", "load-more")
            } else {
                loadBtn.classList.replace("load-more", "load-more-hiden")
                return iziToast.error({
                    position: "topRight",
                    message: "We're sorry, but you've reached the end of search results.",
                });
            }
            
        })
        .catch(err => iziToast.error({
                    position: "topRight",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                }))
        .finally(() => {
            loaderToggle();
            const domRect = galleryList.firstElementChild.getBoundingClientRect();
            window.scrollBy({
                top: domRect.height * 2,
                behavior: "smooth"
            })
        })
}

function loaderToggle() {
    loader.classList.toggle('isHiden');
}


