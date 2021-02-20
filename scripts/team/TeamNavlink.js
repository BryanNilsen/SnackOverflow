export const TeamNavlink = () => {
    const contentTarget = document.getElementById("team-navlink")
    contentTarget.innerHTML = `
    <a id="team-nav" href="#team" class="navlink">Team</a>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "team-nav") {
        const customEvent = new CustomEvent("teamNavClicked")
        eventHub.dispatchEvent(customEvent)
    }
})