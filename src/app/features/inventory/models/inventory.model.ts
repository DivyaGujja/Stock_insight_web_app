import {SKU} from './sku.model';
import {Prices} from './prices.model';
import {ProductAvailability} from './productAvailability.model';
export class Inventory {
    constructor(public requestedSequence: number,
                public shortItem: number,
                public brand: string,
                public baseCode: number,
                public sku: SKU,
                public prices: Prices,
                public productAvailability: ProductAvailability) { }
}                