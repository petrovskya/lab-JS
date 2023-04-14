// TASK A

const DOWNLOADS = [
  {
    id: 1,
    title: 'Recipe',
    status: 'Done',
  },
  {
    id: 2,
    title: 'Workouts',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Passwords',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'To Do 2021',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Books',
    status: 'Failed',
  },
];

const CHECK_STATUS_DELAY = 3000;
const DELAY_VALUE = 5000;
const NOTE_STATUSES = {
  PENDING: 'Pending',
  DONE: 'Done',
  FAILED: 'Failed',
};

const fillTheTable = (array) => {
  const TABLE = document.createElement('table');
  document.body.appendChild(TABLE);
  const TABLE_TITLE = TABLE.insertRow();
  for (let key in array[0]) {
    const CELL = TABLE_TITLE.insertCell();
    CELL.innerText = key;
  }

  for (let i = 0; i < array.length; i++) {
    let ROW = TABLE.insertRow();
    for (let key in array[i]) {
      const CELL = ROW.insertCell();
      CELL.innerText = array[i][key];
    }
  }
};

fillTheTable(DOWNLOADS);

const CHECK_BUTTON = document.createElement('button');
document.body.appendChild(CHECK_BUTTON);
CHECK_BUTTON.innerHTML = 'Start status check';

const TABLE_ROWS = document.querySelectorAll('tr');

const DOWNLOADS_STATUS = Array.from(TABLE_ROWS).map(
  (download) => download.lastChild.innerText
);

const changeStatus = (array, сurrentStatus, replacedStatus) => {
  const foundedIndex = array.findIndex((status) => status === сurrentStatus);
  array[foundedIndex] = replacedStatus;
  TABLE_ROWS[foundedIndex].lastChild.innerText = replacedStatus;
};

const checkStatus = () => {
  const CHECK_INTERVAL = setInterval(() => {
    console.log('Check started');
    changeStatus(DOWNLOADS_STATUS, NOTE_STATUSES.PENDING, NOTE_STATUSES.DONE);
    if (DOWNLOADS_STATUS.every((status) => status !== NOTE_STATUSES.PENDING)) {
      clearInterval(CHECK_INTERVAL);
      console.log('Check completed');
    }
  }, DELAY_VALUE);
};

CHECK_BUTTON.addEventListener('click', () =>
  setTimeout(checkStatus, CHECK_STATUS_DELAY)
);

// TASK B

const FORM = document.querySelector('form');
const FIRST_INPUT = document.getElementById('first-input');
const SECOND_INPUT = document.getElementById('second-input');

const copyInputValue = (input) => {
  if (input === FIRST_INPUT) {
    SECOND_INPUT.value = FIRST_INPUT.value;
  } else {
    FIRST_INPUT.value = SECOND_INPUT.value;
  }
};

const onChange = (e) => {
  const DELAY = 1000;
  setTimeout(copyInputValue, DELAY, e.target);
};

FORM.addEventListener('change', onChange);
