# Installation

## Init Project
```bash
npm init -y
```

##  Install backend server **express js**
```bash
npm install --save express
```

## Run server
```bash
node public/index.js
```
## Nodemon
In the above configuration the changes doesn't reflect until you stop server and restart it. Nodemon come in this situation which reloads the server when file changes. **Importantly :** Install it as development dependecny.
```bash
npm install --save-dev nodemon
```

## Update scripts
Add the below section in scripts section of ```package.json```.
```json
"scripts": {
    "dev": "nodemon public/index",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

After adding those scripts you can run server as:
```bash
npm run dev
```

## Use babel
Install below dependency to use ES6
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node 
```

Now add  ```.babelrc``` file with the follwing content

```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

Now change the require ```express``` statement to ```import``` and ```index.js``` file looks like:
```js
import Express from 'express'

const app = Express()

app.listen(3000, () => {
    console.log('Server started.')
});
```
 
Use the above commands to run server.
```bash
npm run dev
```