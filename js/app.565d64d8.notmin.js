!(function (e) {
    function t(t) {
        for (var n, i, s = t[0], l = t[1], d = t[2], c = 0, p = []; c < s.length; c++) (i = s[c]), Object.prototype.hasOwnProperty.call(a, i) && a[i] && p.push(a[i][0]), (a[i] = 0);
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        for (u && u(t); p.length; ) p.shift()();
        return r.push.apply(r, d || []), o();
    }
    function o() {
        for (var e, t = 0; t < r.length; t++) {
            for (var o = r[t], n = !0, s = 1; s < o.length; s++) {
                var l = o[s];
                0 !== a[l] && (n = !1);
            }
            n && (r.splice(t--, 1), (e = i((i.s = o[0]))));
        }
        return e;
    }
    var n = {},
        a = { 0: 0 },
        r = [];
    function i(t) {
        if (n[t]) return n[t].exports;
        var o = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    (i.m = e),
        (i.c = n),
        (i.d = function (e, t, o) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if ((i.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    i.d(
                        o,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return o;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = "");
    var s = (window.webpackJsonp = window.webpackJsonp || []),
        l = s.push.bind(s);
    (s.push = t), (s = s.slice());
    for (var d = 0; d < s.length; d++) t(s[d]);
    var u = l;
    r.push([56, 1]), o();
})({
    23: function (e, t, o) {},
    56: function (e, t, o) {
        "use strict";
        o.r(t);
        o(23);
        var n = o(20),
            a = (o(24), o(21)),
            r = o.n(a),
            i = o(10),
            s = o.n(i);
        o(46);
        function l(e, t, o) {
            return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
        }
        var d = function (e, t, o, n, a) {
                return n + ((a - n) * (e - t)) / (o - t);
            },
            u = function e(t, o, n, a) {
                var i = this;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    l(this, "reset", function () {
                        var e, t;
                        (e = 0.25 * Math.random() + 0.25), (t = 0.25 * Math.random() + 0.25), (i.node1.last = [e, t]), i.updateNode("node1", e, t, !1);
                    }),
                    l(this, "updateNode", function (e, t, o, n) {
                        n
                            ? ((i.lastUpdated = i.time), (i[e].last = [t, o]))
                            : (i[e].style.transform = "translate3d( " + (t * window.innerWidth - 0.5 * window.innerWidth * 0.5) + "px, " + (o * window.innerHeight - 0.5 * window.innerHeight * 0.5) + "px, 0px )"),
                            t > 0.75 && (t = 0.75),
                            t < 0.25 && (t = 0.25),
                            (t = d(t, 0.25, 0.75, 0, 1)),
                            o > 0.75 && (o = 0.75),
                            o < 0.25 && (o = 0.25),
                            (o = d(o, 0.25, 0.75, 0, 1)),
                            (i[e].x = t),
                            (i[e].y = o),
                            i.player.updateNode(e, t, o);
                        var a = [],
                            r = [];
                        (a[0] = i.colors.tl[0][0] * ((1 - t) * (1 - o)) + i.colors.tr[0][0] * (t * (1 - o)) + i.colors.bl[0][0] * ((1 - t) * o) + i.colors.br[0][0] * (t * o)),
                            (a[1] = i.colors.tl[0][1] * ((1 - t) * (1 - o)) + i.colors.tr[0][1] * (t * (1 - o)) + i.colors.bl[0][1] * ((1 - t) * o) + i.colors.br[0][1] * (t * o)),
                            (a[2] = i.colors.tl[0][2] * ((1 - t) * (1 - o)) + i.colors.tr[0][2] * (t * (1 - o)) + i.colors.bl[0][2] * ((1 - t) * o) + i.colors.br[0][2] * (t * o)),
                            (r[0] = i.colors.tl[1][0] * ((1 - t) * (1 - o)) + i.colors.tr[1][0] * (t * (1 - o)) + i.colors.bl[1][0] * ((1 - t) * o) + i.colors.br[1][0] * (t * o)),
                            (r[1] = i.colors.tl[1][1] * ((1 - t) * (1 - o)) + i.colors.tr[1][1] * (t * (1 - o)) + i.colors.bl[1][1] * ((1 - t) * o) + i.colors.br[1][1] * (t * o)),
                            (r[2] = i.colors.tl[1][2] * ((1 - t) * (1 - o)) + i.colors.tr[1][2] * (t * (1 - o)) + i.colors.bl[1][2] * ((1 - t) * o) + i.colors.br[1][2] * (t * o));
                        var s = "hsl(" + a[0] + ", " + a[1] + "%, " + a[2] + "% )";
                        i.pane1.style.backgroundColor = s;
                        var l = "hsl(" + r[0] + ", " + r[1] + "%, " + r[2] + "% )";
                        i.pane2.style.backgroundColor = l;
                    }),
                    l(this, "update", function (e) {
                        i.time = e;
                        player.justPlayed && ((i.lastUpdated = i.time + 4e3), (player.justPlayed = !1));
                        var t = i.time - i.lastUpdated;
                        if (t > 4e3) {
                            var o = (1 * Math.min(t - 4e3, 3e3)) / 3e3,
                                n = 0.33 * o,
                                a = 2e-4 * i.time,
                                r = i.simplex.noise3D(i.node1.x, i.node1.y, a + 235) * n,
                                l = i.simplex.noise3D(i.node1.y, i.node1.x, a + 743) * n,
                                d = s()(i.node1.last[0], 0.5, o) + r * o,
                                u = s()(i.node1.last[1], 0.5, o) + l * o;
                            i.updateNode("node1", d, u);
                        }
                    }),
                    l(this, "getTransform", function (e) {
                        var t = e.style.transform.split(/\w+\(|\);?/);
                        return t[1] && t[1].length ? t[1].split(/,\s?/g) : [];
                    }),
                    l(this, "newTrack", function (e) {
                        (i.colors = e), i.player.updateNode("node1", node1.x, node1.y), i.updateNode("node1", node1.x, node1.y, !0);
                    }),
                    l(this, "resize", function () {
                        i.update("node1", i.node1.x, i.node1.y);
                    }),
                    (this.player = t),
                    (this.element = o),
                    (this.node1 = document.getElementById("node1")),
                    (this.node1.x = 0),
                    (this.node1.y = 0),
                    (this.lfo1 = 0),
                    (this.pane1 = document.getElementById("pane1")),
                    (this.pane2 = document.getElementById("pane2")),
                    (this.colors = a),
                    (this.simplex = new r.a(Date.now())),
                    window.addEventListener("resize", this.resize.bind(this), !1);
            },
            c = o(22),
            p = o.n(c);
        function f(e, t, o) {
            return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
        }
        var h = function e(t) {
                var o = this;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    f(this, "next", function () {
                        console.log("next");
                        var e = o.trackNumber + 1;
                        e > o.trackList.length && (e = 1), (o.trackNumber = e), o.activateTrack();
                    }),
                    f(this, "previous", function () {
                        console.log("prev");
                        var e = o.trackNumber - 1;
                        e < 1 && (e = o.trackList.length), (o.trackNumber = e), o.activateTrack();
                    }),
                    f(this, "activateTrack", function () {
                        console.log("activating ", o.trackNumber),
                            (o.track = o.tracks[o.trackNumber]),
                            (window.location.hash = o.trackNumber),
                            (o.player.trackId.innerText = o.config.tracks[o.trackNumber - 1].title),
                            o.player.newTrack(o.track.audio),
                            o.xyPad.newTrack(o.config.tracks[o.trackNumber - 1].colors),
                            o.track.loaded ? (o.player.play(), (o.loading.style.display = "none")) : ((o.notLoaded = !0), (o.loading.style.display = "flex"));
                    }),
                    f(this, "onLoad", function (e) {
                        o.notLoaded && e === o.trackNumber && (o.player.play(), (o.loading.style.display = "none"), (o.notLoaded = !1));
                    }),
                    (this.url = p.a.parse(window.location.href)),
                    this.url.hash ? (this.trackNumber = parseFloat(this.url.hash.slice(1))) : ((this.trackNumber = 1), (window.location.hash = 1));
                for (var n = 0; n < t.tracks.length; n++) t.tracks[n].trackNumber = n + 1;
                (this.config = t),
                    (this.title = t.title),
                    (this.artist = t.artist),
                    (this.year = t.year),
                    (this.about = t.about),
                    (this.trackList = t.tracks),
                    (this.track = t.tracks[parseFloat(this.trackNumber) - 1]),
                    (this.colors = this.track.colors);
            },
            g = o(1),
            m = o.n(g);
        function y(e, t, o) {
            return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
        }
        var w = function e(t) {
                var o = this;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    y(this, "loadAudio", function (e) {
                        (o.loadTotal = e.length),
                            (o.audio1 = new m.a.Player({ url: e[0], loop: !1, onload: o.allLoad })),
                            (o.audio2 = new m.a.Player({ url: e[1], loop: !1, onload: o.allLoad })),
                            (o.audio3 = new m.a.Player({ url: e[2], loop: !1, onload: o.allLoad })),
                            (o.audio4 = new m.a.Player({ url: e[3], loop: !1, onload: o.allLoad }));
                        for (var t = 1; t <= o.loadTotal; t++) (o["audio" + t].volume.value = 0), o["audio" + t].toMaster();
                    }),
                    y(this, "start", function (e) {
                        o.audio1.start(), o.audio2.start(), o.audio3.start(), o.audio4.start(), e && (o.audio1.seek(e), o.audio2.seek(e), o.audio3.seek(e), o.audio4.seek(e));
                    }),
                    y(this, "stop", function () {
                        o.audio1.stop(), o.audio2.stop(), o.audio3.stop(), o.audio4.stop();
                    }),
                    y(this, "allLoad", function () {
                        console.log("loaded"), o.loadCount++, o.loadCount == o.loadTotal && o.buffersLoaded();
                    }),
                    y(this, "setBuffersLoaded", function (e) {
                        o.buffersLoaded = e;
                    }),
                    y(this, "seek", function (e) {
                        o.audio1.seek(e), o.audio2.seek(e), o.audio3.seek(e), o.audio4.seek(e);
                    }),
                    this.loadAudio(t),
                    (this.loadCount = 0);
            },
            b = o(11),
            v = o.n(b);
        function k(e, t, o) {
            return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
        }
        var T = function e(t, o) {
            var n = this;
            !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
                k(this, "play", function () {
                    console.log(n.currentTime, n.audio),
                        n.startTime || (n.startTime = 0.001 * Date.now()),
                        n.audio.start(n.currentTime),
                        n.playPause.classList.remove("play"),
                        n.playPause.classList.add("pause"),
                        (n.justPlayed = !0),
                        (n.paused = !1);
                }),
                k(this, "pause", function () {
                    n.audio.stop(), n.playPause.classList.remove("pause"), n.playPause.classList.add("play"), (n.paused = !0);
                }),
                k(this, "newTrack", function (e) {
                    console.log("new track with audio:", e),
                        n.pause(),
                        (n.currentTime = 0),
                        (n.startTime = 0),
                        n.setCurrentAudio(e),
                        n.seek(),
                        n.trackId.classList.remove("hide"),
                        setTimeout(function () {
                            n.trackId.classList.add("hide");
                        }, 5e3);
                }),
                k(this, "togglePausePlay", function () {
                    n.trackId.classList.remove("hide"),
                        setTimeout(function () {
                            n.trackId.classList.add("hide");
                        }, 5e3),
                        n.paused ? n.play() : n.pause();
                }),
                k(this, "attachElements", function (e, t, o, a) {
                    (n.trackId = a), (n.playPause = e), (n.nextButton = o), (n.nextButton.onclick = n.loader.next), (n.previousButton = t), (n.previousButton.onclick = n.loader.previous);
                }),
                k(this, "seek", function () {
                    n.audio.seek(n.currentTime);
                }),
                k(this, "updateNode", function (e, t, o) {
                    var a = v.a.Sinusoidal.InOut(o),
                        r = v.a.Sinusoidal.InOut(t),
                        i = (1 - r) * (1 - a),
                        s = r * (1 - a),
                        l = (1 - r) * a,
                        d = r * a;
                    (n.audio.audio1.volume.value = Math.min(0.6 * -24 + 24 * i, 0)),
                        (n.audio.audio2.volume.value = Math.min(0.6 * -24 + 24 * s, 0)),
                        (n.audio.audio3.volume.value = Math.min(0.6 * -24 + 24 * l, 0)),
                        (n.audio.audio4.volume.value = Math.min(0.6 * -24 + 24 * d, 0));
                }),
                k(this, "setCurrentAudio", function (e) {
                    n.audio && n.audio.stop(), (n.audio = e), (n.duration = e.audio1.buffer.duration);
                }),
                (this.loader = o || console.warn("Player requires loader")),
                (this.audio = t || console.warn("Player requires audio")),
                (this.currentTime = 0),
                (this.startTime = 0),
                (this.progress = function () {
                    n.currentTime = 0.001 * Date.now() - n.startTime;
                    var e = n.currentTime / n.duration;
                    return e >= 1 ? 0 : e;
                }),
                (this.paused = !0);
        };
        var x = function e() {
            var t, o, n;
            !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
                (n = function (e, t) {
                    var o, n, a;
                    e.addEventListener("input", function (e) {
                        (o = 1), (n = e.target.value) != a && t(e), (a = n);
                    }),
                        e.addEventListener("change", function (e) {
                            o || t(e);
                        });
                }),
                (o = "onRangeChange") in (t = this) ? Object.defineProperty(t, o, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[o] = n);
        };
        window.config =
            ((N = (function (e, t) {
                var o = new XMLHttpRequest();
                return o.open("GET", e, !1), null != t && o.overrideMimeType && o.overrideMimeType(t), o.send(), 200 == o.status ? o.responseText : null;
            })("public/assets/config/config.json", "application/json")),
            JSON.parse(N));
        var N,
            P = (window.loader = new h(config)),
            L = config.tracks.slice(0);
        L.splice(P.trackNumber - 1, 1);
        window.preloadTracks = L;
        var E = (window.audio = new w(P.track.audio)),
            I = (window.tracks = {});
        (I[P.trackNumber] = {}), (I[P.trackNumber].audio = E), (I[P.trackNumber].images = P.track.images), (I[P.trackNumber].loaded = !0);
        var B = (window.player = new T(E, P)),
            j = (window.controls = new x()),
            O = (window.xyPad = new u(B, document.getElementById("xyPad"), P.track.images, P.colors));
        (P.player = B), (P.xyPad = O), (P.tracks = I), (window.draggable = !1);
        var C = document.getElementById("loading"),
            M = document.getElementById("progress"),
            H = document.getElementById("playPause"),
            S = document.getElementById("previous"),
            W = document.getElementById("next"),
            A = document.getElementById("info"),
            D = document.getElementById("info-button"),
            U = (document.getElementById("info-container"), document.getElementById("info-window")),
            _ = document.getElementById("track-id");
        (_.innerText = P.track.title),
            (A.outerHTML = P.about),
            (P.loading = C),
            (U.onclick = D.onclick = function (e) {
                console.log(e),
                    "info-container" != e.target.id && "info-container" != e.target.parentNode.id && ("flex" === U.style.display ? ((U.style.display = "none"), (U.style.opacity = 0)) : ((U.style.display = "flex"), (U.style.opacity = 1)));
            }),
            E.setBuffersLoaded(function () {
                console.log("first buffers loaded"),
                    B.setCurrentAudio(E),
                    B.attachElements(H, S, W, _),
                    (B.onclick = H.onclick = B.togglePausePlay),
                    (window.draggable = new n.Draggable(O.element, { draggable: ".node" })),
                    draggable.on("drag:start", function (e) {
                        var t = O.getTransform(e.data.originalSource),
                            o = t[0] || 0,
                            n = t[1] || 0;
                        draggable.sourceXY = { x: parseInt(o), y: parseInt(n) };
                    }),
                    console.log("drag:start"),
                    draggable.on("drag:move", function (e) {
                        var t = e.data.originalSource;
                        t.style.display = "block";
                        var o = t.id,
                            n = document.getElementsByClassName("draggable-mirror")[0],
                            a = O.getTransform(n),
                            r = parseInt(a[0]),
                            i = parseInt(a[1]),
                            s = draggable.sourceXY.x + r,
                            l = draggable.sourceXY.y + i;
                        s < 0 && (s = 0),
                            s + 0.5 * window.innerWidth > window.innerWidth && (s = window.innerWidth - 0.5 * window.innerWidth),
                            l < 0 && (l = 0),
                            l + 0.5 * window.innerHeight > window.innerHeight && (l = window.innerHeight - 0.5 * window.innerHeight),
                            (t.style.transform = "translate3d( " + s + "px, " + l + "px, 0px )"),
                            (s = (s + 0.5 * window.innerWidth * 0.5) / window.innerWidth),
                            (l = (l + 0.5 * window.innerHeight * 0.5) / window.innerHeight),
                            O.updateNode(o, s, l, !0);
                    }),
                    console.log("drag:move"),
                    O.reset(),
                    console.log("reset"),
                    _.classList.add("hide"),
                    console.log("hide loader"),
                    (C.style.display = "none"),
                    _.classList.add("hide"),
                    q();
            });
        var q = function e() {
                var t = L.splice(0, 1)[0];
                console.log(t);
                var o = new w(t.audio);
                (I[t.trackNumber] = {}),
                    (I[t.trackNumber].audio = o),
                    (I[t.trackNumber].images = t.images),
                    o.setBuffersLoaded(function () {
                        console.log("preloaded another track", t.trackNumber), (I[t.trackNumber].loaded = !0), P.onLoad(t.trackNumber);
                    }),
                    L.length && e();
            },
            F = null;
        window.requestAnimationFrame(function e(t) {
            if ((F || (F = t), !B.paused && !M.isUpdating)) {
                var o = B.progress(),
                    n = progress.value;
                (progress.value = o), 0 == o && n >= 1 && (console.log("ended"), B.pause(), P.next()), O.update(t);
            }
            (M.isUpdating = !1), window.requestAnimationFrame(e);
        }),
            j.onRangeChange(M, function (e) {
                (M.isUpdating = !0), (M.value = e.target.value), (B.currentTime = M.value * B.duration), B.seek();
            });
    },
});
//# sourceMappingURL=app.565d64d8.js.map
