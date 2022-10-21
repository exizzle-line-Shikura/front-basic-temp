export default class News {
    constructor() {
        const request = new XMLHttpRequest();
        request.open('GET', '/assets/json/_news.json');
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                const json = JSON.parse(request.responseText);
                let News = '';
                let EN_News = '';
                for (let i = 0; i < 5; i++) {
                    const NewsParts = 
                    '<li class="page-news-list">' + '<time class="page-news-time">' + '<span class="page-news-date">' + json[i].year + '&nbsp;' + json[i].date + '</span>' + '<span class="page-news-tag ' + json[i].typetag + '">' + json[i].type + '</span>' + '</time>' + '<a href="' + json[i].link + '" class="page-news-link">' + '<p class="page-news-text">' + json[i].text + '</p>' + '</a>' + '</li>';
                    if (json[i].lang == "ja") {
                        News += NewsParts;
                    }
                    else {
                        EN_News += NewsParts;
                    }
                }
                const news = document.getElementById('news')
                const en_news = document.getElementById('en_news')
                if (news !== null){
                    news.innerHTML = News;
                    en_news.innerHTML = EN_News;
                }
                let News_2022 = '';
                let EN_News_2022 = '';
                let News_2021 = '';
                let EN_News_2021 = '';
                let News_2020 = '';
                let EN_News_2020 = '';
                for (let j = 0; j < json.length; j++) {
                    const NewsClm = 
                    '<li class="page-news-list">' + '<time class="page-news-time">' + '<span class="page-news-date">' + json[j].date + '</span>' + '<span class="page-news-tag ' + json[j].typetag + '">' + json[j].type + '</span>' + '</time>' + '<a href="' + json[j].link + '" class="page-news-link">' + '<p class="page-news-text">' + json[j].text + '</p>' + '</a>' + '</li>';
                    if (json[j].lang == "ja") {
                        if (json[j].year == "2022年") {
                            News_2022 += NewsClm;
                        }
                        if (json[j].year == "2021年") {
                            News_2021 += NewsClm;
                        }
                        if (json[j].year == "2020年") {
                            News_2020 += NewsClm;
                        }
                    }
                    else {
                        if (json[j].year == "2022") {
                            EN_News_2022 += NewsClm;
                        }
                        if (json[j].year == "2021") {
                            EN_News_2021 += NewsClm;
                        }
                        if (json[j].year == "2020") {
                            EN_News_2021 += NewsClm;
                        }
                    }
                }
                const page_news = document.getElementById('page-news')
                const news_2022 = document.getElementById('news_2022')
                const en_news_2022 = document.getElementById('en_news_2022')
                const news_2021 = document.getElementById('news_2021')
                const en_news_2021 = document.getElementById('en_news_2021')
                const news_2020 = document.getElementById('news_2020')
                const en_news_2020 = document.getElementById('en_news_2020')
                if (page_news !== null){
                    news_2022.innerHTML = News_2022;
                    news_2021.innerHTML = News_2021;
                    news_2020.innerHTML = News_2020;
                    en_news_2022.innerHTML = EN_News_2022;
                    en_news_2021.innerHTML = EN_News_2021;
                    en_news_2020.innerHTML = EN_News_2020;
                }
            }
        }
    }
}