import './style';
import './hoodie';

import { h } from 'preact';
import { Router } from 'preact-router';

// import Header from './components/header';
import Home from './routes/home';
import New from './routes/new';

// Polifill for element.closest()
if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest =
    function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this;
        do {
            i = matches.length;
            while (--i >= 0 && matches.item(i) !== el) {};
        } while ((i < 0) && (el = el.parentElement));
        return el;
    };
}

export default () => (
	<div id="app">
		<div class="ribbon"></div>
		<div class="app-container">
			<Router>
				<Home path="/" />
				<New path="/new" />
			</Router>
		</div>
	</div>
);
