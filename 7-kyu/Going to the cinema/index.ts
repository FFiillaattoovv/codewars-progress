export class G964 {
    public static movie(card: number, ticket: number, perc: number): number {
        let counter = 0;
        let systemA = counter;
        let systemB = card;
        while (Math.ceil(systemB) >= systemA) {
            systemA += ticket;
            systemB += ticket * Math.pow(perc, ++
                counter);
        }
        return counter;
    };
}