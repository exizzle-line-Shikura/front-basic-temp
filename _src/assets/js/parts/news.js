// TOP News読み込み
export default class News {
    constructor() {
        const request = new XMLHttpRequest();
        request.open('GET', '/_news.json');
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                const json = JSON.parse(request.responseText);
                const news_top = document.getElementById('news_top')
                const news_clm = document.getElementById('news_clm')
                const en_news_top = document.getElementById('en_news_top')
                const en_news_clm = document.getElementById('en_news_clm')
                let NewsTop = '';
                let NewsClm = '';
                let EN_NewsTop = '';
                let EN_NewsClm = '';
                for (let i = 0; i < json.length; i++) {
                    const NewsParts = 
                    '<li class="page-news-list">' + 
                        '<time class="page-news-time">' +
                            '<span class="page-news-date">' +
                                json[i].year + '&nbsp;' + json[i].date +
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
                    const NewsList = 
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
                    NewsTop += NewsParts;
                    NewsClm += NewsList;
                } 
                else {
                    EN_NewsTop += NewsParts;
                    EN_NewsClm += NewsList;
                }
            }
                if (news_top !== null){
                    news_top.innerHTML = NewsTop;
                }
                if (news_clm !== null){
                    news_clm.innerHTML = NewsClm;
                }
                if (en_news_top !== null){
                    en_news_top.innerHTML = EN_NewsTop;
                }
                if (en_news_clm !== null){
                    en_news_clm.innerHTML = EN_NewsClm;
                }
            }
        }
    }
}