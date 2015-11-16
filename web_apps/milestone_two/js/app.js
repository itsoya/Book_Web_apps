//Retrieves data from the search functions
function searchGet() {
    console.log(json);
    var total = json.totalItems;
    $("#total").text(total);
    var resultHTML = "";
    for (i in json.items) {
        var bookTitle = json.items[i].volumeInfo.title;
        var bookid = json.items[i].id;
        var selfLink = json.items[i].selfLink;
        var link = json.items[i].volumeInfo.infoLink;
        var cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;
        var description = json.items[i].volumeInfo.description;
        resultHTML += "<div class='row'>";
        resultHTML += "<img src='" + cover + "' alt='" + bookTitle + "'class='img-responsive'>";
        resultHTML += "<a href='single_book.php?id=" + selfLink + "' class='" + "bookLink btn'" +">" + bookTitle + "</a>";
        resultHTML +="<p style=" +"float:right;>" + description + "</p>" ;
        resultHTML += "<hr/>";
        resultHTML += "</div>";

    }
    $(".searchResults").html(resultHTML);
}

//Retrieves the bookshelf & volumes of the bookshelf
function bookShelfJs() {
    console.log(json);
    console.log(jsonVolume);
    var total = json.totalItems;
    var resultHTML = "";
    var shelftitle = json.title;
    var description = json.description;
    var volumeCount = json.volumeCount;
    $("#total").text(volumeCount);
    resultHTML += "<div class='bookShelf'>";
    resultHTML += "<h2>" + shelftitle + "</h2>";
    resultHTML += "<p>" + description + "</p>";
    resultHTML += "<hr/>";
    resultHTML += "<div class='volumes'>";
    // Displays information on the volumes in the public bookshelfs
    for (j in jsonVolume.items) {
        var bookTitle = jsonVolume.items[j].volumeInfo.title;
        var bookid = jsonVolume.items[j].id;
        var cover = jsonVolume.items[j].volumeInfo.imageLinks.smallThumbnail;
        var selfLink = jsonVolume.items[j].selfLink;
        var bookDescription = jsonVolume.items[j].volumeInfo.description;
        resultHTML += "<div class='row'>";
        resultHTML += "<img src='" + cover + "' alt='" + bookTitle + "'class='img-responsive'>";
        resultHTML += "<a href='single_book.php?id=" + selfLink + "' class='" + "bookLink btn'" +">" + bookTitle + "</a>";
        resultHTML +="<p style=" +"float:right;>" + bookDescription + "</p>" ;
        resultHTML += "<hr/>";
        resultHTML += "</div>";
    }
    resultHTML += "</div>";
    $(".searchResults").html(resultHTML);
}
//Retrieves the information for a single book
function singleBookJs() {
    console.log(json);
    var resultHTML = "";
    var booktitle = json.volumeInfo.title;
    var bookid = json.id;
    var cover = json.volumeInfo.imageLinks.thumbnail;
    var description = json.volumeInfo.description;
    var publishDate = json.volumeInfo.publishedDate;
    var publisher = json.volumeInfo.publisher;
    var category = json.volumeInfo.mainCategory;
    resultHTML += "<div class='books'>";
    resultHTML += "<img src='" + cover + "' alt='" + booktitle + "'class='img-responsive'>";
    resultHTML += "<p>Publisher: " + publisher + "</p>";
    resultHTML += "<p>Publish Date: " + publishDate + "</p>";
    resultHTML += "<p>Category: " + category + "</p>";
    resultHTML += "<p>" + description + "</p>";
    resultHTML += "</div>";

    $(".searchResults").html(resultHTML);
    $(".subBrand").html(booktitle);
}