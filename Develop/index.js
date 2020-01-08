const fs = require("fs");

const inquirer = require("inquirer");
const jest = require("jest");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "empName",
      message: "Enter Employee Name (First and Last names)"
    },
    {
      type: "input",
      name: "empID",
      message: "Enter Employee ID"
    },
    {
      type: "list",
      name: "empTitle",
      message: "Employee Title",
      choices: ["Manager", "Engineer", "Intern"]
    }
  ]);
}

promptUser()

.then(function(answers) {  
  // console.log("Employee's Name: " + answers.empName);
  // console.log("Employee's ID: " + answers.empID);
  // console.log("Employee's Title: " + answers.empTitle);

if (answers.empTitle === "Manager")
  // console.log("WOOO HOOO!!!! You're a MANAGER!!!!");
  function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "mngOffice",
      message: "Manager office number?"
    }]);
  }

  promptManager()

.then(function(mng) {
  console.log(mng.mngOffice);
})
 
  
if (answers.empTitle === "Engineer")
  console.log("NICE!  Look at you, engineering the SHIT out of things.");

if (answers.empTitle === "Intern")
  console.log("Lousy Interns.");

});

