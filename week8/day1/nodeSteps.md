# steps to make a node server

1. `cd` into your folder and do `npm init`. This sets up your folder with a `package.json`.
   ` package.json` is used to track the packages you will be installing for this project. If you clone someones project, you can see the tolls they used by looking at ` package.json`.

2. `npm install` or `npm i` will isntall your tools, namely `express`. This creates a ` package-lock.json` that you won't bother and also creates a folder called `node_modules`. 9/10 times you will never bother `node_modules`.

3. You are ready to start your server by getting the boilerplate written. Create and `index.js` and open it.

4. You have to require all tools you need at the top. Require `express first` like so:

```
const express = require("express")
```

5. You invoke `express` and put it's return value in a variable

```
const app = express()
```

6. Create a port number to use

```
const PORT = 3001
```

7. Listen to your port. This means you are telling your server to listen for a reques ton a certain port.

```
app.listen(PORT, console.log(`Listening on port http://localhost:${PORT}`))
```
