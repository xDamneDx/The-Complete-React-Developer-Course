const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        resolve('This is my other resolved data');
    }, 5000);
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
});

console.log('After');
