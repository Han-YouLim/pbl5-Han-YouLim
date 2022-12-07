import cryptoJs from 'crypto-js';
import {pSecretKey, pIV} from "../env";

export const encrypt = (text) => {
    const cipher = cryptoJs.AES.encrypt(text, cryptoJs.enc.Utf8.parse(pSecretKey), {
        iv: cryptoJs.enc.Utf8.parse(pIV),
        padding: cryptoJs.pad.Pkcs7,
        mode: cryptoJs.mode.CBC,
    });

    return cipher.toString();
}

export function decrypt(encryptedText){
    const decipher = cryptoJs.AES.decrypt(encryptedText, cryptoJs.enc.Utf8.parse(pSecretKey), {
        iv: cryptoJs.enc.Utf8.parse(pIV),
        padding: cryptoJs.pad.Pkcs7,
        mode: cryptoJs.mode.CBC,
    })

    return decipher.toString(cryptoJs.enc.Utf8);
}