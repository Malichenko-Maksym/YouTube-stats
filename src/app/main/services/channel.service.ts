import { Injectable } from '@angular/core';
import { Channel } from '../models/channel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChannelService {
  channelList: Channel[] = [];

  constructor(private httpClient: HttpClient) {}

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
}
