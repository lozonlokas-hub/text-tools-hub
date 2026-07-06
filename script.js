// =============================
// Text Tools Hub - JavaScript Part 1
// =============================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Text Tools Hub Loaded Successfully!");

    // Smooth scroll for menu links
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = this.getAttribute("href");

            if (target.startsWith("#")) {
                const section = document.querySelector(target);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Explore Tools Button
    const exploreBtn = document.querySelector(".btn");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Welcome to Text Tools Hub!");
        });
    }
});
// ===============================
// Part 2 - Tool Buttons
// ===============================

const toolButtons = document.querySelectorAll(".tool-card button");

toolButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const toolName = button.parentElement.querySelector("h3").innerText;

        alert(toolName + " is coming in the next update!");

    });

});

// ===============================
// Hover Animation
// ===============================

const cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
© ${new Date().getFullYear()} Text Tools Hub. All Rights Reserved.;

}
const textInput=document.getElementById("textInput");
const wordCount=document.getElementById("wordCount");
const charCount=document.getElementById("charCount");
const clearBtn=document.getElementById("clearBtn");

if(textInput){

textInput.addEventListener("input",()=>{

const text=textInput.value;

const words=text.trim()===""
?0
:text.trim().split(/\s+/).length;

wordCount.textContent=words;

charCount.textContent=text.length;

});

clearBtn.addEventListener("click",()=>{

textInput.value="";
wordCount.textContent=0;
charCount.textContent=0;

});
const caseInput = document.getElementById("caseInput");

document.getElementById("upperBtn")?.addEventListener("click",()=>{
caseInput.value = caseInput.value.toUpperCase();
});

document.getElementById("lowerBtn")?.addEventListener("click",()=>{
caseInput.value = caseInput.value.toLowerCase();
});

document.getElementById("titleBtn")?.addEventListener("click",()=>{
caseInput.value = caseInput.value.replace(/\w\S*/g,function(txt){
return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
});
});
const spaceInput=document.getElementById("spaceInput");

document.getElementById("spaceBtn")?.addEventListener("click",()=>{

spaceInput.value=spaceInput.value.replace(/\s+/g," ").trim();

alert("Extra Spaces Removed Successfully!");

});
const reverseInput = document.getElementById("reverseInput");

document.getElementById("reverseBtn")?.addEventListener("click",()=>{

reverseInput.value = reverseInput.value
.split("")
.reverse()
.join("");

alert("Text Reversed Successfully!");

});
// Find & Replace Tool

const replaceBtn = document.getElementById("replaceBtn");

replaceBtn?.addEventListener("click",()=>{

const text = document.getElementById("findText");

const find = document.getElementById("findWord").value;

const replace = document.getElementById("replaceWord").value;

if(find===""){
alert("Enter a word to find.");
return;
}

text.value = text.value.split(find).join(replace);

alert("Replacement Completed!");

});
const characterInput = document.getElementById("characterInput");

if(characterInput){

characterInput.addEventListener("input",()=>{

const text = characterInput.value;

document.getElementById("totalCharacters").textContent = text.length;

document.getElementById("charactersNoSpace").textContent =
text.replace(/\s/g,"").length;

const words = text.trim()===""
?0
:text.trim().split(/\s+/).length;

document.getElementById("totalWords").textContent = words;

const lines = text===""
?0
:text.split("\n").length;

document.getElementById("totalLines").textContent = lines;

const paragraphs = text.trim()===""
?0
:text.split(/\n\s*\n/).length;

document.getElementById("totalParagraphs").textContent = paragraphs;

const minutes = Math.max(1, Math.ceil(words/200));

document.getElementById("readingTime").textContent =
minutes + " min";

});

}
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn?.addEventListener("click",()=>{

const text = document.getElementById("downloadText").value;

const blob = new Blob([text],{type:"text/plain"});

const link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "text-tools-hub.txt";

link.click();

URL.revokeObjectURL(link.href);

});
const sortInput = document.getElementById("sortInput");

document.getElementById("sortAZ")?.addEventListener("click",()=>{

sortInput.value = sortInput.value
.split("\n")
.sort()
.join("\n");

});

document.getElementById("sortZA")?.addEventListener("click",()=>{

sortInput.value = sortInput.value
.split("\n")
.sort()
.reverse()
.join("\n");

});
// Duplicate Line Remover

const duplicateBtn=document.getElementById("duplicateBtn");

duplicateBtn?.addEventListener("click",()=>{

const textarea=document.getElementById("duplicateInput");

const lines=textarea.value.split("\n");

const unique=[...new Set(lines)];

textarea.value=unique.join("\n");

alert("Duplicate Lines Removed!");

});
// Remove Empty Lines

const emptyBtn = document.getElementById("emptyBtn");

emptyBtn?.addEventListener("click", () => {

const textarea = document.getElementById("emptyInput");

textarea.value = textarea.value
.split("\n")
.filter(line => line.trim() !== "")
.join("\n");

alert("Empty Lines Removed!");

});
// Password Generator

const passwordBtn=document.getElementById("generatePassword");

passwordBtn?.addEventListener("click",()=>{

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password="";

for(let i=0;i<16;i++){

password+=chars.charAt(Math.floor(Math.random()*chars.length));

}

document.getElementById("passwordOutput").value=password;

});
}