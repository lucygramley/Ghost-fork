export function debounce(func, wait, immediate = false) {
    let timeoutId;
    return function (...args) {
        const later = () => {
            timeoutId = null;
            if (!immediate) {
                func.apply(this, args);
            }
        };
        const callNow = immediate && !timeoutId;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(later, wait);
        if (callNow) {
            func.apply(this, args);
        }
    };
}
