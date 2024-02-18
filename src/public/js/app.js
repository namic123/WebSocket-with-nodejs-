const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
// 웹소켓 연결 및 현재 host 정보.
// websocket은 http처럼 프로토콜이기 때문에 scheme을 ws로 연결해야함.
const socket = new WebSocket(`ws://${window.location.host}`);

// 소켓이 연결되었음을 감지
socket.addEventListener("open",()=>{
  console.log("Connected to Server : 연결완료");
});

// 서버에서 보내진 message를 감지
socket.addEventListener("message", (message) =>{
  console.log("Just got this : ", message , "from the server");
  console.log("서버에게 온 메세지:", message.data);
});

// 서버에서 소켓 연결을 종료한 것을 감지
socket.addEventListener("close", ()=>{
  console.log("Connected from Server: 연결종료")
});

// 서버에게 데이터 보내기
setTimeout(()=> {
  // 연결된 소켓에 데이터 보내기
  socket.send("hello from the browser");
},10000);


// form을 이용하여 서버에 input value 보내기
messageForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
});