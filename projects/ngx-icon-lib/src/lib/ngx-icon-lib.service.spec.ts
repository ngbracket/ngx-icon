import { TestBed } from '@angular/core/testing';

import { NgxIconLibService } from './ngx-icon-lib.service';

describe('NgxIconLibService', () => {
  let service: NgxIconLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIconLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
