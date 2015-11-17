<!DOCTYPE html >
<html lang = "en" >
	<head >
		<meta http - equiv = "Content-Type"	content = "text/html; charset=utf-8" / >
		<meta charset = "utf-8" >
		<meta name = "author" content = "Itsoya Atare Abebe" / >
		<meta name = "description"
		content = "Book Application" / >
		<meta name = "keywords"	content = "Itsoya Abebe, Itsoya, Abebe, Book Application" / >
		<meta name = "viewport"	content = "width=device-width, initial-scale=1" >
		<meta http - equiv = 'Content-Type'	content = 'Type=text/html; charset=utf-8' >
		<meta name = ”robots” content = ”index, follow” / >
		<link rel = "shortcut icon" type = "image/x-icon" href = "img/favicon.png" / >
		<title > Soyboy 's Books Web App! Homepage</title>
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/main.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	</head>
	<body>
		<?php include ("php/navigation.php"); ?>
		<div class="container">
			<div class="subBrand">Search For a Book</div>
			<div class="searchBox">
				<form class="input-group">
					<input type="text" id="searchTerm" class="form-control" value="database">
					<input type="number" name="s" style="display:none;" value="25">
					<span class="input-group-btn">
						<input type="button" class="btn btn-default submit" value="Search"></input>
					</span>
					<span class="input-group-btn">
						<input type="button" class="btn btn-default shelf" value="Show Shelf"></input>
					</span>
					<span class="input-group-btn">
						<input type="button" class="btn btn-default view" value="Grid"></input>
					</span>
				</form>
				<!-- /input-group -->
			</div>
			<!--End of searchBox-->
			<div class="pages"></div>
			<div class="searchResults">
			</div>
			<div id="book" class="modal" role="dialog">
				
			</div>
		</div>
		<!-- end of container-->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.0/mustache.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="js/app.js"></script>
		<script id="results" type="x-tmpl-mustache">
		
			{{#items}}
			<div class="row">
				<h3>  {{volumeInfo.title}}  </h3>
				<img src="{{volumeInfo.imageLinks.thumbnail}}" alt="{{volumeInfo.title}}"  class="img-responsive">
				<button type="button"  id= "{{id}}" class="bookLink btn btn-info"  data-target="#book"  data-toggle="modal">
				More Info
				</button>			
			</div>
		{{/items}}
		</script>
		<script id="singleBook" type="x-tmpl-mustache">
			<div class='modal-dialog'>
				<div class='modal-content'>
					<div class='modal-header'>
					<h4 class='modal-title'>{{volumeInfo.title}} </h4>
						<button type='button' class='close' data-dismiss='modal'>&times;</button>
					</div>
					Author(s)
					<h4>{{volumeInfo.authors}} </h4>
					<div class='modal-body'>
						<img src="{{volumeInfo.imageLinks.thumbnail}}" alt="{{volumeInfo.title}}"  class="img-responsive">
						<p> {{volumeInfo.description}}</p>
					</div>
					<div class='modal-footer'>
						<div>
							<p>Publisher:</p>
							{{ volumeInfo.publisher}}
							<p>Published Date:</p>
							{{volumeInfo.publishedDate}}
						</div>
					</div>
				</div>
			</script>
			<script id="bookShelfTemp" type="x-tmpl-mustache">
			{{#items}}
			<div class="row">
				<h3>  {{volumeInfo.title}}  </h3>
				<img src="{{volumeInfo.imageLinks.thumbnail}}" alt="{{volumeInfo.title}}"  class="img-responsive">
				<button type="button"  id= "{{id}}" class="bookLink btn btn-info"  data-target="#book"  data-toggle="modal">
				More Info
				</button>
				<div>
				<p>Publisher:</p>
				{{volumeInfo.publisher}}
				<p>Published Date:</p>
				{{volumeInfo.publishedDate}}
				</div>
				</div>
		{{/items}}
		</script>
		</body>
	</html>