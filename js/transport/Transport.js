class Transport {
    constructor(name, vairoPadetis, sedyniuSk, ratuSk, galiaAg) {
        this.name = name;
        this.vairoPadetis = vairoPadetis;
        this.sedyniuSk = sedyniuSk;
        this.ratuSk = ratuSk;
        this.galiaAg = galiaAg;
        this.variklisOn = false;
        this.crashedSigns = [5];
        this.priekabosTalpa = 10;
        this.backLift = false;
        this.savaeigis = false;
        
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
    priekabaPakelta() {
        this.backLift = true;
    }
    priekabaPakelta() {
        this.backLift = false;
    }
    autoPilotas() {
        this.savaeigis = false;
    }
    autoPilotas() {
        this.savaeigis = true;
    }
}

module.exports = Transport;