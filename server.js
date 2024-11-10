const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the src directory
app.use(express.static(__dirname))

// Basic route handler for the root path
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "src", "index.html"));
// });

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// const express = require("express")
// const path = require("path")
// const app = express()
// const port = 3000

// app.use("/", express.static(path.join(__dirname, "src")))

// app.listen(3000)


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })