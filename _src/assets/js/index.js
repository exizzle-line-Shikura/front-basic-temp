import Pickup from './parts/pickup.js';
import Info from './parts/info.js';
import News from './parts/news.js';

const app = {
    // 初期化
    init() {
        this.pickup = new Pickup();
        this.info = new Info();
        this.news = new News();
    },
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', app.init);
} else {
    app.init();
}