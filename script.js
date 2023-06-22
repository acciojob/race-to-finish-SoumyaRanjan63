window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPromiseWithRandomTime() {
  return new Promise((resolve) => {
    const randomTime = getRandomTime(1000, 5000);
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  });
}

const promises = Array.from({ length: 5 }, createPromiseWithRandomTime);

Promise.any(promises)
  .then((result) => {
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

