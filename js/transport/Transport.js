class Transport {
    constructor(name, vairoPadetis, sedyniuSk, ratuSk, galiaAg, color) {
        this.name = name;
        this.vairoPadetis = vairoPadetis;
        this.sedyniuSk = sedyniuSk;
        this.ratuSk = ratuSk;
        this.galiaAg = galiaAg;
        this.color = color;
        this.variklisOn = false;
        this.priekabosTalpa = [10];
        this.backLift = false;
        this.savaeigis = false;
        this.lopselis = false;
        
    }

    ijungtasVariklis() {
        this.variklisOn = true;     
        }
    ijungtasVariklis() {
        this.variklisOn = false;
    }
    talpa() {
        console.log(`${this.name} is a ${this.priekabosTalpa} tons trailer.`);
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
    lopselisExists() {
        this.lopselis = false;
    }
    lopselisExists() {
        this.lopselis = true;
    }
}

module.exports = Transport;