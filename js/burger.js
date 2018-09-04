var burger = $(".burger");
        var search = $(".search");
        var cartAndAccount = $(".cartAndAccount");
        var headerNav = $(".headerNav");
        var headerMain = $(".headerMain");
        burger.on("click", function() {
            burger.toggleClass("burger_active");
            search.toggleClass("visible");
            cartAndAccount.toggleClass("visible");
            headerNav.toggleClass("visible");
            headerMain.toggleClass("height200");
        });