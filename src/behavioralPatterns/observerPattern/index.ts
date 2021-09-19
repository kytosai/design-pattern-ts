import { EmailNotifier } from './notifiers/EmailNotifier';
import { PhoneNotifier } from './notifiers/PhoneNotifier';
import { YoutubeNotifier } from './notifiers/YoutubeNotifier';
import { VideoData } from './VideoData';

export function observerPattern() {
  const videoData = new VideoData();

  const emailNotifier = new EmailNotifier(videoData);
  const phoneNotifier = new PhoneNotifier(videoData);
  const youtubeNotifier = new YoutubeNotifier(videoData);

  // Thử set title và tất cả notifier đều bắn
  videoData.setTitle('New video title ne');

  // Thử xoá 1 notifier khỏi danh sách notifier 
  videoData.detachObserver(youtubeNotifier);

  console.log('--------------------------------');

  // Thử change desc để check lại danh sách notifier mới
  videoData.setDescription('New desc');
}
