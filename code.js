//NO 1
const array = [1,2,3,4,5,6,7,8,9,10,11,12]
let arr =[]
for (ii=array.length-1; ii>=0; ii--){
    arr.push(array[ii])
}
console.log (arr)
let sum = 0
for (let ss= 0; ss < arr.length; ss++){
sum = sum + arr[ss]
}
console.log(sum)


let arr2 = arr.slice(arr.length/2, arr.length)
if(arr.length>10 && arr.length % 2 == 0){
    
    let sum = 0
    for (let ii=0; ii < arr2.length; ii++){
    sum = sum + arr2[ii]
    }
    console.log(arr2)
    console.log (sum)
}
else {
    console.log ("come")
}

let newarr2 = []
for (ii=0; ii<arr2.length; ii++){
    newarr2 [ii] = arr2[ii] * 2;
}
console.log(newarr2)

//NO 2
let myName = " OsasJoyce ";
let caps = console.log(myName.toUpperCase())
console.log(myName.trim())

if (myName.length > 4){
    console.log(myName.slice(1, 5))
}
else{
    console.log ('error')
}

//NO 3
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
console.log(yesterday)