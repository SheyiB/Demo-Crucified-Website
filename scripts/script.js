
var textArray = ['Class','Fresh','Trendy','Shop Now','Unique','Dope'];

const images = ['i1.jpg','i3.jpg','i25.jpg','i18.jpg'];

const sliderimages = document.querySelector('.slide'), arrowLeft = document.querySelector('.arrowLeft'), arrowRight = document.querySelector('.arrowRight'), current=0;

let currentt = 0;



const aleft = document.querySelector('.aleft');

 function slidee(){
     document.querySelector('.block3').style.paddingLeft = '25%';
 }

 function slideee(){
    document.querySelector('.block3').style.paddingRight = '50%';
    console.log('btn clicked')
}

//aleft.onclick = slidee()

function slide(){
        if (currentt == images.length ){
            currentt = 0;
        }
        if (currentt < 0){
            currentt = 0
        }

        sliderimages.style.backgroundImage = `url("./media/images/${images[currentt]}")`;
        //console.log(`url("../media/images/${images[currentt]}") and ${currentt}`);
        currentt = currentt + 1;
        

        
    }


function leftslide(){
        slide();
        current--;
}



setInterval(slide, 10000);

//console.log(`url("../media/images/${images[currentt]}")`);