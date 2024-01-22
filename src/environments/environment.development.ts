import { Channel } from '../app/main/models/channel';

export const environment = {
  production: false,
  channelList: [
    new Channel(
      '234234',
      'https://local.local/25304537485903',
      'realdude!',
      true,
      true,
      false,
      7,
      '2025-01-01',
      false,
    ),
    new Channel(
      '93475937459',
      'https://local.local/sonfsiufsiufdri',
      'fakeguy',
      true,
      true,
      true,
      1,
      '2024-1-30',
      true,
      'real channel for real men!',
    ),
  ] as Channel[],
};
