## Notes

We all are more or less familiar with JavaScript, or have at least worked with it at some point. If you're not comfortable yet, you can check out these blogs for a quick refresher:

1. [Dissecting JavaScript I](https://hashnode.com/post/clw1sau0k000j0al02difafqv)  
2. [Dissecting JavaScript II](https://hashnode.com/post/clxxmn38v000508jt2ydi6tc0)

If you’re good with the basics, feel free to follow along from here.

---

JavaScript usually runs inside a browser using JavaScript engines like **Chrome’s V8** or **Firefox’s SpiderMonkey**. But for a long time, we couldn’t run JavaScript outside the browser — it was limited to client-side scripting.

That changed around **2009**, when a smart developer named **Ryan Dahl** took the V8 engine out of the browser and embedded it with C++ to create a runtime environment where JavaScript could run on servers or even your local machine. This was the birth of **Node.js**.

> 🧠 **Fun Fact:** The most popular JavaScript engine is Google Chrome’s **V8** engine.

---

### 🚀 Benefits of Node.js:
- Lets you execute JavaScript outside the browser.
- JavaScript can now interact with your machine, thanks to the C++ bindings.
- You can build web servers, APIs, CLIs, and even desktop apps — all using JavaScript.

So, to sum it up:

> **Node.js is a JavaScript runtime environment.**  
> It uses the V8 engine to execute code and provides built-in libraries to handle things like file systems, HTTP, events, and more.

That’s the core idea — Node.js makes JavaScript a full-fledged backend language!

---
### 📦 Installation & Setup

#### ✅ For Windows:
Head over to the [Node.js official website](https://nodejs.org/en/download/) and download the installer. It’s simple and straightforward.

#### ✅ For macOS:
You can install Node.js using [Homebrew](https://brew.sh/). Just run:
```bash
brew install node
```

#### ✅ For Linux (Ubuntu example):
Use the system's package manager. For Ubuntu:
```bash
sudo apt install nodejs
```

Once installed, confirm everything’s working by checking the versions:
```bash
node -v
npm -v
```

---

### 🧪 Using Node.js

You can run Node.js in two common ways:

#### 1. **REPL (Read-Eval-Print Loop)**
This is an interactive shell where you can test JavaScript code line by line.

Start it by typing:
```bash
node
```
Then try something like:
```javascript
console.log("Hello, World!");
```

To exit, press `Ctrl + C` twice or type `.exit`.

#### 2. **Script File**
Write your JavaScript code in a file (like `app.js`) and run it with:
```bash
node app.js
```

---

### 📦 npm (Node Package Manager)

`npm` comes installed with Node.js and is used to install/manage libraries or packages in your projects.

Check if it’s installed with:
```bash
npm -v
```

---

### 🛠 Let's Try It Out

Create a simple file called `hello.js` and add:
```javascript
console.log("Hello, Node.js!");
```

Now run it in the terminal:
```bash
node hello.js
```

---

### 🌐 `window` vs `global` in Node.js

If you try to run this:
```javascript
console.log(window);
```
You’ll get an error: `window is not defined`.

That’s because `window` is specific to browsers — it's the global object representing the browser window.

In Node.js, there’s no `window`. Instead, you have:
```javascript
console.log(global);
```

This `global` object holds Node's global variables and functions.

You can also use:
```javascript
console.log(this);
```
In most cases, this behaves like `global` in Node's top-level context.

---

### 🚀 Starting a New Node.js Project

Let’s create a fresh Node.js project using `npm`:

```bash
mkdir my-node-project
cd my-node-project
npm init -y
```

This will:
- Create a new folder called `my-node-project`
- Initialize a Node.js project inside it
- Auto-generate a `package.json` file with default values

---

### 📄 What’s in `package.json`?

This is like a configuration file. It stores:
- Project name and version
- Dependencies (packages you install)
- Scripts (custom terminal commands)
- And some metadata

Open it in your favorite text editor and take a look!


### What is modular programming?
Modular programming is a software design technique that emphasizes breaking down a program into smaller, manageable, and reusable pieces called modules. Each module encapsulates a specific functionality or feature, making it easier to develop, test, and maintain the code.

### Benefits of Modular Programming:
- **Reusability**: Modules can be reused across different projects, reducing code duplication.
- **Maintainability**: Smaller modules are easier to understand and modify, making it simpler to fix bugs or add new features.
- **Collaboration**: Multiple developers can work on different modules simultaneously, improving team productivity.
- **Encapsulation**: Modules can hide their internal implementation details, exposing only the necessary interfaces to interact with other parts of the program.
- **Scalability**: Modular design allows for easier scaling of applications as new features can be added by creating new modules without affecting existing ones.

Now, let's explore how to create and use modules in Node.js in our pre-created project `my-node-project`.

### Creating a Module in Node.js

1. **Create a new file**: Inside your `my-node-project` folder, create a new file called `math.js`.

2. **Define your module**: In `math.js`, define some functions that you want to export. For example:
```javascript
// math.js
function add(a, b) {
  return a + b;
}
```

> You can obviously add more functions like subtract, multiply, divide, etc.

3. **Export your module**: At the end of `math.js`, export the functions you want to make available to other files:
```javascript
// math.js
module.exports = {
  add,
};
```

4. **Use your module**: In another file (e.g., `app.js`), import your module and use its functions:
```javascript
// app.js
const math = require('./math');
const sum = math.add(5, 3);
console.log(`The sum is: ${sum}`);
```

Now, lets do some modifications in the `package.json` file to add a script to run the app.js file.

### Adding a Script to `package.json`

1. Open `package.json` in your project folder.
2. Find the `"scripts"` section and add a new script to run your `app.js` file:
```json
"scripts": {
  "start": "node app.js"
}
```
3. Save the file.

### Running Your Project

Now, you can run your project using the command:
```bash
npm start
```
This will execute the `app.js` file, and you should see the output:
```
The sum is: 8
```
