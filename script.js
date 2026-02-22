let totalCount = document.getElementById("total");
let ThriveCount = document.getElementById("Thrive-count");
let StrugglingCount = document.getElementById("Struggling-count");

const allCardsSection = document.getElementById("allcards");
console.log(allCardsSection.children.length);

function calculateTotal(){
  totalCount.innerText = allCardsSection.children.length;
}
calculateTotal();

