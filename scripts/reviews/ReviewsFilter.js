
export const ReviewsFilter = () => {
    render()
}

const render = () => {
    const contentTarget = document.getElementById("page-filter")

    contentTarget.innerHTML = `
    <strong>Filter by Rating: </strong>
    <select id="reviews--filter">
        <option value="0">select ...</option>
        <option value="1">☆</option>
        <option value="2">☆☆</option>
        <option value="3">☆☆☆</option>
        <option value="4">☆☆☆☆</option>
        <option value="5">☆☆☆☆☆</option>
    </select>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("reviewsNavClicked", event => {
    ReviewsFilter()
})

eventHub.addEventListener("change", (changeEvent) => {
    // check if target id is "reviews--filter"
    if (changeEvent.target.id === "reviews--filter") {
        const selectedOptionValue = changeEvent.target.value
        const customEvent = new CustomEvent("ReviewsFiltered", {
            detail: {
                filterOption: parseInt(selectedOptionValue),
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})