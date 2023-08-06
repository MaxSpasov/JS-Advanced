function strLength(str1, str2, str3) {
    let sum = Number(str1.length) + Number(str2.length) + Number(str3.length)
    console.log(sum);
    let avgLength = Math.floor(sum/3)
    console.log(avgLength);
}
strLength('chocolate', 'ice cream', 'cake')