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
					<input type="text" id="searchTerm" class="form-control">
					<input type="number" name="s" style="display:none;" value="25">
					<span class="input-group-btn">
						<input type="button" class="btn btn-default submit" value="Search">Search</input>
					</span>
				</form>
				<!-- /input-group -->
			</div>
			<!--End of searchBox-->
			<div class="pages"></div>
			<div class="searchResults row">
			</div>
		</div>
		<!-- end of container-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="js/app.js"></script>
	</body>
</html>