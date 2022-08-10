
//Example1:
const meetingFriends = new Promise((resolve, reject) => {
meeting = true;
if(meeting) {
    resolve(meeting);
}
else {
    reject('Could not meet'); 
}
});

meetingFriends.then((friends) => {console.log('Thank you for coming'+ friends)}).catch((error) => {console.log('So sad, that we didnot meet' +error)}).finally(() => {console.log('regardless there is a result')});


//Example2:
const colorDisplay = new Promise((resolve, reject) => {
    setTimeout(() => {
        let colors = ['blue','green','yellow','orange'];
        // console.log(colors);
        resolve(colors);
    },3000);
});

colorDisplay.then((colors) => {console.log('Thank you for using colors: ' + colors);}).catch((err) => {console.log(err);})
.finally(() => {console.log('Completed');});

//Example3:
 let walk = ()=> {
    return new Promise((resolve, reject) => {console.log('Finished walking')});
};
let breakfast = ()=> {
    return new Promise((resolve, reject) => {console.log('Finished breakfast')});
};
let lunch = ()=> {
    return new Promise((resolve, reject) => {console.log('Finished lunch')});
};

Promise.all([walk(),breakfast(),lunch()]).then((result) => {console.log('Finished result: ', result);});
// Promise.race([walk(),breakfast(),lunch()]).then((result) => {console.log('Finished result: ', result);});
