import { UserInfo } from "./type";
import { sendEmail, sendText } from "./message";

function sendMessage(userInfo: UserInfo, message: string){
    switch (userInfo.communicationChannel) {
        case 'email':
            sendEmail(message, userInfo.email?.address!)
            break;
        case 'phone':
            sendText(message, userInfo.phone?.number!, userInfo.phone?.countryCode!)
            break;
        default:
            break;
    }
}

