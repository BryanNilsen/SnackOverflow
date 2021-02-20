import "./Reviews.js"
import "./ReviewForm.js"
import "./ReviewsFilter.js"
import "./ReviewsSort.js"

export const ReviewsNavlink = () => {
    const contentTarget = document.getElementById("reviews-navlink")
    contentTarget.innerHTML = `
    <a id="reviews-nav" href="#reviews" class="navlink">Reviews</a>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "reviews-nav") {
        const customEvent = new CustomEvent("reviewsNavClicked")
        eventHub.dispatchEvent(customEvent)
    }
})