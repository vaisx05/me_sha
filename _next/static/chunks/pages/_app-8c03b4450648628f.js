(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1780: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(8510);
        },
      ]);
    },
    8510: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(5893),
        o = n(9008),
        i = n(7294);
      n(355);
      function c(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              c(t, e, n[e]);
            });
        }
        return t;
      }
      e.default = function (t) {
        var e = t.Component,
          n = t.pageProps;
        return (0, r.jsxs)(i.Fragment, {
          children: [
            (0, r.jsxs)(o.default, {
              children: [
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "true",
                }),
                (0, r.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                  rel: "stylesheet",
                }),
                (0, r.jsx)("link", { rel: "icon", href: "img/favicon.ico" }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content: "personal portfolio react template",
                }),
                (0, r.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1, shrink-to-fit=no",
                }),
              ],
            }),
            (0, r.jsx)(e, s({}, n)),
          ],
        });
      };
    },
    355: function () {},
    9008: function (t, e, n) {
      t.exports = n(5443);
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(1780), e(387);
    });
    var n = t.O();
    _N_E = n;
  },
]);
