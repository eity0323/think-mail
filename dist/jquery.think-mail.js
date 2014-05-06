/*! Think Mail - v0.1.0 - 2014-05-06
* https://github.com/sokis/think-mail
* Copyright (c) 2014 sokis; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.think_mail = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.think_mail = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.think_mail.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.think_mail.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].think_mail = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
