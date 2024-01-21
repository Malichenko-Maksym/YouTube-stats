import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddChannelFormComponent } from './components/add-channel-form/add-channel-form.component';
import { ChannelService } from './services/channel.service';
import { ChannelListComponent } from './components/channel-list/channel-list.component';

@NgModule({
  declarations: [AddChannelFormComponent, ChannelListComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, MainRoutingModule],
  providers: [ChannelService],
})
export class MainModule {}
