$(document).ready(function(){

    
    function ChangeColor(){
   var c = $("#name").val();
    $("#span-name").removeClass("label-name");
    $("#span-name").addClass("change-label-name");
    $("#span-name").css("color","#1da1f2");
    $("#span-length").html(c.length + "/ 50"); 

    $("#name").css("border-style", "groove");
    $("#name").css("border-width", "3px");
    $("#name").css("border-color", "rgb(107, 177, 241)");
    $("#name").css("border-radius", "5px");
    $("#name").css("box-shadow", "0px 0px 2px rgb(51, 124, 192)");

    }

    function Default(){
        var c = $("#name").val();
        if(c.trim() == "" ){
            $("#span-name").removeClass("change-label-name");
            $("#span-name").addClass("label-name");
        }
        $("#span-name").css("color","gray");
        $("#span-length").html("");
       
        $("#name").css("border", "solid rgb(184, 182, 182) 1px");
        $("#name").css("border-radius", "5px");
        $("#name").css("box-shadow", "0px 0px 0px rgb(51, 124, 192)");
        $("#nameHelp").text("");
        }

    function ChangeColor2(){
        $("#span-phone").removeClass("label-phone");
        $("#span-phone").addClass("change-label-phone");
        $("#span-phone").css("color","#1da1f2");

        $("#number").css("border-style", "groove");
        $("#number").css("border-width", "3px");
        $("#number").css("border-color", "rgb(107, 177, 241)");
        $("#number").css("border-radius", "5px");
        $("#number").css("box-shadow", "0px 0px 2px rgb(51, 124, 192)");
        }
    function Default2(){
        $("#span-phone").removeClass("change-label-phone");
        $("#span-phone").addClass("label-phone");
        $("#span-phone").css("color","gray");
            $("#number").css("border-style", "solid");
            $("#number").css("border-width", "1px");
            $("#number").css("box-shadow", "0px 0px 0px red");
            $("#number").css("border-color", "rgb(184, 182, 182) ");
            $("#telHelp").text("");
            }
           
     function ChangeColor3(){
    var c = $("#name").val();
    
    $("#span-length").html(c.length + "/ 50"); 
        if(c.trim() == "" ){
           
            $("#name").css("box-shadow", "0px 0px 1px red");
            $("#name").css("border-color", "red");
            $("#span-name").css("color", "red");
            $("#nameHelp").text("What's your name?");
            $("#span-length").html("0 / 50");
        }

        else{
            $("#span-name").css("color", "#1da1f2");
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
    
    
        
    if(letters.indexOf(e.key) !== -1){
        $("#number").css("border-color", "red");
        $("#telHelp").text("Please enter a valid phone number.");
        $("#span-phone").css("color","red");
    }
    

   
    if(numbers.indexOf(e.key) !== -1 || e.which == 8){
   
        for(var i=0; i<array.lenght ;i++){
            if(letters.indexOf(array[i]) == -1){
            $("#number").css("border-color", "rgb(107, 177, 241)");
            $("#telHelp").text("");
            $("#span-phone").css("color","#45a9ec");
        }
    else{
        $("#number").css("border-color", "red");
        $("#telHelp").text("Please enter a valid phone number.");
        $("#span-phone").css("color","red");
    }}}

         
    if(place ==""){
        $("#number").css("border-color", "rgb(107, 177, 241)");
            $("#telHelp").text("");
            $("#span-phone").css("color","#45a9ec");
    }
        
    

    }        
   
        
        function SignValidator(){
        var a = $("#name").val();
        var b =$("#number").val();
      
        
        if(a.trim() !== "" && b.trim() !== "" ){
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
    
    
});