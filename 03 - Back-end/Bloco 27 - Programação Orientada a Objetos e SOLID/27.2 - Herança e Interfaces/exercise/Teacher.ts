import Subject from './Subject';
import Employee from './Employee';
import Person from './Person';

class Teacher extends Person implements Employee {

  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this.salary = salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration
  }

  set registration(value: string) {
    if (value.length < 16) {
      throw new Error('Registration must be at least 16 characters long');
    }

    this._registration = value
  }

  get salary(): number {
    return this._salary
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('Salary must be positive');
    }

    this._salary = value
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('Admission data can not be from the future');
    }

    this._admissionDate = value
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }
}

export default Teacher;