import test from './modules/demonstrationSlider.js';
import showModalVideo from './modules/showVideo.js';
import accordionList from './modules/accordionList.js';

function handleDOMContentLoaded() {
    test();
    showModalVideo();
    accordionList();
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);