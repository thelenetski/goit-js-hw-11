import * as search from './js/pixabay-api';
import { clearRender } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();
  const userSearchRequest = event.target.elements.search.value;
  if (userSearchRequest === '' || /^\s*$/.test(userSearchRequest)) {
    iziToast.error({
      title: 'Error',
      message: 'Empty request',
    });
    event.target.elements.search.value = '';
    return;
  }
  loader.classList.remove('hide');
  clearRender();
  search.getData(userSearchRequest.trim(), loader);
  event.target.elements.search.value = '';
});
