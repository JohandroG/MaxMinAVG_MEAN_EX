

arr = [1,0,6]

console.log("Results:", results(arr))


function results(arr){
    let sum = 0;
    let max = arr[0];
    let min = arr[0];


    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }

    for(var i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    for(var i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    
    let avg = sum/arr.length;

    return ("Max: "+ max + " Min: " + min + " Avg: " + avg);
}
