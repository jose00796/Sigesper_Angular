import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { VacacionesSService } from './services/vacaciones-s.service';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent implements OnInit {

  constructor(private vacSVC: VacacionesSService) { }

  ngOnInit(): void {
    this.vacSVC.getVac()
    .pipe(
      tap(res => console.log(res))
    )
    .subscribe();
  }

}
