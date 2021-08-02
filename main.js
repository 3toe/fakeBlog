// Javascript for assignment "jQuery Functions"

//hide stuff
$('.hideMe, .hideMe1, .hideMe2, .hideMe3, .hideMe4').hide();

// fade title in
$('h1').fadeIn();

//reveal the if the "if" is hovered
$('.revealer1').hover(function(){
   $('.hideMe1').show();
})
$('.revealer2').hover(function(){
   $('.hideMe2').show();
})
$('.revealer3').hover(function(){
   $('.hideMe3').show();
})
// toggle the last one
$('.revealer4').hover(function(){
   $('.hideMe4').toggle();
})

// clear radio buttons
$('input[name=tubefeels]:radio').attr('checked', false);

// slide reveal/hide relevant form options based on radio buttons
var radioValue = document.getElementsByName("tubefeels");
$('input[name=tubefeels]:radio').click(function(){
   if(radioValue[0].checked == true){ 
      $('.love').slideDown();
      $('.terrible').slideUp();
      $('.indif').slideUp();
   } else if(radioValue[1].checked == true){
      $('.love').slideUp();
      $('.terrible').slideDown();
      $('.indif').slideUp();
   } else{
      $('.love').slideUp();
      $('.terrible').slideUp();
      $('.indif').slideDown();
   }
})

// Slide toggle the catfood section
$('#toggler').click(function(){
   $('ul').slideToggle();
})

// Fade out website if "i don't like anything" is selected
$('#terrible3').click(function(){
   $('div').fadeOut("slow", function(){ // fade not working
      $('body').text("You don't like anything? OK then, everything's gone.");
   })
})

// make the site miserable if checked, reverse if unchecked
$('#terrible2').click(function(){
   $('body').addClass("misery")
   if($('#terrible2').prop('checked')){ //wanted to use attr here but only prop worked
      $('.misery').css("background-color", "yellow").css("color", "white");
      $('img').hide();
   } else{
      $('.misery').css("background-color", "white").css("color", "black");
      $('img').show();
   }
})

// append a laser point image to the bio div
$('#laser').css("color", "red");
$('#laser').hover(function(){
   $('#bio').append('<img src="images/nolasers.jpg" class="laserPic" alt="NO LASERS!"/>');
   $('.laserPic').css("width", "100px").css("height", "100px");
})

// supposed to replace bio html, but not working
$('.laserPic').click(function(){
   $('#bio').html("<p>These are going to keep happening if you keep hovering</p>");
})

// add content if user clicks the link
$('a').click(function(){
   $("<a>").prop({
      target: "_blank",
      href: "https://www.youtube.com/channel/UC2nbLZwQtb1ISSjBT-zUnLA"
   }) [0].click();
   $('#formHead').before("<h6>You're in the eye of the formstorm</h6>");
   $('#formHead').after("<h6>Thanks for clicking the link!</h6>");
   $('#formHead').removeAttr('id');
})

// password checker
$(':Submit').click(function(){
   var pw = $(':text').val();
   if(pw == "kitton"){
      alert("you nailed it");
   }
})