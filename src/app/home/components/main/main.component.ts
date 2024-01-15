import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpclientService } from '../../services/httpclient.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(
    private httpclientService: HttpclientService
  ) { }

  data: any = {};
  
  onClick(inputForm: NgForm) {
    if (inputForm.valid) {

      this.httpclientService.askInfo(this.data.dataInput).subscribe(
        (response: any) => {this.data.dataOutput = response.result});
    }
  }
}
