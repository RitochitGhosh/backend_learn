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

This file is like a project manifest. It stores:
- Project name and version
- Dependencies (packages you install)
- Scripts (custom terminal commands)
- And some metadata

Open it in your favorite text editor and take a look!
