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
  for (let item of collection) {
    array.push(callback(item));
  }
  return array;
};

const myFilter = (collection, callback) => {
  const array = [];
  for (let item of collection) {
    if (callback(item)) {
      array.push(item);
    }
  }
  return array;
};

const myReduce = (collection, callback, initialValue) => {
  let accumulator = initialValue;
  for (let item of collection) {
    accumulator = callback(accumulator, item);
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
  const INITIAL_VAlLUE_OF_REPEAT = 0;
  const COUNTING_STEP = 1;
  const REQUIRED_REPEAT_VALUE = 1;
  const REQUIRED_SINGLE_NUMBERS = 1;

  const SINGLE_ELEMENTS = [];

  const NUMBERS_REPEAT_STATISTIC = myReduce(
    array,
    (variation, number) => {
      variation[number] =
        (variation[number] || INITIAL_VAlLUE_OF_REPEAT) + COUNTING_STEP;
      return variation;
    },
    {}
  );

  for (let [number, repetition] of Object.entries(NUMBERS_REPEAT_STATISTIC)) {
    if (repetition === REQUIRED_REPEAT_VALUE) {
      SINGLE_ELEMENTS.push(number);
    }
  }

  if (SINGLE_ELEMENTS.length === REQUIRED_SINGLE_NUMBERS) {
    return `Unique number is ${SINGLE_ELEMENTS.toString()}.`;
  } else return 'Ooops! There is no unique element here...';
};

const UNIQUE_NUMBER = getUniqueNumber(TEST_ARRAY);

console.log(UNIQUE_NUMBER);
