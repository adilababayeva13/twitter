$(document).ready(function(){

    
    function ChangeColor(){
        $("#name").removeClass("change2");
    $("#name").addClass("change");
   
    $("#name").css("border-style", "groove");
    $("#name").css("border-width", "3px");
    

    }
    function Default(){
        
        $("#name").addClass("change2");
       
        $("#name").css("border-style", "solid");
        $("#name").css("border-width", "1px");


        }

    function ChangeColor2(){
        $("#number").removeClass("change2");
        $("#number").addClass("change");
        }
    function Default2(){
            $("#number").addClass("change2");
            $("#number").css("border-style", "solid");
            $("#number").css("border-width", "1px");
             $("#number").css("box-shadow", "0px 0px 0px red");
             $("#number").css("border-color", "rgb(184, 182, 182) ");
             $("#telHelp").text("");
             $("#number").removeClass("change3");
            
            }
           
     function ChangeColor3(){
    var c = $("#name").val();
    
        
        if(c.trim() == "" ){
           
            $("#name").css("box-shadow", "0px 0px 1px red");
            $("#name").css("border-color", "red");
            $("#name").addClass("change3");
            $("#nameHelp").text("What's your name?");
        }

        else{
            $("#name").css("box-shadow", "0px 0px 3px #45a9ec");
            $("#name").css("border-color", "#45a9ec");
            $("#nameHelp").text("");
        }
            
            }

   

    function ChangeColor1(e){
    
     var place=$("#number").val();
     var array=[];
     array.push(e.key);
    
    var letters=[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z','[',']',';','{', '}',':','"','<','>', ',','.','/','?',"'"];

    var numbers=['0','1', '2', '3', '4', '5', '6', '7', '8','9'];
    
    for(var i=0; i<letters.length; i++){
        
    if(array.indexOf(letters[i]) !== -1){
        $("#number").css("border-color", "red");
        $("#number").css("box-shadow", "0px 0px 3px red");
        $("#telHelp").text("Please enter a valid phone number.");
        $("#number").addClass("change3");
    }}
      
    for(var k=0; k<numbers.length; k++){
        if(array.indexOf(numbers[k]) !== -1){
            $("#number").css("border-color", "#45a9ec");
            $("#number").css("box-shadow", "0px 0px 3px #45a9ec");
            $("#telHelp").text("");
        }}

    

    }        
   
   
   

    function removeOptions(){  //removes options call each time the day selector is changed
      
   
   var monthselected=$("#monthSelect");
   var feb=$("#monthSelect option[value='02']");
   var apr=$("#monthSelect option[value='04']");
   var june=$("#monthSelect option[value='06']");
   var sep=$("#monthSelect option[value='09']");
   var nov=$("#monthSelect option[value='11']");
   


    if(monthselected == feb){
    
        
        $("#dayselect option[value='31']").remove();
    }
    if(monthselected == apr){
    
      
        
        $("#dayselect option[value='31']").remove();
    }
    if(monthselected == june){
    
       
        
        $("#dayselect option[value='31']").remove();
    }
    if(monthselected == sep){
    
       
        
        $("#dayselect option[value='31']").remove();
    }
    if(monthselected == nov){
    
      
        
        $("#dayselect option[value='31']").remove();
    }

      
    }

   
        
    
    function SignValidator(){
        var a = $("#name").val();
        var b =$("#number").val();
      
        
        if(a.trim() !== "" && b.trim() !== "" && !($("#month option[value='00']"))&& !($("#day option[value='00']"))&& !($("#year option[value='00']")) ){
            $("#button").attr({
                disabled: false
            });
            $("#button").css("background-color", "#1DA1F2");
            $("#button").css("border-color", "#1DA1F2");
        }


        else{
               $("#butonjs").attr({
                disabled: true
            });
            $("button").css("background-color", "#84C8F5");
            $("button").css("border-color", "#84C8F5");
           
        }

    }

    $('input').on('input blur', SignValidator);
    $("#name").on('focus', ChangeColor);
    $("#number").on('focus', ChangeColor2);
    $("#name").on('blur', Default);
    $("#number").on('blur', Default2);
    $("#name").on('input', ChangeColor3);
    $("#number").on('keyup', ChangeColor1);
    $("option").on('change',removeOptions)
    
    function text(e){
        var letter =e.key;
        var input=[];
        input.push(letter);
        
         $("#name").val( input +"/50");
     }
 
   

});