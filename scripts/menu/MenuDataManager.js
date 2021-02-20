
export const getMenuCategories = () => {
    return fetch("https://snackoverflow-api.herokuapp.com/menus")
        .then(response => response.json())
        .then(menuCategoriesFromAPI => {
            // console.table(menuCategoriesFromAPI)
            return menuCategoriesFromAPI
        })
}



export const getMenuItems = () => {
    return fetch("https://snackoverflow-api.herokuapp.com/items")
        .then(response => response.json())
        .then(menuItemsFromAPI => {
            // console.table(menuItemsFromAPI)
            return menuItemsFromAPI
        })
}


