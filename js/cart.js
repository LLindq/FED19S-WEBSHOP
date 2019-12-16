$(document).ready(function(){

    // Hela vår cart lista från localStorage
    const cart = JSON.parse(localStorage.getItem("Cart"));
    let subtotal = 0;
    const shipping = 99;
    
    // Loopa igenom listan för att kunna printa ut våra objekt.
    $.each(cart, function(i, currentCartItem){
        console.log(currentCartItem);
        let imgcontainer = $("<div>").appendTo(".cartProductDiv").addClass("cartProductImg");
        $("<img>")
            .appendTo(imgcontainer)
            .addClass("cartProductPicture img-fluid")
            .attr("src", currentCartItem.product.img);
       
        subtotal = subtotal + parseInt(currentCartItem.product.price) * currentCartItem.count;
        $(".subtotalSum").html(subtotal + " SEK");
        console.log(currentCartItem.product.price);
        console.log(currentCartItem.count)

        $(".shipping").html(shipping + " SEK");

        
        $(".totalSum").html(subtotal + shipping + " SEK");
        
        // let h1HeaderDiv = $("<h1>").html("Say it with flowers").appendTo($("#carusellDiv"));
        // $(h1HeaderDiv).addClass("carusel_h1");


    });

    // Skapa dynamiskt div-taggar som visar ut bilderna som vi loopar igenom för att visa alla objekten i cartlistan
    

    
    console.log(cart);



});
