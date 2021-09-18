import { IPromoteStrategy } from '@/behavioralPatterns/strategyPattern/IPromoteStrategy';

export class Ticket {
  #promoteStrategy?: IPromoteStrategy;
  #price?: number;
  #name?: string;

  getPromoteStrategy() {
    return this.#promoteStrategy;
  }

  setPromoteStrategy(param: IPromoteStrategy) {
    this.#promoteStrategy = param;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(param: number) {
    this.#price = param;
  }

  getName() {
    return this.#name;
  }

  setName(param: string) {
    this.#name = param;
  }

  constructor(promoteStrategy?: IPromoteStrategy) {
    if (promoteStrategy) {
      this.#promoteStrategy = promoteStrategy;
    }
  }

  getPromotedPrice() {
    return this.#promoteStrategy?.doDiscount(this.#price ?? 0);
  }
}
