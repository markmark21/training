function wave (word) {
    let final = [];
    for (let i = 0; i < word.length; i++) {
        let arr=word.split("");
        if(arr[i] === " ") {
            continue;
        }
        arr[i] = arr[i].toUpperCase();
        final.push(arr.join(""));
    }
    return final;
}