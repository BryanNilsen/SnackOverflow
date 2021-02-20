import { getMenuCategories } from "./MenuDataManager.js";

export const MenuSelect = () => {
    getMenuCategories()
        .then((menuCategoryArray) => {
            return render(menuCategoryArray)
        })
}

const render = (categoryArray) => {
    const contentTarget = document.getElementById("page-filter")
    const categoryOptions = categoryArray.map(item => {
        return `
        <option value="${item.id}">${item.name}</option>
        `
    }).join("")

    contentTarget.innerHTML = `
    <strong>Filter by: </strong>
    <select id="menu--select">
        <option value="0">All Items</option>
        ${categoryOptions}
    </select>
    `
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("menusNavClicked", event => {
    MenuSelect()
})

eventHub.addEventListener("change", (changeEvent) => {
    // check if target id is "menu--select"
    if (changeEvent.target.id === "menu--select") {
        const selectedOptionValue = changeEvent.target.value
        const customEvent = new CustomEvent("menuSelected", {
            detail: {
                menuId: parseInt(selectedOptionValue),
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})