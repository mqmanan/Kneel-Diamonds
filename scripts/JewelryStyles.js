import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            // window.alert(`Customer chose metal -- ⋆ ${event.target.value} ⋆`)
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    const listItems = styles.map(
        (style) => {
            return `<li>
                <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </li>`
        }
    )
    html += listItems.join("")
    html += "</ul>"

    return html
}



// export const JewelryStyles = () => {
//     let html = "<ul>"

//     Use .map() for converting objects to <li> elements
//     const listItemsArray =


//  Join all of the strings in the array into a single string
//     html += listItems.join("")

//     html += "</ul>"
//     return html
// }

