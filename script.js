import { db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* ENVELOPE */

const envelope = document.getElementById("envelope");
const envelopePage = document.getElementById("envelopePage");
const birthdayPage = document.getElementById("birthdayPage");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    confetti({
        particleCount: 250,
        spread: 120,
        origin: { y: 0.6 }
    });

    music.currentTime = 0;
    music.play().catch(console.error);

    setTimeout(() => {

        envelopePage.style.display = "none";
        birthdayPage.style.display = "block";

    }, 1800);
});

/* SLIDESHOW */

const slideImage = document.getElementById("slideImage");

const photos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg"
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= photos.length){
        current = 0;
    }

    slideImage.src = photos[current];

}, 3500);

/* GUESTBOOK */

const sendBtn = document.getElementById("sendWish");
const messagesDiv = document.getElementById("messages");

async function loadMessages(){

    messagesDiv.innerHTML = "";

    const q = query(
        collection(db,"wishes")
    );

    const snapshot = await getDocs(q);

    snapshot.forEach((doc)=>{

        const data = doc.data();

        const card = document.createElement("div");
        card.className = "messageCard";

        card.innerHTML = `
            <strong>${data.name}</strong>
            <p>${data.message}</p>
        `;

        messagesDiv.prepend(card);

    });

}

sendBtn.addEventListener("click", async ()=>{

    const name =
        document.getElementById("name").value;

    const wish =
        document.getElementById("wish").value;

    if(!name || !wish){
        alert("Please fill both fields :D");
        return;
    }

    await addDoc(
        collection(db,"wishes"),
        {
            name:name,
            message:wish,
            time:Date.now()
        }
    );

    document.getElementById("name").value = "";
    document.getElementById("wish").value = "";

    loadMessages();

});

loadMessages();
