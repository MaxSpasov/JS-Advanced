window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const peopleCountInput = document.getElementById("people-count");
const fromDateInput = document.getElementById("from-date");
const daysCountInput = document.getElementById("days-count");
const ticketInfoList = document.querySelector(".ticket-info-list");
const confirmTicketList = document.querySelector(".confirm-ticket");
const nextButton = document.getElementById("next-btn");
const editButton = document.getElementById("edit-btn");
const continueButton = document.getElementById("continue-btn");
const cancelButton = document.getElementById("cancel-btn");
const confirmButton = document.getElementById("confirm-btn");
const backButton = document.getElementById("back-btn");
const infoTicketSection = document.getElementById("info-ticket");
const confirmTicketSection = document.getElementById("confirm-ticket-section");
const mainSection = document.getElementById("main");

function displayTicketInfo() {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const peopleCount = peopleCountInput.value.trim();
  const fromDate = fromDateInput.value;
  const daysCount = daysCountInput.value.trim();

  if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
    return;
  }

  const listItem = document.createElement("li");
  const innerHtml = `
    <div class="ticket-info">
      <p><span>First name:</span> ${firstName}</p>
      <p><span>Last name:</span> ${lastName}</p>
      <p><span>Number of people:</span> ${peopleCount}</p>
      <p><span>From date:</span> ${fromDate}</p>
      <p><span>Number of days:</span> ${daysCount}</p>
    </div>
  `;
  listItem.innerHTML = innerHtml;
  ticketInfoList.appendChild(listItem);

  firstNameInput.value = "";
  lastNameInput.value = "";
  peopleCountInput.value = "";
  fromDateInput.value = "";
  daysCountInput.value = "";
  nextButton.disabled = true;
  editButton.disabled = false;
  continueButton.disabled = false;
}

nextButton.addEventListener("click", function (event) {
  event.preventDefault();
  displayTicketInfo();
});

editButton.addEventListener("click", function () {
  const listItem = ticketInfoList.querySelector("li");
  const firstName = listItem.querySelector("p:nth-of-type(1) span").textContent;
  const lastName = listItem.querySelector("p:nth-of-type(2) span").textContent;
  const peopleCount = listItem.querySelector("p:nth-of-type(3) span").textContent;
  const fromDate = listItem.querySelector("p:nth-of-type(4) span").textContent;
  const daysCount = listItem.querySelector("p:nth-of-type(5) span").textContent;

  firstNameInput.value = firstName;
  lastNameInput.value = lastName;
  peopleCountInput.value = peopleCount;
  fromDateInput.value = fromDate;
  daysCountInput.value = daysCount;
  ticketInfoList.removeChild(listItem);
  nextButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;
});

function displayConfirmTicket() {
  const listItem = ticketInfoList.querySelector("li").cloneNode(true);
  listItem.classList.remove("ticket-info");
  confirmTicketList.appendChild(listItem);
  editButton.disabled = true;
  continueButton.disabled = true;
  cancelButton.disabled = false;
  confirmButton.disabled = false;
}

continueButton.addEventListener("click", function () {
  displayConfirmTicket();
  infoTicketSection.style.display = "none";
  confirmTicketSection.style.display = "block";
});

cancelButton.addEventListener("click", function () {
  const listItem = confirmTicketList.querySelector("li");
  confirm
}
solve();

    
    
