const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

function writeFile(path, content) {
    // TODO: Create a file in the output folder

    const generateREADME = generateMarkdown(content);

    fs.writeFile("../README.md", 'utf8', (err) =>
        err ? console.error(err) : console.log('I did something')
    );


}




fs.writeFile('README.md',)

module.exports = {
    writeFile
};