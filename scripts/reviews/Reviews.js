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
    console.log('filterOption: ', filterOption);
    if (filterOption === 0) {
        render(allReviewItems)
    } else {
        filteredReviewItems = allReviewItems.filter(review => review.rating === filterOption)
        render(filteredReviewItems)
    }
})