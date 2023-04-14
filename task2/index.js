// Task A

const CONTEXT = { x: 2 };

window.x = 1;

const testThis = function (y) {
  console.log(`x=${this.x}, y=${y}`);
};

testThis(100);

const boundFunction = testThis.bind(CONTEXT);

boundFunction(100);

// Task B

function Robot(name) {
  this.name = name;
}

function add(op1, op2) {
  this.name = this.name || 'Human';
  return this.name + ' can count to ' + (op1 + op2);
}

const VOLTRON = new Robot('Voltron');
const HUMAN = new Robot();

const operation1 = add.call(VOLTRON, 1, 2);
const operation2 = add.bind(HUMAN, 0, 1)();
const operation3 = add.apply(VOLTRON, [20, 30]);

console.log(operation1);
console.log(operation2);
console.log(operation3);
