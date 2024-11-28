(self.webpackChunk = self.webpackChunk || []).push([ [ 378 ], {
  /***/ 8204: 
  /***/ function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
    "use strict";
    // ./source/assets/javascripts/vendor/breakpoints.js
    /* harmony default export */ var $ = __webpack_require__(2726), pages_$ = __webpack_require__(2726), site_$ = __webpack_require__(2726);
    // My Code Only!
    site_$(document).ready((function() {
      var $bodyId = site_$("body").attr("id");
      if (
      // This MUST! match SCSS: $grid-breakpoints
      Breakpoints({
        xs: {
          min: 0,
          max: 576
        },
        sm: {
          min: 576,
          max: 768
        },
        md: {
          min: 768,
          max: 992
        },
        lg: {
          min: 992,
          max: 1200
        },
        xl: {
          min: 1200,
          max: 2e3
        },
        xxl: {
          min: 2e3,
          max: 2500
        },
        xxxl: {
          min: 2500,
          max: 1 / 0
        }
      }), $(document).ready((function() {
        var $loader = $("#page-loader"), animationCompleted = !1;
        $(".loader").length, $(".loader").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", (function() {
          animationCompleted = !0, $loader.addClass("hidden"), setTimeout((function() {
            $loader.hide();
          }), 500);
        })), setTimeout((function() {
          !animationCompleted && $loader.is(":visible") && ($loader.addClass("hidden"), setTimeout((function() {
            $loader.hide();
          }), 500));
        }), 2e3);
      })), "index" === $bodyId) pages_$(document).ready((function() {
        var $videoWrapper = pages_$("#crazy-avatar-video-wrapper"), addVideo = function addVideo() {
          0 === $videoWrapper.find("#crazy-avatar-video-background").length && ($videoWrapper.html('\n      <video autoplay muted playsinline id="crazy-avatar-video-background">\n        <source src="/assets/images/backgrounds/biography/20241027-avatar-movie.mp4" type="video/mp4" id="crazy-avatar-video">\n      </video>\n      <div id="crazy-avatar-fade-background-overlay"></div>\n    '), 
          pages_$("#crazy-avatar-video-background").get(0).load());
        }, removeVideo = function removeVideo() {
          $videoWrapper.empty();
        };
        Breakpoints.is("xxl") || Breakpoints.is("xxxl") ? addVideo() : removeVideo(), Breakpoints.on("xxl xxxl", {
          enter: function enter() {
            addVideo();
          },
          leave: function leave() {
            removeVideo();
          }
        });
      }));
    }));
  },
  /***/ 1597: 
  /***/ function(module) {
    module.exports = "/assets/site-4e0a6f1ed6bd168cedc4bb175dfb104d.css";
    /***/  }
}, 
/******/ function(__webpack_require__) {
  // webpackRuntimeModules
  /******/ var __webpack_exec__ = function(moduleId) {
    return __webpack_require__(__webpack_require__.s = moduleId);
  }
  /******/;
  __webpack_exec__(1597), __webpack_exec__(8204);
} ]);
//# sourceMappingURL=site-4f8e5bd3d4bfa2ba93f3.js.map