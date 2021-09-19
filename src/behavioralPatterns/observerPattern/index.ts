import { EmailNotifier } from './notifiers/EmailNotifier';
import { PhoneNotifier } from './notifiers/PhoneNotifier';
import { YoutubeNotifier } from './notifiers/YoutubeNotifier';
import { VideoData } from './VideoData';

export function observerPattern() {
  const videoData = new VideoData();

  new EmailNotifier(videoData);
  const phoneNotifier = new PhoneNotifier(videoData);

  // Thử set title và tất cả notifier đều bắn
  videoData.setTitle('New video title ne');

  console.log('--------------------------------');

  // Thử xoá 1 notifier khỏi danh sách notifier
  videoData.detachObserver(phoneNotifier);

  // Thử change desc để check lại danh sách notifier mới
  videoData.setDescription('New desc');

  console.log('--------------------------------');

  // Thử thêm 1 notifier mới vào danh sách notifer
  new YoutubeNotifier(videoData);

  // Change prop để check lại danh notifier 
  videoData.setFileName('New filename');
}
