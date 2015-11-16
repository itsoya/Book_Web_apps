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
		<title>Soyboy's Books Web App! Homepage</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/main.css" rel="stylesheet">
	</head>
	<body>
		<?php include ("php/search.php"); ?>
		<?php include ("php/navigation.php"); ?>
		<div class="container">
			<div class="subBrand">Search For a Book</div>
			<div class="searchBox">
				<form class="input-group">
					<input type="text" name="q" class="form-control" placeholder="Search a book...">
					<input type="number" name="s" style="display:none;" value="25">
					<span class="input-group-btn">
						<input class="btn btn-default" type="submit" value="Search">Search</input>
					</span>
				</form>
				<!-- /input-group -->
				<h2>Total results: <span id="total"></span></h2>
			</div>
			<!--End of searchBox-->
			<div class="link"></div>
			<div class="searchResults row">
				
			</div>
		</div>
		<!-- end of container-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="js/app.js"></script>
		<?php
		if (isset($_GET["q"]) && isset($_GET["s"])) {
		$startIndex=$_GET["s"];
		$term = $_GET["q"];
		} else {
		$startIndex= 0;
		$term="book";	
		}
		$maxResults =25;
		$APIKey="AIzaSyB2F1QD3yXmxF3pRquRz2wgA4qHYTW_-Lk";
		$service_point="https://www.googleapis.com/books/v1/volumes";
		$parameter="?q=".$term."&startIndex=".$startIndex."&maxResults=".$maxResults."&key=".$APIKey;
		$jsoncontent=file_get_contents($service_point.$parameter);	
		?>

		<script>
		
		var startIndex = 0 ;
		var max = <?php echo $maxResults; ?> ;
		var term = "<?php echo $term; ?>";
		var numberOfPages = 8;
		var resultHTML = "";
		for (var i = 1; i < numberOfPages; i++) {
		resultHTML += "<div class='btn'>";
		resultHTML += "<a href='" + "index.php?q=" + term + "&s=" + startIndex + "&m=" + max + "' class='" + "bookLink btn btn-primary'" + "'>" + "Page " + i + "</a>";
		resultHTML += "</div>";
		startIndex += 26;
		}
		$(".link").html(resultHTML);
		var json = <?php echo $jsoncontent; ?> ;
		searchGet(json);
		</script>
		
	</body>
</html>