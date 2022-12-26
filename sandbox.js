// let res = /^[a-z]+$/.test('z');
// console.log(res);

// console.log("riorrrrr" === "riorrrr");
// console.log(String(5));
// const toBytes = (string) => Array.from(Buffer.from(string, 'utf8'));
// let utf8Encode = new TextEncoder();
// utf8Encode.encode("abc");
// const clientId = 'pt_spd'
// const clientSecret = 'o1E7dshqvPSNkKIb'
// const raw = `${clientId}:${clientSecret}`
// // let basicAuth = btoa(utf8Encode.encode(raw))
// var enc = new TextEncoder(); // always utf-8
// let bufferArray = enc.encode(raw) 
// let hex = []
// console.log(bufferArray);
// for(let i = 0 ; i < bufferArray.length ; i++){
//     // bufferArray[i] = (bufferArray[i]).toString(16)
//     hex.push((bufferArray[i]).toString(16))
// }
// console.log(hex);
// // let byteRaw = ['70','74','5f','73','70','64','3a','6f','31','45','37','64','73','68','71','76','50','53','4e','6b','4b','49','62']
// let basicAuth = btoa(utf8Encode.encode(hex))
// basicAuth = "Basic "+basicAuth
// console.log(basicAuth);

// console.log((95).toString(16));

var charCode = "Z".charCodeAt(0) - 64;
console.log(charCode);

function titleToNumber(columnTitle){
    let output = 0
    for(let i = 0 ; i < columnTitle.length ; i++){
        output += Math.pow(26,i)
        output += (columnTitle[i].charCodeAt(0) - 64 -1)*Math.pow(26,columnTitle.length - 1 - i)
    }
    return output
}

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
