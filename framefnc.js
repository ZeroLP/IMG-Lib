const $ = require('jquery');
const { remote } = require('electron');

var win = remote.getCurrentWindow();

$('#minimise').click(function(){
win.minimize();
});

$('#fullscreen').click(function(){
if(!win.isMaximized()){
    win.maximize();
}
else{
    win.unmaximize();
}
});


$('#close').click(function(){
   win.close(); 
});