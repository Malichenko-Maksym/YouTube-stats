import { Injectable } from '@angular/core';
import { Channel } from '../models/channel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
}
