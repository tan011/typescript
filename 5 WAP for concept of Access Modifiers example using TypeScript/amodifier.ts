class Student {
  public studCode: number;
  protected studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
}
class Person extends Student {
  private department: string;

  constructor(code: number, name: string, department: string) {
    super(code, name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `My Roll No.: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`;
  }
}
let joeRoot: Person = new Person(49, "Smit Patel", "IT");
console.log(joeRoot.getElevatorPitch());
