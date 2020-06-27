const VALIDATION_OK    = 1;
const VALIDATION_ERROR = 2;

let form       = document.form;
let formBtn    = document.getElementById('sendBtn');
let checkKey   = 'check';

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
    formBtn.addEventListener('click', () => {
      let formName   = document.getElementById('formName').value;
      let formMail   = document.getElementById('formMail').value;

      if(formName && formMail) {
        localStorage.setItem(checkKey, VALIDATION_OK);
        form.submit();
      } else {
        alert('入力値が不正です。');
      }
    }, false);
  },

  subWindowOpen : function(width, height) {
    if(localStorage.getItem(checkKey) == VALIDATION_OK) {
      window.open( null, this.nextAction, `top=200,left=300,width=${width},height=${height}` );
      form.target = this.nextAction;
      form.action = this.nextAction;
      form.submit();
      localStorage.removeItem(checkKey);
    } else {
    }
  }
}