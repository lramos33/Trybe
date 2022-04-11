class Person {
  private _name: string;
  private _birthDate: Date;

  constructor (name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31536000000 // 1 year = 31536000000 milliseconds
    return Math.floor(diff / yearMs);
  }

  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('BirthDate cannot be from the future');
    }

    if (Person.getAge(value) > 120) {
      throw new Error('Person must not be over 120 years old');
    }
  }
}

export default Person;