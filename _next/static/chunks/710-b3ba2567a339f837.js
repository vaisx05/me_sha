(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [710],
  {
    3614: function (e) {
      var t;
      (t = function () {
        return (function (e) {
          var t = {};
          function s(n) {
            if (t[n]) return t[n].exports;
            var i = (t[n] = { exports: {}, id: n, loaded: !1 });
            return (
              e[n].call(i.exports, i, i.exports, s), (i.loaded = !0), i.exports
            );
          }
          return (s.m = e), (s.c = t), (s.p = ""), s(0);
        })([
          function (e, t, s) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function () {
                function e(e, t) {
                  for (var s = 0; s < t.length; s++) {
                    var n = t[s];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, s, n) {
                  return s && e(t.prototype, s), n && e(t, n), t;
                };
              })(),
              i = s(1),
              r = s(3),
              a = (function () {
                function e(t, s) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    i.initializer.load(this, s, t),
                    this.begin();
                }
                return (
                  n(e, [
                    {
                      key: "toggle",
                      value: function () {
                        this.pause.status ? this.start() : this.stop();
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        this.typingComplete ||
                          this.pause.status ||
                          (this.toggleBlinking(!0),
                          (this.pause.status = !0),
                          this.options.onStop(this.arrayPos, this));
                      },
                    },
                    {
                      key: "start",
                      value: function () {
                        this.typingComplete ||
                          (this.pause.status &&
                            ((this.pause.status = !1),
                            this.pause.typewrite
                              ? this.typewrite(
                                  this.pause.curString,
                                  this.pause.curStrPos
                                )
                              : this.backspace(
                                  this.pause.curString,
                                  this.pause.curStrPos
                                ),
                            this.options.onStart(this.arrayPos, this)));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.reset(!1), this.options.onDestroy(this);
                      },
                    },
                    {
                      key: "reset",
                      value: function () {
                        var e =
                          arguments.length <= 0 ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        clearInterval(this.timeout),
                          this.replaceText(""),
                          this.cursor &&
                            this.cursor.parentNode &&
                            (this.cursor.parentNode.removeChild(this.cursor),
                            (this.cursor = null)),
                          (this.strPos = 0),
                          (this.arrayPos = 0),
                          (this.curLoop = 0),
                          e &&
                            (this.insertCursor(),
                            this.options.onReset(this),
                            this.begin());
                      },
                    },
                    {
                      key: "begin",
                      value: function () {
                        var e = this;
                        this.options.onBegin(this),
                          (this.typingComplete = !1),
                          this.shuffleStringsIfNeeded(this),
                          this.insertCursor(),
                          this.bindInputFocusEvents && this.bindFocusEvents(),
                          (this.timeout = setTimeout(function () {
                            e.currentElContent &&
                            0 !== e.currentElContent.length
                              ? e.backspace(
                                  e.currentElContent,
                                  e.currentElContent.length
                                )
                              : e.typewrite(
                                  e.strings[e.sequence[e.arrayPos]],
                                  e.strPos
                                );
                          }, this.startDelay));
                      },
                    },
                    {
                      key: "typewrite",
                      value: function (e, t) {
                        var s = this;
                        this.fadeOut &&
                          this.el.classList.contains(this.fadeOutClass) &&
                          (this.el.classList.remove(this.fadeOutClass),
                          this.cursor &&
                            this.cursor.classList.remove(this.fadeOutClass));
                        var n = this.humanizer(this.typeSpeed),
                          i = 1;
                        !0 !== this.pause.status
                          ? (this.timeout = setTimeout(function () {
                              t = r.htmlParser.typeHtmlChars(e, t, s);
                              var n = 0,
                                a = e.substr(t);
                              if ("^" === a.charAt(0) && /^\^\d+/.test(a)) {
                                var o = 1;
                                (o += (a = /\d+/.exec(a)[0]).length),
                                  (n = parseInt(a)),
                                  (s.temporaryPause = !0),
                                  s.options.onTypingPaused(s.arrayPos, s),
                                  (e = e.substring(0, t) + e.substring(t + o)),
                                  s.toggleBlinking(!0);
                              }
                              if ("`" === a.charAt(0)) {
                                for (
                                  ;
                                  "`" !== e.substr(t + i).charAt(0) &&
                                  (i++, !(t + i > e.length));

                                );
                                var l = e.substring(0, t),
                                  d = e.substring(l.length + 1, t + i),
                                  c = e.substring(t + i + 1);
                                (e = l + d + c), i--;
                              }
                              s.timeout = setTimeout(function () {
                                s.toggleBlinking(!1),
                                  t >= e.length
                                    ? s.doneTyping(e, t)
                                    : s.keepTyping(e, t, i),
                                  s.temporaryPause &&
                                    ((s.temporaryPause = !1),
                                    s.options.onTypingResumed(s.arrayPos, s));
                              }, n);
                            }, n))
                          : this.setPauseStatus(e, t, !0);
                      },
                    },
                    {
                      key: "keepTyping",
                      value: function (e, t, s) {
                        0 === t &&
                          (this.toggleBlinking(!1),
                          this.options.preStringTyped(this.arrayPos, this)),
                          (t += s);
                        var n = e.substr(0, t);
                        this.replaceText(n), this.typewrite(e, t);
                      },
                    },
                    {
                      key: "doneTyping",
                      value: function (e, t) {
                        var s = this;
                        this.options.onStringTyped(this.arrayPos, this),
                          this.toggleBlinking(!0),
                          (this.arrayPos === this.strings.length - 1 &&
                            (this.complete(),
                            !1 === this.loop ||
                              this.curLoop === this.loopCount)) ||
                            (this.timeout = setTimeout(function () {
                              s.backspace(e, t);
                            }, this.backDelay));
                      },
                    },
                    {
                      key: "backspace",
                      value: function (e, t) {
                        var s = this;
                        if (!0 !== this.pause.status) {
                          if (this.fadeOut) return this.initFadeOut();
                          this.toggleBlinking(!1);
                          var n = this.humanizer(this.backSpeed);
                          this.timeout = setTimeout(function () {
                            t = r.htmlParser.backSpaceHtmlChars(e, t, s);
                            var n = e.substr(0, t);
                            if ((s.replaceText(n), s.smartBackspace)) {
                              var i = s.strings[s.arrayPos + 1];
                              i && n === i.substr(0, t)
                                ? (s.stopNum = t)
                                : (s.stopNum = 0);
                            }
                            t > s.stopNum
                              ? (t--, s.backspace(e, t))
                              : t <= s.stopNum &&
                                (s.arrayPos++,
                                s.arrayPos === s.strings.length
                                  ? ((s.arrayPos = 0),
                                    s.options.onLastStringBackspaced(),
                                    s.shuffleStringsIfNeeded(),
                                    s.begin())
                                  : s.typewrite(
                                      s.strings[s.sequence[s.arrayPos]],
                                      t
                                    ));
                          }, n);
                        } else this.setPauseStatus(e, t, !1);
                      },
                    },
                    {
                      key: "complete",
                      value: function () {
                        this.options.onComplete(this),
                          this.loop
                            ? this.curLoop++
                            : (this.typingComplete = !0);
                      },
                    },
                    {
                      key: "setPauseStatus",
                      value: function (e, t, s) {
                        (this.pause.typewrite = s),
                          (this.pause.curString = e),
                          (this.pause.curStrPos = t);
                      },
                    },
                    {
                      key: "toggleBlinking",
                      value: function (e) {
                        this.cursor &&
                          (this.pause.status ||
                            (this.cursorBlinking !== e &&
                              ((this.cursorBlinking = e),
                              e
                                ? this.cursor.classList.add(
                                    "typed-cursor--blink"
                                  )
                                : this.cursor.classList.remove(
                                    "typed-cursor--blink"
                                  ))));
                      },
                    },
                    {
                      key: "humanizer",
                      value: function (e) {
                        return Math.round((Math.random() * e) / 2) + e;
                      },
                    },
                    {
                      key: "shuffleStringsIfNeeded",
                      value: function () {
                        this.shuffle &&
                          (this.sequence = this.sequence.sort(function () {
                            return Math.random() - 0.5;
                          }));
                      },
                    },
                    {
                      key: "initFadeOut",
                      value: function () {
                        var e = this;
                        return (
                          (this.el.className += " " + this.fadeOutClass),
                          this.cursor &&
                            (this.cursor.className += " " + this.fadeOutClass),
                          setTimeout(function () {
                            e.arrayPos++,
                              e.replaceText(""),
                              e.strings.length > e.arrayPos
                                ? e.typewrite(
                                    e.strings[e.sequence[e.arrayPos]],
                                    0
                                  )
                                : (e.typewrite(e.strings[0], 0),
                                  (e.arrayPos = 0));
                          }, this.fadeOutDelay)
                        );
                      },
                    },
                    {
                      key: "replaceText",
                      value: function (e) {
                        this.attr
                          ? this.el.setAttribute(this.attr, e)
                          : this.isInput
                          ? (this.el.value = e)
                          : "html" === this.contentType
                          ? (this.el.innerHTML = e)
                          : (this.el.textContent = e);
                      },
                    },
                    {
                      key: "bindFocusEvents",
                      value: function () {
                        var e = this;
                        this.isInput &&
                          (this.el.addEventListener("focus", function (t) {
                            e.stop();
                          }),
                          this.el.addEventListener("blur", function (t) {
                            (e.el.value && 0 !== e.el.value.length) ||
                              e.start();
                          }));
                      },
                    },
                    {
                      key: "insertCursor",
                      value: function () {
                        this.showCursor &&
                          (this.cursor ||
                            ((this.cursor = document.createElement("span")),
                            (this.cursor.className = "typed-cursor"),
                            this.cursor.setAttribute("aria-hidden", !0),
                            (this.cursor.innerHTML = this.cursorChar),
                            this.el.parentNode &&
                              this.el.parentNode.insertBefore(
                                this.cursor,
                                this.el.nextSibling
                              )));
                      },
                    },
                  ]),
                  e
                );
              })();
            (t.default = a), (e.exports = t.default);
          },
          function (e, t, s) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n,
              i =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var n in s)
                      Object.prototype.hasOwnProperty.call(s, n) &&
                        (e[n] = s[n]);
                  }
                  return e;
                },
              r = (function () {
                function e(e, t) {
                  for (var s = 0; s < t.length; s++) {
                    var n = t[s];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, s, n) {
                  return s && e(t.prototype, s), n && e(t, n), t;
                };
              })(),
              a = s(2),
              o = (n = a) && n.__esModule ? n : { default: n },
              l = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  r(e, [
                    {
                      key: "load",
                      value: function (e, t, s) {
                        if (
                          ((e.el =
                            "string" === typeof s
                              ? document.querySelector(s)
                              : s),
                          (e.options = i({}, o.default, t)),
                          (e.isInput = "input" === e.el.tagName.toLowerCase()),
                          (e.attr = e.options.attr),
                          (e.bindInputFocusEvents =
                            e.options.bindInputFocusEvents),
                          (e.showCursor = !e.isInput && e.options.showCursor),
                          (e.cursorChar = e.options.cursorChar),
                          (e.cursorBlinking = !0),
                          (e.elContent = e.attr
                            ? e.el.getAttribute(e.attr)
                            : e.el.textContent),
                          (e.contentType = e.options.contentType),
                          (e.typeSpeed = e.options.typeSpeed),
                          (e.startDelay = e.options.startDelay),
                          (e.backSpeed = e.options.backSpeed),
                          (e.smartBackspace = e.options.smartBackspace),
                          (e.backDelay = e.options.backDelay),
                          (e.fadeOut = e.options.fadeOut),
                          (e.fadeOutClass = e.options.fadeOutClass),
                          (e.fadeOutDelay = e.options.fadeOutDelay),
                          (e.isPaused = !1),
                          (e.strings = e.options.strings.map(function (e) {
                            return e.trim();
                          })),
                          "string" === typeof e.options.stringsElement
                            ? (e.stringsElement = document.querySelector(
                                e.options.stringsElement
                              ))
                            : (e.stringsElement = e.options.stringsElement),
                          e.stringsElement)
                        ) {
                          (e.strings = []),
                            (e.stringsElement.style.display = "none");
                          var n = Array.prototype.slice.apply(
                              e.stringsElement.children
                            ),
                            r = n.length;
                          if (r)
                            for (var a = 0; a < r; a += 1) {
                              var l = n[a];
                              e.strings.push(l.innerHTML.trim());
                            }
                        }
                        for (var a in ((e.strPos = 0),
                        (e.arrayPos = 0),
                        (e.stopNum = 0),
                        (e.loop = e.options.loop),
                        (e.loopCount = e.options.loopCount),
                        (e.curLoop = 0),
                        (e.shuffle = e.options.shuffle),
                        (e.sequence = []),
                        (e.pause = {
                          status: !1,
                          typewrite: !0,
                          curString: "",
                          curStrPos: 0,
                        }),
                        (e.typingComplete = !1),
                        e.strings))
                          e.sequence[a] = a;
                        (e.currentElContent = this.getCurrentElContent(e)),
                          (e.autoInsertCss = e.options.autoInsertCss),
                          this.appendAnimationCss(e);
                      },
                    },
                    {
                      key: "getCurrentElContent",
                      value: function (e) {
                        return e.attr
                          ? e.el.getAttribute(e.attr)
                          : e.isInput
                          ? e.el.value
                          : "html" === e.contentType
                          ? e.el.innerHTML
                          : e.el.textContent;
                      },
                    },
                    {
                      key: "appendAnimationCss",
                      value: function (e) {
                        var t = "data-typed-js-css";
                        if (
                          e.autoInsertCss &&
                          (e.showCursor || e.fadeOut) &&
                          !document.querySelector("[" + t + "]")
                        ) {
                          var s = document.createElement("style");
                          (s.type = "text/css"), s.setAttribute(t, !0);
                          var n = "";
                          e.showCursor &&
                            (n +=
                              "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                            e.fadeOut &&
                              (n +=
                                "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                            0 !== s.length &&
                              ((s.innerHTML = n), document.body.appendChild(s));
                        }
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = l;
            var d = new l();
            t.initializer = d;
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = {
              strings: [
                "These are the default values...",
                "You know what you should do?",
                "Use your own!",
                "Have a great day!",
              ],
              stringsElement: null,
              typeSpeed: 0,
              startDelay: 0,
              backSpeed: 0,
              smartBackspace: !0,
              shuffle: !1,
              backDelay: 700,
              fadeOut: !1,
              fadeOutClass: "typed-fade-out",
              fadeOutDelay: 500,
              loop: !1,
              loopCount: 1 / 0,
              showCursor: !0,
              cursorChar: "|",
              autoInsertCss: !0,
              attr: null,
              bindInputFocusEvents: !1,
              contentType: "html",
              onBegin: function (e) {},
              onComplete: function (e) {},
              preStringTyped: function (e, t) {},
              onStringTyped: function (e, t) {},
              onLastStringBackspaced: function (e) {},
              onTypingPaused: function (e, t) {},
              onTypingResumed: function (e, t) {},
              onReset: function (e) {},
              onStop: function (e, t) {},
              onStart: function (e, t) {},
              onDestroy: function (e) {},
            };
            (t.default = s), (e.exports = t.default);
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function () {
                function e(e, t) {
                  for (var s = 0; s < t.length; s++) {
                    var n = t[s];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, s, n) {
                  return s && e(t.prototype, s), n && e(t, n), t;
                };
              })(),
              n = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  s(e, [
                    {
                      key: "typeHtmlChars",
                      value: function (e, t, s) {
                        if ("html" !== s.contentType) return t;
                        var n = e.substr(t).charAt(0);
                        if ("<" === n || "&" === n) {
                          var i = "";
                          for (
                            i = "<" === n ? ">" : ";";
                            e.substr(t + 1).charAt(0) !== i &&
                            !(1 + ++t > e.length);

                          );
                          t++;
                        }
                        return t;
                      },
                    },
                    {
                      key: "backSpaceHtmlChars",
                      value: function (e, t, s) {
                        if ("html" !== s.contentType) return t;
                        var n = e.substr(t).charAt(0);
                        if (">" === n || ";" === n) {
                          var i = "";
                          for (
                            i = ">" === n ? "<" : "&";
                            e.substr(t - 1).charAt(0) !== i && !(--t < 0);

                          );
                          t--;
                        }
                        return t;
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = n;
            var i = new n();
            t.htmlParser = i;
          },
        ]);
      }),
        (e.exports = t());
    },
    2873: function (e, t, s) {
      "use strict";
      s.d(t, {
        t: function () {
          return y;
        },
        o: function () {
          return w;
        },
      });
      var n = s(7294),
        i = s(8116);
      function r(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function a(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => s.indexOf(e) < 0)
          .forEach((s) => {
            "undefined" === typeof e[s]
              ? (e[s] = t[s])
              : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0
              ? t[s].__swiper__
                ? (e[s] = t[s])
                : a(e[s], t[s])
              : (e[s] = t[s]);
          });
      }
      function o(e = {}) {
        return (
          e.navigation &&
          "undefined" === typeof e.navigation.nextEl &&
          "undefined" === typeof e.navigation.prevEl
        );
      }
      function l(e = {}) {
        return e.pagination && "undefined" === typeof e.pagination.el;
      }
      function d(e = {}) {
        return e.scrollbar && "undefined" === typeof e.scrollbar.el;
      }
      function c(e = "") {
        const t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          s = [];
        return (
          t.forEach((e) => {
            s.indexOf(e) < 0 && s.push(e);
          }),
          s.join(" ")
        );
      }
      const p = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function u(e, t) {
        let s = t.slidesPerView;
        if (t.breakpoints) {
          const e = i.ZP.prototype.getBreakpoint(t.breakpoints),
            n = e in t.breakpoints ? t.breakpoints[e] : void 0;
          n && n.slidesPerView && (s = n.slidesPerView);
        }
        let n = Math.ceil(parseFloat(t.loopedSlides || s, 10));
        return (n += t.loopAdditionalSlides), n > e.length && (n = e.length), n;
      }
      function f(e) {
        const t = [];
        return (
          n.Children.toArray(e).forEach((e) => {
            e.type && "SwiperSlide" === e.type.displayName
              ? t.push(e)
              : e.props &&
                e.props.children &&
                f(e.props.children).forEach((e) => t.push(e));
          }),
          t
        );
      }
      function h(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          n.Children.toArray(e).forEach((e) => {
            if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
            else if (e.props && e.props.slot && s[e.props.slot])
              s[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const n = f(e.props.children);
              n.length > 0
                ? n.forEach((e) => t.push(e))
                : s["container-end"].push(e);
            } else s["container-end"].push(e);
          }),
          { slides: t, slots: s }
        );
      }
      function m({
        swiper: e,
        slides: t,
        passedParams: s,
        changedParams: n,
        nextEl: i,
        prevEl: o,
        scrollbarEl: l,
        paginationEl: d,
      }) {
        const c = n.filter((e) => "children" !== e && "direction" !== e),
          {
            params: p,
            pagination: u,
            navigation: f,
            scrollbar: h,
            virtual: m,
            thumbs: g,
          } = e;
        let v, y, b, w, C;
        n.includes("thumbs") &&
          s.thumbs &&
          s.thumbs.swiper &&
          p.thumbs &&
          !p.thumbs.swiper &&
          (v = !0),
          n.includes("controller") &&
            s.controller &&
            s.controller.control &&
            p.controller &&
            !p.controller.control &&
            (y = !0),
          n.includes("pagination") &&
            s.pagination &&
            (s.pagination.el || d) &&
            (p.pagination || !1 === p.pagination) &&
            u &&
            !u.el &&
            (b = !0),
          n.includes("scrollbar") &&
            s.scrollbar &&
            (s.scrollbar.el || l) &&
            (p.scrollbar || !1 === p.scrollbar) &&
            h &&
            !h.el &&
            (w = !0),
          n.includes("navigation") &&
            s.navigation &&
            (s.navigation.prevEl || o) &&
            (s.navigation.nextEl || i) &&
            (p.navigation || !1 === p.navigation) &&
            f &&
            !f.prevEl &&
            !f.nextEl &&
            (C = !0);
        if (
          (c.forEach((t) => {
            if (r(p[t]) && r(s[t])) a(p[t], s[t]);
            else {
              const i = s[t];
              (!0 !== i && !1 !== i) ||
              ("navigation" !== t && "pagination" !== t && "scrollbar" !== t)
                ? (p[t] = s[t])
                : !1 === i &&
                  e[(n = t)] &&
                  (e[n].destroy(),
                  "navigation" === n
                    ? ((p[n].prevEl = void 0),
                      (p[n].nextEl = void 0),
                      (e[n].prevEl = void 0),
                      (e[n].nextEl = void 0))
                    : ((p[n].el = void 0), (e[n].el = void 0)));
            }
            var n;
          }),
          n.includes("children") && m && p.virtual.enabled
            ? ((m.slides = t), m.update(!0))
            : n.includes("children") &&
              e.lazy &&
              e.params.lazy.enabled &&
              e.lazy.load(),
          v)
        ) {
          g.init() && g.update(!0);
        }
        y && (e.controller.control = p.controller.control),
          b && (d && (p.pagination.el = d), u.init(), u.render(), u.update()),
          w &&
            (l && (p.scrollbar.el = l),
            h.init(),
            h.updateSize(),
            h.setTranslate()),
          C &&
            (i && (p.navigation.nextEl = i),
            o && (p.navigation.prevEl = o),
            f.init(),
            f.update()),
          n.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext),
          n.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev),
          n.includes("direction") && e.changeDirection(s.direction, !1),
          e.update();
      }
      function g(e, t) {
        return "undefined" === typeof window
          ? (0, n.useEffect)(e, t)
          : (0, n.useLayoutEffect)(e, t);
      }
      function v() {
        return (v =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = arguments[t];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      const y = (0, n.forwardRef)(
        (
          {
            className: e,
            tag: t = "div",
            wrapperTag: s = "div",
            children: f,
            onSwiper: y,
            ...b
          } = {},
          w
        ) => {
          let C = !1;
          const [S, E] = (0, n.useState)("swiper"),
            [T, x] = (0, n.useState)(null),
            [k, P] = (0, n.useState)(!1),
            O = (0, n.useRef)(!1),
            M = (0, n.useRef)(null),
            $ = (0, n.useRef)(null),
            L = (0, n.useRef)(null),
            _ = (0, n.useRef)(null),
            I = (0, n.useRef)(null),
            A = (0, n.useRef)(null),
            z = (0, n.useRef)(null),
            N = (0, n.useRef)(null),
            {
              params: B,
              passedParams: D,
              rest: G,
              events: j,
            } = (function (e = {}) {
              const t = { on: {} },
                s = {},
                n = {};
              a(t, i.ZP.defaults),
                a(t, i.ZP.extendedDefaults),
                (t._emitClasses = !0),
                (t.init = !1);
              const o = {},
                l = p.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(e).forEach((i) => {
                  l.indexOf(i) >= 0
                    ? r(e[i])
                      ? ((t[i] = {}), (n[i] = {}), a(t[i], e[i]), a(n[i], e[i]))
                      : ((t[i] = e[i]), (n[i] = e[i]))
                    : 0 === i.search(/on[A-Z]/) && "function" === typeof e[i]
                    ? (s[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i])
                    : (o[i] = e[i]);
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
                }),
                { params: t, passedParams: n, rest: o, events: s }
              );
            })(b),
            { slides: F, slots: H } = h(f),
            R = () => {
              P(!k);
            };
          if (
            (Object.assign(B.on, {
              _containerClasses(e, t) {
                E(t);
              },
            }),
            !M.current &&
              (Object.assign(B.on, j),
              (C = !0),
              ($.current = (function (e) {
                return new i.ZP(e);
              })(B)),
              ($.current.loopCreate = () => {}),
              ($.current.loopDestroy = () => {}),
              B.loop && ($.current.loopedSlides = u(F, B)),
              $.current.virtual && $.current.params.virtual.enabled))
          ) {
            $.current.virtual.slides = F;
            const e = {
              cache: !1,
              slides: F,
              renderExternal: x,
              renderExternalUpdate: !1,
            };
            a($.current.params.virtual, e),
              a($.current.originalParams.virtual, e);
          }
          $.current && $.current.on("_beforeBreakpoint", R);
          return (
            (0, n.useEffect)(() => () => {
              $.current && $.current.off("_beforeBreakpoint", R);
            }),
            (0, n.useEffect)(() => {
              !O.current &&
                $.current &&
                ($.current.emitSlidesClasses(), (O.current = !0));
            }),
            g(() => {
              if ((w && (w.current = M.current), M.current))
                return (
                  (function (
                    {
                      el: e,
                      nextEl: t,
                      prevEl: s,
                      paginationEl: n,
                      scrollbarEl: i,
                      swiper: r,
                    },
                    a
                  ) {
                    o(a) &&
                      t &&
                      s &&
                      ((r.params.navigation.nextEl = t),
                      (r.originalParams.navigation.nextEl = t),
                      (r.params.navigation.prevEl = s),
                      (r.originalParams.navigation.prevEl = s)),
                      l(a) &&
                        n &&
                        ((r.params.pagination.el = n),
                        (r.originalParams.pagination.el = n)),
                      d(a) &&
                        i &&
                        ((r.params.scrollbar.el = i),
                        (r.originalParams.scrollbar.el = i)),
                      r.init(e);
                  })(
                    {
                      el: M.current,
                      nextEl: I.current,
                      prevEl: A.current,
                      paginationEl: z.current,
                      scrollbarEl: N.current,
                      swiper: $.current,
                    },
                    B
                  ),
                  y && y($.current),
                  () => {
                    $.current &&
                      !$.current.destroyed &&
                      $.current.destroy(!0, !1);
                  }
                );
            }, []),
            g(() => {
              !C &&
                j &&
                $.current &&
                Object.keys(j).forEach((e) => {
                  $.current.on(e, j[e]);
                });
              const e = (function (e, t, s, n) {
                const i = [];
                if (!t) return i;
                const a = (e) => {
                    i.indexOf(e) < 0 && i.push(e);
                  },
                  o = n.map((e) => e.key),
                  l = s.map((e) => e.key);
                return (
                  o.join("") !== l.join("") && a("children"),
                  n.length !== s.length && a("children"),
                  p
                    .filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((s) => {
                      if (s in e && s in t)
                        if (r(e[s]) && r(t[s])) {
                          const n = Object.keys(e[s]),
                            i = Object.keys(t[s]);
                          n.length !== i.length
                            ? a(s)
                            : (n.forEach((n) => {
                                e[s][n] !== t[s][n] && a(s);
                              }),
                              i.forEach((n) => {
                                e[s][n] !== t[s][n] && a(s);
                              }));
                        } else e[s] !== t[s] && a(s);
                    }),
                  i
                );
              })(D, L.current, F, _.current);
              return (
                (L.current = D),
                (_.current = F),
                e.length &&
                  $.current &&
                  !$.current.destroyed &&
                  m({
                    swiper: $.current,
                    slides: F,
                    passedParams: D,
                    changedParams: e,
                    nextEl: I.current,
                    prevEl: A.current,
                    scrollbarEl: N.current,
                    paginationEl: z.current,
                  }),
                () => {
                  j &&
                    $.current &&
                    Object.keys(j).forEach((e) => {
                      $.current.off(e, j[e]);
                    });
                }
              );
            }),
            g(() => {
              var e;
              !(e = $.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            }, [T]),
            n.createElement(
              t,
              v({ ref: M, className: c(`${S}${e ? ` ${e}` : ""}`) }, G),
              H["container-start"],
              o(B) &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement("div", {
                    ref: A,
                    className: "swiper-button-prev",
                  }),
                  n.createElement("div", {
                    ref: I,
                    className: "swiper-button-next",
                  })
                ),
              d(B) &&
                n.createElement("div", {
                  ref: N,
                  className: "swiper-scrollbar",
                }),
              l(B) &&
                n.createElement("div", {
                  ref: z,
                  className: "swiper-pagination",
                }),
              n.createElement(
                s,
                { className: "swiper-wrapper" },
                H["wrapper-start"],
                B.virtual
                  ? (function (e, t, s) {
                      if (!s) return null;
                      const i = e.isHorizontal()
                        ? {
                            [e.rtlTranslate
                              ? "right"
                              : "left"]: `${s.offset}px`,
                          }
                        : { top: `${s.offset}px` };
                      return t
                        .filter((e, t) => t >= s.from && t <= s.to)
                        .map((t) => n.cloneElement(t, { swiper: e, style: i }));
                    })($.current, F, T)
                  : !B.loop || ($.current && $.current.destroyed)
                  ? F.map((e) => n.cloneElement(e, { swiper: $.current }))
                  : (function (e, t, s) {
                      const i = t.map((t, s) =>
                        n.cloneElement(t, {
                          swiper: e,
                          "data-swiper-slide-index": s,
                        })
                      );
                      function r(e, t, i) {
                        return n.cloneElement(e, {
                          key: `${e.key}-duplicate-${t}-${i}`,
                          className: `${e.props.className || ""} ${
                            s.slideDuplicateClass
                          }`,
                        });
                      }
                      if (s.loopFillGroupWithBlank) {
                        const e =
                          s.slidesPerGroup - (i.length % s.slidesPerGroup);
                        if (e !== s.slidesPerGroup)
                          for (let t = 0; t < e; t += 1) {
                            const e = n.createElement("div", {
                              className: `${s.slideClass} ${s.slideBlankClass}`,
                            });
                            i.push(e);
                          }
                      }
                      "auto" !== s.slidesPerView ||
                        s.loopedSlides ||
                        (s.loopedSlides = i.length);
                      const a = u(i, s),
                        o = [],
                        l = [];
                      return (
                        i.forEach((e, t) => {
                          t < a && l.push(r(e, t, "prepend")),
                            t < i.length &&
                              t >= i.length - a &&
                              o.push(r(e, t, "append"));
                        }),
                        e && (e.loopedSlides = a),
                        [...o, ...i, ...l]
                      );
                    })($.current, F, B),
                H["wrapper-end"]
              ),
              H["container-end"]
            )
          );
        }
      );
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = arguments[t];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      y.displayName = "Swiper";
      const w = (0, n.forwardRef)(
        (
          {
            tag: e = "div",
            children: t,
            className: s = "",
            swiper: i,
            zoom: r,
            virtualIndex: a,
            ...o
          } = {},
          l
        ) => {
          const d = (0, n.useRef)(null),
            [p, u] = (0, n.useState)("swiper-slide");
          function f(e, t, s) {
            t === d.current && u(s);
          }
          let h;
          g(() => {
            if ((l && (l.current = d.current), d.current && i)) {
              if (!i.destroyed)
                return (
                  i.on("_slideClass", f),
                  () => {
                    i && i.off("_slideClass", f);
                  }
                );
              "swiper-slide" !== p && u("swiper-slide");
            }
          }),
            g(() => {
              i && d.current && u(i.getSlideClasses(d.current));
            }, [i]),
            "function" === typeof t &&
              (h = {
                isActive:
                  p.indexOf("swiper-slide-active") >= 0 ||
                  p.indexOf("swiper-slide-duplicate-active") >= 0,
                isVisible: p.indexOf("swiper-slide-visible") >= 0,
                isDuplicate: p.indexOf("swiper-slide-duplicate") >= 0,
                isPrev:
                  p.indexOf("swiper-slide-prev") >= 0 ||
                  p.indexOf("swiper-slide-duplicate-prev") >= 0,
                isNext:
                  p.indexOf("swiper-slide-next") >= 0 ||
                  p.indexOf("swiper-slide-duplicate-next") >= 0,
              });
          const m = () => ("function" === typeof t ? t(h) : t);
          return n.createElement(
            e,
            b(
              {
                ref: d,
                className: c(`${p}${s ? ` ${s}` : ""}`),
                "data-swiper-slide-index": a,
              },
              o
            ),
            r
              ? n.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof r ? r : void 0,
                  },
                  m()
                )
              : m()
          );
        }
      );
      w.displayName = "SwiperSlide";
    },
    8116: function (e, t, s) {
      "use strict";
      function n(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function i(e = {}, t = {}) {
        Object.keys(t).forEach((s) => {
          "undefined" === typeof e[s]
            ? (e[s] = t[s])
            : n(t[s]) &&
              n(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              i(e[s], t[s]);
        });
      }
      s.d(t, {
        pt: function () {
          return J;
        },
        xW: function () {
          return ee;
        },
        W_: function () {
          return U;
        },
        tl: function () {
          return K;
        },
        ZP: function () {
          return Y;
        },
      });
      const r = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function a() {
        const e = "undefined" !== typeof document ? document : {};
        return i(e, r), e;
      }
      const o = {
        document: r,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        const e = "undefined" !== typeof window ? window : {};
        return i(e, o), e;
      }
      class d extends Array {
        constructor(e) {
          super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this);
        }
      }
      function c(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...c(e)) : t.push(e);
          }),
          t
        );
      }
      function p(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function u(e, t) {
        const s = l(),
          n = a();
        let i = [];
        if (!t && e instanceof d) return e;
        if (!e) return new d(i);
        if ("string" === typeof e) {
          const s = e.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let e = "div";
            0 === s.indexOf("<li") && (e = "ul"),
              0 === s.indexOf("<tr") && (e = "tbody"),
              (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
              0 === s.indexOf("<tbody") && (e = "table"),
              0 === s.indexOf("<option") && (e = "select");
            const t = n.createElement(e);
            t.innerHTML = s;
            for (let s = 0; s < t.childNodes.length; s += 1)
              i.push(t.childNodes[s]);
          } else
            i = (function (e, t) {
              if ("string" !== typeof e) return [e];
              const s = [],
                n = t.querySelectorAll(e);
              for (let i = 0; i < n.length; i += 1) s.push(n[i]);
              return s;
            })(e.trim(), t || n);
        } else if (e.nodeType || e === s || e === n) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof d) return e;
          i = e;
        }
        return new d(
          (function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
              -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
          })(i)
        );
      }
      u.fn = d.prototype;
      const f = "resize scroll".split(" ");
      function h(e) {
        return function (...t) {
          if ("undefined" === typeof t[0]) {
            for (let t = 0; t < this.length; t += 1)
              f.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      h("click"),
        h("blur"),
        h("focus"),
        h("focusin"),
        h("focusout"),
        h("keyup"),
        h("keydown"),
        h("keypress"),
        h("submit"),
        h("change"),
        h("mousedown"),
        h("mousemove"),
        h("mouseup"),
        h("mouseenter"),
        h("mouseleave"),
        h("mouseout"),
        h("mouseover"),
        h("touchstart"),
        h("touchend"),
        h("touchmove"),
        h("resize"),
        h("scroll");
      const m = {
        addClass: function (...e) {
          const t = c(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = c(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = c(e.map((e) => e.split(" ")));
          return (
            p(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = c(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 === arguments.length) this[s].setAttribute(e, t);
            else
              for (const t in e)
                (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, s, n, i] = e;
          function r(e) {
            const t = e.target;
            if (!t) return;
            const i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), u(t).is(s))) n.apply(t, i);
            else {
              const e = u(t).parents();
              for (let t = 0; t < e.length; t += 1)
                u(e[t]).is(s) && n.apply(e[t], i);
            }
          }
          function a(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
          }
          "function" === typeof e[1] && (([t, n, i] = e), (s = void 0)),
            i || (i = !1);
          const o = t.split(" ");
          let l;
          for (let d = 0; d < this.length; d += 1) {
            const e = this[d];
            if (s)
              for (l = 0; l < o.length; l += 1) {
                const t = o[l];
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({
                    listener: n,
                    proxyListener: r,
                  }),
                  e.addEventListener(t, r, i);
              }
            else
              for (l = 0; l < o.length; l += 1) {
                const t = o[l];
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: n, proxyListener: a }),
                  e.addEventListener(t, a, i);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, s, n, i] = e;
          "function" === typeof e[1] && (([t, n, i] = e), (s = void 0)),
            i || (i = !1);
          const r = t.split(" ");
          for (let a = 0; a < r.length; a += 1) {
            const e = r[a];
            for (let t = 0; t < this.length; t += 1) {
              const r = this[t];
              let a;
              if (
                (!s && r.dom7Listeners
                  ? (a = r.dom7Listeners[e])
                  : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[e]),
                a && a.length)
              )
                for (let t = a.length - 1; t >= 0; t -= 1) {
                  const s = a[t];
                  (n && s.listener === n) ||
                  (n &&
                    s.listener &&
                    s.listener.dom7proxy &&
                    s.listener.dom7proxy === n)
                    ? (r.removeEventListener(e, s.proxyListener, i),
                      a.splice(t, 1))
                    : n ||
                      (r.removeEventListener(e, s.proxyListener, i),
                      a.splice(t, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = l(),
            s = e[0].split(" "),
            n = e[1];
          for (let i = 0; i < s.length; i += 1) {
            const r = s[i];
            for (let s = 0; s < this.length; s += 1) {
              const i = this[s];
              if (t.CustomEvent) {
                const s = new t.CustomEvent(r, {
                  detail: n,
                  bubbles: !0,
                  cancelable: !0,
                });
                (i.dom7EventData = e.filter((e, t) => t > 0)),
                  i.dispatchEvent(s),
                  (i.dom7EventData = []),
                  delete i.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function s(n) {
                n.target === this &&
                  (e.call(this, n), t.off("transitionend", s));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = l();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = l(),
              t = a(),
              s = this[0],
              n = s.getBoundingClientRect(),
              i = t.body,
              r = s.clientTop || i.clientTop || 0,
              o = s.clientLeft || i.clientLeft || 0,
              d = s === e ? e.scrollY : s.scrollTop,
              c = s === e ? e.scrollX : s.scrollLeft;
            return { top: n.top + d - r, left: n.left + c - o };
          }
          return null;
        },
        css: function (e, t) {
          const s = l();
          let n;
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (const t in e) this[n].style[t] = e[t];
              return this;
            }
            if (this[0])
              return s.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, s) => {
                e.apply(t, [t, s]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = l(),
            s = a(),
            n = this[0];
          let i, r;
          if (!n || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (n.matches) return n.matches(e);
            if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
            if (n.msMatchesSelector) return n.msMatchesSelector(e);
            for (i = u(e), r = 0; r < i.length; r += 1)
              if (i[r] === n) return !0;
            return !1;
          }
          if (e === s) return n === s;
          if (e === t) return n === t;
          if (e.nodeType || e instanceof d) {
            for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
              if (i[r] === n) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          const t = this.length;
          if (e > t - 1) return u([]);
          if (e < 0) {
            const s = t + e;
            return u(s < 0 ? [] : [this[s]]);
          }
          return u([this[e]]);
        },
        append: function (...e) {
          let t;
          const s = a();
          for (let n = 0; n < e.length; n += 1) {
            t = e[n];
            for (let e = 0; e < this.length; e += 1)
              if ("string" === typeof t) {
                const n = s.createElement("div");
                for (n.innerHTML = t; n.firstChild; )
                  this[e].appendChild(n.firstChild);
              } else if (t instanceof d)
                for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = a();
          let s, n;
          for (s = 0; s < this.length; s += 1)
            if ("string" === typeof e) {
              const i = t.createElement("div");
              for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
                this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
            } else if (e instanceof d)
              for (n = 0; n < e.length; n += 1)
                this[s].insertBefore(e[n], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                u(this[0].nextElementSibling).is(e)
                ? u([this[0].nextElementSibling])
                : u([])
              : this[0].nextElementSibling
              ? u([this[0].nextElementSibling])
              : u([])
            : u([]);
        },
        nextAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return u([]);
          for (; s.nextElementSibling; ) {
            const n = s.nextElementSibling;
            e ? u(n).is(e) && t.push(n) : t.push(n), (s = n);
          }
          return u(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && u(t.previousElementSibling).is(e)
                ? u([t.previousElementSibling])
                : u([])
              : t.previousElementSibling
              ? u([t.previousElementSibling])
              : u([]);
          }
          return u([]);
        },
        prevAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return u([]);
          for (; s.previousElementSibling; ) {
            const n = s.previousElementSibling;
            e ? u(n).is(e) && t.push(n) : t.push(n), (s = n);
          }
          return u(t);
        },
        parent: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1)
            null !== this[s].parentNode &&
              (e
                ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode)
                : t.push(this[s].parentNode));
          return u(t);
        },
        parents: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            let n = this[s].parentNode;
            for (; n; )
              e ? u(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
          }
          return u(t);
        },
        closest: function (e) {
          let t = this;
          return "undefined" === typeof e
            ? u([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s].querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) t.push(n[e]);
          }
          return u(t);
        },
        children: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s].children;
            for (let s = 0; s < n.length; s += 1)
              (e && !u(n[s]).is(e)) || t.push(n[s]);
          }
          return u(t);
        },
        filter: function (e) {
          return u(p(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(m).forEach((e) => {
        Object.defineProperty(u.fn, e, { value: m[e], writable: !0 });
      });
      var g = u;
      function v(e, t = 0) {
        return setTimeout(e, t);
      }
      function y() {
        return Date.now();
      }
      function b(e, t = "x") {
        const s = l();
        let n, i, r;
        const a = (function (e) {
          const t = l();
          let s;
          return (
            t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
          );
        })(e);
        return (
          s.WebKitCSSMatrix
            ? ((i = a.transform || a.webkitTransform),
              i.split(",").length > 6 &&
                (i = i
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
            : ((r =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (n = r.toString().split(","))),
          "x" === t &&
            (i = s.WebKitCSSMatrix
              ? r.m41
              : 16 === n.length
              ? parseFloat(n[12])
              : parseFloat(n[4])),
          "y" === t &&
            (i = s.WebKitCSSMatrix
              ? r.m42
              : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])),
          i || 0
        );
      }
      function w(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function C(...e) {
        const t = Object(e[0]),
          s = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
          const r = e[i];
          if (
            void 0 !== r &&
            null !== r &&
            ((n = r),
            !("undefined" !== typeof window &&
            "undefined" !== typeof window.HTMLElement
              ? n instanceof HTMLElement
              : n && (1 === n.nodeType || 11 === n.nodeType)))
          ) {
            const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
            for (let s = 0, n = e.length; s < n; s += 1) {
              const n = e[s],
                i = Object.getOwnPropertyDescriptor(r, n);
              void 0 !== i &&
                i.enumerable &&
                (w(t[n]) && w(r[n])
                  ? r[n].__swiper__
                    ? (t[n] = r[n])
                    : C(t[n], r[n])
                  : !w(t[n]) && w(r[n])
                  ? ((t[n] = {}),
                    r[n].__swiper__ ? (t[n] = r[n]) : C(t[n], r[n]))
                  : (t[n] = r[n]));
            }
          }
        }
        var n;
        return t;
      }
      function S(e, t, s) {
        e.style.setProperty(t, s);
      }
      function E({ swiper: e, targetPosition: t, side: s }) {
        const n = l(),
          i = -e.translate;
        let r,
          a = null;
        const o = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(e.cssModeFrameID);
        const d = t > i ? "next" : "prev",
          c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
          p = () => {
            (r = new Date().getTime()), null === a && (a = r);
            const l = Math.max(Math.min((r - a) / o, 1), 0),
              d = 0.5 - Math.cos(l * Math.PI) / 2;
            let u = i + d * (t - i);
            if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
              return (
                (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [s]: u });
                }),
                void n.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = n.requestAnimationFrame(p);
          };
        p();
      }
      let T, x, k;
      function P() {
        return (
          T ||
            (T = (function () {
              const e = l(),
                t = a();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const s = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, s);
                  } catch (s) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          T
        );
      }
      function O(e = {}) {
        return (
          x ||
            (x = (function ({ userAgent: e } = {}) {
              const t = P(),
                s = l(),
                n = s.navigator.platform,
                i = e || s.navigator.userAgent,
                r = { ios: !1, android: !1 },
                a = s.screen.width,
                o = s.screen.height,
                d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = i.match(/(iPad).*OS\s([\d_]+)/);
              const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === n;
              let h = "MacIntel" === n;
              return (
                !c &&
                  h &&
                  t.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${o}`) >= 0 &&
                  ((c = i.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, "13_0_0"]),
                  (h = !1)),
                d && !f && ((r.os = "android"), (r.android = !0)),
                (c || u || p) && ((r.os = "ios"), (r.ios = !0)),
                r
              );
            })(e)),
          x
        );
      }
      function M() {
        return (
          k ||
            (k = (function () {
              const e = l();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          k
        );
      }
      var $ = {
        on(e, t, s) {
          const n = this;
          if ("function" !== typeof t) return n;
          const i = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              n.eventsListeners[e] || (n.eventsListeners[e] = []),
                n.eventsListeners[e][i](t);
            }),
            n
          );
        },
        once(e, t, s) {
          const n = this;
          if ("function" !== typeof t) return n;
          function i(...s) {
            n.off(e, i),
              i.__emitterProxy && delete i.__emitterProxy,
              t.apply(n, s);
          }
          return (i.__emitterProxy = t), n.on(e, i, s);
        },
        onAny(e, t) {
          const s = this;
          if ("function" !== typeof e) return s;
          const n = t ? "unshift" : "push";
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((n, i) => {
                      (n === t ||
                        (n.__emitterProxy && n.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(i, 1);
                    });
              }),
              s)
            : s;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let s, n, i;
          "string" === typeof e[0] || Array.isArray(e[0])
            ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
            : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
            n.unshift(i);
          return (
            (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(i, [e, ...n]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(i, n);
                  });
            }),
            t
          );
        },
      };
      function L({ swiper: e, runCallbacks: t, direction: s, step: n }) {
        const { activeIndex: i, previousIndex: r } = e;
        let a = s;
        if (
          (a || (a = i > r ? "next" : i < r ? "prev" : "reset"),
          e.emit(`transition${n}`),
          t && i !== r)
        ) {
          if ("reset" === a) return void e.emit(`slideResetTransition${n}`);
          e.emit(`slideChangeTransition${n}`),
            "next" === a
              ? e.emit(`slideNextTransition${n}`)
              : e.emit(`slidePrevTransition${n}`);
        }
      }
      function _(e) {
        const t = this,
          s = a(),
          n = l(),
          i = t.touchEventsData,
          { params: r, touches: o, enabled: d } = t;
        if (!d) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let c = e;
        c.originalEvent && (c = c.originalEvent);
        let p = g(c.target);
        if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length)
          return;
        if (
          ((i.isTouchEvent = "touchstart" === c.type),
          !i.isTouchEvent && "which" in c && 3 === c.which)
        )
          return;
        if (!i.isTouchEvent && "button" in c && c.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        !!r.noSwipingClass &&
          "" !== r.noSwipingClass &&
          c.target &&
          c.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (p = g(e.path[0]));
        const u = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          f = !(!c.target || !c.target.shadowRoot);
        if (
          r.noSwiping &&
          (f
            ? (function (e, t = this) {
                return (function t(s) {
                  return s && s !== a() && s !== l()
                    ? (s.assignedSlot && (s = s.assignedSlot),
                      s.closest(e) || t(s.getRootNode().host))
                    : null;
                })(t);
              })(u, c.target)
            : p.closest(u)[0])
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
          (o.currentY =
            "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
        const h = o.currentX,
          m = o.currentY,
          v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (v && (h <= b || h >= n.innerWidth - b)) {
          if ("prevent" !== v) return;
          e.preventDefault();
        }
        if (
          (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = h),
          (o.startY = m),
          (i.touchStartTime = y()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (i.allowThresholdMove = !1),
          "touchstart" !== c.type)
        ) {
          let e = !0;
          p.is(i.focusableElements) && (e = !1),
            s.activeElement &&
              g(s.activeElement).is(i.focusableElements) &&
              s.activeElement !== p[0] &&
              s.activeElement.blur();
          const n = e && t.allowTouchMove && r.touchStartPreventDefault;
          (!r.touchStartForcePreventDefault && !n) ||
            p[0].isContentEditable ||
            c.preventDefault();
        }
        t.emit("touchStart", c);
      }
      function I(e) {
        const t = a(),
          s = this,
          n = s.touchEventsData,
          { params: i, touches: r, rtlTranslate: o, enabled: l } = s;
        if (!l) return;
        let d = e;
        if ((d.originalEvent && (d = d.originalEvent), !n.isTouched))
          return void (
            n.startMoving &&
            n.isScrolling &&
            s.emit("touchMoveOpposite", d)
          );
        if (n.isTouchEvent && "touchmove" !== d.type) return;
        const c =
            "touchmove" === d.type &&
            d.targetTouches &&
            (d.targetTouches[0] || d.changedTouches[0]),
          p = "touchmove" === d.type ? c.pageX : d.pageX,
          u = "touchmove" === d.type ? c.pageY : d.pageY;
        if (d.preventedByNestedSwiper)
          return (r.startX = p), void (r.startY = u);
        if (!s.allowTouchMove)
          return (
            (s.allowClick = !1),
            void (
              n.isTouched &&
              (Object.assign(r, {
                startX: p,
                startY: u,
                currentX: p,
                currentY: u,
              }),
              (n.touchStartTime = y()))
            )
          );
        if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (s.isVertical()) {
            if (
              (u < r.startY && s.translate <= s.maxTranslate()) ||
              (u > r.startY && s.translate >= s.minTranslate())
            )
              return (n.isTouched = !1), void (n.isMoved = !1);
          } else if (
            (p < r.startX && s.translate <= s.maxTranslate()) ||
            (p > r.startX && s.translate >= s.minTranslate())
          )
            return;
        if (
          n.isTouchEvent &&
          t.activeElement &&
          d.target === t.activeElement &&
          g(d.target).is(n.focusableElements)
        )
          return (n.isMoved = !0), void (s.allowClick = !1);
        if (
          (n.allowTouchCallbacks && s.emit("touchMove", d),
          d.targetTouches && d.targetTouches.length > 1)
        )
          return;
        (r.currentX = p), (r.currentY = u);
        const f = r.currentX - r.startX,
          h = r.currentY - r.startY;
        if (
          s.params.threshold &&
          Math.sqrt(f ** 2 + h ** 2) < s.params.threshold
        )
          return;
        if ("undefined" === typeof n.isScrolling) {
          let e;
          (s.isHorizontal() && r.currentY === r.startY) ||
          (s.isVertical() && r.currentX === r.startX)
            ? (n.isScrolling = !1)
            : f * f + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
              (n.isScrolling = s.isHorizontal()
                ? e > i.touchAngle
                : 90 - e > i.touchAngle));
        }
        if (
          (n.isScrolling && s.emit("touchMoveOpposite", d),
          "undefined" === typeof n.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (n.startMoving = !0)),
          n.isScrolling)
        )
          return void (n.isTouched = !1);
        if (!n.startMoving) return;
        (s.allowClick = !1),
          !i.cssMode && d.cancelable && d.preventDefault(),
          i.touchMoveStopPropagation && !i.nested && d.stopPropagation(),
          n.isMoved ||
            (i.loop && !i.cssMode && s.loopFix(),
            (n.startTranslate = s.getTranslate()),
            s.setTransition(0),
            s.animating &&
              s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (n.allowMomentumBounce = !1),
            !i.grabCursor ||
              (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
              s.setGrabCursor(!0),
            s.emit("sliderFirstMove", d)),
          s.emit("sliderMove", d),
          (n.isMoved = !0);
        let m = s.isHorizontal() ? f : h;
        (r.diff = m),
          (m *= i.touchRatio),
          o && (m = -m),
          (s.swipeDirection = m > 0 ? "prev" : "next"),
          (n.currentTranslate = m + n.startTranslate);
        let v = !0,
          b = i.resistanceRatio;
        if (
          (i.touchReleaseOnEdges && (b = 0),
          m > 0 && n.currentTranslate > s.minTranslate()
            ? ((v = !1),
              i.resistance &&
                (n.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + n.startTranslate + m) ** b))
            : m < 0 &&
              n.currentTranslate < s.maxTranslate() &&
              ((v = !1),
              i.resistance &&
                (n.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - n.startTranslate - m) ** b)),
          v && (d.preventedByNestedSwiper = !0),
          !s.allowSlideNext &&
            "next" === s.swipeDirection &&
            n.currentTranslate < n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          !s.allowSlidePrev &&
            "prev" === s.swipeDirection &&
            n.currentTranslate > n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          s.allowSlidePrev ||
            s.allowSlideNext ||
            (n.currentTranslate = n.startTranslate),
          i.threshold > 0)
        ) {
          if (!(Math.abs(m) > i.threshold || n.allowThresholdMove))
            return void (n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove)
            return (
              (n.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (n.currentTranslate = n.startTranslate),
              void (r.diff = s.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        i.followFinger &&
          !i.cssMode &&
          (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
            i.watchSlidesProgress) &&
            (s.updateActiveIndex(), s.updateSlidesClasses()),
          s.params.freeMode &&
            i.freeMode.enabled &&
            s.freeMode &&
            s.freeMode.onTouchMove(),
          s.updateProgress(n.currentTranslate),
          s.setTranslate(n.currentTranslate));
      }
      function A(e) {
        const t = this,
          s = t.touchEventsData,
          {
            params: n,
            touches: i,
            rtlTranslate: r,
            slidesGrid: a,
            enabled: o,
          } = t;
        if (!o) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          s.allowTouchCallbacks && t.emit("touchEnd", l),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return (
            s.isMoved && n.grabCursor && t.setGrabCursor(!1),
            (s.isMoved = !1),
            void (s.startMoving = !1)
          );
        n.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = y(),
          c = d - s.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            c < 300 &&
              d - s.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((s.lastClickTime = y()),
          v(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !t.swipeDirection ||
            0 === i.diff ||
            s.currentTranslate === s.startTranslate)
        )
          return (
            (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
          );
        let p;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (p = n.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -s.currentTranslate),
          n.cssMode)
        )
          return;
        if (t.params.freeMode && n.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: p });
        let u = 0,
          f = t.slidesSizesGrid[0];
        for (
          let g = 0;
          g < a.length;
          g += g < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
        ) {
          const e = g < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          "undefined" !== typeof a[g + e]
            ? p >= a[g] && p < a[g + e] && ((u = g), (f = a[g + e] - a[g]))
            : p >= a[g] && ((u = g), (f = a[a.length - 1] - a[a.length - 2]));
        }
        const h = (p - a[u]) / f,
          m = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (c > n.longSwipesMs) {
          if (!n.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (h >= n.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
            "prev" === t.swipeDirection &&
              (h > 1 - n.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u));
        } else {
          if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(u + m)
              : t.slideTo(u)
            : ("next" === t.swipeDirection && t.slideTo(u + m),
              "prev" === t.swipeDirection && t.slideTo(u));
        }
      }
      function z() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = i),
          (e.allowSlideNext = n),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function N(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function B() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
        if (!n) return;
        let i;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let D = !1;
      function G() {}
      const j = (e, t) => {
        const s = a(),
          {
            params: n,
            touchEvents: i,
            el: r,
            wrapperEl: o,
            device: l,
            support: d,
          } = e,
          c = !!n.nested,
          p = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (d.touch) {
          const t = !(
            "touchstart" !== i.start ||
            !d.passiveListener ||
            !n.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[p](i.start, e.onTouchStart, t),
            r[p](
              i.move,
              e.onTouchMove,
              d.passiveListener ? { passive: !1, capture: c } : c
            ),
            r[p](i.end, e.onTouchEnd, t),
            i.cancel && r[p](i.cancel, e.onTouchEnd, t);
        } else
          r[p](i.start, e.onTouchStart, !1),
            s[p](i.move, e.onTouchMove, c),
            s[p](i.end, e.onTouchEnd, !1);
        (n.preventClicks || n.preventClicksPropagation) &&
          r[p]("click", e.onClick, !0),
          n.cssMode && o[p]("scroll", e.onScroll),
          n.updateOnWindowResize
            ? e[u](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                z,
                !0
              )
            : e[u]("observerUpdate", z, !0);
      };
      const F = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var H = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function R(e, t) {
        return function (s = {}) {
          const n = Object.keys(s)[0],
            i = s[n];
          "object" === typeof i && null !== i
            ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
                !0 === e[n] &&
                (e[n] = { auto: !0 }),
              n in e && "enabled" in i
                ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                  "object" !== typeof e[n] ||
                    "enabled" in e[n] ||
                    (e[n].enabled = !0),
                  e[n] || (e[n] = { enabled: !1 }),
                  C(t, s))
                : C(t, s))
            : C(t, s);
        };
      }
      const V = {
          eventsEmitter: $,
          update: {
            updateSize: function () {
              const e = this;
              let t, s;
              const n = e.$el;
              (t =
                "undefined" !== typeof e.params.width && null !== e.params.width
                  ? e.params.width
                  : n[0].clientWidth),
                (s =
                  "undefined" !== typeof e.params.height &&
                  null !== e.params.height
                    ? e.params.height
                    : n[0].clientHeight),
                (0 === t && e.isHorizontal()) ||
                  (0 === s && e.isVertical()) ||
                  ((t =
                    t -
                    parseInt(n.css("padding-left") || 0, 10) -
                    parseInt(n.css("padding-right") || 0, 10)),
                  (s =
                    s -
                    parseInt(n.css("padding-top") || 0, 10) -
                    parseInt(n.css("padding-bottom") || 0, 10)),
                  Number.isNaN(t) && (t = 0),
                  Number.isNaN(s) && (s = 0),
                  Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s,
                  }));
            },
            updateSlides: function () {
              const e = this;
              function t(t) {
                return e.isHorizontal()
                  ? t
                  : {
                      width: "height",
                      "margin-top": "margin-left",
                      "margin-bottom ": "margin-right",
                      "margin-left": "margin-top",
                      "margin-right": "margin-bottom",
                      "padding-left": "padding-top",
                      "padding-right": "padding-bottom",
                      marginRight: "marginBottom",
                    }[t];
              }
              function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0);
              }
              const n = e.params,
                { $wrapperEl: i, size: r, rtlTranslate: a, wrongRTL: o } = e,
                l = e.virtual && n.virtual.enabled,
                d = l ? e.virtual.slides.length : e.slides.length,
                c = i.children(`.${e.params.slideClass}`),
                p = l ? e.virtual.slides.length : c.length;
              let u = [];
              const f = [],
                h = [];
              let m = n.slidesOffsetBefore;
              "function" === typeof m && (m = n.slidesOffsetBefore.call(e));
              let g = n.slidesOffsetAfter;
              "function" === typeof g && (g = n.slidesOffsetAfter.call(e));
              const v = e.snapGrid.length,
                y = e.slidesGrid.length;
              let b = n.spaceBetween,
                w = -m,
                C = 0,
                E = 0;
              if ("undefined" === typeof r) return;
              "string" === typeof b &&
                b.indexOf("%") >= 0 &&
                (b = (parseFloat(b.replace("%", "")) / 100) * r),
                (e.virtualSize = -b),
                a
                  ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                  : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                n.centeredSlides &&
                  n.cssMode &&
                  (S(e.wrapperEl, "--swiper-centered-offset-before", ""),
                  S(e.wrapperEl, "--swiper-centered-offset-after", ""));
              const T = n.grid && n.grid.rows > 1 && e.grid;
              let x;
              T && e.grid.initSlides(p);
              const k =
                "auto" === n.slidesPerView &&
                n.breakpoints &&
                Object.keys(n.breakpoints).filter(
                  (e) => "undefined" !== typeof n.breakpoints[e].slidesPerView
                ).length > 0;
              for (let S = 0; S < p; S += 1) {
                x = 0;
                const i = c.eq(S);
                if (
                  (T && e.grid.updateSlide(S, i, p, t),
                  "none" !== i.css("display"))
                ) {
                  if ("auto" === n.slidesPerView) {
                    k && (c[S].style[t("width")] = "");
                    const r = getComputedStyle(i[0]),
                      a = i[0].style.transform,
                      o = i[0].style.webkitTransform;
                    if (
                      (a && (i[0].style.transform = "none"),
                      o && (i[0].style.webkitTransform = "none"),
                      n.roundLengths)
                    )
                      x = e.isHorizontal()
                        ? i.outerWidth(!0)
                        : i.outerHeight(!0);
                    else {
                      const e = s(r, "width"),
                        t = s(r, "padding-left"),
                        n = s(r, "padding-right"),
                        a = s(r, "margin-left"),
                        o = s(r, "margin-right"),
                        l = r.getPropertyValue("box-sizing");
                      if (l && "border-box" === l) x = e + a + o;
                      else {
                        const { clientWidth: s, offsetWidth: r } = i[0];
                        x = e + t + n + a + o + (r - s);
                      }
                    }
                    a && (i[0].style.transform = a),
                      o && (i[0].style.webkitTransform = o),
                      n.roundLengths && (x = Math.floor(x));
                  } else
                    (x = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
                      n.roundLengths && (x = Math.floor(x)),
                      c[S] && (c[S].style[t("width")] = `${x}px`);
                  c[S] && (c[S].swiperSlideSize = x),
                    h.push(x),
                    n.centeredSlides
                      ? ((w = w + x / 2 + C / 2 + b),
                        0 === C && 0 !== S && (w = w - r / 2 - b),
                        0 === S && (w = w - r / 2 - b),
                        Math.abs(w) < 0.001 && (w = 0),
                        n.roundLengths && (w = Math.floor(w)),
                        E % n.slidesPerGroup === 0 && u.push(w),
                        f.push(w))
                      : (n.roundLengths && (w = Math.floor(w)),
                        (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                          e.params.slidesPerGroup ===
                          0 && u.push(w),
                        f.push(w),
                        (w = w + x + b)),
                    (e.virtualSize += x + b),
                    (C = x),
                    (E += 1);
                }
              }
              if (
                ((e.virtualSize = Math.max(e.virtualSize, r) + g),
                a &&
                  o &&
                  ("slide" === n.effect || "coverflow" === n.effect) &&
                  i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
                n.setWrapperSize &&
                  i.css({
                    [t("width")]: `${e.virtualSize + n.spaceBetween}px`,
                  }),
                T && e.grid.updateWrapperSize(x, u, t),
                !n.centeredSlides)
              ) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                  let i = u[s];
                  n.roundLengths && (i = Math.floor(i)),
                    u[s] <= e.virtualSize - r && t.push(i);
                }
                (u = t),
                  Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) >
                    1 && u.push(e.virtualSize - r);
              }
              if ((0 === u.length && (u = [0]), 0 !== n.spaceBetween)) {
                const s =
                  e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                c.filter((e, t) => !n.cssMode || t !== c.length - 1).css({
                  [s]: `${b}px`,
                });
              }
              if (n.centeredSlides && n.centeredSlidesBounds) {
                let e = 0;
                h.forEach((t) => {
                  e += t + (n.spaceBetween ? n.spaceBetween : 0);
                }),
                  (e -= n.spaceBetween);
                const t = e - r;
                u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
              }
              if (n.centerInsufficientSlides) {
                let e = 0;
                if (
                  (h.forEach((t) => {
                    e += t + (n.spaceBetween ? n.spaceBetween : 0);
                  }),
                  (e -= n.spaceBetween),
                  e < r)
                ) {
                  const t = (r - e) / 2;
                  u.forEach((e, s) => {
                    u[s] = e - t;
                  }),
                    f.forEach((e, s) => {
                      f[s] = e + t;
                    });
                }
              }
              if (
                (Object.assign(e, {
                  slides: c,
                  snapGrid: u,
                  slidesGrid: f,
                  slidesSizesGrid: h,
                }),
                n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
              ) {
                S(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                  S(
                    e.wrapperEl,
                    "--swiper-centered-offset-after",
                    e.size / 2 - h[h.length - 1] / 2 + "px"
                  );
                const t = -e.snapGrid[0],
                  s = -e.slidesGrid[0];
                (e.snapGrid = e.snapGrid.map((e) => e + t)),
                  (e.slidesGrid = e.slidesGrid.map((e) => e + s));
              }
              p !== d && e.emit("slidesLengthChange"),
                u.length !== v &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
                f.length !== y && e.emit("slidesGridLengthChange"),
                n.watchSlidesProgress && e.updateSlidesOffset();
            },
            updateAutoHeight: function (e) {
              const t = this,
                s = [],
                n = t.virtual && t.params.virtual.enabled;
              let i,
                r = 0;
              "number" === typeof e
                ? t.setTransition(e)
                : !0 === e && t.setTransition(t.params.speed);
              const a = (e) =>
                n
                  ? t.slides.filter(
                      (t) =>
                        parseInt(
                          t.getAttribute("data-swiper-slide-index"),
                          10
                        ) === e
                    )[0]
                  : t.slides.eq(e)[0];
              if (
                "auto" !== t.params.slidesPerView &&
                t.params.slidesPerView > 1
              )
                if (t.params.centeredSlides)
                  t.visibleSlides.each((e) => {
                    s.push(e);
                  });
                else
                  for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                    const e = t.activeIndex + i;
                    if (e > t.slides.length && !n) break;
                    s.push(a(e));
                  }
              else s.push(a(t.activeIndex));
              for (i = 0; i < s.length; i += 1)
                if ("undefined" !== typeof s[i]) {
                  const e = s[i].offsetHeight;
                  r = e > r ? e : r;
                }
              r && t.$wrapperEl.css("height", `${r}px`);
            },
            updateSlidesOffset: function () {
              const e = this,
                t = e.slides;
              for (let s = 0; s < t.length; s += 1)
                t[s].swiperSlideOffset = e.isHorizontal()
                  ? t[s].offsetLeft
                  : t[s].offsetTop;
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
              const t = this,
                s = t.params,
                { slides: n, rtlTranslate: i, snapGrid: r } = t;
              if (0 === n.length) return;
              "undefined" === typeof n[0].swiperSlideOffset &&
                t.updateSlidesOffset();
              let a = -e;
              i && (a = e),
                n.removeClass(s.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
              for (let o = 0; o < n.length; o += 1) {
                const e = n[o];
                let l = e.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
                const d =
                    (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                    (e.swiperSlideSize + s.spaceBetween),
                  c =
                    (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                    (e.swiperSlideSize + s.spaceBetween),
                  p = -(a - l),
                  u = p + t.slidesSizesGrid[o];
                ((p >= 0 && p < t.size - 1) ||
                  (u > 1 && u <= t.size) ||
                  (p <= 0 && u >= t.size)) &&
                  (t.visibleSlides.push(e),
                  t.visibleSlidesIndexes.push(o),
                  n.eq(o).addClass(s.slideVisibleClass)),
                  (e.progress = i ? -d : d),
                  (e.originalProgress = i ? -c : c);
              }
              t.visibleSlides = g(t.visibleSlides);
            },
            updateProgress: function (e) {
              const t = this;
              if ("undefined" === typeof e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = (t && t.translate && t.translate * s) || 0;
              }
              const s = t.params,
                n = t.maxTranslate() - t.minTranslate();
              let { progress: i, isBeginning: r, isEnd: a } = t;
              const o = r,
                l = a;
              0 === n
                ? ((i = 0), (r = !0), (a = !0))
                : ((i = (e - t.minTranslate()) / n),
                  (r = i <= 0),
                  (a = i >= 1)),
                Object.assign(t, { progress: i, isBeginning: r, isEnd: a }),
                (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
                  t.updateSlidesProgress(e),
                r && !o && t.emit("reachBeginning toEdge"),
                a && !l && t.emit("reachEnd toEdge"),
                ((o && !r) || (l && !a)) && t.emit("fromEdge"),
                t.emit("progress", i);
            },
            updateSlidesClasses: function () {
              const e = this,
                {
                  slides: t,
                  params: s,
                  $wrapperEl: n,
                  activeIndex: i,
                  realIndex: r,
                } = e,
                a = e.virtual && s.virtual.enabled;
              let o;
              t.removeClass(
                `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
              ),
                (o = a
                  ? e.$wrapperEl.find(
                      `.${s.slideClass}[data-swiper-slide-index="${i}"]`
                    )
                  : t.eq(i)),
                o.addClass(s.slideActiveClass),
                s.loop &&
                  (o.hasClass(s.slideDuplicateClass)
                    ? n
                        .children(
                          `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                        )
                        .addClass(s.slideDuplicateActiveClass)
                    : n
                        .children(
                          `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                        )
                        .addClass(s.slideDuplicateActiveClass));
              let l = o
                .nextAll(`.${s.slideClass}`)
                .eq(0)
                .addClass(s.slideNextClass);
              s.loop &&
                0 === l.length &&
                ((l = t.eq(0)), l.addClass(s.slideNextClass));
              let d = o
                .prevAll(`.${s.slideClass}`)
                .eq(0)
                .addClass(s.slidePrevClass);
              s.loop &&
                0 === d.length &&
                ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
                s.loop &&
                  (l.hasClass(s.slideDuplicateClass)
                    ? n
                        .children(
                          `.${s.slideClass}:not(.${
                            s.slideDuplicateClass
                          })[data-swiper-slide-index="${l.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicateNextClass)
                    : n
                        .children(
                          `.${s.slideClass}.${
                            s.slideDuplicateClass
                          }[data-swiper-slide-index="${l.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicateNextClass),
                  d.hasClass(s.slideDuplicateClass)
                    ? n
                        .children(
                          `.${s.slideClass}:not(.${
                            s.slideDuplicateClass
                          })[data-swiper-slide-index="${d.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicatePrevClass)
                    : n
                        .children(
                          `.${s.slideClass}.${
                            s.slideDuplicateClass
                          }[data-swiper-slide-index="${d.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicatePrevClass)),
                e.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                  slidesGrid: n,
                  snapGrid: i,
                  params: r,
                  activeIndex: a,
                  realIndex: o,
                  snapIndex: l,
                } = t;
              let d,
                c = e;
              if ("undefined" === typeof c) {
                for (let e = 0; e < n.length; e += 1)
                  "undefined" !== typeof n[e + 1]
                    ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                      ? (c = e)
                      : s >= n[e] && s < n[e + 1] && (c = e + 1)
                    : s >= n[e] && (c = e);
                r.normalizeSlideIndex &&
                  (c < 0 || "undefined" === typeof c) &&
                  (c = 0);
              }
              if (i.indexOf(s) >= 0) d = i.indexOf(s);
              else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup);
              }
              if ((d >= i.length && (d = i.length - 1), c === a))
                return void (
                  d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
                );
              const p = parseInt(
                t.slides.eq(c).attr("data-swiper-slide-index") || c,
                10
              );
              Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: a,
                activeIndex: c,
              }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                o !== p && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) &&
                  t.emit("slideChange");
            },
            updateClickedSlide: function (e) {
              const t = this,
                s = t.params,
                n = g(e).closest(`.${s.slideClass}`)[0];
              let i,
                r = !1;
              if (n)
                for (let a = 0; a < t.slides.length; a += 1)
                  if (t.slides[a] === n) {
                    (r = !0), (i = a);
                    break;
                  }
              if (!n || !r)
                return (
                  (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
                );
              (t.clickedSlide = n),
                t.virtual && t.params.virtual.enabled
                  ? (t.clickedIndex = parseInt(
                      g(n).attr("data-swiper-slide-index"),
                      10
                    ))
                  : (t.clickedIndex = i),
                s.slideToClickedSlide &&
                  void 0 !== t.clickedIndex &&
                  t.clickedIndex !== t.activeIndex &&
                  t.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
              const {
                params: t,
                rtlTranslate: s,
                translate: n,
                $wrapperEl: i,
              } = this;
              if (t.virtualTranslate) return s ? -n : n;
              if (t.cssMode) return n;
              let r = b(i[0], e);
              return s && (r = -r), r || 0;
            },
            setTranslate: function (e, t) {
              const s = this,
                {
                  rtlTranslate: n,
                  params: i,
                  $wrapperEl: r,
                  wrapperEl: a,
                  progress: o,
                } = s;
              let l,
                d = 0,
                c = 0;
              s.isHorizontal() ? (d = n ? -e : e) : (c = e),
                i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
                i.cssMode
                  ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      s.isHorizontal() ? -d : -c)
                  : i.virtualTranslate ||
                    r.transform(`translate3d(${d}px, ${c}px, 0px)`),
                (s.previousTranslate = s.translate),
                (s.translate = s.isHorizontal() ? d : c);
              const p = s.maxTranslate() - s.minTranslate();
              (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
                l !== o && s.updateProgress(e),
                s.emit("setTranslate", s.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              s = !0,
              n = !0,
              i
            ) {
              const r = this,
                { params: a, wrapperEl: o } = r;
              if (r.animating && a.preventInteractionOnTransition) return !1;
              const l = r.minTranslate(),
                d = r.maxTranslate();
              let c;
              if (
                ((c = n && e > l ? l : n && e < d ? d : e),
                r.updateProgress(c),
                a.cssMode)
              ) {
                const e = r.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!r.support.smoothScroll)
                    return (
                      E({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(c),
                    s &&
                      (r.emit("beforeTransitionStart", t, i),
                      r.emit("transitionEnd")))
                  : (r.setTransition(t),
                    r.setTranslate(c),
                    s &&
                      (r.emit("beforeTransitionStart", t, i),
                      r.emit("transitionStart")),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            s && r.emit("transitionEnd"));
                        }),
                      r.$wrapperEl[0].addEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              const s = this;
              s.params.cssMode || s.$wrapperEl.transition(e),
                s.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              const s = this,
                { params: n } = s;
              n.cssMode ||
                (n.autoHeight && s.updateAutoHeight(),
                L({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e = !0, t) {
              const s = this,
                { params: n } = s;
              (s.animating = !1),
                n.cssMode ||
                  (s.setTransition(0),
                  L({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: {
            slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
              if ("number" !== typeof e && "string" !== typeof e)
                throw new Error(
                  `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                );
              if ("string" === typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t))
                  throw new Error(
                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                  );
                e = t;
              }
              const r = this;
              let a = e;
              a < 0 && (a = 0);
              const {
                params: o,
                snapGrid: l,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: f,
                enabled: h,
              } = r;
              if (
                (r.animating && o.preventInteractionOnTransition) ||
                (!h && !n && !i)
              )
                return !1;
              const m = Math.min(r.params.slidesPerGroupSkip, a);
              let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
              g >= l.length && (g = l.length - 1),
                (p || o.initialSlide || 0) === (c || 0) &&
                  s &&
                  r.emit("beforeSlideChangeStart");
              const v = -l[g];
              if ((r.updateProgress(v), o.normalizeSlideIndex))
                for (let b = 0; b < d.length; b += 1) {
                  const e = -Math.floor(100 * v),
                    t = Math.floor(100 * d[b]),
                    s = Math.floor(100 * d[b + 1]);
                  "undefined" !== typeof d[b + 1]
                    ? e >= t && e < s - (s - t) / 2
                      ? (a = b)
                      : e >= t && e < s && (a = b + 1)
                    : e >= t && (a = b);
                }
              if (r.initialized && a !== p) {
                if (
                  !r.allowSlideNext &&
                  v < r.translate &&
                  v < r.minTranslate()
                )
                  return !1;
                if (
                  !r.allowSlidePrev &&
                  v > r.translate &&
                  v > r.maxTranslate() &&
                  (p || 0) !== a
                )
                  return !1;
              }
              let y;
              if (
                ((y = a > p ? "next" : a < p ? "prev" : "reset"),
                (u && -v === r.translate) || (!u && v === r.translate))
              )
                return (
                  r.updateActiveIndex(a),
                  o.autoHeight && r.updateAutoHeight(),
                  r.updateSlidesClasses(),
                  "slide" !== o.effect && r.setTranslate(v),
                  "reset" !== y &&
                    (r.transitionStart(s, y), r.transitionEnd(s, y)),
                  !1
                );
              if (o.cssMode) {
                const e = r.isHorizontal(),
                  s = u ? v : -v;
                if (0 === t) {
                  const t = r.virtual && r.params.virtual.enabled;
                  t &&
                    ((r.wrapperEl.style.scrollSnapType = "none"),
                    (r._immediateVirtual = !0)),
                    (f[e ? "scrollLeft" : "scrollTop"] = s),
                    t &&
                      requestAnimationFrame(() => {
                        (r.wrapperEl.style.scrollSnapType = ""),
                          (r._swiperImmediateVirtual = !1);
                      });
                } else {
                  if (!r.support.smoothScroll)
                    return (
                      E({
                        swiper: r,
                        targetPosition: s,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(v),
                    r.updateActiveIndex(a),
                    r.updateSlidesClasses(),
                    r.emit("beforeTransitionStart", t, n),
                    r.transitionStart(s, y),
                    r.transitionEnd(s, y))
                  : (r.setTransition(t),
                    r.setTranslate(v),
                    r.updateActiveIndex(a),
                    r.updateSlidesClasses(),
                    r.emit("beforeTransitionStart", t, n),
                    r.transitionStart(s, y),
                    r.animating ||
                      ((r.animating = !0),
                      r.onSlideToWrapperTransitionEnd ||
                        (r.onSlideToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              r.onSlideToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onSlideToWrapperTransitionEnd
                            ),
                            (r.onSlideToWrapperTransitionEnd = null),
                            delete r.onSlideToWrapperTransitionEnd,
                            r.transitionEnd(s, y));
                        }),
                      r.$wrapperEl[0].addEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ))),
                !0
              );
            },
            slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
              const i = this;
              let r = e;
              return (
                i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n)
              );
            },
            slideNext: function (e = this.params.speed, t = !0, s) {
              const n = this,
                { animating: i, enabled: r, params: a } = n;
              if (!r) return n;
              let o = a.slidesPerGroup;
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
              const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
              if (a.loop) {
                if (i && a.loopPreventsSlide) return !1;
                n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
              }
              return n.slideTo(n.activeIndex + l, e, t, s);
            },
            slidePrev: function (e = this.params.speed, t = !0, s) {
              const n = this,
                {
                  params: i,
                  animating: r,
                  snapGrid: a,
                  slidesGrid: o,
                  rtlTranslate: l,
                  enabled: d,
                } = n;
              if (!d) return n;
              if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
              }
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              const p = c(l ? n.translate : -n.translate),
                u = a.map((e) => c(e));
              let f = a[u.indexOf(p) - 1];
              if ("undefined" === typeof f && i.cssMode) {
                let e;
                a.forEach((t, s) => {
                  p >= t && (e = s);
                }),
                  "undefined" !== typeof e && (f = a[e > 0 ? e - 1 : e]);
              }
              let h = 0;
              return (
                "undefined" !== typeof f &&
                  ((h = o.indexOf(f)),
                  h < 0 && (h = n.activeIndex - 1),
                  "auto" === i.slidesPerView &&
                    1 === i.slidesPerGroup &&
                    i.slidesPerGroupAuto &&
                    ((h = h - n.slidesPerViewDynamic("previous", !0) + 1),
                    (h = Math.max(h, 0)))),
                n.slideTo(h, e, t, s)
              );
            },
            slideReset: function (e = this.params.speed, t = !0, s) {
              return this.slideTo(this.activeIndex, e, t, s);
            },
            slideToClosest: function (
              e = this.params.speed,
              t = !0,
              s,
              n = 0.5
            ) {
              const i = this;
              let r = i.activeIndex;
              const a = Math.min(i.params.slidesPerGroupSkip, r),
                o = a + Math.floor((r - a) / i.params.slidesPerGroup),
                l = i.rtlTranslate ? i.translate : -i.translate;
              if (l >= i.snapGrid[o]) {
                const e = i.snapGrid[o];
                l - e > (i.snapGrid[o + 1] - e) * n &&
                  (r += i.params.slidesPerGroup);
              } else {
                const e = i.snapGrid[o - 1];
                l - e <= (i.snapGrid[o] - e) * n &&
                  (r -= i.params.slidesPerGroup);
              }
              return (
                (r = Math.max(r, 0)),
                (r = Math.min(r, i.slidesGrid.length - 1)),
                i.slideTo(r, e, t, s)
              );
            },
            slideToClickedSlide: function () {
              const e = this,
                { params: t, $wrapperEl: s } = e,
                n =
                  "auto" === t.slidesPerView
                    ? e.slidesPerViewDynamic()
                    : t.slidesPerView;
              let i,
                r = e.clickedIndex;
              if (t.loop) {
                if (e.animating) return;
                (i = parseInt(
                  g(e.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  t.centeredSlides
                    ? r < e.loopedSlides - n / 2 ||
                      r > e.slides.length - e.loopedSlides + n / 2
                      ? (e.loopFix(),
                        (r = s
                          .children(
                            `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                          )
                          .eq(0)
                          .index()),
                        v(() => {
                          e.slideTo(r);
                        }))
                      : e.slideTo(r)
                    : r > e.slides.length - n
                    ? (e.loopFix(),
                      (r = s
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      v(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r);
              } else e.slideTo(r);
            },
          },
          loop: {
            loopCreate: function () {
              const e = this,
                t = a(),
                { params: s, $wrapperEl: n } = e,
                i = n.children().length > 0 ? g(n.children()[0].parentNode) : n;
              i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
              let r = i.children(`.${s.slideClass}`);
              if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
                if (e !== s.slidesPerGroup) {
                  for (let n = 0; n < e; n += 1) {
                    const e = g(t.createElement("div")).addClass(
                      `${s.slideClass} ${s.slideBlankClass}`
                    );
                    i.append(e);
                  }
                  r = i.children(`.${s.slideClass}`);
                }
              }
              "auto" !== s.slidesPerView ||
                s.loopedSlides ||
                (s.loopedSlides = r.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(s.loopedSlides || s.slidesPerView, 10)
                )),
                (e.loopedSlides += s.loopAdditionalSlides),
                e.loopedSlides > r.length && (e.loopedSlides = r.length);
              const o = [],
                l = [];
              r.each((t, s) => {
                const n = g(t);
                s < e.loopedSlides && l.push(t),
                  s < r.length && s >= r.length - e.loopedSlides && o.push(t),
                  n.attr("data-swiper-slide-index", s);
              });
              for (let a = 0; a < l.length; a += 1)
                i.append(g(l[a].cloneNode(!0)).addClass(s.slideDuplicateClass));
              for (let a = o.length - 1; a >= 0; a -= 1)
                i.prepend(
                  g(o[a].cloneNode(!0)).addClass(s.slideDuplicateClass)
                );
            },
            loopFix: function () {
              const e = this;
              e.emit("beforeLoopFix");
              const {
                activeIndex: t,
                slides: s,
                loopedSlides: n,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: a,
                rtlTranslate: o,
              } = e;
              let l;
              (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
              const d = -a[t] - e.getTranslate();
              if (t < n) {
                (l = s.length - 3 * n + t), (l += n);
                e.slideTo(l, 0, !1, !0) &&
                  0 !== d &&
                  e.setTranslate((o ? -e.translate : e.translate) - d);
              } else if (t >= s.length - n) {
                (l = -s.length + t + n), (l += n);
                e.slideTo(l, 0, !1, !0) &&
                  0 !== d &&
                  e.setTranslate((o ? -e.translate : e.translate) - d);
              }
              (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
            },
            loopDestroy: function () {
              const { $wrapperEl: e, params: t, slides: s } = this;
              e
                .children(
                  `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                )
                .remove(),
                s.removeAttr("data-swiper-slide-index");
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const s =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (s.style.cursor = "move"),
                (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (s.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                t = a(),
                { params: s, support: n } = e;
              (e.onTouchStart = _.bind(e)),
                (e.onTouchMove = I.bind(e)),
                (e.onTouchEnd = A.bind(e)),
                s.cssMode && (e.onScroll = B.bind(e)),
                (e.onClick = N.bind(e)),
                n.touch &&
                  !D &&
                  (t.addEventListener("touchstart", G), (D = !0)),
                j(e, "on");
            },
            detachEvents: function () {
              j(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                {
                  activeIndex: t,
                  initialized: s,
                  loopedSlides: n = 0,
                  params: i,
                  $el: r,
                } = e,
                a = i.breakpoints;
              if (!a || (a && 0 === Object.keys(a).length)) return;
              const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!o || e.currentBreakpoint === o) return;
              const l = (o in a ? a[o] : void 0) || e.originalParams,
                d = F(e, i),
                c = F(e, l),
                p = i.enabled;
              d && !c
                ? (r.removeClass(
                    `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (r.addClass(`${i.containerModifierClass}grid`),
                  ((l.grid.fill && "column" === l.grid.fill) ||
                    (!l.grid.fill && "column" === i.grid.fill)) &&
                    r.addClass(`${i.containerModifierClass}grid-column`),
                  e.emitContainerClasses());
              const u = l.direction && l.direction !== i.direction,
                f = i.loop && (l.slidesPerView !== i.slidesPerView || u);
              u && s && e.changeDirection(), C(e.params, l);
              const h = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                p && !h ? e.disable() : !p && h && e.enable(),
                (e.currentBreakpoint = o),
                e.emit("_beforeBreakpoint", l),
                f &&
                  s &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - n + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", l);
            },
            getBreakpoint: function (e, t = "window", s) {
              if (!e || ("container" === t && !s)) return;
              let n = !1;
              const i = l(),
                r = "window" === t ? i.innerHeight : s.clientHeight,
                a = Object.keys(e).map((e) => {
                  if ("string" === typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: r * t, point: e };
                  }
                  return { value: e, point: e };
                });
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let o = 0; o < a.length; o += 1) {
                const { point: e, value: r } = a[o];
                "window" === t
                  ? i.matchMedia(`(min-width: ${r}px)`).matches && (n = e)
                  : r <= s.clientWidth && (n = e);
              }
              return n || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: s } = e,
                { slidesOffsetBefore: n } = s;
              if (n) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                e.isLocked = e.size > s;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              const e = this,
                {
                  classNames: t,
                  params: s,
                  rtl: n,
                  $el: i,
                  device: r,
                  support: a,
                } = e,
                o = (function (e, t) {
                  const s = [];
                  return (
                    e.forEach((e) => {
                      "object" === typeof e
                        ? Object.keys(e).forEach((n) => {
                            e[n] && s.push(t + n);
                          })
                        : "string" === typeof e && s.push(t + e);
                    }),
                    s
                  );
                })(
                  [
                    "initialized",
                    s.direction,
                    { "pointer-events": !a.touch },
                    { "free-mode": e.params.freeMode && s.freeMode.enabled },
                    { autoheight: s.autoHeight },
                    { rtl: n },
                    { grid: s.grid && s.grid.rows > 1 },
                    {
                      "grid-column":
                        s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                    },
                    { android: r.android },
                    { ios: r.ios },
                    { "css-mode": s.cssMode },
                    { centered: s.cssMode && s.centeredSlides },
                  ],
                  s.containerModifierClass
                );
              t.push(...o),
                i.addClass([...t].join(" ")),
                e.emitContainerClasses();
            },
            removeClasses: function () {
              const { $el: e, classNames: t } = this;
              e.removeClass(t.join(" ")), this.emitContainerClasses();
            },
          },
          images: {
            loadImage: function (e, t, s, n, i, r) {
              const a = l();
              let o;
              function d() {
                r && r();
              }
              g(e).parent("picture")[0] || (e.complete && i)
                ? d()
                : t
                ? ((o = new a.Image()),
                  (o.onload = d),
                  (o.onerror = d),
                  n && (o.sizes = n),
                  s && (o.srcset = s),
                  t && (o.src = t))
                : d();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                "undefined" !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                const n = e.imagesToLoad[s];
                e.loadImage(
                  n,
                  n.currentSrc || n.getAttribute("src"),
                  n.srcset || n.getAttribute("srcset"),
                  n.sizes || n.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        q = {};
      class W {
        constructor(...e) {
          let t, s;
          if (
            (1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (s = e[0])
              : ([t, s] = e),
            s || (s = {}),
            (s = C({}, s)),
            t && !s.el && (s.el = t),
            s.el && g(s.el).length > 1)
          ) {
            const e = [];
            return (
              g(s.el).each((t) => {
                const n = C({}, s, { el: t });
                e.push(new W(n));
              }),
              e
            );
          }
          const n = this;
          (n.__swiper__ = !0),
            (n.support = P()),
            (n.device = O({ userAgent: s.userAgent })),
            (n.browser = M()),
            (n.eventsListeners = {}),
            (n.eventsAnyListeners = []),
            (n.modules = [...n.__modules__]),
            s.modules &&
              Array.isArray(s.modules) &&
              n.modules.push(...s.modules);
          const i = {};
          n.modules.forEach((e) => {
            e({
              swiper: n,
              extendParams: R(s, i),
              on: n.on.bind(n),
              once: n.once.bind(n),
              off: n.off.bind(n),
              emit: n.emit.bind(n),
            });
          });
          const r = C({}, H, i);
          return (
            (n.params = C({}, r, q, s)),
            (n.originalParams = C({}, n.params)),
            (n.passedParams = C({}, s)),
            n.params &&
              n.params.on &&
              Object.keys(n.params.on).forEach((e) => {
                n.on(e, n.params.on[e]);
              }),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            (n.$ = g),
            Object.assign(n, {
              enabled: n.params.enabled,
              el: t,
              classNames: [],
              slides: g(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === n.params.direction,
              isVertical: () => "vertical" === n.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (n.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (n.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  n.support.touch || !n.params.simulateTouch
                    ? n.touchEventsTouch
                    : n.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: y(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.emit("_swiper"),
            n.params.init && n.init(),
            n
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const n = s.minTranslate(),
            i = (s.maxTranslate() - n) * e + n;
          s.translateTo(i, "undefined" === typeof t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((s) => {
            const n = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          const {
            params: s,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: r,
            size: a,
            activeIndex: o,
          } = this;
          let l = 1;
          if (s.centeredSlides) {
            let e,
              t = n[o].swiperSlideSize;
            for (let s = o + 1; s < n.length; s += 1)
              n[s] &&
                !e &&
                ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1)
              n[s] &&
                !e &&
                ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let d = o + 1; d < n.length; d += 1) {
              (t ? i[d] + r[d] - i[o] < a : i[d] - i[o] < a) && (l += 1);
            }
          else
            for (let d = o - 1; d >= 0; d -= 1) {
              i[o] - i[d] < a && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function n() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let i;
          s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (n(), e.params.autoHeight && e.updateAutoHeight())
              : ((i =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                i || n()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const s = this,
            n = s.params.direction;
          return (
            e || (e = "horizontal" === n ? "vertical" : "horizontal"),
            e === n ||
              ("horizontal" !== e && "vertical" !== e) ||
              (s.$el
                .removeClass(`${s.params.containerModifierClass}${n}`)
                .addClass(`${s.params.containerModifierClass}${e}`),
              s.emitContainerClasses(),
              (s.params.direction = e),
              s.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              s.emit("changeDirection"),
              t && s.update()),
            s
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const s = g(e || t.params.el);
          if (!(e = s[0])) return !1;
          e.swiper = t;
          const n = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let i = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = g(e.shadowRoot.querySelector(n()));
              return (t.children = (e) => s.children(e)), t;
            }
            return s.children(n());
          })();
          if (0 === i.length && t.params.createElements) {
            const e = a().createElement("div");
            (i = g(e)),
              (e.className = t.params.wrapperClass),
              s.append(e),
              s.children(`.${t.params.slideClass}`).each((e) => {
                i.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: s,
              el: e,
              $wrapperEl: i,
              wrapperEl: i[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
              wrongRTL: "-webkit-box" === i.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          const s = this,
            { params: n, $el: i, $wrapperEl: r, slides: a } = s;
          return (
            "undefined" === typeof s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              n.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                i.removeAttr("style"),
                r.removeAttr("style"),
                a &&
                  a.length &&
                  a
                    .removeClass(
                      [
                        n.slideVisibleClass,
                        n.slideActiveClass,
                        n.slideNextClass,
                        n.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (s) {}
                    try {
                      delete t[e];
                    } catch (s) {}
                  });
                })(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          C(q, e);
        }
        static get extendedDefaults() {
          return q;
        }
        static get defaults() {
          return H;
        }
        static installModule(e) {
          W.prototype.__modules__ || (W.prototype.__modules__ = []);
          const t = W.prototype.__modules__;
          "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => W.installModule(e)), W)
            : (W.installModule(e), W);
        }
      }
      Object.keys(V).forEach((e) => {
        Object.keys(V[e]).forEach((t) => {
          W.prototype[t] = V[e][t];
        });
      }),
        W.use([
          function ({ swiper: e, on: t, emit: s }) {
            const n = l();
            let i = null;
            const r = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (s("beforeResize"), s("resize"));
              },
              a = () => {
                e && !e.destroyed && e.initialized && s("orientationchange");
              };
            t("init", () => {
              e.params.resizeObserver && "undefined" !== typeof n.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((i = new ResizeObserver((t) => {
                    const { width: s, height: n } = e;
                    let i = s,
                      a = n;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: n }) => {
                        (n && n !== e.el) ||
                          ((i = s ? s.width : (t[0] || t).inlineSize),
                          (a = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (i === s && a === n) || r();
                  })),
                  i.observe(e.el))
                : (n.addEventListener("resize", r),
                  n.addEventListener("orientationchange", a));
            }),
              t("destroy", () => {
                i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                  n.removeEventListener("resize", r),
                  n.removeEventListener("orientationchange", a);
              });
          },
          function ({ swiper: e, extendParams: t, on: s, emit: n }) {
            const i = [],
              r = l(),
              a = (e, t = {}) => {
                const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function () {
                      n("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0);
                  }
                );
                s.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  i.push(s);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) a(t[e]);
                  }
                  a(e.$el[0], { childList: e.params.observeSlideChildren }),
                    a(e.$wrapperEl[0], { attributes: !1 });
                }
              }),
              s("destroy", () => {
                i.forEach((e) => {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      var Y = W;
      function X(e, t, s, n) {
        const i = a();
        return (
          e.params.createElements &&
            Object.keys(n).forEach((r) => {
              if (!s[r] && !0 === s.auto) {
                let a = e.$el.children(`.${n[r]}`)[0];
                a ||
                  ((a = i.createElement("div")),
                  (a.className = n[r]),
                  e.$el.append(a)),
                  (s[r] = a),
                  (t[r] = a);
              }
            }),
          s
        );
      }
      function U({ swiper: e, extendParams: t, on: s, emit: n }) {
        function i(t) {
          let s;
          return (
            t &&
              ((s = g(t)),
              e.params.uniqueNavElements &&
                "string" === typeof t &&
                s.length > 1 &&
                1 === e.$el.find(t).length &&
                (s = e.$el.find(t))),
            s
          );
        }
        function r(t, s) {
          const n = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[s ? "addClass" : "removeClass"](n.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
        }
        function a() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: s } = e.navigation;
          r(s, e.isBeginning), r(t, e.isEnd);
        }
        function o(t) {
          t.preventDefault(),
            (e.isBeginning && !e.params.loop) || e.slidePrev();
        }
        function l(t) {
          t.preventDefault(), (e.isEnd && !e.params.loop) || e.slideNext();
        }
        function d() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = X(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const s = i(t.nextEl),
            n = i(t.prevEl);
          s && s.length > 0 && s.on("click", l),
            n && n.length > 0 && n.on("click", o),
            Object.assign(e.navigation, {
              $nextEl: s,
              nextEl: s && s[0],
              $prevEl: n,
              prevEl: n && n[0],
            }),
            e.enabled ||
              (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass));
        }
        function c() {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            s &&
              s.length &&
              (s.off("click", o),
              s.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s("init", () => {
            d(), a();
          }),
          s("toEdge fromEdge lock unlock", () => {
            a();
          }),
          s("destroy", () => {
            c();
          }),
          s("enable disable", () => {
            const { $nextEl: t, $prevEl: s } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              s &&
                s[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          s("click", (t, s) => {
            const { $nextEl: i, $prevEl: r } = e.navigation,
              a = s.target;
            if (e.params.navigation.hideOnClick && !g(a).is(r) && !g(a).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === a || e.pagination.el.contains(a))
              )
                return;
              let t;
              i
                ? (t = i.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                n(!0 === t ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          }),
          Object.assign(e.navigation, { update: a, init: d, destroy: c });
      }
      function Z(e = "") {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`;
      }
      function K({ swiper: e, extendParams: t, on: s, emit: n }) {
        const i = "swiper-pagination";
        let r;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function o() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function l(t, s) {
          const { bulletActiveClass: n } = e.params.pagination;
          t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
        }
        function d() {
          const t = e.rtl,
            s = e.params.pagination;
          if (o()) return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            d = e.pagination.$el;
          let c;
          const p = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((c = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides),
                c > p - 1 && (c -= p),
                c < 0 && "bullets" !== e.params.paginationType && (c = p + c))
              : (c =
                  "undefined" !== typeof e.snapIndex
                    ? e.snapIndex
                    : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const n = e.pagination.bullets;
            let i, o, p;
            if (
              (s.dynamicBullets &&
                ((r = n
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                d.css(
                  e.isHorizontal() ? "width" : "height",
                  r * (s.dynamicMainBullets + 4) + "px"
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((a += c - e.previousIndex),
                  a > s.dynamicMainBullets - 1
                    ? (a = s.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (i = c - a),
                (o = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
                (p = (o + i) / 2)),
              n.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${s.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              d.length > 1)
            )
              n.each((e) => {
                const t = g(e),
                  n = t.index();
                n === c && t.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (n >= i &&
                      n <= o &&
                      t.addClass(`${s.bulletActiveClass}-main`),
                    n === i && l(t, "prev"),
                    n === o && l(t, "next"));
              });
            else {
              const t = n.eq(c),
                r = t.index();
              if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const t = n.eq(i),
                  a = n.eq(o);
                for (let e = i; e <= o; e += 1)
                  n.eq(e).addClass(`${s.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (r >= n.length - s.dynamicMainBullets) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      n.eq(n.length - e).addClass(
                        `${s.bulletActiveClass}-main`
                      );
                    n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                      `${s.bulletActiveClass}-prev`
                    );
                  } else l(t, "prev"), l(a, "next");
                else l(t, "prev"), l(a, "next");
              }
            }
            if (s.dynamicBullets) {
              const i = Math.min(n.length, s.dynamicMainBullets + 4),
                a = (r * i - r) / 2 - p * r,
                o = t ? "right" : "left";
              n.css(e.isHorizontal() ? o : "top", `${a}px`);
            }
          }
          if (
            ("fraction" === s.type &&
              (d.find(Z(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
              d.find(Z(s.totalClass)).text(s.formatFractionTotal(p))),
            "progressbar" === s.type)
          ) {
            let t;
            t = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const n = (c + 1) / p;
            let i = 1,
              r = 1;
            "horizontal" === t ? (i = n) : (r = n),
              d
                .find(Z(s.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`)
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (d.html(s.renderCustom(e, c + 1, p)), n("paginationRender", d[0]))
            : n("paginationUpdate", d[0]),
            e.params.watchOverflow &&
              e.enabled &&
              d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function c() {
          const t = e.params.pagination;
          if (o()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            let n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              n > s &&
              (n = s);
            for (let s = 0; s < n; s += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, s, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            i.html(r), (e.pagination.bullets = i.find(Z(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            i.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              i.html(r)),
            "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
        }
        function p() {
          e.params.pagination = X(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let s = g(t.el);
          0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" === typeof t.el &&
              s.length > 1 &&
              ((s = e.$el.find(t.el)),
              s.length > 1 &&
                (s = s.filter((t) => g(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            s.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (a = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              s.addClass(t.progressbarOppositeClass),
            t.clickable &&
              s.on("click", Z(t.bulletClass), function (t) {
                t.preventDefault();
                let s = g(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
              }),
            Object.assign(e.pagination, { $el: s, el: s[0] }),
            e.enabled || s.addClass(t.lockClass));
        }
        function u() {
          const t = e.params.pagination;
          if (o()) return;
          const s = e.pagination.$el;
          s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            s.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && s.off("click", Z(t.bulletClass));
        }
        s("init", () => {
          p(), c(), d();
        }),
          s("activeIndexChange", () => {
            (e.params.loop || "undefined" === typeof e.snapIndex) && d();
          }),
          s("snapIndexChange", () => {
            e.params.loop || d();
          }),
          s("slidesLengthChange", () => {
            e.params.loop && (c(), d());
          }),
          s("snapGridLengthChange", () => {
            e.params.loop || (c(), d());
          }),
          s("destroy", () => {
            u();
          }),
          s("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            d();
          }),
          s("click", (t, s) => {
            const i = s.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r.length > 0 &&
              !g(i).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                  (e.navigation.prevEl && i === e.navigation.prevEl))
              )
                return;
              const t = r.hasClass(e.params.pagination.hiddenClass);
              n(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          }),
          Object.assign(e.pagination, {
            render: c,
            update: d,
            init: p,
            destroy: u,
          });
      }
      function J({ swiper: e, extendParams: t, on: s, emit: n }) {
        let i;
        function r() {
          const t = e.slides.eq(e.activeIndex);
          let s = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(i),
            (i = v(() => {
              let t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    n("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      n("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), n("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  n("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), n("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), n("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
            }, s));
        }
        function o() {
          return (
            "undefined" === typeof i &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), n("autoplayStart"), r(), !0)
          );
        }
        function l() {
          return (
            !!e.autoplay.running &&
            "undefined" !== typeof i &&
            (i && (clearTimeout(i), (i = void 0)),
            (e.autoplay.running = !1),
            n("autoplayStop"),
            !0)
          );
        }
        function d(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (i && clearTimeout(i),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, p);
                  })
                : ((e.autoplay.paused = !1), r())));
        }
        function c() {
          const t = a();
          "hidden" === t.visibilityState && e.autoplay.running && d(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (r(), (e.autoplay.paused = !1));
        }
        function p(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, p);
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? r() : l());
        }
        function u() {
          e.params.autoplay.disableOnInteraction ? l() : d(),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, p);
            });
        }
        function f() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), r());
        }
        (e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          s("init", () => {
            if (e.params.autoplay.enabled) {
              o();
              a().addEventListener("visibilitychange", c),
                e.params.autoplay.pauseOnMouseEnter &&
                  (e.$el.on("mouseenter", u), e.$el.on("mouseleave", f));
            }
          }),
          s("beforeTransitionStart", (t, s, n) => {
            e.autoplay.running &&
              (n || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(s)
                : l());
          }),
          s("sliderFirstMove", () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? l() : d());
          }),
          s("touchEnd", () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              r();
          }),
          s("destroy", () => {
            e.$el.off("mouseenter", u),
              e.$el.off("mouseleave", f),
              e.autoplay.running && l();
            a().removeEventListener("visibilitychange", c);
          }),
          Object.assign(e.autoplay, { pause: d, run: r, start: o, stop: l });
      }
      function Q(e, t) {
        return e.transformEl
          ? t
              .find(e.transformEl)
              .css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden",
              })
          : t;
      }
      function ee({ swiper: e, extendParams: t, on: s }) {
        t({ fadeEffect: { crossFade: !1, transformEl: null } });
        !(function (e) {
          const {
            effect: t,
            swiper: s,
            on: n,
            setTranslate: i,
            setTransition: r,
            overwriteParams: a,
            perspective: o,
          } = e;
          n("beforeInit", () => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
              o &&
                o() &&
                s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = a ? a() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
          }),
            n("setTranslate", () => {
              s.params.effect === t && i();
            }),
            n("setTransition", (e, n) => {
              s.params.effect === t && r(n);
            });
        })({
          effect: "fade",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: t } = e,
              s = e.params.fadeEffect;
            for (let n = 0; n < t.length; n += 1) {
              const t = e.slides.eq(n);
              let i = -t[0].swiperSlideOffset;
              e.params.virtualTranslate || (i -= e.translate);
              let r = 0;
              e.isHorizontal() || ((r = i), (i = 0));
              const a = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t[0].progress), 0)
                : 1 + Math.min(Math.max(t[0].progress, -1), 0);
              Q(s, t)
                .css({ opacity: a })
                .transform(`translate3d(${i}px, ${r}px, 0px)`);
            }
          },
          setTransition: (t) => {
            const { transformEl: s } = e.params.fadeEffect;
            (s ? e.slides.find(s) : e.slides).transition(t),
              (function ({
                swiper: e,
                duration: t,
                transformEl: s,
                allSlides: n,
              }) {
                const { slides: i, activeIndex: r, $wrapperEl: a } = e;
                if (e.params.virtualTranslate && 0 !== t) {
                  let t,
                    o = !1;
                  (t = n ? (s ? i.find(s) : i) : s ? i.eq(r).find(s) : i.eq(r)),
                    t.transitionEnd(() => {
                      if (o) return;
                      if (!e || e.destroyed) return;
                      (o = !0), (e.animating = !1);
                      const t = ["webkitTransitionEnd", "transitionend"];
                      for (let e = 0; e < t.length; e += 1) a.trigger(t[e]);
                    });
                }
              })({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
      }
    },
  },
]);
