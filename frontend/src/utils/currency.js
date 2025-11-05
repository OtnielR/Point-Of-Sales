export async function formatToRupiah(num) {

    let rupiahFormat = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(num)

    return rupiahFormat
}
