import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from '../../models/channel';
import { ChannelService } from '../../services/channel.service';
import { Statistics } from '../../models/statistics';

@Component({
  selector: 'app-channel',
  standalone: false,
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss',
})
export class ChannelComponent implements OnInit {
  channel: Channel = new Channel();
  statistics: Statistics = new Statistics();
  displayedChart: string = 'videoCount';

  constructor(
    private activatedRoute: ActivatedRoute,
    private channelService: ChannelService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.channel = this.channelService.getChannel(id as string);
    this.statistics = this.channelService.getStatistics(this.channel);
  }

  onRemovedChannel(channel: Channel): void {
    if (confirm('Are you sure you want to remove this channel?')) {
      this.channelService.removeChannel(channel);

      this.router.navigate(['/channel/list']);
    }
  }

  changeDisplayedChart(chart: string): void {
    this.displayedChart = chart;
  }
}
