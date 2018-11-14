import {Component, Input, OnInit} from '@angular/core';
import {CompanyServes} from './company.serves';
import {Company} from '../company';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() company;
  constructor(private companyService: CompanyServes) { }

  companyname;
  quota;
  companies: Company[] = [];

  NewCompany: Company;
  ngOnInit() {
    this.companies = this.companyService.Companies;
  }
  AddItem() {


    this.NewCompany = {name:  this.companyname, quota: this.quota};
    this.companyService.AddItem(this.NewCompany);
  }

}
