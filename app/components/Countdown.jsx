var React = require('react');
var Countdown = require('countdown');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={150}/>
      </div>
    );
  }
});

module.exports = Countdown;
