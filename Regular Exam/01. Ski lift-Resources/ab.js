function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCount = document.getElementById('people-count');
    const fromDate = document.getElementById('from-date');
    const daysCount = document.getElementById('days-count');
    const nextButton = document.getElementById('next-btn');
    const ticketInfoList = document.querySelector('.ticket-info-list');
    const confirm = document.querySelector('.confirm-ticket');
    const form = Array.from(document.getElementsByTagName("form"))[0];
    const main = document.getElementById('main');
    const body = document.getElementById('body');
     
    form.addEventListener("submit", (e) => {
        const fName = firstNameInput.value;
        const lName = lastNameInput.value;
        const fDate = fromDate.value;
        const fDays = daysCount.value;
        const fPeople = peopleCount.value;
     
        e.preventDefault();
     
        if (!fName || !lName || !fDate || !fDays || !fPeople) {
            return;
        }
     
        const li = document.createElement("li");
        li.className = "ticket";
     
        const article = document.createElement("article");
        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
     
        const pDate = document.createElement('p');
        pDate.textContent = `From date: ${fromDate.value}`;
     
        const pDays = document.createElement('p');
        pDays.textContent = `For ${daysCount.value} days`;
     
        const pPeople = document.createElement('p');
        pPeople.textContent = `For ${peopleCount.value} people`;
     
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";
     
        const continueBtn = document.createElement('button');
        continueBtn.className = "continue-btn";
        continueBtn.textContent = "Continue";
     
        article.appendChild(h3);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pPeople);
     
        ticketInfoList.appendChild(li);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
     
        firstNameInput.value = "";
        lastNameInput.value = "";
        fromDate.value = "";
        daysCount.value = "";
        peopleCount.value = "";
        nextButton.disabled = true;
     
        editBtn.addEventListener("click", () => {
            firstNameInput.value = fName;
            lastNameInput.value = lName;
            fromDate.value = fDate;
            daysCount.value = fDays;
            peopleCount.value = fPeople;
            nextButton.disabled = false;
            ticketInfoList.removeChild(li);
        });
     
        continueBtn.addEventListener('click', () => {
            ticketInfoList.removeChild(li);
            li.removeChild(editBtn);
            li.removeChild(continueBtn);
            confirm.appendChild(li);
     
            const confirmButton = document.createElement('button');
            confirmButton.className = "confirm-btn";
            confirmButton.textContent = "Confirm";
     
            const cancelButton = document.createElement('button');
            cancelButton.className = "cancel-btn";
            cancelButton.textContent = "Cancel";
     
            li.appendChild(confirmButton);
            li.appendChild(cancelButton);
     
            cancelButton.addEventListener('click', () => {
                confirm.removeChild(li);
                nextButton.disabled = false;
            });
     
            confirmButton.addEventListener('click', () => {
                body.removeChild(main);
     
                const h1 = document.createElement('h1');
                h1.id = "thank-you";
                h1.textContent = "Thank you, have a nice day!";
     
                const backButton = document.createElement('button');
                backButton.id = "back-btn";
                backButton.textContent = "Back";
     
                body.appendChild(h1);
                body.appendChild(backButton);
     
                backButton.addEventListener("click", () => {
                    window.location.reload();
                });
            });
        });
    })}