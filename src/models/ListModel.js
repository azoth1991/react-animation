export default class ListModel {
    store;
    hotProductUrl;
    pmId;
    productId;
    promotionId;
    cnName;
    samMemberPrice;
    promotionPrice;
    dxxPriceDifference;
    maketPrice;
    yhdPrice;
    specification;

    constructor(store,
                hotProductUrl,
                pmId,
                productId,
                promotionId,
                cnName,
                samMemberPrice,
                promotionPrice,
                dxxPriceDifference,
                maketPrice, yhdPrice, specification) {
        this.store = store;
        this.hotProductUrl = hotProductUrl;
        this.pmId = pmId;
        this.productId = productId;
        this.promotionId = promotionId;
        this.cnName = cnName;
        this.samMemberPrice = samMemberPrice;
        this.dxxPriceDifference = dxxPriceDifference;
        this.promotionPrice = promotionPrice;
        this.maketPrice = maketPrice;
        this.yhdPrice = yhdPrice;
        this.specification = specification;
    }

    toJS() {
        return {
            store: this.store,
            hotProductUrl: this.hotProductUrl,
            pmId: this.pmId,
            productId: this.productId,
            promotionId: this.promotionId,
            cnName: this.cnName,
            samMemberPrice: this.samMemberPrice,
            promotionPrice: this.promotionPrice,
            dxxPriceDifference: this.dxxPriceDifference,
            maketPrice: this.maketPrice,
            yhdPrice: this.yhdPrice,
            specification: this.specification
        };
    }

    static fromJS(store, object) {
        return new ListModel(store,
            object.hotProductUrl,
            object.pmId,
            object.productId,
            object.promotionId,
            object.cnName,
            object.samMemberPrice,
            object.promotionPrice,
            object.dxxPriceDifference,
            object.maketPrice,
            object.yhdPrice,
            object.specification);
    }
}
