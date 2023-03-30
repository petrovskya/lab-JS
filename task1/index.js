const NOTES = [
  {
    id: 1,
    title: 'Recipe',
    description: 'Ingredients include 2 eggs...',
    pagesCount: 2,
    isMarked: false,
    access: [],
  },
  {
    id: 2,
    title: 'Workouts',
    description: '3 sets of squats...',
    pagesCount: 1,
    isMarked: true,
    access: [],
  },
  {
    id: 3,
    title: 'Passwords',
    description: 'VISA ...',
    pagesCount: 6,
    isMarked: true,
    access: [],
  },
  {
    id: 4,
    title: 'To Do 2021',
    description: '1. Learn JS...',
    pagesCount: 3,
    isMarked: false,
    access: [],
  },
];

// Task A

Array.prototype.mapPolyfill = function (callbackFn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callbackFn(this[i], i, this));
  }
  return arr;
};

Array.prototype.filterPolyfill = function (callbackFn, thisArg = this) {
  const arr = [];
  for (let i = 0; i < thisArg.length; i++) {
    if (callbackFn.call(thisArg, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.reducePolyfill = function (callbackFn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

// Task B

// 1

const TRANSFORMED_NOTES = NOTES.mapPolyfill(({ id, title }) => {
  return {
    id: id,
    title: title,
  };
});

alert(JSON.stringify(TRANSFORMED_NOTES, null, 2));

// 2

const MARKED_NOTES = NOTES.filterPolyfill((note) => {
  if (note.isMarked) return note;
});

alert(JSON.stringify(MARKED_NOTES, null, 2));

// 3

const TOTAL_PAGES_OF_NOTES = NOTES.reducePolyfill(
  (total, { pagesCount }) => (total += pagesCount),
  0
);

alert(`The total number of pages of all notes is ${TOTAL_PAGES_OF_NOTES}. `);

// Task С

const TEST_ARRAY = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5];

const getUniqueNumber = (array) => {
  const SINGLE_ELEMENTS = [];
  const NUMBERS_REPEAT_STATISTIC = array.reducePolyfill((variation, number) => {
    variation[number] = (variation[number] || 0) + 1;
    return variation;
  }, {});

  for (let [number, repetition] of Object.entries(NUMBERS_REPEAT_STATISTIC)) {
    if (repetition === 1) {
      SINGLE_ELEMENTS.push(number);
    }
  }

  if (SINGLE_ELEMENTS.length === 1) {
    return `Unique number is ${SINGLE_ELEMENTS.toString()}.`;
  } else return 'Ooops! There is no unique element here...';
};

const UNIQUE_NUMBER = getUniqueNumber(TEST_ARRAY);

alert(UNIQUE_NUMBER);
