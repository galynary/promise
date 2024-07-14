//import onSearch from "./onSearch_task02"
//1209ebc7d071469b920259e6e4e6de0b
/*----  КОД  ЯК НА ВІДЕО  ----*/
const ref = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};
import NewApiService from './02_api_service'
import articlesTpl from '../templates/articlesTpl.hbs'

const newApiService = new NewApiService();

ref.searchForm.addEventListener("submit", onSearch);
ref.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(evt) {
    evt.preventDefault();
    newApiService.query = evt.currentTarget.elements.query.value;
    newApiService.resetPage();
    newApiService.fetchArticles().then(appendArticlesMarkup);
    clearArticlesContainer()
}

function onLoadMore() {
    newApiService.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
    ref.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}
function clearArticlesContainer(){
    ref.articlesContainer.innerHTML="" // очищаємо контейнер
}