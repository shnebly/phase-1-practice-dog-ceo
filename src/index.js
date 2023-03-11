console.log('%c HI', 'color: firebrick')
window.addEventListener('DOMContentLoaded', (e) =>{

//Challenge 1 fetch images and add them to the DOM
function getDogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.message);
            const dogImageDiv = document.getElementById('dog-image-container');
            data.message.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                dogImageDiv.append(img)
            })
        })    
}
getDogImages();
let breedKeys = [];
let ulBreeds = document.getElementById('dog-breeds')

//Challege 2 fetch breeds and add them to the DOM
function getDogBreeds(){
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data =>{
            // console.log(data.message) //this returns an oject of breeds...
            const breedObj = data.message
            breedKeys = Object.keys(breedObj);
            // console.log(breedKeys) //breedKeys is now an array of 98 breeds
            breedKeys.map(breed => {
                const liBreeds = document.createElement('li')
                liBreeds.innerText = breed;
                ulBreeds.append(liBreeds)
            })
                
        })
}
getDogBreeds();

//Challenge 3 when user clicks on an li it changes color
document.addEventListener('click', e => {
    if (e.target.matches('li')){
        e.target.style.color = 'blue'
    }
})

//Challenge 4 allow user to filter
function filterBreed(letter){
    ulBreeds.innerHTML = ''
    letter.map(breed => {
        const li = document.createElement('li')
        li.innerText = breed;
        ulBreeds.append(li)
    })
}

const dropDown = document.getElementById("breed-dropdown")
dropDown.addEventListener('change', e=> {
    if(e.target.value === 'a'){
        const A = breedKeys.filter(breed => breed[0] === 'a')
        filterBreed(A)
    } else if (e.target.value === 'b'){
        const B = breedKeys.filter(breed => breed[0] === 'b')
        filterBreed(B)
    } else if (e.target.value === 'c'){
        const C = breedKeys.filter(breed => breed[0] === 'c')
        filterBreed(C)
    } else if (e.target.value === 'd'){
        const D = breedKeys.filter(breed => breed[0] === 'd')
        filterBreed(D)
    }

})












console.log('DOM Loaded')
})