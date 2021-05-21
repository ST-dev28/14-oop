/*
const Dog = require('./js/Dog');
const Cat = require('./js/Cat');
const Rabbit = require('./js/Rabbit');


const rexas = new Dog('Rex', 'brown');
rexas.voice();

const rainis = new Cat('Rainis', 'golden');
rainis.voice();

const benas = new Rabbit('Benas', 'black');
benas.voice();
*/

const Volvo = require('./js/transport/Volvo');
const Bmw = require('./js/transport/Bmw');
const Tesla = require('./js/transport/Tesla');

const Man = require('./js/transport/Man');
const Gaz = require('./js/transport/Gaz');
const Vaz = require('./js/transport/Vaz');

const nVolvo = new Volvo('Volvo', 'left', 5, 4);
nVolvo.ijungtasVariklis();
console.log(nVolvo);

const nBmw = new Bmw('BMW', 333);
nBmw.ijungtasVariklis();
console.log(nBmw);

const nTesla = new Tesla('Tesla', 'left', 2);
nTesla.autoPilotas();
console.log(nTesla);

const nMan = new Man('MAN', 'right', 2);
nMan.priekabaPakelta();
console.log(nMan);

const nGaz = new Gaz('GAZ', 'right', 2);
nGaz.priekabaPakelta();
console.log(nGaz);

const nVaz = new Vaz('VAZ', 'right', 2);
nVaz.priekabaPakelta();
console.log(nVaz);

/*
console.log(rexas);
console.log(spaikas);
console.log(rainis);
console.log(pukis);

spaikas.voice();
rexas.voice();
spaikas.voice();
spaikas.voice();
rainis.voice();
pukis.voice();
*/



