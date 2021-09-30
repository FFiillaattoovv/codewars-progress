interface String {
    toJadenCase(): string;
}


String.prototype.toJadenCase = function (): string {
    return this.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
};
