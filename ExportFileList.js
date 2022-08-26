const fs = require('fs');
const readLineSync = require('readline-sync');
const path = require('path');
const prompt = require('prompt');
const pathName = '';
const fileList = 'fileList.txt';
const sysFileName = '.DS_Store';
let content = '';


function readAllFileNameFromPath (pathName) {
    let isDirectory = fs.lstatSync(pathName).isDirectory();
    if(isDirectory) {
        fs.readdir(pathName, function(error, items) {
            if(error) {
                console.log('error');
            } else {
                items.forEach(item => {
                    let fullPath = `${pathName}/${item}`;
                    readAllFileNameFromPath(fullPath);
                })
            }
        })
    } else if(!pathName.includes(sysFileName)) {
        let fileName = path.parse(pathName).name;
        content += `${fileName} - ${fileName}\n`;
        // fs.appendFile(fileList, `${fileName} - ${fileName}\n`, (err) => {
        //     console.log(err);
        // });
        console.log('filename: ' + fileName);
        console.log(content);
    }
}

// const start = async function (pathName) {
//     if(!fs.existsSync(fileName)) {
//         fs.appendFileSync(fileName, '', 'utf8');
//     } else {
//         fs.truncate(fileName, 0, async function(){
//             console.log(`Truncate ${fileName} done.`);
//             await readAllFileNameFromPath(pathName).then(resp => {
//                 console.log('here');
//             }).finally(fin => {
//                 console.log('fin')
//             });
//             await console.log(content);
//         });
//     }
// };

// const readAllFileNameFromPath =  async function (pathName) {
//     return new Promise(resolve => {
//         let isDirectory = fs.lstatSync(pathName).isDirectory();
//         if(isDirectory) {
//             fs.readdir(pathName, function(error, items) {
//                 if(error) {
//                     console.log('error');
//                 } else {
//                     items.forEach(item => {
//                         let fullPath = `${pathName}/${item}`;
//                         readAllFileNameFromPath(fullPath);
//                     })
//                 }
//             })
//         } else if(!pathName.includes(sysFileName)) {
//             let fileName = path.parse(pathName).name;
//             content += `${fileName}\n `;
//             console.log('filename: ' + fileName);
//             // console.log(content);
//         }
//         return resolve(pathName);
//     })  
// };

// start(pathName);