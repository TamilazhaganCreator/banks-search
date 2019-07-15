import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankModel, LocationBankModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  currentLocationBanks: BankModel[] = []
  allLocationBanks: LocationBankModel[] = []

  constructor(private http: HttpClient) { }

  getBanks(city) {
    return this.http.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
  }
}
