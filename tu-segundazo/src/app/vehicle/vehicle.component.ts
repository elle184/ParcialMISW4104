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

  ngOnInit() {
    this.getVehicles();
  }
}
