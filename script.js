const api ='https://icanhazdadjoke.com';
const jokdiv=document.getElementById('joke');
const btn =document.getElementById('btn');


btn.addEventListener('click',get);
 function getApi(){

     jokdiv.innerText="";
let data;
    const re=fetch(api, {
        headers:{'Accept': 'application/json'}

    }).then(response=>{
        data=response.json()
        return data
    }).then(data=>{
        jokdiv.innerText= data.joke
    })


}

async function get(){
       jokdiv.innerText="";
     let data;
     const config={
         headers: {
             "accept": "application/json"
         }
     }
     const  res = await fetch(api,config);
     data=await res.json();
     console.log(data.joke)
  jokdiv.innerText= data.joke
 }

