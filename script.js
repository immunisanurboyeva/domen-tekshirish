const form = document.querySelector('.form');
const input = document.querySelector('#input');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    checkDomain(input.value);
    input.value = ""
})

async function checkDomain(domain) {
    try{
        text.textContent = 'qidirilmoqda...';
        text.style.color = 'gray';

        const res = await fetch(
            `https://api.api-ninjas.com/v1/domain?domain=${domain}`,
            {
                headers: {
                    "X-Api-Key": "GnxpyjjORxM1tGWnAHb104SzKiIG8McqnS7opIpX",
                }
            }
        )

        console.log(res);
        const data = await res.json();
        console.log(data);
        
        if(data.available){
            text.textContent = `${domain} domeni mavjud`;
            text.style.color  = 'rgb(72, 226, 177)';
        } else{
            text.textContent = `${domain} domeni mavjud emas`;
            text.style.color  = 'rgb(186, 68, 123)';
        }

        if(!res.ok){
            throw new Error(".com formatda kiriting");
        }
        
    } catch (error){
        text.textContent = error.message;
        text.style.color  = 'rgb(186, 68, 123)';
    }
}
