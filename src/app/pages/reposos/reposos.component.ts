import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { RepososSService } from './services/reposos-s.service';

@Component({
  selector: 'app-reposos',
  templateUrl: './reposos.component.html',
  styleUrls: ['./reposos.component.css']
})
export class RepososComponent implements OnInit {

  constructor(private reposoSVC: RepososSService) { }

  ngOnInit(): void {
    this.reposoSVC.getReposo()
    .pipe(
      tap(res => console.log(res))
    )
    .subscribe();
  }

}
