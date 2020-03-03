const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.Port || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendfile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});
