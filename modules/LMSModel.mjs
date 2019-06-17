class lms {

    constructor({title,lessons,description}) {
       this._title=title;
       this._lessons=lessons;
       this._description=description;
    }

    SubjectsModel(){
            title=this._title,
            lessons=this._lessons,
          description=this._description
    }

}

// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getFullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
// 		this.year = year;
//     }
    
//     getCourse() {
//         const course = new Date().getFullYear() - this.year;
//         return course > 5 ? 5 : course;
//     }
// }

  const history = new SubjectsModel({
    title: 'History',
    lessons: 24
  });
  
console.log(history);