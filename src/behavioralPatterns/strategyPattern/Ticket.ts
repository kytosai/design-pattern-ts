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
    /*
      Chỗ này có 1 lưu ý là khi demo bằng C# thì không cần set giá trị
      khởi tạo cho trường hợp prop #promoteStrategy, tuy nhiên bên ts
      nếu không set thì sẽ là undefined thì khi cho vào `doDiscount()`
      chắc chắn sẽ bị lỗi:

      -> Nếu vậy thì việc set giá trị là `0` khi #price bị undefined
      liệu có đúng đắng không ?

      -> Nếu vậy trước khi `doDiscount()` ta phải check `#promoteStrategy`
      để tránh undefined nhưng vô tình làm return về có kiểu `undefined`
      liệu hàm này có còn đúng đắn hay không ?
    */
    return this.#promoteStrategy?.doDiscount(this.#price ?? 0);
  }
}
