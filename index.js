function test() {
    const list_trades = document.querySelector("#list_trades")
    var first_child = list_trades.children[0]
    const datum_input = first_child.children[0]

    let new_child = document.createElement("div")
    new_child.classList = "trade-endry table"

    new_child.innerHTML += `
        <label></label>
        <label></label>
        <label></label>
        <button id="save-button" onclick="test()">SAVE</button>
    `

    new_child.children[0].textContent = datum_input.value

    new_child.children[1].textContent = first_child.children[1].options[first_child.children[1].selectedIndex].text
    new_child.children[2].textContent = first_child.children[2].options[first_child.children[2].selectedIndex].text

    if (first_child.nextSibling) {
        list_trades.insertBefore(new_child, first_child.nextSibling)
    } else {
        list_trades.appendChild(new_child)
    }

    list_trades.appendChild
}