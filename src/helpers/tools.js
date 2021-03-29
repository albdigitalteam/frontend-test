export function keyExtractor(label, index) {
    return `${label}-${index}`;
}

/**
 * 
 * @param {string} label Name that will be formatted as A||AA
 * @returns {string} Name initials
 */
export function getUserInitials(label) {

    if (label === undefined) {
        return '';
    }

    const hasLastname = label.lastIndexOf(' ') + 1;
    const firstnameInitial = label.substring(0, 1).toUpperCase();

    if (hasLastname > 0) {
        const lastnameInitial = label.substring(hasLastname, hasLastname + 1).toUpperCase();
        return `${firstnameInitial} ${lastnameInitial}`;
    }

    return firstnameInitial;
}

/**
 * 
 * @param {string} label Text to be normalized inside a color range array
 * @returns {string } Color
 */
export function randomBackgroundColor(label) {
    const color = label.charCodeAt(0) % 10;
    const colors = [
        "#317ffb",
        "#e91e63",
        "#8bc34a",
        "#ff9800",
        "#3f51b5",
        "#795548",
        "#673ab7",
        "#009688",
        "#00bcd4",
        "#f44336"
    ]
    return colors[color];
}

export function sortPosts(a, b) {
    return a.id > b.id
}