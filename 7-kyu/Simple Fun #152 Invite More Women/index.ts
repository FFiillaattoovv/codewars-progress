export function inviteMoreWomen(L: number[]): boolean {
    return L.filter(num => num > 0).length > L.filter(num => num < 0).length;
}