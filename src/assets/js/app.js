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
