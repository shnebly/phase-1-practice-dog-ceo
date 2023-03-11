console.log('%c HI', 'color: firebrick')
window.addEventListener('DOMContentLoaded', (e) =>{

//Challenge 1 fetch images and add them to the DOM
function getDogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.message);
            const dogImageDiv = document.getElementById('dog-image-container');
            data.message.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                dogImageDiv.append(img)
            })
        })    
}
getDogImages();


















console.log('DOM Loaded')
})