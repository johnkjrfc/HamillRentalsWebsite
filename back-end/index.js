const express = require('express');
const cors = require('cors');               //access server from different domain
const bodyParser= require('body-parser');   //opt? likeley needed for post features
const router = require("./routes/router")

const app = express();

app.use(bodyParser.json());                         //parses body from our forms as json so we can use it
app.use(bodyParser.urlencoded({extended: false}));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use('/', router)



const port = 4000                       //
const server = app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})