window.addEventListener('load', solve);

function solve() {
    let firstNameInput = document.getElementById('first-name')
    let lastNameInput = document.getElementById('last-name')
    let peopleCount = document.getElementById('people-count')
    let fromDate = document.getElementById('from-date')
    let daysCount = document.getElementById('days-count')
    let nextButton = document.getElementById('next-btn')
    let ticketInfoList = document.querySelector('.ticket-info-list')
    let confirm = document.querySelector('.confirm-ticket')
    let form = Array.from(document.getElementsByTagName("form"))[0]
    let main = document.getElementById('main')
    let body = document.getElementById('body')
    form.addEventListener("submit", (e) => {
        let fName = firstNameInput.value
        let lName = lastNameInput.value
        let fDate = fromDate.value
        let fDays = daysCount.value
        let fPeople = peopleCount.value
        e.preventDefault()
        if (!fName || !lName || !fDate || !fDays || !fPeople) { return }
        let li = document.createElement("li")
        li.className = "ticket"
        let article = document.createElement("article")
        let h3 = document.createElement('h3')
        h3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`
        let pDate = document.createElement('p')
        pDate.textContent = `From date: ${fromDate.value}`
        let pDays = document.createElement('p')
        pDays.textContent = `For ${daysCount.value} days`
        let pPeople = document.createElement('p')
        pPeople.textContent = `For ${peopleCount.value} people`
        let editBtn = document.createElement("button")
        editBtn.className = "edit-btn"
        editBtn.textContent = "Edit"
        let continueBtn = document.createElement('button')
        continueBtn.className = "continue-btn"
        continueBtn.textContent = "Continue"
        article.appendChild(h3)
        article.appendChild(pDate)
        article.appendChild(pDays)
        article.appendChild(pPeople)
        ticketInfoList.appendChild(li)
        li.appendChild(article)
        li.appendChild(editBtn)
        li.appendChild(continueBtn)
        firstNameInput.value = ""
        lastNameInput.value = ""
        fromDate.value = ""
        daysCount.value = ""
        peopleCount.value = ""
        nextButton.disabled = true
        editBtn.addEventListener("click", () => {
            firstNameInput.value = fName
            lastNameInput.value = lName
            fromDate.value = fDate
            daysCount.value = fDays
            peopleCount.value = fPeople
            nextButton.disabled = false
            ticketInfoList.removeChild(li)
        })
        continueBtn.addEventListener('click', () => {
            ticketInfoList.removeChild(li)
            li.removeChild(editBtn)
            li.removeChild(continueBtn)
            confirm.appendChild(li)
            let confirmButton = document.createElement('button')
            confirmButton.className = "confirm-btn"
            confirmButton.textContent = "Confirm"
            let cancelButton = document.createElement('button')
            cancelButton.className = "cancel-btn"
            cancelButton.textContent = "Cancel"
            li.appendChild(confirmButton)
            li.appendChild(cancelButton)
            cancelButton.addEventListener('click', () => {
                confirm.removeChild(li)
                nextButton.disabled = false
            })
            confirmButton.addEventListener('click', () => {
                body.removeChild(main)
                let h1 = document.createElement('h1')
                h1.id = "thank-you"
                h1.textContent = "Thank you, have a nice day!"
                let backButton = document.createElement('button')
                backButton.id = "back-btn"
                backButton.textContent = "Back"
                body.appendChild(h1)
                body.appendChild(backButton)
                backButton.addEventListener("click", () => { window.location.reload() })
            })
        })

    })
}