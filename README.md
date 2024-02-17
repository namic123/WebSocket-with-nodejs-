# Noom

Zoom Clone using NodeJs, WebRTC and Websockets

## Libraries
* npm i nodemon -D
  * 자동으로 Node 앱 재시작
* npm i @babel/core 
  * 최신 JavaScript(ECMAScript) 코드를 오래된 JavaScript 버전으로 변환해주어, 모든 브라우저나 환경에서 실행할 수 있게 해줌
* npm @babel/cli 
  * 커맨드 라인에서 Babel을 실행할 수 있게 해주는 도구
* npm @babel/node -D
  * Babel을 사용하여 최신 JavaScript 코드를 실행할 수 있는 Node.js의 대체제
  * node 명령어 대신 babel-node 명령어를 사용하여 ES6 이상의 코드를 직접 실행
* npm i @babel/preset-env
  *  Babel을 사용하여 JavaScript를 변환할 때 필요한 플러그인을 자동으로 결정해주는 Babel 프리셋
  * 개발자가 타겟으로 하는 브라우저나 환경에 맞춰 필요한 변환을 적용
  * 이 프리셋을 사용하면 최신 JavaScript 코드를 다양한 환경에서 호환 가능한 코드로 쉽게 변환
* npm i express
  *  Node.js를 위한 빠르고 개방적인 웹 프레임워크
  * 웹 애플리케이션 및 API 개발을 위한 강력한 기능과 간단한 인터페이스를 제공
  * 라우팅, 미들웨어 지원, 템플릿 엔진 통합 등 다양한 기능을 통해 웹 서버 개발을 손쉽게 할 수 있음
* npm i pug
  *  HTML을 보다 간결하게 작성할 수 있게 해주는 템플릿 엔진
* npm i ws
  * nodejs WebSocket implementation