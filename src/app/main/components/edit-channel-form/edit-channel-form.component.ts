import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Channel } from '../../models/channel';
import { ChannelService } from '../../services/channel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-channel-form',
  standalone: false,
  templateUrl: './edit-channel-form.component.html',
  styleUrl: './edit-channel-form.component.scss',
})
export class EditChannelFormComponent implements OnInit {
  currentDate: number = Date.now();
  maxDate: number = Date.now() + 631152000000;
  channel: Channel = new Channel();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private channelService: ChannelService,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.channel = this.channelService.getChannel(id as string);
  }

  onSubmit(editChannelForm: NgForm): void {
    if (editChannelForm.valid) {
      if (
        this.channelService.channelList.filter((channel: Channel) => {
          return this.channel.getId() === channel.getId();
        }).length === 1
      ) {
        this.channelService.addChannel(this.channel).subscribe((response: any) => {
          this.router.navigate(['/channel/list']);
        });
      }
    }
  }
}
