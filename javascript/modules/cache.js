let cachedData = null;

function fetchEventsOnce(category) {
  return new Promise((resolve, reject) => {
    if (cachedData && cachedData[category]) {
      resolve(cachedData[category]);
    } else {
      fetch(`https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`)
        .then(response => response.json())
        .then(data => {
          if (!cachedData) {
            cachedData = {};
          }
          cachedData[category] = data;

          resolve(data);
        })
        .catch(error => {
          console.error("Error:", error);
          reject(error);
        });
    }
  });
}

export { fetchEventsOnce }