import { Component, OnInit } from '@angular/core';
import { VehicleService } from './service/vehicle.service';
import { Vehicle } from './object/Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles : Array<Vehicle> = [];

  constructor(private vehicleService : VehicleService) { }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(list => {
      this.vehicles = list;
    });
  }

  getGroupedVehicles() {
    let vehicleNames = new Array();
    let indexVehicle = 0;

    this.vehicles.forEach(v => {
        indexVehicle += 1;
        vehicleNames[indexVehicle] = v.marca;
    });

    indexVehicle = 0;
    let vehicleName = "";
    let groupedVehicles = new Array();

    vehicleNames.sort().forEach(v => {
      if (vehicleName !== v) {
        vehicleName = v;
        groupedVehicles[indexVehicle] = v;
        indexVehicle++;
      }
    });

    return groupedVehicles;
  }

  getTotalByVehicle(vehicleBrand : string) {
    let totalVehicles = 0;

    this.vehicles.forEach(v => {
      if (vehicleBrand == v.marca) {
        totalVehicles++;
      }
    });

    return totalVehicles;
  }

  ngOnInit() {
    this.getVehicles();
  }
}
