import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from '../../models/channel';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-channel',
  standalone: false,
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss',
})
export class ChannelComponent implements OnInit {
  channel: Channel = new Channel();

  constructor(
    private activatedRoute: ActivatedRoute,
    private channelService: ChannelService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.channel = this.channelService.getChannel(id as string);
  }

  onRemovedChannel(channel: Channel): void {
    if (confirm('Are you sure you want to remove this channel?')) {
      this.channelService.removeChannel(channel);

      this.router.navigate(['/channel/list']);
    }
  }
}
