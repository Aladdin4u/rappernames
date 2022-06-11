document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest () {
   const rappersName = document.querySelector('input').value; 
   try {
    const response = await fetch(`https://rapper-api-100devs-class39.herokuapp.com/api/${rappersName}`)
    const data = await response.json()

    console.log(data)
    document.querySelector('h2').innerHTML = data.birthname
   }
    catch(error) {
        console.log(error)
    }
}