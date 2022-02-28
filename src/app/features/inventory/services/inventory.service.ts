import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  api = '';
  skuListApiUrl = '';
  baseListApiUrl = '';
  version = '';
  skuEndpointPath = 'inventory/skus';
  basecodeEndpointPath = 'inventory/basecodes';

  constructor(private http: HttpClient) {
    this.api = `${environment.baseApiUrl}/${environment.DefaultVersion}`;
    this.skuListApiUrl = `${this.api}/${this.skuEndpointPath}`;
    this.baseListApiUrl = `${this.api}/${this.basecodeEndpointPath}`;

  }

  getBaseInventoryList(baseList: Array<string>) {
    let params = new HttpParams();
    baseList.forEach(baseCode => {
      params = params.append("Basecodes", baseCode);
    });
    return this.http.get(this.baseListApiUrl,
      { params: params});
  }

  getSkuInventoryList(skuList: Array<string>) {
    let params = new HttpParams();
    skuList.forEach(sku => {
      params = params.append("Skus", sku);
    });
    return this.http.get(this.skuListApiUrl,
      { params: params});
  }
}

