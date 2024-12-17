/*!
 * html2canvas 1.0.0-alpha.10 <https://html2canvas.hertzen.com>
 * Copyright (c) 2018 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!(function (A, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define([], e)
        : "object" == typeof exports
        ? (exports.html2canvas = e())
        : (A.html2canvas = e());
})(this, function () {
    return (function (A) {
        var e = {};
        function t(r) {
            if (e[r]) return e[r].exports;
            var n = (e[r] = { i: r, l: !1, exports: {} });
            return A[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
        }
        return (
            (t.m = A),
            (t.c = e),
            (t.d = function (A, e, r) {
                t.o(A, e) ||
                    Object.defineProperty(A, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r,
                    });
            }),
            (t.n = function (A) {
                var e =
                    A && A.__esModule
                        ? function () {
                              return A.default;
                          }
                        : function () {
                              return A;
                          };
                return t.d(e, "a", e), e;
            }),
            (t.o = function (A, e) {
                return Object.prototype.hasOwnProperty.call(A, e);
            }),
            (t.p = ""),
            t((t.s = 27))
        );
    })([
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                    return function (A, e) {
                        if (Array.isArray(A)) return A;
                        if (Symbol.iterator in Object(A))
                            return (function (A, e) {
                                var t = [],
                                    r = !0,
                                    n = !1,
                                    B = void 0;
                                try {
                                    for (
                                        var a, s = A[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (t.push(a.value), !e || t.length !== e);
                                        r = !0
                                    );
                                } catch (A) {
                                    (n = !0), (B = A);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (n) throw B;
                                    }
                                }
                                return t;
                            })(A, e);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                n = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })();
            var B = /^#([a-f0-9]{3})$/i,
                a = function (A) {
                    var e = A.match(B);
                    return (
                        !!e && [
                            parseInt(e[1][0] + e[1][0], 16),
                            parseInt(e[1][1] + e[1][1], 16),
                            parseInt(e[1][2] + e[1][2], 16),
                            null,
                        ]
                    );
                },
                s = /^#([a-f0-9]{6})$/i,
                o = function (A) {
                    var e = A.match(s);
                    return (
                        !!e && [
                            parseInt(e[1].substring(0, 2), 16),
                            parseInt(e[1].substring(2, 4), 16),
                            parseInt(e[1].substring(4, 6), 16),
                            null,
                        ]
                    );
                },
                i = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
                c = function (A) {
                    var e = A.match(i);
                    return (
                        !!e && [Number(e[1]), Number(e[2]), Number(e[3]), null]
                    );
                },
                l =
                    /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/,
                u = function (A) {
                    var e = A.match(l);
                    return (
                        !!(e && e.length > 4) && [
                            Number(e[1]),
                            Number(e[2]),
                            Number(e[3]),
                            Number(e[4]),
                        ]
                    );
                },
                Q = function (A) {
                    return [
                        Math.min(A[0], 255),
                        Math.min(A[1], 255),
                        Math.min(A[2], 255),
                        A.length > 3 ? A[3] : null,
                    ];
                },
                w = function (A) {
                    var e = g[A.toLowerCase()];
                    return e || !1;
                },
                U = (function () {
                    function A(e) {
                        !(function (A, e) {
                            if (!(A instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, A);
                        var t = Array.isArray(e)
                                ? Q(e)
                                : a(e) ||
                                  c(e) ||
                                  u(e) ||
                                  w(e) ||
                                  o(e) || [0, 0, 0, null],
                            n = r(t, 4),
                            B = n[0],
                            s = n[1],
                            i = n[2],
                            l = n[3];
                        (this.r = B), (this.g = s), (this.b = i), (this.a = l);
                    }
                    return (
                        n(A, [
                            {
                                key: "isTransparent",
                                value: function () {
                                    return 0 === this.a;
                                },
                            },
                            {
                                key: "toString",
                                value: function () {
                                    return null !== this.a && 1 !== this.a
                                        ? "rgba(" +
                                              this.r +
                                              "," +
                                              this.g +
                                              "," +
                                              this.b +
                                              "," +
                                              this.a +
                                              ")"
                                        : "rgb(" +
                                              this.r +
                                              "," +
                                              this.g +
                                              "," +
                                              this.b +
                                              ")";
                                },
                            },
                        ]),
                        A
                    );
                })();
            e.default = U;
            var g = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, null],
                antiquewhite: [250, 235, 215, null],
                aqua: [0, 255, 255, null],
                aquamarine: [127, 255, 212, null],
                azure: [240, 255, 255, null],
                beige: [245, 245, 220, null],
                bisque: [255, 228, 196, null],
                black: [0, 0, 0, null],
                blanchedalmond: [255, 235, 205, null],
                blue: [0, 0, 255, null],
                blueviolet: [138, 43, 226, null],
                brown: [165, 42, 42, null],
                burlywood: [222, 184, 135, null],
                cadetblue: [95, 158, 160, null],
                chartreuse: [127, 255, 0, null],
                chocolate: [210, 105, 30, null],
                coral: [255, 127, 80, null],
                cornflowerblue: [100, 149, 237, null],
                cornsilk: [255, 248, 220, null],
                crimson: [220, 20, 60, null],
                cyan: [0, 255, 255, null],
                darkblue: [0, 0, 139, null],
                darkcyan: [0, 139, 139, null],
                darkgoldenrod: [184, 134, 11, null],
                darkgray: [169, 169, 169, null],
                darkgreen: [0, 100, 0, null],
                darkgrey: [169, 169, 169, null],
                darkkhaki: [189, 183, 107, null],
                darkmagenta: [139, 0, 139, null],
                darkolivegreen: [85, 107, 47, null],
                darkorange: [255, 140, 0, null],
                darkorchid: [153, 50, 204, null],
                darkred: [139, 0, 0, null],
                darksalmon: [233, 150, 122, null],
                darkseagreen: [143, 188, 143, null],
                darkslateblue: [72, 61, 139, null],
                darkslategray: [47, 79, 79, null],
                darkslategrey: [47, 79, 79, null],
                darkturquoise: [0, 206, 209, null],
                darkviolet: [148, 0, 211, null],
                deeppink: [255, 20, 147, null],
                deepskyblue: [0, 191, 255, null],
                dimgray: [105, 105, 105, null],
                dimgrey: [105, 105, 105, null],
                dodgerblue: [30, 144, 255, null],
                firebrick: [178, 34, 34, null],
                floralwhite: [255, 250, 240, null],
                forestgreen: [34, 139, 34, null],
                fuchsia: [255, 0, 255, null],
                gainsboro: [220, 220, 220, null],
                ghostwhite: [248, 248, 255, null],
                gold: [255, 215, 0, null],
                goldenrod: [218, 165, 32, null],
                gray: [128, 128, 128, null],
                green: [0, 128, 0, null],
                greenyellow: [173, 255, 47, null],
                grey: [128, 128, 128, null],
                honeydew: [240, 255, 240, null],
                hotpink: [255, 105, 180, null],
                indianred: [205, 92, 92, null],
                indigo: [75, 0, 130, null],
                ivory: [255, 255, 240, null],
                khaki: [240, 230, 140, null],
                lavender: [230, 230, 250, null],
                lavenderblush: [255, 240, 245, null],
                lawngreen: [124, 252, 0, null],
                lemonchiffon: [255, 250, 205, null],
                lightblue: [173, 216, 230, null],
                lightcoral: [240, 128, 128, null],
                lightcyan: [224, 255, 255, null],
                lightgoldenrodyellow: [250, 250, 210, null],
                lightgray: [211, 211, 211, null],
                lightgreen: [144, 238, 144, null],
                lightgrey: [211, 211, 211, null],
                lightpink: [255, 182, 193, null],
                lightsalmon: [255, 160, 122, null],
                lightseagreen: [32, 178, 170, null],
                lightskyblue: [135, 206, 250, null],
                lightslategray: [119, 136, 153, null],
                lightslategrey: [119, 136, 153, null],
                lightsteelblue: [176, 196, 222, null],
                lightyellow: [255, 255, 224, null],
                lime: [0, 255, 0, null],
                limegreen: [50, 205, 50, null],
                linen: [250, 240, 230, null],
                magenta: [255, 0, 255, null],
                maroon: [128, 0, 0, null],
                mediumaquamarine: [102, 205, 170, null],
                mediumblue: [0, 0, 205, null],
                mediumorchid: [186, 85, 211, null],
                mediumpurple: [147, 112, 219, null],
                mediumseagreen: [60, 179, 113, null],
                mediumslateblue: [123, 104, 238, null],
                mediumspringgreen: [0, 250, 154, null],
                mediumturquoise: [72, 209, 204, null],
                mediumvioletred: [199, 21, 133, null],
                midnightblue: [25, 25, 112, null],
                mintcream: [245, 255, 250, null],
                mistyrose: [255, 228, 225, null],
                moccasin: [255, 228, 181, null],
                navajowhite: [255, 222, 173, null],
                navy: [0, 0, 128, null],
                oldlace: [253, 245, 230, null],
                olive: [128, 128, 0, null],
                olivedrab: [107, 142, 35, null],
                orange: [255, 165, 0, null],
                orangered: [255, 69, 0, null],
                orchid: [218, 112, 214, null],
                palegoldenrod: [238, 232, 170, null],
                palegreen: [152, 251, 152, null],
                paleturquoise: [175, 238, 238, null],
                palevioletred: [219, 112, 147, null],
                papayawhip: [255, 239, 213, null],
                peachpuff: [255, 218, 185, null],
                peru: [205, 133, 63, null],
                pink: [255, 192, 203, null],
                plum: [221, 160, 221, null],
                powderblue: [176, 224, 230, null],
                purple: [128, 0, 128, null],
                rebeccapurple: [102, 51, 153, null],
                red: [255, 0, 0, null],
                rosybrown: [188, 143, 143, null],
                royalblue: [65, 105, 225, null],
                saddlebrown: [139, 69, 19, null],
                salmon: [250, 128, 114, null],
                sandybrown: [244, 164, 96, null],
                seagreen: [46, 139, 87, null],
                seashell: [255, 245, 238, null],
                sienna: [160, 82, 45, null],
                silver: [192, 192, 192, null],
                skyblue: [135, 206, 235, null],
                slateblue: [106, 90, 205, null],
                slategray: [112, 128, 144, null],
                slategrey: [112, 128, 144, null],
                snow: [255, 250, 250, null],
                springgreen: [0, 255, 127, null],
                steelblue: [70, 130, 180, null],
                tan: [210, 180, 140, null],
                teal: [0, 128, 128, null],
                thistle: [216, 191, 216, null],
                tomato: [255, 99, 71, null],
                turquoise: [64, 224, 208, null],
                violet: [238, 130, 238, null],
                wheat: [245, 222, 179, null],
                white: [255, 255, 255, null],
                whitesmoke: [245, 245, 245, null],
                yellow: [255, 255, 0, null],
                yellowgreen: [154, 205, 50, null],
            };
            e.TRANSPARENT = new U([0, 0, 0, 0]);
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseBoundCurves =
                    e.calculatePaddingBoxPath =
                    e.calculateBorderBoxPath =
                    e.parsePathForBorder =
                    e.parseDocumentSize =
                    e.calculateContentBox =
                    e.calculatePaddingBox =
                    e.parseBounds =
                    e.Bounds =
                        void 0);
            var r = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                n = a(t(7)),
                B = a(t(32));
            function a(A) {
                return A && A.__esModule ? A : { default: A };
            }
            var s = (e.Bounds = (function () {
                    function A(e, t, r, n) {
                        !(function (A, e) {
                            if (!(A instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, A),
                            (this.left = e),
                            (this.top = t),
                            (this.width = r),
                            (this.height = n);
                    }
                    return (
                        r(A, null, [
                            {
                                key: "fromClientRect",
                                value: function (e, t, r) {
                                    return new A(
                                        e.left + t,
                                        e.top + r,
                                        e.width,
                                        e.height
                                    );
                                },
                            },
                        ]),
                        A
                    );
                })()),
                o =
                    ((e.parseBounds = function (A, e, t) {
                        return s.fromClientRect(
                            A.getBoundingClientRect(),
                            e,
                            t
                        );
                    }),
                    (e.calculatePaddingBox = function (A, e) {
                        return new s(
                            A.left + e[3].borderWidth,
                            A.top + e[0].borderWidth,
                            A.width - (e[1].borderWidth + e[3].borderWidth),
                            A.height - (e[0].borderWidth + e[2].borderWidth)
                        );
                    }),
                    (e.calculateContentBox = function (A, e, t) {
                        var r = e[0].value,
                            n = e[1].value,
                            B = e[2].value,
                            a = e[3].value;
                        return new s(
                            A.left + a + t[3].borderWidth,
                            A.top + r + t[0].borderWidth,
                            A.width -
                                (t[1].borderWidth + t[3].borderWidth + a + n),
                            A.height -
                                (t[0].borderWidth + t[2].borderWidth + r + B)
                        );
                    }),
                    (e.parseDocumentSize = function (A) {
                        var e = A.body,
                            t = A.documentElement;
                        if (!e || !t) throw new Error("");
                        var r = Math.max(
                                Math.max(e.scrollWidth, t.scrollWidth),
                                Math.max(e.offsetWidth, t.offsetWidth),
                                Math.max(e.clientWidth, t.clientWidth)
                            ),
                            n = Math.max(
                                Math.max(e.scrollHeight, t.scrollHeight),
                                Math.max(e.offsetHeight, t.offsetHeight),
                                Math.max(e.clientHeight, t.clientHeight)
                            );
                        return new s(0, 0, r, n);
                    }),
                    (e.parsePathForBorder = function (A, e) {
                        switch (e) {
                            case 0:
                                return o(
                                    A.topLeftOuter,
                                    A.topLeftInner,
                                    A.topRightOuter,
                                    A.topRightInner
                                );
                            case 1:
                                return o(
                                    A.topRightOuter,
                                    A.topRightInner,
                                    A.bottomRightOuter,
                                    A.bottomRightInner
                                );
                            case 2:
                                return o(
                                    A.bottomRightOuter,
                                    A.bottomRightInner,
                                    A.bottomLeftOuter,
                                    A.bottomLeftInner
                                );
                            case 3:
                            default:
                                return o(
                                    A.bottomLeftOuter,
                                    A.bottomLeftInner,
                                    A.topLeftOuter,
                                    A.topLeftInner
                                );
                        }
                    }),
                    function (A, e, t, r) {
                        var n = [];
                        return (
                            A instanceof B.default
                                ? n.push(A.subdivide(0.5, !1))
                                : n.push(A),
                            t instanceof B.default
                                ? n.push(t.subdivide(0.5, !0))
                                : n.push(t),
                            r instanceof B.default
                                ? n.push(r.subdivide(0.5, !0).reverse())
                                : n.push(r),
                            e instanceof B.default
                                ? n.push(e.subdivide(0.5, !1).reverse())
                                : n.push(e),
                            n
                        );
                    }),
                i =
                    ((e.calculateBorderBoxPath = function (A) {
                        return [
                            A.topLeftOuter,
                            A.topRightOuter,
                            A.bottomRightOuter,
                            A.bottomLeftOuter,
                        ];
                    }),
                    (e.calculatePaddingBoxPath = function (A) {
                        return [
                            A.topLeftInner,
                            A.topRightInner,
                            A.bottomRightInner,
                            A.bottomLeftInner,
                        ];
                    }),
                    (e.parseBoundCurves = function (A, e, t) {
                        var r = t[i.TOP_LEFT][0].getAbsoluteValue(A.width),
                            B = t[i.TOP_LEFT][1].getAbsoluteValue(A.height),
                            a = t[i.TOP_RIGHT][0].getAbsoluteValue(A.width),
                            s = t[i.TOP_RIGHT][1].getAbsoluteValue(A.height),
                            o = t[i.BOTTOM_RIGHT][0].getAbsoluteValue(A.width),
                            l = t[i.BOTTOM_RIGHT][1].getAbsoluteValue(A.height),
                            u = t[i.BOTTOM_LEFT][0].getAbsoluteValue(A.width),
                            Q = t[i.BOTTOM_LEFT][1].getAbsoluteValue(A.height),
                            w = [];
                        w.push((r + a) / A.width),
                            w.push((u + o) / A.width),
                            w.push((B + Q) / A.height),
                            w.push((s + l) / A.height);
                        var U = Math.max.apply(Math, w);
                        U > 1 &&
                            ((r /= U),
                            (B /= U),
                            (a /= U),
                            (s /= U),
                            (o /= U),
                            (l /= U),
                            (u /= U),
                            (Q /= U));
                        var g = A.width - a,
                            C = A.height - l,
                            d = A.width - o,
                            F = A.height - Q;
                        return {
                            topLeftOuter:
                                r > 0 || B > 0
                                    ? c(A.left, A.top, r, B, i.TOP_LEFT)
                                    : new n.default(A.left, A.top),
                            topLeftInner:
                                r > 0 || B > 0
                                    ? c(
                                          A.left + e[3].borderWidth,
                                          A.top + e[0].borderWidth,
                                          Math.max(0, r - e[3].borderWidth),
                                          Math.max(0, B - e[0].borderWidth),
                                          i.TOP_LEFT
                                      )
                                    : new n.default(
                                          A.left + e[3].borderWidth,
                                          A.top + e[0].borderWidth
                                      ),
                            topRightOuter:
                                a > 0 || s > 0
                                    ? c(A.left + g, A.top, a, s, i.TOP_RIGHT)
                                    : new n.default(A.left + A.width, A.top),
                            topRightInner:
                                a > 0 || s > 0
                                    ? c(
                                          A.left +
                                              Math.min(
                                                  g,
                                                  A.width + e[3].borderWidth
                                              ),
                                          A.top + e[0].borderWidth,
                                          g > A.width + e[3].borderWidth
                                              ? 0
                                              : a - e[3].borderWidth,
                                          s - e[0].borderWidth,
                                          i.TOP_RIGHT
                                      )
                                    : new n.default(
                                          A.left + A.width - e[1].borderWidth,
                                          A.top + e[0].borderWidth
                                      ),
                            bottomRightOuter:
                                o > 0 || l > 0
                                    ? c(
                                          A.left + d,
                                          A.top + C,
                                          o,
                                          l,
                                          i.BOTTOM_RIGHT
                                      )
                                    : new n.default(
                                          A.left + A.width,
                                          A.top + A.height
                                      ),
                            bottomRightInner:
                                o > 0 || l > 0
                                    ? c(
                                          A.left +
                                              Math.min(
                                                  d,
                                                  A.width - e[3].borderWidth
                                              ),
                                          A.top +
                                              Math.min(
                                                  C,
                                                  A.height + e[0].borderWidth
                                              ),
                                          Math.max(0, o - e[1].borderWidth),
                                          l - e[2].borderWidth,
                                          i.BOTTOM_RIGHT
                                      )
                                    : new n.default(
                                          A.left + A.width - e[1].borderWidth,
                                          A.top + A.height - e[2].borderWidth
                                      ),
                            bottomLeftOuter:
                                u > 0 || Q > 0
                                    ? c(A.left, A.top + F, u, Q, i.BOTTOM_LEFT)
                                    : new n.default(A.left, A.top + A.height),
                            bottomLeftInner:
                                u > 0 || Q > 0
                                    ? c(
                                          A.left + e[3].borderWidth,
                                          A.top + F,
                                          Math.max(0, u - e[3].borderWidth),
                                          Q - e[2].borderWidth,
                                          i.BOTTOM_LEFT
                                      )
                                    : new n.default(
                                          A.left + e[3].borderWidth,
                                          A.top + A.height - e[2].borderWidth
                                      ),
                        };
                    }),
                    {
                        TOP_LEFT: 0,
                        TOP_RIGHT: 1,
                        BOTTOM_RIGHT: 2,
                        BOTTOM_LEFT: 3,
                    }),
                c = function (A, e, t, r, a) {
                    var s = ((Math.sqrt(2) - 1) / 3) * 4,
                        o = t * s,
                        c = r * s,
                        l = A + t,
                        u = e + r;
                    switch (a) {
                        case i.TOP_LEFT:
                            return new B.default(
                                new n.default(A, u),
                                new n.default(A, u - c),
                                new n.default(l - o, e),
                                new n.default(l, e)
                            );
                        case i.TOP_RIGHT:
                            return new B.default(
                                new n.default(A, e),
                                new n.default(A + o, e),
                                new n.default(l, u - c),
                                new n.default(l, u)
                            );
                        case i.BOTTOM_RIGHT:
                            return new B.default(
                                new n.default(l, e),
                                new n.default(l, e + c),
                                new n.default(A + o, u),
                                new n.default(A, u)
                            );
                        case i.BOTTOM_LEFT:
                        default:
                            return new B.default(
                                new n.default(l, u),
                                new n.default(l - o, u),
                                new n.default(A, e + c),
                                new n.default(A, e)
                            );
                    }
                };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.calculateLengthFromValueWithUnit = e.LENGTH_TYPE = void 0);
            var r,
                n = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                B = t(3);
            (r = B) && r.__esModule;
            var a = (e.LENGTH_TYPE = { PX: 0, PERCENTAGE: 1 }),
                s = (function () {
                    function A(e) {
                        !(function (A, e) {
                            if (!(A instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, A),
                            (this.type =
                                "%" === e.substr(e.length - 1)
                                    ? a.PERCENTAGE
                                    : a.PX);
                        var t = parseFloat(e);
                        this.value = isNaN(t) ? 0 : t;
                    }
                    return (
                        n(
                            A,
                            [
                                {
                                    key: "isPercentage",
                                    value: function () {
                                        return this.type === a.PERCENTAGE;
                                    },
                                },
                                {
                                    key: "getAbsoluteValue",
                                    value: function (A) {
                                        return this.isPercentage()
                                            ? A * (this.value / 100)
                                            : this.value;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "create",
                                    value: function (e) {
                                        return new A(e);
                                    },
                                },
                            ]
                        ),
                        A
                    );
                })();
            e.default = s;
            e.calculateLengthFromValueWithUnit = function (A, e, t) {
                switch (t) {
                    case "px":
                    case "%":
                        return new s(e + t);
                    case "em":
                    case "rem":
                        var r = new s(e);
                        return (
                            (r.value *=
                                "em" === t
                                    ? parseFloat(A.style.font.fontSize)
                                    : (function A(e) {
                                          var t = e.parent;
                                          return t
                                              ? A(t)
                                              : parseFloat(
                                                    e.style.font.fontSize
                                                );
                                      })(A)),
                            r
                        );
                    default:
                        return new s("0");
                }
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r,
                n = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                B = t(0),
                a = (r = B) && r.__esModule ? r : { default: r },
                s = t(4),
                o = t(5),
                i = t(12),
                c = t(33),
                l = t(34),
                u = t(35),
                Q = t(36),
                w = t(37),
                U = t(38),
                g = t(8),
                C = t(39),
                d = t(40),
                F = t(18),
                E = t(17),
                f = t(19),
                h = t(11),
                H = t(41),
                p = t(20),
                N = t(42),
                I = t(43),
                K = t(44),
                T = t(45),
                m = t(1),
                v = t(21),
                y = t(14);
            var b = ["INPUT", "TEXTAREA", "SELECT"],
                S = (function () {
                    function A(e, t, r, n) {
                        var B = this;
                        !(function (A, e) {
                            if (!(A instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, A),
                            (this.parent = t),
                            (this.tagName = e.tagName),
                            (this.index = n),
                            (this.childNodes = []),
                            (this.listItems = []),
                            "number" == typeof e.start &&
                                (this.listStart = e.start);
                        var s = e.ownerDocument.defaultView,
                            S = s.pageXOffset,
                            _ = s.pageYOffset,
                            D = s.getComputedStyle(e, null),
                            M = (0, l.parseDisplay)(D.display),
                            O = "radio" === e.type || "checkbox" === e.type,
                            R = (0, f.parsePosition)(D.position);
                        if (
                            ((this.style = {
                                background: O
                                    ? v.INPUT_BACKGROUND
                                    : (0, o.parseBackground)(D, r),
                                border: O
                                    ? v.INPUT_BORDERS
                                    : (0, i.parseBorder)(D),
                                borderRadius:
                                    (e instanceof s.HTMLInputElement ||
                                        e instanceof HTMLInputElement) &&
                                    O
                                        ? (0, v.getInputBorderRadius)(e)
                                        : (0, c.parseBorderRadius)(D),
                                color: O
                                    ? v.INPUT_COLOR
                                    : new a.default(D.color),
                                display: M,
                                float: (0, u.parseCSSFloat)(D.float),
                                font: (0, Q.parseFont)(D),
                                letterSpacing: (0, w.parseLetterSpacing)(
                                    D.letterSpacing
                                ),
                                listStyle:
                                    M === l.DISPLAY.LIST_ITEM
                                        ? (0, g.parseListStyle)(D)
                                        : null,
                                lineBreak: (0, U.parseLineBreak)(D.lineBreak),
                                margin: (0, C.parseMargin)(D),
                                opacity: parseFloat(D.opacity),
                                overflow:
                                    -1 === b.indexOf(e.tagName)
                                        ? (0, d.parseOverflow)(D.overflow)
                                        : d.OVERFLOW.HIDDEN,
                                overflowWrap: (0, F.parseOverflowWrap)(
                                    D.overflowWrap ? D.overflowWrap : D.wordWrap
                                ),
                                padding: (0, E.parsePadding)(D),
                                position: R,
                                textDecoration: (0, h.parseTextDecoration)(D),
                                textShadow: (0, H.parseTextShadow)(
                                    D.textShadow
                                ),
                                textTransform: (0, p.parseTextTransform)(
                                    D.textTransform
                                ),
                                transform: (0, N.parseTransform)(D),
                                visibility: (0, I.parseVisibility)(
                                    D.visibility
                                ),
                                wordBreak: (0, K.parseWordBreak)(D.wordBreak),
                                zIndex: (0, T.parseZIndex)(
                                    R !== f.POSITION.STATIC ? D.zIndex : "auto"
                                ),
                            }),
                            this.isTransformed() &&
                                (e.style.transform = "matrix(1,0,0,1,0,0)"),
                            M === l.DISPLAY.LIST_ITEM)
                        ) {
                            var P = (0, y.getListOwner)(this);
                            if (P) {
                                var X = P.listItems.length;
                                P.listItems.push(this),
                                    (this.listIndex =
                                        e.hasAttribute("value") &&
                                        "number" == typeof e.value
                                            ? e.value
                                            : 0 === X
                                            ? "number" == typeof P.listStart
                                                ? P.listStart
                                                : 1
                                            : P.listItems[X - 1].listIndex + 1);
                            }
                        }
                        "IMG" === e.tagName &&
                            e.addEventListener("load", function () {
                                (B.bounds = (0, m.parseBounds)(e, S, _)),
                                    (B.curvedBounds = (0, m.parseBoundCurves)(
                                        B.bounds,
                                        B.style.border,
                                        B.style.borderRadius
                                    ));
                            }),
                            (this.image = L(e, r)),
                            (this.bounds = O
                                ? (0, v.reformatInputBounds)(
                                      (0, m.parseBounds)(e, S, _)
                                  )
                                : (0, m.parseBounds)(e, S, _)),
                            (this.curvedBounds = (0, m.parseBoundCurves)(
                                this.bounds,
                                this.style.border,
                                this.style.borderRadius
                            ));
                    }
                    return (
                        n(A, [
                            {
                                key: "getClipPaths",
                                value: function () {
                                    var A = this.parent
                                        ? this.parent.getClipPaths()
                                        : [];
                                    return this.style.overflow !==
                                        d.OVERFLOW.VISIBLE
                                        ? A.concat([
                                              (0, m.calculatePaddingBoxPath)(
                                                  this.curvedBounds
                                              ),
                                          ])
                                        : A;
                                },
                            },
                            {
                                key: "isInFlow",
                                value: function () {
                                    return (
                                        this.isRootElement() &&
                                        !this.isFloating() &&
                                        !this.isAbsolutelyPositioned()
                                    );
                                },
                            },
                            {
                                key: "isVisible",
                                value: function () {
                                    return (
                                        !(0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.NONE
                                        ) &&
                                        this.style.opacity > 0 &&
                                        this.style.visibility ===
                                            I.VISIBILITY.VISIBLE
                                    );
                                },
                            },
                            {
                                key: "isAbsolutelyPositioned",
                                value: function () {
                                    return (
                                        this.style.position !==
                                            f.POSITION.STATIC &&
                                        this.style.position !==
                                            f.POSITION.RELATIVE
                                    );
                                },
                            },
                            {
                                key: "isPositioned",
                                value: function () {
                                    return (
                                        this.style.position !==
                                        f.POSITION.STATIC
                                    );
                                },
                            },
                            {
                                key: "isFloating",
                                value: function () {
                                    return this.style.float !== u.FLOAT.NONE;
                                },
                            },
                            {
                                key: "isRootElement",
                                value: function () {
                                    return null === this.parent;
                                },
                            },
                            {
                                key: "isTransformed",
                                value: function () {
                                    return null !== this.style.transform;
                                },
                            },
                            {
                                key: "isPositionedWithZIndex",
                                value: function () {
                                    return (
                                        this.isPositioned() &&
                                        !this.style.zIndex.auto
                                    );
                                },
                            },
                            {
                                key: "isInlineLevel",
                                value: function () {
                                    return (
                                        (0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.INLINE
                                        ) ||
                                        (0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.INLINE_BLOCK
                                        ) ||
                                        (0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.INLINE_FLEX
                                        ) ||
                                        (0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.INLINE_GRID
                                        ) ||
                                        (0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.INLINE_LIST_ITEM
                                        ) ||
                                        (0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.INLINE_TABLE
                                        )
                                    );
                                },
                            },
                            {
                                key: "isInlineBlockOrInlineTable",
                                value: function () {
                                    return (
                                        (0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.INLINE_BLOCK
                                        ) ||
                                        (0, s.contains)(
                                            this.style.display,
                                            l.DISPLAY.INLINE_TABLE
                                        )
                                    );
                                },
                            },
                        ]),
                        A
                    );
                })();
            e.default = S;
            var L = function (A, e) {
                if (
                    A instanceof A.ownerDocument.defaultView.SVGSVGElement ||
                    A instanceof SVGSVGElement
                ) {
                    var t = new XMLSerializer();
                    return e.loadImage(
                        "data:image/svg+xml," +
                            encodeURIComponent(t.serializeToString(A))
                    );
                }
                switch (A.tagName) {
                    case "IMG":
                        var r = A;
                        return e.loadImage(r.currentSrc || r.src);
                    case "CANVAS":
                        var n = A;
                        return e.loadCanvas(n);
                    case "IFRAME":
                        var B = A.getAttribute(
                            "data-html2canvas-internal-iframe-key"
                        );
                        if (B) return B;
                }
                return null;
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            (e.contains = function (A, e) {
                return 0 != (A & e);
            }),
                (e.distance = function (A, e) {
                    return Math.sqrt(A * A + e * e);
                }),
                (e.copyCSSStyles = function (A, e) {
                    for (var t = A.length - 1; t >= 0; t--) {
                        var r = A.item(t);
                        "content" !== r &&
                            e.style.setProperty(r, A.getPropertyValue(r));
                    }
                    return e;
                }),
                (e.SMALL_IMAGE =
                    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseBackgroundImage =
                    e.parseBackground =
                    e.calculateBackgroundRepeatPath =
                    e.calculateBackgroundPosition =
                    e.calculateBackgroungPositioningArea =
                    e.calculateBackgroungPaintingArea =
                    e.calculateGradientBackgroundSize =
                    e.calculateBackgroundSize =
                    e.BACKGROUND_ORIGIN =
                    e.BACKGROUND_CLIP =
                    e.BACKGROUND_SIZE =
                    e.BACKGROUND_REPEAT =
                        void 0);
            var r = i(t(0)),
                n = i(t(2)),
                B = i(t(31)),
                a = i(t(7)),
                s = t(1),
                o = t(17);
            function i(A) {
                return A && A.__esModule ? A : { default: A };
            }
            var c = (e.BACKGROUND_REPEAT = {
                    REPEAT: 0,
                    NO_REPEAT: 1,
                    REPEAT_X: 2,
                    REPEAT_Y: 3,
                }),
                l = (e.BACKGROUND_SIZE = {
                    AUTO: 0,
                    CONTAIN: 1,
                    COVER: 2,
                    LENGTH: 3,
                }),
                u = (e.BACKGROUND_CLIP = {
                    BORDER_BOX: 0,
                    PADDING_BOX: 1,
                    CONTENT_BOX: 2,
                }),
                Q = (e.BACKGROUND_ORIGIN = u),
                w = function A(e) {
                    switch (
                        ((function (A, e) {
                            if (!(A instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, A),
                        e)
                    ) {
                        case "contain":
                            this.size = l.CONTAIN;
                            break;
                        case "cover":
                            this.size = l.COVER;
                            break;
                        case "auto":
                            this.size = l.AUTO;
                            break;
                        default:
                            this.value = new n.default(e);
                    }
                },
                U =
                    ((e.calculateBackgroundSize = function (A, e, t) {
                        var r = 0,
                            n = 0,
                            a = A.size;
                        if (a[0].size === l.CONTAIN || a[0].size === l.COVER) {
                            var s = t.width / t.height,
                                o = e.width / e.height;
                            return s < o != (a[0].size === l.COVER)
                                ? new B.default(t.width, t.width / o)
                                : new B.default(t.height * o, t.height);
                        }
                        return (
                            a[0].value &&
                                (r = a[0].value.getAbsoluteValue(t.width)),
                            a[0].size === l.AUTO && a[1].size === l.AUTO
                                ? (n = e.height)
                                : a[1].size === l.AUTO
                                ? (n = (r / e.width) * e.height)
                                : a[1].value &&
                                  (n = a[1].value.getAbsoluteValue(t.height)),
                            a[0].size === l.AUTO &&
                                (r = (n / e.height) * e.width),
                            new B.default(r, n)
                        );
                    }),
                    (e.calculateGradientBackgroundSize = function (A, e) {
                        var t = A.size,
                            r = t[0].value
                                ? t[0].value.getAbsoluteValue(e.width)
                                : e.width,
                            n = t[1].value
                                ? t[1].value.getAbsoluteValue(e.height)
                                : t[0].value
                                ? r
                                : e.height;
                        return new B.default(r, n);
                    }),
                    new w("auto")),
                g =
                    ((e.calculateBackgroungPaintingArea = function (A, e) {
                        switch (e) {
                            case u.BORDER_BOX:
                                return (0, s.calculateBorderBoxPath)(A);
                            case u.PADDING_BOX:
                            default:
                                return (0, s.calculatePaddingBoxPath)(A);
                        }
                    }),
                    (e.calculateBackgroungPositioningArea = function (
                        A,
                        e,
                        t,
                        r
                    ) {
                        var n = (0, s.calculatePaddingBox)(e, r);
                        switch (A) {
                            case Q.BORDER_BOX:
                                return e;
                            case Q.CONTENT_BOX:
                                var B = t[
                                        o.PADDING_SIDES.LEFT
                                    ].getAbsoluteValue(e.width),
                                    a = t[
                                        o.PADDING_SIDES.RIGHT
                                    ].getAbsoluteValue(e.width),
                                    i = t[o.PADDING_SIDES.TOP].getAbsoluteValue(
                                        e.width
                                    ),
                                    c = t[
                                        o.PADDING_SIDES.BOTTOM
                                    ].getAbsoluteValue(e.width);
                                return new s.Bounds(
                                    n.left + B,
                                    n.top + i,
                                    n.width - B - a,
                                    n.height - i - c
                                );
                            case Q.PADDING_BOX:
                            default:
                                return n;
                        }
                    }),
                    (e.calculateBackgroundPosition = function (A, e, t) {
                        return new a.default(
                            A[0].getAbsoluteValue(t.width - e.width),
                            A[1].getAbsoluteValue(t.height - e.height)
                        );
                    }),
                    (e.calculateBackgroundRepeatPath = function (
                        A,
                        e,
                        t,
                        r,
                        n
                    ) {
                        switch (A.repeat) {
                            case c.REPEAT_X:
                                return [
                                    new a.default(
                                        Math.round(n.left),
                                        Math.round(r.top + e.y)
                                    ),
                                    new a.default(
                                        Math.round(n.left + n.width),
                                        Math.round(r.top + e.y)
                                    ),
                                    new a.default(
                                        Math.round(n.left + n.width),
                                        Math.round(t.height + r.top + e.y)
                                    ),
                                    new a.default(
                                        Math.round(n.left),
                                        Math.round(t.height + r.top + e.y)
                                    ),
                                ];
                            case c.REPEAT_Y:
                                return [
                                    new a.default(
                                        Math.round(r.left + e.x),
                                        Math.round(n.top)
                                    ),
                                    new a.default(
                                        Math.round(r.left + e.x + t.width),
                                        Math.round(n.top)
                                    ),
                                    new a.default(
                                        Math.round(r.left + e.x + t.width),
                                        Math.round(n.height + n.top)
                                    ),
                                    new a.default(
                                        Math.round(r.left + e.x),
                                        Math.round(n.height + n.top)
                                    ),
                                ];
                            case c.NO_REPEAT:
                                return [
                                    new a.default(
                                        Math.round(r.left + e.x),
                                        Math.round(r.top + e.y)
                                    ),
                                    new a.default(
                                        Math.round(r.left + e.x + t.width),
                                        Math.round(r.top + e.y)
                                    ),
                                    new a.default(
                                        Math.round(r.left + e.x + t.width),
                                        Math.round(r.top + e.y + t.height)
                                    ),
                                    new a.default(
                                        Math.round(r.left + e.x),
                                        Math.round(r.top + e.y + t.height)
                                    ),
                                ];
                            default:
                                return [
                                    new a.default(
                                        Math.round(n.left),
                                        Math.round(n.top)
                                    ),
                                    new a.default(
                                        Math.round(n.left + n.width),
                                        Math.round(n.top)
                                    ),
                                    new a.default(
                                        Math.round(n.left + n.width),
                                        Math.round(n.height + n.top)
                                    ),
                                    new a.default(
                                        Math.round(n.left),
                                        Math.round(n.height + n.top)
                                    ),
                                ];
                        }
                    }),
                    (e.parseBackground = function (A, e) {
                        return {
                            backgroundColor: new r.default(A.backgroundColor),
                            backgroundImage: d(A, e),
                            backgroundClip: g(A.backgroundClip),
                            backgroundOrigin: C(A.backgroundOrigin),
                        };
                    }),
                    function (A) {
                        switch (A) {
                            case "padding-box":
                                return u.PADDING_BOX;
                            case "content-box":
                                return u.CONTENT_BOX;
                        }
                        return u.BORDER_BOX;
                    }),
                C = function (A) {
                    switch (A) {
                        case "padding-box":
                            return Q.PADDING_BOX;
                        case "content-box":
                            return Q.CONTENT_BOX;
                    }
                    return Q.BORDER_BOX;
                },
                d = function (A, e) {
                    var t = f(A.backgroundImage).map(function (A) {
                            if ("url" === A.method) {
                                var t = e.loadImage(A.args[0]);
                                A.args = t ? [t] : [];
                            }
                            return A;
                        }),
                        r = A.backgroundPosition.split(","),
                        n = A.backgroundRepeat.split(","),
                        B = A.backgroundSize.split(",");
                    return t.map(function (A, e) {
                        var t = (B[e] || "auto").trim().split(" ").map(F),
                            a = (r[e] || "auto").trim().split(" ").map(E);
                        return {
                            source: A,
                            repeat: (function (A) {
                                switch (A.trim()) {
                                    case "no-repeat":
                                        return c.NO_REPEAT;
                                    case "repeat-x":
                                    case "repeat no-repeat":
                                        return c.REPEAT_X;
                                    case "repeat-y":
                                    case "no-repeat repeat":
                                        return c.REPEAT_Y;
                                    case "repeat":
                                        return c.REPEAT;
                                }
                                return c.REPEAT;
                            })("string" == typeof n[e] ? n[e] : n[0]),
                            size: t.length < 2 ? [t[0], U] : [t[0], t[1]],
                            position:
                                a.length < 2 ? [a[0], a[0]] : [a[0], a[1]],
                        };
                    });
                },
                F = function (A) {
                    return "auto" === A ? U : new w(A);
                },
                E = function (A) {
                    switch (A) {
                        case "bottom":
                        case "right":
                            return new n.default("100%");
                        case "left":
                        case "top":
                            return new n.default("0%");
                        case "auto":
                            return new n.default("0");
                    }
                    return new n.default(A);
                },
                f = (e.parseBackgroundImage = function (A) {
                    var e = /^\s$/,
                        t = [],
                        r = [],
                        n = "",
                        B = null,
                        a = "",
                        s = 0,
                        o = 0,
                        i = function () {
                            var A = "";
                            if (n) {
                                '"' === a.substr(0, 1) &&
                                    (a = a.substr(1, a.length - 2)),
                                    a && r.push(a.trim());
                                var e = n.indexOf("-", 1) + 1;
                                "-" === n.substr(0, 1) &&
                                    e > 0 &&
                                    ((A = n.substr(0, e).toLowerCase()),
                                    (n = n.substr(e))),
                                    "none" !== (n = n.toLowerCase()) &&
                                        t.push({
                                            prefix: A,
                                            method: n,
                                            args: r,
                                        });
                            }
                            (r = []), (n = a = "");
                        };
                    return (
                        A.split("").forEach(function (A) {
                            if (0 !== s || !e.test(A)) {
                                switch (A) {
                                    case '"':
                                        B ? B === A && (B = null) : (B = A);
                                        break;
                                    case "(":
                                        if (B) break;
                                        if (0 === s) return void (s = 1);
                                        o++;
                                        break;
                                    case ")":
                                        if (B) break;
                                        if (1 === s) {
                                            if (0 === o)
                                                return (s = 0), void i();
                                            o--;
                                        }
                                        break;
                                    case ",":
                                        if (B) break;
                                        if (0 === s) return void i();
                                        if (
                                            1 === s &&
                                            0 === o &&
                                            !n.match(/^url$/i)
                                        )
                                            return (
                                                r.push(a.trim()), void (a = "")
                                            );
                                }
                                0 === s ? (n += A) : (a += A);
                            }
                        }),
                        i(),
                        t
                    );
                });
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.PATH = { VECTOR: 0, BEZIER_CURVE: 1, CIRCLE: 2 };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = t(6);
            e.default = function A(e, t) {
                !(function (A, e) {
                    if (!(A instanceof e))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, A),
                    (this.type = r.PATH.VECTOR),
                    (this.x = e),
                    (this.y = t);
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseListStyle =
                    e.parseListStyleType =
                    e.LIST_STYLE_TYPE =
                    e.LIST_STYLE_POSITION =
                        void 0);
            var r = t(5),
                n = (e.LIST_STYLE_POSITION = { INSIDE: 0, OUTSIDE: 1 }),
                B = (e.LIST_STYLE_TYPE = {
                    NONE: -1,
                    DISC: 0,
                    CIRCLE: 1,
                    SQUARE: 2,
                    DECIMAL: 3,
                    CJK_DECIMAL: 4,
                    DECIMAL_LEADING_ZERO: 5,
                    LOWER_ROMAN: 6,
                    UPPER_ROMAN: 7,
                    LOWER_GREEK: 8,
                    LOWER_ALPHA: 9,
                    UPPER_ALPHA: 10,
                    ARABIC_INDIC: 11,
                    ARMENIAN: 12,
                    BENGALI: 13,
                    CAMBODIAN: 14,
                    CJK_EARTHLY_BRANCH: 15,
                    CJK_HEAVENLY_STEM: 16,
                    CJK_IDEOGRAPHIC: 17,
                    DEVANAGARI: 18,
                    ETHIOPIC_NUMERIC: 19,
                    GEORGIAN: 20,
                    GUJARATI: 21,
                    GURMUKHI: 22,
                    HEBREW: 22,
                    HIRAGANA: 23,
                    HIRAGANA_IROHA: 24,
                    JAPANESE_FORMAL: 25,
                    JAPANESE_INFORMAL: 26,
                    KANNADA: 27,
                    KATAKANA: 28,
                    KATAKANA_IROHA: 29,
                    KHMER: 30,
                    KOREAN_HANGUL_FORMAL: 31,
                    KOREAN_HANJA_FORMAL: 32,
                    KOREAN_HANJA_INFORMAL: 33,
                    LAO: 34,
                    LOWER_ARMENIAN: 35,
                    MALAYALAM: 36,
                    MONGOLIAN: 37,
                    MYANMAR: 38,
                    ORIYA: 39,
                    PERSIAN: 40,
                    SIMP_CHINESE_FORMAL: 41,
                    SIMP_CHINESE_INFORMAL: 42,
                    TAMIL: 43,
                    TELUGU: 44,
                    THAI: 45,
                    TIBETAN: 46,
                    TRAD_CHINESE_FORMAL: 47,
                    TRAD_CHINESE_INFORMAL: 48,
                    UPPER_ARMENIAN: 49,
                    DISCLOSURE_OPEN: 50,
                    DISCLOSURE_CLOSED: 51,
                }),
                a = (e.parseListStyleType = function (A) {
                    switch (A) {
                        case "disc":
                            return B.DISC;
                        case "circle":
                            return B.CIRCLE;
                        case "square":
                            return B.SQUARE;
                        case "decimal":
                            return B.DECIMAL;
                        case "cjk-decimal":
                            return B.CJK_DECIMAL;
                        case "decimal-leading-zero":
                            return B.DECIMAL_LEADING_ZERO;
                        case "lower-roman":
                            return B.LOWER_ROMAN;
                        case "upper-roman":
                            return B.UPPER_ROMAN;
                        case "lower-greek":
                            return B.LOWER_GREEK;
                        case "lower-alpha":
                            return B.LOWER_ALPHA;
                        case "upper-alpha":
                            return B.UPPER_ALPHA;
                        case "arabic-indic":
                            return B.ARABIC_INDIC;
                        case "armenian":
                            return B.ARMENIAN;
                        case "bengali":
                            return B.BENGALI;
                        case "cambodian":
                            return B.CAMBODIAN;
                        case "cjk-earthly-branch":
                            return B.CJK_EARTHLY_BRANCH;
                        case "cjk-heavenly-stem":
                            return B.CJK_HEAVENLY_STEM;
                        case "cjk-ideographic":
                            return B.CJK_IDEOGRAPHIC;
                        case "devanagari":
                            return B.DEVANAGARI;
                        case "ethiopic-numeric":
                            return B.ETHIOPIC_NUMERIC;
                        case "georgian":
                            return B.GEORGIAN;
                        case "gujarati":
                            return B.GUJARATI;
                        case "gurmukhi":
                            return B.GURMUKHI;
                        case "hebrew":
                            return B.HEBREW;
                        case "hiragana":
                            return B.HIRAGANA;
                        case "hiragana-iroha":
                            return B.HIRAGANA_IROHA;
                        case "japanese-formal":
                            return B.JAPANESE_FORMAL;
                        case "japanese-informal":
                            return B.JAPANESE_INFORMAL;
                        case "kannada":
                            return B.KANNADA;
                        case "katakana":
                            return B.KATAKANA;
                        case "katakana-iroha":
                            return B.KATAKANA_IROHA;
                        case "khmer":
                            return B.KHMER;
                        case "korean-hangul-formal":
                            return B.KOREAN_HANGUL_FORMAL;
                        case "korean-hanja-formal":
                            return B.KOREAN_HANJA_FORMAL;
                        case "korean-hanja-informal":
                            return B.KOREAN_HANJA_INFORMAL;
                        case "lao":
                            return B.LAO;
                        case "lower-armenian":
                            return B.LOWER_ARMENIAN;
                        case "malayalam":
                            return B.MALAYALAM;
                        case "mongolian":
                            return B.MONGOLIAN;
                        case "myanmar":
                            return B.MYANMAR;
                        case "oriya":
                            return B.ORIYA;
                        case "persian":
                            return B.PERSIAN;
                        case "simp-chinese-formal":
                            return B.SIMP_CHINESE_FORMAL;
                        case "simp-chinese-informal":
                            return B.SIMP_CHINESE_INFORMAL;
                        case "tamil":
                            return B.TAMIL;
                        case "telugu":
                            return B.TELUGU;
                        case "thai":
                            return B.THAI;
                        case "tibetan":
                            return B.TIBETAN;
                        case "trad-chinese-formal":
                            return B.TRAD_CHINESE_FORMAL;
                        case "trad-chinese-informal":
                            return B.TRAD_CHINESE_INFORMAL;
                        case "upper-armenian":
                            return B.UPPER_ARMENIAN;
                        case "disclosure-open":
                            return B.DISCLOSURE_OPEN;
                        case "disclosure-closed":
                            return B.DISCLOSURE_CLOSED;
                        case "none":
                        default:
                            return B.NONE;
                    }
                }),
                s =
                    ((e.parseListStyle = function (A) {
                        var e = (0, r.parseBackgroundImage)(
                            A.getPropertyValue("list-style-image")
                        );
                        return {
                            listStyleType: a(
                                A.getPropertyValue("list-style-type")
                            ),
                            listStyleImage: e.length ? e[0] : null,
                            listStylePosition: s(
                                A.getPropertyValue("list-style-position")
                            ),
                        };
                    }),
                    function (A) {
                        switch (A) {
                            case "inside":
                                return n.INSIDE;
                            case "outside":
                            default:
                                return n.OUTSIDE;
                        }
                    });
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                n = t(20),
                B = t(22);
            var a = (function () {
                function A(e, t, r) {
                    !(function (A, e) {
                        if (!(A instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, A),
                        (this.text = e),
                        (this.parent = t),
                        (this.bounds = r);
                }
                return (
                    r(A, null, [
                        {
                            key: "fromTextNode",
                            value: function (e, t) {
                                var r = o(e.data, t.style.textTransform);
                                return new A(
                                    r,
                                    t,
                                    (0, B.parseTextBounds)(r, t, e)
                                );
                            },
                        },
                    ]),
                    A
                );
            })();
            e.default = a;
            var s = /(^|\s|:|-|\(|\))([a-z])/g,
                o = function (A, e) {
                    switch (e) {
                        case n.TEXT_TRANSFORM.LOWERCASE:
                            return A.toLowerCase();
                        case n.TEXT_TRANSFORM.CAPITALIZE:
                            return A.replace(s, i);
                        case n.TEXT_TRANSFORM.UPPERCASE:
                            return A.toUpperCase();
                        default:
                            return A;
                    }
                };
            function i(A, e, t) {
                return A.length > 0 ? e + t.toUpperCase() : A;
            }
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = t(23),
                n = function (A) {
                    return (
                        0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
                    );
                },
                B = {
                    get SUPPORT_RANGE_BOUNDS() {
                        var A = (function (A) {
                            if (A.createRange) {
                                var e = A.createRange();
                                if (e.getBoundingClientRect) {
                                    var t = A.createElement("boundtest");
                                    (t.style.height = "123px"),
                                        (t.style.display = "block"),
                                        A.body.appendChild(t),
                                        e.selectNode(t);
                                    var r = e.getBoundingClientRect(),
                                        n = Math.round(r.height);
                                    if ((A.body.removeChild(t), 123 === n))
                                        return !0;
                                }
                            }
                            return !1;
                        })(document);
                        return (
                            Object.defineProperty(B, "SUPPORT_RANGE_BOUNDS", {
                                value: A,
                            }),
                            A
                        );
                    },
                    get SUPPORT_SVG_DRAWING() {
                        var A = (function (A) {
                            var e = new Image(),
                                t = A.createElement("canvas"),
                                r = t.getContext("2d");
                            e.src =
                                "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                            try {
                                r.drawImage(e, 0, 0), t.toDataURL();
                            } catch (A) {
                                return !1;
                            }
                            return !0;
                        })(document);
                        return (
                            Object.defineProperty(B, "SUPPORT_SVG_DRAWING", {
                                value: A,
                            }),
                            A
                        );
                    },
                    get SUPPORT_BASE64_DRAWING() {
                        return function (A) {
                            var e = (function (A, e) {
                                var t = new Image(),
                                    r = A.createElement("canvas"),
                                    n = r.getContext("2d");
                                return new Promise(function (A) {
                                    t.src = e;
                                    var B = function () {
                                        try {
                                            n.drawImage(t, 0, 0), r.toDataURL();
                                        } catch (e) {
                                            return A(!1);
                                        }
                                        return A(!0);
                                    };
                                    (t.onload = B),
                                        (t.onerror = function () {
                                            return A(!1);
                                        }),
                                        !0 === t.complete &&
                                            setTimeout(function () {
                                                B();
                                            }, 500);
                                });
                            })(document, A);
                            return (
                                Object.defineProperty(
                                    B,
                                    "SUPPORT_BASE64_DRAWING",
                                    {
                                        value: function () {
                                            return e;
                                        },
                                    }
                                ),
                                e
                            );
                        };
                    },
                    get SUPPORT_FOREIGNOBJECT_DRAWING() {
                        var A =
                            "function" == typeof Array.from &&
                            "function" == typeof window.fetch
                                ? (function (A) {
                                      var e = A.createElement("canvas");
                                      (e.width = 100), (e.height = 100);
                                      var t = e.getContext("2d");
                                      (t.fillStyle = "rgb(0, 255, 0)"),
                                          t.fillRect(0, 0, 100, 100);
                                      var B = new Image(),
                                          a = e.toDataURL();
                                      B.src = a;
                                      var s = (0, r.createForeignObjectSVG)(
                                          100,
                                          100,
                                          0,
                                          0,
                                          B
                                      );
                                      return (
                                          (t.fillStyle = "red"),
                                          t.fillRect(0, 0, 100, 100),
                                          (0, r.loadSerializedSVG)(s)
                                              .then(function (e) {
                                                  t.drawImage(e, 0, 0);
                                                  var B = t.getImageData(
                                                      0,
                                                      0,
                                                      100,
                                                      100
                                                  ).data;
                                                  (t.fillStyle = "red"),
                                                      t.fillRect(
                                                          0,
                                                          0,
                                                          100,
                                                          100
                                                      );
                                                  var s =
                                                      A.createElement("div");
                                                  return (
                                                      (s.style.backgroundImage =
                                                          "url(" + a + ")"),
                                                      (s.style.height =
                                                          "100px"),
                                                      n(B)
                                                          ? (0,
                                                            r.loadSerializedSVG)(
                                                                (0,
                                                                r.createForeignObjectSVG)(
                                                                    100,
                                                                    100,
                                                                    0,
                                                                    0,
                                                                    s
                                                                )
                                                            )
                                                          : Promise.reject(!1)
                                                  );
                                              })
                                              .then(function (A) {
                                                  return (
                                                      t.drawImage(A, 0, 0),
                                                      n(
                                                          t.getImageData(
                                                              0,
                                                              0,
                                                              100,
                                                              100
                                                          ).data
                                                      )
                                                  );
                                              })
                                              .catch(function (A) {
                                                  return !1;
                                              })
                                      );
                                  })(document)
                                : Promise.resolve(!1);
                        return (
                            Object.defineProperty(
                                B,
                                "SUPPORT_FOREIGNOBJECT_DRAWING",
                                { value: A }
                            ),
                            A
                        );
                    },
                    get SUPPORT_CORS_IMAGES() {
                        var A = void 0 !== new Image().crossOrigin;
                        return (
                            Object.defineProperty(B, "SUPPORT_CORS_IMAGES", {
                                value: A,
                            }),
                            A
                        );
                    },
                    get SUPPORT_RESPONSE_TYPE() {
                        var A =
                            "string" ==
                            typeof new XMLHttpRequest().responseType;
                        return (
                            Object.defineProperty(B, "SUPPORT_RESPONSE_TYPE", {
                                value: A,
                            }),
                            A
                        );
                    },
                    get SUPPORT_CORS_XHR() {
                        var A = "withCredentials" in new XMLHttpRequest();
                        return (
                            Object.defineProperty(B, "SUPPORT_CORS_XHR", {
                                value: A,
                            }),
                            A
                        );
                    },
                };
            e.default = B;
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseTextDecoration =
                    e.TEXT_DECORATION_LINE =
                    e.TEXT_DECORATION =
                    e.TEXT_DECORATION_STYLE =
                        void 0);
            var r,
                n = t(0),
                B = (r = n) && r.__esModule ? r : { default: r };
            var a = (e.TEXT_DECORATION_STYLE = {
                    SOLID: 0,
                    DOUBLE: 1,
                    DOTTED: 2,
                    DASHED: 3,
                    WAVY: 4,
                }),
                s = (e.TEXT_DECORATION = { NONE: null }),
                o = (e.TEXT_DECORATION_LINE = {
                    UNDERLINE: 1,
                    OVERLINE: 2,
                    LINE_THROUGH: 3,
                    BLINK: 4,
                }),
                i = function (A) {
                    switch (A) {
                        case "underline":
                            return o.UNDERLINE;
                        case "overline":
                            return o.OVERLINE;
                        case "line-through":
                            return o.LINE_THROUGH;
                    }
                    return o.BLINK;
                };
            e.parseTextDecoration = function (A) {
                var e,
                    t =
                        "none" ===
                        (e = A.textDecorationLine
                            ? A.textDecorationLine
                            : A.textDecoration)
                            ? null
                            : e.split(" ").map(i);
                return null === t
                    ? s.NONE
                    : {
                          textDecorationLine: t,
                          textDecorationColor: A.textDecorationColor
                              ? new B.default(A.textDecorationColor)
                              : null,
                          textDecorationStyle: (function (A) {
                              switch (A) {
                                  case "double":
                                      return a.DOUBLE;
                                  case "dotted":
                                      return a.DOTTED;
                                  case "dashed":
                                      return a.DASHED;
                                  case "wavy":
                                      return a.WAVY;
                              }
                              return a.SOLID;
                          })(A.textDecorationStyle),
                      };
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseBorder = e.BORDER_SIDES = e.BORDER_STYLE = void 0);
            var r,
                n = t(0),
                B = (r = n) && r.__esModule ? r : { default: r };
            var a = (e.BORDER_STYLE = { NONE: 0, SOLID: 1 }),
                s = (e.BORDER_SIDES = { TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3 }),
                o = Object.keys(s).map(function (A) {
                    return A.toLowerCase();
                });
            e.parseBorder = function (A) {
                return o.map(function (e) {
                    var t = new B.default(
                            A.getPropertyValue("border-" + e + "-color")
                        ),
                        r = (function (A) {
                            switch (A) {
                                case "none":
                                    return a.NONE;
                            }
                            return a.SOLID;
                        })(A.getPropertyValue("border-" + e + "-style")),
                        n = parseFloat(
                            A.getPropertyValue("border-" + e + "-width")
                        );
                    return {
                        borderColor: t,
                        borderStyle: r,
                        borderWidth: isNaN(n) ? 0 : n,
                    };
                });
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            (e.toCodePoints = function (A) {
                for (var e = [], t = 0, r = A.length; t < r; ) {
                    var n = A.charCodeAt(t++);
                    if (n >= 55296 && n <= 56319 && t < r) {
                        var B = A.charCodeAt(t++);
                        56320 == (64512 & B)
                            ? e.push(((1023 & n) << 10) + (1023 & B) + 65536)
                            : (e.push(n), t--);
                    } else e.push(n);
                }
                return e;
            }),
                (e.fromCodePoint = function () {
                    if (String.fromCodePoint)
                        return String.fromCodePoint.apply(String, arguments);
                    var A = arguments.length;
                    if (!A) return "";
                    for (var e = [], t = -1, r = ""; ++t < A; ) {
                        var n = arguments.length <= t ? void 0 : arguments[t];
                        n <= 65535
                            ? e.push(n)
                            : ((n -= 65536),
                              e.push(55296 + (n >> 10), (n % 1024) + 56320)),
                            (t + 1 === A || e.length > 16384) &&
                                ((r += String.fromCharCode.apply(String, e)),
                                (e.length = 0));
                    }
                    return r;
                });
            for (
                var r =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    n =
                        "undefined" == typeof Uint8Array
                            ? []
                            : new Uint8Array(256),
                    B = 0;
                B < r.length;
                B++
            )
                n[r.charCodeAt(B)] = B;
            (e.decode = function (A) {
                var e = 0.75 * A.length,
                    t = A.length,
                    r = void 0,
                    B = 0,
                    a = void 0,
                    s = void 0,
                    o = void 0,
                    i = void 0;
                "=" === A[A.length - 1] &&
                    (e--, "=" === A[A.length - 2] && e--);
                var c =
                        "undefined" != typeof ArrayBuffer &&
                        "undefined" != typeof Uint8Array &&
                        void 0 !== Uint8Array.prototype.slice
                            ? new ArrayBuffer(e)
                            : new Array(e),
                    l = Array.isArray(c) ? c : new Uint8Array(c);
                for (r = 0; r < t; r += 4)
                    (a = n[A.charCodeAt(r)]),
                        (s = n[A.charCodeAt(r + 1)]),
                        (o = n[A.charCodeAt(r + 2)]),
                        (i = n[A.charCodeAt(r + 3)]),
                        (l[B++] = (a << 2) | (s >> 4)),
                        (l[B++] = ((15 & s) << 4) | (o >> 2)),
                        (l[B++] = ((3 & o) << 6) | (63 & i));
                return c;
            }),
                (e.polyUint16Array = function (A) {
                    for (var e = A.length, t = [], r = 0; r < e; r += 2)
                        t.push((A[r + 1] << 8) | A[r]);
                    return t;
                }),
                (e.polyUint32Array = function (A) {
                    for (var e = A.length, t = [], r = 0; r < e; r += 4)
                        t.push(
                            (A[r + 3] << 24) |
                                (A[r + 2] << 16) |
                                (A[r + 1] << 8) |
                                A[r]
                        );
                    return t;
                });
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.createCounterText =
                    e.inlineListItemElement =
                    e.getListOwner =
                        void 0);
            var r = t(4),
                n = o(t(3)),
                B = o(t(9)),
                a = t(8),
                s = t(24);
            function o(A) {
                return A && A.__esModule ? A : { default: A };
            }
            var i = ["OL", "UL", "MENU"],
                c =
                    ((e.getListOwner = function (A) {
                        var e = A.parent;
                        if (!e) return null;
                        do {
                            if (-1 !== i.indexOf(e.tagName)) return e;
                            e = e.parent;
                        } while (e);
                        return A.parent;
                    }),
                    (e.inlineListItemElement = function (A, e, t) {
                        var s = e.style.listStyle;
                        if (s) {
                            var o =
                                    A.ownerDocument.defaultView.getComputedStyle(
                                        A,
                                        null
                                    ),
                                i =
                                    A.ownerDocument.createElement(
                                        "html2canvaswrapper"
                                    );
                            switch (
                                ((0, r.copyCSSStyles)(o, i),
                                (i.style.position = "absolute"),
                                (i.style.bottom = "auto"),
                                (i.style.display = "block"),
                                (i.style.letterSpacing = "normal"),
                                s.listStylePosition)
                            ) {
                                case a.LIST_STYLE_POSITION.OUTSIDE:
                                    (i.style.left = "auto"),
                                        (i.style.right =
                                            A.ownerDocument.defaultView
                                                .innerWidth -
                                            e.bounds.left -
                                            e.style.margin[1].getAbsoluteValue(
                                                e.bounds.width
                                            ) +
                                            7 +
                                            "px"),
                                        (i.style.textAlign = "right");
                                    break;
                                case a.LIST_STYLE_POSITION.INSIDE:
                                    (i.style.left =
                                        e.bounds.left -
                                        e.style.margin[3].getAbsoluteValue(
                                            e.bounds.width
                                        ) +
                                        "px"),
                                        (i.style.right = "auto"),
                                        (i.style.textAlign = "left");
                            }
                            var c = void 0,
                                l = e.style.margin[0].getAbsoluteValue(
                                    e.bounds.width
                                ),
                                u = s.listStyleImage;
                            if (u)
                                if ("url" === u.method) {
                                    var Q =
                                        A.ownerDocument.createElement("img");
                                    (Q.src = u.args[0]),
                                        (i.style.top = e.bounds.top - l + "px"),
                                        (i.style.width = "auto"),
                                        (i.style.height = "auto"),
                                        i.appendChild(Q);
                                } else {
                                    var w =
                                        0.5 * parseFloat(e.style.font.fontSize);
                                    (i.style.top =
                                        e.bounds.top -
                                        l +
                                        e.bounds.height -
                                        1.5 * w +
                                        "px"),
                                        (i.style.width = w + "px"),
                                        (i.style.height = w + "px"),
                                        (i.style.backgroundImage =
                                            o.listStyleImage);
                                }
                            else
                                "number" == typeof e.listIndex &&
                                    ((c = A.ownerDocument.createTextNode(
                                        F(e.listIndex, s.listStyleType, !0)
                                    )),
                                    i.appendChild(c),
                                    (i.style.top = e.bounds.top - l + "px"));
                            var U = A.ownerDocument.body;
                            U.appendChild(i),
                                c
                                    ? (e.childNodes.push(
                                          B.default.fromTextNode(c, e)
                                      ),
                                      U.removeChild(i))
                                    : e.childNodes.push(
                                          new n.default(i, e, t, 0)
                                      );
                        }
                    }),
                    {
                        integers: [
                            1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
                        ],
                        values: [
                            "M",
                            "CM",
                            "D",
                            "CD",
                            "C",
                            "XC",
                            "L",
                            "XL",
                            "X",
                            "IX",
                            "V",
                            "IV",
                            "I",
                        ],
                    }),
                l = {
                    integers: [
                        9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800,
                        700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50,
                        40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
                    ],
                    values: [
                        "Ք",
                        "Փ",
                        "Ւ",
                        "Ց",
                        "Ր",
                        "Տ",
                        "Վ",
                        "Ս",
                        "Ռ",
                        "Ջ",
                        "Պ",
                        "Չ",
                        "Ո",
                        "Շ",
                        "Ն",
                        "Յ",
                        "Մ",
                        "Ճ",
                        "Ղ",
                        "Ձ",
                        "Հ",
                        "Կ",
                        "Ծ",
                        "Խ",
                        "Լ",
                        "Ի",
                        "Ժ",
                        "Թ",
                        "Ը",
                        "Է",
                        "Զ",
                        "Ե",
                        "Դ",
                        "Գ",
                        "Բ",
                        "Ա",
                    ],
                },
                u = {
                    integers: [
                        1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400,
                        300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18,
                        17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
                    ],
                    values: [
                        "י׳",
                        "ט׳",
                        "ח׳",
                        "ז׳",
                        "ו׳",
                        "ה׳",
                        "ד׳",
                        "ג׳",
                        "ב׳",
                        "א׳",
                        "ת",
                        "ש",
                        "ר",
                        "ק",
                        "צ",
                        "פ",
                        "ע",
                        "ס",
                        "נ",
                        "מ",
                        "ל",
                        "כ",
                        "יט",
                        "יח",
                        "יז",
                        "טז",
                        "טו",
                        "י",
                        "ט",
                        "ח",
                        "ז",
                        "ו",
                        "ה",
                        "ד",
                        "ג",
                        "ב",
                        "א",
                    ],
                },
                Q = {
                    integers: [
                        1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900,
                        800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60,
                        50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
                    ],
                    values: [
                        "ჵ",
                        "ჰ",
                        "ჯ",
                        "ჴ",
                        "ხ",
                        "ჭ",
                        "წ",
                        "ძ",
                        "ც",
                        "ჩ",
                        "შ",
                        "ყ",
                        "ღ",
                        "ქ",
                        "ფ",
                        "ჳ",
                        "ტ",
                        "ს",
                        "რ",
                        "ჟ",
                        "პ",
                        "ო",
                        "ჲ",
                        "ნ",
                        "მ",
                        "ლ",
                        "კ",
                        "ი",
                        "თ",
                        "ჱ",
                        "ზ",
                        "ვ",
                        "ე",
                        "დ",
                        "გ",
                        "ბ",
                        "ა",
                    ],
                },
                w = function (A, e, t, r, n, B) {
                    return A < e || A > t
                        ? F(A, n, B.length > 0)
                        : r.integers.reduce(function (e, t, n) {
                              for (; A >= t; ) (A -= t), (e += r.values[n]);
                              return e;
                          }, "") + B;
                },
                U = function (A, e, t, r) {
                    var n = "";
                    do {
                        t || A--, (n = r(A) + n), (A /= e);
                    } while (A * e >= e);
                    return n;
                },
                g = function (A, e, t, r, n) {
                    var B = t - e + 1;
                    return (
                        (A < 0 ? "-" : "") +
                        (U(Math.abs(A), B, r, function (A) {
                            return (0, s.fromCodePoint)(Math.floor(A % B) + e);
                        }) +
                            n)
                    );
                },
                C = function (A, e) {
                    var t =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : ". ",
                        r = e.length;
                    return (
                        U(Math.abs(A), r, !1, function (A) {
                            return e[Math.floor(A % r)];
                        }) + t
                    );
                },
                d = function (A, e, t, n, B, s) {
                    if (A < -9999 || A > 9999)
                        return F(
                            A,
                            a.LIST_STYLE_TYPE.CJK_DECIMAL,
                            B.length > 0
                        );
                    var o = Math.abs(A),
                        i = B;
                    if (0 === o) return e[0] + i;
                    for (var c = 0; o > 0 && c <= 4; c++) {
                        var l = o % 10;
                        0 === l && (0, r.contains)(s, 1) && "" !== i
                            ? (i = e[l] + i)
                            : l > 1 ||
                              (1 === l && 0 === c) ||
                              (1 === l && 1 === c && (0, r.contains)(s, 2)) ||
                              (1 === l &&
                                  1 === c &&
                                  (0, r.contains)(s, 4) &&
                                  A > 100) ||
                              (1 === l && c > 1 && (0, r.contains)(s, 8))
                            ? (i = e[l] + (c > 0 ? t[c - 1] : "") + i)
                            : 1 === l && c > 0 && (i = t[c - 1] + i),
                            (o = Math.floor(o / 10));
                    }
                    return (A < 0 ? n : "") + i;
                },
                F = (e.createCounterText = function (A, e, t) {
                    var r = t ? ". " : "",
                        n = t ? "、" : "",
                        B = t ? ", " : "";
                    switch (e) {
                        case a.LIST_STYLE_TYPE.DISC:
                            return "•";
                        case a.LIST_STYLE_TYPE.CIRCLE:
                            return "◦";
                        case a.LIST_STYLE_TYPE.SQUARE:
                            return "◾";
                        case a.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
                            var s = g(A, 48, 57, !0, r);
                            return s.length < 4 ? "0" + s : s;
                        case a.LIST_STYLE_TYPE.CJK_DECIMAL:
                            return C(A, "〇一二三四五六七八九", n);
                        case a.LIST_STYLE_TYPE.LOWER_ROMAN:
                            return w(
                                A,
                                1,
                                3999,
                                c,
                                a.LIST_STYLE_TYPE.DECIMAL,
                                r
                            ).toLowerCase();
                        case a.LIST_STYLE_TYPE.UPPER_ROMAN:
                            return w(
                                A,
                                1,
                                3999,
                                c,
                                a.LIST_STYLE_TYPE.DECIMAL,
                                r
                            );
                        case a.LIST_STYLE_TYPE.LOWER_GREEK:
                            return g(A, 945, 969, !1, r);
                        case a.LIST_STYLE_TYPE.LOWER_ALPHA:
                            return g(A, 97, 122, !1, r);
                        case a.LIST_STYLE_TYPE.UPPER_ALPHA:
                            return g(A, 65, 90, !1, r);
                        case a.LIST_STYLE_TYPE.ARABIC_INDIC:
                            return g(A, 1632, 1641, !0, r);
                        case a.LIST_STYLE_TYPE.ARMENIAN:
                        case a.LIST_STYLE_TYPE.UPPER_ARMENIAN:
                            return w(
                                A,
                                1,
                                9999,
                                l,
                                a.LIST_STYLE_TYPE.DECIMAL,
                                r
                            );
                        case a.LIST_STYLE_TYPE.LOWER_ARMENIAN:
                            return w(
                                A,
                                1,
                                9999,
                                l,
                                a.LIST_STYLE_TYPE.DECIMAL,
                                r
                            ).toLowerCase();
                        case a.LIST_STYLE_TYPE.BENGALI:
                            return g(A, 2534, 2543, !0, r);
                        case a.LIST_STYLE_TYPE.CAMBODIAN:
                        case a.LIST_STYLE_TYPE.KHMER:
                            return g(A, 6112, 6121, !0, r);
                        case a.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
                            return C(A, "子丑寅卯辰巳午未申酉戌亥", n);
                        case a.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
                            return C(A, "甲乙丙丁戊己庚辛壬癸", n);
                        case a.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
                        case a.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
                            return d(
                                A,
                                "零一二三四五六七八九",
                                "十百千萬",
                                "負",
                                n,
                                14
                            );
                        case a.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
                            return d(
                                A,
                                "零壹貳參肆伍陸柒捌玖",
                                "拾佰仟萬",
                                "負",
                                n,
                                15
                            );
                        case a.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
                            return d(
                                A,
                                "零一二三四五六七八九",
                                "十百千萬",
                                "负",
                                n,
                                14
                            );
                        case a.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
                            return d(
                                A,
                                "零壹贰叁肆伍陆柒捌玖",
                                "拾佰仟萬",
                                "负",
                                n,
                                15
                            );
                        case a.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
                            return d(
                                A,
                                "〇一二三四五六七八九",
                                "十百千万",
                                "マイナス",
                                n,
                                0
                            );
                        case a.LIST_STYLE_TYPE.JAPANESE_FORMAL:
                            return d(
                                A,
                                "零壱弐参四伍六七八九",
                                "拾百千万",
                                "マイナス",
                                n,
                                7
                            );
                        case a.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
                            return d(
                                A,
                                "영일이삼사오육칠팔구",
                                "십백천만",
                                "마이너스 ",
                                B,
                                7
                            );
                        case a.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
                            return d(
                                A,
                                "零一二三四五六七八九",
                                "十百千萬",
                                "마이너스 ",
                                B,
                                0
                            );
                        case a.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
                            return d(
                                A,
                                "零壹貳參四五六七八九",
                                "拾百千",
                                "마이너스 ",
                                B,
                                7
                            );
                        case a.LIST_STYLE_TYPE.DEVANAGARI:
                            return g(A, 2406, 2415, !0, r);
                        case a.LIST_STYLE_TYPE.GEORGIAN:
                            return w(
                                A,
                                1,
                                19999,
                                Q,
                                a.LIST_STYLE_TYPE.DECIMAL,
                                r
                            );
                        case a.LIST_STYLE_TYPE.GUJARATI:
                            return g(A, 2790, 2799, !0, r);
                        case a.LIST_STYLE_TYPE.GURMUKHI:
                            return g(A, 2662, 2671, !0, r);
                        case a.LIST_STYLE_TYPE.HEBREW:
                            return w(
                                A,
                                1,
                                10999,
                                u,
                                a.LIST_STYLE_TYPE.DECIMAL,
                                r
                            );
                        case a.LIST_STYLE_TYPE.HIRAGANA:
                            return C(
                                A,
                                "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん"
                            );
                        case a.LIST_STYLE_TYPE.HIRAGANA_IROHA:
                            return C(
                                A,
                                "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす"
                            );
                        case a.LIST_STYLE_TYPE.KANNADA:
                            return g(A, 3302, 3311, !0, r);
                        case a.LIST_STYLE_TYPE.KATAKANA:
                            return C(
                                A,
                                "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
                                n
                            );
                        case a.LIST_STYLE_TYPE.KATAKANA_IROHA:
                            return C(
                                A,
                                "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
                                n
                            );
                        case a.LIST_STYLE_TYPE.LAO:
                            return g(A, 3792, 3801, !0, r);
                        case a.LIST_STYLE_TYPE.MONGOLIAN:
                            return g(A, 6160, 6169, !0, r);
                        case a.LIST_STYLE_TYPE.MYANMAR:
                            return g(A, 4160, 4169, !0, r);
                        case a.LIST_STYLE_TYPE.ORIYA:
                            return g(A, 2918, 2927, !0, r);
                        case a.LIST_STYLE_TYPE.PERSIAN:
                            return g(A, 1776, 1785, !0, r);
                        case a.LIST_STYLE_TYPE.TAMIL:
                            return g(A, 3046, 3055, !0, r);
                        case a.LIST_STYLE_TYPE.TELUGU:
                            return g(A, 3174, 3183, !0, r);
                        case a.LIST_STYLE_TYPE.THAI:
                            return g(A, 3664, 3673, !0, r);
                        case a.LIST_STYLE_TYPE.TIBETAN:
                            return g(A, 3872, 3881, !0, r);
                        case a.LIST_STYLE_TYPE.DECIMAL:
                        default:
                            return g(A, 48, 57, !0, r);
                    }
                });
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                n = t(6),
                B = t(11);
            var a = function (A, e) {
                    var t = Math.max.apply(
                            null,
                            A.colorStops.map(function (A) {
                                return A.stop;
                            })
                        ),
                        r = 1 / Math.max(1, t);
                    A.colorStops.forEach(function (A) {
                        e.addColorStop(r * A.stop, A.color.toString());
                    });
                },
                s = (function () {
                    function A(e) {
                        !(function (A, e) {
                            if (!(A instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, A),
                            (this.canvas =
                                e || document.createElement("canvas"));
                    }
                    return (
                        r(A, [
                            {
                                key: "render",
                                value: function (A) {
                                    (this.ctx = this.canvas.getContext("2d")),
                                        (this.options = A),
                                        (this.canvas.width = Math.floor(
                                            A.width * A.scale
                                        )),
                                        (this.canvas.height = Math.floor(
                                            A.height * A.scale
                                        )),
                                        (this.canvas.style.width =
                                            A.width + "px"),
                                        (this.canvas.style.height =
                                            A.height + "px"),
                                        this.ctx.scale(
                                            this.options.scale,
                                            this.options.scale
                                        ),
                                        this.ctx.translate(-A.x, -A.y),
                                        (this.ctx.textBaseline = "bottom"),
                                        A.logger.log(
                                            "Canvas renderer initialized (" +
                                                A.width +
                                                "x" +
                                                A.height +
                                                " at " +
                                                A.x +
                                                "," +
                                                A.y +
                                                ") with scale " +
                                                this.options.scale
                                        );
                                },
                            },
                            {
                                key: "clip",
                                value: function (A, e) {
                                    var t = this;
                                    A.length &&
                                        (this.ctx.save(),
                                        A.forEach(function (A) {
                                            t.path(A), t.ctx.clip();
                                        })),
                                        e(),
                                        A.length && this.ctx.restore();
                                },
                            },
                            {
                                key: "drawImage",
                                value: function (A, e, t) {
                                    this.ctx.drawImage(
                                        A,
                                        e.left,
                                        e.top,
                                        e.width,
                                        e.height,
                                        t.left,
                                        t.top,
                                        t.width,
                                        t.height
                                    );
                                },
                            },
                            {
                                key: "drawShape",
                                value: function (A, e) {
                                    this.path(A),
                                        (this.ctx.fillStyle = e.toString()),
                                        this.ctx.fill();
                                },
                            },
                            {
                                key: "fill",
                                value: function (A) {
                                    (this.ctx.fillStyle = A.toString()),
                                        this.ctx.fill();
                                },
                            },
                            {
                                key: "getTarget",
                                value: function () {
                                    return Promise.resolve(this.canvas);
                                },
                            },
                            {
                                key: "path",
                                value: function (A) {
                                    var e = this;
                                    this.ctx.beginPath(),
                                        Array.isArray(A)
                                            ? A.forEach(function (A, t) {
                                                  var r =
                                                      A.type === n.PATH.VECTOR
                                                          ? A
                                                          : A.start;
                                                  0 === t
                                                      ? e.ctx.moveTo(r.x, r.y)
                                                      : e.ctx.lineTo(r.x, r.y),
                                                      A.type ===
                                                          n.PATH.BEZIER_CURVE &&
                                                          e.ctx.bezierCurveTo(
                                                              A.startControl.x,
                                                              A.startControl.y,
                                                              A.endControl.x,
                                                              A.endControl.y,
                                                              A.end.x,
                                                              A.end.y
                                                          );
                                              })
                                            : this.ctx.arc(
                                                  A.x + A.radius,
                                                  A.y + A.radius,
                                                  A.radius,
                                                  0,
                                                  2 * Math.PI,
                                                  !0
                                              ),
                                        this.ctx.closePath();
                                },
                            },
                            {
                                key: "rectangle",
                                value: function (A, e, t, r, n) {
                                    (this.ctx.fillStyle = n.toString()),
                                        this.ctx.fillRect(A, e, t, r);
                                },
                            },
                            {
                                key: "renderLinearGradient",
                                value: function (A, e) {
                                    var t = this.ctx.createLinearGradient(
                                        A.left + e.direction.x1,
                                        A.top + e.direction.y1,
                                        A.left + e.direction.x0,
                                        A.top + e.direction.y0
                                    );
                                    a(e, t),
                                        (this.ctx.fillStyle = t),
                                        this.ctx.fillRect(
                                            A.left,
                                            A.top,
                                            A.width,
                                            A.height
                                        );
                                },
                            },
                            {
                                key: "renderRadialGradient",
                                value: function (A, e) {
                                    var t = this,
                                        r = A.left + e.center.x,
                                        n = A.top + e.center.y,
                                        B = this.ctx.createRadialGradient(
                                            r,
                                            n,
                                            0,
                                            r,
                                            n,
                                            e.radius.x
                                        );
                                    if (B)
                                        if (
                                            (a(e, B),
                                            (this.ctx.fillStyle = B),
                                            e.radius.x !== e.radius.y)
                                        ) {
                                            var s = A.left + 0.5 * A.width,
                                                o = A.top + 0.5 * A.height,
                                                i = e.radius.y / e.radius.x,
                                                c = 1 / i;
                                            this.transform(
                                                s,
                                                o,
                                                [1, 0, 0, i, 0, 0],
                                                function () {
                                                    return t.ctx.fillRect(
                                                        A.left,
                                                        c * (A.top - o) + o,
                                                        A.width,
                                                        A.height * c
                                                    );
                                                }
                                            );
                                        } else
                                            this.ctx.fillRect(
                                                A.left,
                                                A.top,
                                                A.width,
                                                A.height
                                            );
                                },
                            },
                            {
                                key: "renderRepeat",
                                value: function (A, e, t, r, n) {
                                    this.path(A),
                                        (this.ctx.fillStyle =
                                            this.ctx.createPattern(
                                                this.resizeImage(e, t),
                                                "repeat"
                                            )),
                                        this.ctx.translate(r, n),
                                        this.ctx.fill(),
                                        this.ctx.translate(-r, -n);
                                },
                            },
                            {
                                key: "renderTextNode",
                                value: function (A, e, t, r, n) {
                                    var a = this;
                                    (this.ctx.font = [
                                        t.fontStyle,
                                        t.fontVariant,
                                        t.fontWeight,
                                        t.fontSize,
                                        t.fontFamily,
                                    ].join(" ")),
                                        A.forEach(function (A) {
                                            if (
                                                ((a.ctx.fillStyle =
                                                    e.toString()),
                                                n && A.text.trim().length
                                                    ? n
                                                          .slice(0)
                                                          .reverse()
                                                          .forEach(function (
                                                              e
                                                          ) {
                                                              (a.ctx.shadowColor =
                                                                  e.color.toString()),
                                                                  (a.ctx.shadowOffsetX =
                                                                      e.offsetX *
                                                                      a.options
                                                                          .scale),
                                                                  (a.ctx.shadowOffsetY =
                                                                      e.offsetY *
                                                                      a.options
                                                                          .scale),
                                                                  (a.ctx.shadowBlur =
                                                                      e.blur),
                                                                  a.ctx.fillText(
                                                                      A.text,
                                                                      A.bounds
                                                                          .left,
                                                                      A.bounds
                                                                          .top +
                                                                          A
                                                                              .bounds
                                                                              .height
                                                                  );
                                                          })
                                                    : a.ctx.fillText(
                                                          A.text,
                                                          A.bounds.left,
                                                          A.bounds.top +
                                                              A.bounds.height
                                                      ),
                                                null !== r)
                                            ) {
                                                var s =
                                                    r.textDecorationColor || e;
                                                r.textDecorationLine.forEach(
                                                    function (e) {
                                                        switch (e) {
                                                            case B
                                                                .TEXT_DECORATION_LINE
                                                                .UNDERLINE:
                                                                var r =
                                                                    a.options.fontMetrics.getMetrics(
                                                                        t
                                                                    ).baseline;
                                                                a.rectangle(
                                                                    A.bounds
                                                                        .left,
                                                                    Math.round(
                                                                        A.bounds
                                                                            .top +
                                                                            r
                                                                    ),
                                                                    A.bounds
                                                                        .width,
                                                                    1,
                                                                    s
                                                                );
                                                                break;
                                                            case B
                                                                .TEXT_DECORATION_LINE
                                                                .OVERLINE:
                                                                a.rectangle(
                                                                    A.bounds
                                                                        .left,
                                                                    Math.round(
                                                                        A.bounds
                                                                            .top
                                                                    ),
                                                                    A.bounds
                                                                        .width,
                                                                    1,
                                                                    s
                                                                );
                                                                break;
                                                            case B
                                                                .TEXT_DECORATION_LINE
                                                                .LINE_THROUGH:
                                                                var n =
                                                                    a.options.fontMetrics.getMetrics(
                                                                        t
                                                                    ).middle;
                                                                a.rectangle(
                                                                    A.bounds
                                                                        .left,
                                                                    Math.ceil(
                                                                        A.bounds
                                                                            .top +
                                                                            n
                                                                    ),
                                                                    A.bounds
                                                                        .width,
                                                                    1,
                                                                    s
                                                                );
                                                        }
                                                    }
                                                );
                                            }
                                        });
                                },
                            },
                            {
                                key: "resizeImage",
                                value: function (A, e) {
                                    if (
                                        A.width === e.width &&
                                        A.height === e.height
                                    )
                                        return A;
                                    var t =
                                        this.canvas.ownerDocument.createElement(
                                            "canvas"
                                        );
                                    return (
                                        (t.width = e.width),
                                        (t.height = e.height),
                                        t
                                            .getContext("2d")
                                            .drawImage(
                                                A,
                                                0,
                                                0,
                                                A.width,
                                                A.height,
                                                0,
                                                0,
                                                e.width,
                                                e.height
                                            ),
                                        t
                                    );
                                },
                            },
                            {
                                key: "setOpacity",
                                value: function (A) {
                                    this.ctx.globalAlpha = A;
                                },
                            },
                            {
                                key: "transform",
                                value: function (A, e, t, r) {
                                    this.ctx.save(),
                                        this.ctx.translate(A, e),
                                        this.ctx.transform(
                                            t[0],
                                            t[1],
                                            t[2],
                                            t[3],
                                            t[4],
                                            t[5]
                                        ),
                                        this.ctx.translate(-A, -e),
                                        r(),
                                        this.ctx.restore();
                                },
                            },
                        ]),
                        A
                    );
                })();
            e.default = s;
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(A, r.key, r);
                    }
                }
                return function (e, t, r) {
                    return t && A(e.prototype, t), r && A(e, r), e;
                };
            })();
            var n = (function () {
                function A(e, t, r) {
                    !(function (A, e) {
                        if (!(A instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, A),
                        (this.enabled = "undefined" != typeof window && e),
                        (this.start = r || Date.now()),
                        (this.id = t);
                }
                return (
                    r(A, [
                        {
                            key: "child",
                            value: function (e) {
                                return new A(this.enabled, e, this.start);
                            },
                        },
                        {
                            key: "log",
                            value: function () {
                                if (
                                    this.enabled &&
                                    window.console &&
                                    window.console.log
                                ) {
                                    for (
                                        var A = arguments.length,
                                            e = Array(A),
                                            t = 0;
                                        t < A;
                                        t++
                                    )
                                        e[t] = arguments[t];
                                    Function.prototype.bind
                                        .call(
                                            window.console.log,
                                            window.console
                                        )
                                        .apply(
                                            window.console,
                                            [
                                                Date.now() - this.start + "ms",
                                                this.id
                                                    ? "html2canvas (" +
                                                      this.id +
                                                      "):"
                                                    : "html2canvas:",
                                            ].concat([].slice.call(e, 0))
                                        );
                                }
                            },
                        },
                        {
                            key: "error",
                            value: function () {
                                if (
                                    this.enabled &&
                                    window.console &&
                                    window.console.error
                                ) {
                                    for (
                                        var A = arguments.length,
                                            e = Array(A),
                                            t = 0;
                                        t < A;
                                        t++
                                    )
                                        e[t] = arguments[t];
                                    Function.prototype.bind
                                        .call(
                                            window.console.error,
                                            window.console
                                        )
                                        .apply(
                                            window.console,
                                            [
                                                Date.now() - this.start + "ms",
                                                this.id
                                                    ? "html2canvas (" +
                                                      this.id +
                                                      "):"
                                                    : "html2canvas:",
                                            ].concat([].slice.call(e, 0))
                                        );
                                }
                            },
                        },
                    ]),
                    A
                );
            })();
            e.default = n;
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parsePadding = e.PADDING_SIDES = void 0);
            var r,
                n = t(2),
                B = (r = n) && r.__esModule ? r : { default: r };
            e.PADDING_SIDES = { TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3 };
            var a = ["top", "right", "bottom", "left"];
            e.parsePadding = function (A) {
                return a.map(function (e) {
                    return new B.default(A.getPropertyValue("padding-" + e));
                });
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.OVERFLOW_WRAP = { NORMAL: 0, BREAK_WORD: 1 });
            e.parseOverflowWrap = function (A) {
                switch (A) {
                    case "break-word":
                        return r.BREAK_WORD;
                    case "normal":
                    default:
                        return r.NORMAL;
                }
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.POSITION = {
                STATIC: 0,
                RELATIVE: 1,
                ABSOLUTE: 2,
                FIXED: 3,
                STICKY: 4,
            });
            e.parsePosition = function (A) {
                switch (A) {
                    case "relative":
                        return r.RELATIVE;
                    case "absolute":
                        return r.ABSOLUTE;
                    case "fixed":
                        return r.FIXED;
                    case "sticky":
                        return r.STICKY;
                }
                return r.STATIC;
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.TEXT_TRANSFORM = {
                NONE: 0,
                LOWERCASE: 1,
                UPPERCASE: 2,
                CAPITALIZE: 3,
            });
            e.parseTextTransform = function (A) {
                switch (A) {
                    case "uppercase":
                        return r.UPPERCASE;
                    case "lowercase":
                        return r.LOWERCASE;
                    case "capitalize":
                        return r.CAPITALIZE;
                }
                return r.NONE;
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.reformatInputBounds =
                    e.inlineSelectElement =
                    e.inlineTextAreaElement =
                    e.inlineInputElement =
                    e.getInputBorderRadius =
                    e.INPUT_BACKGROUND =
                    e.INPUT_BORDERS =
                    e.INPUT_COLOR =
                        void 0);
            var r = l(t(9)),
                n = t(5),
                B = t(12),
                a = l(t(50)),
                s = l(t(7)),
                o = l(t(0)),
                i = l(t(2)),
                c = (t(1), t(22), t(4));
            function l(A) {
                return A && A.__esModule ? A : { default: A };
            }
            e.INPUT_COLOR = new o.default([42, 42, 42]);
            var u = new o.default([165, 165, 165]),
                Q = new o.default([222, 222, 222]),
                w = {
                    borderWidth: 1,
                    borderColor: u,
                    borderStyle: B.BORDER_STYLE.SOLID,
                },
                U =
                    ((e.INPUT_BORDERS = [w, w, w, w]),
                    (e.INPUT_BACKGROUND = {
                        backgroundColor: Q,
                        backgroundImage: [],
                        backgroundClip: n.BACKGROUND_CLIP.PADDING_BOX,
                        backgroundOrigin: n.BACKGROUND_ORIGIN.PADDING_BOX,
                    }),
                    new i.default("50%")),
                g = [U, U],
                C = [g, g, g, g],
                d = new i.default("3px"),
                F = [d, d],
                E = [F, F, F, F],
                f =
                    ((e.getInputBorderRadius = function (A) {
                        return "radio" === A.type ? C : E;
                    }),
                    (e.inlineInputElement = function (A, e) {
                        if ("radio" === A.type || "checkbox" === A.type) {
                            if (A.checked) {
                                var t = Math.min(
                                    e.bounds.width,
                                    e.bounds.height
                                );
                                e.childNodes.push(
                                    "checkbox" === A.type
                                        ? [
                                              new s.default(
                                                  e.bounds.left + 0.39363 * t,
                                                  e.bounds.top + 0.79 * t
                                              ),
                                              new s.default(
                                                  e.bounds.left + 0.16 * t,
                                                  e.bounds.top + 0.5549 * t
                                              ),
                                              new s.default(
                                                  e.bounds.left + 0.27347 * t,
                                                  e.bounds.top + 0.44071 * t
                                              ),
                                              new s.default(
                                                  e.bounds.left + 0.39694 * t,
                                                  e.bounds.top + 0.5649 * t
                                              ),
                                              new s.default(
                                                  e.bounds.left + 0.72983 * t,
                                                  e.bounds.top + 0.23 * t
                                              ),
                                              new s.default(
                                                  e.bounds.left + 0.84 * t,
                                                  e.bounds.top + 0.34085 * t
                                              ),
                                              new s.default(
                                                  e.bounds.left + 0.39363 * t,
                                                  e.bounds.top + 0.79 * t
                                              ),
                                          ]
                                        : new a.default(
                                              e.bounds.left + t / 4,
                                              e.bounds.top + t / 4,
                                              t / 4
                                          )
                                );
                            }
                        } else f(h(A), A, e, !1);
                    }),
                    (e.inlineTextAreaElement = function (A, e) {
                        f(A.value, A, e, !0);
                    }),
                    (e.inlineSelectElement = function (A, e) {
                        var t = A.options[A.selectedIndex || 0];
                        f((t && t.text) || "", A, e, !1);
                    }),
                    (e.reformatInputBounds = function (A) {
                        return (
                            A.width > A.height
                                ? ((A.left += (A.width - A.height) / 2),
                                  (A.width = A.height))
                                : A.width < A.height &&
                                  ((A.top += (A.height - A.width) / 2),
                                  (A.height = A.width)),
                            A
                        );
                    }),
                    function (A, e, t, n) {
                        var B = e.ownerDocument.body;
                        if (A.length > 0 && B) {
                            var a =
                                e.ownerDocument.createElement(
                                    "html2canvaswrapper"
                                );
                            (0, c.copyCSSStyles)(
                                e.ownerDocument.defaultView.getComputedStyle(
                                    e,
                                    null
                                ),
                                a
                            ),
                                (a.style.position = "absolute"),
                                (a.style.left = t.bounds.left + "px"),
                                (a.style.top = t.bounds.top + "px"),
                                n || (a.style.whiteSpace = "nowrap");
                            var s = e.ownerDocument.createTextNode(A);
                            a.appendChild(s),
                                B.appendChild(a),
                                t.childNodes.push(r.default.fromTextNode(s, t)),
                                B.removeChild(a);
                        }
                    }),
                h = function (A) {
                    var e =
                        "password" === A.type
                            ? new Array(A.value.length + 1).join("•")
                            : A.value;
                    return 0 === e.length ? A.placeholder || "" : e;
                };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseTextBounds = e.TextBounds = void 0);
            var r,
                n = t(1),
                B = t(11),
                a = t(10),
                s = (r = a) && r.__esModule ? r : { default: r },
                o = t(24);
            var i = (e.TextBounds = function A(e, t) {
                    !(function (A, e) {
                        if (!(A instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, A),
                        (this.text = e),
                        (this.bounds = t);
                }),
                c =
                    ((e.parseTextBounds = function (A, e, t) {
                        for (
                            var r =
                                    0 !== e.style.letterSpacing
                                        ? (0, o.toCodePoints)(A).map(function (
                                              A
                                          ) {
                                              return (0, o.fromCodePoint)(A);
                                          })
                                        : (0, o.breakWords)(A, e),
                                n = r.length,
                                a = t.parentNode
                                    ? t.parentNode.ownerDocument.defaultView
                                    : null,
                                u = a ? a.pageXOffset : 0,
                                Q = a ? a.pageYOffset : 0,
                                w = [],
                                U = 0,
                                g = 0;
                            g < n;
                            g++
                        ) {
                            var C = r[g];
                            if (
                                e.style.textDecoration !==
                                    B.TEXT_DECORATION.NONE ||
                                C.trim().length > 0
                            )
                                if (s.default.SUPPORT_RANGE_BOUNDS)
                                    w.push(new i(C, l(t, U, C.length, u, Q)));
                                else {
                                    var d = t.splitText(C.length);
                                    w.push(new i(C, c(t, u, Q))), (t = d);
                                }
                            else
                                s.default.SUPPORT_RANGE_BOUNDS ||
                                    (t = t.splitText(C.length));
                            U += C.length;
                        }
                        return w;
                    }),
                    function (A, e, t) {
                        var r =
                            A.ownerDocument.createElement("html2canvaswrapper");
                        r.appendChild(A.cloneNode(!0));
                        var B = A.parentNode;
                        if (B) {
                            B.replaceChild(r, A);
                            var a = (0, n.parseBounds)(r, e, t);
                            return (
                                r.firstChild && B.replaceChild(r.firstChild, r),
                                a
                            );
                        }
                        return new n.Bounds(0, 0, 0, 0);
                    }),
                l = function (A, e, t, r, B) {
                    var a = A.ownerDocument.createRange();
                    return (
                        a.setStart(A, e),
                        a.setEnd(A, e + t),
                        n.Bounds.fromClientRect(a.getBoundingClientRect(), r, B)
                    );
                };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(A, r.key, r);
                    }
                }
                return function (e, t, r) {
                    return t && A(e.prototype, t), r && A(e, r), e;
                };
            })();
            var n = (function () {
                function A(e) {
                    !(function (A, e) {
                        if (!(A instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, A),
                        (this.element = e);
                }
                return (
                    r(A, [
                        {
                            key: "render",
                            value: function (A) {
                                var e = this;
                                (this.options = A),
                                    (this.canvas =
                                        document.createElement("canvas")),
                                    (this.ctx = this.canvas.getContext("2d")),
                                    (this.canvas.width =
                                        Math.floor(A.width) * A.scale),
                                    (this.canvas.height =
                                        Math.floor(A.height) * A.scale),
                                    (this.canvas.style.width = A.width + "px"),
                                    (this.canvas.style.height =
                                        A.height + "px"),
                                    A.logger.log(
                                        "ForeignObject renderer initialized (" +
                                            A.width +
                                            "x" +
                                            A.height +
                                            " at " +
                                            A.x +
                                            "," +
                                            A.y +
                                            ") with scale " +
                                            A.scale
                                    );
                                var t = B(
                                    Math.max(A.windowWidth, A.width) * A.scale,
                                    Math.max(A.windowHeight, A.height) *
                                        A.scale,
                                    A.scrollX * A.scale,
                                    A.scrollY * A.scale,
                                    this.element
                                );
                                return a(t).then(function (t) {
                                    return (
                                        A.backgroundColor &&
                                            ((e.ctx.fillStyle =
                                                A.backgroundColor.toString()),
                                            e.ctx.fillRect(
                                                0,
                                                0,
                                                A.width * A.scale,
                                                A.height * A.scale
                                            )),
                                        e.ctx.drawImage(
                                            t,
                                            -A.x * A.scale,
                                            -A.y * A.scale
                                        ),
                                        e.canvas
                                    );
                                });
                            },
                        },
                    ]),
                    A
                );
            })();
            e.default = n;
            var B = (e.createForeignObjectSVG = function (A, e, t, r, n) {
                    var B = "http://www.w3.org/2000/svg",
                        a = document.createElementNS(B, "svg"),
                        s = document.createElementNS(B, "foreignObject");
                    return (
                        a.setAttributeNS(null, "width", A),
                        a.setAttributeNS(null, "height", e),
                        s.setAttributeNS(null, "width", "100%"),
                        s.setAttributeNS(null, "height", "100%"),
                        s.setAttributeNS(null, "x", t),
                        s.setAttributeNS(null, "y", r),
                        s.setAttributeNS(
                            null,
                            "externalResourcesRequired",
                            "true"
                        ),
                        a.appendChild(s),
                        s.appendChild(n),
                        a
                    );
                }),
                a = (e.loadSerializedSVG = function (A) {
                    return new Promise(function (e, t) {
                        var r = new Image();
                        (r.onload = function () {
                            return e(r);
                        }),
                            (r.onerror = t),
                            (r.src =
                                "data:image/svg+xml;charset=utf-8," +
                                encodeURIComponent(
                                    new XMLSerializer().serializeToString(A)
                                ));
                    });
                });
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.breakWords = e.fromCodePoint = e.toCodePoints = void 0);
            var r = t(46);
            Object.defineProperty(e, "toCodePoints", {
                enumerable: !0,
                get: function () {
                    return r.toCodePoints;
                },
            }),
                Object.defineProperty(e, "fromCodePoint", {
                    enumerable: !0,
                    get: function () {
                        return r.fromCodePoint;
                    },
                });
            var n,
                B = t(3),
                a = ((n = B) && n.__esModule, t(18));
            e.breakWords = function (A, e) {
                for (
                    var t = (0, r.LineBreaker)(A, {
                            lineBreak: e.style.lineBreak,
                            wordBreak:
                                e.style.overflowWrap ===
                                a.OVERFLOW_WRAP.BREAK_WORD
                                    ? "break-word"
                                    : e.style.wordBreak,
                        }),
                        n = [],
                        B = void 0;
                    !(B = t.next()).done;

                )
                    n.push(B.value.slice());
                return n;
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.FontMetrics = void 0);
            var r = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                n = t(4);
            e.FontMetrics = (function () {
                function A(e) {
                    !(function (A, e) {
                        if (!(A instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, A),
                        (this._data = {}),
                        (this._document = e);
                }
                return (
                    r(A, [
                        {
                            key: "_parseMetrics",
                            value: function (A) {
                                var e = this._document.createElement("div"),
                                    t = this._document.createElement("img"),
                                    r = this._document.createElement("span"),
                                    B = this._document.body;
                                if (!B) throw new Error("");
                                (e.style.visibility = "hidden"),
                                    (e.style.fontFamily = A.fontFamily),
                                    (e.style.fontSize = A.fontSize),
                                    (e.style.margin = "0"),
                                    (e.style.padding = "0"),
                                    B.appendChild(e),
                                    (t.src = n.SMALL_IMAGE),
                                    (t.width = 1),
                                    (t.height = 1),
                                    (t.style.margin = "0"),
                                    (t.style.padding = "0"),
                                    (t.style.verticalAlign = "baseline"),
                                    (r.style.fontFamily = A.fontFamily),
                                    (r.style.fontSize = A.fontSize),
                                    (r.style.margin = "0"),
                                    (r.style.padding = "0"),
                                    r.appendChild(
                                        this._document.createTextNode(
                                            "Hidden Text"
                                        )
                                    ),
                                    e.appendChild(r),
                                    e.appendChild(t);
                                var a = t.offsetTop - r.offsetTop + 2;
                                e.removeChild(r),
                                    e.appendChild(
                                        this._document.createTextNode(
                                            "Hidden Text"
                                        )
                                    ),
                                    (e.style.lineHeight = "normal"),
                                    (t.style.verticalAlign = "super");
                                var s = t.offsetTop - e.offsetTop + 2;
                                return (
                                    B.removeChild(e), { baseline: a, middle: s }
                                );
                            },
                        },
                        {
                            key: "getMetrics",
                            value: function (A) {
                                var e = A.fontFamily + " " + A.fontSize;
                                return (
                                    void 0 === this._data[e] &&
                                        (this._data[e] = this._parseMetrics(A)),
                                    this._data[e]
                                );
                            },
                        },
                    ]),
                    A
                );
            })();
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.Proxy = void 0);
            var r,
                n = t(10),
                B = (r = n) && r.__esModule ? r : { default: r };
            e.Proxy = function (A, e) {
                if (!e.proxy) return Promise.reject(null);
                var t = e.proxy;
                return new Promise(function (r, n) {
                    var a =
                            B.default.SUPPORT_CORS_XHR &&
                            B.default.SUPPORT_RESPONSE_TYPE
                                ? "blob"
                                : "text",
                        s = B.default.SUPPORT_CORS_XHR
                            ? new XMLHttpRequest()
                            : new XDomainRequest();
                    if (
                        ((s.onload = function () {
                            if (s instanceof XMLHttpRequest)
                                if (200 === s.status)
                                    if ("text" === a) r(s.response);
                                    else {
                                        var A = new FileReader();
                                        A.addEventListener(
                                            "load",
                                            function () {
                                                return r(A.result);
                                            },
                                            !1
                                        ),
                                            A.addEventListener(
                                                "error",
                                                function (A) {
                                                    return n(A);
                                                },
                                                !1
                                            ),
                                            A.readAsDataURL(s.response);
                                    }
                                else n("");
                            else r(s.responseText);
                        }),
                        (s.onerror = n),
                        s.open(
                            "GET",
                            t +
                                "?url=" +
                                encodeURIComponent(A) +
                                "&responseType=" +
                                a
                        ),
                        "text" !== a &&
                            s instanceof XMLHttpRequest &&
                            (s.responseType = a),
                        e.imageTimeout)
                    ) {
                        var o = e.imageTimeout;
                        (s.timeout = o),
                            (s.ontimeout = function () {
                                return n("");
                            });
                    }
                    s.send();
                });
            };
        },
        function (A, e, t) {
            "use strict";
            var r =
                    Object.assign ||
                    function (A) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var r in t)
                                Object.prototype.hasOwnProperty.call(t, r) &&
                                    (A[r] = t[r]);
                        }
                        return A;
                    },
                n = o(t(15)),
                B = o(t(16)),
                a = t(28),
                s = t(1);
            function o(A) {
                return A && A.__esModule ? A : { default: A };
            }
            var i = function (A, e) {
                var t = e || {},
                    o = new B.default(
                        "boolean" != typeof t.logging || t.logging
                    );
                o.log("html2canvas 1.0.0-alpha.10");
                var i = A.ownerDocument;
                if (!i)
                    return Promise.reject(
                        "Provided element is not within a Document"
                    );
                var c = i.defaultView,
                    l = c.pageXOffset,
                    u = c.pageYOffset,
                    Q =
                        "HTML" === A.tagName || "BODY" === A.tagName
                            ? (0, s.parseDocumentSize)(i)
                            : (0, s.parseBounds)(A, l, u),
                    w = Q.width,
                    U = Q.height,
                    g = Q.left,
                    C = Q.top,
                    d = {
                        async: !0,
                        allowTaint: !1,
                        backgroundColor: "#ffffff",
                        imageTimeout: 15e3,
                        logging: !0,
                        proxy: null,
                        removeContainer: !0,
                        foreignObjectRendering: !1,
                        scale: c.devicePixelRatio || 1,
                        target: new n.default(t.canvas),
                        useCORS: !1,
                        x: g,
                        y: C,
                        width: Math.ceil(w),
                        height: Math.ceil(U),
                        windowWidth: c.innerWidth,
                        windowHeight: c.innerHeight,
                        scrollX: c.pageXOffset,
                        scrollY: c.pageYOffset,
                    },
                    F = (0, a.renderElement)(A, r({}, d, t), o);
                return F;
            };
            (i.CanvasRenderer = n.default), (A.exports = i);
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.renderElement = void 0);
            var r = (function () {
                    return function (A, e) {
                        if (Array.isArray(A)) return A;
                        if (Symbol.iterator in Object(A))
                            return (function (A, e) {
                                var t = [],
                                    r = !0,
                                    n = !1,
                                    B = void 0;
                                try {
                                    for (
                                        var a, s = A[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (t.push(a.value), !e || t.length !== e);
                                        r = !0
                                    );
                                } catch (A) {
                                    (n = !0), (B = A);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (n) throw B;
                                    }
                                }
                                return t;
                            })(A, e);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                n = (Q(t(16)), t(29)),
                B = Q(t(51)),
                a = Q(t(23)),
                s = Q(t(10)),
                o = t(1),
                i = t(54),
                c = t(25),
                l = t(0),
                u = Q(l);
            function Q(A) {
                return A && A.__esModule ? A : { default: A };
            }
            e.renderElement = function A(e, t, Q) {
                var w = e.ownerDocument,
                    U = new o.Bounds(
                        t.scrollX,
                        t.scrollY,
                        t.windowWidth,
                        t.windowHeight
                    ),
                    g = w.documentElement
                        ? new u.default(
                              getComputedStyle(
                                  w.documentElement
                              ).backgroundColor
                          )
                        : l.TRANSPARENT,
                    C = w.body
                        ? new u.default(
                              getComputedStyle(w.body).backgroundColor
                          )
                        : l.TRANSPARENT,
                    d =
                        e === w.documentElement
                            ? g.isTransparent()
                                ? C.isTransparent()
                                    ? t.backgroundColor
                                        ? new u.default(t.backgroundColor)
                                        : null
                                    : C
                                : g
                            : t.backgroundColor
                            ? new u.default(t.backgroundColor)
                            : null;
                return (
                    t.foreignObjectRendering
                        ? s.default.SUPPORT_FOREIGNOBJECT_DRAWING
                        : Promise.resolve(!1)
                ).then(function (s) {
                    return s
                        ? (o = new i.DocumentCloner(e, t, Q, !0, A))
                              .inlineFonts(w)
                              .then(function () {
                                  return o.resourceLoader.ready();
                              })
                              .then(function () {
                                  return new a.default(
                                      o.documentElement
                                  ).render({
                                      backgroundColor: d,
                                      logger: Q,
                                      scale: t.scale,
                                      x: t.x,
                                      y: t.y,
                                      width: t.width,
                                      height: t.height,
                                      windowWidth: t.windowWidth,
                                      windowHeight: t.windowHeight,
                                      scrollX: t.scrollX,
                                      scrollY: t.scrollY,
                                  });
                              })
                        : (0, i.cloneWindow)(w, U, e, t, Q, A).then(function (
                              A
                          ) {
                              var e = r(A, 3),
                                  a = e[0],
                                  s = e[1],
                                  o = e[2];
                              var i = (0, n.NodeParser)(s, o, Q),
                                  u = s.ownerDocument;
                              return (
                                  d ===
                                      i.container.style.background
                                          .backgroundColor &&
                                      (i.container.style.background.backgroundColor =
                                          l.TRANSPARENT),
                                  o.ready().then(function (A) {
                                      var e = new c.FontMetrics(u);
                                      var r = {
                                          backgroundColor: d,
                                          fontMetrics: e,
                                          imageStore: A,
                                          logger: Q,
                                          scale: t.scale,
                                          x: t.x,
                                          y: t.y,
                                          width: t.width,
                                          height: t.height,
                                      };
                                      if (Array.isArray(t.target))
                                          return Promise.all(
                                              t.target.map(function (A) {
                                                  return new B.default(
                                                      A,
                                                      r
                                                  ).render(i);
                                              })
                                          );
                                      var n = new B.default(t.target, r).render(
                                          i
                                      );
                                      return (
                                          !0 === t.removeContainer &&
                                              a.parentNode &&
                                              a.parentNode.removeChild(a),
                                          n
                                      );
                                  })
                              );
                          });
                    var o;
                });
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.NodeParser = void 0);
            var r = i(t(30)),
                n = i(t(3)),
                B = i(t(9)),
                a = t(21),
                s = t(14),
                o = t(8);
            function i(A) {
                return A && A.__esModule ? A : { default: A };
            }
            e.NodeParser = function (A, e, t) {
                var B = 0,
                    a = new n.default(A, null, e, B++),
                    s = new r.default(a, null, !0);
                return l(A, a, s, e, B), s;
            };
            var c = ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"],
                l = function A(e, t, i, l, w) {
                    for (var U, g = e.firstChild; g; g = U) {
                        U = g.nextSibling;
                        var C = g.ownerDocument.defaultView;
                        if (
                            g instanceof C.Text ||
                            g instanceof Text ||
                            (C.parent && g instanceof C.parent.Text)
                        )
                            g.data.trim().length > 0 &&
                                t.childNodes.push(B.default.fromTextNode(g, t));
                        else if (
                            g instanceof C.HTMLElement ||
                            g instanceof HTMLElement ||
                            (C.parent && g instanceof C.parent.HTMLElement)
                        ) {
                            if (-1 === c.indexOf(g.nodeName)) {
                                var d = new n.default(g, t, l, w++);
                                if (d.isVisible()) {
                                    "INPUT" === g.tagName
                                        ? (0, a.inlineInputElement)(g, d)
                                        : "TEXTAREA" === g.tagName
                                        ? (0, a.inlineTextAreaElement)(g, d)
                                        : "SELECT" === g.tagName
                                        ? (0, a.inlineSelectElement)(g, d)
                                        : d.style.listStyle &&
                                          d.style.listStyle.listStyleType !==
                                              o.LIST_STYLE_TYPE.NONE &&
                                          (0, s.inlineListItemElement)(g, d, l);
                                    var F = "TEXTAREA" !== g.tagName,
                                        E = u(d, g);
                                    if (E || Q(d)) {
                                        var f =
                                                E || d.isPositioned()
                                                    ? i.getRealParentStackingContext()
                                                    : i,
                                            h = new r.default(d, f, E);
                                        f.contexts.push(h),
                                            F && A(g, d, h, l, w);
                                    } else
                                        i.children.push(d),
                                            F && A(g, d, i, l, w);
                                }
                            }
                        } else if (
                            g instanceof C.SVGSVGElement ||
                            g instanceof SVGSVGElement ||
                            (C.parent && g instanceof C.parent.SVGSVGElement)
                        ) {
                            var H = new n.default(g, t, l, w++),
                                p = u(H, g);
                            if (p || Q(H)) {
                                var N =
                                        p || H.isPositioned()
                                            ? i.getRealParentStackingContext()
                                            : i,
                                    I = new r.default(H, N, p);
                                N.contexts.push(I);
                            } else i.children.push(H);
                        }
                    }
                },
                u = function (A, e) {
                    return (
                        A.isRootElement() ||
                        A.isPositionedWithZIndex() ||
                        A.style.opacity < 1 ||
                        A.isTransformed() ||
                        w(A, e)
                    );
                },
                Q = function (A) {
                    return A.isPositioned() || A.isFloating();
                },
                w = function (A, e) {
                    return (
                        "BODY" === e.nodeName &&
                        A.parent instanceof n.default &&
                        A.parent.style.background.backgroundColor.isTransparent()
                    );
                };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r,
                n = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                B = t(3);
            (r = B) && r.__esModule, t(19);
            var a = (function () {
                function A(e, t, r) {
                    !(function (A, e) {
                        if (!(A instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, A),
                        (this.container = e),
                        (this.parent = t),
                        (this.contexts = []),
                        (this.children = []),
                        (this.treatAsRealStackingContext = r);
                }
                return (
                    n(A, [
                        {
                            key: "getOpacity",
                            value: function () {
                                return this.parent
                                    ? this.container.style.opacity *
                                          this.parent.getOpacity()
                                    : this.container.style.opacity;
                            },
                        },
                        {
                            key: "getRealParentStackingContext",
                            value: function () {
                                return !this.parent ||
                                    this.treatAsRealStackingContext
                                    ? this
                                    : this.parent.getRealParentStackingContext();
                            },
                        },
                    ]),
                    A
                );
            })();
            e.default = a;
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.default = function A(e, t) {
                !(function (A, e) {
                    if (!(A instanceof e))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, A),
                    (this.width = e),
                    (this.height = t);
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r,
                n = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                B = t(6),
                a = t(7),
                s = (r = a) && r.__esModule ? r : { default: r };
            var o = function (A, e, t) {
                    return new s.default(
                        A.x + (e.x - A.x) * t,
                        A.y + (e.y - A.y) * t
                    );
                },
                i = (function () {
                    function A(e, t, r, n) {
                        !(function (A, e) {
                            if (!(A instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, A),
                            (this.type = B.PATH.BEZIER_CURVE),
                            (this.start = e),
                            (this.startControl = t),
                            (this.endControl = r),
                            (this.end = n);
                    }
                    return (
                        n(A, [
                            {
                                key: "subdivide",
                                value: function (e, t) {
                                    var r = o(this.start, this.startControl, e),
                                        n = o(
                                            this.startControl,
                                            this.endControl,
                                            e
                                        ),
                                        B = o(this.endControl, this.end, e),
                                        a = o(r, n, e),
                                        s = o(n, B, e),
                                        i = o(a, s, e);
                                    return t
                                        ? new A(this.start, r, a, i)
                                        : new A(i, s, B, this.end);
                                },
                            },
                            {
                                key: "reverse",
                                value: function () {
                                    return new A(
                                        this.end,
                                        this.endControl,
                                        this.startControl,
                                        this.start
                                    );
                                },
                            },
                        ]),
                        A
                    );
                })();
            e.default = i;
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseBorderRadius = void 0);
            var r,
                n = (function () {
                    return function (A, e) {
                        if (Array.isArray(A)) return A;
                        if (Symbol.iterator in Object(A))
                            return (function (A, e) {
                                var t = [],
                                    r = !0,
                                    n = !1,
                                    B = void 0;
                                try {
                                    for (
                                        var a, s = A[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (t.push(a.value), !e || t.length !== e);
                                        r = !0
                                    );
                                } catch (A) {
                                    (n = !0), (B = A);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (n) throw B;
                                    }
                                }
                                return t;
                            })(A, e);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                B = t(2),
                a = (r = B) && r.__esModule ? r : { default: r };
            var s = ["top-left", "top-right", "bottom-right", "bottom-left"];
            e.parseBorderRadius = function (A) {
                return s.map(function (e) {
                    var t = A.getPropertyValue("border-" + e + "-radius")
                            .split(" ")
                            .map(a.default.create),
                        r = n(t, 2),
                        B = r[0],
                        s = r[1];
                    return void 0 === s ? [B, B] : [B, s];
                });
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.DISPLAY = {
                    NONE: 1,
                    BLOCK: 2,
                    INLINE: 4,
                    RUN_IN: 8,
                    FLOW: 16,
                    FLOW_ROOT: 32,
                    TABLE: 64,
                    FLEX: 128,
                    GRID: 256,
                    RUBY: 512,
                    SUBGRID: 1024,
                    LIST_ITEM: 2048,
                    TABLE_ROW_GROUP: 4096,
                    TABLE_HEADER_GROUP: 8192,
                    TABLE_FOOTER_GROUP: 16384,
                    TABLE_ROW: 32768,
                    TABLE_CELL: 65536,
                    TABLE_COLUMN_GROUP: 1 << 17,
                    TABLE_COLUMN: 1 << 18,
                    TABLE_CAPTION: 1 << 19,
                    RUBY_BASE: 1 << 20,
                    RUBY_TEXT: 1 << 21,
                    RUBY_BASE_CONTAINER: 1 << 22,
                    RUBY_TEXT_CONTAINER: 1 << 23,
                    CONTENTS: 1 << 24,
                    INLINE_BLOCK: 1 << 25,
                    INLINE_LIST_ITEM: 1 << 26,
                    INLINE_TABLE: 1 << 27,
                    INLINE_FLEX: 1 << 28,
                    INLINE_GRID: 1 << 29,
                }),
                n = function (A, e) {
                    return (
                        A |
                        (function (A) {
                            switch (A) {
                                case "block":
                                    return r.BLOCK;
                                case "inline":
                                    return r.INLINE;
                                case "run-in":
                                    return r.RUN_IN;
                                case "flow":
                                    return r.FLOW;
                                case "flow-root":
                                    return r.FLOW_ROOT;
                                case "table":
                                    return r.TABLE;
                                case "flex":
                                    return r.FLEX;
                                case "grid":
                                    return r.GRID;
                                case "ruby":
                                    return r.RUBY;
                                case "subgrid":
                                    return r.SUBGRID;
                                case "list-item":
                                    return r.LIST_ITEM;
                                case "table-row-group":
                                    return r.TABLE_ROW_GROUP;
                                case "table-header-group":
                                    return r.TABLE_HEADER_GROUP;
                                case "table-footer-group":
                                    return r.TABLE_FOOTER_GROUP;
                                case "table-row":
                                    return r.TABLE_ROW;
                                case "table-cell":
                                    return r.TABLE_CELL;
                                case "table-column-group":
                                    return r.TABLE_COLUMN_GROUP;
                                case "table-column":
                                    return r.TABLE_COLUMN;
                                case "table-caption":
                                    return r.TABLE_CAPTION;
                                case "ruby-base":
                                    return r.RUBY_BASE;
                                case "ruby-text":
                                    return r.RUBY_TEXT;
                                case "ruby-base-container":
                                    return r.RUBY_BASE_CONTAINER;
                                case "ruby-text-container":
                                    return r.RUBY_TEXT_CONTAINER;
                                case "contents":
                                    return r.CONTENTS;
                                case "inline-block":
                                    return r.INLINE_BLOCK;
                                case "inline-list-item":
                                    return r.INLINE_LIST_ITEM;
                                case "inline-table":
                                    return r.INLINE_TABLE;
                                case "inline-flex":
                                    return r.INLINE_FLEX;
                                case "inline-grid":
                                    return r.INLINE_GRID;
                            }
                            return r.NONE;
                        })(e)
                    );
                };
            e.parseDisplay = function (A) {
                return A.split(" ").reduce(n, 0);
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.FLOAT = {
                NONE: 0,
                LEFT: 1,
                RIGHT: 2,
                INLINE_START: 3,
                INLINE_END: 4,
            });
            e.parseCSSFloat = function (A) {
                switch (A) {
                    case "left":
                        return r.LEFT;
                    case "right":
                        return r.RIGHT;
                    case "inline-start":
                        return r.INLINE_START;
                    case "inline-end":
                        return r.INLINE_END;
                }
                return r.NONE;
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.parseFont = function (A) {
                return {
                    fontFamily: A.fontFamily,
                    fontSize: A.fontSize,
                    fontStyle: A.fontStyle,
                    fontVariant: A.fontVariant,
                    fontWeight: (function (A) {
                        switch (A) {
                            case "normal":
                                return 400;
                            case "bold":
                                return 700;
                        }
                        var e = parseInt(A, 10);
                        return isNaN(e) ? 400 : e;
                    })(A.fontWeight),
                };
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.parseLetterSpacing = function (A) {
                if ("normal" === A) return 0;
                var e = parseFloat(A);
                return isNaN(e) ? 0 : e;
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.LINE_BREAK = { NORMAL: "normal", STRICT: "strict" });
            e.parseLineBreak = function (A) {
                switch (A) {
                    case "strict":
                        return r.STRICT;
                    case "normal":
                    default:
                        return r.NORMAL;
                }
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseMargin = void 0);
            var r,
                n = t(2),
                B = (r = n) && r.__esModule ? r : { default: r };
            var a = ["top", "right", "bottom", "left"];
            e.parseMargin = function (A) {
                return a.map(function (e) {
                    return new B.default(A.getPropertyValue("margin-" + e));
                });
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.OVERFLOW = {
                VISIBLE: 0,
                HIDDEN: 1,
                SCROLL: 2,
                AUTO: 3,
            });
            e.parseOverflow = function (A) {
                switch (A) {
                    case "hidden":
                        return r.HIDDEN;
                    case "scroll":
                        return r.SCROLL;
                    case "auto":
                        return r.AUTO;
                    case "visible":
                    default:
                        return r.VISIBLE;
                }
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseTextShadow = void 0);
            var r,
                n = t(0),
                B = (r = n) && r.__esModule ? r : { default: r };
            var a = /^([+-]|\d|\.)$/i;
            e.parseTextShadow = function (A) {
                if ("none" === A || "string" != typeof A) return null;
                for (
                    var e = "",
                        t = !1,
                        r = [],
                        n = [],
                        s = 0,
                        o = null,
                        i = function () {
                            e.length &&
                                (t
                                    ? r.push(parseFloat(e))
                                    : (o = new B.default(e))),
                                (t = !1),
                                (e = "");
                        },
                        c = function () {
                            r.length &&
                                null !== o &&
                                n.push({
                                    color: o,
                                    offsetX: r[0] || 0,
                                    offsetY: r[1] || 0,
                                    blur: r[2] || 0,
                                }),
                                r.splice(0, r.length),
                                (o = null);
                        },
                        l = 0;
                    l < A.length;
                    l++
                ) {
                    var u = A[l];
                    switch (u) {
                        case "(":
                            (e += u), s++;
                            break;
                        case ")":
                            (e += u), s--;
                            break;
                        case ",":
                            0 === s ? (i(), c()) : (e += u);
                            break;
                        case " ":
                            0 === s ? i() : (e += u);
                            break;
                        default:
                            0 === e.length && a.test(u) && (t = !0), (e += u);
                    }
                }
                return i(), c(), 0 === n.length ? null : n;
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseTransform = void 0);
            var r,
                n = t(2),
                B = (r = n) && r.__esModule ? r : { default: r };
            var a = function (A) {
                    return parseFloat(A.trim());
                },
                s = /(matrix|matrix3d)\((.+)\)/,
                o =
                    ((e.parseTransform = function (A) {
                        var e = i(
                            A.transform ||
                                A.webkitTransform ||
                                A.mozTransform ||
                                A.msTransform ||
                                A.oTransform
                        );
                        return null === e
                            ? null
                            : {
                                  transform: e,
                                  transformOrigin: o(
                                      A.transformOrigin ||
                                          A.webkitTransformOrigin ||
                                          A.mozTransformOrigin ||
                                          A.msTransformOrigin ||
                                          A.oTransformOrigin
                                  ),
                              };
                    }),
                    function (A) {
                        if ("string" != typeof A) {
                            var e = new B.default("0");
                            return [e, e];
                        }
                        var t = A.split(" ").map(B.default.create);
                        return [t[0], t[1]];
                    }),
                i = function (A) {
                    if ("none" === A || "string" != typeof A) return null;
                    var e = A.match(s);
                    if (e) {
                        if ("matrix" === e[1]) {
                            var t = e[2].split(",").map(a);
                            return [t[0], t[1], t[2], t[3], t[4], t[5]];
                        }
                        var r = e[2].split(",").map(a);
                        return [r[0], r[1], r[4], r[5], r[12], r[13]];
                    }
                    return null;
                };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.VISIBILITY = { VISIBLE: 0, HIDDEN: 1, COLLAPSE: 2 });
            e.parseVisibility = function (A) {
                switch (A) {
                    case "hidden":
                        return r.HIDDEN;
                    case "collapse":
                        return r.COLLAPSE;
                    case "visible":
                    default:
                        return r.VISIBLE;
                }
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (e.WORD_BREAK = {
                NORMAL: "normal",
                BREAK_ALL: "break-all",
                KEEP_ALL: "keep-all",
            });
            e.parseWordBreak = function (A) {
                switch (A) {
                    case "break-all":
                        return r.BREAK_ALL;
                    case "keep-all":
                        return r.KEEP_ALL;
                    case "normal":
                    default:
                        return r.NORMAL;
                }
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.parseZIndex = function (A) {
                var e = "auto" === A;
                return { auto: e, order: e ? 0 : parseInt(A, 10) };
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = t(13);
            Object.defineProperty(e, "toCodePoints", {
                enumerable: !0,
                get: function () {
                    return r.toCodePoints;
                },
            }),
                Object.defineProperty(e, "fromCodePoint", {
                    enumerable: !0,
                    get: function () {
                        return r.fromCodePoint;
                    },
                });
            var n = t(47);
            Object.defineProperty(e, "LineBreaker", {
                enumerable: !0,
                get: function () {
                    return n.LineBreaker;
                },
            });
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.LineBreaker =
                    e.inlineBreakOpportunities =
                    e.lineBreakAtIndex =
                    e.codePointsToCharacterClasses =
                    e.UnicodeTrie =
                    e.BREAK_ALLOWED =
                    e.BREAK_NOT_ALLOWED =
                    e.BREAK_MANDATORY =
                    e.classes =
                    e.LETTER_NUMBER_MODIFIER =
                        void 0);
            var r,
                n = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                B = (function () {
                    return function (A, e) {
                        if (Array.isArray(A)) return A;
                        if (Symbol.iterator in Object(A))
                            return (function (A, e) {
                                var t = [],
                                    r = !0,
                                    n = !1,
                                    B = void 0;
                                try {
                                    for (
                                        var a, s = A[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (t.push(a.value), !e || t.length !== e);
                                        r = !0
                                    );
                                } catch (A) {
                                    (n = !0), (B = A);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (n) throw B;
                                    }
                                }
                                return t;
                            })(A, e);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                a = t(48),
                s = t(49),
                o = (r = s) && r.__esModule ? r : { default: r },
                i = t(13);
            var c = (e.LETTER_NUMBER_MODIFIER = 50),
                l = 10,
                u = 13,
                Q = 15,
                w = 17,
                U = 18,
                g = 19,
                C = 20,
                d = 21,
                F = 22,
                E = 24,
                f = 25,
                h = 26,
                H = 27,
                p = 28,
                N = 30,
                I = 32,
                K = 33,
                T = 34,
                m = 35,
                v = 37,
                y = 38,
                b = 39,
                S = 40,
                L = 42,
                _ =
                    ((e.classes = {
                        BK: 1,
                        CR: 2,
                        LF: 3,
                        CM: 4,
                        NL: 5,
                        SG: 6,
                        WJ: 7,
                        ZW: 8,
                        GL: 9,
                        SP: l,
                        ZWJ: 11,
                        B2: 12,
                        BA: u,
                        BB: 14,
                        HY: Q,
                        CB: 16,
                        CL: w,
                        CP: U,
                        EX: g,
                        IN: C,
                        NS: d,
                        OP: F,
                        QU: 23,
                        IS: E,
                        NU: f,
                        PO: h,
                        PR: H,
                        SY: p,
                        AI: 29,
                        AL: N,
                        CJ: 31,
                        EB: I,
                        EM: K,
                        H2: T,
                        H3: m,
                        HL: 36,
                        ID: v,
                        JL: y,
                        JV: b,
                        JT: S,
                        RI: 41,
                        SA: L,
                        XX: 43,
                    }),
                    (e.BREAK_MANDATORY = "!")),
                D = (e.BREAK_NOT_ALLOWED = "×"),
                M = (e.BREAK_ALLOWED = "÷"),
                O = (e.UnicodeTrie = (0, a.createTrieFromBase64)(o.default)),
                R = [N, 36],
                P = [1, 2, 3, 5],
                X = [l, 8],
                z = [H, h],
                x = P.concat(X),
                V = [y, b, S, T, m],
                k = [Q, u],
                J = (e.codePointsToCharacterClasses = function (A) {
                    var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "strict",
                        t = [],
                        r = [],
                        n = [];
                    return (
                        A.forEach(function (A, B) {
                            var a = O.get(A);
                            if (
                                (a > c ? (n.push(!0), (a -= c)) : n.push(!1),
                                -1 !== ["normal", "auto", "loose"].indexOf(e) &&
                                    -1 !==
                                        [8208, 8211, 12316, 12448].indexOf(A))
                            )
                                return r.push(B), t.push(16);
                            if (4 === a || 11 === a) {
                                if (0 === B) return r.push(B), t.push(N);
                                var s = t[B - 1];
                                return -1 === x.indexOf(s)
                                    ? (r.push(r[B - 1]), t.push(s))
                                    : (r.push(B), t.push(N));
                            }
                            return (
                                r.push(B),
                                31 === a
                                    ? t.push("strict" === e ? d : v)
                                    : a === L
                                    ? t.push(N)
                                    : 29 === a
                                    ? t.push(N)
                                    : 43 === a
                                    ? (A >= 131072 && A <= 196605) ||
                                      (A >= 196608 && A <= 262141)
                                        ? t.push(v)
                                        : t.push(N)
                                    : void t.push(a)
                            );
                        }),
                        [r, t, n]
                    );
                }),
                G = function (A, e, t, r) {
                    var n = r[t];
                    if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n)
                        for (var B = t; B <= r.length; ) {
                            var a = r[++B];
                            if (a === e) return !0;
                            if (a !== l) break;
                        }
                    if (n === l)
                        for (var s = t; s > 0; ) {
                            var o = r[--s];
                            if (
                                Array.isArray(A) ? -1 !== A.indexOf(o) : A === o
                            )
                                for (var i = t; i <= r.length; ) {
                                    var c = r[++i];
                                    if (c === e) return !0;
                                    if (c !== l) break;
                                }
                            if (o !== l) break;
                        }
                    return !1;
                },
                Y = function (A, e) {
                    for (var t = A; t >= 0; ) {
                        var r = e[t];
                        if (r !== l) return r;
                        t--;
                    }
                    return 0;
                },
                W = function (A, e, t, r, n) {
                    if (0 === t[r]) return D;
                    var B = r - 1;
                    if (Array.isArray(n) && !0 === n[B]) return D;
                    var a = B - 1,
                        s = B + 1,
                        o = e[B],
                        i = a >= 0 ? e[a] : 0,
                        c = e[s];
                    if (2 === o && 3 === c) return D;
                    if (-1 !== P.indexOf(o)) return _;
                    if (-1 !== P.indexOf(c)) return D;
                    if (-1 !== X.indexOf(c)) return D;
                    if (8 === Y(B, e)) return M;
                    if (11 === O.get(A[B]) && (c === v || c === I || c === K))
                        return D;
                    if (7 === o || 7 === c) return D;
                    if (9 === o) return D;
                    if (-1 === [l, u, Q].indexOf(o) && 9 === c) return D;
                    if (-1 !== [w, U, g, E, p].indexOf(c)) return D;
                    if (Y(B, e) === F) return D;
                    if (G(23, F, B, e)) return D;
                    if (G([w, U], d, B, e)) return D;
                    if (G(12, 12, B, e)) return D;
                    if (o === l) return M;
                    if (23 === o || 23 === c) return D;
                    if (16 === c || 16 === o) return M;
                    if (-1 !== [u, Q, d].indexOf(c) || 14 === o) return D;
                    if (36 === i && -1 !== k.indexOf(o)) return D;
                    if (o === p && 36 === c) return D;
                    if (c === C && -1 !== R.concat(C, g, f, v, I, K).indexOf(o))
                        return D;
                    if (
                        (-1 !== R.indexOf(c) && o === f) ||
                        (-1 !== R.indexOf(o) && c === f)
                    )
                        return D;
                    if (
                        (o === H && -1 !== [v, I, K].indexOf(c)) ||
                        (-1 !== [v, I, K].indexOf(o) && c === h)
                    )
                        return D;
                    if (
                        (-1 !== R.indexOf(o) && -1 !== z.indexOf(c)) ||
                        (-1 !== z.indexOf(o) && -1 !== R.indexOf(c))
                    )
                        return D;
                    if (
                        (-1 !== [H, h].indexOf(o) &&
                            (c === f ||
                                (-1 !== [F, Q].indexOf(c) &&
                                    e[s + 1] === f))) ||
                        (-1 !== [F, Q].indexOf(o) && c === f) ||
                        (o === f && -1 !== [f, p, E].indexOf(c))
                    )
                        return D;
                    if (-1 !== [f, p, E, w, U].indexOf(c))
                        for (var N = B; N >= 0; ) {
                            var L = e[N];
                            if (L === f) return D;
                            if (-1 === [p, E].indexOf(L)) break;
                            N--;
                        }
                    if (-1 !== [H, h].indexOf(c))
                        for (
                            var x = -1 !== [w, U].indexOf(o) ? a : B;
                            x >= 0;

                        ) {
                            var J = e[x];
                            if (J === f) return D;
                            if (-1 === [p, E].indexOf(J)) break;
                            x--;
                        }
                    if (
                        (y === o && -1 !== [y, b, T, m].indexOf(c)) ||
                        (-1 !== [b, T].indexOf(o) &&
                            -1 !== [b, S].indexOf(c)) ||
                        (-1 !== [S, m].indexOf(o) && c === S)
                    )
                        return D;
                    if (
                        (-1 !== V.indexOf(o) && -1 !== [C, h].indexOf(c)) ||
                        (-1 !== V.indexOf(c) && o === H)
                    )
                        return D;
                    if (-1 !== R.indexOf(o) && -1 !== R.indexOf(c)) return D;
                    if (o === E && -1 !== R.indexOf(c)) return D;
                    if (
                        (-1 !== R.concat(f).indexOf(o) && c === F) ||
                        (-1 !== R.concat(f).indexOf(c) && o === U)
                    )
                        return D;
                    if (41 === o && 41 === c) {
                        for (var W = t[B], j = 1; W > 0 && 41 === e[--W]; ) j++;
                        if (j % 2 != 0) return D;
                    }
                    return o === I && c === K ? D : M;
                },
                j =
                    ((e.lineBreakAtIndex = function (A, e) {
                        if (0 === e) return D;
                        if (e >= A.length) return _;
                        var t = J(A),
                            r = B(t, 2),
                            n = r[0],
                            a = r[1];
                        return W(A, a, n, e);
                    }),
                    function (A, e) {
                        e || (e = { lineBreak: "normal", wordBreak: "normal" });
                        var t = J(A, e.lineBreak),
                            r = B(t, 3),
                            n = r[0],
                            a = r[1],
                            s = r[2];
                        return (
                            ("break-all" !== e.wordBreak &&
                                "break-word" !== e.wordBreak) ||
                                (a = a.map(function (A) {
                                    return -1 !== [f, N, L].indexOf(A) ? v : A;
                                })),
                            [
                                n,
                                a,
                                "keep-all" === e.wordBreak
                                    ? s.map(function (e, t) {
                                          return (
                                              e &&
                                              A[t] >= 19968 &&
                                              A[t] <= 40959
                                          );
                                      })
                                    : null,
                            ]
                        );
                    }),
                q =
                    ((e.inlineBreakOpportunities = function (A, e) {
                        var t = (0, i.toCodePoints)(A),
                            r = D,
                            n = j(t, e),
                            a = B(n, 3),
                            s = a[0],
                            o = a[1],
                            c = a[2];
                        return (
                            t.forEach(function (A, e) {
                                r +=
                                    (0, i.fromCodePoint)(A) +
                                    (e >= t.length - 1
                                        ? _
                                        : W(t, o, s, e + 1, c));
                            }),
                            r
                        );
                    }),
                    (function () {
                        function A(e, t, r, n) {
                            !(function (A, e) {
                                if (!(A instanceof e))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, A),
                                (this._codePoints = e),
                                (this.required = t === _),
                                (this.start = r),
                                (this.end = n);
                        }
                        return (
                            n(A, [
                                {
                                    key: "slice",
                                    value: function () {
                                        return i.fromCodePoint.apply(
                                            void 0,
                                            (function (A) {
                                                if (Array.isArray(A)) {
                                                    for (
                                                        var e = 0,
                                                            t = Array(A.length);
                                                        e < A.length;
                                                        e++
                                                    )
                                                        t[e] = A[e];
                                                    return t;
                                                }
                                                return Array.from(A);
                                            })(
                                                this._codePoints.slice(
                                                    this.start,
                                                    this.end
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            A
                        );
                    })());
            e.LineBreaker = function (A, e) {
                var t = (0, i.toCodePoints)(A),
                    r = j(t, e),
                    n = B(r, 3),
                    a = n[0],
                    s = n[1],
                    o = n[2],
                    c = t.length,
                    l = 0,
                    u = 0;
                return {
                    next: function () {
                        if (u >= c) return { done: !0 };
                        for (
                            var A = D;
                            u < c && (A = W(t, s, a, ++u, o)) === D;

                        );
                        if (A !== D || u === c) {
                            var e = new q(t, A, l, u);
                            return (l = u), { value: e, done: !1 };
                        }
                        return { done: !0 };
                    },
                };
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.Trie =
                    e.createTrieFromBase64 =
                    e.UTRIE2_INDEX_2_MASK =
                    e.UTRIE2_INDEX_2_BLOCK_LENGTH =
                    e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH =
                    e.UTRIE2_INDEX_1_OFFSET =
                    e.UTRIE2_UTF8_2B_INDEX_2_LENGTH =
                    e.UTRIE2_UTF8_2B_INDEX_2_OFFSET =
                    e.UTRIE2_INDEX_2_BMP_LENGTH =
                    e.UTRIE2_LSCP_INDEX_2_LENGTH =
                    e.UTRIE2_DATA_MASK =
                    e.UTRIE2_DATA_BLOCK_LENGTH =
                    e.UTRIE2_LSCP_INDEX_2_OFFSET =
                    e.UTRIE2_SHIFT_1_2 =
                    e.UTRIE2_INDEX_SHIFT =
                    e.UTRIE2_SHIFT_1 =
                    e.UTRIE2_SHIFT_2 =
                        void 0);
            var r = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                n = t(13);
            var B = (e.UTRIE2_SHIFT_2 = 5),
                a = (e.UTRIE2_SHIFT_1 = 11),
                s = (e.UTRIE2_INDEX_SHIFT = 2),
                o = (e.UTRIE2_SHIFT_1_2 = a - B),
                i = (e.UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> B),
                c = (e.UTRIE2_DATA_BLOCK_LENGTH = 1 << B),
                l = (e.UTRIE2_DATA_MASK = c - 1),
                u = (e.UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> B),
                Q = (e.UTRIE2_INDEX_2_BMP_LENGTH = i + u),
                w = (e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = Q),
                U = (e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32),
                g = (e.UTRIE2_INDEX_1_OFFSET = w + U),
                C = (e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> a),
                d = (e.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << o),
                F = (e.UTRIE2_INDEX_2_MASK = d - 1),
                E =
                    ((e.createTrieFromBase64 = function (A) {
                        var e = (0, n.decode)(A),
                            t = Array.isArray(e)
                                ? (0, n.polyUint32Array)(e)
                                : new Uint32Array(e),
                            r = Array.isArray(e)
                                ? (0, n.polyUint16Array)(e)
                                : new Uint16Array(e),
                            B = r.slice(12, t[4] / 2),
                            a =
                                2 === t[5]
                                    ? r.slice((24 + t[4]) / 2)
                                    : t.slice(Math.ceil((24 + t[4]) / 4));
                        return new E(t[0], t[1], t[2], t[3], B, a);
                    }),
                    (e.Trie = (function () {
                        function A(e, t, r, n, B, a) {
                            !(function (A, e) {
                                if (!(A instanceof e))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, A),
                                (this.initialValue = e),
                                (this.errorValue = t),
                                (this.highStart = r),
                                (this.highValueIndex = n),
                                (this.index = B),
                                (this.data = a);
                        }
                        return (
                            r(A, [
                                {
                                    key: "get",
                                    value: function (A) {
                                        var e = void 0;
                                        if (A >= 0) {
                                            if (
                                                A < 55296 ||
                                                (A > 56319 && A <= 65535)
                                            )
                                                return (
                                                    (e =
                                                        ((e =
                                                            this.index[
                                                                A >> B
                                                            ]) <<
                                                            s) +
                                                        (A & l)),
                                                    this.data[e]
                                                );
                                            if (A <= 65535)
                                                return (
                                                    (e =
                                                        ((e =
                                                            this.index[
                                                                i +
                                                                    ((A -
                                                                        55296) >>
                                                                        B)
                                                            ]) <<
                                                            s) +
                                                        (A & l)),
                                                    this.data[e]
                                                );
                                            if (A < this.highStart)
                                                return (
                                                    (e = g - C + (A >> a)),
                                                    (e = this.index[e]),
                                                    (e += (A >> B) & F),
                                                    (e =
                                                        ((e = this.index[e]) <<
                                                            s) +
                                                        (A & l)),
                                                    this.data[e]
                                                );
                                            if (A <= 1114111)
                                                return this.data[
                                                    this.highValueIndex
                                                ];
                                        }
                                        return this.errorValue;
                                    },
                                },
                            ]),
                            A
                        );
                    })()));
        },
        function (A, e, t) {
            "use strict";
            A.exports =
                "KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA";
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = t(6);
            e.default = function A(e, t, n) {
                !(function (A, e) {
                    if (!(A instanceof e))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, A),
                    (this.type = r.PATH.CIRCLE),
                    (this.x = e),
                    (this.y = t),
                    (this.radius = n);
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r,
                n = (function () {
                    return function (A, e) {
                        if (Array.isArray(A)) return A;
                        if (Symbol.iterator in Object(A))
                            return (function (A, e) {
                                var t = [],
                                    r = !0,
                                    n = !1,
                                    B = void 0;
                                try {
                                    for (
                                        var a, s = A[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (t.push(a.value), !e || t.length !== e);
                                        r = !0
                                    );
                                } catch (A) {
                                    (n = !0), (B = A);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (n) throw B;
                                    }
                                }
                                return t;
                            })(A, e);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                B = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                a = t(1),
                s = (t(25), t(52)),
                o = t(9),
                i = (r = o) && r.__esModule ? r : { default: r },
                c = t(5),
                l = t(12);
            var u = (function () {
                function A(e, t) {
                    !(function (A, e) {
                        if (!(A instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, A),
                        (this.target = e),
                        (this.options = t),
                        e.render(t);
                }
                return (
                    B(A, [
                        {
                            key: "renderNode",
                            value: function (A) {
                                A.isVisible() &&
                                    (this.renderNodeBackgroundAndBorders(A),
                                    this.renderNodeContent(A));
                            },
                        },
                        {
                            key: "renderNodeContent",
                            value: function (A) {
                                var e = this,
                                    t = function () {
                                        if (
                                            (A.childNodes.length &&
                                                A.childNodes.forEach(function (
                                                    t
                                                ) {
                                                    if (
                                                        t instanceof i.default
                                                    ) {
                                                        var r = t.parent.style;
                                                        e.target.renderTextNode(
                                                            t.bounds,
                                                            r.color,
                                                            r.font,
                                                            r.textDecoration,
                                                            r.textShadow
                                                        );
                                                    } else
                                                        e.target.drawShape(
                                                            t,
                                                            A.style.color
                                                        );
                                                }),
                                            A.image)
                                        ) {
                                            var t = e.options.imageStore.get(
                                                A.image
                                            );
                                            if (t) {
                                                var r = (0,
                                                    a.calculateContentBox)(
                                                        A.bounds,
                                                        A.style.padding,
                                                        A.style.border
                                                    ),
                                                    n =
                                                        "number" ==
                                                            typeof t.width &&
                                                        t.width > 0
                                                            ? t.width
                                                            : r.width,
                                                    B =
                                                        "number" ==
                                                            typeof t.height &&
                                                        t.height > 0
                                                            ? t.height
                                                            : r.height;
                                                n > 0 &&
                                                    B > 0 &&
                                                    e.target.clip(
                                                        [
                                                            (0,
                                                            a.calculatePaddingBoxPath)(
                                                                A.curvedBounds
                                                            ),
                                                        ],
                                                        function () {
                                                            e.target.drawImage(
                                                                t,
                                                                new a.Bounds(
                                                                    0,
                                                                    0,
                                                                    n,
                                                                    B
                                                                ),
                                                                r
                                                            );
                                                        }
                                                    );
                                            }
                                        }
                                    },
                                    r = A.getClipPaths();
                                r.length ? this.target.clip(r, t) : t();
                            },
                        },
                        {
                            key: "renderNodeBackgroundAndBorders",
                            value: function (A) {
                                var e = this,
                                    t =
                                        !A.style.background.backgroundColor.isTransparent() ||
                                        A.style.background.backgroundImage
                                            .length,
                                    r = A.style.border.some(function (A) {
                                        return (
                                            A.borderStyle !==
                                                l.BORDER_STYLE.NONE &&
                                            !A.borderColor.isTransparent()
                                        );
                                    }),
                                    n = function () {
                                        var r = (0,
                                        c.calculateBackgroungPaintingArea)(
                                            A.curvedBounds,
                                            A.style.background.backgroundClip
                                        );
                                        t &&
                                            e.target.clip([r], function () {
                                                A.style.background.backgroundColor.isTransparent() ||
                                                    e.target.fill(
                                                        A.style.background
                                                            .backgroundColor
                                                    ),
                                                    e.renderBackgroundImage(A);
                                            }),
                                            A.style.border.forEach(function (
                                                t,
                                                r
                                            ) {
                                                t.borderStyle ===
                                                    l.BORDER_STYLE.NONE ||
                                                    t.borderColor.isTransparent() ||
                                                    e.renderBorder(
                                                        t,
                                                        r,
                                                        A.curvedBounds
                                                    );
                                            });
                                    };
                                if (t || r) {
                                    var B = A.parent
                                        ? A.parent.getClipPaths()
                                        : [];
                                    B.length ? this.target.clip(B, n) : n();
                                }
                            },
                        },
                        {
                            key: "renderBackgroundImage",
                            value: function (A) {
                                var e = this;
                                A.style.background.backgroundImage
                                    .slice(0)
                                    .reverse()
                                    .forEach(function (t) {
                                        "url" === t.source.method &&
                                        t.source.args.length
                                            ? e.renderBackgroundRepeat(A, t)
                                            : /gradient/i.test(
                                                  t.source.method
                                              ) &&
                                              e.renderBackgroundGradient(A, t);
                                    });
                            },
                        },
                        {
                            key: "renderBackgroundRepeat",
                            value: function (A, e) {
                                var t = this.options.imageStore.get(
                                    e.source.args[0]
                                );
                                if (t) {
                                    var r = (0,
                                        c.calculateBackgroungPositioningArea)(
                                            A.style.background.backgroundOrigin,
                                            A.bounds,
                                            A.style.padding,
                                            A.style.border
                                        ),
                                        n = (0, c.calculateBackgroundSize)(
                                            e,
                                            t,
                                            r
                                        ),
                                        B = (0, c.calculateBackgroundPosition)(
                                            e.position,
                                            n,
                                            r
                                        ),
                                        a = (0,
                                        c.calculateBackgroundRepeatPath)(
                                            e,
                                            B,
                                            n,
                                            r,
                                            A.bounds
                                        ),
                                        s = Math.round(r.left + B.x),
                                        o = Math.round(r.top + B.y);
                                    this.target.renderRepeat(a, t, n, s, o);
                                }
                            },
                        },
                        {
                            key: "renderBackgroundGradient",
                            value: function (A, e) {
                                var t = (0,
                                    c.calculateBackgroungPositioningArea)(
                                        A.style.background.backgroundOrigin,
                                        A.bounds,
                                        A.style.padding,
                                        A.style.border
                                    ),
                                    r = (0, c.calculateGradientBackgroundSize)(
                                        e,
                                        t
                                    ),
                                    n = (0, c.calculateBackgroundPosition)(
                                        e.position,
                                        r,
                                        t
                                    ),
                                    B = new a.Bounds(
                                        Math.round(t.left + n.x),
                                        Math.round(t.top + n.y),
                                        r.width,
                                        r.height
                                    ),
                                    o = (0, s.parseGradient)(A, e.source, B);
                                if (o)
                                    switch (o.type) {
                                        case s.GRADIENT_TYPE.LINEAR_GRADIENT:
                                            this.target.renderLinearGradient(
                                                B,
                                                o
                                            );
                                            break;
                                        case s.GRADIENT_TYPE.RADIAL_GRADIENT:
                                            this.target.renderRadialGradient(
                                                B,
                                                o
                                            );
                                    }
                            },
                        },
                        {
                            key: "renderBorder",
                            value: function (A, e, t) {
                                this.target.drawShape(
                                    (0, a.parsePathForBorder)(t, e),
                                    A.borderColor
                                );
                            },
                        },
                        {
                            key: "renderStack",
                            value: function (A) {
                                var e = this;
                                if (A.container.isVisible()) {
                                    var t = A.getOpacity();
                                    t !== this._opacity &&
                                        (this.target.setOpacity(A.getOpacity()),
                                        (this._opacity = t));
                                    var r = A.container.style.transform;
                                    null !== r
                                        ? this.target.transform(
                                              A.container.bounds.left +
                                                  r.transformOrigin[0].value,
                                              A.container.bounds.top +
                                                  r.transformOrigin[1].value,
                                              r.transform,
                                              function () {
                                                  return e.renderStackContent(
                                                      A
                                                  );
                                              }
                                          )
                                        : this.renderStackContent(A);
                                }
                            },
                        },
                        {
                            key: "renderStackContent",
                            value: function (A) {
                                var e = w(A),
                                    t = n(e, 5),
                                    r = t[0],
                                    B = t[1],
                                    a = t[2],
                                    s = t[3],
                                    o = t[4],
                                    i = Q(A),
                                    c = n(i, 2),
                                    l = c[0],
                                    u = c[1];
                                this.renderNodeBackgroundAndBorders(
                                    A.container
                                ),
                                    r.sort(U).forEach(this.renderStack, this),
                                    this.renderNodeContent(A.container),
                                    u.forEach(this.renderNode, this),
                                    s.forEach(this.renderStack, this),
                                    o.forEach(this.renderStack, this),
                                    l.forEach(this.renderNode, this),
                                    B.forEach(this.renderStack, this),
                                    a.sort(U).forEach(this.renderStack, this);
                            },
                        },
                        {
                            key: "render",
                            value: function (A) {
                                this.options.backgroundColor &&
                                    this.target.rectangle(
                                        this.options.x,
                                        this.options.y,
                                        this.options.width,
                                        this.options.height,
                                        this.options.backgroundColor
                                    ),
                                    this.renderStack(A);
                                var e = this.target.getTarget();
                                return e;
                            },
                        },
                    ]),
                    A
                );
            })();
            e.default = u;
            var Q = function (A) {
                    for (
                        var e = [], t = [], r = A.children.length, n = 0;
                        n < r;
                        n++
                    ) {
                        var B = A.children[n];
                        B.isInlineLevel() ? e.push(B) : t.push(B);
                    }
                    return [e, t];
                },
                w = function (A) {
                    for (
                        var e = [],
                            t = [],
                            r = [],
                            n = [],
                            B = [],
                            a = A.contexts.length,
                            s = 0;
                        s < a;
                        s++
                    ) {
                        var o = A.contexts[s];
                        o.container.isPositioned() ||
                        o.container.style.opacity < 1 ||
                        o.container.isTransformed()
                            ? o.container.style.zIndex.order < 0
                                ? e.push(o)
                                : o.container.style.zIndex.order > 0
                                ? r.push(o)
                                : t.push(o)
                            : o.container.isFloating()
                            ? n.push(o)
                            : B.push(o);
                    }
                    return [e, t, r, n, B];
                },
                U = function (A, e) {
                    return A.container.style.zIndex.order >
                        e.container.style.zIndex.order
                        ? 1
                        : A.container.style.zIndex.order <
                          e.container.style.zIndex.order
                        ? -1
                        : A.container.index > e.container.index
                        ? 1
                        : -1;
                };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.transformWebkitRadialGradientArgs =
                    e.parseGradient =
                    e.RadialGradient =
                    e.LinearGradient =
                    e.RADIAL_GRADIENT_SHAPE =
                    e.GRADIENT_TYPE =
                        void 0);
            var r = (function () {
                    return function (A, e) {
                        if (Array.isArray(A)) return A;
                        if (Symbol.iterator in Object(A))
                            return (function (A, e) {
                                var t = [],
                                    r = !0,
                                    n = !1,
                                    B = void 0;
                                try {
                                    for (
                                        var a, s = A[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (t.push(a.value), !e || t.length !== e);
                                        r = !0
                                    );
                                } catch (A) {
                                    (n = !0), (B = A);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (n) throw B;
                                    }
                                }
                                return t;
                            })(A, e);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                n = (i(t(3)), t(53)),
                B = i(t(0)),
                a = t(2),
                s = i(a),
                o = t(4);
            function i(A) {
                return A && A.__esModule ? A : { default: A };
            }
            function c(A, e) {
                if (!(A instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            var l =
                    /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i,
                u = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i,
                Q = /(px)|%|( 0)$/i,
                w = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i,
                U =
                    /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i,
                g = (e.GRADIENT_TYPE = {
                    LINEAR_GRADIENT: 0,
                    RADIAL_GRADIENT: 1,
                }),
                C = (e.RADIAL_GRADIENT_SHAPE = { CIRCLE: 0, ELLIPSE: 1 }),
                d = {
                    left: new s.default("0%"),
                    top: new s.default("0%"),
                    center: new s.default("50%"),
                    right: new s.default("100%"),
                    bottom: new s.default("100%"),
                },
                F = (e.LinearGradient = function A(e, t) {
                    c(this, A),
                        (this.type = g.LINEAR_GRADIENT),
                        (this.colorStops = e),
                        (this.direction = t);
                }),
                E = (e.RadialGradient = function A(e, t, r, n) {
                    c(this, A),
                        (this.type = g.RADIAL_GRADIENT),
                        (this.colorStops = e),
                        (this.shape = t),
                        (this.center = r),
                        (this.radius = n);
                }),
                f =
                    ((e.parseGradient = function (A, e, t) {
                        var r = e.args,
                            n = e.method,
                            B = e.prefix;
                        return "linear-gradient" === n
                            ? h(r, t, !!B)
                            : "gradient" === n && "linear" === r[0]
                            ? h(["to bottom"].concat(y(r.slice(3))), t, !!B)
                            : "radial-gradient" === n
                            ? H(A, "-webkit-" === B ? v(r) : r, t)
                            : "gradient" === n && "radial" === r[0]
                            ? H(A, y(v(r.slice(1))), t)
                            : void 0;
                    }),
                    function (A, e, t) {
                        for (var r = [], n = e; n < A.length; n++) {
                            var a = A[n],
                                o = Q.test(a),
                                i = a.lastIndexOf(" "),
                                c = new B.default(o ? a.substring(0, i) : a),
                                l = o
                                    ? new s.default(a.substring(i + 1))
                                    : n === e
                                    ? new s.default("0%")
                                    : n === A.length - 1
                                    ? new s.default("100%")
                                    : null;
                            r.push({ color: c, stop: l });
                        }
                        for (
                            var u = r.map(function (A) {
                                    var e = A.color,
                                        r = A.stop;
                                    return {
                                        color: e,
                                        stop:
                                            0 === t
                                                ? 0
                                                : r
                                                ? r.getAbsoluteValue(t) / t
                                                : null,
                                    };
                                }),
                                w = u[0].stop,
                                U = 0;
                            U < u.length;
                            U++
                        )
                            if (null !== w) {
                                var g = u[U].stop;
                                if (null === g) {
                                    for (var C = U; null === u[C].stop; ) C++;
                                    for (
                                        var d = C - U + 1,
                                            F = (u[C].stop - w) / d;
                                        U < C;
                                        U++
                                    )
                                        w = u[U].stop = w + F;
                                } else w = g;
                            }
                        return u;
                    }),
                h = function (A, e, t) {
                    var r = (0, n.parseAngle)(A[0]),
                        B = l.test(A[0]),
                        a = B || null !== r || u.test(A[0]),
                        s = a
                            ? null !== r
                                ? p(t ? r - 0.5 * Math.PI : r, e)
                                : B
                                ? I(A[0], e)
                                : K(A[0], e)
                            : p(Math.PI, e),
                        i = a ? 1 : 0,
                        c = Math.min(
                            (0, o.distance)(
                                Math.abs(s.x0) + Math.abs(s.x1),
                                Math.abs(s.y0) + Math.abs(s.y1)
                            ),
                            2 * e.width,
                            2 * e.height
                        );
                    return new F(f(A, i, c), s);
                },
                H = function (A, e, t) {
                    var r = e[0].match(U),
                        n =
                            r &&
                            ("circle" === r[1] ||
                                (void 0 !== r[3] && void 0 === r[5]))
                                ? C.CIRCLE
                                : C.ELLIPSE,
                        B = {},
                        s = {};
                    r &&
                        (void 0 !== r[3] &&
                            (B.x = (0, a.calculateLengthFromValueWithUnit)(
                                A,
                                r[3],
                                r[4]
                            ).getAbsoluteValue(t.width)),
                        void 0 !== r[5] &&
                            (B.y = (0, a.calculateLengthFromValueWithUnit)(
                                A,
                                r[5],
                                r[6]
                            ).getAbsoluteValue(t.height)),
                        r[7]
                            ? (s.x = d[r[7].toLowerCase()])
                            : void 0 !== r[8] &&
                              (s.x = (0, a.calculateLengthFromValueWithUnit)(
                                  A,
                                  r[8],
                                  r[9]
                              )),
                        r[10]
                            ? (s.y = d[r[10].toLowerCase()])
                            : void 0 !== r[11] &&
                              (s.y = (0, a.calculateLengthFromValueWithUnit)(
                                  A,
                                  r[11],
                                  r[12]
                              )));
                    var o = {
                            x:
                                void 0 === s.x
                                    ? t.width / 2
                                    : s.x.getAbsoluteValue(t.width),
                            y:
                                void 0 === s.y
                                    ? t.height / 2
                                    : s.y.getAbsoluteValue(t.height),
                        },
                        i = m((r && r[2]) || "farthest-corner", n, o, B, t);
                    return new E(f(e, r ? 1 : 0, Math.min(i.x, i.y)), n, o, i);
                },
                p = function (A, e) {
                    var t = e.width,
                        r = e.height,
                        n = 0.5 * t,
                        B = 0.5 * r,
                        a =
                            (Math.abs(t * Math.sin(A)) +
                                Math.abs(r * Math.cos(A))) /
                            2,
                        s = n + Math.sin(A) * a,
                        o = B - Math.cos(A) * a;
                    return { x0: s, x1: t - s, y0: o, y1: r - o };
                },
                N = function (A) {
                    return Math.acos(
                        A.width / 2 / ((0, o.distance)(A.width, A.height) / 2)
                    );
                },
                I = function (A, e) {
                    switch (A) {
                        case "bottom":
                        case "to top":
                            return p(0, e);
                        case "left":
                        case "to right":
                            return p(Math.PI / 2, e);
                        case "right":
                        case "to left":
                            return p((3 * Math.PI) / 2, e);
                        case "top right":
                        case "right top":
                        case "to bottom left":
                        case "to left bottom":
                            return p(Math.PI + N(e), e);
                        case "top left":
                        case "left top":
                        case "to bottom right":
                        case "to right bottom":
                            return p(Math.PI - N(e), e);
                        case "bottom left":
                        case "left bottom":
                        case "to top right":
                        case "to right top":
                            return p(N(e), e);
                        case "bottom right":
                        case "right bottom":
                        case "to top left":
                        case "to left top":
                            return p(2 * Math.PI - N(e), e);
                        case "top":
                        case "to bottom":
                        default:
                            return p(Math.PI, e);
                    }
                },
                K = function (A, e) {
                    var t = A.split(" ").map(parseFloat),
                        n = r(t, 2),
                        B = n[0],
                        a = n[1],
                        s = ((B / 100) * e.width) / ((a / 100) * e.height);
                    return p(Math.atan(isNaN(s) ? 1 : s) + Math.PI / 2, e);
                },
                T = function (A, e, t, r) {
                    return [
                        { x: 0, y: 0 },
                        { x: 0, y: A.height },
                        { x: A.width, y: 0 },
                        { x: A.width, y: A.height },
                    ].reduce(
                        function (A, n) {
                            var B = (0, o.distance)(e - n.x, t - n.y);
                            return (
                                r
                                    ? B < A.optimumDistance
                                    : B > A.optimumDistance
                            )
                                ? { optimumCorner: n, optimumDistance: B }
                                : A;
                        },
                        {
                            optimumDistance: r ? 1 / 0 : -1 / 0,
                            optimumCorner: null,
                        }
                    ).optimumCorner;
                },
                m = function (A, e, t, r, n) {
                    var B = t.x,
                        a = t.y,
                        s = 0,
                        i = 0;
                    switch (A) {
                        case "closest-side":
                            e === C.CIRCLE
                                ? (s = i =
                                      Math.min(
                                          Math.abs(B),
                                          Math.abs(B - n.width),
                                          Math.abs(a),
                                          Math.abs(a - n.height)
                                      ))
                                : e === C.ELLIPSE &&
                                  ((s = Math.min(
                                      Math.abs(B),
                                      Math.abs(B - n.width)
                                  )),
                                  (i = Math.min(
                                      Math.abs(a),
                                      Math.abs(a - n.height)
                                  )));
                            break;
                        case "closest-corner":
                            if (e === C.CIRCLE)
                                s = i = Math.min(
                                    (0, o.distance)(B, a),
                                    (0, o.distance)(B, a - n.height),
                                    (0, o.distance)(B - n.width, a),
                                    (0, o.distance)(B - n.width, a - n.height)
                                );
                            else if (e === C.ELLIPSE) {
                                var c =
                                        Math.min(
                                            Math.abs(a),
                                            Math.abs(a - n.height)
                                        ) /
                                        Math.min(
                                            Math.abs(B),
                                            Math.abs(B - n.width)
                                        ),
                                    l = T(n, B, a, !0);
                                i =
                                    c *
                                    (s = (0, o.distance)(
                                        l.x - B,
                                        (l.y - a) / c
                                    ));
                            }
                            break;
                        case "farthest-side":
                            e === C.CIRCLE
                                ? (s = i =
                                      Math.max(
                                          Math.abs(B),
                                          Math.abs(B - n.width),
                                          Math.abs(a),
                                          Math.abs(a - n.height)
                                      ))
                                : e === C.ELLIPSE &&
                                  ((s = Math.max(
                                      Math.abs(B),
                                      Math.abs(B - n.width)
                                  )),
                                  (i = Math.max(
                                      Math.abs(a),
                                      Math.abs(a - n.height)
                                  )));
                            break;
                        case "farthest-corner":
                            if (e === C.CIRCLE)
                                s = i = Math.max(
                                    (0, o.distance)(B, a),
                                    (0, o.distance)(B, a - n.height),
                                    (0, o.distance)(B - n.width, a),
                                    (0, o.distance)(B - n.width, a - n.height)
                                );
                            else if (e === C.ELLIPSE) {
                                var u =
                                        Math.max(
                                            Math.abs(a),
                                            Math.abs(a - n.height)
                                        ) /
                                        Math.max(
                                            Math.abs(B),
                                            Math.abs(B - n.width)
                                        ),
                                    Q = T(n, B, a, !1);
                                i =
                                    u *
                                    (s = (0, o.distance)(
                                        Q.x - B,
                                        (Q.y - a) / u
                                    ));
                            }
                            break;
                        default:
                            (s = r.x || 0), (i = void 0 !== r.y ? r.y : s);
                    }
                    return { x: s, y: i };
                },
                v = (e.transformWebkitRadialGradientArgs = function (A) {
                    var e = "",
                        t = "",
                        r = "",
                        n = "",
                        B = 0,
                        a =
                            /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i,
                        s = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i,
                        o = A[B].match(a);
                    o && B++;
                    var i = A[B].match(
                        /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i
                    );
                    i &&
                        ((e = i[1] || ""),
                        "contain" === (r = i[2] || "")
                            ? (r = "closest-side")
                            : "cover" === r && (r = "farthest-corner"),
                        B++);
                    var c = A[B].match(s);
                    c && B++;
                    var l = A[B].match(a);
                    l && B++;
                    var u = A[B].match(s);
                    u && B++;
                    var Q = l || o;
                    Q &&
                        Q[1] &&
                        ((n = Q[1] + (/^\d+$/.test(Q[1]) ? "px" : "")),
                        Q[2] &&
                            (n +=
                                " " + Q[2] + (/^\d+$/.test(Q[2]) ? "px" : "")));
                    var w = u || c;
                    return (
                        w && ((t = w[0]), w[1] || (t += "px")),
                        !n || e || t || r || ((t = n), (n = "")),
                        n && (n = "at " + n),
                        [
                            [e, r, t, n]
                                .filter(function (A) {
                                    return !!A;
                                })
                                .join(" "),
                        ].concat(A.slice(B))
                    );
                }),
                y = function (A) {
                    return A.map(function (A) {
                        return A.match(w);
                    }).map(function (e, t) {
                        if (!e) return A[t];
                        switch (e[1]) {
                            case "from":
                                return e[4] + " 0%";
                            case "to":
                                return e[4] + " 100%";
                            case "color-stop":
                                return "%" === e[3]
                                    ? e[4] + " " + e[2]
                                    : e[4] + " " + 100 * parseFloat(e[2]) + "%";
                        }
                    });
                };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;
            e.parseAngle = function (A) {
                var e = A.match(r);
                if (e) {
                    var t = parseFloat(e[1]);
                    switch (e[2].toLowerCase()) {
                        case "deg":
                            return (Math.PI * t) / 180;
                        case "grad":
                            return (Math.PI / 200) * t;
                        case "rad":
                            return t;
                        case "turn":
                            return 2 * Math.PI * t;
                    }
                }
                return null;
            };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.cloneWindow = e.DocumentCloner = void 0);
            var r = (function () {
                    return function (A, e) {
                        if (Array.isArray(A)) return A;
                        if (Symbol.iterator in Object(A))
                            return (function (A, e) {
                                var t = [],
                                    r = !0,
                                    n = !1,
                                    B = void 0;
                                try {
                                    for (
                                        var a, s = A[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (t.push(a.value), !e || t.length !== e);
                                        r = !0
                                    );
                                } catch (A) {
                                    (n = !0), (B = A);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (n) throw B;
                                    }
                                }
                                return t;
                            })(A, e);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                n = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                B = t(1),
                a = t(26),
                s = u(t(55)),
                o = t(4),
                i = t(5),
                c = u(t(15)),
                l = t(56);
            function u(A) {
                return A && A.__esModule ? A : { default: A };
            }
            var Q = (e.DocumentCloner = (function () {
                    function A(e, t, r, n, B) {
                        !(function (A, e) {
                            if (!(A instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, A),
                            (this.referenceElement = e),
                            (this.scrolledElements = []),
                            (this.copyStyles = n),
                            (this.inlineImages = n),
                            (this.logger = r),
                            (this.options = t),
                            (this.renderer = B),
                            (this.resourceLoader = new s.default(t, r, window)),
                            (this.pseudoContentData = {
                                counters: {},
                                quoteDepth: 0,
                            }),
                            (this.documentElement = this.cloneNode(
                                e.ownerDocument.documentElement
                            ));
                    }
                    return (
                        n(A, [
                            {
                                key: "inlineAllImages",
                                value: function (A) {
                                    var e = this;
                                    if (this.inlineImages && A) {
                                        var t = A.style;
                                        Promise.all(
                                            (0, i.parseBackgroundImage)(
                                                t.backgroundImage
                                            ).map(function (A) {
                                                return "url" === A.method
                                                    ? e.resourceLoader
                                                          .inlineImage(
                                                              A.args[0]
                                                          )
                                                          .then(function (A) {
                                                              return A &&
                                                                  "string" ==
                                                                      typeof A.src
                                                                  ? 'url("' +
                                                                        A.src +
                                                                        '")'
                                                                  : "none";
                                                          })
                                                          .catch(function (A) {
                                                              0;
                                                          })
                                                    : Promise.resolve(
                                                          "" +
                                                              A.prefix +
                                                              A.method +
                                                              "(" +
                                                              A.args.join(",") +
                                                              ")"
                                                      );
                                            })
                                        ).then(function (A) {
                                            A.length > 1 &&
                                                (t.backgroundColor = ""),
                                                (t.backgroundImage =
                                                    A.join(","));
                                        }),
                                            A instanceof HTMLImageElement &&
                                                this.resourceLoader
                                                    .inlineImage(A.src)
                                                    .then(function (e) {
                                                        if (
                                                            e &&
                                                            A instanceof
                                                                HTMLImageElement &&
                                                            A.parentNode
                                                        ) {
                                                            var t =
                                                                    A.parentNode,
                                                                r = (0,
                                                                o.copyCSSStyles)(
                                                                    A.style,
                                                                    e.cloneNode(
                                                                        !1
                                                                    )
                                                                );
                                                            t.replaceChild(
                                                                r,
                                                                A
                                                            );
                                                        }
                                                    })
                                                    .catch(function (A) {
                                                        0;
                                                    });
                                    }
                                },
                            },
                            {
                                key: "inlineFonts",
                                value: function (A) {
                                    var e = this;
                                    return Promise.all(
                                        Array.from(A.styleSheets).map(function (
                                            e
                                        ) {
                                            return e.href
                                                ? fetch(e.href)
                                                      .then(function (A) {
                                                          return A.text();
                                                      })
                                                      .then(function (A) {
                                                          return U(A, e.href);
                                                      })
                                                      .catch(function (A) {
                                                          return [];
                                                      })
                                                : w(e, A);
                                        })
                                    )
                                        .then(function (A) {
                                            return A.reduce(function (A, e) {
                                                return A.concat(e);
                                            }, []);
                                        })
                                        .then(function (A) {
                                            return Promise.all(
                                                A.map(function (A) {
                                                    return fetch(
                                                        A.formats[0].src
                                                    )
                                                        .then(function (A) {
                                                            return A.blob();
                                                        })
                                                        .then(function (A) {
                                                            return new Promise(
                                                                function (
                                                                    e,
                                                                    t
                                                                ) {
                                                                    var r =
                                                                        new FileReader();
                                                                    (r.onerror =
                                                                        t),
                                                                        (r.onload =
                                                                            function () {
                                                                                var A =
                                                                                    r.result;
                                                                                e(
                                                                                    A
                                                                                );
                                                                            }),
                                                                        r.readAsDataURL(
                                                                            A
                                                                        );
                                                                }
                                                            );
                                                        })
                                                        .then(function (e) {
                                                            return (
                                                                A.fontFace.setProperty(
                                                                    "src",
                                                                    'url("' +
                                                                        e +
                                                                        '")'
                                                                ),
                                                                "@font-face {" +
                                                                    A.fontFace
                                                                        .cssText +
                                                                    " "
                                                            );
                                                        });
                                                })
                                            );
                                        })
                                        .then(function (t) {
                                            var r = A.createElement("style");
                                            (r.textContent = t.join("\n")),
                                                e.documentElement.appendChild(
                                                    r
                                                );
                                        });
                                },
                            },
                            {
                                key: "createElementClone",
                                value: function (A) {
                                    var e = this;
                                    if (
                                        this.copyStyles &&
                                        A instanceof HTMLCanvasElement
                                    ) {
                                        var t =
                                            A.ownerDocument.createElement(
                                                "img"
                                            );
                                        try {
                                            return (t.src = A.toDataURL()), t;
                                        } catch (A) {
                                            0;
                                        }
                                    }
                                    if (A instanceof HTMLIFrameElement) {
                                        var r = A.cloneNode(!1),
                                            n = N();
                                        r.setAttribute(
                                            "data-html2canvas-internal-iframe-key",
                                            n
                                        );
                                        var a = (0, B.parseBounds)(A, 0, 0),
                                            s = a.width,
                                            i = a.height;
                                        return (
                                            (this.resourceLoader.cache[n] = K(
                                                A,
                                                this.options
                                            )
                                                .then(function (A) {
                                                    return e.renderer(
                                                        A,
                                                        {
                                                            async: e.options
                                                                .async,
                                                            allowTaint:
                                                                e.options
                                                                    .allowTaint,
                                                            backgroundColor:
                                                                "#ffffff",
                                                            canvas: null,
                                                            imageTimeout:
                                                                e.options
                                                                    .imageTimeout,
                                                            logging:
                                                                e.options
                                                                    .logging,
                                                            proxy: e.options
                                                                .proxy,
                                                            removeContainer:
                                                                e.options
                                                                    .removeContainer,
                                                            scale: e.options
                                                                .scale,
                                                            foreignObjectRendering:
                                                                e.options
                                                                    .foreignObjectRendering,
                                                            useCORS:
                                                                e.options
                                                                    .useCORS,
                                                            target: new c.default(),
                                                            width: s,
                                                            height: i,
                                                            x: 0,
                                                            y: 0,
                                                            windowWidth:
                                                                A.ownerDocument
                                                                    .defaultView
                                                                    .innerWidth,
                                                            windowHeight:
                                                                A.ownerDocument
                                                                    .defaultView
                                                                    .innerHeight,
                                                            scrollX:
                                                                A.ownerDocument
                                                                    .defaultView
                                                                    .pageXOffset,
                                                            scrollY:
                                                                A.ownerDocument
                                                                    .defaultView
                                                                    .pageYOffset,
                                                        },
                                                        e.logger.child(n)
                                                    );
                                                })
                                                .then(function (e) {
                                                    return new Promise(
                                                        function (t, n) {
                                                            var B =
                                                                document.createElement(
                                                                    "img"
                                                                );
                                                            (B.onload =
                                                                function () {
                                                                    return t(e);
                                                                }),
                                                                (B.onerror = n),
                                                                (B.src =
                                                                    e.toDataURL()),
                                                                r.parentNode &&
                                                                    r.parentNode.replaceChild(
                                                                        (0,
                                                                        o.copyCSSStyles)(
                                                                            A.ownerDocument.defaultView.getComputedStyle(
                                                                                A
                                                                            ),
                                                                            B
                                                                        ),
                                                                        r
                                                                    );
                                                        }
                                                    );
                                                })),
                                            r
                                        );
                                    }
                                    if (
                                        A instanceof HTMLStyleElement &&
                                        A.sheet &&
                                        A.sheet.cssRules
                                    ) {
                                        var l = [].slice
                                                .call(A.sheet.cssRules, 0)
                                                .reduce(function (A, e) {
                                                    return A + e.cssText;
                                                }, ""),
                                            u = A.cloneNode(!1);
                                        return (u.textContent = l), u;
                                    }
                                    return A.cloneNode(!1);
                                },
                            },
                            {
                                key: "cloneNode",
                                value: function (A) {
                                    var e =
                                            A.nodeType === Node.TEXT_NODE
                                                ? document.createTextNode(
                                                      A.nodeValue
                                                  )
                                                : this.createElementClone(A),
                                        t = A.ownerDocument.defaultView,
                                        r =
                                            A instanceof t.HTMLElement
                                                ? t.getComputedStyle(A)
                                                : null,
                                        n =
                                            A instanceof t.HTMLElement
                                                ? t.getComputedStyle(
                                                      A,
                                                      ":before"
                                                  )
                                                : null,
                                        B =
                                            A instanceof t.HTMLElement
                                                ? t.getComputedStyle(
                                                      A,
                                                      ":after"
                                                  )
                                                : null;
                                    this.referenceElement === A &&
                                        e instanceof t.HTMLElement &&
                                        (this.clonedReferenceElement = e),
                                        e instanceof t.HTMLBodyElement && h(e);
                                    for (
                                        var a = (0, l.parseCounterReset)(
                                                r,
                                                this.pseudoContentData
                                            ),
                                            s = (0, l.resolvePseudoContent)(
                                                A,
                                                n,
                                                this.pseudoContentData
                                            ),
                                            i = A.firstChild;
                                        i;
                                        i = i.nextSibling
                                    )
                                        (i.nodeType === Node.ELEMENT_NODE &&
                                            ("SCRIPT" === i.nodeName ||
                                                i.hasAttribute(
                                                    "data-html2canvas-ignore"
                                                ) ||
                                                ("function" ==
                                                    typeof this.options
                                                        .ignoreElements &&
                                                    this.options.ignoreElements(
                                                        i
                                                    )))) ||
                                            (this.copyStyles &&
                                                "STYLE" === i.nodeName) ||
                                            e.appendChild(this.cloneNode(i));
                                    var c = (0, l.resolvePseudoContent)(
                                        A,
                                        B,
                                        this.pseudoContentData
                                    );
                                    if (
                                        ((0, l.popCounters)(
                                            a,
                                            this.pseudoContentData
                                        ),
                                        A instanceof t.HTMLElement &&
                                            e instanceof t.HTMLElement)
                                    )
                                        switch (
                                            (n &&
                                                this.inlineAllImages(
                                                    C(A, e, n, s, d)
                                                ),
                                            B &&
                                                this.inlineAllImages(
                                                    C(A, e, B, c, F)
                                                ),
                                            !r ||
                                                !this.copyStyles ||
                                                A instanceof
                                                    HTMLIFrameElement ||
                                                (0, o.copyCSSStyles)(r, e),
                                            this.inlineAllImages(e),
                                            (0 === A.scrollTop &&
                                                0 === A.scrollLeft) ||
                                                this.scrolledElements.push([
                                                    e,
                                                    A.scrollLeft,
                                                    A.scrollTop,
                                                ]),
                                            A.nodeName)
                                        ) {
                                            case "CANVAS":
                                                this.copyStyles || g(A, e);
                                                break;
                                            case "TEXTAREA":
                                            case "SELECT":
                                                e.value = A.value;
                                        }
                                    return e;
                                },
                            },
                        ]),
                        A
                    );
                })()),
                w = function (A, e) {
                    return (A.cssRules ? Array.from(A.cssRules) : [])
                        .filter(function (A) {
                            return A.type === CSSRule.FONT_FACE_RULE;
                        })
                        .map(function (A) {
                            for (
                                var t = (0, i.parseBackgroundImage)(
                                        A.style.getPropertyValue("src")
                                    ),
                                    r = [],
                                    n = 0;
                                n < t.length;
                                n++
                            )
                                if (
                                    "url" === t[n].method &&
                                    t[n + 1] &&
                                    "format" === t[n + 1].method
                                ) {
                                    var B = e.createElement("a");
                                    (B.href = t[n].args[0]),
                                        e.body && e.body.appendChild(B);
                                    var a = {
                                        src: B.href,
                                        format: t[n + 1].args[0],
                                    };
                                    r.push(a);
                                }
                            return {
                                formats: r.filter(function (A) {
                                    return /^woff/i.test(A.format);
                                }),
                                fontFace: A.style,
                            };
                        })
                        .filter(function (A) {
                            return A.formats.length;
                        });
                },
                U = function (A, e) {
                    var t = document.implementation.createHTMLDocument(""),
                        r = document.createElement("base");
                    r.href = e;
                    var n = document.createElement("style");
                    return (
                        (n.textContent = A),
                        t.head && t.head.appendChild(r),
                        t.body && t.body.appendChild(n),
                        n.sheet ? w(n.sheet, t) : []
                    );
                },
                g = function (A, e) {
                    try {
                        if (e) {
                            (e.width = A.width), (e.height = A.height);
                            var t = A.getContext("2d"),
                                r = e.getContext("2d");
                            t
                                ? r.putImageData(
                                      t.getImageData(0, 0, A.width, A.height),
                                      0,
                                      0
                                  )
                                : r.drawImage(A, 0, 0);
                        }
                    } catch (A) {}
                },
                C = function (A, e, t, r, n) {
                    if (
                        t &&
                        t.content &&
                        "none" !== t.content &&
                        "-moz-alt-content" !== t.content &&
                        "none" !== t.display
                    ) {
                        var B = e.ownerDocument.createElement(
                            "html2canvaspseudoelement"
                        );
                        if (((0, o.copyCSSStyles)(t, B), r))
                            for (var a = r.length, s = 0; s < a; s++) {
                                var c = r[s];
                                switch (c.type) {
                                    case l.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                                        var u =
                                            e.ownerDocument.createElement(
                                                "img"
                                            );
                                        (u.src = (0, i.parseBackgroundImage)(
                                            "url(" + c.value + ")"
                                        )[0].args[0]),
                                            (u.style.opacity = "1"),
                                            B.appendChild(u);
                                        break;
                                    case l.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                                        B.appendChild(
                                            e.ownerDocument.createTextNode(
                                                c.value
                                            )
                                        );
                                }
                            }
                        return (
                            (B.className = E + " " + f),
                            (e.className += n === d ? " " + E : " " + f),
                            n === d
                                ? e.insertBefore(B, e.firstChild)
                                : e.appendChild(B),
                            B
                        );
                    }
                },
                d = ":before",
                F = ":after",
                E = "___html2canvas___pseudoelement_before",
                f = "___html2canvas___pseudoelement_after",
                h = function (A) {
                    H(
                        A,
                        "." +
                            E +
                            d +
                            '{\n    content: "" !important;\n    display: none !important;\n}\n         .' +
                            f +
                            F +
                            '{\n    content: "" !important;\n    display: none !important;\n}'
                    );
                },
                H = function (A, e) {
                    var t = A.ownerDocument.createElement("style");
                    (t.innerHTML = e), A.appendChild(t);
                },
                p = function (A) {
                    var e = r(A, 3),
                        t = e[0],
                        n = e[1],
                        B = e[2];
                    (t.scrollLeft = n), (t.scrollTop = B);
                },
                N = function () {
                    return Math.ceil(Date.now() + 1e7 * Math.random()).toString(
                        16
                    );
                },
                I = /^data:text\/(.+);(base64)?,(.*)$/i,
                K = function (A, e) {
                    try {
                        return Promise.resolve(
                            A.contentWindow.document.documentElement
                        );
                    } catch (t) {
                        return e.proxy
                            ? (0, a.Proxy)(A.src, e)
                                  .then(function (A) {
                                      var e = A.match(I);
                                      return e
                                          ? "base64" === e[2]
                                              ? window.atob(
                                                    decodeURIComponent(e[3])
                                                )
                                              : decodeURIComponent(e[3])
                                          : Promise.reject();
                                  })
                                  .then(function (e) {
                                      return T(
                                          A.ownerDocument,
                                          (0, B.parseBounds)(A, 0, 0)
                                      ).then(function (A) {
                                          var t = A.contentWindow.document;
                                          t.open(), t.write(e);
                                          var r = m(A).then(function () {
                                              return t.documentElement;
                                          });
                                          return t.close(), r;
                                      });
                                  })
                            : Promise.reject();
                    }
                },
                T = function (A, e) {
                    var t = A.createElement("iframe");
                    return (
                        (t.className = "html2canvas-container"),
                        (t.style.visibility = "hidden"),
                        (t.style.position = "fixed"),
                        (t.style.left = "-10000px"),
                        (t.style.top = "0px"),
                        (t.style.border = "0"),
                        (t.width = e.width.toString()),
                        (t.height = e.height.toString()),
                        (t.scrolling = "no"),
                        t.setAttribute("data-html2canvas-ignore", "true"),
                        A.body
                            ? (A.body.appendChild(t), Promise.resolve(t))
                            : Promise.reject("")
                    );
                },
                m = function (A) {
                    var e = A.contentWindow,
                        t = e.document;
                    return new Promise(function (r, n) {
                        e.onload =
                            A.onload =
                            t.onreadystatechange =
                                function () {
                                    var e = setInterval(function () {
                                        t.body.childNodes.length > 0 &&
                                            "complete" === t.readyState &&
                                            (clearInterval(e), r(A));
                                    }, 50);
                                };
                    });
                },
                v =
                    ((e.cloneWindow = function (A, e, t, r, n, B) {
                        var a = new Q(t, r, n, !1, B),
                            s = A.defaultView.pageXOffset,
                            o = A.defaultView.pageYOffset;
                        return T(A, e).then(function (n) {
                            var B = n.contentWindow,
                                i = B.document,
                                c = m(n).then(function () {
                                    a.scrolledElements.forEach(p),
                                        B.scrollTo(e.left, e.top),
                                        !/(iPad|iPhone|iPod)/g.test(
                                            navigator.userAgent
                                        ) ||
                                            (B.scrollY === e.top &&
                                                B.scrollX === e.left) ||
                                            ((i.documentElement.style.top =
                                                -e.top + "px"),
                                            (i.documentElement.style.left =
                                                -e.left + "px"),
                                            (i.documentElement.style.position =
                                                "absolute"));
                                    var t = Promise.resolve([
                                            n,
                                            a.clonedReferenceElement,
                                            a.resourceLoader,
                                        ]),
                                        s = r.onclone;
                                    return a.clonedReferenceElement instanceof
                                        B.HTMLElement ||
                                        a.clonedReferenceElement instanceof
                                            A.defaultView.HTMLElement ||
                                        a.clonedReferenceElement instanceof
                                            HTMLElement
                                        ? "function" == typeof s
                                            ? Promise.resolve()
                                                  .then(function () {
                                                      return s(i);
                                                  })
                                                  .then(function () {
                                                      return t;
                                                  })
                                            : t
                                        : Promise.reject("");
                                });
                            return (
                                i.open(),
                                i.write(v(document.doctype) + "<html></html>"),
                                (function (A, e, t) {
                                    !A.defaultView ||
                                        (e === A.defaultView.pageXOffset &&
                                            t === A.defaultView.pageYOffset) ||
                                        A.defaultView.scrollTo(e, t);
                                })(t.ownerDocument, s, o),
                                i.replaceChild(
                                    i.adoptNode(a.documentElement),
                                    i.documentElement
                                ),
                                i.close(),
                                c
                            );
                        });
                    }),
                    function (A) {
                        var e = "";
                        return (
                            A &&
                                ((e += "<!DOCTYPE "),
                                A.name && (e += A.name),
                                A.internalSubset && (e += A.internalSubset),
                                A.publicId && (e += '"' + A.publicId + '"'),
                                A.systemId && (e += '"' + A.systemId + '"'),
                                (e += ">")),
                            e
                        );
                    });
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.ResourceStore = void 0);
            var r,
                n = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(A, r.key, r);
                        }
                    }
                    return function (e, t, r) {
                        return t && A(e.prototype, t), r && A(e, r), e;
                    };
                })(),
                B = t(10),
                a = (r = B) && r.__esModule ? r : { default: r },
                s = t(26);
            function o(A, e) {
                if (!(A instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            var i = (function () {
                function A(e, t, r) {
                    o(this, A),
                        (this.options = e),
                        (this._window = r),
                        (this.origin = this.getOrigin(r.location.href)),
                        (this.cache = {}),
                        (this.logger = t),
                        (this._index = 0);
                }
                return (
                    n(A, [
                        {
                            key: "loadImage",
                            value: function (A) {
                                var e = this;
                                if (this.hasResourceInCache(A)) return A;
                                if (!g(A) || a.default.SUPPORT_SVG_DRAWING) {
                                    if (
                                        !0 === this.options.allowTaint ||
                                        w(A) ||
                                        this.isSameOrigin(A)
                                    )
                                        return this.addImage(A, A, !1);
                                    if (!this.isSameOrigin(A)) {
                                        if (
                                            "string" ==
                                            typeof this.options.proxy
                                        )
                                            return (
                                                (this.cache[A] = (0, s.Proxy)(
                                                    A,
                                                    this.options
                                                ).then(function (A) {
                                                    return C(
                                                        A,
                                                        e.options
                                                            .imageTimeout || 0
                                                    );
                                                })),
                                                A
                                            );
                                        if (
                                            !0 === this.options.useCORS &&
                                            a.default.SUPPORT_CORS_IMAGES
                                        )
                                            return this.addImage(A, A, !0);
                                    }
                                }
                            },
                        },
                        {
                            key: "inlineImage",
                            value: function (A) {
                                var e = this;
                                return w(A)
                                    ? C(A, this.options.imageTimeout || 0)
                                    : this.hasResourceInCache(A)
                                    ? this.cache[A]
                                    : this.isSameOrigin(A) ||
                                      "string" != typeof this.options.proxy
                                    ? this.xhrImage(A)
                                    : (this.cache[A] = (0, s.Proxy)(
                                          A,
                                          this.options
                                      ).then(function (A) {
                                          return C(
                                              A,
                                              e.options.imageTimeout || 0
                                          );
                                      }));
                            },
                        },
                        {
                            key: "xhrImage",
                            value: function (A) {
                                var e = this;
                                return (
                                    (this.cache[A] = new Promise(function (
                                        t,
                                        r
                                    ) {
                                        var n = new XMLHttpRequest();
                                        if (
                                            ((n.onreadystatechange =
                                                function () {
                                                    if (4 === n.readyState)
                                                        if (200 !== n.status)
                                                            r(
                                                                "Failed to fetch image " +
                                                                    A.substring(
                                                                        0,
                                                                        256
                                                                    ) +
                                                                    " with status code " +
                                                                    n.status
                                                            );
                                                        else {
                                                            var e =
                                                                new FileReader();
                                                            e.addEventListener(
                                                                "load",
                                                                function () {
                                                                    var A =
                                                                        e.result;
                                                                    t(A);
                                                                },
                                                                !1
                                                            ),
                                                                e.addEventListener(
                                                                    "error",
                                                                    function (
                                                                        A
                                                                    ) {
                                                                        return r(
                                                                            A
                                                                        );
                                                                    },
                                                                    !1
                                                                ),
                                                                e.readAsDataURL(
                                                                    n.response
                                                                );
                                                        }
                                                }),
                                            (n.responseType = "blob"),
                                            e.options.imageTimeout)
                                        ) {
                                            var B = e.options.imageTimeout;
                                            (n.timeout = B),
                                                (n.ontimeout = function () {
                                                    return r("");
                                                });
                                        }
                                        n.open("GET", A, !0), n.send();
                                    }).then(function (A) {
                                        return C(
                                            A,
                                            e.options.imageTimeout || 0
                                        );
                                    })),
                                    this.cache[A]
                                );
                            },
                        },
                        {
                            key: "loadCanvas",
                            value: function (A) {
                                var e = String(this._index++);
                                return (this.cache[e] = Promise.resolve(A)), e;
                            },
                        },
                        {
                            key: "hasResourceInCache",
                            value: function (A) {
                                return void 0 !== this.cache[A];
                            },
                        },
                        {
                            key: "addImage",
                            value: function (A, e, t) {
                                var r = this;
                                var n = function (A) {
                                    return new Promise(function (n, B) {
                                        var a = new Image();
                                        if (
                                            ((a.onload = function () {
                                                return n(a);
                                            }),
                                            (A && !t) ||
                                                (a.crossOrigin = "anonymous"),
                                            (a.onerror = B),
                                            (a.src = e),
                                            !0 === a.complete &&
                                                setTimeout(function () {
                                                    n(a);
                                                }, 500),
                                            r.options.imageTimeout)
                                        ) {
                                            var s = r.options.imageTimeout;
                                            setTimeout(function () {
                                                return B("");
                                            }, s);
                                        }
                                    });
                                };
                                return (
                                    (this.cache[A] =
                                        U(e) && !g(e)
                                            ? a.default
                                                  .SUPPORT_BASE64_DRAWING(e)
                                                  .then(n)
                                            : n(!0)),
                                    A
                                );
                            },
                        },
                        {
                            key: "isSameOrigin",
                            value: function (A) {
                                return this.getOrigin(A) === this.origin;
                            },
                        },
                        {
                            key: "getOrigin",
                            value: function (A) {
                                var e =
                                    this._link ||
                                    (this._link =
                                        this._window.document.createElement(
                                            "a"
                                        ));
                                return (
                                    (e.href = A),
                                    (e.href = e.href),
                                    e.protocol + e.hostname + e.port
                                );
                            },
                        },
                        {
                            key: "ready",
                            value: function () {
                                var A = this,
                                    e = Object.keys(this.cache),
                                    t = e.map(function (e) {
                                        return A.cache[e].catch(function (A) {
                                            return null;
                                        });
                                    });
                                return Promise.all(t).then(function (A) {
                                    return new c(e, A);
                                });
                            },
                        },
                    ]),
                    A
                );
            })();
            e.default = i;
            var c = (e.ResourceStore = (function () {
                    function A(e, t) {
                        o(this, A), (this._keys = e), (this._resources = t);
                    }
                    return (
                        n(A, [
                            {
                                key: "get",
                                value: function (A) {
                                    var e = this._keys.indexOf(A);
                                    return -1 === e ? null : this._resources[e];
                                },
                            },
                        ]),
                        A
                    );
                })()),
                l = /^data:image\/svg\+xml/i,
                u = /^data:image\/.*;base64,/i,
                Q = /^data:image\/.*/i,
                w = function (A) {
                    return Q.test(A);
                },
                U = function (A) {
                    return u.test(A);
                },
                g = function (A) {
                    return "svg" === A.substr(-3).toLowerCase() || l.test(A);
                },
                C = function (A, e) {
                    return new Promise(function (t, r) {
                        var n = new Image();
                        (n.onload = function () {
                            return t(n);
                        }),
                            (n.onerror = r),
                            (n.src = A),
                            !0 === n.complete &&
                                setTimeout(function () {
                                    t(n);
                                }, 500),
                            e &&
                                setTimeout(function () {
                                    return r("");
                                }, e);
                    });
                };
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.parseContent =
                    e.resolvePseudoContent =
                    e.popCounters =
                    e.parseCounterReset =
                    e.TOKEN_TYPE =
                    e.PSEUDO_CONTENT_ITEM_TYPE =
                        void 0);
            var r = (function () {
                    return function (A, e) {
                        if (Array.isArray(A)) return A;
                        if (Symbol.iterator in Object(A))
                            return (function (A, e) {
                                var t = [],
                                    r = !0,
                                    n = !1,
                                    B = void 0;
                                try {
                                    for (
                                        var a, s = A[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (t.push(a.value), !e || t.length !== e);
                                        r = !0
                                    );
                                } catch (A) {
                                    (n = !0), (B = A);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (n) throw B;
                                    }
                                }
                                return t;
                            })(A, e);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                n = t(14),
                B = t(8),
                a = (e.PSEUDO_CONTENT_ITEM_TYPE = { TEXT: 0, IMAGE: 1 }),
                s = (e.TOKEN_TYPE = {
                    STRING: 0,
                    ATTRIBUTE: 1,
                    URL: 2,
                    COUNTER: 3,
                    COUNTERS: 4,
                    OPENQUOTE: 5,
                    CLOSEQUOTE: 6,
                }),
                o =
                    ((e.parseCounterReset = function (A, e) {
                        if (!A || !A.counterReset || "none" === A.counterReset)
                            return [];
                        for (
                            var t = [],
                                n = A.counterReset.split(/\s*,\s*/),
                                B = n.length,
                                a = 0;
                            a < B;
                            a++
                        ) {
                            var s = n[a].split(/\s+/),
                                o = r(s, 2),
                                i = o[0],
                                c = o[1];
                            t.push(i);
                            var l = e.counters[i];
                            l || (l = e.counters[i] = []),
                                l.push(parseInt(c || 0, 10));
                        }
                        return t;
                    }),
                    (e.popCounters = function (A, e) {
                        for (var t = A.length, r = 0; r < t; r++)
                            e.counters[A[r]].pop();
                    }),
                    (e.resolvePseudoContent = function (A, e, t) {
                        if (
                            !e ||
                            !e.content ||
                            "none" === e.content ||
                            "-moz-alt-content" === e.content ||
                            "none" === e.display
                        )
                            return null;
                        var n = o(e.content),
                            B = n.length,
                            i = [],
                            u = "",
                            Q = e.counterIncrement;
                        if (Q && "none" !== Q) {
                            var w = Q.split(/\s+/),
                                U = r(w, 2),
                                g = U[0],
                                C = U[1],
                                d = t.counters[g];
                            d &&
                                (d[d.length - 1] +=
                                    void 0 === C ? 1 : parseInt(C, 10));
                        }
                        for (var F = 0; F < B; F++) {
                            var E = n[F];
                            switch (E.type) {
                                case s.STRING:
                                    u += E.value || "";
                                    break;
                                case s.ATTRIBUTE:
                                    A instanceof HTMLElement &&
                                        E.value &&
                                        (u += A.getAttribute(E.value) || "");
                                    break;
                                case s.COUNTER:
                                    var f = t.counters[E.name || ""];
                                    f &&
                                        (u += l(
                                            [f[f.length - 1]],
                                            "",
                                            E.format
                                        ));
                                    break;
                                case s.COUNTERS:
                                    var h = t.counters[E.name || ""];
                                    h && (u += l(h, E.glue, E.format));
                                    break;
                                case s.OPENQUOTE:
                                    (u += c(e, !0, t.quoteDepth)),
                                        t.quoteDepth++;
                                    break;
                                case s.CLOSEQUOTE:
                                    t.quoteDepth--,
                                        (u += c(e, !1, t.quoteDepth));
                                    break;
                                case s.URL:
                                    u &&
                                        (i.push({ type: a.TEXT, value: u }),
                                        (u = "")),
                                        i.push({
                                            type: a.IMAGE,
                                            value: E.value || "",
                                        });
                            }
                        }
                        return u && i.push({ type: a.TEXT, value: u }), i;
                    }),
                    (e.parseContent = function (A, e) {
                        if (e && e[A]) return e[A];
                        for (
                            var t = [],
                                r = A.length,
                                n = !1,
                                B = !1,
                                a = !1,
                                o = "",
                                c = "",
                                l = [],
                                u = 0;
                            u < r;
                            u++
                        ) {
                            var Q = A.charAt(u);
                            switch (Q) {
                                case "'":
                                case '"':
                                    B
                                        ? (o += Q)
                                        : ((n = !n),
                                          a ||
                                              n ||
                                              (t.push({
                                                  type: s.STRING,
                                                  value: o,
                                              }),
                                              (o = "")));
                                    break;
                                case "\\":
                                    B ? ((o += Q), (B = !1)) : (B = !0);
                                    break;
                                case "(":
                                    n
                                        ? (o += Q)
                                        : ((a = !0),
                                          (c = o),
                                          (o = ""),
                                          (l = []));
                                    break;
                                case ")":
                                    if (n) o += Q;
                                    else if (a) {
                                        switch ((o && l.push(o), c)) {
                                            case "attr":
                                                l.length > 0 &&
                                                    t.push({
                                                        type: s.ATTRIBUTE,
                                                        value: l[0],
                                                    });
                                                break;
                                            case "counter":
                                                if (l.length > 0) {
                                                    var w = {
                                                        type: s.COUNTER,
                                                        name: l[0],
                                                    };
                                                    l.length > 1 &&
                                                        (w.format = l[1]),
                                                        t.push(w);
                                                }
                                                break;
                                            case "counters":
                                                if (l.length > 0) {
                                                    var U = {
                                                        type: s.COUNTERS,
                                                        name: l[0],
                                                    };
                                                    l.length > 1 &&
                                                        (U.glue = l[1]),
                                                        l.length > 2 &&
                                                            (U.format = l[2]),
                                                        t.push(U);
                                                }
                                                break;
                                            case "url":
                                                l.length > 0 &&
                                                    t.push({
                                                        type: s.URL,
                                                        value: l[0],
                                                    });
                                        }
                                        (a = !1), (o = "");
                                    }
                                    break;
                                case ",":
                                    n ? (o += Q) : a && (l.push(o), (o = ""));
                                    break;
                                case " ":
                                case "\t":
                                    n ? (o += Q) : o && (i(t, o), (o = ""));
                                    break;
                                default:
                                    o += Q;
                            }
                            "\\" !== Q && (B = !1);
                        }
                        return o && i(t, o), e && (e[A] = t), t;
                    })),
                i = function (A, e) {
                    switch (e) {
                        case "open-quote":
                            A.push({ type: s.OPENQUOTE });
                            break;
                        case "close-quote":
                            A.push({ type: s.CLOSEQUOTE });
                    }
                },
                c = function (A, e, t) {
                    var r = A.quotes ? A.quotes.split(/\s+/) : ["'\"'", "'\"'"],
                        n = 2 * t;
                    return (
                        n >= r.length && (n = r.length - 2),
                        e || ++n,
                        r[n].replace(/^["']|["']$/g, "")
                    );
                },
                l = function (A, e, t) {
                    for (var r = A.length, a = "", s = 0; s < r; s++)
                        s > 0 && (a += e || ""),
                            (a += (0, n.createCounterText)(
                                A[s],
                                (0, B.parseListStyleType)(t || "decimal"),
                                !1
                            ));
                    return a;
                };
        },
    ]);
});
