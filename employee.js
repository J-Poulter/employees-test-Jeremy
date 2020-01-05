class Employee {
  constructor(name) {
    this.name = name;
    this.personality = 'helpful';
    this.monthsOfEmployment = 0;
    this.onboarding = true;
    this.onCall = this.name.length < 6 ? true : false;
  }
  work() {
    this.monthsOfEmployment += 4;
    if (this.monthsOfEmployment > 5) {
      this.onboarding = false;
    }
  }
}


module.exports = Employee;
