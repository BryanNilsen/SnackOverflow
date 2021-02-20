import { getReviews } from "./ReviewsDataManager.js"
import { Review } from "./Review.js";

let allReviewItems = []
let filteredReviewItems = []

const eventHub = document.querySelector("body")
eventHub.addEventListener("reviewsNavClicked", event => {
    Reviews()
})

eventHub.addEventListener("reviewsStateChanged", event => {
    Reviews()
})

export const Reviews = () => {
    getReviews()
        .then((reviews) => {
            allReviewItems = reviews
            filteredReviewItems = reviews
            render(allReviewItems)
        })
}

const render = (reviewsArray) => {
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Reviews"
    const contentTarget = document.querySelector("main")
    // iterate items array and make HTML representation
    let reviewsHTML = reviewsArray.map(item => Review(item)).join("")

    contentTarget.innerHTML = `
    <section class="reviews__container">
        <section class="review__list">
            ${reviewsHTML}
        </section>
    </section>
    `
}



eventHub.addEventListener("ReviewsFiltered", event => {
    const filterOption = event.detail.filterOption
    if (filterOption === 0) {
        render(allReviewItems)
    } else {
        filteredReviewItems = allReviewItems.filter(review => review.rating === filterOption)
        render(filteredReviewItems)
    }
})
eventHub.addEventListener("ReviewsSorted", event => {
    const sortOption = event.detail.sortOption
    let sortedReviewItems = filteredReviewItems
    if (sortOption === 1) {
        sortedReviewItems.sort((itemA, itemB) => new Date(itemB.date) - new Date(itemA.date))
    }
    if (sortOption === 2) {
        sortedReviewItems.sort((itemA, itemB) => new Date(itemA.date) - new Date(itemB.date))
    }
    if (sortOption === 3) {
        sortedReviewItems.sort((itemA, itemB) => itemB.rating - itemA.rating)
    }
    if (sortOption === 4) {
        sortedReviewItems.sort((itemA, itemB) => itemA.rating - itemB.rating)
    }
    render(sortedReviewItems)
})