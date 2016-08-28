var socket = io();
$('body').on('keyup', '.crossword__input', function(e){
	var keyObj = {
		key: $(this).val(),
		id: $(this).attr('id')
	};
	socket.emit('key', keyObj);
	console.log(keyObj);
	return false;
});
socket.on('key', function(keyObj){
	console.log('res', keyObj);
  $('#' + keyObj.id).val(keyObj.key);
});