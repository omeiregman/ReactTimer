var React = require('react');
var Nav = require('nav');
var Stopwatch = require('./Stopwatch.jsx');

var Main = (props) => {
  return(
    <div>
      <div>
        <Nav/>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
