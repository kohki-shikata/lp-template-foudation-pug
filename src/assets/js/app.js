import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();


// import custom dependencies

import libs from './lib/dependencies';

window.libs = libs;

// write down here codes for custom dependencies

libs.objectFitImages('img.ofi');

let sw = Foundation.MediaQuery.get('medium');
sw = sw.replace(/[^0-9^\.]/g,"") * 16;
let mw = Foundation.MediaQuery.get('large');
mw = mw.replace(/[^0-9^\.]/g,"") * 16;

console.log(sw);

$('.slick').slick({
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: sw,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: mw,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});
