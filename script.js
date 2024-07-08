fetch('https://n8n-datalakepcr.recife.pe.gov.br/webhook/target-obras')
.then(res => res.json())
.then(res => {
    console.log(res)
    res.forEach(element => {
        console.log(element)
    });
})


const trh = document.createElement('tr')
            for(const key in bairros[0]){
                const th = document.createElement('th')
                th.appendChild(document.createTextNode(key))
                trh.appendChild(th)
            }
            thead.appendChild(trh)