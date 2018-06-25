import * as firebase from 'firebase';


  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };





  // //child removed - subscription
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child changed - subscription
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  //   //child added - subscription
  //   database.ref('expenses').on('child_added', (snapshot) => {
  //     console.log(snapshot.key, snapshot.val());
  //   });
  
  
  // database.ref('expenses')
  // .on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //    console.log(expenses);
  // });

  //  database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} with ${val.job.company}`);
//   }, (e) => {
//     console.log('Error fetching data', e);
//   });

  
  // database.ref('expenses')
  // .once('value')
  // .then((snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //    console.log(expenses);
  // });
 
  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: 'need cheaper apartment',
  //   amount: 119555,
  //   createdAt: 1
  // });

 // database.ref('expenses').push({
  //   description: 'Gas',
  //   note: 'need hybrid car',
  //   amount: 500,
  //   createdAt: 1
  // });

  //  database.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'React native, Angular, Python'
  // });


  // const firebaseNotes = {
  //   notes: {
  //     apoijyk: {
  //       title: 'First note',
  //       body: 'This is my first note'
  //     },
  //     qwerty: {
  //       title: 'Second note',
  //       body: 'This is my second note'
  //     }      
  //   }
  // };


//  database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} with ${val.job.company}`);
//   }, (e) => {
//     console.log('Error fetching data', e);
//   });

  // setTimeout(() => {
  //   database.ref('job/title').set('RETIRED');
  // }, 3500);


  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} with ${val.job.company}`);
  //   }, (e) => {
  //     console.log('Error fetching data', e);
  //   });
   
  // database.ref()
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val();
  //   console.log(val);
  // })
  // .catch((e) => {
  //    console.log('Error fetching data:', e)
  // });

  // const name = database.ref('name').on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error fetching data', e);
  // });
  // console.log(`name is ${name}`);

  // // const onValueChange = database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error fetching data', e);
  // });

  // setTimeout(() => {
  //   database.ref('age').set(29);
  // }, 3500);

  // setTimeout(() => {
  //   database.ref().off('value',onValueChange);
  // }, 7000);

  // setTimeout(() => {
  //   database.ref('age').set(30);
  // }, 10500);

  // database.ref()
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val();
  //   console.log(val);
  // })
  // .catch((e) => {
  //    console.log('Error fetching data:', e)
  // });



  // database.ref().set({
  //   name: 'David Gilliam',
  //   age: 66,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software Developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Angier',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('save failed, error is:', e)
  // });

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });

//database.ref('isSingle').set(null); //same as the below remove command - remove command is more explicit
//     database.ref('isSingle').remove().then(() => {
//       console.log('isSingle has been removed');
//     }).catch((e) => {
//       console.log('save failed, error is:', e)
//     });
