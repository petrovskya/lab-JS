// TASK A

const DURATION = 2000;

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

function logHi() {
  console.log('Hi');
}

delay(DURATION).then(logHi);

// TASK B

function makeDroids() {
  const droids = [];
  for (let i = 0; i < 10; i++) {
    const droid = () => {
      console.log('D' + i);
    };
    droids.push(droid);
  }
  return droids;
}

for (let d of makeDroids()) {
  d();
}

// TASK C

const getRandomDelay = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const PROMISE = new Promise((resolve, reject) => {
  const MAX_EXECUTION_TIME = 2;
  const MIN_DELAY = 1;
  const MAX_DELAY = 5;
  const delay = getRandomDelay(MIN_DELAY, MAX_DELAY);
  if (delay < MAX_EXECUTION_TIME) {
    resolve(delay);
  }
  reject(delay);
});

PROMISE.then((result) => console.log(`On time! ${result}s < 2s`)).catch(
  (result) => console.log(`Error. ${result}s > 2s `)
);

// TASK D

const STATUSES = {
  fulfilled: 200,
  rejected: 404,
};

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == STATUSES.fulfilled) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  const isFetching = true;
  while (isFetching) {
    let name = prompt('Login?', 'iliakan');
    try {
      let user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
      return user;
    } catch (err) {
      if (err instanceof HttpError && STATUSES.rejected) {
        alert('We can’t find such user.');
      } else {
        throw err;
      }
    }
  }
}

demoGithubUser();
