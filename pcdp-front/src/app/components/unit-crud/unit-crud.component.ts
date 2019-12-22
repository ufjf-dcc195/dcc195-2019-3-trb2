import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/shared/models/unit';
import { UnitService } from 'src/app/shared/services/unit.service';

@Component({
  selector: 'app-unit-crud',
  templateUrl: './unit-crud.component.html',
  styleUrls: ['./unit-crud.component.scss']
})
export class UnitCrudComponent implements OnInit {

  constructor(private unitService: UnitService) { }

  unit: Unit = new Unit();

  ngOnInit() {
  }

  save() {
    this.unitService.salvar(this.unit).subscribe();
  }

}
