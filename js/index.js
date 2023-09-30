// const 정답 = "APPLE";
//다음 인덱스로 넘어가는 함수 만들기
let index = 0; //0부터 시작
let attempts = 0; //시도 0번째
//현재 몇 번째 시도 중에 몇번째 인덱스인지를 선택

//키보드를 누르면 화면에 나타나게 하기
function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료됐습니다.";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:45vw; background-color: #fff;";
    document.body.appendChild(div);
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown);
    displayGameover();
  };
  const nextLine = () => {
    if (attempts === 6) return gameover();
    attempts += 1; //attempts : 한 줄을 나타내는 함수
    index = 0; //인덱스를 초기화시켜주기
  };

  const handleEnterKey = () => {
    //정답확인
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${attempts}${index}']`
      );

      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];
      if (입력한_글자 === 정답_글자) {
        맞은_갯수 += 1;
        block.style.background = "#6aaa64";
      } else if (정답.includes(입력한_글자)) block.style.background = "#c9b458";
      else block.style.background = "#787c7e"; //초록색도 아니고 노란색도 아니면 회색을 넣기
      block.style.color = "white"; //글자색은 화이트

      //.includes('a') : 포함이 됐는지 물어보는 함수

      //console.log("정답_글자:", 입력한_글자, "정답_글자");
    }
    if (맞은_갯수 === 5) gameover();
    else nextLine();
  };

  const handleBackspace = (thisBlock) => {
    if (index > 0) {
      const preBlock = document.querySelector(
        `.board-block[data-index='${attempts}${index - 1}']`
      );
    }
    if (index !== 0) index -= 1;
  };
  const handleKeydown = (event) => {
    // console.log("키가 입력", event.key);
    const key = event.key.toUpperCase(); //.toUpperCase() 대문자로 바꿔주는 함수
    const keyCode = event.keyCode; // const thisBlock = document.querySelector(".board-block[data-index='00']");
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    ); //0번째 시도에 0번재 인덱스인 블럭을 가져와서 거기에 텍스트를 업데이트
    //console.log(keyCode); //마지막 알파벳이 a는 65부터 시작해서 z의 90까지만 조건을 주기

    if (event.key === "Backspace") handleEnterKey();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
    /*
    if (index === 5) return; //갑을 반환하고 나가버림
    if (65 <= keyCode && keyCode <= 90) {
      //65보다 크거나 같고, 키코드가 90보다 작거나 같아야 함
      //&&(end) 두가 조건이 모두 만족했을 때 if문이 실행
      thisBlock.innerText = key;
      // index= index + 1; //(인덱스에 1을 더해서 넣어줌)
      // index += 1;
      index++; //위 세개는 같음
    }*/

    //console.log(event.key, event.keyCode);
    //console.log("키가 눌렸습니다.", event); //콘솔창에서 확인해보면 여러가지 속성 코드가있음. 그중에 key와 keyCode만 나타낼 수 있음.
  };
  window.addEventListener("keydown", handleKeydown);
  //keydown : 누르자마자 반응하는
  //handleKeydown : 암묵적으로 여기에 이벤트가 전달됨
}
/*
- camel 표기법
변수명은 띄어쓰기를 쓸 수 없음.
자바스크립트에선 띄어쓰기 대신 변수명을 대문자로 표시함
ex. hi im iron man -> hiImIronMan

- 백엔드의 Python : snake 표기법 
ex. app start -> app_start
*/

appStart();
const 정답 = "APPLE";
let index = 0;
let attempts = 0;

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료됐습니다.";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:45vw; background-color: #fff;";
    document.body.appendChild(div);
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown);
    displayGameover();
  };
  const nextLine = () => {
    if (attempts === 6) return gameover();
    attempts += 1;
    index = 0;
  };

  const handleEnterKey = () => {
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${attempts}${i}']`
      );
      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];
      if (입력한_글자 === 정답_글자) {
        맞은_갯수 += 1;
        block.style.background = "#6aaa64";
      } else if (정답.includes(입력한_글자)) block.style.background = "#c9b458";
      else block.style.background = "#787c7e";
      block.style.color = "white";
    }
    if (맞은_갯수 === 5) gameover();
    else nextLine();
  };
  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );
    if (event.key === "Enter") handleEnterKey();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
    }
  };
  window.addEventListener("keydown", handleKeydown);
}

appStart();
