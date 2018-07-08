

var words = ['толерантность', 'эксгумация', 'либерализм', 'экспонат', 'пышность', 'скабрезность', 'шаловливость', 'экспозиция', 'индульгенция', 'контрацептив', 'шкворень', 'эпиграф', 'эпитафия', 'барбекю', 'жульен', 'энцефалопатия', 'парашютист', 'импозантность', 'индифферент', 'демультипликатор', 'педикулез', 'выхухоль', 'россомаха', 'сущность', 'поэтапность', 'напыщенность', 'возвышенность']
var w = Math.floor(Math.random() * words.length)
var word = words[w]
var word_split = word.split('');
var word_hidden = '_'.repeat(word.length);
var word_hidden_split = word_hidden.split('');
var flag = []
var flag2 = []
var error_counter = 0




window.onload = start;





/*===========================ф-ция ==================================================*/


function start() {

   document.getElementById("numers").innerHTML = word_hidden;


}




function draw_pers(){

    error_counter = error_counter+1
  
    var picture_num = error_counter.toString();

    document.getElementById('human').style.backgroundImage="url(images_2/" + picture_num + ".png)";


    if (error_counter == 10){

         document.getElementById('human').style.backgroundImage="url(images_2/10.png)";



         alert("ТОБI ПIЗДА")


      
        location.reload()

    }

}




function myFunction(clicked_id) {
    
      
      var b = clicked_id;

      for (var i =0; i < word_split.length; i++) {

          if(word_split[i]==b){

              flag2.push(1)

              flag.push(1);

              document.getElementById(b).disabled=true; /*делаем кнопки после нажатия неактивными если эти буквы есть в слове*/
              
              document.getElementById(b).style.border='red';

              word_hidden_split.splice(i,1, b);

              word_hidden = word_hidden_split.join('');

              document.getElementById("numers").innerHTML = word_hidden;
            

           }

            

     }


         
      if (flag.length == 0){

            draw_pers()
          
            document.getElementById(b).disabled=true; /*делаем кнопки после нажатия неактивными если эти буквы есть в слове*/
            document.getElementById(b).style.border='red';
      }
          

      flag = []
        
      if(flag2.length==word.length){

         
         
          alert("YOU WIN!!!")

         location.reload()

      }
}

        
          
    
       

