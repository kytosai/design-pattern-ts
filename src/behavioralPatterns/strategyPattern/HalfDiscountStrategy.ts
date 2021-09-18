import { IPromoteStrategy } from '@/behavioralPatterns/strategyPattern/IPromoteStrategy';

export class HalfDiscountStrategy implements IPromoteStrategy {
  name: string = 'HalfDiscountStrategy';
  
  doDiscount(price: number) {
    return price * 0.5;
  }
}
