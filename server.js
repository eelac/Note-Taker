const express = require("express");
const app = express();
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
