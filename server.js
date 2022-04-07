//initialize the npm modules
const inquirer = require('inquirer');
const figlet = require('figlet');

//call files from lib folder
const connection = require("./lib/loginsql");
const commandMenuChoices = require('./lib/commandmenu');
const questions = require('./lib/questions');

//connects to my classes
const InquirerFunctions = require('./lib/inquirer');
const SQLquery = require('./lib/queriessql');

//This array contains the inquirer prompt types I use
const inquirerTypes = [
    'input', 'confirm', 'list'
]

//This line of code runs a synchronous function through the figlet npm that displays the designated text string in the console
console.log(figlet.textSync('Employee Management', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

//This line begins the app calling the main menu function
mainMenu();

//This function renders the mainmenu options and the directs the user to the proper places based on their choice
function mainMenu() {

    //This is calling the class Inquirer functions to create an instance of the class
    const menuPrompt = new InquirerFunctions(inquirerTypes[2], 'menuChoice', questions.mainMenuPrompt, commandMenuChoices);
    
    //This code runs a list type inquirer for the choice of what option to choose at the main menu.
    inquirer
    //The menuPrompt.ask() is coming from my InquirerFunctions and creating an object of the inquirer parameters that I deliver in the prompts array
        .prompt([menuPrompt.ask()]).then(operation => {

            //This is a general sql query to grab all the roles in database
            //An instance of mySQL query is created to be called in the switch function below
            const query1 = "SELECT role.title FROM role"
            const compRolesArrayQuery = new SQLquery(query1);

            //This is general sql query to grab all the departments in the database
            //An instance of mySQL query is created to be called in the switch function below
            const depNameQuery = "SELECT department.name FROM department";
            const depNamesArrayQuery = new SQLquery(depNameQuery);

            switch (operation.menuChoice) {

                case commandMenuChoices[2]:
                    //This is the case where user can view all the employees in the company
                    return viewAllEmp();

                case commandMenuChoices[3]:
                    //This is the case where a user can view all the employees in a given department
                    //queryReturnResult() is a method in my SQLqueries class that will run a query and return the result
                    // to the function delivered as the parameter
                    depNamesArrayQuery.queryReturnResult(viewAllEmpDep);
                    break;

                case commandMenuChoices[4]:
                    //This is the case where a user can view all the employees under a given manager
                    const actionChoice5 = "VIEW BY MANAGER"
                    // return viewAllEmpManager
                    dummyArr = [];
                    //This is calling the employee info prompts from below and delivering parameters to run it.
                    EmpInfoPrompts(dummyArr, actionChoice5);
                    break;

                case commandMenuChoices[5]:
                    //This is the case where user can view all the employes by their role title.  Salary and Department will also be listed
                    //GetqueryNoRepeats() is a method in the sqlQueries file that 
                    compRolesArrayQuery.getQueryNoRepeats(viewAllEmpRole)
                    break;

                case commandMenuChoices[6]:
                    //This is the case where user can view all the managers and the departments they are in
                    return viewAllManager();

                case commandMenuChoices[11]:
                    //This is the case for adding an employee
                    const actionChoice1 = "ADD"
                    compRolesArrayQuery.getQueryNoRepeats(EmpInfoPrompts, actionChoice1);

                    break;

                case commandMenuChoices[12]:
                    //This is the case for deleting an employee
                    const actionChoice2 = "DELETE"
                    compRolesArrayQuery.getQueryNoRepeats(EmpInfoPrompts, actionChoice2);
                    break;

                case commandMenuChoices[13]:
                    //This is the case for the update an employees role funtion
                    const actionChoice3 = "UPDATE EMP ROLE"
                    compRolesArrayQuery.getQueryNoRepeats(EmpInfoPrompts, actionChoice3);

                    break;

                case commandMenuChoices[14]:
                    //This is the case for updating an employees manager
                    const actionChoice4 = "UPDATE EMP MANAGER";
                    compRolesArrayQuery.getQueryNoRepeats(EmpInfoPrompts, actionChoice4);
                    break;

                case commandMenuChoices[1]:
                    //This is the case for viewing all roles in the company.  It also shows salary and department the role is under
                    return viewAllRoles();

                case commandMenuChoices[9]:
                    //This is the case for adding a role to database.
                    return addRole();

                case commandMenuChoices[10]:
                    //This is the case for deleting a role to database.
                    const actionChoice7 = "DELETE ROLE";
                    compRolesArrayQuery.getQueryNoRepeats(deleteRole, actionChoice7);
                    break;
                // return removeRole();

                case commandMenuChoices[0]:
                    //This is the case for viewing all the departments by name in the company
                    return viewAllDep();

                case commandMenuChoices[7]:
                    //This is the case where user can add a department to database
                    depNamesArrayQuery.queryReturnResult(addDep);
                    break;

                case commandMenuChoices[8]:
                    //this is the case where user can delete a department from database
                    depNamesArrayQuery.queryReturnResult(removeDep);
                    break;
            }
        })
}
