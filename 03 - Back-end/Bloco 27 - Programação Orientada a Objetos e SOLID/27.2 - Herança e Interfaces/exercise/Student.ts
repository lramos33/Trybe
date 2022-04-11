import Person from "./Person";

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('Enrollment must be at least 16 characters long');
    }
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('Student can only have 4 exams grades');
    }
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('Student can only have 2 works grades');
    }
    this._worksGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}

export default Student;