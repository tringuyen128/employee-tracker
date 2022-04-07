const inquirer = require('inquirer')
const connection = require('./config/connection')
const cTable = require('console.table')
const figlet = require('figlet')
const chalk = require('chalk')
const validate = require('./javascript/validate')


// Database Connect and Starter Title
connection.connect((error) => {
    if (error) throw error;
    console.log(chalk.orange.bold(`====================================================================================`));
    console.log(``);
    console.log(chalk.yellow.bold(figlet.textSync('Employee Tracker')));
    console.log(``);
    console.log(`                                                          ` + chalk.greenBright.bold('Created By: Tri Nguyen'));
    console.log(``);
    console.log(chalk.orange.bold(`====================================================================================`));
    promptUser();
  });