const os = require("os");

// //info about current user
const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  //method
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
// // console.log(currentOs);

// //path module
const path = require("path");
// // console.log(path.resolve());
// // console.log(path.sep);

const filepath = path.join("/content", "subfolder", "test.txt");
// console.log(filepath);

const base = path.basename(filepath);
// console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(absolute);
// read and write files sync
console.log("start");
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
// read and write files
const { readFile, writeFile } = require("fs");
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first} , ${second}`,
  { flag: "a" }
);
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/subfolder/result-sync.txt",
      //   "utf-8",
      `Here is the result :  ${first} , ${second} `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task ");
      }
    );
  });
});

console.log("starting next task");
// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// create a file
// flag ecrit de nouveau sur le fichier crée
// console.log(first + second);
