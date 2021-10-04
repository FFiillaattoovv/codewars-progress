export class Kata {
    static dnaStrand(dna: string) {
        return dna
            .split('')
            .map(char => {
                if(char === 'A') return 'T'
                if(char === 'T') return 'A'
                if(char === 'C') return 'G'
                if(char === 'G') return 'C'
            })
            .join('')
    }
}