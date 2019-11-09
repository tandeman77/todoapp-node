const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const middleware = require('./middleware.js');


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req, res) => {
  res.send('about page');
})

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('Express server started on ' + PORT);
});
