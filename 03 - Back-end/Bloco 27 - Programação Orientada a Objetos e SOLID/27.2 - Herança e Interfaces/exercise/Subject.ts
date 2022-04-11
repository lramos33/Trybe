class Subject {
  private _name: string;

  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }
}

export default Subject;