import { box, secretbox, randomBytes } from "tweetnacl";
import {
  decodeUTF8,
  encodeUTF8,
  encodeBase64,
  decodeBase64,
} from "tweetnacl-util";

const LOCAL_STORAGE_KEY_PUBLIC_KEY = "token-app-public-key";
const LOCAL_STORAGE_KEY_SECRET_KEY = "token-app-secret-key";

export const CRYPTO_KEY_TYPE = {
  PUBLIC: "public",
  SECRET: "secret",
};

const APP_KEY_PAIR = {
  publicKey: "J+n2edb5P3HHRH5P6g2ZoIegPpduOjVW+OY2U7DHHUc=",
  secretKey: "faAvuOy3pukmkPMN+QRVlhOoRDWE8C16ObOO2nebydA=",
};

export default class Crypto {
  static getNewNonceRaw() {
    return randomBytes(secretbox.nonceLength);
  }

  static getKeyPair() {
    const raw = box.keyPair();
    const keyPair = {
      publicKey: encodeBase64(raw.publicKey),
      secretKey: encodeBase64(raw.secretKey),
    };
    return keyPair;
  }

  static getKeyPairFromLocalStorage() {
    const keyPair = {
      publicKey: localStorage.getItem(LOCAL_STORAGE_KEY_PUBLIC_KEY),
      secretKey: localStorage.getItem(LOCAL_STORAGE_KEY_SECRET_KEY),
    };
    return keyPair;
  }

  static setKeyPairToLocalStorage(keyPair) {
    localStorage.setItem(LOCAL_STORAGE_KEY_PUBLIC_KEY, keyPair.publicKey);
    localStorage.setItem(LOCAL_STORAGE_KEY_SECRET_KEY, keyPair.secretKey);
  }

  static encrypt(payload) {
    const keyPair = Crypto.getKeyPairFromLocalStorage();
    if (!keyPair) {
      throw Error("No keyPair in localStorage!");
    }

    const nonceRaw = Crypto.getNewNonceRaw();

    const encryptedMessageOnly = encodeBase64(
      box(
        decodeUTF8(JSON.stringify(payload)),
        nonceRaw,
        decodeBase64(APP_KEY_PAIR.publicKey),
        decodeBase64(keyPair.secretKey)
      )
    );

    const encryptedMessageInner = {
      nonce: encodeBase64(nonceRaw),
      writerPublicKey: keyPair.publicKey,
      encryptedMessageOnly,
    };
    const encryptedMessage = encodeBase64(
      decodeUTF8(JSON.stringify(encryptedMessageInner))
    );
    return encryptedMessage;
  }

  static decrypt(encryptedMessage) {
    if (!encryptedMessage) {
      throw Error("Invalid encryptedMessage: " + encryptedMessage);
    }

    const encryptedMessageInner = JSON.parse(
      encodeUTF8(decodeBase64(encryptedMessage))
    );
    const { nonce, writerPublicKey, encryptedMessageOnly } =
      encryptedMessageInner;

    const message = JSON.parse(
      encodeUTF8(
        box.open(
          decodeBase64(encryptedMessageOnly),
          decodeBase64(nonce),
          decodeBase64(writerPublicKey),
          decodeBase64(APP_KEY_PAIR.secretKey)
        )
      )
    );
    return { writerPublicKey, message };
  }
}
