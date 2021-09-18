import { IPromoteStrategy } from '@/behavioralPatterns/strategyPattern/IPromoteStrategy';

export class NoDiscountStrategy implements IPromoteStrategy {
  name: string = 'NoDiscountStrategy';

  doDiscount(price: number) {
    return price;
  }
}
