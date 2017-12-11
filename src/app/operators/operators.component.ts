import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {OperatorsService} from '../shared/services/operators.service';
import {IOperator} from '../shared/models/operator.model';
import {IPrice} from '../shared/models/price.model';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})

export class OperatorsComponent implements OnInit, OnDestroy {
  getOperatorsObs: Subscription;
  getOperatorObs: Subscription;
  operators: Array<IOperator> = [];

  constructor(private operatorsService: OperatorsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getOperators();
  }

  ngOnDestroy() {
    this.getOperatorsObs.unsubscribe();
    this.getOperatorObs.unsubscribe();
  }

  getOperators(): void {
    this.getOperatorsObs = this.operatorsService.getOperators()
      .subscribe((operators: Array<IOperator>) => {
        this.operators = operators;
        this.getOperatorPrice();
      });
  }

  getOperatorPrice(): void {
    this.getOperatorObs = this.operatorsService.getPrice()
      .subscribe((price: IPrice) => {
        const foundOperator: IOperator = this.operators.find((operator: IOperator) => operator.operatorId === price.operatorId);
        if (foundOperator) {
          foundOperator.prices.unshift(price);
        }
      });
  }

  expandOperator(event: any, operator: IOperator): void {
    event.stopPropagation();
    operator.isExpand = !operator.isExpand;
  }

  operatorDetail(operator: IOperator): void {
    this.router.navigate(['/operators', operator.operatorId]);
  }
}
