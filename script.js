let body = document.getElementsByTagName('body');
let box = document.createElement('div');

box.className = "box";
let block = document.createElement('div');



const squareColors = ['#ed220d', '#b542e5', '#0d93ed', '#f2770b', '#8affbc', '#f2ff8a', '#ff38c2', '#e37f35', '#7CFC00','#FF00FF', '#FFFF00','#CD5C5C'];
const getRandomColor = () =>{
    return squareColors[Math.floor(Math.random() * squareColors.length)];
}


function setColor(elem) {
  const color = getRandomColor();
  elem.style.background = color;
}



for(let i =0 ;i<25;i++){

    let block = document.createElement('div');
    block.className = "square";
    
    let timerId = setInterval(() => setColor(block), 400);
    box.appendChild(block);

}
body[0].appendChild(box);
console.log(body);


