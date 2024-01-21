import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-channel-list-element',
  standalone: false,
  templateUrl: './channel-list-element.component.html',
  styleUrl: './channel-list-element.component.scss',
})
export class ChannelListElementComponent {
  @Input()
  channel: Channel = new Channel();

  @Output()
  removedChannelEvent = new EventEmitter<Channel>();

  onRemovedChannel(channel: Channel) {
    if (confirm('Are you sure you want to remove this channel?')) {
      this.removedChannelEvent.emit(channel);
    }
  }
}
