const questions = [
    {
        type: 'input',
        message: 'What is the title for this project?',
        name: 'title',
        default: 'ex: My ReadMe Generator'
    },
    {
        type: 'input',
        message: 'Give a brief description of how this project will function.',
        name: 'description',
        default: 'ex :I will be creating a simple ReadMe.'
    },
    {
        type: 'input',
        message: 'What needs to be installed for this project to function?',
        name: 'installation',
        default: 'ex: This? Or that? Or maybe even that??'
    },
    {
        type: 'input',
        message: 'How will this project be used?',
        name: 'usage',
        default: 'ex: To help others be able to create a simple ReadMe.'
    },
    {
        type: 'input',
        message: 'What license is going to be used in this project?',
        name: 'license',
        choices: ['ISC', 'LLC', 'TRD', 'None of these options']
    },
    {
        type: 'input',
        message: 'List any contributers below if anyone worked on this project with you!',
        name: 'contributers',
        default: 'ex: Little brother'
    },
    {
        type: 'input',
        message: 'Explain tests used for the project, give detail on how the test work.',
        name: 'tests',
        default: 'ex: Test 1. Test 2. Test 3.'
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
];

module.exports = questions;