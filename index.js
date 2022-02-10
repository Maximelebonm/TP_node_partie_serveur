const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const cors = require("cors");

const corsOptions = {
    origin : ["http://localhost:3000"]
};
app.use(cors(corsOptions));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.json());

app.use(router);

router.route("/").get((req, res) => {
    
    res.send((req.method + req.path));
});

router.route("/form").post((req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log("recup");
    res.send((req.method + req.path + email + password));
});

router.route("/").post((req, res) => {
  
    res.send((req.method + req.path));
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});