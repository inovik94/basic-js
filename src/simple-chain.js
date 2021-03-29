const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newChain: [],
  getLength() {
    return this.newChain.length;
  },

  addLink(value) {
    this.newChain.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" || position >= this.getLength() || position < 0) {
      this.newChain = [];
      throw new Error("Error");
    }
    this.newChain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.newChain.reverse();
    return this;
  },

  finishChain() {
    let result = this.newChain.map((x) => "( " + x + " )").join("~~");
    this.newChain = [];
    return result;
  },
};

module.exports = chainMaker;
