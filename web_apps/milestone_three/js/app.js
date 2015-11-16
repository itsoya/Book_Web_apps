$(document).ready(function() {
    //search event and actions
    $(".submit").click(function() {
        var searchVal = $("#searchTerm").val();
        var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchVal;
        searchBooks(url);
        $(".pages").html("Pages: ");
        for (i = 1; i <= 5; i++) // 5 is hard coded, a better solutions is to determine if there are five pages.
            $(".pages").append("<a href='#'>" + i + "</a> ");
    });

    function searchBooks(servicePoint) {
        var resultHTML = "";
        $.getJSON(servicePoint, function(jsonData) {
            console.log(jsonData);
            $(".searchResults").html("");
            $.each(jsonData.items, function(index, item) {
                var bookTitle = item.volumeInfo.title;
                var bookid = item.id;
                var selfLink = item.selfLink;
                var link = item.volumeInfo.infoLink;
                var cover = item.volumeInfo.imageLinks.smallThumbnail;
                var description = item.volumeInfo.description;
                resultHTML += "<div class='row'>";
                resultHTML += "<h3>" + bookTitle + "</h3>";
                resultHTML += "<img src='" + cover + "' alt='" + bookTitle + "'class='img-responsive'>";
                resultHTML += "<button type='button'" + "id='" + bookid + "' class='bookLink btn btn-info'" + "data-target='." + bookid + "'data-toggle='modal" + "'>More Info" + "</button>";
                resultHTML += "<hr>";
                resultHTML += "</div>";
                resultHTML += "<div class='modal " + bookid + "' role='" + "dialog'>";
                resultHTML += "</div>";
            });
            $(".searchResults").append(resultHTML);
            $(".bookLink").on('click', function() {
                getBookDetails($(this).attr("id"));
            });
        });
    }

    function getBookDetails(bookid) {
        $.getJSON("https://www.googleapis.com/books/v1/volumes/" + bookid, function(jsonData) {
            var bookTitle = jsonData.volumeInfo.title;
            var authors = jsonData.volumeInfo.authors;
            var cover = jsonData.volumeInfo.imageLinks.smallThumbnail;
            var description = jsonData.volumeInfo.description;
            var publisher = jsonData.volumeInfo.publisher;
            var publishedDate = jsonData.volumeInfo.publishedDate;
            console.log(jsonData);
            $("." + bookid).html(" ");
            $("." + bookid).append("<div class='modal-dialog'>" + "</div>");
            $(".modal-dialog").append("<div class='modal-content'>" + "</div>");
            $(".modal-content").append("<div class='modal-header'>" + "<button type='button' class='close' data-dismiss='modal'>&times;" + "</button>" + "</div>");
            $(".modal-header").append("<h4 class='modal-title'>" + bookTitle + "</h4>");
            $(".modal-header").append("Author(s)" + "<h4>" + authors + "</h4>");
            $(".modal-content").append("<div class='modal-body'>" + "<img src='" + cover + "' alt='" + bookTitle + "'class='img-responsive'>" + "</div>");
            $(".modal-body").append(description);
            $(".modal-content").append("<div class='modal-footer'>" + " Publisher: " + publisher + " published Date: " + publishedDate + "</div>");
        });
    }
    $(".pages").on('click', function(event) {
        var number = event.target.textContent;
        var searchVal = $("#searchTerm").val();
        var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchVal + "/page/" + number;
        searchBooks(url);
    });
});