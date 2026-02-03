//complete this code
class Person {
	protected name: string;
    protected age: number;
	constructor(name:string, age: number){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name
	}
	get age(): number {
    return this.age;
  }

	set age(age : number){
		this.age = age
	}
	set name(name:string){
		this.name = name
	}
}

class Student extends Person {
	 study(): void {
    console.log(`${this.name} is studying`);
  }
	
}

class Teacher extends Person {
	 teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
