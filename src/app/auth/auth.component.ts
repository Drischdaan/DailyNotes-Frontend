import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private loginMode: boolean = true;
  private message: string = 'none';
  private color: string = '#d63434';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loginMode = true;
  }

  showMessage(message: string, color: string = '#d63434') {
    if(message === undefined) {
      this.message = 'none';
      return;
    }
    this.message = message;
    this.color = color;
  }

  switchMode() {
    this.showMessage(undefined);
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    const url: string = this.loginMode ? 'https://daily-notes-api.herokuapp.com/v1/auth/login' : 'https://daily-notes-api.herokuapp.com/v1/auth/register';
    this.http.post(url, form.value, { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }) })
      .subscribe((responseData: any) => {
        this.showMessage(responseData.data.message, '#34d657');
        if(this.loginMode === false) {
          if(responseData.data.success === true)
          this.switchMode();
        }

      }, (error: any) => {
        this.showMessage(error.error.data.error.message);
      }
    );
    form.reset();
  }

}