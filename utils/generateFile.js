const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const questions = require('./questions');

function writeFile(path, content) {
    // TODO: Create a file in the output folder

    const generateREADME = generateMarkdown(content);

    fs.writeFile("README.md", `utf8`, (err) =>
        err ? console.error(err) : console.log('I did something')
    );
};





module.exports = {
    writeFile
};