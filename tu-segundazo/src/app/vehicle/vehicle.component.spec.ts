import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle.component';
import { VehicleService } from './service/vehicle.service';
import { Vehicle } from './object/Vehicle';

describe('BookListComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleComponent ],
      providers: [ VehicleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;

    component.vehicles = [
      new Vehicle(
        faker.number.int()
        , faker.vehicle.manufacturer()
        , faker.vehicle.type()
        , faker.lorem.word()
        , faker.number.int()
        , faker.number.int()
        , faker.vehicle.color()
        , faker.image.url().toString())
      , new Vehicle(
        faker.number.int()
        , faker.vehicle.manufacturer()
        , faker.vehicle.type()
        , faker.lorem.word()
        , faker.number.int()
        , faker.number.int()
        , faker.vehicle.color()
        , faker.image.url().toString())
      , new Vehicle(
        faker.number.int()
        , faker.vehicle.manufacturer()
        , faker.vehicle.type()
        , faker.lorem.word()
        , faker.number.int()
        , faker.number.int()
        , faker.vehicle.color()
        , faker.image.url().toString())
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('should have an dd element ', () => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(component.vehicles[0].marca)
  });

 });
