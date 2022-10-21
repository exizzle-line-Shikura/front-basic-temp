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
                const news_clm = document.getElementById('news_clm')
                const en_news = document.getElementById('en_news')
                const en_news_clm = document.getElementById('en_news_clm')
                let News = '';
                let News_Clm = '';
                let EN_News = '';
                let EN_News_Clm = '';
                for (let i = 0; i < 5; i++) {
                    const NewsParts = 
                    '<li class="page-news-list">' + '<time class="page-news-time">' + '<span class="page-news-date">' + json[i].date + '</span>' + '<span class="page-news-tag ' + json[i].typetag + '">' + json[i].type + '</span>' + '</time>' + '<a href="' + json[i].link + '" class="page-news-link">' + '<p class="page-news-text">' + json[i].text + '</p>' + '</a>' + '</li>';
                    if (json[i].lang == "ja") {
                        News += NewsParts;
                    }
                    else {
                        EN_News += NewsParts;
                    }
                }
                for (let j = 0; j < json.length; j++) {
                    const NewsClm = 
                    '<li class="page-news-list">' + '<time class="page-news-time">' + '<span class="page-news-date">' + json[j].date + '</span>' + '<span class="page-news-tag ' + json[j].typetag + '">' + json[j].type + '</span>' + '</time>' + '<a href="' + json[j].link + '" class="page-news-link">' + '<p class="page-news-text">' + json[j].text + '</p>' + '</a>' + '</li>';
                    if (json[j].lang == "ja") {
                        News_Clm += NewsClm;
                    }
                    else {
                        EN_News_Clm += NewsClm;
                    }
                }
                if (news !== null){
                    news.innerHTML = News;
                }
                if (en_news !== null){
                    en_news.innerHTML = EN_News;
                }
                if (news_clm !== null){
                    news_clm.innerHTML = News_Clm;
                }
                if (en_news_clm !== null){
                    en_news_clm.innerHTML = EN_News_Clm;
                }
            }
        }
    }
}