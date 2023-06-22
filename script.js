const promises = [];

// Add five promises that resolve with random times between 1 and 5 seconds
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  });
  promises.push(promise);
}

// Use Promise.any to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

