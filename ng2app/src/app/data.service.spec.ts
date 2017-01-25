/* tslint:disable:no-unused-variable */

// imports needed for Http testing
import {
  inject,
  fakeAsync,
  tick,
  TestBed
} from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';

// import class under test

import { DataService } from './data.service';

fdescribe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,

        // Http MockBackend
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get Items',
    inject([DataService, MockBackend],
      fakeAsync((dataService, mockBackend) => {
        var res; mockBackend.connections.subscribe(c => {
          expect(c.request.url).toBe('http://demo7959174.mockable.io/');
          let response = new ResponseOptions({ body: '[{"id": 1, "name": "Item 1"}]' });
          c.mockRespond(new Response(response));
        });
        dataService.getDataObservable().subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res[0].name).toBe('Item 1');
      }))
  );
});
