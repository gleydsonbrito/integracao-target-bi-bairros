fetch('http://172.21.3.188:9047/api/v3/job/197a6a46-db56-0c1b-8856-ef93a7dbb700/results', {
    method: 'GET', // Método da requisição
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer tqi1f3eii09ibdt0lklp81v3jh`,
    }
})
.then(res => res.json())
.then(res => console.log(res.rows))