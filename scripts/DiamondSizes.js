import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            // window.alert(`Customer chose metal -- ⋆ ${event.target.value} ⋆`)
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(
        (size) => {
            return `<li>
                <input type="radio" name="size" value="${size.id}" /> ${size.carrots}
            </li>`
        }
    )
    html += listItems.join("")
    html += "</ul>"

    return html
}
