import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';
  cars = [{
    id: 1,
    model: 'LADA (ВАЗ) XRAY I',
    year: 2017,
    body: 'Хэтчбек 5 дв.',
    color: 'Черный',
    engine: '1.8 л122 л.с. бензин'
  },
  {
    id: 2,
    model: 'LADA (ВАЗ) CROSS II',
    year: 2014,
    body: 'Седан 5 дв.',
    color: 'Белый',
    engine: '1.4 л88 л.с. бензин'
  },
  {
    id: 3,
    model: 'LADA (ВАЗ) 2107',
    year: 1985,
    body: 'Седан 5 дв.',
    color: 'Синий',
    engine: '2.2 л300 л.с. бензин'
  }];
}
