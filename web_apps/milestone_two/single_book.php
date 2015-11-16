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
		<title>Soyboy's Books Web App! Single Book Page</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/main.css" rel="stylesheet">
	</head>
	<body>
		<?php include ("php/navigation.php"); ?>
		<?php include ("php/search.php"); ?>
		<div class="container">
			<div class="subBrand"></div>
			<!--End of searchBox-->
			<div class="searchResults">
			</div>
		</div>
		<!-- end of container-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="js/app.js"></script>
		<script>
		
		var json = <?php singleBook(); ?> ;
		singleBookJs(json);
		</script>
	</body>
</html>