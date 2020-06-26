const VALIDATION_OK    = 1;
const VALIDATION_ERROR = 2;

var cookies = document.cookie.split(';');
cookies.forEach(function(cookie) {
  //cookie名と値に分ける
  var key = cookie.split('=');
  console.log( key[0] );
})

let form    = document.form;
let formBtn = document.getElementById('sendBtn');
let check   = document.getElementById('check');
var UiParts = window.UiParts || {};

common = function(param) {
  let params      = param || {};
  this.target     = params.target;
  this.action     = params.action;
  this.nextAction = params.nextAction;
}

common.prototype = {

  initialize : function() {
    form.target = this.target;
    form.action = this.action;
    form.method = 'get';
    formBtn.addEventListener('click', () => {
      document.cookie = "check=aaa";
      form.submit();
    }, false);
  },

  subWindowOpen : function(width, height) {
    if(check.value == VALIDATION_OK) {
      alert("s");
      form.target = this.target;
      form.action = this.nextAction;
      form.method = 'get';
      form.submit();
    } else {
    }
  }
}

