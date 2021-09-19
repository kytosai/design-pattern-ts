import { Subject } from '@/behavioralPatterns/observerPattern/base/Subject';

export class VideoData extends Subject {
  #title?: string;
  #description?: string;
  #fileName?: string;

  getTitle() {
    return this.#title;
  }

  setTitle(param: string) {
    this.#title = param;
    this.#videoDataChanged();
  }

  getDescription() {
    return this.#description;
  }

  setDescription(param: string) {
    this.#description = param;
    this.#videoDataChanged();
  }

  setFileName(param: string) {
    this.#fileName = param;
    this.#videoDataChanged();
  }

  getFileName() {
    return this.#fileName;
  }

  #videoDataChanged() {
    this.notifyObserver(this, null);
  }
}
