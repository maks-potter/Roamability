import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {OperatorsComponent} from './operators.component';
import {OperatorsService} from '../shared/services/operators.service';
describe('OperatorsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        OperatorsComponent
      ],
      providers: [
        OperatorsService
      ],
    }).compileComponents();
  }));
  // it('should work', async(() => {
  //   const fixture = TestBed.createComponent(OperatorsComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
});
