$(document).ready(function(){
    // Skapar en h1 till diven som ligger ovanpå carusell och statisk header
    let h1HeaderDiv = $("<h1>").html("Say it with flowers").appendTo($("#carusellDiv"));
    $(h1HeaderDiv).addClass("carusel_h1");

    // Skapa p-tagg och lägger till den i #carusellDiv
    let pHeaderDiv = $("<p>").html("Beautiful and fresh flowers made daily <br> and delivered across Sweden.").appendTo("#carusellDiv");
    $(pHeaderDiv).addClass("carusel_p");    
    
    
    
    
    
    
    
    
    
    
    
    
    let flowers = [
        {id: '1', title: 'Sweet heart', price: '599 kr', articlenr: 0001, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "./img/products_img/Födelsedagsblommor/birthdayflowers1.jpg", category: "Birthdayflowers" },
        {id: '2', title: 'Shining star', price: '699 kr', articlenr: 0002, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "./img/products_img/Födelsedagsblommor/birthdayflowers2.jpg", category: "Birthdayflowers" },
        {id: '3', title: 'Only prettier', price: '799 kr', articlenr: 0003, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "./img/products_img/Födelsedagsblommor/birthdayflowers3.jpg", category: "Birthdayflowers" },
        {id: '4', title: 'Miracle', price: '899 kr', articlenr: 0004, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "./img/products_img/Födelsedagsblommor/birthdayflowers4.jpg", category: "Birthdayflowers" },
        {id: '5', title: 'Joyful pleasure', price: '540 kr', articlenr: 0005, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "./img/products_img/Födelsedagsblommor/birthdayflowers5.jpg", category: "Birthdayflowers" },

        {id: '6', title: 'Endless love', price: '599 kr', articlenr: 0006, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Loveflowers" },
        {id: '7', title: 'True romance', price: '699 kr', articlenr: 0007, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Loveflowers" },
        {id: '8', title: 'Amore', price: '799 kr', articlenr: 0010, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Loveflowers" },
        {id: '9', title: 'Deep breaths', price: '899 kr', articlenr: 0011, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Loveflowers" },
        {id: '10', title: 'Blossom fairy', price: '540 kr', articlenr: 0012, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Loveflowers" },

        {id: '11', title: 'Song bird', price: '599 kr', articlenr: 0013, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Holidayflowers" },
        {id: '12', title: 'Wonderful day', price: '699 kr', articlenr: 00014, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Holidayflowers" },
        {id: '13', title: 'Purity', price: '799 kr', articlenr: 0015, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Holidayflowers" },
        {id: '14', title: 'Glamorous', price: '899 kr', articlenr: 0016, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Holidayflowers" },
        {id: '15', title: 'Fantasy', price: '540 kr', articlenr: 0017, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Holidayflowers" },

        {id: '16', title: 'Grace', price: '599 kr', articlenr: 0020, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Seasonflowers" },
        {id: '17', title: 'Daydream', price: '699 kr', articlenr: 00021, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Seasonflowers" },
        {id: '18', title: 'Wild garden', price: '799 kr', articlenr: 0022, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Seasonflowers" },
        {id: '19', title: 'Summerday', price: '899 kr', articlenr: 0023, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Seasonflowers" },
        {id: '20', title: 'Sparkle forest', price: '540 kr', articlenr: 0024, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "picture for later", category: "Seasonflowers" },

    ];
});