var btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    // document.body.style.backgroundColor = "#006064";
    var colors = ['#006064', '#FFAB00', '#424242', '#BF360C', '#795548', '#9E9D24'];
    var randomcolors = Math.trunc(Math.random() * colors.length);
    randomcolors = document.body.style.backgroundColor = colors[randomcolors];
});