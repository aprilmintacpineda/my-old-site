function canRun() {
  return window.innerWidth >= 650;
}

function resizeMakeFixed() {
  if(canRun()) {
    // cache
    var leftBar = document.querySelector('.left-bar');
    var targetElement = document.querySelector('#make-fixed');
    targetElement.style.width = leftBar.clientWidth + 'px';
  }
}

function makeFixed() {
  // cached
  var targetElement = document.querySelector('#make-fixed');
  var leftBar = document.querySelector('.left-bar');
  var rightBar = document.querySelector('.right-bar');
  var pageFooter = document.querySelector('.page-footer');

  if(canRun()) {
    resizeMakeFixed();

    var clientWidth = targetElement.clientWidth;

    leftBar.style.height = leftBar.clientHeight > rightBar.clientHeight? leftBar.clientHeight + 'px' : rightBar.clientHeight + 'px';

    // check if pageYOffset is defined
    if(window.pageYOffset) {
      var offsetBottom = targetElement.offsetHeight + window.pageYOffset;
      var maxBottom = pageFooter.offsetTop - 80;
      // make the targetElement fixed or not fixed depending on the scroll bar
      if(window.pageYOffset >= 300) {
        if(offsetBottom >= maxBottom) {
          targetElement.style.position = 'absolute';
          targetElement.style.bottom = '80px';
          targetElement.style.top = 'auto';
        } else {
          targetElement.style.top = '80px';
          targetElement.style.position = 'fixed';
          targetElement.style.bottom = 'auto';
        }
      } else {
        targetElement.style.position = 'static';
      }
    }
  } else {
    leftBar.style.height = 'auto';
  }
}

document.body.onload = function() {
  makeFixed();
  resizeMakeFixed();
  window.onresize = resizeMakeFixed;
  document.body.onscroll = makeFixed;
}