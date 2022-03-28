// script te thirret ne fund te html. pas tagut body dhe para html mbylles

// jQuery
// ose e ben download dhe e shton tek file projektit ose me cdn (adresa / link) ose copy dhe hap file tj dhe e ben paste
//  shkruhet $ ose jQuery

// $("selector").action(); -> SINTAKSA

// $("p").hide(); // e fsheh
// $("p").show(); // e shfaq

// CSS Selector
// $("p.test").hide();
// $("p.test").show();

// Global event (dhe nqs js esh ne header do punoj js)
// $(document).ready(function () {
//   $("p.test").hide();
// });

// Hide nga id
// $("#main-div").hide();

// gjithmon duhet name per input sepse duhet per binding
// $("input[name = firstname]").hide();

// Sup qe kemi nje buton dhe ne klikim t tij kemi 1 alert
// eventi click
// $("#btn").click(function () {
//   alert("Gjona Amerikonsh");
// });

// EVENTE MOUSE
// eventi dbl click
// eventi mouse enter (mouse hover)
// eventi mouse leave

// EVENTE TASTIERE
// eventi key down (kur e ke te shtypur butonin)
// eventi key press (kur je duke e shtypur butonin)
// eventi key up
// eventi key down

// Heqja e fokusit
// eventi focus out
// eventi focus
// eventi blur

// $("#p1").mouseenter(function () {
//   alert("U ekzekutua");
// });

// $("#p1").mouseleave(function () {
//   alert("U ekzekutua");
// });

// $("#fName").focus(function () {
//   alert("Focused");
// });

// $("#fName").focusout(function () {
//   alert("Joan");
// });

// $("#fName").blur(function () {
//   alert("Joan");
// });

// blur dhe focusout kane te njejten sjellje

// Menyr si  te besh handle events jquery
// $("#btn-1").on("click", function () {
//   alert("Kot");
// });

// menyr tj e ngjashme qe nk funx njesoj
// $(".main-form").on("click", "button" /*emri elementit */, function () {
//   alert("Kottt");
// });

// mos e perdor mbi document

// show per 500ms
// $("#p1").hide();
// $("#p1").show(500);

// metoda per css
// $("#p1").mouseenter(function () {
//   $("#p1").css("background-color", "white");
//   $(this).css("color", "black");
// });

// menyre tj

// $("#p1").mouseleave(function () {
//   $(this).css({
//     "background-color": "lightgray",
//     color: "red",
//   });
// });

// behen te gjithe paragrafet
// $(".pretty").mouseenter(function () {
//   $(".pretty").css("background-color", "blue");
// });

// behet vetem paragrafi specifgik
// $(".pretty").mouseenter(function () {
//   $(this).css("background-color", "blue");
// });

// metoda te tj jquery
// ndryshimi i permasave: width/ height
// $(".pretty").mouseenter(function () {
//   $(this).css("width", "100px");
// });

// metoda cqe shton ose heq klasen nga nje element
// $(".pretty").mouseenter(function () {
//   $(this).removeClass("pretty");
// });

// $(".pretty").mouseleave(function () {
//   $(this).addClass("pretty");
// });

// metoda empty (shum e rrezikshme) fshin content e html brenda elementit
// $(".pretty").mouseenter(function () {
//   $(this).empty("pretty");
// });

// metoda attr -> percakton attributes
// lexo emer dhe mbiemer dhe me alert nxirr emer dhe mbiemer dhe te jene readonly
// $(".btn").click(function () {
//   var firstName = $("#fName").val();
//   var lastName = $("#lName").val();
//   alert("Emri juaj i plote eshte " + firstName + " " + lastName);
//   $("#fName").attr("readonly", "readonly");
//   $("#lName").attr("readonly", "readonly");
// });

// .val ka efekt vetem te inputet

// nje metode e ngjashme me attr sepse atr esh pak e vjt eshte prop
// metoda hasClass dmth a e ka ky element specifik klasen ... kthen true ose false
// metoda qe kthen permbajten html ne nj element te caktuar .html
// per ti shtuar element html brenda nje el specifik perdoret append

// perdorimi i regex ne validim
