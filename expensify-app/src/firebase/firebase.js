import * as firebase from 'firebase';

// import expenses from '../reducers/expenses';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
// })

// database.ref('expenses').push({
//     description: 'Electricity Bill',
//     note: 'Febr 20',
//     amount: 2320,
//     createdAt: 6848515504475
// });

// database.ref('notes').push({
//     title: 'Second Note',
//     body: 'Second note body text'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const user = snapshot.val();
//     console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('name').set('Chris');
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('name').set('Vladimir');
// }, 10500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// })

// database.ref().off(onValueChange);

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data', e);
// })

// database.ref().set({
//     name: 'Vladimir Livinskiy',
//     age: 34,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Nikolaev',
//         country: 'Ukraine'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('Data was removed!');
// }).catch((e) => {
//     console.log('Remove was failed:', e);
// });
