const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber
  };
}

module.exports = Manger;