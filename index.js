let express = require('express');
let app = express();

// let signs = {
//     "data" :[
//         {
//             name: "Aries",
//             info: "Aries"
//         },
//         {
//             name: "Taurus",
//             info: "Taurus"
//         },
//         {
//             name: "Gemini",
//             info: "Gemini"
//         }
//     ]
// }
// app.get('/', (request, response) => {
//     response.send("this is the root page");
// })

app.use('/', express.static('public'));

app.get('/about', (request, response) => {
    response.send("this is an about page")
})

app.get('/signs', (request, response) => {
    response.json(signs);
})


// app.get('/signs/:sign', (request, response) => {
//     console.log(request.params.sign);
//     let user_sign = request.params.sign;
//     let user_obj;
//     for(let i=0;i<signs.data.length;i++){
//         if(user_sign == signs.data[i].name){
//             user_obj = signs.data[i];
//         }
//     }
//     console.log(user_obj); 
//     if(user_obj){
//         response.json(user_obj);
//     } else{
//         response.json({status:"info not present"});
//     }
// })

app.listen(3000, () => {
    console.log("app is listening at localhost:3000");

})