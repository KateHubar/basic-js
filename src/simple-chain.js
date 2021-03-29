const CustomError = require("../extensions/custom-error");

let chain = [];

const chainMaker = {
    getLength() {
        return chain.length;
    },
    addLink(value) {
        chain.push(`${value}`);
        return this;
    },
    removeLink(position) {
        if (chain[position - 1] === undefined) {
            chain.length = 0;
            throw Error("Error");
        }
        chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        chain.reverse();
        return this;
    },
    finishChain() {
        const res = `( ${chain.join(" )~~( ")} )`;
        chain.length = 0;
        return res;
    },
};

module.exports = chainMaker;
