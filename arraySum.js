
function getArraySum(numbers){
    var sum = 0;
    for( var  i =0 ; i< numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

var numbers = [45, 65, 78, 12, 3, 54,65];
var result= getArraySum(numbers);
console.log(result);

var result= getArraySum([3,7,20]);
console.log(result);