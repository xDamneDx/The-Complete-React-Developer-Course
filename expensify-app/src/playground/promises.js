const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Vladimir',
        //     age: 34
        // });
        reject('Something goes wrong!');
    }, 5000);
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('Error:', error);
});

console.log('After');
