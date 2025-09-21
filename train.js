console.log("Jack Maning Maslahatlari");
const list = [
    "Yaxshi talaba bo'ling", // 0 - 20
    "Yaxshi ustoz tanglang, va ko'p xatolar qiling", // 20 - 30
    "O'zingiz uchun ishlashni boshlang", // 30 - 40
    "O'zingiz kuchli bo'lgan sohada ishlang", // 40 - 50
    "Yoshlarga investitsiya qiling", // 50 - 60
    "Hozir dam oling, endi kech", // 60+
];

function maslahatBering(a, callback) {
    if(typeof a !== "number") callback("Iltimos, raqam kiriting", null);
        else if(a <= 20) callback(null, list[0]);
        else if(a > 20 && a <= 30) callback(null, list[1]);
        else if(a > 30 && a <= 40) callback(null, list[2]);
        else if(a > 40 && a <= 50) callback(null, list[3]);
        else if(a > 50 && a <= 60) callback(null, list[4]);
        else {
            setTimeout(function() {
                callback(null, list[5]);
            }, 5000);
            
        }
}

console.log("Buyerdan o'tdi 0")
maslahatBering(65, (err, data) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("Jack Madan maslahat:", data);
    }
    
});

console.log("Buyerdan yetib keldi 1")
