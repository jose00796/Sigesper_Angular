import { Component, OnInit } from '@angular/core';
import { NominaSService } from './services/nomina-s.service';
import { tap } from 'rxjs/operators';
import { NominaI } from './interface/nomina-i';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})
export class NominaComponent implements OnInit {
  nomina!: NominaI[];
  constructor(private nominaSVC: NominaSService) { }

  ngOnInit(): void {
    this.nominaSVC.getNomina()
    .pipe(
        tap(res => console.log(res))
    )
    .subscribe();
  }

}
