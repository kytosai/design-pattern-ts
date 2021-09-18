export interface IPromoteStrategy {
  name: string; // ! Cái này chỉ thêm vào để demo nhận biết strategy đang apply trên code
  doDiscount(price: number): number;
}
