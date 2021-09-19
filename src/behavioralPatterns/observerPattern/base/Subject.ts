import { Observer } from '@/behavioralPatterns/observerPattern/base/Observer';

export class Subject {
  #observers: Observer[] = [];

  attachObserver(observer: Observer) {
    this.#observers.push(observer);
  }

  detachObserver(observer: Observer) {
    const newObservers: Observer[] = this.#observers.filter((item) => {
      return item != observer;
    });

    this.#observers = newObservers;
  }

  notifyObserver(subject: Subject, arg: any) {
    this.#observers.forEach((item) => {
      item.notify(subject, arg);
    });
  }
}
