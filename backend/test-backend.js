// Simple test to verify backend functionality
const http = require('http');

// Test health endpoint
console.log('Testing backend on localhost:5000...\n');

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/health',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('✓ Backend is running!');
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
    process.exit(0);
  });
});

req.on('error', (error) => {
  console.error('✗ Backend is NOT running or not responding');
  console.error('Error:', error.message);
  console.error('\nTo start the backend, run:');
  console.error('  npm install');
  console.error('  npm run dev');
  process.exit(1);
});

req.end();
