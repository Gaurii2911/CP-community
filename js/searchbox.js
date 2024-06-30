
// const data = async () => {

//     const response = await fetch("https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan");
//     const movies = await response.json();
//     // const myJSON = JSON.stringify(movies)

//     console.log(movies)
//     ihtml=""
//     for (item in movies) {
//         console.log(movies[item])
//         ihtml += `
//     <div class="card" style="width: 18rem; background-color: aqua;">
//     <img src=".." alt="" class="card-img-top">
//     <div class="card-body" >
//             <h5 class="card-title" >${movies[item].handle}</h5>
//             <p class="card-text"><a href-"${movies[item].url}">Visit here</a></p>
//             <p> rating:${movies[item].rating}</p>
//             <p> max rank: ${movies[item].maxRank}</p>
//             <a href="#" class="btn btn-primary">GO somewhere</a>
//     </div>
// </div>
//     `
// }
// cardcontainer.innerHTML=ihtml;


// }

// data();/


// const data = async () => {

//     const response = await fetch("https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan");
//     const movies = await response.json();
// //     // const myJSON = JSON.stringify(movies)

// //     console.log(movies)

// let url = "https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan";
// let response = fetch(url);
// response.then((v) => {
//     return v.json()
// }).then((movies) => {
//     console.log(movies)
//     // document.getElementById("cardcontainer").innerHTML=movies.rating

//     ihtml = ""
//     for (key in movies) {
//         console.log(movies[key])
//         ihtml += `
//     <div class="card" style="width: 18rem; background-color: aqua;">
//     <img src=".." alt="" class="card-img-top">
//     <div class="card-body" >
//             <h5 class="card-title" >${movies[key].handle}</h5>
//             <p class="card-text"><a href-"${movies[key].url}">Visit here</a></p>
//             <p> rating:${movies[key].rating}</p>
//             <p> max rank: ${movies[key].maxRank}</p>
//             <a href="#" class="btn btn-primary">GO somewhere</a>
//     </div>
//     </div>
//     `
//     }
//     cardcontainer.innerHTML = ihtml; 
// })



// let url = "https://codeforces.com/api/user.status?handle=Fefer_Ivan&from=1&count=10";
// let response = fetch(url)
// response.then((v) => {
//     return v.json()
// }).then((contests) => {
//     console.log(contests)
//     ihtml = ""
//     for (item in contests) {
//         console.log(contests[item])
//         ihtml += `
//         <div class="card" style="width: 18rem; background-color: aqua; margin: top 10px;">
//         <img src=".." alt="" class="card-img-top">
//         <div class="card-body" >
//                 <h5 class="card-title">${contests[item].id}</h5>
//                 <p class="card-text">${contests[item].contestId}</p>
//                 <p class="card-text">${contests[item].passedTestCount}</p>
//                 <a href="#" class="btn btn-primary">GO somewhere</a>
//         </div>
//         </div>
//         `
//     }
//     cardcontainer.innerHTML = ihtml
// })









