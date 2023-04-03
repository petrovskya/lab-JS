// TASK A

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

function logHi() {
  console.log('Hi');
}
delay(2000).then(logHi);

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

const randomDelay = (min, max) => {
  let delay = min + Math.random() * (max + 1 - min);
  return Math.floor(delay);
};

const PROMISE = new Promise((resolve, reject) => {
  const delay = randomDelay(1000, 5000);
  setTimeout(() => {
    if (delay < 2000) {
      resolve(delay / 1000);
    }
    reject(delay / 1000);
  }, delay);
});

PROMISE.then((result) => console.log(`On time! ${result}s < 2s`)).catch(
  (result) => console.log(`Error. ${result}s > 2s `)
);

// TASK D

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Login?', 'iliakan');
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('We can’t find such user.');
      } else {
        throw err;
      }
    }
  }
}
demoGithubUser();
