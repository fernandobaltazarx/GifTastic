

var buttonArray = [
  'tiesto',
  'avicci',
  'epic',
  'awesome',
  'funny'
];

function showButtonArray() {
  var str = '';
  for (var i=0; i<buttonArray.length; i++) {
    str += '<button onclick=\"buttonClicked(\''+buttonArray[i]+'\');\" class=\"button\">';
    str += buttonArray[i]+'</button><br>';
  }
  return str;
}

// Image factory
var createImage = function(src) {
  var img   = new Image();
  img.src   = src;
  return img; 
};

// array of images
var images = [];

function buttonClicked(buttonName) {

	console.log(buttonName + " was clicked, now fetching gifs");
	$.ajax({
	    url: "https://api.giphy.com/v1/gifs/search?q=" + buttonName +  "&api_key=dc6zaTOxFJmzC",
	    type: "GET",

		success: function(json) {
		   //console.log(JSON.stringify(json.data));
		   $.each(json.data, function(idx, i){
			// push two images to the array
			images.push(createImage(i.images.fixed_height_downsampled.url));
		   	 console.log(i.images.fixed_height_downsampled.url);
		   	 	$( "#imagesArea" ).empty();
		   	 	$( "#imagesArea" ).html(images);
		   });
		}
	});
	// console.log(images);
	// $( "#imagesArea" ).empty();
	// $( "#imagesArea" ).children().remove();
	// $( "#imagesArea" ).html("cleared");
	// $( "#imagesArea" ).html(images);
	// console.log("done fetching images");
	images = [];
	// images.push(createImage("http://www.jumpinglummen.be/springtour-2016/images/results.png"));

}

function addButton() {

	var beets;
	var input1;

	// getting inputs into variables
	input1 = document.getElementById("form1");
	beets = input1.elements["number1"].value;

	$( "#buttons" ).append( '<button onclick=\"buttonClicked(\''+beets+'\');\" class=\"button\">'+beets+'</button>' );
}
