const express = require('express');
const app = express();
const port = 80;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	const url = req.originalUrl;
	console.log(url);
	
	if(url === "/")
	{
		res.sendFile(__dirname + '/apps.html');
	}
	else
	{
		res.send("<h1>404</h1>");
		res.end();
	}
	

});

app.listen(port, () => console.info(`Listening on port ${port}`));
