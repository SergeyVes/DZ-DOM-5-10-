const parseDate=JSON.parse(data);
const divEl=document.querySelector('.content');
parseDate.forEach(element => {
    divEl.insertAdjacentHTML('beforeend',`
    <img src="${element.customer.img}"</img>
    <h2>${element.customer.name}</h2>
    <p>${element.customer.address.state}</p>
   
    `)
    
});


