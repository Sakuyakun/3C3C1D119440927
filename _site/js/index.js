window.onload = function () {
  var _imgDOM = document.querySelectorAll('img')
  if (_imgDOM.length > 0) {
      for (var i = 0; i < _imgDOM.length; i++) {
          zoom(_imgDOM[i])
      }
  }

  var _alDOM = document.querySelector('.links-active')
  if (_alDOM && _alDOM.length > 0) {
    _alDOM.classList.remove('links-active')
  }
}