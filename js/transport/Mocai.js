const Transport = require('./Transport');

class Mocai extends Transport {
    constructor(name, vairoPadetis, sedyniuSk, ratuSk, galiaAg, color) {
        super(name, vairoPadetis, sedyniuSk, ratuSk, galiaAg, color);
       
    }
}

module.exports = Mocai;