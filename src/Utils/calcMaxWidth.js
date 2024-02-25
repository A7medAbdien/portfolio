const calcMaxWidth = (width) => {
    if (width < 4.5) {
        return 4.5 / 1.65
    } else if (width > 10) {
        return 10 / 1.65
    } else {
        return width / 1.65
    }
}

export default calcMaxWidth