## VanillaJS 기본 프로젝트

### Tabs

- ### Event bubbling (JS)

  이벤트는 부모요소에 주고, event 객체의 target 속성을 통해 선택된 자식요소가 조건에 부합하는 target element인지 확인한 뒤에 조건부로 이벤트 처리를 한다.

- ### Tab 구성 (HTML)
  기본적인 탭의 구성은 section 태그로 그룹화하였다. 내부에 제목 + 부제목 부분 그리고 그림 + 탭 콘텐츠가 있는 부분, 두 부분으로 나뉘기 때문에 내부에서 div로 분류하였다.
  왼쪽 그림은 하나의 독립적인 콘텐츠가 될 수 있다고 생각되기 때문에 개별적인 article 태그로 분류하였고, 오른쪽의 탭 콘텐츠 또한 개별적인 article로 구분하였다.
  article 태그는 각 article이 어떤 콘텐츠를 포함하고 있는지 heading level의 태그를 넣어줘야 한다.
  탭 콘텐츠를 넣어준 article 태그에서는 button이 들어갈 부분을 div태그로 그룹화하고, 각 탭에 매핑되는 콘텐츠 내용은 별도의 article 태그로 묶어주었다. 표시할 모든 콘텐츠에 대해서는 내부에 div 태그로 묶어주고, 보여줄 콘텐츠와 아닌 콘텐츠는 class이름으로 active 속성을 넣어 구분하였다.
  각 탭마다 매핑되어있는 콘텐츠를 담은 div태그의 id 속성에는 탭 메뉴 버튼의 data-id 속성과 매핑되는 값을 가진다.
  해당 값을 통해 탭 콘텐츠 영역에 표시할 콘텐츠의 class 속성에 active를 추가한다.

```javascript
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
```
