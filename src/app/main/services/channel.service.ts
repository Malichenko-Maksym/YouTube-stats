import { Injectable } from '@angular/core';
import { Channel } from '../models/channel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Statistics } from '../models/statistics';
import { Observable } from 'rxjs';

@Injectable()
export class ChannelService {
  channelList: Channel[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  addChannel(channel: Channel): Observable<string> {
    const channelJson: object = {
      channel_link: channel.getChannelLink(),
      channel_user_alias: channel.getChannelUserAlias(),
      collect_once_in_n_days: channel.getCollectOnceInNDays(),
      collect_video_count: channel.getCollectVideoCount(),
      collect_view_count: channel.getCollectViewCount(),
      collect_subscriber_count: channel.getCollectSubscriberCount(),
      start_collect_from: channel.getStartCollectingFrom(),
      on_pause: channel.getOnPause(),
      user_comment: channel.getUserComment(),
    };

    return this.httpClient.post<string>(
      'add_channel',
      JSON.stringify(channelJson),
      this.httpOptions,
    );
  }

  getChannelList(): Channel[] {
    this.channelList = [];

    this.httpClient
      .get<string>('channels_json', this.httpOptions)
      .subscribe((response: any) => {
        for (const channel of response) {
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
      });
    return this.channelList;
  }

  getChannel(id: string): Channel {
    return this.channelList.find(
      (channel: Channel) => channel.getId() === id,
    ) as Channel;
  }

  removeChannel(channel: Channel): Observable<string> {
    return this.httpClient.delete<string>(
      `delete_channel/${channel.getId()}`,
      this.httpOptions,
    );
  }

  getStatistics(channel: Channel): Observable<string> {
    return this.httpClient.get<string>(
      `channel_details_json/${channel.getId()}`,
    );
  }
}
