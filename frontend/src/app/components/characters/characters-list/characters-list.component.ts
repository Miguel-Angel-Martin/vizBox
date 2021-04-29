import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'viz-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters$ = this.dataService.characters$;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

}
