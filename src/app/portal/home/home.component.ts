import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from './home.service';
import { DistanceBetweenCitiesInitialData, DistanceBetweenCitiesRequest, CityTransfer } from './home-request-response';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  initialData: DistanceBetweenCitiesInitialData;
  cities: CityTransfer[];
  homeError;
  selectedCity1Name: string;
  selectedCity2Name: string;
  city1: CityTransfer;
  city2: CityTransfer;
  cityMap = {};
  showResults: boolean;
  drivingTime: string;
  averangeSpeed: number;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.showResults = false;
    this.getInitialData();
  }

  getInitialData() {
    this.homeService.findCitiesInitialData().subscribe(
      (initialData: DistanceBetweenCitiesInitialData) => {
        this.initialData = initialData;
        this.cities = this.initialData.cities;

        if (this.cities) {
          this.city1 = this.cities[0];
          this.city2 = this.cities[1];
          this.selectedCity1Name = this.city1['address'];
          this.selectedCity2Name = this.city2['address'];

        }
      },
      (error: Error) => {
        this.homeError = error.message;
      }
    );
  }

  hideResults() {
    this.showResults = false;
  }

  onSubmit(form: NgForm) {
    const origin = form.value['city1Id'].id;
    const destination = form.value['city2Id'].id;
    const speed = form.value['speed'];

    const request = new DistanceBetweenCitiesRequest(origin, destination, speed);

    this.homeService.findDistanceBetweenCities(request).subscribe(
      (response: number) => {

        if (response) {
          this.showResults = true;
        }
        if (response < 1) {
          this.drivingTime = Math.round(response * 60) + ' Minutes';
        } else {
          this.drivingTime = Math.round(response) + ' Hour(s)';
        }

      },
      (error: Error) => {
        console.log(error);
      }
    );
  }
}
