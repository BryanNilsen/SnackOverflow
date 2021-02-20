
export const MenuSort = () => {
    render()
}

const render = () => {
    const contentTarget = document.getElementById("page-sort")

    contentTarget.innerHTML = `
    <strong>Sort by: </strong>
    <select id="menu--sort">
        <option value="0">select ...</option>
        <option value="1">Price: Low >> High</option>
        <option value="2">Price: High >> Low</option>
    </select>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("menusNavClicked", event => {
    MenuSort()
})
eventHub.addEventListener("menuSelected", event => {
    MenuSort()
})

eventHub.addEventListener("change", (changeEvent) => {
    // check if target id is "menu--select"
    if (changeEvent.target.id === "menu--sort") {
        const selectedOptionValue = changeEvent.target.value
        const customEvent = new CustomEvent("MenuSorted", {
            detail: {
                sortOption: parseInt(selectedOptionValue),
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})