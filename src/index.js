console.log('%c HI', 'color: firebrick')


//Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const container=document.querySelector("#dog-image-container");
const ulContainer=document.querySelector("#dog-breeds");
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dropDown= document.querySelector("#breed-dropdown");
let breedsArray=[];


ulContainer.addEventListener("click",handleClick);
dropDown.addEventListener('change',handleChange);

function getImages(){
    fetch(imgUrl)
    .then(res=>res.json())
    .then(images=>{
        const imgs=images.message;
        let imgsArray=createImgElement(imgs);
        renderImgs(imgsArray);
    
})
}

function createImgElement(imgs){
    return imgs.map((img)=>{
        let i= `<img src=${img}>`
        return i;
    })
}
function renderImgs(imgsArray){
    imgsArray.forEach(element=>{
        renderElement(element)
    });
}
function renderElement(element){
    ulContainer.innerHTML+=element;
    }




//Challenge 2

function getBreeds(){
    fetch(breedUrl)
    .then(res=>res.json())
    .then(breeds=>{
        breedsArray=Object.keys(breeds.message);
        const breedsLi= createLiElement(breedsArray);
        renderLis(breedsLi);

    
    })
}

function createLiElement(breedsArray){
    return breedsArray.map((breed)=>{
        let li= `<li>${breed}</li>`
        return li;
    })
}

function renderLis(breedsLi){
    breedsLi.forEach(element=>{
        renderElement(element)
    });
}


//getImages();
getBreeds();


//Challenge 3
function handleClick(){
    if(event.target.style.color==="red"){
        event.target.style.color="black";
    }
    else{
        event.target.style.color='red';

    }

}

//Challenge 4
function handleChange(event){
    const letter=event.target.value;
    const filterBreeds=breedsArray.filter(breed=>breed.startsWith(letter));
    const filterBreedsLi=createLiElement(filterBreeds);
    ulContainer.innerHTML=''
    renderLis(filterBreedsLi);

    
}
