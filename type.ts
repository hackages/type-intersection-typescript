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


