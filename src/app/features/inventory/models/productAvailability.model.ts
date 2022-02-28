export class ProductAvailability {
    constructor(public branch: string,
    public stockTypeMessage: string,
    public onShelfQuantity: number,
    public canMakeQuantity: number,
    public canMakeDate: string,
    public canMake: boolean,
    public canNotMakeMessage: string,
    public futureQuantity: number,
    public estimatedShippingDate: string,
    public estimatedShippingIsAvailable: boolean,
    public estimatedShippingMessage: string,
    public estimatedShippingSupportMessage: string,
    public leadDays: number,
    public isMakeItem: boolean,
    public stockingStatus: string,
    public isOnHold: boolean,
    public stockingStatusMessage: string) {}
}