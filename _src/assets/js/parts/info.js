// page.json読み込み
export default class Parts {
    constructor() {
        const request = new XMLHttpRequest();
        request.open('GET', '_pages.json');
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                const json = JSON.parse(request.responseText);
                let News = '';
                for (let i = 0; i < json.length; i++) {
                    if (json[i].pickup) {
                    const NewsParts =
                    '<a href="' +  json[i].dir + '" class="page-clm">' + 
                        '<div class="page-clm-img">' + 
                            '<img src="' + json[i].thum + '" alt="">' + 
                        '</div>' + 
                        '<p class="page-clm-text">' + 
                            '<strong>' +
                                json[i].title +
                            '</strong>' +
                        '</p>' + 
                    '</a>';;
                    News += NewsParts;
                } else {}
                }
                document.getElementById('news').innerHTML = News;
            }
        };
    }
}