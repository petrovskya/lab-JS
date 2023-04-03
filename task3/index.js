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

const TABLE = document.createElement('table');
document.body.appendChild(TABLE);
const TABLE_TITLE = TABLE.insertRow();
for (let key in DOWNLOADS[0]) {
  const CELL = TABLE_TITLE.insertCell();
  CELL.innerText = key;
}

for (let i = 0; i < DOWNLOADS.length; i++) {
  let ROW = TABLE.insertRow();
  for (let key in DOWNLOADS[i]) {
    const CELL = ROW.insertCell();
    CELL.innerText = DOWNLOADS[i][key];
  }
}

const CHECK_BUTTON = document.createElement('button');
document.body.appendChild(CHECK_BUTTON);
CHECK_BUTTON.innerHTML = 'Start status check';

const TABLE_ROWS = document.querySelectorAll('tr');

const DOWNLOADS_STATUS = Array.from(TABLE_ROWS).map((download) => {
  return download.lastChild.innerText;
});

const changeStatus = (array, сurrentStatus, replacedStatus) => {
  const FOUNDED_INDEX = array.findIndex((status) => status === сurrentStatus);
  array[FOUNDED_INDEX] = replacedStatus;
  TABLE_ROWS[FOUNDED_INDEX].lastChild.innerText = replacedStatus;
};

const checkStatus = () => {
  const CHECK_INTERVAL = setInterval(() => {
    console.log('Check started');
    changeStatus(DOWNLOADS_STATUS, 'Pending', 'Done');
    if (DOWNLOADS_STATUS.every((status) => status !== 'Pending')) {
      clearInterval(CHECK_INTERVAL);
      console.log('Check completed');
    }
  }, 5000);
};

CHECK_BUTTON.addEventListener('click', () => setTimeout(checkStatus, 3000));

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
FORM.addEventListener('change', (e) => {
  setTimeout(copyInputValue, 1000, e.target);
});
