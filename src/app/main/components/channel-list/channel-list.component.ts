import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-channel-list',
  standalone: false,
  templateUrl: './channel-list.component.html',
  styleUrl: './channel-list.component.scss',
})
export class ChannelListComponent implements OnInit {
  channelList: Channel[] = [];

  constructor(private channelService: ChannelService) {}

  ngOnInit(): void {
    this.loadChannelList();
  }

  onRemovedChannel(channel: Channel): void {
    this.channelService.removeChannel(channel).subscribe((response: any) => {
      this.loadChannelList();
    });
  }

  loadChannelList(): void {
    this.channelList = this.channelService.getChannelList();
  }
}
