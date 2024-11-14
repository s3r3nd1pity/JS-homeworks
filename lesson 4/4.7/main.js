function list(liQuality, text) {
    document.write(`<ul>`)
    for (let i = 0; i < liQuality; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)

}
list(20,'Lorem ipsum')