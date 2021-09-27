export class Challenge {
    static getMiddle(s:string) {
        const middleCharacter = s.length / 2;
        return s[middleCharacter]
            ? `${s[middleCharacter - 1]}${s[middleCharacter]}`
            : `${s[Math.floor(middleCharacter)]}`
    }
}