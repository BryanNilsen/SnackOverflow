export const Home = () => {
    const contentTarget = document.querySelector("main")
    contentTarget.innerHTML = `
    Welcome to SNACK OVERFLOW
    `
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Home"
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "logo-nav") {
        Home()
    }
})