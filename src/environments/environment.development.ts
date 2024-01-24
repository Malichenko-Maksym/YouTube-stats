import { Channel } from '../app/main/models/channel';

export const environment = {
  production: false,
  channelList: [
    new Channel(
      'UCiMhD4jzUqG-IgPzUmmytRQ',
      'https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ',
      'realdude!',
      true,
      true,
      false,
      7,
      '2025-01-01',
      false,
    ),
    new Channel(
      '@daftpunk',
      'https://www.youtube.com/@daftpunk',
      'fakeguy',
      false,
      true,
      true,
      1,
      '2024-1-30',
      true,
      'real channel for real men!',
    ),
  ] as Channel[],
  statisticsJson: JSON.stringify({
    channel_link: 'https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ',
    channel_user_alias: 'realdude!',
    channel_title: 'RealDudeTM',
    video_count: [
      {
        '2024-01-25': 123,
      },
      {
        '2024-01-27': 456,
      },
      {
        '2024-01-29': 789,
      },
    ],
    view_count: [
      {
        '2024-01-25': 222,
      },
      {
        '2024-01-27': 334,
      },
      {
        '2024-01-29': 467,
      },
    ],
    subscriber_count: [
      {
        '2024-01-25': 123,
      },
      {
        '2024-01-27': 456,
      },
      {
        '2024-01-29': 789,
      },
      {
        '2024-01-31': 456,
      },
      {
        '2024-02-02': 789,
      },
    ],
    on_pause: false,
    user_comment: '',
  }),
};
