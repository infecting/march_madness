export const helper = (e: any, i: number, copy: number[][], ): number[][] => {
    let floored = Math.floor(i/2)
        if (copy[floored].length === 2) {
            if (copy[floored][0] + parseInt(e.target.value) === 17) {
                copy[floored][0] = parseInt(e.target.value)
            } else if (copy[floored][1] + parseInt(e.target.value) === 17) { 
                copy[floored][1] = parseInt(e.target.value)
            } else {
                copy[floored].push.apply([parseInt(e.target.value)])
            }
        } else {
            if (copy[floored][0] + parseInt(e.target.value) === 17) {
                copy[floored][0] = parseInt(e.target.value)
            } else if (copy[floored][1] + parseInt(e.target.value) === 17) { 
                copy[floored][1] = parseInt(e.target.value)
            } else {
                copy[floored].push(parseInt(e.target.value))
            }
        }
        return copy;
}