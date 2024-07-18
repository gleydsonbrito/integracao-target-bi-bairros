fetch('https://n8n-datalakepcr.recife.pe.gov.br/webhook/target-obras')
.then(res => res.json())
.then(res => {
    console.log(res.length)
})