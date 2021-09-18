import { NoDiscountStrategy } from './NoDiscountStrategy';
import { Ticket } from '@/behavioralPatterns/strategyPattern/Ticket';
import { random } from 'lodash';
import { QuarterDiscountStrategy } from './QuarterDiscountStrategy';
import { HalfDiscountStrategy } from './HalfDiscountStrategy';

function generatePromoteStrategy(randomNumber: number, ticket: Ticket) {
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
}

function logTicketDetail(ticket: Ticket) {
  console.log(
    `Promoted price of ${ticket.getName()} is ${ticket.getPromotedPrice()} - ${
      ticket.getPromoteStrategy()?.name
    }`,
  );
  console.log('');
}

export function strategyPattern() {
  console.log('#### Strategy Pattern ####');
  console.log('Start getting tickets!');

  let randomNumber: number;

  for (let i = 1; i <= 5; i++) {
    let ticket = new Ticket();
    ticket.setName(`Ticket ${i}`);
    ticket.setPrice(50 * i);

    /*
      LƯU Ý:
        - Ở code bên dưới ta sẽ thử generate 1 ticket với 2 lần strategy
        khác nhau 
    */

    // Generate promote strategy lần 1
    randomNumber = random(0, 2);
    generatePromoteStrategy(randomNumber, ticket);
    logTicketDetail(ticket);

    // Generate promote strategy lần 2
    randomNumber = random(0, 2);
    generatePromoteStrategy(randomNumber, ticket);
    logTicketDetail(ticket);

    console.log('------------------');
  }
}
