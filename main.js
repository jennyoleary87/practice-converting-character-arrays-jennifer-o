/*
3/19/25
Using Arrays - 4: Practice: Converting Character Arrays

Instructions
You are working as a software engineer for a secret agency that needs a way to
encrypt and decrypt messages. The agency communicates using character
arrays instead of plain text to ensure the messages are secure.

Task 1: Decode the Following Reversed Messages
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
arrays dynamically. Then log the messages.
*/

// 1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
// gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam
// gnidoC"
let message1 = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY\n !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"; // new line because its long
let fixed1 = message1.split('').reverse().join('');
console.log("Message 1: ", fixed1);
// Coding may seem hard at first, but if you persist, you'll get it! You can also use coding skills in a variety of settings! Keep going, and you'll be okay!

// 2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
// gnitirw edoc tuB"
let message2 = "!ecitcarp htiw retteb teg ll'uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let fixed2 = message2.split('').reverse().join('');
console.log("Message 2: ", fixed2);
// But code writing will feel hard at first. Take time, you'll get better with practice!

// 3. Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI
// .lanoisseforp a ekil leef ot evah t'nod uoY"
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let fixed3 = message3.split('').reverse().join('');
console.log("Message 3: ", fixed3);
// You don't have to feel like a professional. If you have trouble, you are no different from other people!

// 4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
// tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";
let fixed4 = message4.split('').reverse().join('');
console.log("Message 4: ", fixed4);
// Just start today. Don't wait for the perfect moment. If you can only write small programs, they still matter.

/*
Task 2: Write your own reverse messages
1. First, write your own short messages of inspiration (without reversing them).
2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamically so that you have a reverse output.
3. Then log the messages.
*/

let myMessage = ".thgil eht no nrut ot srebmemer ylno eno fi ,semit fo tsekrad eht ni neve ,dnuof eb nac ssenippaH";
let myFixed = myMessage.split('').reverse().join('');
console.log("My fixed message: ", myFixed);
// Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.
