// TOP News読み込み
export default class News {
    constructor() {
        const request = new XMLHttpRequest();
        request.open('GET', '/_news.json');
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                const json = JSON.parse(request.responseText);
                const news = document.getElementById('news')
                const en_news = document.getElementById('en_news')
                let News = '';
                let EN_News = '';
                for (let i = 0; i < json.length; i++) {
                    const NewsParts = 
                    '<li class="page-news-list">' + 
                        '<time class="page-news-time">' +
                            '<span class="page-news-date">' +
                                json[i].date +
                            '</span>' +
                            '<span class="page-news-tag ' + 
                                json[i].typetag +
                            '">' +
                                json[i].type +
                            '</span>' +
                        '</time>' +
                        '<a href="' + json[i].link + '" class="page-news-link">' + 
                            '<p class="page-news-text">' +
                                json[i].text +
                            '</p>' +
                        '</a>' +
                    '</li>';
                if (json[i].lang == "ja") {
                    News += NewsParts;
                } 
                else {
                    EN_News += NewsParts;
                }
            }
                if (news !== null){
                    news.innerHTML = News;
                }
                if (en_news !== null){
                    en_news.innerHTML = EN_News;
                }
            }
        }
    }
}