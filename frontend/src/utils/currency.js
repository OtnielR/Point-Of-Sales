export async function formatToRupiah(num) {
    console.log(num)

    let rupiahFormat = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(num)

    console.log(rupiahFormat)

    return rupiahFormat
}
