const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Test App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(45deg, #f3f4f6, #ddd);
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            padding: 20px;
            max-width: 500px;
            width: 100%;
          }
          h1 {
            color: #333;
            margin-top: 0;
          }
          .info {
            background-color: #f0f8ff;
            border-left: 4px solid #1e90ff;
            padding: 10px;
            margin: 15px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Test Application</h1>
          <div class="info">
            <p><strong>Server Info:</strong></p>
            <p>Node.js ${process.version}</p>
            <p>Hostname: ${process.env.HOSTNAME || 'unknown'}</p>
            <p>Time: ${new Date().toISOString()}</p>
          </div>
          <p>This is a simple Node.js application built with Docker.</p>
        </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
