function createCard() {
  // 클로저 공간에 두변수가 저장된다고 예측할수 있음
  let title = "";
  let content = "";
  function changeTitle(text) {
    title = text;
  }
  function changeContent(text) {
    content = text;
  }
  function print() {
    console.log("TITLE -", title);
    console.log("CONTENT -", content);
  }
  return { changeTitle, changeContent, print };
}

const card1 = createCard();

card1.changeTitle("생일카드");
card1.changeContent("생일축하해");
card1.print();

const card2 = createCard();

card2.changeTitle("감사카드");
card2.changeContent("고마워");
card2.print();
