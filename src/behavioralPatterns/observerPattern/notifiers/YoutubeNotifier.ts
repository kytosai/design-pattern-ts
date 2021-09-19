import { Observer } from '@/behavioralPatterns/observerPattern/base/Observer';
import { Subject } from '@/behavioralPatterns/observerPattern/base/Subject';
import { VideoData } from '@/behavioralPatterns/observerPattern/VideoData';

export class YoutubeNotifier extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.attachObserver(this);
  }

  notify(subject: Subject, arg: any) {
    if (subject instanceof VideoData) {
      console.log('Notify all subcribes via Youtube with new data');
      console.log(`-- Title: ${subject.getTitle()}`);
      console.log(`-- Description: ${subject.getDescription()}`);
      console.log(`-- FileName: ${subject.getFileName()}`);
    }
  }
}
