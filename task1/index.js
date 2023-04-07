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

const myMap = (collection, callback) => {
  const array = [];
  for (let i of collection) {
    array.push(callback(i, collection.indexOf(i), collection));
  }
  return array;
};

const myFilter = (collection, callback, thisArgument = collection) => {
  const array = [];
  for (let i of collection) {
    if (callback.call(thisArgument, i, collection.indexOf(i), collection)) {
      array.push(i);
    }
  }
  return array;
};

const myReduce = (collection, callback, initialValue) => {
  let accumulator = initialValue;
  for (let i of collection) {
    if (accumulator !== undefined) {
      accumulator = callback.call(
        undefined,
        accumulator,
        i,
        collection.indexOf(i),
        collection
      );
    } else {
      accumulator = i;
    }
  }
  return accumulator;
};

// Task B

// 1

const transformedNotes = myMap(NOTES, ({ id, title }) => {
  return {
    id: id,
    title: title,
  };
});

console.log(transformedNotes);

// 2

const markedNotes = myFilter(NOTES, (note) => note.isMarked);

console.log(markedNotes);

// 3

const totalPagesOfNotes = myReduce(
  NOTES,
  (total, { pagesCount }) => (total += pagesCount),
  0
);

console.log(`The total number of pages of all notes is ${totalPagesOfNotes}. `);

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
