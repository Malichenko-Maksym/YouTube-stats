import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { AddChannelFormComponent } from './components/add-channel-form/add-channel-form.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';

export const routes: Routes = [
  { path: 'add', component: AddChannelFormComponent },
  { path: 'list', component: ChannelListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
