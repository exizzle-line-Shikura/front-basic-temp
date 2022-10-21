// 新着情報一覧読み込み
export default class Parts {
    constructor() {
        const request = new XMLHttpRequest();
        request.open('GET', '/assets/json/_pages.json');
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                const json = JSON.parse(request.responseText);
                const info = document.getElementById('info')
                let Info = '';
                for (let i = 0; i < json.length; i++) {
                    if (json[i].info) {
                    const InfoParts =
                    '<a href="' +  json[i].dir + '" class="page-clm">' + 
                        '<div class="page-clm-img">' + 
                            '<img src="' + json[i].thum + '" alt="">' + 
                        '</div>' + 
                        '<p class="page-clm-text">' + 
                            '<strong>' +
                                json[i].title +
                            '</strong>' +
                        '</p>' + 
                    '</a>';
                    Info += InfoParts;
                }
                else {}
            }
                if (info !== null){
                    info.innerHTML = Info;
                }
            }
        };
    }
}