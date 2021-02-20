import { getMenuItems } from "./MenuDataManager.js"
import { MenuItem } from "./MenuItem.js"

let allMenuItems = []
let filteredMenuItems = []

export const MenuList = () => {
    getMenuItems()
        .then((menuData) => {
            allMenuItems = menuData
            filteredMenuItems = menuData
            render(allMenuItems)
        })
}

const render = (menuArrary) => {
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Menus"
    // get reference to DOM element
    const contentTarget = document.querySelector("main")
    // iterate items array and make HTML representation
    let menuHTML = menuArrary.map(item => MenuItem(item)).join("")
    // render to DOM
    contentTarget.innerHTML = `
    <section class="menu__container">
        <section class="menu__list">
            ${menuHTML}
        </section>
    </section>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("menusNavClicked", event => {
    MenuList()
})
eventHub.addEventListener("menuSelected", event => {
    const menuId = event.detail.menuId
    if (menuId !== 0) {
        filteredMenuItems = allMenuItems.filter(item => item.menuId === menuId)
        render(filteredMenuItems)
    } else {
        filteredMenuItems = allMenuItems
        render(allMenuItems)
    }
})

eventHub.addEventListener("MenuSorted", event => {
    const sortOption = event.detail.sortOption
    if (sortOption === 1) {
        const sortedMenuItems = filteredMenuItems.sort((itemA, itemB) => itemA.price - itemB.price)
        render(sortedMenuItems)
    }
    if (sortOption === 2) {
        const sortedMenuItems = filteredMenuItems.sort((itemA, itemB) => itemB.price - itemA.price)
        render(sortedMenuItems)
    }
})
