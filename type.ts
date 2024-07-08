import { sendEmail, sendText } from "./message";

export type Phone = {
    countryCode: string;
    number: string;
} & { type: 'phone'}

export type Email = {
    address: string;
} & { type: 'email'}

export type Push = {
    id: string;
    name: string;
} & { type: 'push'}

export type UserInfo = {
    username: string;
    name: string;
    communicationChannel: Phone | Email | Push;
}

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
