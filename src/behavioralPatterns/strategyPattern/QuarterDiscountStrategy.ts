import { IPromoteStrategy } from '@/behavioralPatterns/strategyPattern/IPromoteStrategy';

export class QuarterDiscountStrategy implements IPromoteStrategy {
  name: string = 'QuarterDiscountStrategy';

  doDiscount(price: number) {
    return price * 0.75;
  }
}
