//const API_KEY = '1209ebc7d071469b920259e6e4e6de0b';

/*----  КОД  ЯК НА ВІДЕО  ----*/
export default class NewApiService {
    constructor() {
        this.searchQuery = "";
        this.page = 1;
    }

    fetchArticles() {
        console.log(this);

        const options = {
            headers: {
                Authorization: '1209ebc7d071469b920259e6e4e6de0b'
            }
        };

        const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=ru&pageSize=5&page=${this.page}`;
        return fetch(url, options)
            .then(response => response.json())
            .then(data => {
                this.incrementPage()
                console.log(data)
                return data.articles
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}