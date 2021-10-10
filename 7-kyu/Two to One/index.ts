export class G964 {

    public static longest = (s1, s2) => {
        const array = (s1 + s2).split('');
        const newArray = array.filter((elem, pos) => {
            return array.indexOf(elem) === pos;
        });
        return newArray.sort().join('');
    }
}