const express = require("express");
const router = express.Router();

const app = express();
const cors = require("cors");
const corsOptions = {
    origin : ["http://localhost:3000"]
};
app.use(cors(corsOptions));

app.use(router);

router.route("/").get((req, res) => {
    
    res.send((req.method + req.path));
});

router.route("/test").get((req, res) => {
  
    res.send((req.method + req.path));
});

router.route("/").post((req, res) => {
  
    res.send((req.method + req.path));
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});