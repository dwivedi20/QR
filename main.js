// let form =document.querySelector("form");
// let input =document.querySelector("input");
// let img = document.querySelector ("img");
//  let body= document.querySelector("body");
// // let card=document.querySelector ("card");

// const qr = async (e)=>{
//     e.preventDefault();

     
        
//     const response= await fetch (`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`);
//       console.log(response);
//     image.setAttribute("src" ,response.url);
//     // qr() ;
     
 
//      form.reset();
// //      
// }
//  form.addEventListener("submit",qr);
let form = document.querySelector("form");
let input = document.querySelector("input");
let img = document.querySelector("img");
let body = document.querySelector("body");
let quote = document.querySelector(".display-5");
body.style.backgroundColor="black"


const fetchQuote = async () => {
       const response = await fetch("https://quotable.io/random");
       const data = await response.json();
      quote.innerText = data.content + " - " + data.author;
     };
     
     setInterval(() => {
          fetchQuote();
        }, 20000);

const qr = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`);
    if (!response.ok) {
      throw new Error('Failed to generate QR code');
    }
    const data = await response.blob();
    const imageUrl = URL.createObjectURL(data);
    img.src = imageUrl;
  } catch {
    console.error("Failed to generate QR code", error);
  }
  fetchQuote();
  form.reset();
}

form.addEventListener("submit", qr);