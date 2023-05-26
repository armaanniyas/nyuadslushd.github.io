$("#openmenu").click(function(){
    $("#closemenu").toggleClass("hidden");
    $("#openmenu").toggleClass("hidden");
    $("#fullmenu").toggleClass("hidden");
}
);

$("#closemenu").click(function(){
    $("#closemenu").toggleClass("hidden");
    $("#openmenu").toggleClass("hidden");
    $("#fullmenu").toggleClass("hidden");
}
);

$(".mobile-menuitem").click(function(){
    $("#closemenu").toggleClass("hidden");
    $("#openmenu").toggleClass("hidden");
    $("#fullmenu").toggleClass("hidden");
}
);

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });