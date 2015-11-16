<?php

//Retrieves the json for a public bookshelves 
function bookShelf() {
$bookShelfId=$_GET["q"];
if ($bookShelfId != "")
{
$APIKey="AIzaSyB2F1QD3yXmxF3pRquRz2wgA4qHYTW_-Lk";
$service_point="https://www.googleapis.com/books/v1/users/114260455974328168812/bookshelves/";
$parameter=$bookShelfId."?"."key=".$APIKey;
$shelfContent=file_get_contents($service_point.$parameter);
echo $shelfContent;
}
}
//Retrieves the json for volumes in the bookshelf
function volumeShelf() {
$bookShelfId=$_GET["q"];
$APIKey="AIzaSyB2F1QD3yXmxF3pRquRz2wgA4qHYTW_-Lk";
$service_point="https://www.googleapis.com/books/v1/users/114260455974328168812/bookshelves/";
$parameter=$bookShelfId."/volumes?"."&key=".$APIKey;
$volumeContent=file_get_contents($service_point.$parameter);
echo $volumeContent;
}
//Retrieves the json for a single books information
function singleBook() {
$service_point=$_GET["id"];
$singleContent=file_get_contents($service_point);
echo $singleContent;
}
?>


