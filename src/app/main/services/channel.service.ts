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
      const channelListParsed = JSON.parse(environment.channelListJson);

      for (const channel of channelListParsed) {
        const newChannel: Channel = new Channel();

        newChannel.setId(channel['channel_id']);
        newChannel.setChannelLink(channel['channel_link']);
        newChannel.setChannelTitle(channel['channel_title']);
        newChannel.setChannelUserAlias(channel['channel_user_alias']);
        newChannel.setCollectVideoCount(channel['collect_video_count']);
        newChannel.setCollectViewCount(channel['collect_view_count']);
        newChannel.setCollectSubscriberCount(
          channel['collect_subscriber_count'],
        );
        newChannel.setCollectOnceInNDays(channel['collect_once_in_n_days']);
        newChannel.setstartCollectingFrom(channel['start_collect_from']);
        newChannel.setOnPause(channel['on_pause']);
        newChannel.setUserComment(channel['user_comment']);

        this.channelList.push(newChannel);
      }
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
