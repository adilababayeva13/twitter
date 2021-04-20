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
    
     var f=$("#number").val();
     var array=[];
     array.push(e.key);
    console.log(array);

    var letters=[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z','[',']',';','{', '}',':','"','<','>', ',','.','/','?',"'"];

    var numbers=['0','1', '2', '3', '4', '5', '6', '7', '8','9'];

    for(var i=0; i<letters.length; i++){
    if(array.indexOf(letters[i]) !== -1){
        $("#number").css("border-color", "red");
        $("#number").css("box-shadow", "0px 0px 3px red");
        $("#telHelp").text("Please enter a valid phone number.");
    }}
      
    for(var k=0; k<numbers.length; k++){
        if(array.indexOf(numbers[k]) !== -1){
            $("#number").css("border-color", "#45a9ec");
            $("#number").css("box-shadow", "0px 0px 3px #45a9ec");
            $("#telHelp").text("");
        }}

        if(e.key == 8){

           
                  for(var l=0; l<numbers.length; l++){
                    if(array.indexOf(numbers[l]) !== -1){
                        $("#number").css("border-color", "#45a9ec");
                        $("#number").css("box-shadow", "0px 0px 3px #45a9ec");
                        $("#telHelp").text("");
                    }}
        }

    }        
    
  
    
    function SignValidator(){
        var a = $("#name").val();
        var b =$("#number").val();
        var c=$("#month option").text();
        var d=$("#day option").text();
        var e=$("#year option").text();
        
        
        if(a.trim() !== "" && b.trim() !== "" && c !== "Month" && d !=="Day" && e !== "Year"){
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
    $("#number").on('keypress', ChangeColor1);
   

});