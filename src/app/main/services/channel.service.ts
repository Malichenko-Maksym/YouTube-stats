import { Injectable } from '@angular/core';
import { Channel } from '../models/channel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Statistics } from '../models/statistics';

@Injectable()
export class ChannelService {
  channelList: Channel[] = [];

  constructor(private httpClient: HttpClient) {
    if (!environment.production) {
      this.channelList = environment.channelList;
    }
  }

  addChannel(channel: Channel): Channel {
    this.channelList.push(channel);
    return channel;
  }

  getChannelList(): Channel[] {
    return this.channelList;
  }

  getChannel(id: string): Channel {
    return this.channelList.find(
      (channel: Channel) => channel.getId() === id,
    ) as Channel;
  }

  removeChannel(removedChannel: Channel): void {
    this.channelList = this.channelList.filter((channel: Channel) => {
      return channel.getId() !== removedChannel.getId();
    });
  }

  editChannel(channel: Channel): Channel {
    this.removeChannel(channel);
    this.addChannel(channel);

    return channel;
  }

  getStatistics(channel: Channel): Statistics {
    channel; // To be replaced.
    const statistics: Statistics = new Statistics();
    const statisticsParsed = JSON.parse(environment.statisticsJson);

    for (const videoCount of statisticsParsed.video_count) {
      Object.assign(statistics.videoCountDictionary, videoCount);
    }
    for (const viewCount of statisticsParsed.view_count) {
      Object.assign(statistics.viewCountDictionary, viewCount);
    }
    for (const subscriberCount of statisticsParsed.subscriber_count) {
      Object.assign(statistics.subscriberCountDictionary, subscriberCount);
    }

    return statistics;
  }
}
