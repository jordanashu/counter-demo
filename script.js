
const countValue =document.querySelector('#counter');

 let increment = ()=>{
      //get the value from ui;
    let v=parseInt(countValue.innerText);
       //update 
    v=v+1;
       //set the value on to ui
    countValue.innerText=v;


};



let decrement =()=>{
  let v=parseInt(countValue.innerText)
    
    v=v-1;
    countValue.innerText=v;

}