export type Phone = {
    countryCode: string;
    number: string;
}

export type Email = {
    address: string;
}

export type UserInfo = {
    username: string;
    name: string;
    communicationChannel: 'phone'| 'email';
    phone?: Phone,
    email?: Email,
}