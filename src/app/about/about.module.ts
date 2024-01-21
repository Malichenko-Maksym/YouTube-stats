import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [ArticleComponent, HomeComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
