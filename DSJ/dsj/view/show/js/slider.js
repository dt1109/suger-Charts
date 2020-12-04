(function (a) {
    a.fn.slider = function (c) {
        var b = {
            width: 200,
            isShowMark: true,
            sliderDotSize: 16,
            barHeight: 6,
            step: 20
        };
        var e = a.extend(true, {}, b, c);

        function f(l, h, g, k) {
            var j = l / (e.width - e.sliderDotSize) * (g - h) + h;
            k.value = parseInt(j)
        }

        function d(k, p, j, l) {
            if (p - k < j) {
                return "<span>鍙傛暟閿欒</span>"
            } else {
                var q = a('<div ondragstart="return false;" class="sliderWrap"></div>');
                q.width(e.width || 200);
                q[0].ismousedown = false;
                var h = a('<div class="sliderBar"></div>');
                var m = a('<span class="sliderDot"></span>');
                m.css({
                    "width": e.sliderDotSize,
                    "height": e.sliderDotSize,
                    "top": -(e.sliderDotSize - e.barHeight) / 2
                });
                h.height(e.barHeight);
                q.mousedown(function () {
                    this.ismousedown = true
                });
                q.on("click", function (t) {
                    var s = t.pageX - a(this).children(".sliderBar").offset().left - e.sliderDotSize /
                        2;
                    if (s < 0) {
                        s = 0
                    }
                    if (s > e.width - e.sliderDotSize) {
                        s = e.width - e.sliderDotSize
                    }
                    m.css("left", s);
                    f(s, k, p, l)
                });
                q.on("mousemove", function (t) {
                    if (this.ismousedown) {
                        var s = t.pageX - a(this).children(".sliderBar").offset().left - e.sliderDotSize /
                            2;
                        if (s < 0) {
                            s = 0
                        }
                        if (s > e.width - e.sliderDotSize) {
                            s = e.width - e.sliderDotSize
                        }
                        m.css("left", s);
                        f(s, k, p, l)
                    }
                });
                a(document).mouseup(function () {
                    q[0].ismousedown = false
                });
                q.append(h);
                h.append(m);
                if ((p - k) % j !== 0) {
                    e.isShowMark = false
                }
                if (e.isShowMark) {
                    var o = '<div class="sliderMark">';
                    var n = (p - k) / j;
                    for (i = 0; i <= n; i++) {
                        var r = e.width - e.sliderDotSize;
                        var g = r / n * i + e.sliderDotSize / 2;
                        splitValue = k + j * i;
                        o += "<dl style='left:" + g + "px'>" + "<dt></dt>" + "<dd>" + splitValue + "</dd>" +
                            "</dl>"
                    }
                    o += "</div>";
                    h.append(a(o))
                }
                return q
            }
        }
        this.each(function () {
            var l = a(this);
            var h = parseInt(l.attr("min")) || 0;
            var g = parseInt(l.attr("max")) || 100;
            var j = parseInt(e.step);
            var k = d(h, g, j, this);
            a(k).insertAfter(l);
            l.change(function () {
                if (this.value > g) {
                    this.value = g
                } else {
                    if (this.value < h) {
                        this.value = h
                    }
                }
                var m = this.value;
                var n = (m - h) / (g - h) * (e.width - e.sliderDotSize);
                k.find(".sliderDot").css("left", n)
            });
            if (this.value) {
                l.trigger("change")
            }
        });
        return this
    }
})(jQuery);