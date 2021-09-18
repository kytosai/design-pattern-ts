import { NoDiscountStrategy } from './NoDiscountStrategy';
import { Ticket } from '@/behavioralPatterns/strategyPattern/Ticket';
import { random } from 'lodash';
import { QuarterDiscountStrategy } from './QuarterDiscountStrategy';
import { HalfDiscountStrategy } from './HalfDiscountStrategy';

export function strategyPattern() {
  console.log('#### Strategy Pattern ####');
  console.log('Start getting tickets!');

  let randomNumber: number;

  for (let i = 1; i <= 5; i++) {
    randomNumber = random(0, 2);

    let ticket = new Ticket();
    ticket.setName(`Ticket ${i}`);
    ticket.setPrice(50 * i);

    /*
      Tuỳ vào thực tế business ứng dụng mà ta sẽ quyết định sẽ
      sử dụng strategy nào cho phù hợp
    */
    switch (randomNumber) {
      case 0:
        ticket.setPromoteStrategy(new NoDiscountStrategy());
        break;
      case 1:
        ticket.setPromoteStrategy(new QuarterDiscountStrategy());
        break;
      default:
        ticket.setPromoteStrategy(new HalfDiscountStrategy());
        break;
    }

    console.log(
      `Promoted price of ${ticket.getName()} is ${ticket.getPromotedPrice()} - ${
        ticket.getPromoteStrategy()?.name
      }`,
    );
    console.log('');
  }
}
