// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById('nav');
// scroll to top link
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
    // 상단에 설명 참조
    // pageYOffset은 읽기전용 window 속성이다. 오직 pixels 숫자를 반환한다.
    // (document의 상하 scroll 된 것)
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // 기존에 href로 넣어준 hash link로 이동하는 기본 이벤트가 실행되는 것을 
        // 방지한다. (메뉴에서 각 section으로 이동하는 기존의 click이벤트를 방지)
        e.preventDefault();
        // navigate to specific section
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        // 만약에 navbar의 class이름 속성에 fixed-nav가 있다면, 모바일 크기의 화면에서의 navbar이기 때문에
        const fixedNav = navbar.classList.contains('fixed-nav');
        console.log(element);
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight;
        }
        // nav menu가 open (toggle button)
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        console.log(position);
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;

    });
});