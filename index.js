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
const Man = require('./js/transport/Man');

const nVolvo = new Volvo('Volvo', 'left', 5, 4);
nVolvo.ijungtasVariklis();
console.log(nVolvo);

const nMan = new Man('Man', 'right', 2);
nMan.priekabaPakelta();
console.log(nMan);


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



