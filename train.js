// B Task

function raqamSana(str) {
    let son = 0;
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') {
        son++;
      }
    }
    return son;
  }
  
  const natija = raqamSana("ad2a54y82t0sfgb9a0kfals9");
  console.log("Natija:", natija);



// console.log("Jack Maning Maslahatlari");
// const list = [
//     "Yaxshi talaba bo'ling", // 0 - 20
//     "Yaxshi ustoz tanglang, va ko'p xatolar qiling", // 20 - 30
//     "O'zingiz uchun ishlashni boshlang", // 30 - 40
//     "O'zingiz kuchli bo'lgan sohada ishlang", // 40 - 50
//     "Yoshlarga investitsiya qiling", // 50 - 60
//     "Hozir dam oling, endi kech", // 60+
// ];

//CALLBACK Functionlar
// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("Iltimos, raqam kiriting", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//       setInterval(function () {
//         callback(null, list[5]);
//       }, 3000);
//     }        
// }

// console.log("Buyerdan o'tdi 0");
// maslahatBering(65, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("Jack Ma aytadiki:", data);
//     }
// });

// console.log("Shu yerga keldi 1");


//ASYNC Functionlar
// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("Iltimos, raqam kiriting");
//         else if(a <= 20) return list[0];
//         else if(a > 20 && a <= 30) return list[1];
//         else if(a > 30 && a <= 40) return list[2];
//         else if(a > 40 && a <= 50) return list[3];
//         else if(a > 50 && a <= 60) return list[4];
//         else {
//         return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve (list[5]);
//         }, 5000);
            
//         });

// setTimeout(function() {
//     callback(null, list[5]);
// }, 5000);
//     }
// }

// then + catch metodlari orqali CALL qilish
// console.log("Buyerdan o'tdi 0")
// maslahatBering(25)
//     .then((data) => {
//        console.log("Jack Madan maslahat:", data);
// })
//     .catch((err) => {
//         console.log("ERROR:", err);
// });

// // console.log("Buyerdan yetib keldi 1")

// // async + await metodi orqali CALL qilish
// async function run() {
//     let javob = await maslahatBering(30);
//     console.log(javob) 
//     javob = await maslahatBering(75);
//     console.log(javob);
//     javob = await maslahatBering(42);
//     console.log(javob);
// }

// run();

// A-TASK
// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("a", "mexanizatsiyalashtiraolmayotganligidandirda"));

//  ⭐️ Synchronous function vs Asynchronous function
// Asynchronous: CALLBACK

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (typeof a !== "number" || typeof b!== "number") {
//     console.log("Iltimos raqam kiriting, baraka topkur!", null)
//   } else if (b === 0) {
//     callback("Mahraj nolga teng bolmaydi", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqliBolish(7, 3, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("data:", data);
//     console.log("MANTIQLAR ...");
//   }
// });