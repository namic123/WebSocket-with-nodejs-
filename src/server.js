import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine","pug");
app.set("views",__dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_, res)=> res.render("home"))
app.get("/*", (_, res)=> res.redirect("/"));
const handleListen = () => console.log("Listening on http://localhost:3000");
// http 서버와 websocket 서버를 동시에 실행
// http 서버
const server = http.createServer(app);
// websocket 서버
const wss = new WebSocket.Server({server});

// 웹 소켓의 이벤트들(addEventListener와 유사)
// 1번 파라미터에는 이벤트, 2번에는 콜백 함수
// 콜백 함수의 파라미터에는 연결 정보가 포함된다.

// "연결" 이벤트를 감지
wss.on("connection", (socket) => {
  // 클라이언트 브라우저에 연결되어 있음을 알림
  console.log("Connected to Browser : 연결완료");
  // 클라이언트 브라우저가 닫힌 것을 감지
  socket.on("close",()=> console.log("Disconnected from the Browser : 클라이언트가 종료했습니다."));
  // 클라이언트에서 보낸 message를 감지
  socket.on("message", message => {
    // message를 utf-8 형식으로 변환
    const translatedMessageData = message.toString('utf8');
    console.log(translatedMessageData);
  })
  socket.send("hello!!");
})
server.listen(3000, handleListen);