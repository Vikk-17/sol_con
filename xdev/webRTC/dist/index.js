/*
 * Step1: Create Offer to send
 * Step2: Create an answer
 * Step3: Add ICE candidate
 */
import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let senderSocket = null;
let recieverSocket = null;
// build the connection
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        const message = JSON.parse(data);
        // console.log("received: %s", data);
    });
    ws.send("Let me share something");
});
//# sourceMappingURL=index.js.map