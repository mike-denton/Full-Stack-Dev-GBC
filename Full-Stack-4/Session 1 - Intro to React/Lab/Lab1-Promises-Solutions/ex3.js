var promise1 = 101;
var promise2 = setTimeout(() => console.log("follow the white"), 5000);
var promise3 = new Promise(function(resolve, reject) {
    resolve("rabbit..neo");
})


const resolveAll = () => {
    // return new Promise(function (resolve, reject) {
    //     return Promise.all([promise1, promise2, promise3])
    //         .then((values) => console.log(values));
    // })
    return Promise.all([promise1, promise2, promise3])
            .then((values) => console.log(values));
} 

resolveAll()
