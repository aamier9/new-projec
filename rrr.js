<script src="js/jquery-1.6.3.min.js"></script>
 <script >
$('#gallery a').click(function(evt) {
evt.preventDefault();
 var imgPath = $(this).attr('href');
 var oldImage = $('#photo img');
 var newImage = $('<img src="' + imgPath +'">');
 newImage.hide();
$('#photo').prepend(newImage);
newImage.fadeIn(1000);
 oldImage.fadeOut(1000,function(){
 $(this).remove();
 }); // end fadeout
}); // end click
$('#gallery a:first').click();
<script/>

