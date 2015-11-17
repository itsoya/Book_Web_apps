$(document).ready(function() {
    //search event and actions
    $(".submit").click(function() {
        var searchVal = $("#searchTerm").val();
        var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchVal;
        searchBooks(url);
        $(".view").val('Grid');
        $(".pages").html("Pages: ");
        for (i = 1; i <= 5; i++)
            $(".pages").append("<a href='#'>" + i + "</a> ");
    });
    //Shelf function
    $(".shelf").click(function() {
        var url = "https://www.googleapis.com/books/v1/users/114260455974328168812/bookshelves/1001/volumes";
        bookShelf(url);
        $(".pages").html(" ");
        $(".view").val('Grid');
    });
    //View toggle
    $(".view").click(function() {
        if (!$(".row").hasClass('grid')) {
            $('.row').addClass('grid');
            $(".view").val('List');
        } else if ($('.row').hasClass('grid')) {
            $('.row').removeClass('grid');
            $(".view").val('Grid');
        }
    });
    $(".close").click(function() {
        $(".modal").html(" ");
    });

    function searchBooks(servicePoint) {
        var resultHTML = "";
        $.getJSON(servicePoint, function(jsonData) {
            console.log(jsonData);
            $(".searchResults").html("");
            var template = $('#results').html();
            var html = Mustache.render(template, jsonData);
            $(".searchResults").append(html);
            $(".bookLink").on('click', function() {
                getBookDetails($(this).attr("id"));
            });
        });
    }

    function getBookDetails(bookid) {
        $(".modal").html(" ");
        $.getJSON("https://www.googleapis.com/books/v1/volumes/" + bookid, function(jsonData) {
            console.log(jsonData);
            var template = $('#singleBook').html();
            var html = Mustache.render(template, jsonData);
            $(".modal").append(html);
        });
    }
    //Retrieves the bookshelf & volumes of the bookshelf
    function bookShelf(servicePoint) {
        $.getJSON(servicePoint, function(jsonData) {
            console.log(jsonData);
            $(".searchResults").html(" ");
            var template = $('#bookShelfTemp').html();
            var html = Mustache.render(template, jsonData);
            $(".searchResults").append(html);
            $(".bookLink").on('click', function() {
                getBookDetails($(this).attr("id"));
            });
        });
    }
    $(".pages").on('click', function(event) {
        var number = event.target.textContent;
        var searchVal = $("#searchTerm").val();
        var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchVal + "/page/" + number;
        searchBooks(url);
    });
});