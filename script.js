let thrivingList = [];
let strugglingList = [];
let currentStatus = "all";

let totalCount = document.getElementById("total");
let ThriveCount = document.getElementById("Thrive-count");
let StrugglingCount = document.getElementById("Struggling-count");

const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingFilterBtn = document.getElementById("Thriving-filter-btn");
const strugglingFilterBtn = document.getElementById("Struggling-filter-btn");
const filteredSection = document.getElementById("filtered-section");

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
  currentStatus = id;
  // Remove its original soft color classes
  selected.classList.remove(
    "btn-soft",
    "btn-warning",
    "btn-success",
    "btn-error",
  );
  // Apply active style
  selected.classList.add("bg-black", "text-white");

  if (id === "Thriving-filter-btn") {
    allCardsSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderThriving();
  } else if (id === "all-filter-btn") {
    allCardsSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id === "Struggling-filter-btn") {
    allCardsSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderStruggling();
  }
}

mainContainer.addEventListener("click", function (event) {
  console.log(event.target.classList.contains("Thriving-btn"));
  if (event.target.classList.contains("Thriving-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector(".plantName").innerText;
    const latinName = parentNode.querySelector(".latinName").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;
    parentNode.querySelector(".status").innerText = "Thrive";

    const cardInfo = {
      plantName,
      latinName,
      light,
      water,
      status: "Thrive",
      notes,
    };

    const plantExist = thrivingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );

    if (!plantExist) {
      thrivingList.push(cardInfo);
    }
    strugglingList = strugglingList.filter(
      (item) => item.plantName != cardInfo.plantName,
    );

    if (currentStatus == "Struggling-filter-btn") {
      renderStruggling();
    }
    calculateCount();
    // renderThriving();
  } else if (event.target.classList.contains("Struggling-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector(".plantName").innerText;
    const latinName = parentNode.querySelector(".latinName").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;
    parentNode.querySelector(".status").innerText = "Struggling";

    const cardInfo = {
      plantName,
      latinName,
      light,
      water,
      status: "Struggling",
      notes,
    };

    const plantExist = strugglingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );

    if (!plantExist) {
      strugglingList.push(cardInfo);
    }
    thrivingList = thrivingList.filter(
      (item) => item.plantName != cardInfo.plantName,
    );
    if (currentStatus == "Thriving-filter-btn") {
      renderThriving();
    }

    calculateCount();
    // renderStruggling();
  }
});

function renderThriving() {
  filteredSection.innerHTML = "";

  for (let thrive of thrivingList) {
    console.log(thrive);
    let div = document.createElement("div");
    div.className =
      "plant-card card rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start gap-4";
    div.innerHTML = `<div class="flex flex-col gap-3 w-full">
            <!-- part-1: Name -->
            <div>
              <p class="plantName text-xl sm:text-2xl font-bold text-gray-800">
                ${thrive.plantName}
              </p>
              <p class="latinName text-sm text-gray-400 italic">${thrive.latinName}</p>
            </div>
            <!-- part-2: Light & Water badges -->
            <div class="flex flex-wrap gap-2">
              <span class="light badge badge-ghost text-xs text-gray-500"
                >☀️ ${thrive.light}</span
              >
              <span class="water badge badge-ghost text-xs text-gray-500"
                >💧 ${thrive.water}</span
              >
            </div>
            <!-- part-3: Status & Notes -->
            <div>
              <span class="status badge badge-outline badge-success text-xs"
                >${thrive.status}</span
              >
            </div>
            <p class="notes text-sm text-gray-500">
              ${thrive.notes}
            </p>

            <!-- part-4: Action buttons -->
            <div class="flex flex-wrap gap-3 mt-1">
              <button
                class="Thriving-btn btn btn-outline btn-success btn-sm w-auto sm:w-[90px]"
              >
                ✅ Thriving
              </button>
              <button
                class="Struggling-btn btn btn-outline btn-error btn-sm w-auto sm:w-[100px]"
              >
                ⚠️ Struggling
              </button>
            </div>
          </div>
          <!-- main part -2: Delete button -->
          <div class="self-end sm:self-start">
            <button class="delete-btn btn btn-outline btn-error btn-sm w-auto sm:w-[80px]">
              🗑️ Delete
            </button>
          </div>`;

    filteredSection.appendChild(div);
  }
}

function renderStruggling() {
  filteredSection.innerHTML = "";

  for (let Struggle of strugglingList) {
    console.log(Struggle);
    let div = document.createElement("div");
    div.className =
      "plant-card card rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start gap-4";
    div.innerHTML = `<div class="flex flex-col gap-3 w-full">
            <!-- part-1: Name -->
            <div>
              <p class="plantName text-xl sm:text-2xl font-bold text-gray-800">
                ${Struggle.plantName}
              </p>
              <p class="latinName text-sm text-gray-400 italic">${Struggle.latinName}</p>
            </div>
            <!-- part-2: Light & Water badges -->
            <div class="flex flex-wrap gap-2">
              <span class="light badge badge-ghost text-xs text-gray-500"
                >☀️ ${Struggle.light}</span
              >
              <span class="water badge badge-ghost text-xs text-gray-500"
                >💧 ${Struggle.water}</span
              >
            </div>
            <!-- part-3: Status & Notes -->
            <div>
              <span class="status badge badge-outline badge-error text-xs"
                >${Struggle.status}</span
              >
            </div>
            <p class="notes text-sm text-gray-500">
              ${Struggle.notes}
            </p>

            <!-- part-4: Action buttons -->
            <div class="flex flex-wrap gap-3 mt-1">
              <button
                class="Thriving-btn btn btn-outline btn-success btn-sm w-auto sm:w-[90px]"
              >
                ✅ Thriving
              </button>
              <button
                class="Struggling-btn btn btn-outline btn-error btn-sm w-auto sm:w-[100px]"
              >
                ⚠️ Struggling
              </button>
            </div>
          </div>
          <!-- main part -2: Delete button -->
          <div class="self-end sm:self-start">
            <button class="delete-btn btn btn-outline btn-error btn-sm w-auto sm:w-[80px]">
              🗑️ Delete
            </button>
          </div>`;

    filteredSection.appendChild(div);
  }
}
