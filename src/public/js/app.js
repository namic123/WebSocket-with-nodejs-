// 웹소켓 연결 및 현재 host 정보.
// websocket은 http처럼 프로토콜이기 때문에 scheme을 ws로 연결해야함.
const socket = new WebSocket(`ws://${window.location.host}`);