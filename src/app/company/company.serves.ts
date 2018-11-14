import {Company} from '../company';

export class CompanyServes {

  Companies: Company[] = [
    {name: 'Apple' , quota: '10TB' },
  ];

  AddItem(company:  Company) {
    this.Companies.push(company);
  }


}
