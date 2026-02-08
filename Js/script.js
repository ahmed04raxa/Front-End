// let heading = document.getElementById('heading');
// let res = document.getElementById('res')

//res.innerHTML = heading.innerHTML

// let tagName = document.getElementsByTagName('p')
// let heading = document.getElementsByTagName('h1')

// console.log(heading[0].innerHTML);


// let p = document.querySelector('p')
// let h1 = document.querySelector('h1')
// h1.innerHTML = p.innerHTML

// let headingSelector = document.querySelectorAll('h1')

// headingSelector.forEach((val, index) => {
//     console.log(`${index} ${val.innerHTML}`);
// })


// function showData() {
//     console.log("Ahmed Raza");
// }


// let btn = document.querySelector("button")

// btn.addEventListener('click', () => {
//     alert("Ahmed Raza");
// })


let h1 = document.querySelector("h1");
let btn = document.querySelector('button')

btn.addEventListener("click", () => {
    h1.innerHTML = "AHmed RAza" ?? ""
})