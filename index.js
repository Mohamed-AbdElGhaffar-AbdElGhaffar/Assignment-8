var word_1 = `<p>"Resentment is like drinking poison and waiting for your enemies to die."</p>
<p>--Nelson Mandela</p>`;
var word_2 = `<p>"It's not what happens to you, but how you react to it that matters."</p>
<p>--Epictetus</p>`;
var word_3 = `<p>"Do not take life too seriously. You will not get out alive."</p>
<p>--Elbert Hubbard</p>`;
var word_4 = `<p>"The best revenge is massive success."</p>
<p>--Frank Sinatra</p>`;

var words = [word_1 , word_2 , word_3 , word_4];

var x;
var t;
function New(){
    

    var i = 0;
    var n = 1;
    for(i;i<n;i++){
        x = Math.floor(Math.random()*4);
        
        if(t == x){
            n++;
        }
    }

    t = x;
    window.document.getElementById("word").innerHTML = words[x] ;
}
