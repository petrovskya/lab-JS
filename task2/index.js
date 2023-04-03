// Task A

const CONTEXT = { x: 2 };

window.x = 1;

const testThis = function (y) {
  alert(`x=${this.x}, y=${y}`);
};

testThis(100);

const boundFunction = testThis.bind(CONTEXT);

boundFunction(100);

// Task B

const VOLTRON = new Robot('Voltron');
const HUMAN = new Robot();

function Robot(name) {
  return (this.name = name);
}

function add(op1, op2) {
  this.name = this.name || 'Human';
  return this.name + ' can count to ' + (op1 + op2);
}

alert(add.bind(HUMAN, 0, 1)());
alert(add.call(VOLTRON, 1, 2));
alert(add.apply(VOLTRON, [20, 30]));
