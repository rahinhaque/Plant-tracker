let thrivingList = [];
let strugglingList = [];

let totalCount = document.getElementById("total");
let ThriveCount = document.getElementById("Thrive-count");
let StrugglingCount = document.getElementById("Struggling-count");

const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingFilterBtn = document.getElementById("Thriving-filter-btn");
const strugglingFilterBtn = document.getElementById("Struggling-filter-btn");

const allCardsSection = document.getElementById("allcards");

const mainContainer = document.querySelector("main");

function calculateCount() {
  totalCount.innerText = allCardsSection.children.length;
  ThriveCount.innerText = thrivingList.length;
  StrugglingCount.innerText = strugglingList.length;
}
calculateCount();

//Common functions ::>>
function toggleStyle(id) {
  // 1. Reset ALL buttons — remove active state & restore original colors
  allFilterBtn.classList.remove("bg-black", "text-white");
  allFilterBtn.classList.add("btn-soft", "btn-warning");

  thrivingFilterBtn.classList.remove("bg-black", "text-white");
  thrivingFilterBtn.classList.add("btn-soft", "btn-success");

  strugglingFilterBtn.classList.remove("bg-black", "text-white");
  strugglingFilterBtn.classList.add("btn-soft", "btn-error");

  // 2. Style the selected button
  const selected = document.getElementById(id);
  // Remove its original soft color classes
  selected.classList.remove(
    "btn-soft",
    "btn-warning",
    "btn-success",
    "btn-error",
  );
  // Apply active style
  selected.classList.add("bg-black", "text-white");
}
