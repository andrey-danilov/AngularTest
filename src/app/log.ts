export class Log {

  constructor(Count: number, Name: string, date1: Date, Resource: string, randomInt: any) {
    this.id = Count, this.User = Name, this.Date = date1, this.Resource = Resource, this.Transferred = randomInt;
  }
  id: number;
  User: string;
  Date: Date;
  Resource: string;
  Transferred: number;
}
