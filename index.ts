import { UserInfo } from "./type";
import { sendEmail, sendText } from "./message";

function sendMessage(user: UserInfo, message: string){
    const type = user.communicationChannel.type

    switch (type) {
        case 'email':
            sendEmail(message, user.communicationChannel.address);
            break;
        case 'phone':
            sendText(message, user.communicationChannel.number, 
                user.communicationChannel.countryCode)
            break;
        case 'push':
            break;
        default:
            const neverReached: never = type;
            throw new Error(neverReached);
    } 
}