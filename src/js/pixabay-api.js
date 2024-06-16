import { renderGallery } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function getData(searchWord, loader) {
  const searchParams = new URLSearchParams({
    key: '44412279-8977454442245f14893e5bf31',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(posts => {
      if (posts.hits.length === 0 || posts.hits === 'undefined') {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      loader.classList.add('hide');
      renderGallery(posts);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
      });
    });
}
