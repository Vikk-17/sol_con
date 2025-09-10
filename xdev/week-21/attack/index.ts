import axios from "axios";

const sendRequest = async(otp: string) => {

    let data = JSON.stringify({
        "email": "abc@gmail.com",
        "otp": otp,
        "newPassword": "1234556"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'localhost:3000/reset-password',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    await axios.request(config)
};
sendRequest("521659");

// for(let i = 0; i<=999999; i++){
//     console.log(i);
//     sendRequest(i.toString());
// }
//
