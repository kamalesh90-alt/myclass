import { Component } from '@angular/core';

@Component({
  selector: 'app-selectionlist',
  templateUrl: './selectionlist.component.html',
  styleUrl: './selectionlist.component.css'
})
export class SelectionlistComponent {
  displayCars: boolean = true;
  selectedVehicle: string = '';

  cars: string[] = ["BMW", "Ford", "Mercedes", "Porsche", "Lamborghini", "Rolls Royce"];
  bikes: string[] = ["Yamaha", "Honda", "Ducati", "Kawasaki", "Harley-Davidson", "Royal Enfield"];

  toggleDisplay(showCars: boolean): void {
    this.displayCars = showCars;
    this.selectedVehicle = '';  
  }

  selectVehicle(vehicle: string): void {
    this.selectedVehicle = vehicle;
  }
}
