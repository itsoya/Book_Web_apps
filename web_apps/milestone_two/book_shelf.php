<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta charset="utf-8">
		<meta name="author" content="Itsoya Atare Abebe" />
		<meta name="description" content="Book Application" />
		<meta name="keywords"  content="Itsoya Abebe, Itsoya, Abebe, Book Application" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv='Content-Type' content='Type=text/html; charset=utf-8'>
		<meta name=”robots” content=”index, follow” />
		<link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />
		<title>Soyboy's Books Web App! BookShelf Page</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/main.css" rel="stylesheet">
	</head>
	<body>
		<?php include ("php/navigation.php"); ?>
		<?php include ("php/search.php"); ?>
		<div class="container">
			<div class="subBrand">My Bookshelves</div>
			<div class="searchBox">
				<h2>Total Books: <span id="total"></span></h2>
				<h2>Choose a shelf:</h2>
				<form class="input-group">
					<select name="q">
						<option value=""></option>
						<option value="0">My Favorite</option>
						<option value="1001">Class</option>
					</select>
					<input class="btn btn-default" type="submit" value="Submit"></input>
				</form>
			</div>
			<!--End of searchBox-->
			<div class="searchResults">
			</div>
		</div>
		<!-- end of container-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="js/app.js"></script>
		<script>
		//Gets the bookshelf json
		var json = <?php bookShelf(); ?> ;
		//Gets the volume information of each bookshelf
		var jsonVolume = <?php volumeShelf(); ?>;
		bookShelfJs(json, jsonVolume);
		</script>
	</body>
</html>