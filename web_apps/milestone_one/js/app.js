    // ebooksAll for All IT Ebooks webpage
    function ebooksAll(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<div class="col-sm-11 col-md-11">' +
                '<h4>ID#</h4><p>' + arr[i].ID + '</p> ' +
                '<h3>' + arr[i].Title + '</h3>' +
                '<h4>' + arr[i].SubTitle + '</h4>' +
                '<h2>Description</h4><p>' + arr[i].Description + '</p>' +
                '<p><img src="' + arr[i].Image + '" "' + 'alt="' + arr[i].Title + '"></p>' +
                '<h4>ISBN</h4><p>' + arr[i].isbn + '</p>' +
                '<hr/></div>';
        }
        document.getElementById("it_all_books").innerHTML = out;
    }
    // It one book for it_one_book webpage
    function ebooksOne(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<div class="col-sm-11 col-md-11">' +
                '<h3>Title</h3><p> ' + arr[i].Title + '</p> ' +
                '<h3>Sub Title</h3><p> ' + arr[i].SubTitle + '</p> ' +
                '<h3>Author</h3><p>' + arr[i].Author + '</p> ' +
                '<h3>Publisher</h3><p>' + arr[i].Publisher + '</p> ' +
                '<img src="' + arr[i].Image + '" "' + 'alt="' + arr[i].Title + '">' +
                '<h3>Description</h3><p>' + arr[i].Description + '</p> ' +
                '<h3>Download Link</h3><a href="' + arr[i].Download + '">Download</a> ' +
                '<h3>isbn</h3><p>' + arr[i].ISBN + '</p> ' +
                '</div>';
        }
        document.getElementById("ebook_one").innerHTML = out;
    }
    // Open Books all for openBook_all webpage
    function openBookAll(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<div class="col-sm-11 col-md-11">' +
                '<h3>Title</h3><p> ' + arr[i].title_suggest + '</p> ' +
                '<h3>Author</h3><p>' + arr[i].author_name + '</p> ' +
                '<h3>Publish Date</h3><p>' + arr[i].publish_date + '</p> ' +
                '<h3>isbn</h3><p>' + arr[i].isbn + '</p> ' +
                '<hr/></div>';
        }
        document.getElementById("openBook_all").innerHTML = out;
    }
    // openBookOne for OpenBook_one webpage
    function openBookOne(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<div class="col-sm-11 col-md-11">' +
                '<h3>Title</h3><p> ' + arr[i].title + '</p> ' +
                '<h3>level</h3><p>' + arr[i].level + '</p> ' +
                '<hr/></div>';
        };
        document.getElementById("openBook_One").innerHTML = out;
    }

    // Google json for google webpage
    function google(arr) {
        var out = "";
        var i;
        var e;
        for (i = 0; i < arr.length; i++) {
            out += '<div class="col-sm-11 col-md-11">' +
                '<h3>Title</h3><p> ' + arr[i].volumeInfo.title + '</p> ' +
                '<h3>SubTitle</h3><p> ' + arr[i].volumeInfo.subtitle + '</p> ' +
                '<h3>Author</h3><p> ' + arr[i].volumeInfo.authors + '</p> ' +
                '<h3>Publisher</h3><p> ' + arr[i].volumeInfo.publisher + '</p> ' +
                '<h3>Publish Date</h3><p> ' + arr[i].volumeInfo.publishedDate + '</p> ' +
                '<h3>Average Rating</h3><p> ' + arr[i].volumeInfo.averageRating + '</p> ' +
                '<h3>Ratings Count</h3><p> ' + arr[i].volumeInfo.ratingsCount + '</p> ' +
                '<h3>Sale Country</h3><p> ' + arr[i].saleInfo.country + '</p> ' +
                '<h3>Sale Amount</h3><p> ' + arr[i].saleInfo.listPrice.amount + " " + arr[i].saleInfo.listPrice.currencyCode + '</p> ' +

            '</div>';
        };
        document.getElementById("google_js").innerHTML = out;
    }
    // Amazon xml for Amazon webpage
    function amazon() {
        var x, i, xmlhttp, xmlDoc;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "xml/amazon-book.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        x = xmlDoc.getElementsByTagName("ItemAttributes");

        out = "";
        for (i = 0; i < x.length; i++) {
            out += '<div class="col-sm-11 col-md-11">' +
                '<h3>Author</h3><p>' + x[i].getElementsByTagName("Author")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>Binding </h3><p>' + x[i].getElementsByTagName("Binding")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>DeweyDecimalNumber </h3><p>' + x[i].getElementsByTagName("DeweyDecimalNumber")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>EAN </h3><p>' + x[i].getElementsByTagName("EAN")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>Feature </h3><p>' + x[i].getElementsByTagName("Feature")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>ISBN </h3><p>' + x[i].getElementsByTagName("ISBN")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>Manufacturer </h3><p>' + x[i].getElementsByTagName("Manufacturer")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>NumberOfItems </h3><p>' + x[i].getElementsByTagName("NumberOfItems")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>NumberOfPages </h3><p>' + x[i].getElementsByTagName("NumberOfPages")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>PublicationDate </h3><p>' + x[i].getElementsByTagName("PublicationDate")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>Publisher </h3><p>' + x[i].getElementsByTagName("Publisher")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>Studio </h3><p>' + x[i].getElementsByTagName("Studio")[i].childNodes[0].nodeValue + '</p> ' +
                '<h3>Title </h3><p>' + x[i].getElementsByTagName("Title")[i].childNodes[0].nodeValue + '</p> ' +

                "<hr/></div>";
        }
        document.getElementById("amazon_xml").innerHTML = out;
    }
    amazon();