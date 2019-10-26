// Imports all compontens
// Comment out unwanted components for leaner and faster UIkit custom build
// ========================================================================

// import UIkit from 'uikit';

import UIkit from 'uikit/dist/js/uikit-core';
import Icons from 'uikit/dist/js/uikit-icons';

import Lightbox from 'uikit/dist/js/components/lightbox';
import LightboxPanel from 'uikit/dist/js/components/lightbox-panel';
import Countdown from 'uikit/dist/js/components/countdown';
import Filter from 'uikit/dist/js/components/filter';
import Parallax from 'uikit/dist/js/components/parallax';
import Notification from 'uikit/dist/js/components/notification';
import Slider from 'uikit/dist/js/components/slider';
import SliderParallax from 'uikit/dist/js/components/slider-parallax';
import Slideshow from 'uikit/dist/js/components/slideshow';
import SlideshowParallax from 'uikit/dist/js/components/slideshow-parallax';
import Sortable from 'uikit/dist/js/components/sortable';
import Tooltip from 'uikit/dist/js/components/tooltip';
import Upload from 'uikit/dist/js/components/upload';

UIkit.use(Icons);
UIkit.component('countdown', Countdown);
UIkit.component('filter', Filter);
UIkit.component('lightbox', Lightbox);
UIkit.component('lightboxpanel', LightboxPanel);
UIkit.component('notification', Notification);
UIkit.component('parallax', Parallax);
UIkit.component('slider', Slider);
UIkit.component('sliderparallax', SliderParallax);
UIkit.component('slideshow', Slideshow);
UIkit.component('slideshowparallax', SlideshowParallax);
UIkit.component('sortable', Sortable);
UIkit.component('tooltip', Tooltip);
UIkit.component('upload', Upload);
