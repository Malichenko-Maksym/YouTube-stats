import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Channel } from '../../models/channel';
import { ChannelService } from '../../services/channel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-channel-form',
  standalone: false,
  templateUrl: './add-channel-form.component.html',
  styleUrl: './add-channel-form.component.scss',
})
export class AddChannelFormComponent {
  currentDate: number = Date.now();
  maxDate: number = Date.now() + 631152000000;
  channel: Channel = new Channel();

  constructor(
    private router: Router,
    private channelService: ChannelService,
  ) {}

  onSubmit(addChannelForm: NgForm): void {
    if (
      addChannelForm.valid &&
      confirm('Are you sure you want to add this channel?')
    ) {
      if (
        this.channelService.channelList.filter((channel: Channel) => {
          return this.channel.getId() === channel.getId();
        }).length === 0
      ) {
        // if (this.channel.getChannelUserAlias() === '') {
        //   this.channel.setChannelUserAlias() = this.channel.getChannelTitle();
        // }

        this.channel.setId(
          this.channel.getChannelLink().split('/')[
            this.channel.getChannelLink().split('/').length - 1
          ],
        );
        this.channelService.addChannel(this.channel);

        this.router.navigate(['/channel/list']);
      }
    }
  }
}
