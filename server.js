const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Register the logger middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('IFT 458 Middleware Lab is working!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
