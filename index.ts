// type OmitKeys<T, K extends keyof T> = {
//     [P in Exclude<keyof T, K>]: T[P];
// };

// export default function omit<T extends Record<string, unknown>, K extends keyof T>(
//     obj: T,
//     ...excludes: K[]
// ): OmitKeys<T, K> {
//     const result: Partial<T> = Object.assign({}, obj);

//     for (const key of excludes) delete result[key];

//     return result as OmitKeys<T, K>;
// }

// const objOne = {
//     a: 1,
//     b: 'one',
//     c: true,
// }

// const objResult = omit(objOne, 'a', 'b');

// console.log(objResult);

// type OmitKeys<T, K extends keyof T> = {
//     [P in Exclude<keyof T, K>]: T[P];
// };

// export default function omit<T extends Record<string, unknown>, K extends keyof T>(
//     obj: T,
//     ...excludes: K[]
// ): OmitKeys<T, K> {
//     const entries = Object.entries(obj).filter(([key]) => !excludes.includes(key as K));

//     return Object.fromEntries(entries) as OmitKeys<T, K>;
// }

// const objOne = {
//     a: 1,
//     b: 'one',
//     c: true,
// }

// const objResult = omit(objOne, 'a', 'b');

// console.log(objResult);






// export default function omit<T extends Record<string, unknown>, K extends keyof T>(
//     obj: T,
//     ...excludes: K[]
// ): Omit<T, K> {
//     const entries = Object.entries(obj).filter(([key]) => !excludes.includes(key as K));

//     return Object.fromEntries(entries) as Omit<T, K>;
// }

// const objOne = {
//     a: 1,
//     b: 'one',
//     c: true,
// }

// const objResult = omit(objOne, 'a', 'b');

// console.log(objResult);

export default function omit<T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    ...excludes: K[]
): Omit<T, K> {
    const result: Partial<T> = {};

    for (const key of Object.keys(obj) as K[]) {
        if (!excludes.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result as Omit<T, K>;
}

const objOne = {
    a: 1,
    b: 'one',
    c: true,
}

const objResult = omit(objOne, 'a', 'b');

console.log(objResult);