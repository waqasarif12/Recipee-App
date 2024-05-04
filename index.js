require('dotenv').config()
const express = require('express');
const app = express();
const path = require("path")
	
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));;


app.get("/", function(req, res){
	res.render("pages/index")
})


app.listen(process.env.PORT, () => {
  console.log(`getting started`);
});
