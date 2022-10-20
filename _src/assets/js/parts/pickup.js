// TOP PICKUP読み込み
export default class Pickup {
    constructor() {
        const request = new XMLHttpRequest();
        request.open('GET', '/_pages.json');
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                const json = JSON.parse(request.responseText);
                const pickup = document.getElementById('pickup')
                let Pickup = '';
                for (let i = 0; i < json.length; i++) {
                    if (json[i].pickup) {
                    const PickupParts =
                    '<a href="' +  json[i].dir + '" class="page-clm">' + 
                        '<div class="page-clm-img">' + 
                            '<img src="' + json[i].thum + '" alt="' + json[i].thumalt + '">' + 
                        '</div>' + 
                        '<p class="page-clm-text">' + 
                            '<strong>' +
                                json[i].title +
                            '</strong>' +
                        '</p>' + 
                    '</a>';
                    Pickup += PickupParts;
                } else {}
            }
                if (pickup !== null){
                    pickup.innerHTML = Pickup;
                }
            }
        }
    }
}