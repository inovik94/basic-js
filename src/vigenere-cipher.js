const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, keyArray) {
    if (message === undefined || keyArray === undefined) {
      throw new Error();
    }

    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    keyArray = keyArray.toUpperCase();
    let counter = 0;
    let encryptedLetter = "";
    for (let i in message) {
      if (abc.indexOf(message[i]) < 0) {
        encryptedLetter += message[i];
        continue;
      }
      let letter = abc.indexOf(message[i]);
      let keyLetter = abc.indexOf(keyArray[counter % keyArray.length]);
      encryptedLetter = encryptedLetter + abc[(letter + keyLetter) % 26];
      counter++;
    }
    if (!this.direct) {
      return encryptedLetter.split("").reverse().join("");
    }
    return encryptedLetter;
  }

  decrypt(message, keyArray) {
    if (message === undefined || keyArray === undefined) {
      throw new Error();
    }
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    keyArray = keyArray.toUpperCase();
    let counter = 0;
    let decLetter = "";
    for (let i in message) {
      if (abc.indexOf(message[i]) < 0) {
        decLetter += message[i];
        continue;
      }
      let letter = abc.indexOf(message[i]);
      let keyLetter = abc.indexOf(keyArray[counter % keyArray.length]);
      decLetter = decLetter + abc[(letter - keyLetter + 26) % 26];
      counter++;
    }

    let result = this.direct == true ?  decLetter : decLetter.split("").reverse().join("")
    return result;
  }
}

module.exports = VigenereCipheringMachine;
