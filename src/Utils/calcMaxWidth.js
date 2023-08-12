const calcMaxWidth = (width) => {
    if (width < 4.5) {
        return 4.5 / 3
    } else if (width > 10) {
        return 10 / 3
    } else {
        return width / 3
    }
}

export default calcMaxWidth