let fg=1;
let n;
let i=1;
function random(){
let paragraph=["Most children stories significantly focus on teaching morals to kids. Panchatantra stories for kids are designed with the same motive. These are the oldest short moral stories for kids. These amazing small stories for kids in English from Panchatantra have reached an audience worldwide. To allure your kids with exciting stories, we provide you with our versions of some of the most famous and loved Panchatantra Stories for kids.","Fairy Tales stories are loved by kids. The world of fantasy attracts everyone. These children stories give them a chance to leap into a world full of possibilities and imagination. When kids listen to Fairy Tales, they start imagining the creatures of the story. They build their own versions of the fairies, pixies, nymphs, dragons, unicorns, etc. Thus, such short stories for kids in English can build better creativity in children. We have the most awesome fairy tales stories for your kid.","For generations, Akbar Birbal Stories have been enjoyed thoroughly by every kid. Akbar and Birbal Stories are a great combination of fun, wit, humour and moral values. These English stories for kids entertain, bring smiles and teach life lessons in effortless ways. Explore 10 All-Time Favourite Akbar Birbal Stories for kids in our Kids Learning section.","For those spending time at home, looking for a cozy adventure or bedtime story for kids, we offer this imaginative rhyming picture book, read by the author, Daniel Errico. Follow the Marmabill on her quest through the rainforest, where she meets fantastical creatures like wugs, tankadiggies, and flying fluthers. As her journey takes her from treetops to glowing underground caves, the Marmabill finds out for herself the true meaning of home. Remember, our stories for kids are here for you to read at any time. And remember, Dream Big!","A rhyming story book about a young wolf pup unlike any other. When the moon is full and all the wolves are howling, Warren turns into a mild-mannered boy, eating sandwiches with the crusts cut off, and going to bed early. That’s because Warren is secretly a wereboy. But when the rest of his pack finds out the truth, Warren has to show them that sometimes our biggest differences are our greatest strengths."];
let ran = Math.floor((Math.random()*4) +1);  
document.getElementById('put').innerHTML= paragraph[ran];
}
function ti(){
        document.getElementById("write").removeAttribute("disabled");
    let time = document.getElementById('myselect').value;
   document.getElementById('timer').value = time;
    run = parseInt(time);
}
let j=0;
function dis(){
        setInterval(display, 100)   
            function display(){
                document.getElementById('timer').value =`${j}:${(i>=0 && i<=9)?"0":""}${i++}`;
                document.getElementById('myselect').setAttribute('disabled','');
                document.getElementById('ms1').setAttribute('disabled','');
                if(j==run){
                    var start=1;
                    var count=0;
                    while(start <= newString.length){
                     if(newString[start] == ' '){
                        count=count+1;
                        
                        }
                        start++;                        
                    }
                    document.getElementById('count').innerHTML=`Word Count ${count}`;
                    document.getElementById('bg').style="display:flex !important"
                    document.querySelector('#result').style="display:flex !important;"
                    // confirm(newString);
                    if(i==1+1){
                        document.getElementById('timm').innerHTML=`Time:${run}:00`; 
                    }
                 }
                if(i>59){
                    j++;
                    i=0;   
                }                  
            }
} 
 let newString="";
function done(n){
    let reciver = document.getElementById('write').value;
    let text = document.getElementById('put').innerText;
    let setter = document.getElementById('put');
    setter.innerHTML = text.replace(reciver, `<span style="background-color : red; color:white;">${reciver}</span>`);
    newString=reciver;
    // return newString;    
}
//Try again button
function refresh(){    
    window.location.reload('Refresh')
}
