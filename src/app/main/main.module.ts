import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { TestFormComponent } from './components/test-form/test-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpclientService } from './services/httpclient.service';

@NgModule({
  declarations: [TestFormComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, MainRoutingModule],
  providers: [HttpclientService],
})
export class MainModule {}
