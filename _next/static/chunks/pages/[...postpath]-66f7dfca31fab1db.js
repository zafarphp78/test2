(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [214], {
        4159: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[...postpath]", function() {
                return n(5492)
            }])
        },
        5492: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                __N_SSP: function() {
                    return s
                }
            });
            var r = n(5893);
            n(7294);
            var o = n(9008),
                a = n.n(o),
                i = function(t) {
                    var e, n = t.post,
                        o = t.host;
                    return t.path, (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(a(), {
                            children: [(0, r.jsx)("meta", {
                                property: "og:title",
                                content: n.title
                            }), (0, r.jsx)("meta", {
                                property: "og:description",
                                content: null === (e = n.excerpt) || "" === e ? "" : (e = e.toString()).replace(/(<([^>]+)>)/gi, "").replace(/\[[^\]]*\]/, "")
                            }), (0, r.jsx)("meta", {
                                property: "og:type",
                                content: "article"
                            }), (0, r.jsx)("meta", {
                                property: "og:locale",
                                content: "en_US"
                            }), (0, r.jsx)("meta", {
                                property: "og:site_name",
                                content: o.split(".")[0]
                            }), (0, r.jsx)("meta", {
                                property: "article:published_time",
                                content: n.dateGmt
                            }), (0, r.jsx)("meta", {
                                property: "article:modified_time",
                                content: n.modifiedGmt
                            }), (0, r.jsx)("meta", {
                                property: "og:image",
                                content: n.featuredImage.node.sourceUrl
                            }), (0, r.jsx)("meta", {
                                property: "og:image:alt",
                                content: n.featuredImage.node.altText || n.title
                            }), (0, r.jsx)("title", {
                                children: n.title
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "post-container",
                            children: [(0, r.jsx)("h1", {
                                children: n.title
                            }), (0, r.jsx)("img", {
                                src: n.featuredImage.node.sourceUrl,
                                alt: n.featuredImage.node.altText || n.title
                            }), (0, r.jsx)("article", {
                                dangerouslySetInnerHTML: {
                                    __html: n.content
                                }
                            })]
                        })]
                    })
                },
                s = !0;
            e.default = i
        },
        9008: function(t, e, n) {
            t.exports = n(5443)
        }
    },
    function(t) {
        t.O(0, [774, 888, 179], function() {
            return t(t.s = 4159)
        }), _N_E = t.O()
    }
]);