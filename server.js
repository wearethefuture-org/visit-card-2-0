const express = require('express');
const app = express();
const path = require('path');

const frontFolder = path.join(__dirname, 'build');

app.get('/', function(req, res) {
  res.sendFile(path.join(frontFolder, 'index.html'));
});

app.use('/', express.static(frontFolder));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
