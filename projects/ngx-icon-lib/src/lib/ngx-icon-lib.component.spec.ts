import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIconLibComponent } from './ngx-icon-lib.component';

describe('NgxIconLibComponent', () => {
  let component: NgxIconLibComponent;
  let fixture: ComponentFixture<NgxIconLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxIconLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxIconLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
