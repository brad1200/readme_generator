const questions = [
    {
        type: 'input',
        message: 'What is the title for this project?',
        name: 'title',
        default: 'My ReadMe Generator'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        default: 'ex: jake1234'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        default: 'ex: carl24@gmail.com'
    },
    {
        type: 'input',
        message: 'What npm applies to this specific project?',
        choices: ['inquirer 2.3.4', 'inquirer 8.2.4', 'inquirer 7.6.3', 'none of the above'],
        name: 'npm'
    }
];

module.exports = questions;