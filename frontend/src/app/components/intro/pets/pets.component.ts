import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LeafColumn,
  ColumnType,
  Column
} from '@avl-controls/datatable/dist/avl-datatable/column-definitions';
import {
  AvlDatatable
} from '@avl-controls/datatable/dist/avl-datatable/avl-datatable.api';
import { DataProvider, DataProviderResponse, TableDataRequestParams } from '@avl-interfaces/interfaces';

import { PetApiService, Pet, InlineResponse200 } from 'pet-store';
import { SortOrder } from './sort-order';
import { TranslateService } from '@ngx-translate/core';

import '@avl-controls/core/dist/avl-icon-button/avl-icon-button';
import '@avl-controls/datatable/dist/avl-datatable/avl-datatable';

@Component({
  selector: 'viz-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
  @Output() selectedPetChanged = new EventEmitter<Pet>();

  @ViewChild('petsTable') petsTableElement: ElementRef;

  columnDefinitions: Column[] = [
    new LeafColumn(
      this.translateService.instant('VizBoxStarterKit.ID'), 'id', ColumnType.Text,
        false, false, 1, undefined, undefined, undefined, undefined, undefined, true
    ),
    new LeafColumn(this.translateService.instant('VizBoxStarterKit.Name'), 'name', ColumnType.Text, true, true, 3, '40px'),
    new LeafColumn(this.translateService.instant('VizBoxStarterKit.Status'), 'status', ColumnType.Text, true, false, 3, '40px'),
    new LeafColumn(
      this.translateService.instant('VizBoxStarterKit.Category'),
      'category.name', ColumnType.Text, true, false, 3, '40px', undefined, undefined, undefined, undefined, true
    )
  ];
  selectedPet: Pet;
  isEditing = false;
  addEditDialogOpen = false;

  constructor(private petService: PetApiService, private translateService: TranslateService) {}

  petStoreProvider: DataProvider = (params: TableDataRequestParams) => this.getPetStoreProvider(params);

  petSelectionChanged(pet: Pet) {
    this.selectedPetChanged.emit(pet);
    this.selectedPet = pet;
  }

  addPet() {
    this.addEditDialogOpen = true;
    this.isEditing = false;
  }

  editPet(pet: Pet) {
    this.selectedPet = pet;
    this.isEditing = true;
    this.addEditDialogOpen = true;
  }

  deletePet() {
    const petsTable = this.petsTableElement.nativeElement as AvlDatatable;
    this.petService.deletePet(this.selectedPet.id).subscribe(res => petsTable.clearCache());

    delete this.selectedPet;
    this.selectedPetChanged.emit(undefined);
  }

  savePet(pet: Pet) {
    this.addEditDialogOpen = false;
    this.selectedPetChanged.emit(pet);

    const petsTable = this.petsTableElement.nativeElement as AvlDatatable;

    if (this.isEditing) {
      this.petService.updatePet(pet).subscribe(res => petsTable.clearCache());
    } else {
      this.petService.addPet(pet).subscribe(res => petsTable.clearCache());
    }
  }

  private getPetStoreProvider(params: TableDataRequestParams) {
    return new Promise<DataProviderResponse>((resolve, reject) => {
      let observable: Observable<InlineResponse200>;

      const sorting = params.sortOrders.find(f => f.path === 'name' || f.path === 'status');
      let sortBy, sortOrder;
      if (sorting) {
        sortBy = sorting.path;
        sortOrder = sorting.ascending ? SortOrder.Ascending : SortOrder.Descending;
      }

      const nameFilter = params.filters.get('name');
      observable = this.petService.getPets(
        nameFilter,
        undefined,
        undefined,
        params.page * params.pageSize,
        params.pageSize,
        sortBy,
        sortOrder
      );

      observable.subscribe(
        response => {
          setTimeout(() => {
            resolve({ rows: response.result, totalRows: response.size });
          }, 0);
        },
        error => this.handleError(error)
      );
    });
  }

  private handleError(error) {
    const petsTable = this.petsTableElement.nativeElement as AvlDatatable;
    petsTable.data = [{ name: this.translateService.instant('VizBoxStarterKit.ConnectionFailedToPetstoreServer') }];
  }
}
