
//Ensures that a item will have the correct type and not be undefined or null.
//Removes need for adding if statements to check for null/undefinied everywhere.
export function ensure<T>(item: T | undefined | null): T {
    if(item === undefined || item === null) {
        throw new TypeError("Item not found");
    }
    return item;
}