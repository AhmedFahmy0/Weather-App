// var myData;

// var httpReq = new XMLHttpRequest();

// httpReq.open("GET" , "http://jsonplaceholder.typicode.com/posts")

// httpReq.send()

// httpReq.addEventListener("readystatechange" , function(){

//     if (httpReq.readyState == 4 && httpReq.status == 200 ) {

//         myData = JSON.parse(httpReq.response)

//         displayData()
//     }

// })

// function displayData() {

//     var hsalah = ``

//     for (var i = 0 ; i < myData.length ; i++ )
// {
//     hsalah += `            <div  class="col-md-3">
//     <div>
//         <h2>${myData[i].title}</h2>
//         <p>${myData[i].body}</p>
//     </div>
//     </div>`
// }
// document.querySelector(".row").innerHTML = hsalah ;
// }


// async function search(a) {
//     let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8886d2071d1e496aa02232913221010&q=${a}&days=3`);
//     if (t.ok && 400 != t.status) {
//         let a = await t.json();
//         displayCurrent(a.location, a.current), displayAnother(a.forecast.forecastday)
//     }
// }
// document.getElementById("search").addEventListener("keyup", a => {
//     search(a.target.value)
// });
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function displayCurrent( a, t) {
//     if (null != t) {
//         var e = new Date(t.last_updated.replace(" ", "T"));
//         let n = `<div class="col-md-4 rounded-3">
//         <div class="today forecast today-cur p-2 rounded-3">
//             <div class="forecast-header d-flex justify-content-between" id="today">
//                 <div class="day">${days[e.getDay()]}</div>
//                 <div class=" date">${e.getDate()+monthNames[e.getMonth()]}</div>
//             </div>
//         </div>
//         <div class="forecast-content p-4" id="current">
//             <div class="location fs-3">${a.name}</div>
//             <div class="degree d-flex justify-content-evenly ">
//                 <div class="num">${t.temp_c}<sup>o</sup>C</div>
//                 <div class="forecast-icon ">
//                     <img src="https:${t.condition.icon}">
//                 </div>
//             </div>
//             <div class="custom mt-3 mb-3">${t.condition.text}</div>
//             <span><img class="my-2 mx-2" src="images/icon-umberella.png" alt="">20%</span>
//             <span><img class="my-2 mx-2" src="images/icon-wind.png" alt="">18km/h</span>
//             <span><img class="my-2 mx-2" src="images/icon-compass.png" alt="">East</span>
//         </div>
//     </div>`
//         document.getElementById("forecast").innerHTML = n
//     }
// }

// function displayAnother(a) {
//     let t = "";
//     for (let e = 1; e < a.length ; e++)
//         t += `<div class="col-md-4 p-0 ">
//         <div class="forecast-header nex-day text-center p-2">
//             <div class="day">${days[new Date(a[e].date.replace(" ","T")).getDay()]}</div>
//         </div>
//         <div class="forecast-contentNextDay text-center p-4">
//             <div class="forecast-iconNex mt-4">
//                 <img src="https:${a[e].day.condition.icon}" (1).png" alt="" width=48>
//             </div>
//             <div class="degreem mt-3">${a[e].day.maxtemp_c}<sup>o</sup>C</div>
//             <small class="mt-1">${a[e].day.mintemp_c}<sup>o</sup></small>
//             <div class="custom mt-5 mb-4">${a[e].day.condition.text}</div>
//         </div>
//     </div>`

//     document.getElementById("forecast").innerHTML +=t
// }


// search("cairo");


















async function search(a) {
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
    if (t.ok && 400 != t.status) {

        let c = await t.json();

        displayCurrent(c.location, c.current), displayAnother(c.forecast.forecastday)
    }
}
document.getElementById("search").addEventListener("keyup", a => {
    search(a.target.value)
});
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displayCurrent(a, t) {


    if (null != t) {
        
        var e = new Date(t.last_updated.replace(" ", "T"));
        let n = `<div class="today forecast">
            <div class="forecast-header"  id="today">
            <div class="day">${days[e.getDay()]}</div>
            <div class=" date">${e.getDate()+monthNames[e.getMonth()]}</div>
            </div> 
            <div class="forecast-content" id="current">    
            <div class="location">${a.name}</div>    
            <div class="degree" class="d-flex justify-content-center">        
            <div class="num">${t.temp_c}<sup>o</sup>C</div>              
            <div class="forecast-icon">            
            <img src="https:${t.condition.icon}" alt="" width=90>        
            </div>   
            </div>    
            <div class="custom">${t.condition.text}</div>    
            <span><img src="images/icon-umberella.png" alt="">20%</span>
            <span><img src="images/icon-wind.png" alt="">18km/h</span>
            <span><img src="images/icon-compass.png" alt="">East</span>    
            </div>
            </div>`;
        document.getElementById("forecast").innerHTML = n
    }
}

function displayAnother(a) {
    let t = "";
    for (let e = 1 ; e < a.length; e++) 
    t += `\t<div class="forecast">       
    <div class="forecast-header">           
    <div class="day">${days[new Date(a[e].date.replace(" ","T")).getDay()]}</div>       
    </div>      
    <div class="forecast-content">           
    <div class="forecast-icon">               
    <img src="https:${a[e].day.condition.icon}" alt="" width=48>           
    </div>           
    <div class="degree">${a[e].day.maxtemp_c}<sup>o</sup>C</div>           
    <small>${a[e].day.mintemp_c}<sup>o</sup></small>           
    <div class="custom">${a[e].day.condition.text}</div>       
    </div>       
    </div>`;




    document.getElementById("forecast").innerHTML += t
}


search("cairo");