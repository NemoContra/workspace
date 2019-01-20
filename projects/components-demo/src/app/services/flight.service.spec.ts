import { TestBed } from '@angular/core/testing';

import { FlightService } from './flight.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Flight } from '../models/flight';

const testFlights: Flight[] = [{
  id: 1,
  from: 'Graz',
  to: 'Hamburg',
  date: '2018-12-08T10:00:00.000Z',
  delayed: false
}, {
  id: 2,
  from: 'Wien',
  to: 'Stuttgart',
  date: '2018-13-08T10:00:00.000Z',
  delayed: false
}];

describe('FlightService', () => {
  let flightService: FlightService;
  let httpTestingControler: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        FlightService
      ]
    });

    httpTestingControler = TestBed.get(HttpTestingController);
    flightService = TestBed.get(FlightService);
  });

  it('should be created', () => {
    const service: FlightService = TestBed.get(FlightService);
    expect(service).toBeTruthy();
  });

  it('should get the flights', () => {
    flightService.getFlights().subscribe(flights => expect(flights).toEqual(testFlights));

    const testRequest: TestRequest = httpTestingControler.expectOne('http://www.angular.at/api/flight');

    testRequest.flush(testFlights);

    httpTestingControler.verify();
  });

  it('should find one flight', () => {
    flightService.findFlights('Graz', 'Hamburg').subscribe(flights => expect(flights).toEqual([{
      id: 1,
      from: 'Graz',
      to: 'Hamburg',
      date: '2018-12-08T10:00:00.000Z',
      delayed: false
    }]));

    const testRequest: TestRequest = httpTestingControler.expectOne('http://www.angular.at/api/flight');

    testRequest.flush(testFlights);

    httpTestingControler.verify();
  });

  it('should throw error', () => {
    flightService.getFlights().subscribe(fail, err => expect(err.error).toEqual({error: true}));

    const testRequest: TestRequest = httpTestingControler.expectOne('http://www.angular.at/api/flight');

    testRequest.flush({error: true}, {status: 500, statusText: 'Internal Server Error'});

    httpTestingControler.verify();
  });
});
