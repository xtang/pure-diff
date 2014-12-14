(function() {
  var pureDiff;

  pureDiff = function() {
    var span, spans, _i, _len, _ref, _results;
    spans = document.querySelectorAll('#files span');
    _results = [];
    for (_i = 0, _len = spans.length; _i < _len; _i++) {
      span = spans[_i];
      if (((_ref = span.className) != null ? _ref.indexOf("pl-") : void 0) >= 0) {
        _results.push(span.className = '');
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  pureDiff();

}).call(this);
