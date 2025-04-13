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

###  📦 Installation & Setup

**For Windows** you can visit the [Node.js website](https://nodejs.org/en/download/) and download the installer.

**For Mac** you can use [Homebrew](https://brew.sh/) to install Node.js:
```bash
brew install node
```
**For Linux** you can use the package manager for your distribution. For example, on Ubuntu:
```bash
sudo apt install nodejs
```
For confirmation, you can check the version of Node.js and npm (Node Package Manager) using:
```bash
node -v
```
You can use NodeJS in two ways:

1. **REPL (Read-Eval-Print Loop)**: This is an interactive shell where you can run JavaScript code line by line. This is useful for testing small snippets of code. To start the REPL, just type:
```bash
node
```
Then you can type JavaScript code directly into the terminal. For example:
```javascript
console.log("Hello, World!");
```
To come out of the REPL, you can press `Ctrl + C` twice or type `.exit`.

2. **Script**: You can write your JavaScript code in a file and run it using Node.js.
```bash
node <filename>.js
```

npm is the package manager for Node.js. It allows you to install and manage libraries and packages that you can use in your projects. You can check if npm is installed by running:
```bash
npm -v
```
It's get installed automatically when you install Node.js.

