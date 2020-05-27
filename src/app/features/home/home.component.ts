import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: object;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getMessage().pipe(
      tap((data) => console.log(data)),
      map((x) => (this.data = x))
    );

    setTimeout(() => {
      console.log(this.data);
    }, 3000);
  }
}
