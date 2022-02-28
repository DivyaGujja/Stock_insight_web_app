import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Inventory } from '../models/inventory.model';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit, OnDestroy {
  dtOptions: any = {};
  inventory: Inventory[];
  dateFormat = 'MM/dd/YYYY';

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    const self = this;
    this.dtOptions = {
      data: this.inventory,
      paging: true,
      lengthMenu: [10, 25, 50, 100],
      columns: [{
        title: '',
        data: 'productAvailability.stockTypeMessage',
        render: function (data, type, row) {
          if (row.productAvailability.isMakeItem) {
            return `<i class='fas fa-info-circle' 
                       data-trigger='hover focus' 
                       data-toggle='popover'
                       data-html='true'
                       data-content='${row.productAvailability.stockTypeMessage}'></i>`;
          } else {
            return '' ;
          }
        }
      },{
        title: 'SKU',
        data: 'sku.value'
      },{
        title: 'Description',
        data: 'sku.description'
      }, {
        title: 'DN $',
        data: 'prices.price'
      }, {
        title: 'CA- US $',
        data: 'prices.canadian'
      }, {
        title: 'DD $',
        data: 'prices.designerDirect'
      }, {
        title: 'Branch',
        data: 'productAvailability.branch'
      }, {
        title: 'On Shelf Qty',
        data: 'productAvailability.onShelfQuantity'
      }, {
        title: 'Can Make Qty',
        data: 'productAvailability.canMakeQuantity'
      }, {
        title: 'Can Make Est. Available Date',
        data: 'productAvailability.canMakeDate',
        render: function (data, type, row) {
          if (!row.productAvailability.canMake) {
            return row.productAvailability.canNotMakeMessage
          } else {
            return self.datePipe.transform(data, self.dateFormat);
          }
        }
      }, {
        title: 'Future Qty',
        data: 'productAvailability.futureQuantity'
      }, {
        title: 'Est Ship Date',
        data: 'productAvailability.estimatedShippingDate',
        render: function (data, type, row) {
          if (!row.productAvailability.estimatedShippingIsAvailable) {
            return `<i class='fas fa-exclamation-circle' 
                       data-trigger='hover focus' 
                       data-toggle='popover' 
                       data-content='${row.productAvailability.estimatedShippingSupportMessage}'></i>&nbsp; ${row.productAvailability.estimatedShippingMessage}`;
          } else {
            return self.datePipe.transform(data, self.dateFormat);
          }
        }
      }, {
        title: 'Brand',
        data: 'brand'
      }, {
        title: 'Requested Sequence',
        data: 'requestedSequence'
      }, {
        title: 'Stocking Status',
        data: 'productAvailability.stockingStatus',
        render: function (data, type, row) {
          if (row.productAvailability.isOnHold) {
            return `<i class='fas fa-exclamation-circle' 
                       data-trigger='hover focus' 
                       data-toggle='popover' 
                       data-content='${row.productAvailability.stockingStatusMessage}'></i>&nbsp; ${row.productAvailability.stockingStatus}`;
          } else {
            return row.productAvailability.stockingStatus;
          }
        }
      }, {
        title: 'Lead Days',
        data: 'productAvailability.leadDays'
      }],

      // Configure the buttons
      buttons: {
        dom: {
          button: {
            className: 'btn btn-secondary mb-2 rounded-0'
          }
        },
        buttons: [
          'copy',
          'excel',
          'csv',
          'print'
        ]
      },
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtlip',
      //Makes the table scroll
      scrollX: true,
      responsive: true,
      //Changes the search input label to "Filter Results"
      oLanguage: {
        "sSearch": "Filter Results: "
      },
      drawCallback: function () {
        var options = {
          trigger: 'hover focus'
        }
        $('[data-toggle="popover"]').popover(options);
      }
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getInventoryData(inventoryData: any): void {
    this.inventory = inventoryData.data;
    this.dtOptions.data = this.inventory;
    this.rerender();
  }
  rerender() {
    if (this.dtElement && this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
  }
}

