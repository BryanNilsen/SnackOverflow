const eventHub = document.querySelector("body")
const dispatchStateChangeEvent = () => {
    const reviewsStateChangedEvent = new CustomEvent("reviewsStateChanged")
    eventHub.dispatchEvent(reviewsStateChangedEvent)
}

export const getReviews = () => {
    return fetch("http://localhost:5001/reviews")
        .then(response => response.json())
        .then(parsedReviews => {
            return parsedReviews
        })
}

export const postReview = (reviewObj) => {
    return fetch("http://localhost:5001/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
    })
        .then(dispatchStateChangeEvent)
}

export const deleteReview = (reviewId) => {
    return fetch(`http://localhost:5001/reviews/${reviewId}`, {
        method: "DELETE"
    })
        .then(dispatchStateChangeEvent)
}