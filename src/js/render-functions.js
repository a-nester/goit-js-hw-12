export function createMarkup(arr) {
  return arr
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <li class="gallery-item" >
        <a class="gallery-link" href=${largeImageURL}>
          <img class="gallery-image"
          src="${webformatURL}" 
          data-source="${largeImageURL}" 
          alt="${tags}" />
          
        </a>
        <div class="data-box">
            <div>
                <p class="item-box-bolt">Likes</p>
                <p class="item-box">${likes}</p>
            </div>
            <div>
                <p class="item-box-bolt">Views</p>
                <p class="item-box">${views}</p>
            </div>
            <div>
                <p class="item-box-bolt">Comments</p>
                <p class="item-box">${comments}</p>
            </div>
            <div>
                <p class="item-box-bolt">Downloads</p>
                <p class="item-box">${downloads}</p>
            </div>
        </div>
      </li>
    `;
    })
    .join('');
}
