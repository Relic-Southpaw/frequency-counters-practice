// add whatever parameters you deem necessary
function averagePair(ar, num) {
    let start = 0;
    let end = ar.length - 1;
    while (start < end) {
        let av = (ar[start] + ar[end]) / 2
        if (av === num) {
            return true;
        } else if (av < num) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}
