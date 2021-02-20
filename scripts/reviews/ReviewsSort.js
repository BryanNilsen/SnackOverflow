
export const ReviewsSort = () => {
    render()
}

const render = () => {
    const contentTarget = document.getElementById("page-sort")

    contentTarget.innerHTML = `
    <strong>Sort by: </strong>
    <select id="reviews--sort">
        <option value="0">select ...</option>
        <option value="1">Date: Newest</option>
        <option value="2">Date: Oldest</option>
        <option value="3">Rating: High-Low</option>
        <option value="4">Rating: Low-High</option>
    </select>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("reviewsNavClicked", event => {
    ReviewsSort()
})
eventHub.addEventListener("ReviewsFiltered", event => {
    ReviewsSort()
})

eventHub.addEventListener("change", (changeEvent) => {
    // check if target id is "reviews--sort"
    if (changeEvent.target.id === "reviews--sort") {
        const selectedOptionValue = changeEvent.target.value
        const customEvent = new CustomEvent("ReviewsSorted", {
            detail: {
                sortOption: parseInt(selectedOptionValue),
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})