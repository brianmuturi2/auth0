import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env} from '../../../environments/environment';

interface MessageRes {
  message: string;
}

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
})
export class ExternalApiComponent implements OnInit {
  message: string = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  callApi(): void {
    this.http.get(`${env.dev.apiUrl}/api/messages/public-message`).subscribe((res: MessageRes) => {
      this.message = res.message;
    });
  }

  callSecureApi(): void {
    this.http.get(`${env.dev.apiUrl}/api/messages/protected-message`).subscribe((res: MessageRes) => {
      this.message = res.message;
    });
  }

}
