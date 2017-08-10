// function makeFixed() {
//   // cached
//   var targetElement = document.querySelector('#make-fixed');
//   var pageFooter = document.querySelector('.page-footer');
//   var clientWidth = targetElement.clientWidth;
  
//   // check if pageYOffset is defined
//   if(window.pageYOffset) {
//     var offsetBottom = targetElement.offsetHeight + window.pageYOffset;
//     var maxBottom = pageFooter.offsetTop - 80;
//     // make the targetElement fixed or not fixed depending on the scroll bar
//     if(window.pageYOffset >= 300) {
//       targetElement.style.top = '80px';
//       targetElement.style.background = '#fff';
//       targetElement.style.zIndex = 999;
//       targetElement.style.width = clientWidth + 'px';

//       if(offsetBottom >= maxBottom) {
//         targetElement.style.position = 'absolute';
//         targetElement.style.top = '0';
//         document.body.onscroll = null;
//       } else {
//         targetElement.style.top = '80px';
//         targetElement.style.position = 'fixed';
//       }
//     } else {
//       targetElement.style.position = 'static';
//     }
//   }
// }

// document.body.onload = function() {
//   makeFixed();
//   document.body.onscroll = makeFixed;
// }