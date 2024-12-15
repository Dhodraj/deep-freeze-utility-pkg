/**
 * Deeply freezes an object, including all nested objects and arrays.
 * @param obj - The object to freeze
 * @returns The frozen object
 */
export function deepFreeze<T>(obj: T): Readonly<T> {
    // Check if the object is already frozen
    if (Object.isFrozen(obj)) return obj as Readonly<T>;
    
    // Freeze properties before freezing self
    if (obj && typeof obj === "object") {
        Object.keys(obj).forEach((prop: string) => {
            if (typeof obj[prop] === "object" && obj[prop] !== null) {
                deepFreeze(obj[prop]);
            }
        });

        // Freeze self (no effect if already frozen)
        Object.freeze(obj);
    }
    
    return obj as Readonly<T>;
}