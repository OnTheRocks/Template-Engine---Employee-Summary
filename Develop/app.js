const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerFunc = require("./templates/manager");
const engineerFunc = require("./templates/engineer");
const internFunc = require("./templates/intern");
const mainFunc = require("./templates/index");

const profiles = [];

const questions = [
  {
    type: "list",
    name: "role",
    message: "Select the team member's role:",
    choices: ["Manager", "Engineer", "Intern"]
  },
  {
    type: "input",
    name: "name",
    message: "Enter name.",
  },
  {
    type: "input",
    name: "id",
    message: "Enter id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address."
  },
  {
    type: "input",
    name: "gitHub",
    message: "Enter GitHub username.",
    when: (answers) => answers.role === "Engineer",
  },
  {
    type: "input",
    name: "school",
    message: "Enter name of school.",
    when: (answers) => answers.role === "Intern",
  },
  {
    type: "input",
    name: "officenumber",
    message: "Enter office number.",
    when: (answers) => answers.role === "Manager",    
  },
  {
    type: "confirm",
    name: "nextEmp",
    message: "Do you have another employee to add?",
  }
];
    console.log("Let's build your team...");

function engage() {
  inquirer.prompt(questions)

  .then(function(answers) {
    if (answers.role === "Manager") {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      const templateReturn = managerFunc(manager);
      profiles.push(templateReturn);   
  }
    if (answers.role === "Engineer") {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
      const templateReturn = engineerFunc (engineer);
      profiles.push(templateReturn);  
  }
  if (answers.role === "Intern") {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      const templateReturn = internFunc (intern);
      profiles.push(templateReturn)
  }

  if(answers.nextEmp === false) {

    const html = mainFunc(profiles);
     
    fs.writeFileSync("./output/index.html", html);

    console.log("Your team file has been created.")
  }
  else {
    engage();
  }

  });
}
engage();