import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoppingListComponent } from './sopping-list.component';

describe('SoppingListComponent', () => {
  let component: SoppingListComponent;
  let fixture: ComponentFixture<SoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoppingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
