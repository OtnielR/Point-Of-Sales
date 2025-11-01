export function countSubtotal(productOrders) {
    let subTotal = 0

    productOrders.forEach(order => {
        subTotal += order.selling_price * order.amount
    })

    console.log("Subtotal:", subTotal)

    return subTotal
}
