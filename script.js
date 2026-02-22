let thrivingList = [];
let strugglingList = [];

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
  } else if (id === "all-filter-btn") {
    allCardsSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
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

    const cardInfo = {
      plantName,
      latinName,
      light,
      water,
      status,
      notes,
    };

    const plantExist = thrivingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );

    parentNode.querySelector(".status").innerText = "Thrive";

    if (!plantExist) {
      thrivingList.push(cardInfo);
    }
    renderThriving();
  }
});

function renderThriving() {
  filteredSection.innerHTML = "";

  for (let thrive of thrivingList) {
    console.log(thrive);
    let div = document.createElement("div");
    div.className =
      "card border border-gray-200 rounded-xl shadow-sm p-6 flex flex-row justify-between items-start";
    div.innerHTML = `<div class="flex flex-col gap-3">
            <!-- part-1: Name -->
            <div>
              <p class="plantName text-2xl font-bold text-gray-800">
                ${thrive.plantName}
              </p>
              <p class="latinName text-sm text-gray-400">${thrive.latinName}</p>
            </div>
            <!-- part-2: Light & Water badges -->
            <div class="flex gap-2">
              <span class="light badge badge-ghost text-xs text-gray-500"
                >${thrive.light}</span
              >
              <span class="water badge badge-ghost text-xs text-gray-500"
                >${thrive.water}</span
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
            <div class="flex gap-3 mt-1">
              <button
                class="Thriving-btn btn btn-outline btn-success btn-sm w-[90px]"
              >
                Thriving
              </button>
              <button
                class="Struggling-btn btn btn-outline btn-error btn-sm w-[100px]"
              >
                Struggling
              </button>
            </div>
          </div>
          <!-- main part -2: Delete button -->
          <div>
            <button class="btn btn-outline btn-error btn-sm w-[80px]">
              Delete
            </button>
          </div>`;

    filteredSection.appendChild(div);
  }
}
