const express = requiire(`express`)
const app = express()
const fs = require(`fs`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

var port = process.env.PORT || 80
app.listen(port, () => {
    console.log("Server Running at Localhost :80")
})
app.get(`/`, (req, res) => {
    res.sendfile(`.public/index.html`);
});