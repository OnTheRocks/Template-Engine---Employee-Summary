const fs = require("fs");


const inquirer = require("inquirer");
const jest = require("jest");

const Manager = require("./lib/Manager");
const managerFunc = require("./templates/manager");
const engineerFunc = require("./templates/engineer");

const profiles = [];

const engineerPrompts = [
  {
    type: "input",
    name: "name",
    message: "Enter Engineer's Name"
  },
  {
    type: "input",
    name: "id",
    message: "Enter Engineer's ID"
  },
  {
    type: "input",
    name: "email",
    message: "Enter Engineer's Email"
  },
  {
    type: "input",
    name: "gitHub",
    message: "Enter Engineer's GitHub username"
  },
  {
    type: "list",
    name: "role",
    message: "Which type of employee would you like to enter?",
    choices: ["Engineer", "Intern", "No more additions"]
  }
 ]

 const internPrompts = [
  {
    type: "input",
    name: "name",
    message: "Enter intern's Name"
  },
  {
    type: "input",
    name: "id",
    message: "Enter intern's ID"
  },
  {
    type: "input",
    name: "email",
    message: "Enter intern's email"
  },
  {
    type: "input",
    name: "school",
    message: "Enter intern's school"
  },
  {
    type: "list",
    name: "role",
    message: "Which type of employee would you like to enter?",
    choices: ["Engineer", "Intern", "No more additions"]
  }
 ]


    console.log("Let's build your team...");

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name"
    },
    {
      type: "input",
      name: "id",
      message: "Enter your ID"
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter your Office Number"
    },
    {
      type: "confirm",
      name: "nextEmp",
      message: "Do you have another employee to add?",
    }
  ])

  .then(function(answers) {
    let manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
    const templateReturn = managerFunc(manager);
    profiles.push(templateReturn);
console.log(profiles);

if (answers.nextEmp) {
  var {role} = inquirer.prompt({
      type: "list",
      name: "role",
      choices: ["Engineer", "Intern"],
      message: "Would you like to add an engineer or an intern?"
  })
}else {
  return;
}

  });
