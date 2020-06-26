const VALIDATION_OK    = 1;
const VALIDATION_ERROR = 2;

let form       = document.form;
let formBtn    = document.getElementById('sendBtn');
let checkArray = {};
let checkKey   = "";
let checkVal   = "";

let cookies = document.cookie.split(';');
cookies.forEach(function(cookie) {
  cookieArray = cookie.split('=');
  checkKey    = cookieArray[0];
  checkVal    = cookieArray[1];
})

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
      document.cookie = `check=${VALIDATION_OK}`;
      form.submit();
    }, false);
  },

  subWindowOpen : function(width, height) {
    if(checkVal == VALIDATION_OK) {
      document.cookie = `${checkKey}=; max-age=0;`;
      window.open( 'about:blank', this.nextAction, `top=200,left=300,width=${width},height=${height}` );
      form.target = this.nextAction;
      form.action = this.nextAction;
      form.method = 'get';
      form.submit();
    } else {
    }
  }
}

