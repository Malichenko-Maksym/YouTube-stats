import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { AddChannelFormComponent } from './components/add-channel-form/add-channel-form.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { EditChannelFormComponent } from './components/edit-channel-form/edit-channel-form.component';
import { ChannelComponent } from './components/channel/channel.component';

export const routes: Routes = [
  { path: 'add', component: AddChannelFormComponent },
  { path: 'list', component: ChannelListComponent },
  { path: ':id', component: ChannelComponent },
  { path: ':id/edit', component: EditChannelFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
