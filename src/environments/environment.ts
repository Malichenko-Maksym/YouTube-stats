import { Channel } from '../app/main/models/channel';

export const environment = {
  production: true,
  channelList: [] as Channel[],
  statisticsJson: JSON.stringify({}),
};
