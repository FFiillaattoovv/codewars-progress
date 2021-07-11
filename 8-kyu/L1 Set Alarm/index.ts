export function setAlarm(employed: boolean, vacation: boolean) {
    return vacation ? false : employed;
}
