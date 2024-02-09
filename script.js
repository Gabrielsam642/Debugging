const flattened = [[0, 1], [2, 3], [4,5]].
reduce ((accumulator,array) => {
    console.log('array',array);
    console.log('accumulator', accumulator)
    return[].concat([0,1]);
}, []); 

//                  or

const flattend = [[0, 1], [2, 3], [4,5]].
reduce ((accumulator,array) => {
    debugger;
    return[].concat([0,1]);
}, []); 
