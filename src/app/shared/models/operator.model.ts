import {IPrice} from './price.model';

export interface IOperator {
  operatorId: number;
  operatorName: string;
  prices: Array<IPrice>;
  timestamp: number;
  isExpand?: boolean;
}
