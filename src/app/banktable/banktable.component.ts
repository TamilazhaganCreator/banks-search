import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BankModel } from '../model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banktable',
  templateUrl: './banktable.component.html',
  styleUrls: ['./banktable.component.css']
})
export class BanktableComponent implements OnInit {

  @Input() dataSource = new MatTableDataSource()
  @Input() columns: string[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  favouriteBanksIfsc: BankModel[] = []

  constructor(private rtr: Router) { }

  ngOnInit() {
    this.favouriteBanksIfsc = JSON.parse(localStorage.getItem("favouriteBanksIfsc")) || []
    this.dataSource.paginator = this.paginator;
  }

  getFavourite(element: BankModel): boolean {
    return this.favouriteBanksIfsc.findIndex(f => f.ifsc == element.ifsc) > -1
  }

  setFavourite(set: boolean, element: BankModel) {
    if (set) {
      this.favouriteBanksIfsc.push(element)
    } else {
      let index = this.favouriteBanksIfsc.findIndex(f => f.ifsc == element.ifsc)
      this.favouriteBanksIfsc.splice(index, 1)
    }
    localStorage.setItem("favouriteBanksIfsc", JSON.stringify(this.favouriteBanksIfsc));
  }

  viewBank(id) {
    this.rtr.navigate(["bank", id])
  }


}
