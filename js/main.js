// ! #3
// let div = document.querySelector("#square");
// let btnLeft = document.querySelector("#left");
// let btnRight = document.querySelector("#right");

// btnLeft.addEventListener("click", (e) => {
//     div.style.margin = "0px 100px 0px 0px";
// });

// btnRight.addEventListener("click", (e) => {
//     div.style.margin = "0px 0px 0px 100px";
// });

// ! #9
// let body = document.querySelector("body");
// body.innerHTML = "<button>Жми на меня</button>";
// body.innerHTML +=
//     "<ol><li>Амин</li><li>ментор</li><li>ормон хан</li><li>не черный</li><li>король</li><li>трекер</li></ol>";

// let btn = document.querySelector("button");
// let li = document.querySelectorAll("li");
// btn.addEventListener("click", () => {
//     li.forEach((e) => {
//         e.style.color = "green";
//     });
// });
// ! #10
// let btn1 = document.querySelector("#btn1");
// let column = document.querySelector("#column");
// btn1.addEventListener("click", () => {
//     const column1 = column.insertRow();
//     const call1 = column1.insertCell();
//     const call2 = column1.insertCell();
//     call1.innerHTML = "Новая таблица 1";
//     call2.innerHTML = "Новая таблица 2 ";
// });
// ! #11
// let body = document.querySelector("body");
// window.addEventListener("resize", () => {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     body.innerHTML = `<h1>Ширина:${width}, высота: ${height}</h1>`;
// });
// ! #13
// document.addEventListener("click", (e) => {
//     let x = e.screenX;
//     let y = e.screenY;
//     alert(`x = ${x}; y = ${y}`);
// });
// ! #14
// let allH = document.querySelectorAll("h4");
// allH.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         let num = Number(item.textContent);
//         console.log(num);
//         let square = num ** 2;
//         item.textContent = square;
//     });
// });
// ! #17
// let inp1 = document.querySelector(".inp2");
// let btn = document.querySelector("btn2");
// btn.addEventListener("click", () => {
//     if (!inp1.value.trim()) {
//         alert("Оба поля должны быть заполнены!");
//         return;
//     }
// });
// ! #19
// let inp = document.querySelector("#inp3");
// inp.addEventListener("keydown", (e) => {
//     console.log(e.target.value);
// });