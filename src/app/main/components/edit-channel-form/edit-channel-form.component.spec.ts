import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChannelFormComponent } from './edit-channel-form.component';

describe('EditChannelFormComponent', () => {
  let component: EditChannelFormComponent;
  let fixture: ComponentFixture<EditChannelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditChannelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditChannelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
