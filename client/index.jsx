import React from 'react';
import ReactDOM from 'react-dom';
import App from '../calendar-component-kt/client/src/index.jsx';
import Booking from '../booking-info-service-jeff/dist/index.jsx';
import ListingInfo from '../listinginfo/dist/index.jsx';
import ReviewSection from '../reviewList-ak/client/src/index.jsx';

ReactDOM.render(<App />, document.getElementById('calendar'));
ReactDOM.render(<Booking />, document.getElementById('app'));
ReactDOM.render(<ListingInfo />, document.getElementById('listingInfo'));
ReactDOM.render(<ReviewSection />, document.getElementById('main'));
