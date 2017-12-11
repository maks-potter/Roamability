import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {OperatorsService} from '../shared/services/operators.service';
import {IPrice} from '../shared/models/price.model';
import {IOperator} from '../shared/models/operator.model';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.scss']
})

export class OperatorDetailComponent implements OnInit, OnDestroy {
  routerParamsObs: Subscription;
  getOperatorsObs: Subscription;
  getOperatorObs: Subscription;
  operators: Array<IOperator> = [];
  operatorId: number;
  selectedOperator: IOperator;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private operatorsService: OperatorsService) {
  }

  ngOnInit() {
    this.routerParamsObs = this.route.params
      .subscribe((params: Params) => {
        this.operatorId = +params['id'];
        this.getOperators();
      });
  }

  ngOnDestroy() {
    this.routerParamsObs.unsubscribe();
    this.getOperatorsObs.unsubscribe();
    this.getOperatorObs.unsubscribe();
  }

  backToOperators(): void {
    this.router.navigate(['/operators']);
  }

  getOperators(): void {
    this.getOperatorsObs = this.operatorsService.getOperators()
      .subscribe((operators: Array<IOperator>) => {
        this.operators = operators;
        this.selectedOperator = operators.find((operator: IOperator) => operator.operatorId === this.operatorId);
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

  checkCurrentPrice(): string {
    if (this.selectedOperator && this.selectedOperator.prices.length > 1) {
      if (this.selectedOperator.prices[0].price === this.selectedOperator.prices[1].price) {
        return '';
      } else {
        return this.selectedOperator.prices[0].price > this.selectedOperator.prices[1].price ? 'red' : 'green';
      }
    } else {
      return '';
    }
  }
}
