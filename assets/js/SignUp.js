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

        $(".number").css("border-style", "groove");
        $(".number").css("border-width", "3px");
        $(".number").css("border-color", "rgb(107, 177, 241)");
        $(".number").css("border-radius", "5px");
        $(".number").css("box-shadow", "0px 0px 2px rgb(51, 124, 192)");
        }
    function Default2(){
        var c = $(".number").val();
        if(c.trim() == "" ){
            $("#span-phone").removeClass("change-label-phone");
        $("#span-phone").addClass("label-phone");
        }
       
        $("#span-phone").css("color","gray");
            $(".number").css("border-style", "solid");
            $(".number").css("border-width", "1px");
            $(".number").css("box-shadow", "0px 0px 0px red");
            $(".number").css("border-color", "rgb(184, 182, 182) ");
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
    
     var place=$(".number").val();
    var array=[];
    array.push(e.key);
    
    var letters=[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z','[',']',';','{', '}',':','"','<','>', ',','.','/','?',"'"];

    var numbers=['0','1', '2', '3', '4', '5', '6', '7', '8','9'];
    
    
        
    if(letters.indexOf(e.key) !== -1){
        $(".number").css("border-color", "red");
        $("#telHelp").text("Please enter a valid phone number.");
        $("#span-phone").css("color","red");
    }
    

   
    if(numbers.indexOf(e.key) !== -1 || e.which == 8){
   
        for(var i=0; i<array.lenght ;i++){
            if(letters.indexOf(array[i]) == -1){
            $(".number").css("border-color", "rgb(107, 177, 241)");
            $("#telHelp").text("");
            $("#span-phone").css("color","#45a9ec");
        }
    else{
        $(".number").css("border-color", "red");
        $("#telHelp").text("Please enter a valid phone number.");
        $("#span-phone").css("color","red");
    }}}

         
    if(place ==""){
        $(".number").css("border-color", "rgb(107, 177, 241)");
            $("#telHelp").text("");
            $("#span-phone").css("color","#45a9ec");
    }
        
    

    }        
   
        
        function SignValidator(){
        var a = $("#name").val();
        var b =$(".number").val();
        var x = document.getElementById("month").value;
        var y = document.getElementById("day").value;
        var z = document.getElementById("year").value;
      
        
        if(a.trim() !== "" && b.trim() !== "" && x != 0 && y != 0 && z != 0){
            console.log(x);
            console.log(y);
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
 
    // use instead link
    function ChangeInput(){
        var x = document.getElementById("link").classList.contains("checkLink1");
     if(x){
        $("#link").html("Use phone instead");
        $("#link").removeClass("checkLink1");
        $("#span-phone").text("Email");
        document.getElementById("number").id="email";
        document.getElementById("email")  .addEventListener("keyup", function(e) {
            var x = document.getElementById("email").value; 
            x=x.split("@");
            if(x[1] === "gmail.com"){
                console.log("it works");
             $("#email").css("border-color", "rgb(107, 177, 241)");
                $("#telHelp").text("");
                $("#span-phone").css("color","#45a9ec");
            }
            else{
                $("#email").css("border-color", "red");
                $("#telHelp").text("Please enter a valid email.");
                $("#span-phone").css("color","red"); 
                $("#email").css("border-style", "groove");
                $("#email").css("border-width", "3px");
                $("#email").css("border-radius", "5px");
                $("#email").css("box-shadow", "0px 0px 0px red");
               
            }
          }); 

          document.getElementById("email")  .addEventListener("blur", function() {
             var content=$("#email").val();
           
             if(content ==""){
                console.log("???");
               $("#email").css("border", "rgb(184, 182, 182) solid 1px");
                $("#telHelp").text("");
                $("#span-phone").css("color","gray");
                $("#span-phone").removeClass("change-label-phone");
                $("#span-phone").addClass("label-phone");
             }
           else{
            $("#span-phone").removeClass("label-phone");
            $("#span-phone").addClass("change-label-phone");
            $("#span-phone").css("color","gray");
            $("#email").css("border", "rgb(184, 182, 182) solid 1px");
            $("#telHelp").text("");
           }
            
               
            
     }); 
      
    }

     else{
         $("#link").html("Use email instead");
        $("#link").addClass("checkLink1");
        $("#span-phone").text("Phone");
        document.getElementById("email").id="number";
     }
        
    }
 
    //set Day due to month
    function ChangeDay(){
       var x = document.getElementById("month").value;
       var y = document.getElementById("day");
       var z = document.getElementById("year").value;
       
       console.log( "You selected: " + x);
       if(x == 2){
        var leng = $("#day").children('option').length;
        console.log("length:"+ leng)
          y.remove(30);
          y.remove(30);
          if(z % 4 != 0){ 
               y.remove(29);
            }
          if(z % 4 == 0){
             if(leng == 29){
                var newOption = document.createElement("option");
                newOption.text = "29";
                document.getElementById("day").add(newOption);
             }
          }
       }
       if(x == 4 || x== 6 || x ==9 || x==11){
       
        var leng = $("#day").children('option').length;
        if(leng == 30){
            var newOption = document.createElement("option");
            newOption.text = "30";
            document.getElementById("day").add(newOption);
        }
        if(leng == 29){
            var newOption = document.createElement("option");
            var newOption2 = document.createElement("option");
            
            newOption.text = "29";
            newOption2.text = "30";
           
            document.getElementById("day").add(newOption);
            document.getElementById("day").add(newOption2);
          
        }
        y.remove(31);
     }

     if(x == 1 || x== 3 || x ==5 || x==7 || x ==8 || x==10 || x ==12){
       
        var leng = $("#day").children('option').length;
        if(leng == 31){
            var newOption = document.createElement("option");
            newOption.text = "31";
            document.getElementById("day").add(newOption);
        }
        if(leng == 30){
            var newOption = document.createElement("option");
            var newOption2 = document.createElement("option");
            newOption.text = "30";
            newOption2.text = "31";
            document.getElementById("day").add(newOption);
            document.getElementById("day").add(newOption2);
        }

        if(leng == 29){
            var newOption = document.createElement("option");
            var newOption2 = document.createElement("option");
            var newOption3 = document.createElement("option");
            newOption.text = "29";
            newOption2.text = "30";
            newOption3.text = "31";
            document.getElementById("day").add(newOption);
            document.getElementById("day").add(newOption2);
            document.getElementById("day").add(newOption3);
        }
        
     }
       
    }

   
    $("#name").on('focus', ChangeColor);
    $(".number").on('focus', ChangeColor2);
    $("#name").on('blur', Default);
    $(".number").on('blur', Default2);
    $("#name").on('input', ChangeColor3);
    $(".number").on('keyup', ChangeColor1);
    $("#link").on('click', ChangeInput);
    $("select").on('change', ChangeDay);
    $("select").on('change', SignValidator);
});