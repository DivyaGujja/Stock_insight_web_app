export class SKU {
    constructor(public value: string,
    public description: string,
    public hasReplacement: boolean,
    public isReplacement: boolean,
    public replacedBy: string,
    public replacementFor: string,
    public replacementMessage: string,
    public stockTypeMessage: string,
    public isInvalid: boolean,
    public invalidSkuMessage: string
    ) { }

}