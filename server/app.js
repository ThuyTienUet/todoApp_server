let path = require('path');
let express = require('express');
let app = express();
let server = require('http').Server(app);
let routes = require('./routes/index');

const models = require('./database/db-connect');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api', routes);

server.listen(3001, function () { 
	console.log('\n============================ LISTENING ON PORT 3001================================\n');
});
