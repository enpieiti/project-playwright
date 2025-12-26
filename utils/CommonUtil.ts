import cryptoJs from "crypto-js";

export default class CommonUtils {
  private secretKey: string;

  // Initilizing secretKey
  constructor() {
    if (process.env.SECRET_KEY) {
      this.secretKey = process.env.SECRET_KEY;
    } else {
      throw new Error("Please provide secret key while starting execution");
    }
  }

  // provide encrypted data from string
  //   @param data
  //   @returns encryptedData

  public encryptData(data: string) {
    const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
    console.log(encryptedData);
    return encryptedData;
  }
  // provide decrypted data in string format
  //   @param encdata
  //   @returns decryptedData
  public decryptData(enData: string) {
    const decryptedData = cryptoJs.AES.decrypt(enData, this.secretKey).toString(cryptoJs.enc.Utf8);
    console.log(decryptedData);
    return decryptedData;
  }
}
