const fs = require('fs');
const path = require('path');


const data = fs.readFileSync('file.txt');
console.log(data); // this gives us a buffer stream
console.log(data.toString()); // this gives us the actual content of the file, when we explicitly convert it to a string


function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`);
        } else {
            console.log(`File content:\n${data}`);
        }
    });
}

function writeFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
        } else {
            console.log('File has been written');
        }
    });
}

const filePath = path.join(__dirname, 'file.txt');

readFile(filePath);


writeFile(filePath, 'File content written by Node.js!'); // this will replace the content of the file with the new content
readFile(filePath);

// Function to append to a file
// function appendFile(filePath, content) {
//     fs.appendFile(filePath, content, 'utf8', (err) => {
//         if (err) {
//             console.error(`Error appending file: ${err}`);
//         } else {
//             console.log('Content has been appended');
//             // Read the file after appending
//             readFile(filePath);
//         }
//     });
// }

fs.appendFileSync('file.txt', 'Hello World!');



// setTimeout(() => {
//     appendFile(filePath, '\nFile is appended with this content.');
// }, 1000);

// we want to append to the file, not replace the content

function copyFile(filePath, newPath) {
    fs.appendFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error appending file: ${err}`);
        } else {
            console.log('Content has been appended');
            // Read the file after appending
            readFile(filePath);
        }
    });
}
copyFile(filePath, 'Hello World!');