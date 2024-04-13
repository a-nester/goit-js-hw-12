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
let page = null;
let searchValue = "";

let gallery = new SimpleLightbox('.gallery a', {
            captionsData: "alt",
            captionDelay: 250,
            captionClass: 'text-center'
        });

async function handleClick(event) {
    event.preventDefault();
    loader.classList.remove('isHiden');
    page = 1;
    searchValue = searchForm.elements[0].value.trim();

    if (!searchValue) {
        loader.classList.add('isHiden');
        return iziToast.error({
            position: "topRight",
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
    }
    try {
        const { data } = await createFetch(searchValue, page);
            
                if (data.hits.length === 0) {
                    return iziToast.error({
                        position: "topRight",
                        message: "Sorry, there are no images matching your search query. Please try again!",
                    });
                }
                // deleted SimpleLightbox
                const totalPages = Math.ceil(data.totalHits / data.hits.length)
                if (page < totalPages) {
                    loadBtn.classList.replace("load-more-hiden", "load-more")
                }
                galleryList.innerHTML = createMarkup(data.hits);
                gallery.refresh();
    } catch {
        iziToast.error({
            position: "topRight",
            message: "Sorry, there are no images matching your search query. Please try again!",
        })
    } finally {
            searchForm.elements[0].value = "";
            loader.classList.add('isHiden');
    }
}

async function handleLoadMore() {
    loadBtn.classList.replace("load-more", "load-more-hiden")
    loader.classList.remove('isHiden');
    page += 1;
    try {
        const { data } = await createFetch(searchValue, page);
        // deleted SimpleLightbox
        const totalPages = Math.ceil(data.totalHits / data.hits.length)    
        galleryList.insertAdjacentHTML("beforeend", createMarkup(data.hits));
        gallery.refresh();
        
        if (page < totalPages) {
            loadBtn.classList.replace("load-more-hiden", "load-more")
        } else {
            loadBtn.classList.replace("load-more", "load-more-hiden")
            return iziToast.error({
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
    } catch {
        iziToast.error({
            position: "topRight",
            message: "Sorry, there are no images matching your search query. Please try again!",
        })
    } finally {
            loader.classList.add('isHiden');
            const domRect = galleryList.firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: domRect.height * 2,
            behavior: "smooth"
        });
    }
}


