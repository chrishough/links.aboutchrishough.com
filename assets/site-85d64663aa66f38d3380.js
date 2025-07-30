(self.webpackChunk = self.webpackChunk || []).push([ [ 378 ], {
  /***/ 6901: 
  /***/ function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
    "use strict";
    // ./source/assets/javascripts/components/loader.js
    /* provided dependency */ var $ = __webpack_require__(2726);
    __webpack_require__(2726)(document).ready((function() {
      $(document).ready((function() {
        var $loader = $("#page-loader");
        $(".loader").length;
        // Hide loader after window load and minimum display time
        var startTime = Date.now(), hideLoader = function hideLoader() {
          var elapsedTime = Date.now() - startTime, remainingTime = Math.max(0, 1500 - elapsedTime);
          setTimeout((function() {
            $loader.addClass("hidden"), setTimeout((function() {
              $loader.hide();
            }), 500);
          }), remainingTime);
        };
        // Wait for window load
        $(window).on("load", (function() {
          hideLoader();
        })), 
        // Fallback timeout
        setTimeout((function() {
          $loader.is(":visible") && hideLoader();
        }), 3e3);
      }));
    }));
  },
  /***/ 1597: 
  /***/ function(module) {
    module.exports = "/assets/site-540a448e5b8fa109139ce5b4ece180b8.css";
    /***/  }
}, 
/******/ function(__webpack_require__) {
  // webpackRuntimeModules
  /******/ var __webpack_exec__ = function(moduleId) {
    return __webpack_require__(__webpack_require__.s = moduleId);
  }
  /******/;
  __webpack_exec__(1597), __webpack_exec__(6901);
} ]);
//# sourceMappingURL=site-85d64663aa66f38d3380.js.map