import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';
import { InventoryService } from 'src/app/features/inventory/services/inventory.service';

@Component({
  selector: 'app-inventory-search',
  templateUrl: './inventory-search.component.html',
  styleUrls: ['./inventory-search.component.css']
})
export class InventorySearchComponent implements OnInit {

  searchItembase: any;
  searchItemsku: any;
  searchSku: Array<string> = [];
  searchBase: Array<string> = [];
  errorFlag: boolean = false;
  error = null;
  showDataGrid: boolean = false;
  isSearching: boolean = false;

  @ViewChild(InventoryListComponent)
  dataGrid: InventoryListComponent;

  constructor(private api: InventoryService) { }

  ngOnInit(): void {
  }

  onBaseSearch() {
    this.isSearching = true;
    this.validate();
    if (!this.errorFlag) {
      this.showDataGrid = true;
      this.error = null;
      this.api.getBaseInventoryList(this.searchBase).subscribe(data => {
        this.isSearching = false;
        this.dataGrid.getInventoryData(data);
      }, error => {
        this.error = error;
        this.isSearching = false;
      });
    }
  }

  onSkuSearch() {
    this.isSearching = true;
    this.validate();
    if (!this.errorFlag) {
      this.showDataGrid = true;
      this.error = null;
      this.api.getSkuInventoryList(this.searchSku).subscribe(data => {
        this.isSearching = false;
        this.dataGrid.getInventoryData(data);
      }, error => {
        this.error = error;
        this.isSearching = false;
      });
    }
  }

  private validate() {
    this.searchSku = this.searchItemsku ? this.searchItemsku.split('\n') : '';
    this.searchBase = this.searchItembase ? this.searchItembase.split('\n') : '';
    this.errorFlag = this.searchSku.length > 50 || this.searchBase.length > 50 ? true : false;
  }

  onChangeValidate() {
    this.errorFlag = false;
    this.validate();
  }
}
