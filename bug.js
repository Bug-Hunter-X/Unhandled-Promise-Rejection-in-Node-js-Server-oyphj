const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  doAsyncOperation(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  }, (error) => {
    // Handle the error appropriately
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

function doAsyncOperation(successCallback, errorCallback) {
  // Simulate asynchronous operation with a random chance of failure
  const randomNumber = Math.random();
  if (randomNumber < 0.8) { // 80% chance of success
    setTimeout(() => {
      successCallback();
    }, 1000);
  } else {
    setTimeout(() => {
      errorCallback(new Error('Simulated asynchronous operation failed'));
    }, 1000);
  }
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});