$(document).ready(function(){

    var dataBase = ["emil","rasim","adile","memmedaga"]
    var mainData ={
        emil:{
            name1:"Emil",
            name2:"@emil",
            pro:"assets/images/pexels-louis-3612312.jpg"
        },
        rasim:{
            name1:"Rasim",
            name2:"@rasim",
            pro:"assets/images/pexels-pixabay-266526.jpg"
        },
        adile:{
            name1:"Adile",
            name2:"@adile",
            pro:"assets/images/pexels-jonny-lew-1121123.jpg" 
        },
        memmedaga:{
            name1:"Memmedaga",
            name2:"@memmedaga",
            pro:"assets/images/pexels-pixabay-414579.jpg"
        }

    }
    var n = dataBase.length
    var user =""

    $("#search").click(function(){
        var a = $("#inputMain").val().trim();
        if(  a === "" ){
            //emty case
            $(".error").text("We need this information to find your account.")
            $("#inputMain").addClass("border-danger");
            $(".account").css({"display":"none"});
        }
        else if(dataBase.indexOf(a)==-1) {
            //not find user name
            
            // for(let i = 0 ;i<n ;i++){
                
            // }
            $("#headline1").text("We couldn't find your account with that information")
            $("#headline1").css({"color":"red","font-weight":"normal"})
            $("#headline2").text("Please try searching for your email,phone number or username again.")
            $("#userFail").text("")
            $(".account").css({"display":"none"});
            console.log("tapilmadi")
        }
        else{
           user = dataBase.indexOf(a)
          
            //finded user
            $("#headline1").text("Verify your personal information")
            $("#headline1").css({"color":"black","font-weight":"bold"})
            $(".account").css({"display":"flex"});

            $("#headline2").text("Enter your email address to continue")
            $("#userFail").text("I don't have access to this information")
            $("h5").text(mainData[dataBase[user]].name1);
            $("h6").text(mainData[dataBase[user]].name2);
            $("#profile").attr("src",mainData[dataBase[user]].pro);
        }

    


    })

    var tmp = mainData.emil.name2
    console.log(tmp)
    

})