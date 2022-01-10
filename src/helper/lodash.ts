const map = (arr:any, key: string) => {
    return arr.map((item: any) => {
        return item[key]
    })
}

const uniq = (arr: []) => {
    return arr.reduce((acc: any, curr: any) => {
        if (acc.indexOf(curr) < 0) {
            acc.push(curr)
        }
        return acc;
    }, [])
}

const lodashMethods = {
    map,
    uniq
}

export default lodashMethods;