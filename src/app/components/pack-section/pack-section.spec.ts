import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackSection } from './pack-section';

describe('PackSection', () => {
  let component: PackSection;
  let fixture: ComponentFixture<PackSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackSection],
    }).compileComponents();

    fixture = TestBed.createComponent(PackSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
