const VALIDATION_OK    = 1;
const VALIDATION_ERROR = 2;

var form    = document.form;
var formBtn = document.getElementById('sendBtn');
var cookies = document.cookie.split(';');
var check   = 0;
cookies.forEach(function(cookie) {
  cookieArray = cookie.split('=');
  checkKey       = cookieArray[0];
  checkVal       = cookieArray[1];
})

common = function(param) {
  var params      = param || {};
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
      document.cookie = `check=${VALIDATION_OK}`;
      form.submit();
    }, false);
  },

  subWindowOpen : function(width, height) {
    if(checkVal == VALIDATION_OK) {
      document.cookie = `${checkKey}=; max-age=0;`
      form.target = this.target;
      form.action = this.nextAction;
      form.method = 'get';
      form.submit();
    } else {
    }
  }
}

