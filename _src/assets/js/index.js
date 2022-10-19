import Parts from './parts/info.js';

const app = {
    // 初期化
    init() {
        this.info = new Parts();
    },
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', app.init);
} else {
    app.init();
}