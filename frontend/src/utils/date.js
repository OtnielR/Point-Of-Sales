export function formatDate(date) {
    let formattedDate = new Date(date)

    formattedDate = formattedDate.toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    return formattedDate

}
