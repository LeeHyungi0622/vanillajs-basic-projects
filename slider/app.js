const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// slide의 각 이미지(position: absolute)에 left 속성으로 {index*100}% 만큼 준다.
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

function carousel() {
    // 만약 카운터의 숫자와 slide의 길이가 같다면 counter를 0으로 초기화 한다.
    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // 만약 카운터의 숫자가 0보다 작은 음수라면, slider길이보다 1 작은
    // 위치의 slide로 이동을 시킨다.(가장 마지막 슬라이드)
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    if (counter < slides.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }

    // slide에 transform 속성으로 translateX 값을 준다.
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}
prevBtn.style.display = "none";

nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});