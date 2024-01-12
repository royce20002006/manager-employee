const Employee = require('./employee');

class Manager extends Employee{
  constructor(name, salary, title, manager, employees = []) {
    super(name, salary, title, manager),
    this.employees = employees
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

_totalSubSalary() {
  let sum = 0;
  for (let employee of this.employees) {
    if (employee instanceof Manager) {
      sum += employee.salary;
      sum += employee._totalSubSalary();
    } else if(employee instanceof Employee){
      sum += employee.salary;
    }
    
  }
  return sum;
} 
calculateBonus(multiplier) {
  return (this.salary + this._totalSubSalary()) * multiplier;
}

}





module.exports = Manager;