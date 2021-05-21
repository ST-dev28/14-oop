/*
const Dog = require('./js/Dog');
const Cat = require('./js/Cat');
const Rabbit = require('./js/Rabbit');


const rexas = new Dog('Rex', 'brown');
rexas.voice();

const rainis = new Cat('Rainis', 'golden');
rainis.voice();

const benas = new Rabbit('Benas', 'black');
benas.introduce();
*/

const Volvo = require('./js/transport/Volvo');
const Bmw = require('./js/transport/Bmw');
const Tesla = require('./js/transport/Tesla');

const Man = require('./js/transport/Man');
const Gaz = require('./js/transport/Gaz');
const Vaz = require('./js/transport/Vaz');

const Yamaha = require('./js/transport/Yamaha');
const Iz = require('./js/transport/Iz');
const Kawasaki = require('./js/transport/Kawasaki');

const nVolvo = new Volvo('Volvo', 'left', 5, 4, '?', 'silver');
nVolvo.ijungtasVariklis();
console.log(nVolvo);

const nBmw = new Bmw('BMW','left', 5, 4, 333, 'black mat');
nBmw.ijungtasVariklis();
console.log(nBmw);

const nTesla = new Tesla('Tesla', 'left', 5, 4, '?', 'white');
nTesla.autoPilotas();
console.log(nTesla);

const nMan = new Man('MAN', 'right', 3, 4, '?', 'blue');
nMan.talpa();
console.log(nMan);

const nGaz = new Gaz('GAZ', 'right', 3, 4, '?', 'brown');
nGaz.priekabaPakelta();
console.log(nGaz);

const nVaz = new Vaz('VAZ', 'right', 3, 4, '?', 'grey');
nVaz.priekabaPakelta();
console.log(nVaz);

const nYamaha = new Yamaha('Yamaha', 'center', 1 , 2, '?', 'black');
nYamaha.lopselisExists();
console.log(nYamaha);

const nIz = new Iz('Iz', 'center', 1 , 2, '?', 'red');
nIz.lopselisExists();
console.log(nIz);

const nKawasaki = new Kawasaki('Kawasaki', 'center', 1 , 2, '?', 'navy');
nKawasaki.lopselisExists();
console.log(nKawasaki);

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



