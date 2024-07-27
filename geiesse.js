const changeH1 = function(){
    document.querySelector("h1").innerText = 'Ebay'
}

const changeBackgroundColor = function(){
    document.querySelector("body").style.backgroundColor = 'grey'
}
const changeAddress = function(){
    document.getElementById("address").innerText = 'Via roma'
}

const addClassLink = function(){
    document.querySelector("a").classList.add("limkAmazon")
}


const addClassToLinks = function () {
    let link = document.querySelectorAll('a') 
    for (let i = 0; i < link.length; i++) {
      link[i].classList.add('newLink')
    }
   
  }


  const addClassImg = function() {
    let image = document.querySelectorAll('img')
    for (let i = 0; i < image.length; i++) {
        const hiddenImg = image[i]
        hiddenImg.classList.toggle('hidden')
    }
  }

  const setColorPrice = function (){
    const firstColor = Math.round(Math.random() )
    const secondColor = Math.round(Math.random())
    const thithColor = Math.round(Math.random())
    return 'rgb(' + firstColor +' ,' + secondColor + ',' + thithColor +')'

  }

  const addRandomColorPrice = function(){
    let changeColor = setColorPrice()
    let price = document.querySelectorAll('price')
    for (let i = 0; i < price.length; i++) {
        const randomColor = price[i];
       randomColor.style.color = changeColor 
    }
  }