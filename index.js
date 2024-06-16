console.log('Hello');
var changer = document.querySelector('h1')
var box = document.querySelector('.inner')
var para = document.querySelector('.result')
var decision=document.querySelector('.comp-decision')


function rock(){
let comparr=['rock','paper','scissor']
let comp='';
for (let i = 0; i < 1; i++) {
    let randomWord = comparr[Math.floor(Math.random() * comparr.length)];
   comp+=randomWord;

decision.style.display='flex';
   decision.innerHTML=`Comp has choosen ${comp}`;
   setTimeout(()=>{
    decision.style.display='none';

   },4000)
   switch(comp){

    case 'paper':
        result.innerHTML='you loose';
        box.style.display='flex';
        setTimeout(()=>{box.style.display='none';},4000)
        break;


        case 'rock':
            result.innerHTML='you have drawn';
            box.style.display='flex';
        setTimeout(()=>{box.style.display='none';},4000)
            break;
    
            case 'scissor':
            result.innerHTML='you have won';
            box.style.display='flex';
        setTimeout(()=>{box.style.display='none';},4000)
            break;
   }
}
}
function paper(){
    let comparr=['rock','paper','scissor']
    let comp='';
    for (let i = 0; i < 1; i++) {
        let randomWord = comparr[Math.floor(Math.random() * comparr.length)];
       comp+=randomWord;
    
    decision.style.display='flex';
       decision.innerHTML=`Comp has choosen ${comp}`;
       setTimeout(()=>{
        decision.style.display='none';
    
       },4000)
       switch(comp){
    
        case 'paper':
            result.innerHTML='you draw';
            box.style.display='flex';
            setTimeout(()=>{box.style.display='none';},4000)
            break;
    
    
            case 'rock':
                result.innerHTML='you have won';
                box.style.display='flex';
            setTimeout(()=>{box.style.display='none';},4000)
                break;
        
                case 'scissor':
                result.innerHTML='you have loose';
                box.style.display='flex';
            setTimeout(()=>{box.style.display='none';},4000)
                break;
       }
    }
    }


    function scissor(){
        let comparr=['rock','paper','scissor']
        let comp='';
        for (let i = 0; i < 1; i++) {
            let randomWord = comparr[Math.floor(Math.random() * comparr.length)];
           comp+=randomWord;
        
        decision.style.display='flex';
           decision.innerHTML=`Comp has choosen ${comp}`;
           setTimeout(()=>{
            decision.style.display='none';
        
           },4000)
           switch(comp){
        
            case 'paper':
                result.innerHTML='you won';
                box.style.display='flex';
                setTimeout(()=>{box.style.display='none';},4000)
                break;
        
        
                case 'rock':
                    result.innerHTML='you have loose';
                    box.style.display='flex';
                setTimeout(()=>{box.style.display='none';},4000)
                    break;
            
                    case 'scissor':
                    result.innerHTML='you have draw';
                    box.style.display='flex';
                setTimeout(()=>{box.style.display='none';},4000)
                    break;
           }
        }
        }

