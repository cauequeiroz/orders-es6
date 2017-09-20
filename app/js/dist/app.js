'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var logger;
  return {
    setters: [],
    execute: function () {
      logger = function logger(message) {
        return console.log(message);
      };

      logger('Start Development...');
    }
  };
});
//# sourceMappingURL=app.js.map