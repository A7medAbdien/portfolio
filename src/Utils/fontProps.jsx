import calcMaxWidth from "./calcMaxWidth"

export const HeadlineFontProps = {
    font: 'fonts/SaolDisplay-Regular.woff',
    fontSize: 0.15,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
}

export const ContentFontProps = (width) => {
    return {
        fontSize: 0.1,
        lineHeight: 1.2,
        maxWidth: calcMaxWidth(width),
        'material-toneMapped': false,
    }
}
