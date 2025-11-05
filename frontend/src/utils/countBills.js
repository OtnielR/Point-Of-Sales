export function countSubtotal(productOrders) {
    let subTotal = 0

    productOrders.forEach(order => {
        subTotal += order.selling_price * order.amount
    })

    return subTotal
}

export function countCostPrices(productOrders, saleDetails) {
    let costPrices = 0

    saleDetails.forEach(det => {
        let productCost = productOrders.find(prod => prod.id == det.product_id).cost_price;

        costPrices += det.amount * productCost
    });

    return costPrices
}

export function countSellingPrice(productOrders, saleDetails) {
    let sellingPrices = 0

    saleDetails.forEach(det => {
        let productSellingPrice = productOrders.find(prod => prod.id == det.product_id).selling_price

        sellingPrices += det.amount * productSellingPrice
    });

    return sellingPrices
}

export function countProfit(productOrders, selling_price) {
    let costPrices = countCostPrices(productOrders, selling_price)
    let sellingPrice = countSellingPrice(productOrders, selling_price)

    let profit = sellingPrice - costPrices

    return profit
}
