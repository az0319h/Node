// #5 NPM 구석 구석

// #5.1 NPM(Node Package Manager) 챕터 소개 : 자바스크립트로 개발할 때 생산성 있게 개발할 수 있도록 도와주며 많은 라이브러리를 보유하고 있다.

// #5.2 NPM 시작하기
// 콘솔에  npt init 입력 후 .json파일 만들기 그 후에 .json에서 scritps 내부에  "start": "node app" 추가해서 콘솔에서 npm start를 사용해서 app.js가 실행될 수 있도록 만들 수 있다.
console.log("start npm!")

// #5.3 소프트웨어 라이센스란? 꿀사이트

// #5.4 라이브러리 버전관리? 꿀사이트

// #5.5 글로벌로 설치 하고 목록 확인
// npm i -g(global) netlify

// #5.6 프로젝트 라이브러리 확인, 설치 및 삭제
// underscore 설치 방법 -> npm i(install) underscore(다른 이름이 올 수 있음)
// underscore 삭제 방법 -> npm uninstall underscore(다른 이름이 올 수 있음)

// #5.7 버전 업데이트 하기

// #5.8 개발 모드로 설치하기 + 좋은 툴 설치
// npm i nodemon --save-dev 개발 툴 설치 후 .json으로 돌아가서 scritps 내부에 "start": "nodemon app" 변경해서 콘솔에서 npm start를 사용해서 app.js가 이제는 저장만 하면 자동으로 실행될 수 있도록 만든다.
console.log("save!")