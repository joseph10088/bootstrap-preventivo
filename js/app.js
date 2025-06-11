// id form
const form = document.getElementById('formUtente') // id contenente tutti gli altri id del form
const inputSelect = form.querySelector('#selectUtente') // form.queryselector per cercare direttamente all'interno del form, senza dover partire sempre dal 'document'
const promozionalCodesInput = form.querySelector('#codicePromozionale') // form.queryselector per cercare direttamente all'interno del form, senza dover partire sempre dal 'document'
const nomeUtente = form.querySelector('#nomeUtente') // form.queryselector per cercare direttamente all'interno del form, senza dover partire sempre dal 'document'
const cognomeUtente = form.querySelector('#cognomeUtente') // form.queryselector per cercare direttamente all'interno del form, senza dover partire sempre dal 'document'
const emailUtente = form.querySelector('#emailUtente') // form.queryselector per cercare direttamente all'interno del form, senza dover partire sempre dal 'document'
const textAreaInput = form.querySelector('#textAreaInput') // form.queryselector per cercare direttamente all'interno del form, senza dover partire sempre dal 'document'
const promotionalCodesLabel = form.querySelector('#promotional-codes-label') // form.queryselector per cercare direttamente all'interno del form, senza dover partire sempre dal 'document'

// id output
const outputEntire = form.querySelector('#entire')
const outputDecimal = form.querySelector('#decimal')

// array di oggetti tipo lavoro
const typeWork = [
    {
        name: 'Sviluppo-backend',
        price: 20.50
    },
    {
        name: 'Sviluppo-frontend',
        price: 15.30
    },
    {
        name: 'Analisi-progettuale',
        price: 33.60
    }
]

for(let i = 0; i < typeWork.length; i++){
    const nameWork = typeWork[i].name
    const option = document.createElement('option')
    option.value = nameWork
    option.textContent = nameWork.replace('-', ' ')
    inputSelect.appendChild(option)
}

// array di codici promozionali
const promotionalCodes = ['YHDNU32','JANJC63','PWKCN25','SJDPO96','POCIE24']

form.addEventListener('submit', function(event){
    event.preventDefault() // privato del comportamento di default
    const findWork = typeWork.find(typeWork => typeWork.name === inputSelect.value) // cerca l' oggetto con il valore selezionato nella select
    const priceResult = findWork.price * 10 // calcola il prezzo correlato all'oggetto dell'input 
    const discount = priceResult * 25 / 100

    if(promozionalCodesInput.value !== ''){ // se non e vuoto esegue questo
        if(promotionalCodes.includes(promozionalCodesInput.value)){
            const risult = priceResult - discount
            const [entire, decimal] = risult.toFixed(2).split('.')
            outputEntire.textContent = `€ ${entire}${'.'}`
            outputDecimal.textContent = `${decimal}`
            promozionalCodesInput.classList.remove('is-invalid')
        } else {
            alert('Codice promozionale non valido')
            promozionalCodesInput.classList.add('is-invalid')
            return
        }
    } else{ // altrimenti se non e vuoto esegue questo
        promozionalCodesInput.classList.remove('is-invalid')
        const [entire, decimal] = priceResult.toFixed(2).toString().split('.')
        outputEntire.textContent = `€ ${entire}${'.'}`
        outputDecimal.textContent = `${decimal}`
    }

})
