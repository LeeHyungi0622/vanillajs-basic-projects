const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        // event bubbling으로 선택된 target에 data-id가
        // 설정되어있는 경우, 해당 target에 
        e.target.classList.add('active');
        // hide other articles
        articles.forEach((article) => {
            article.classList.remove('active');
        });
        // tab button의 data-id와 일치하는 about-content내의 content의 id를 찾는다.
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});