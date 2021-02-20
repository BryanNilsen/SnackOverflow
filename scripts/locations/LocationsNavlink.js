export const LocationsNavlink = () => {
    const contentTarget = document.getElementById("locations-navlink")
    contentTarget.innerHTML = `
    <a id="locations-nav" href="#locations" class="navlink">Locations</button>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "locations-nav") {
        const customEvent = new CustomEvent("locationsNavClicked")
        eventHub.dispatchEvent(customEvent)
    }
})