
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(observer => observer !== fn);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}


class Editor {
  constructor() {
    this.text = [];
    this.eventObserver = new EventObserver();
  }

  insertLine(lineNumber, text) {
    if (lineNumber >= 0 && lineNumber <= this.text.length) {
      this.text.splice(lineNumber, 0, text);
    } else {
      console.error("Invalid line number");
    }
  }

  removeLine(lineNumber) {
    if (lineNumber >= 0 && lineNumber < this.text.length) {
      this.text.splice(lineNumber, 1);
    } else {
      console.error("Invalid line number");
    }
  }

  open() {
    this.eventObserver.notify("open");
  }

  save() {
    this.eventObserver.notify("save");
  }
}


class TextEditor extends Editor {
  constructor() {
    super();
    this.userInput = [];
  }

  receiveUserInput() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter text (type 'EOF' to finish):\n", (line) => {
      if (line.trim() === "EOF") {
        rl.close();
        this.saveToFile();
      } else {
        this.userInput.push(line);
        this.receiveUserInput();
      }
    });
  }

  saveToFile() {
    this.userInput.forEach((line) => {
      this.insertLine(this.text.length, line);
    });
    this.save();
    console.log("Content saved to a file:");
    console.log(this.text.join("\n"));
  }
}


const textEditor = new TextEditor();

textEditor.eventObserver.subscribe((event) => {
  if (event === "open") {
    console.log("Editor is open.");
  } else if (event === "save") {
    console.log("Editor is saving...");
  }
});

textEditor.open();
textEditor.receiveUserInput();