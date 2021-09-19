import { Subject } from '@/behavioralPatterns/observerPattern/base/Subject';

export abstract class Observer {
  protected subject?: Subject;
  abstract notify(subject: Subject, arg: any): void;
}
