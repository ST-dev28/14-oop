class Transport {
    constructor(name, vairoPadetis, sedyniuSk, ratuSk) {
        this.name = name;
        this.vairoPadetis = vairoPadetis;
        this.sedyniuSk = sedyniuSk;
        this.ratuSk = ratuSk;
        this.variklisOn = false;
        this.crashedSigns = [5];
        
    }

    ijungtasVariklis() {
        this.variklisOn = true;     
        }
    ijungtasVariklis() {
        this.variklisOn = false;
    }
    failure() {
        console.log(`${this.name} has smashed ${this.crashedSigns} road signs.`);
    }
}

module.exports = Transport;