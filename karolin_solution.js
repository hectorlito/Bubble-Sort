const arrNums = [4,3,6,77,0,44,55,2,4,5,1,57,8943,42,22,335,66];


const bubbleSort = (arr)=>{
  let sorted = false;
    while( !sorted ){
      sorted = true;
      for (let i = 0; i < arr.length-1; i++){
        if ( arr[i] > arr[i+1] ){
        //file under ES6 deconstructing assignment - swap values
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
          [arr[i],arr[i+1] ] = [arr[i+1] ,arr[i]];
         sorted = false;
        }
      }
    }
  return arr;
}

bubbleSort(arrNums);
