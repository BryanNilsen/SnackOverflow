import "./MenuList.js"
import "./MenuSelect.js"
import "./MenuSort.js"

export const MenusNavlink = () => {
    const contentTarget = document.getElementById("menus-navlink")
    contentTarget.innerHTML = `
    <a id="menus-nav" href="#menus" class="navlink">Menus</a>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "menus-nav") {
        const customEvent = new CustomEvent("menusNavClicked")
        eventHub.dispatchEvent(customEvent)
    }
})