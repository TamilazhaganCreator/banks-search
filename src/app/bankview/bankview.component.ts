import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { BankModel } from './../model';

@Component({
  selector: 'app-bankview',
  templateUrl: './bankview.component.html',
  styleUrls: ['./bankview.component.css']
})
export class BankviewComponent {

  selectedBank: BankModel = new BankModel()
  otherFactors = ["address", "city", "district", "ifsc", "state"]

  constructor(public activatedRoute: ActivatedRoute, public rtr: Router, private global: GlobalService) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedBank = this.global.currentLocationBanks.find(b => b.ifsc == params.get("id"))
    })
  }

  goToHome() {
    this.rtr.navigate([''])
  }
}
