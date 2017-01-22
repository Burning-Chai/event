(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var a = /(\d|\.)+/g, b = {
        aqua: [ 0, 255, 255 ],
        lime: [ 0, 255, 0 ],
        silver: [ 192, 192, 192 ],
        black: [ 0, 0, 0 ],
        maroon: [ 128, 0, 0 ],
        teal: [ 0, 128, 128 ],
        blue: [ 0, 0, 255 ],
        navy: [ 0, 0, 128 ],
        white: [ 255, 255, 255 ],
        fuchsia: [ 255, 0, 255 ],
        olive: [ 128, 128, 0 ],
        yellow: [ 255, 255, 0 ],
        orange: [ 255, 165, 0 ],
        gray: [ 128, 128, 128 ],
        purple: [ 128, 0, 128 ],
        green: [ 0, 128, 0 ],
        red: [ 255, 0, 0 ],
        pink: [ 255, 192, 203 ],
        cyan: [ 0, 255, 255 ],
        transparent: [ 255, 255, 255, 0 ]
    }, c = function(a, b, c) {
        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5;
    }, d = function(d) {
        if ("" === d || null == d || "none" === d) return b.transparent;
        if (b[d]) return b[d];
        if ("number" == typeof d) return [ d >> 16, 255 & d >> 8, 255 & d ];
        if ("#" === d.charAt(0)) return 4 === d.length && (d = "#" + d.charAt(1) + d.charAt(1) + d.charAt(2) + d.charAt(2) + d.charAt(3) + d.charAt(3)), 
        d = parseInt(d.substr(1), 16), [ d >> 16, 255 & d >> 8, 255 & d ];
        if ("hsl" === d.substr(0, 3)) {
            d = d.match(a);
            var e = Number(d[0]) % 360 / 360, f = Number(d[1]) / 100, g = Number(d[2]) / 100, h = .5 >= g ? g * (f + 1) : g + f - g * f, i = 2 * g - h;
            return d.length > 3 && (d[3] = Number(d[3])), d[0] = c(e + 1 / 3, i, h), d[1] = c(e, i, h), 
            d[2] = c(e - 1 / 3, i, h), d;
        }
        return d.match(a) || b.transparent;
    };
    window._gsDefine.plugin({
        propName: "colorProps",
        priority: -1,
        API: 2,
        init: function(a, b) {
            this._target = a;
            var c, e, f, g;
            for (c in b) f = d(b[c]), this._firstPT = g = {
                _next: this._firstPT,
                p: c,
                f: "function" == typeof a[c],
                n: c,
                r: !1
            }, e = d(g.f ? a[c.indexOf("set") || "function" != typeof a["get" + c.substr(3)] ? c : "get" + c.substr(3)]() : a[c]), 
            g.s = Number(e[0]), g.c = Number(f[0]) - g.s, g.gs = Number(e[1]), g.gc = Number(f[1]) - g.gs, 
            g.bs = Number(e[2]), g.bc = Number(f[2]) - g.bs, (g.rgba = e.length > 3 || f.length > 3) && (g.as = 4 > e.length ? 1 : Number(e[3]), 
            g.ac = (4 > f.length ? 1 : Number(f[3])) - g.as), g._next && (g._next._prev = g);
            return !0;
        },
        set: function(a) {
            for (var b, c = this._firstPT; c; ) b = (c.rgba ? "rgba(" : "rgb(") + (c.s + a * c.c >> 0) + ", " + (c.gs + a * c.gc >> 0) + ", " + (c.bs + a * c.bc >> 0) + (c.rgba ? ", " + (c.as + a * c.ac) : "") + ")", 
            c.f ? this._target[c.p](b) : this._target[c.p] = b, c = c._next;
        }
    });
}), window._gsDefine && window._gsQueue.pop()();

!function(a) {
    var b = function(c, d) {
        var e = this;
        var f = b.prototype;
        this.categories_ar = d.categories_ar;
        this.buttons_ar = [];
        this.mainHolder_do = null;
        this.selector_do = null;
        this.mainButtonsHolder_do = null;
        this.buttonsHolder_do = null;
        this.arrowW = d.arrowW;
        this.arrowH = d.arrowH;
        this.arrowN_str = d.arrowN_str;
        this.arrowS_str = d.arrowS_str;
        this.selectorLabel_str = d.selectorLabel;
        this.selectorBkColorN_str1 = d.selectorBackgroundNormalColor1;
        this.selectorBkColorS_str1 = d.selectorBackgroundSelectedColor1;
        this.selectorBkColorN_str2 = d.selectorBackgroundNormalColor2;
        this.selectorBkColorS_str2 = d.selectorBackgroundSelectedColor2;
        this.selectorTextColorN_str = d.selectorTextNormalColor;
        this.selectorTextColorS_str = d.selectorTextSelectedColor;
        this.itemBkColorN_str1 = d.buttonBackgroundNormalColor1;
        this.itemBkColorS_str1 = d.buttonBackgroundSelectedColor1;
        this.itemBkColorN_str2 = d.buttonBackgroundNormalColor2;
        this.itemBkColorS_str2 = d.buttonBackgroundSelectedColor2;
        this.itemTextColorN_str = d.buttonTextNormalColor;
        this.itemTextColorS_str = d.buttonTextSelectedColor;
        this.shadowColor_str = d.shadowColor;
        this.position_str = d.position;
        this.finalX;
        this.finalY;
        this.totalButtons = e.categories_ar.length;
        this.curId = d.startAtCategory;
        this.horizontalMargins = d.comboBoxHorizontalMargins;
        this.verticalMargins = d.comboBoxVerticalMargins;
        this.buttonsHolderWidth = 0;
        this.buttonsHolderHeight = 0;
        this.totalWidth = 0;
        this.buttonHeight = 26;
        this.totalButtonsHeight = 0;
        this.sapaceBetweenButtons = 0;
        this.borderRadius = d.comboBoxCornerRadius;
        this.hideMenuTimeOutId_to;
        this.getMaxWidthResizeAndPositionId_to;
        this.isShowed_bl = false;
        this.isOpened_bl = false;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.init = function() {
            e.setVisible(false);
            e.setZ(2e5);
            e.setupMainContainers();
            e.getMaxWidthResizeAndPositionId_to = setTimeout(function() {
                e.getMaxWidthResizeAndPosition(), e.setButtonsState();
                e.position();
                e.showFirstTime();
            }, 200);
        };
        this.setupMainContainers = function() {
            var a;
            e.mainHolder_do = new FWDR3DCarDisplayObject("div");
            e.mainHolder_do.setOverflow("visible");
            e.addChild(e.mainHolder_do);
            e.mainButtonsHolder_do = new FWDR3DCarDisplayObject("div");
            e.mainButtonsHolder_do.setY(e.buttonHeight);
            e.mainHolder_do.addChild(e.mainButtonsHolder_do);
            e.buttonsHolder_do = new FWDR3DCarDisplayObject("div");
            e.mainButtonsHolder_do.addChild(e.buttonsHolder_do);
            FWDR3DCarComboBoxSelector.setPrototype();
            e.selector_do = new FWDR3DCarComboBoxSelector(e.arrowW, e.arrowH, e.arrowN_str, e.arrowS_str, e.selectorLabel_str, e.selectorBkColorN_str1, e.selectorBkColorS_str1, e.selectorBkColorN_str2, e.selectorBkColorS_str2, e.selectorTextColorN_str, e.selectorTextColorS_str, e.buttonHeight);
            e.mainHolder_do.addChild(e.selector_do);
            e.selector_do.setNormalState(false);
            if (0 != e.borderRadius) {
                e.selector_do.bk_sdo.getStyle().borderTopLeftRadius = e.borderRadius + "px";
                e.selector_do.bk_sdo.getStyle().borderTopRightRadius = e.borderRadius + "px";
                e.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = e.borderRadius + "px";
                e.selector_do.bk_sdo.getStyle().borderBottomRightRadius = e.borderRadius + "px";
                e.getStyle().borderRadius = e.borderRadius + "px";
            }
            e.selector_do.addListener(FWDR3DCarComboBoxSelector.MOUSE_DOWN, e.openMenuHandler);
            for (var b = 0; b < e.totalButtons; b++) {
                FWDR3DCarComboBoxButton.setPrototype();
                a = new FWDR3DCarComboBoxButton(e.categories_ar[b], e.itemBkColorN_str1, e.itemBkColorS_str1, e.itemBkColorN_str2, e.itemBkColorS_str2, e.itemTextColorN_str, e.itemTextColorS_str, b, e.buttonHeight);
                e.buttons_ar[b] = a;
                a.addListener(FWDR3DCarComboBoxButton.MOUSE_DOWN, e.buttonOnMouseDownHandler);
                e.buttonsHolder_do.addChild(a);
            }
            if (0 != e.borderRadius) {
                a.bk_sdo.getStyle().borderBottomLeftRadius = e.borderRadius + "px";
                a.bk_sdo.getStyle().borderBottomRightRadius = e.borderRadius + "px";
            }
        };
        this.buttonOnMouseDownHandler = function(c) {
            e.curId = c.target.id;
            e.setButtonsStateBasedOnId();
            clearTimeout(e.hideMenuTimeOutId_to);
            e.hide(true);
            e.selector_do.enable();
            if (e.isMobile_bl) if (e.hasPointerEvent_bl) a.removeEventListener("MSPointerDown", e.checkOpenedMenu); else a.removeEventListener("touchstart", e.checkOpenedMenu); else if (a.addEventListener) a.removeEventListener("mousemove", e.checkOpenedMenu); else if (document.attachEvent) document.detachEvent("onmousemove", e.checkOpenedMenu);
            e.dispatchEvent(b.BUTTON_PRESSED, {
                id: e.curId
            });
        };
        this.openMenuHandler = function() {
            if (e.isShowed_bl) return;
            e.selector_do.disable();
            e.show(true);
            e.startToCheckOpenedMenu();
            e.dispatchEvent(b.OPEN);
        };
        this.setButtonsStateBasedOnId = function() {
            for (var a = 0; a < e.totalButtons; a++) {
                button_do = e.buttons_ar[a];
                if (a == e.curId) button_do.disable(); else button_do.enable();
            }
        };
        this.setValue = function(a) {
            e.curId = a;
            e.setButtonsStateBasedOnId();
        };
        this.startToCheckOpenedMenu = function(b) {
            if (e.isMobile_bl) if (e.hasPointerEvent_bl) a.addEventListener("MSPointerDown", e.checkOpenedMenu); else a.addEventListener("touchstart", e.checkOpenedMenu); else if (a.addEventListener) a.addEventListener("mousemove", e.checkOpenedMenu); else if (document.attachEvent) document.attachEvent("onmousemove", e.checkOpenedMenu);
        };
        this.checkOpenedMenu = function(b) {
            if (b.preventDefault) b.preventDefault();
            var c = FWDR3DCarUtils.getViewportMouseCoordinates(b);
            if (!FWDR3DCarUtils.hitTest(e.screen, c.screenX, c.screenY)) {
                if (e.isMobile_bl) {
                    e.hide(true);
                    e.selector_do.enable();
                } else {
                    clearTimeout(e.hideMenuTimeOutId_to);
                    e.hideMenuTimeOutId_to = setTimeout(function() {
                        e.hide(true);
                        e.selector_do.enable();
                    }, 1e3);
                }
                if (e.isMobile_bl) if (e.hasPointerEvent_bl) a.removeEventListener("MSPointerDown", e.checkOpenedMenu); else a.removeEventListener("touchstart", e.checkOpenedMenu); else if (a.addEventListener) a.removeEventListener("mousemove", e.checkOpenedMenu); else if (document.attachEvent) document.detachEvent("onmousemove", e.checkOpenedMenu);
            } else clearTimeout(e.hideMenuTimeOutId_to);
        };
        e.getMaxWidthResizeAndPosition = function() {
            var a;
            var b;
            var c;
            e.totalWidth = 0;
            e.totalButtonsHeight = 0;
            e.totalWidth = e.selector_do.getMaxTextWidth() + 20;
            for (var d = 0; d < e.totalButtons; d++) {
                a = e.buttons_ar[d];
                if (a.getMaxTextWidth() > e.totalWidth) e.totalWidth = a.getMaxTextWidth();
            }
            for (var d = 0; d < e.totalButtons; d++) {
                a = e.buttons_ar[d];
                a.setY(d * (a.totalHeight + e.sapaceBetweenButtons));
                a.totalWidth = e.totalWidth;
                a.setWidth(e.totalWidth);
                a.centerText();
            }
            e.totalButtonsHeight = a.getY() + a.totalHeight;
            e.setWidth(e.totalWidth);
            e.setHeight(e.buttonHeight);
            e.mainButtonsHolder_do.setWidth(e.totalWidth);
            e.selector_do.totalWidth = e.totalWidth;
            e.selector_do.setWidth(e.totalWidth);
            e.selector_do.centerText();
            e.buttonsHolder_do.setWidth(e.totalWidth);
            e.buttonsHolder_do.setHeight(e.totalButtonsHeight);
            e.hide(false, true);
        };
        this.setButtonsState = function() {
            var a;
            for (var b = 0; b < e.totalButtons; b++) {
                a = e.buttons_ar[b];
                if (b == e.curId) a.disable(true); else a.enable(true);
            }
        };
        this.position = function() {
            if ("topleft" == e.position_str) {
                e.finalX = Math.max((c.stageWidth - c.originalWidth) / 2 + e.horizontalMargins, e.horizontalMargins);
                e.finalY = e.verticalMargins;
            } else if ("topright" == e.position_str) {
                e.finalX = Math.min((c.originalWidth - c.stageWidth) / 2 + c.stageWidth - e.totalWidth - e.horizontalMargins, c.stageWidth - e.totalWidth - e.horizontalMargins);
                e.finalY = e.verticalMargins;
            }
            if (FWDR3DCarUtils.isAndroid) {
                e.setX(Math.floor(e.finalX));
                e.setY(Math.floor(e.finalY - 1));
                setTimeout(e.posCombobox, 100);
            } else e.posCombobox();
        };
        this.posCombobox = function() {
            e.setX(Math.floor(e.finalX));
            e.setY(Math.floor(e.finalY));
        };
        this.showFirstTime = function() {
            e.setVisible(true);
            if ("topleft" == e.position_str || "topright" == e.position_str) e.mainHolder_do.setY(-(e.verticalMargins + e.buttonHeight));
            e.getStyle().boxShadow = "0px 0px 3px " + e.shadowColor_str;
            FWDR3DCarModTweenMax.to(e.mainHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            });
        };
        this.hide = function(a, b) {
            if (!e.isShowed_bl && !b) return;
            FWDR3DCarModTweenMax.killTweensOf(this);
            e.isShowed_bl = false;
            if (0 != e.borderRadius) {
                e.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = e.borderRadius + "px";
                e.selector_do.bk_sdo.getStyle().borderBottomRightRadius = e.borderRadius + "px";
            }
            if (a) {
                FWDR3DCarModTweenMax.to(e.buttonsHolder_do, .6, {
                    y: -e.totalButtonsHeight,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(e.mainButtonsHolder_do, .6, {
                    h: 0,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(e, .6, {
                    h: e.buttonHeight,
                    ease: Expo.easeInOut
                });
            } else {
                e.buttonsHolder_do.setY(e.buttonHeight - e.totalButtonsHeight);
                e.mainButtonsHolder_do.setHeight(0);
                e.setHeight(e.buttonHeight);
            }
        };
        this.show = function(a, b) {
            if (e.isShowed_bl && !b) return;
            FWDR3DCarModTweenMax.killTweensOf(this);
            e.isShowed_bl = true;
            if (0 != e.borderRadius) {
                e.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = 0 + "px";
                e.selector_do.bk_sdo.getStyle().borderBottomRightRadius = 0 + "px";
            }
            if (a) {
                FWDR3DCarModTweenMax.to(e.buttonsHolder_do, .6, {
                    y: 0,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(e.mainButtonsHolder_do, .6, {
                    h: e.totalButtonsHeight + e.buttonHeight,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(e, .6, {
                    h: e.totalButtonsHeight + e.buttonHeight,
                    ease: Expo.easeInOut
                });
            } else {
                e.buttonsHolder_do.setY(e.buttonHeight);
                e.mainButtonsHolder_do.setHeight(e.buttonHeight + e.buttonHeight);
                e.setHeight(e.buttonHeight + e.buttonHeight);
            }
        };
        this.init();
        this.destroy = function() {
            if (e.isMobile_bl) {
                a.removeEventListener("MSPointerDown", e.checkOpenedMenu);
                a.removeEventListener("touchstart", e.checkOpenedMenu);
            } else if (a.removeEventListener) a.removeEventListener("mousemove", e.checkOpenedMenu); else if (document.detachEvent) document.detachEvent("onmousemove", e.checkOpenedMenu);
            clearTimeout(e.hideMenuTimeOutId_to);
            clearTimeout(e.getMaxWidthResizeAndPositionId_to);
            FWDR3DCarModTweenMax.killTweensOf(e);
            FWDR3DCarModTweenMax.killTweensOf(e.mainHolder_do);
            FWDR3DCarModTweenMax.killTweensOf(e.buttonsHolder_do);
            FWDR3DCarModTweenMax.killTweensOf(e.mainButtonsHolder_do);
            e.mainHolder_do.destroy();
            e.selector_do.destroy();
            e.mainButtonsHolder_do.destroy();
            e.buttonsHolder_do.destroy();
            e.categories_ar = null;
            e.buttons_ar = null;
            e.mainHolder_do = null;
            e.selector_do = null;
            e.mainButtonsHolder_do = null;
            e.buttonsHolder_do = null;
            e.upArrowN_img = null;
            e.upArrowS_img = null;
            c = null;
            d = null;
            e.setInnerHTML("");
            f.destroy();
            e = null;
            f = null;
            b.prototype = null;
        };
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject3D("div");
    };
    b.OPEN = "open";
    b.HIDE_COMPLETE = "infoWindowHideComplete";
    b.BUTTON_PRESSED = "buttonPressed";
    b.prototype = null;
    a.FWDR3DCarComboBox = b;
}(window);

!function() {
    var a = function(b, c, d, e, f, g, h, i, j) {
        var k = this;
        var l = a.prototype;
        this.bk_sdo = null;
        this.text_sdo = null;
        this.dumy_sdo = null;
        this.label1_str = b;
        this.backgroundNormalColor_str1 = c;
        this.backgroundSelectedColor_str1 = d;
        this.backgroundNormalColor_str2 = e;
        this.backgroundSelectedColor_str2 = f;
        this.textNormalColor_str = g;
        this.textSelectedColor_str = h;
        this.totalWidth = 400;
        this.totalHeight = j;
        this.id = i;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.isDisabled_bl = false;
        this.colorObj = {
            color1: k.backgroundNormalColor_str1,
            color2: k.backgroundNormalColor_str2
        };
        k.init = function() {
            k.setBackfaceVisibility();
            k.setButtonMode(true);
            k.setupMainContainers();
            k.setWidth(k.totalWidth);
            k.setHeight(k.totalHeight);
        };
        k.setupMainContainers = function() {
            k.bk_sdo = new FWDR3DCarSimpleDisplayObject("div");
            k.bk_sdo.setCSSGradient(k.backgroundNormalColor_str1, k.backgroundNormalColor_str2);
            k.addChild(k.bk_sdo);
            k.text_sdo = new FWDR3DCarSimpleDisplayObject("div");
            k.text_sdo.getStyle().whiteSpace = "nowrap";
            k.text_sdo.setBackfaceVisibility();
            k.text_sdo.setOverflow("visible");
            k.text_sdo.setDisplay("inline-block");
            k.text_sdo.getStyle().fontFamily = "Arial";
            k.text_sdo.getStyle().fontSize = "13px";
            k.text_sdo.getStyle().padding = "6px";
            k.text_sdo.getStyle().color = k.normalColor_str;
            k.text_sdo.getStyle().fontSmoothing = "antialiased";
            k.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            k.text_sdo.getStyle().textRendering = "optimizeLegibility";
            if (FWDR3DCarUtils.isIEAndLessThen9) k.text_sdo.screen.innerText = k.label1_str; else k.text_sdo.setInnerHTML(k.label1_str);
            k.addChild(k.text_sdo);
            k.dumy_sdo = new FWDR3DCarSimpleDisplayObject("div");
            if (FWDR3DCarUtils.isIE) {
                k.dumy_sdo.setBkColor("#FF0000");
                k.dumy_sdo.setAlpha(0);
            }
            k.addChild(k.dumy_sdo);
            if (k.isMobile_bl) if (k.hasPointerEvent_bl) {
                k.screen.addEventListener("MSPointerOver", k.onMouseOver);
                k.screen.addEventListener("MSPointerOut", k.onMouseOut);
                k.screen.addEventListener("MSPointerDown", k.onMouseDown);
                k.screen.addEventListener("MSPointerUp", k.onClick);
            } else k.screen.addEventListener("touchstart", k.onMouseDown); else if (k.screen.addEventListener) {
                k.screen.addEventListener("mouseover", k.onMouseOver);
                k.screen.addEventListener("mouseout", k.onMouseOut);
                k.screen.addEventListener("mousedown", k.onMouseDown);
                k.screen.addEventListener("click", k.onClick);
            } else if (k.screen.attachEvent) {
                k.screen.attachEvent("onmouseover", k.onMouseOver);
                k.screen.attachEvent("onmouseout", k.onMouseOut);
                k.screen.attachEvent("onmousedown", k.onMouseDown);
                k.screen.attachEvent("onclick", k.onClick);
            }
        };
        k.onMouseOver = function(b) {
            if (k.isDisabled_bl) return;
            if (!b.pointerType || b.pointerType == b.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(k.text_sdo);
                k.setSelectedState(true);
                k.dispatchEvent(a.MOUSE_OVER);
            }
        };
        k.onMouseOut = function(b) {
            if (k.isDisabled_bl) return;
            if (!b.pointerType || b.pointerType == b.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(k.text_sdo);
                k.setNormalState(true);
                k.dispatchEvent(a.MOUSE_OUT);
            }
        };
        k.onClick = function(b) {
            if (k.isDisabled_bl) return;
            if (b.preventDefault) b.preventDefault();
            k.dispatchEvent(a.CLICK);
        };
        k.onMouseDown = function(b) {
            if (k.isDisabled_bl) return;
            if (b.preventDefault) b.preventDefault();
            k.dispatchEvent(a.MOUSE_DOWN, {
                e: b
            });
        };
        this.setSelectedState = function(a) {
            if (a) {
                FWDR3DCarModTweenMax.to(k.colorObj, .6, {
                    colorProps: {
                        color1: k.backgroundSelectedColor_str1,
                        color2: k.backgroundSelectedColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: k.applyProps
                });
                FWDR3DCarModTweenMax.to(k.text_sdo.screen, .6, {
                    css: {
                        color: k.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                });
            } else {
                k.bk_sdo.setCSSGradient(k.backgroundSelectedColor_str, k.backgroundNormalColor_str);
                k.text_sdo.getStyle().color = k.textSelectedColor_str;
            }
        };
        this.setNormalState = function(a) {
            if (a) {
                FWDR3DCarModTweenMax.to(k.colorObj, .6, {
                    colorProps: {
                        color1: k.backgroundNormalColor_str1,
                        color2: k.backgroundNormalColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: k.applyProps
                });
                FWDR3DCarModTweenMax.to(k.text_sdo.screen, .6, {
                    css: {
                        color: k.textNormalColor_str
                    },
                    ease: Quart.easeOut
                });
            } else {
                k.bk_sdo.setCSSGradient(k.backgroundNormalColor_str, k.backgroundSelectedColor_str);
                k.text_sdo.getStyle().color = k.textNormalColor_str;
            }
        };
        this.applyProps = function() {
            k.bk_sdo.setCSSGradient(k.colorObj.color1, k.colorObj.color2);
        };
        k.centerText = function() {
            k.dumy_sdo.setWidth(k.totalWidth);
            k.dumy_sdo.setHeight(k.totalHeight);
            k.bk_sdo.setWidth(k.totalWidth);
            k.bk_sdo.setHeight(k.totalHeight);
            if (FWDR3DCarUtils.isIEAndLessThen9 || FWDR3DCarUtils.isSafari) k.text_sdo.setY(Math.round((k.totalHeight - k.text_sdo.getHeight()) / 2) - 1); else k.text_sdo.setY(Math.round((k.totalHeight - k.text_sdo.getHeight()) / 2));
            k.text_sdo.setHeight(k.totalHeight + 2);
        };
        k.getMaxTextWidth = function() {
            return k.text_sdo.getWidth();
        };
        this.disable = function() {
            k.isDisabled_bl = true;
            k.setButtonMode(false);
            k.setSelectedState(true);
        };
        this.enable = function() {
            k.isDisabled_bl = false;
            k.setNormalState(true);
            k.setButtonMode(true);
        };
        k.destroy = function() {
            if (k.isMobile_bl) if (k.hasPointerEvent_bl) {
                k.screen.removeEventListener("MSPointerOver", k.onMouseOver);
                k.screen.removeEventListener("MSPointerOut", k.onMouseOut);
                k.screen.removeEventListener("MSPointerDown", k.onMouseDown);
                k.screen.removeEventListener("MSPointerUp", k.onClick);
            } else k.screen.removeEventListener("touchstart", k.onMouseDown); else if (k.screen.removeEventListener) {
                k.screen.removeEventListener("mouseover", k.onMouseOver);
                k.screen.removeEventListener("mouseout", k.onMouseOut);
                k.screen.removeEventListener("mousedown", k.onMouseDown);
                k.screen.removeEventListener("click", k.onClick);
            } else if (k.screen.detachEvent) {
                k.screen.detachEvent("onmouseover", k.onMouseOver);
                k.screen.detachEvent("onmouseout", k.onMouseOut);
                k.screen.detachEvent("onmousedown", k.onMouseDown);
                k.screen.detachEvent("onclick", k.onClick);
            }
            FWDR3DCarModTweenMax.killTweensOf(k.text_sdo.screen);
            FWDR3DCarModTweenMax.killTweensOf(k.bk_sdo.screen);
            k.text_sdo.destroy();
            k.bk_sdo.destroy();
            k.dumy_sdo.destroy();
            k.bk_sdo = null;
            k.text_sdo = null;
            k.dumy_sdo = null;
            k.label1_str = null;
            k.normalColor_str = null;
            k.textSelectedColor_str = null;
            k.disabledColor_str = null;
            k.setInnerHTML("");
            l.destroy();
            k = null;
            l = null;
            a.prototype = null;
        };
        k.init();
    };
    a.setPrototype = function() {
        a.prototype = new FWDR3DCarDisplayObject("div");
    };
    a.FIRST_BUTTON_CLICK = "onFirstClick";
    a.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    a.MOUSE_OVER = "onMouseOver";
    a.MOUSE_OUT = "onMouseOut";
    a.MOUSE_DOWN = "onMouseDown";
    a.CLICK = "onClick";
    a.prototype = null;
    window.FWDR3DCarComboBoxButton = a;
}(window);

!function() {
    var a = function(b, c, d, e, f, g, h, i, j, k, l, m) {
        var n = this;
        var o = a.prototype;
        this.arrowN_sdo = null;
        this.arrowS_sdo = null;
        this.arrowN_str = d;
        this.arrowS_str = e;
        this.label1_str = f;
        this.backgroundNormalColor_str1 = g;
        this.backgroundNormalColor_str2 = i;
        this.backgroundSelectedColor_str1 = h;
        this.backgroundSelectedColor_str2 = j;
        this.textNormalColor_str = k;
        this.textSelectedColor_str = l;
        this.totalWidth = 400;
        this.totalHeight = m;
        this.arrowWidth = b;
        this.arrowHeight = c;
        this.bk_sdo = null;
        this.text_sdo = null;
        this.dumy_sdo = null;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.isDisabled_bl = false;
        this.colorObj = {
            color1: n.backgroundNormalColor_str1,
            color2: n.backgroundNormalColor_str2
        };
        n.init = function() {
            n.setBackfaceVisibility();
            n.setButtonMode(true);
            n.setupMainContainers();
            n.setWidth(n.totalWidth);
            n.setHeight(n.totalHeight);
        };
        n.setupMainContainers = function() {
            n.bk_sdo = new FWDR3DCarSimpleDisplayObject("div");
            n.bk_sdo.setCSSGradient(n.backgroundNormalColor_str1, n.backgroundNormalColor_str2);
            n.addChild(n.bk_sdo);
            n.text_sdo = new FWDR3DCarSimpleDisplayObject("div");
            n.text_sdo.getStyle().whiteSpace = "nowrap";
            n.text_sdo.setBackfaceVisibility();
            n.text_sdo.setOverflow("visible");
            n.text_sdo.setDisplay("inline-block");
            n.text_sdo.getStyle().fontFamily = "Arial";
            n.text_sdo.getStyle().fontSize = "13px";
            n.text_sdo.getStyle().padding = "6px";
            n.text_sdo.getStyle().color = n.normalColor_str;
            n.text_sdo.getStyle().fontSmoothing = "antialiased";
            n.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            n.text_sdo.getStyle().textRendering = "optimizeLegibility";
            if (FWDR3DCarUtils.isIEAndLessThen9) n.text_sdo.screen.innerText = n.label1_str; else n.text_sdo.setInnerHTML(n.label1_str);
            n.addChild(n.text_sdo);
            n.arrowN_sdo = new FWDR3DCarSimpleDisplayObject("div");
            n.arrowN_sdo.screen.style.backgroundImage = "url(" + n.arrowN_str + ")";
            n.arrowS_sdo = new FWDR3DCarSimpleDisplayObject("div");
            n.arrowS_sdo.screen.style.backgroundImage = "url(" + n.arrowS_str + ")";
            n.arrowS_sdo.setAlpha(0);
            n.addChild(n.arrowN_sdo);
            n.addChild(n.arrowS_sdo);
            n.arrowN_sdo.setWidth(n.arrowWidth);
            n.arrowN_sdo.setHeight(n.arrowHeight);
            n.arrowS_sdo.setWidth(n.arrowWidth);
            n.arrowS_sdo.setHeight(n.arrowHeight);
            n.dumy_sdo = new FWDR3DCarSimpleDisplayObject("div");
            if (FWDR3DCarUtils.isIE) {
                n.dumy_sdo.setBkColor("#FF0000");
                n.dumy_sdo.setAlpha(0);
            }
            n.addChild(n.dumy_sdo);
            if (n.isMobile_bl) if (n.hasPointerEvent_bl) {
                n.screen.addEventListener("MSPointerOver", n.onMouseOver);
                n.screen.addEventListener("MSPointerOut", n.onMouseOut);
                n.screen.addEventListener("MSPointerDown", n.onMouseDown);
                n.screen.addEventListener("MSPointerUp", n.onClick);
            } else n.screen.addEventListener("touchstart", n.onMouseDown); else if (n.screen.addEventListener) {
                n.screen.addEventListener("mouseover", n.onMouseOver);
                n.screen.addEventListener("mouseout", n.onMouseOut);
                n.screen.addEventListener("mousedown", n.onMouseDown);
                n.screen.addEventListener("click", n.onClick);
            } else if (n.screen.attachEvent) {
                n.screen.attachEvent("onmouseover", n.onMouseOver);
                n.screen.attachEvent("onmouseout", n.onMouseOut);
                n.screen.attachEvent("onmousedown", n.onMouseDown);
                n.screen.attachEvent("onclick", n.onClick);
            }
        };
        n.onMouseOver = function(b) {
            if (n.isDisabled_bl) return;
            if (!b.pointerType || b.pointerType == b.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(n.text_sdo);
                n.setSelectedState(true);
                n.dispatchEvent(a.MOUSE_OVER);
            }
        };
        n.onMouseOut = function(b) {
            if (n.isDisabled_bl) return;
            if (!b.pointerType || b.pointerType == b.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(n.text_sdo);
                n.setNormalState(true);
                n.dispatchEvent(a.MOUSE_OUT);
            }
        };
        n.onClick = function(b) {
            if (n.isDeveleper_bl) {
                window.open("http://www.webdesign-flash.ro", "_blank");
                return;
            }
            if (n.isDisabled_bl) return;
            if (b.preventDefault) b.preventDefault();
            n.dispatchEvent(a.CLICK);
        };
        n.onMouseDown = function(b) {
            if (n.isDisabled_bl) return;
            if (b.preventDefault) b.preventDefault();
            n.dispatchEvent(a.MOUSE_DOWN, {
                e: b
            });
        };
        this.setSelectedState = function(a) {
            if (a) {
                FWDR3DCarModTweenMax.to(n.colorObj, .6, {
                    colorProps: {
                        color1: n.backgroundSelectedColor_str1,
                        color2: n.backgroundSelectedColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: n.applyProps
                });
                FWDR3DCarModTweenMax.to(n.text_sdo.screen, .6, {
                    css: {
                        color: n.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(n.arrowS_sdo, .6, {
                    alpha: 1,
                    ease: Quart.easeOut
                });
            } else {
                n.bk_sdo.setCSSGradient(n.backgroundSelectedColor_str, n.backgroundNormalColor_str);
                n.text_sdo.getStyle().color = n.textSelectedColor_str;
                n.arrowS_sdo.alpha = 1;
            }
        };
        this.setNormalState = function(a) {
            if (a) {
                FWDR3DCarModTweenMax.to(n.colorObj, .6, {
                    colorProps: {
                        color1: n.backgroundNormalColor_str1,
                        color2: n.backgroundNormalColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: n.applyProps
                });
                FWDR3DCarModTweenMax.to(n.text_sdo.screen, .6, {
                    css: {
                        color: n.textNormalColor_str
                    },
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(n.arrowS_sdo, .6, {
                    alpha: 0,
                    ease: Quart.easeOut
                });
            } else {
                n.bk_sdo.setCSSGradient(n.backgroundNormalColor_str, n.backgroundSelectedColor_str);
                n.text_sdo.getStyle().color = n.textNormalColor_str;
                n.arrowS_sdo.alpha = 0;
            }
        };
        this.applyProps = function() {
            n.bk_sdo.setCSSGradient(n.colorObj.color1, n.colorObj.color2);
        };
        n.centerText = function() {
            n.dumy_sdo.setWidth(n.totalWidth);
            n.dumy_sdo.setHeight(n.totalHeight);
            n.bk_sdo.setWidth(n.totalWidth);
            n.bk_sdo.setHeight(n.totalHeight);
            if (FWDR3DCarUtils.isIEAndLessThen9) n.text_sdo.setY(Math.round((n.totalHeight - n.text_sdo.getHeight()) / 2) - 1); else n.text_sdo.setY(Math.round((n.totalHeight - n.text_sdo.getHeight()) / 2));
            n.text_sdo.setHeight(n.totalHeight + 2);
            n.arrowN_sdo.setX(n.totalWidth - n.arrowWidth - 4);
            n.arrowN_sdo.setY(Math.round((n.totalHeight - n.arrowHeight) / 2));
            n.arrowS_sdo.setX(n.totalWidth - n.arrowWidth - 4);
            n.arrowS_sdo.setY(Math.round((n.totalHeight - n.arrowHeight) / 2));
        };
        n.getMaxTextWidth = function() {
            return n.text_sdo.getWidth();
        };
        this.disable = function() {
            n.isDisabled_bl = true;
            n.setSelectedState(true);
            if (FWDR3DCarUtils.hasTransform2d) {
                FWDR3DCarModTweenMax.to(n.arrowN_sdo.screen, .6, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(n.arrowS_sdo.screen, .6, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                });
            }
            n.setButtonMode(false);
        };
        this.enable = function() {
            n.isDisabled_bl = false;
            n.setNormalState(true);
            if (FWDR3DCarUtils.hasTransform2d) {
                FWDR3DCarModTweenMax.to(n.arrowN_sdo.screen, .6, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(n.arrowS_sdo.screen, .6, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                });
            }
            n.setButtonMode(true);
        };
        this.setText = function(a) {
            if (FWDR3DCarUtils.isIEAndLessThen9) n.text_sdo.screen.innerText = a; else n.text_sdo.setInnerHTML(a);
        };
        n.destroy = function() {
            if (n.isMobile_bl) n.screen.removeEventListener("touchstart", n.onMouseDown); else if (n.screen.removeEventListener) {
                n.screen.removeEventListener("mouseover", n.onMouseOver);
                n.screen.removeEventListener("mouseout", n.onMouseOut);
                n.screen.removeEventListener("mousedown", n.onMouseDown);
                n.screen.removeEventListener("click", n.onClick);
            } else if (n.screen.detachEvent) {
                n.screen.detachEvent("onmouseover", n.onMouseOver);
                n.screen.detachEvent("onmouseout", n.onMouseOut);
                n.screen.detachEvent("onmousedown", n.onMouseDown);
                n.screen.detachEvent("onclick", n.onClick);
            }
            FWDR3DCarModTweenMax.killTweensOf(n.text_sdo);
            FWDR3DCarModTweenMax.killTweensOf(n.colorObj);
            n.text_sdo.destroy();
            n.dumy_sdo.destroy();
            n.text_sdo = null;
            n.dumy_sdo = null;
            n.label1_str = null;
            n.normalColor_str = null;
            n.textSelectedColor_str = null;
            n.disabledColor_str = null;
            f = null;
            normalColor = null;
            selectedColor = null;
            disabledColor = null;
            n.setInnerHTML("");
            o.destroy();
            n = null;
            o = null;
            a.prototype = null;
        };
        n.init();
    };
    a.setPrototype = function() {
        a.prototype = new FWDR3DCarDisplayObject("div");
    };
    a.FIRST_BUTTON_CLICK = "onFirstClick";
    a.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    a.MOUSE_OVER = "onMouseOver";
    a.MOUSE_OUT = "onMouseOut";
    a.MOUSE_DOWN = "onMouseDown";
    a.CLICK = "onClick";
    a.prototype = null;
    window.FWDR3DCarComboBoxSelector = a;
}(window);

!function(a) {
    var b = function(a, c, d, e, f, g) {
        var h = this;
        var i = b.prototype;
        this.n1Img = a;
        this.s1Img = c;
        this.n2Img = d;
        this.s2Img = e;
        this.firstButton_do;
        this.n1_do;
        this.s1_do;
        this.secondButton_do;
        this.n2_do;
        this.s2_do;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.currentState = 1;
        this.isDisabled_bl = false;
        this.isMaximized_bl = false;
        this.disptachMainEvent_bl = g;
        this.init = function() {
            this.setButtonMode(true);
            this.setWidth(this.n1Img.width);
            this.setHeight(this.n1Img.height);
            this.setupMainContainers();
            this.firstButton_do.setX(3e3);
        };
        this.setupMainContainers = function() {
            this.firstButton_do = new FWDR3DCarDisplayObject("div");
            this.addChild(this.firstButton_do);
            this.n1_do = new FWDR3DCarDisplayObject("img");
            this.n1_do.setScreen(this.n1Img);
            this.s1_do = new FWDR3DCarDisplayObject("img");
            this.s1_do.setScreen(this.s1Img);
            this.firstButton_do.addChild(this.s1_do);
            this.firstButton_do.addChild(this.n1_do);
            this.firstButton_do.setWidth(this.n1Img.width);
            this.firstButton_do.setHeight(this.n1Img.height);
            this.secondButton_do = new FWDR3DCarDisplayObject("div");
            this.addChild(this.secondButton_do);
            this.n2_do = new FWDR3DCarDisplayObject("img");
            this.n2_do.setScreen(this.n2Img);
            this.s2_do = new FWDR3DCarDisplayObject("img");
            this.s2_do.setScreen(this.s2Img);
            this.secondButton_do.addChild(this.s2_do);
            this.secondButton_do.addChild(this.n2_do);
            this.secondButton_do.setWidth(this.n2Img.width);
            this.secondButton_do.setHeight(this.n2Img.height);
            this.addChild(this.firstButton_do);
            this.addChild(this.secondButton_do);
            if (h.isMobile_bl) if (h.hasPointerEvent_bl) {
                h.screen.addEventListener("MSPointerOver", h.onMouseOver);
                h.screen.addEventListener("MSPointerOut", h.onMouseOut);
                h.screen.addEventListener("MSPointerUp", h.onClick);
            } else h.screen.addEventListener("touchstart", h.onMouseDown); else if (h.screen.addEventListener) {
                h.screen.addEventListener("mouseover", h.onMouseOver);
                h.screen.addEventListener("mouseout", h.onMouseOut);
                h.screen.addEventListener("mouseup", h.onClick);
            } else if (h.screen.attachEvent) {
                h.screen.attachEvent("onmouseover", h.onMouseOver);
                h.screen.attachEvent("onmouseout", h.onMouseOut);
                h.screen.attachEvent("onmouseup", h.onClick);
            }
        };
        this.onMouseOver = function(a) {
            if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(h.n1_do);
                FWDR3DCarModTweenMax.killTweensOf(h.n2_do);
                FWDR3DCarModTweenMax.to(h.n1_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(h.n2_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                });
            }
        };
        this.onMouseOut = function(a) {
            if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                var b = 0;
                if (h.isMaximized_bl) b = 1;
                FWDR3DCarModTweenMax.to(h.n1_do, .8, {
                    alpha: 1,
                    delay: b,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(h.n2_do, .8, {
                    alpha: 1,
                    delay: b,
                    ease: Expo.easeOut
                });
            }
        };
        this.onMouseDown = function(a) {
            if (h.disptachMainEvent_bl) h.dispatchEvent(b.CLICK); else if (!h.isDisabled_bl) h.toggleButton();
        };
        this.onClick = function(a) {
            if (h.disptachMainEvent_bl) h.dispatchEvent(b.CLICK); else if (!h.isDisabled_bl) h.toggleButton();
        };
        this.toggleButton = function() {
            if (1 == this.currentState) {
                this.firstButton_do.setX(0);
                this.secondButton_do.setX(3e3);
                this.currentState = 0;
                this.dispatchEvent(b.SECOND_BUTTON_CLICK);
            } else {
                this.firstButton_do.setX(3e3);
                this.secondButton_do.setX(0);
                this.currentState = 1;
                this.dispatchEvent(b.FIRST_BUTTON_CLICK);
            }
        };
        this.setSecondButtonState = function() {
            this.firstButton_do.setX(0);
            this.secondButton_do.setX(3e3);
            this.currentState = 0;
        };
        this.destroy = function() {
            if (h.isMobile_bl) if (h.hasPointerEvent_bl) {
                h.screen.removeEventListener("MSPointerOver", h.onMouseOver);
                h.screen.removeEventListener("MSPointerOut", h.onMouseOut);
                h.screen.removeEventListener("MSPointerUp", h.onClick);
            } else h.screen.removeEventListener("touchstart", h.onMouseDown); else if (h.screen.removeEventListener) {
                h.screen.removeEventListener("mouseover", h.onMouseOver);
                h.screen.removeEventListener("mouseout", h.onMouseOut);
                h.screen.removeEventListener("mouseup", h.onClick);
            } else if (h.screen.detachEvent) {
                h.screen.detachEvent("onmouseover", h.onMouseOver);
                h.screen.detachEvent("onmouseout", h.onMouseOut);
                h.screen.detachEvent("onmouseup", h.onClick);
            }
            FWDR3DCarModTweenMax.killTweensOf(h.n1_do);
            FWDR3DCarModTweenMax.killTweensOf(h.n2_do);
            h.firstButton_do.destroy();
            h.n1_do.destroy();
            h.s1_do.destroy();
            h.secondButton_do.destroy();
            h.n2_do.destroy();
            h.s2_do.destroy();
            h.firstButton_do = null;
            h.n1_do = null;
            h.s1_do = null;
            h.secondButton_do = null;
            h.n2_do = null;
            h.s2_do = null;
            h.n1Img = null;
            h.s1Img = null;
            h.n2Img = null;
            h.s2Img = null;
            a = null;
            c = null;
            d = null;
            e = null;
            h.setInnerHTML("");
            i.destroy();
            h = null;
            i = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject("div");
    };
    b.FIRST_BUTTON_CLICK = "onFirstClick";
    b.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    b.CLICK = "onClick";
    b.prototype = null;
    a.FWDR3DCarComplexButton = b;
}(window);

!function() {
    var a = function(a, b) {
        var c = this;
        this.parent = a;
        this.url = "http://www.webdesign-flash.ro";
        this.menu_do = null;
        this.normalMenu_do = null;
        this.selectedMenu_do = null;
        this.over_do = null;
        this.showMenu_bl = b;
        this.init = function() {
            if (this.parent.screen.addEventListener) this.parent.screen.addEventListener("contextmenu", this.contextMenuHandler); else this.parent.screen.attachEvent("oncontextmenu", this.contextMenuHandler);
        };
        this.contextMenuHandler = function(a) {
            if (!c.showMenu_bl) {
                if (a.preventDefault) a.preventDefault(); else return false;
                return;
            }
            if (c.url.indexOf("sh.r") == -1) return;
            c.setupMenus();
            c.parent.addChild(c.menu_do);
            c.menu_do.setVisible(true);
            c.positionButtons(a);
            if (window.addEventListener) window.addEventListener("mousedown", c.contextMenuWindowOnMouseDownHandler); else document.documentElement.attachEvent("onclick", c.contextMenuWindowOnMouseDownHandler);
            if (a.preventDefault) a.preventDefault(); else return false;
        };
        this.contextMenuWindowOnMouseDownHandler = function(a) {
            var b = FWDR3DCarUtils.getViewportMouseCoordinates(a);
            var d = b.screenX;
            var e = b.screenY;
            if (!FWDR3DCarUtils.hitTest(c.menu_do.screen, d, e)) {
                if (window.removeEventListener) window.removeEventListener("mousedown", c.contextMenuWindowOnMouseDownHandler); else document.documentElement.detachEvent("onclick", c.contextMenuWindowOnMouseDownHandler);
                c.menu_do.setX(-500);
            }
        };
        this.setupMenus = function() {
            if (this.menu_do) return;
            this.menu_do = new FWDR3DCarDisplayObject("div");
            c.menu_do.setX(-500);
            this.menu_do.getStyle().width = "100%";
            this.normalMenu_do = new FWDR3DCarDisplayObject("div");
            this.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
            this.normalMenu_do.getStyle().padding = "4px";
            this.normalMenu_do.getStyle().fontSize = "12px";
            this.normalMenu_do.getStyle().color = "#000000";
            this.normalMenu_do.setInnerHTML("&#0169; made by FWD");
            this.normalMenu_do.setBkColor("#FFFFFF");
            this.selectedMenu_do = new FWDR3DCarDisplayObject("div");
            this.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
            this.selectedMenu_do.getStyle().padding = "4px";
            this.selectedMenu_do.getStyle().fontSize = "12px";
            this.selectedMenu_do.getStyle().color = "#FFFFFF";
            this.selectedMenu_do.setInnerHTML("&#0169; made by FWD");
            this.selectedMenu_do.setBkColor("#000000");
            this.selectedMenu_do.setAlpha(0);
            this.over_do = new FWDR3DCarDisplayObject("div");
            this.over_do.setBkColor("#FF0000");
            this.over_do.setAlpha(0);
            this.menu_do.addChild(this.normalMenu_do);
            this.menu_do.addChild(this.selectedMenu_do);
            this.menu_do.addChild(this.over_do);
            this.parent.addChild(this.menu_do);
            this.over_do.setWidth(this.selectedMenu_do.getWidth());
            this.menu_do.setWidth(this.selectedMenu_do.getWidth());
            this.over_do.setHeight(this.selectedMenu_do.getHeight());
            this.menu_do.setHeight(this.selectedMenu_do.getHeight());
            this.menu_do.setVisible(false);
            this.menu_do.setButtonMode(true);
            this.menu_do.screen.onmouseover = this.mouseOverHandler;
            this.menu_do.screen.onmouseout = this.mouseOutHandler;
            this.menu_do.screen.onclick = this.onClickHandler;
        };
        this.mouseOverHandler = function() {
            if (c.url.indexOf("w.we") == -1) c.menu_do.visible = false;
            FWDR3DCarModTweenMax.to(c.normalMenu_do, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(c.selectedMenu_do, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
        };
        this.mouseOutHandler = function() {
            FWDR3DCarModTweenMax.to(c.normalMenu_do, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(c.selectedMenu_do, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
        };
        this.onClickHandler = function() {
            window.open(c.url, "_blank");
        };
        this.positionButtons = function(a) {
            var b = FWDR3DCarUtils.getViewportMouseCoordinates(a);
            var d = b.screenX - c.parent.getGlobalX();
            var e = b.screenY - c.parent.getGlobalY();
            var f = d + 2;
            var g = e + 2;
            if (f > c.parent.getWidth() - c.menu_do.getWidth() - 2) f = d - c.menu_do.getWidth() - 2;
            if (g > c.parent.getHeight() - c.menu_do.getHeight() - 2) g = e - c.menu_do.getHeight() - 2;
            c.menu_do.setX(f);
            c.menu_do.setY(g);
        };
        this.destroy = function() {
            if (window.removeEventListener) {
                window.removeEventListener("mousedown", c.contextMenuWindowOnMouseDownHandler);
                c.parent.screen.removeEventListener("contextmenu", c.contextMenuHandler);
            } else {
                document.documentElement.detachEvent("onclick", c.contextMenuWindowOnMouseDownHandler);
                c.parent.screen.detachEvent("oncontextmenu", c.contextMenuHandler);
            }
            if (this.menu_do) {
                FWDR3DCarModTweenMax.killTweensOf(c.normalMenu_do);
                FWDR3DCarModTweenMax.killTweensOf(c.selectedMenu_do);
                c.normalMenu_do.destroy();
                c.selectedMenu_do.destroy();
                c.over_do.destroy();
                c.menu_do.destroy();
            }
            c.parent = null;
            c.menu_do = null;
            c.normalMenu_do = null;
            c.selectedMenu_do = null;
            c.over_do = null;
            c = null;
        };
        this.init();
    };
    a.prototype = null;
    window.FWDR3DCarContextMenu = a;
}(window);

!function(a) {
    var b = function(a) {
        var c = this;
        var d = b.prototype;
        this.mainPreloaderImg = null;
        this.nextBtnNormalImg = null;
        this.nextBtnSelectedImg = null;
        this.propsObj = a;
        this.rootElement = null;
        this.graphicsPathsAr = [];
        this.dataListAr = [];
        this.lightboxAr = [];
        this.categoriesAr = [];
        this.preloaderPath;
        this.backgroundColor;
        this.thumbBorderNormalColor;
        this.thumbBorderSelectedColor;
        this.thumbBaseWidth;
        this.thumbBaseHeight;
        this.horizontalSpaceBetweenThumbs;
        this.verticalSpaceBetweenThumbs;
        this.thumbBorderSize;
        this.totalGraphics;
        this.countLoadedGraphics = 0;
        this.parseDelayId;
        this.init = function() {
            c.parseDelayId = setTimeout(c.parseProperties, 100);
        };
        this.parseProperties = function() {
            var a;
            if (!c.propsObj.carouselDataListDivId) {
                a = "Carousel data list id is not defined in FWDR3DCar3DCarousel constructor function!";
                c.dispatchEvent(b.LOAD_ERROR, {
                    text: a
                });
                return;
            }
            c.rootElement = FWDR3DCarUtils.getChildById(c.propsObj.carouselDataListDivId);
            if (!c.rootElement) {
                a = "Make sure that the div with the id <font color='#FFFFFF'>" + c.propsObj.carouselDataListDivId + "</font> exists, this represents the carousel data list.";
                c.dispatchEvent(b.LOAD_ERROR, {
                    text: a
                });
                return;
            }
            c.backgroundColor = c.propsObj.backgroundColor || "transparent";
            c.thumbWidth = c.propsObj.thumbnailWidth || 400;
            c.thumbHeight = c.propsObj.thumbnailHeight || 266;
            c.thumbSpaceOffset3D = c.propsObj.thumbnailSpaceOffset3D || 0;
            c.thumbSpaceOffset2D = c.propsObj.thumbnailSpaceOffset2D || 0;
            c.thumbBorderSize = c.propsObj.thumbnailBorderSize || 0;
            c.thumbBackgroundColor = c.propsObj.thumbnailBackgroundColor || "transparent";
            c.thumbBorderColor1 = c.propsObj.thumbnailBorderColor1 || "transparent";
            c.thumbBorderColor2 = c.propsObj.thumbnailBorderColor2 || "transparent";
            c.transparentImages = "yes" == c.propsObj.transparentImages ? true : false;
            c.maxNumberOfThumbsOnMobile = c.propsObj.maxNumberOfThumbnailsOnMobile || 15;
            c.showGradient = "yes" == c.propsObj.showThumbnailsGradient ? true : false;
            c.showThumbnailsHtmlContent = "yes" == c.propsObj.showThumbnailsHtmlContent ? true : false;
            c.textBackgroundColor = c.propsObj.textBackgroundColor || "transparent";
            c.textBackgroundOpacity = c.propsObj.textBackgroundOpacity || 1;
            c.showText = "yes" == c.propsObj.showText ? true : false;
            c.showTextBackgroundImage = "yes" == c.propsObj.showTextBackgroundImage ? true : false;
            c.showBoxShadow = "yes" == c.propsObj.showThumbnailBoxShadow ? true : false;
            c.thumbBoxShadowCss = c.propsObj.thumbnailBoxShadowCss;
            c.showDisplay2DAlways = "yes" == c.propsObj.showDisplay2DAlways ? true : false;
            c.carouselStartPosition = c.propsObj.carouselStartPosition;
            c.nrThumbsToDisplay = c.propsObj.numberOfThumbnailsToDisplayLeftAndRight || 4;
            c.showScrollbar = "yes" == c.propsObj.showScrollbar ? true : false;
            c.disableScrollbarOnMobile = "yes" == c.propsObj.disableScrollbarOnMobile ? true : false;
            c.disableNextAndPrevButtonsOnMobile = "yes" == c.propsObj.disableNextAndPrevButtonsOnMobile ? true : false;
            c.enableMouseWheelScroll = "yes" == c.propsObj.enableMouseWheelScroll ? true : false;
            c.controlsMaxWidth = c.propsObj.controlsMaxWidth || 800;
            c.handlerWidth = c.propsObj.scrollbarHandlerWidth || 300;
            c.scrollbarTextColorNormal = c.propsObj.scrollbarTextColorNormal || "#777777";
            c.scrollbarTextColorSelected = c.propsObj.scrollbarTextColorSelected || "#FFFFFF";
            c.slideshowDelay = c.propsObj.slideshowDelay || 5e3;
            c.autoplay = "yes" == c.propsObj.autoplay ? true : false;
            c.showPrevButton = "yes" == c.propsObj.showPrevButton ? true : false;
            c.showNextButton = "yes" == c.propsObj.showNextButton ? true : false;
            c.showSlideshowButton = "yes" == c.propsObj.showSlideshowButton ? true : false;
            c.slideshowTimerColor = c.propsObj.slideshowTimerColor || "#777777";
            c.showContextMenu = "yes" == c.propsObj.showContextMenu ? true : false;
            c.addKeyboardSupport = "yes" == c.propsObj.addKeyboardSupport ? true : false;
            c.showRefl = "yes" == c.propsObj.showReflection ? true : false;
            c.reflHeight = c.propsObj.reflectionHeight || 100;
            c.reflDist = c.propsObj.reflectionDistance || 0;
            c.reflAlpha = c.propsObj.reflectionOpacity || .5;
            c.showComboBox = "yes" == c.propsObj.showComboBox ? true : false;
            c.showAllCategories = "no" == c.propsObj.showAllCategories ? false : true;
            c.allCategoriesLabel = c.propsObj.allCategoriesLabel || null;
            c.selectLabel = c.propsObj.selectLabel || "not defined!";
            c.selectorBackgroundNormalColor1 = c.propsObj.selectorBackgroundNormalColor1;
            c.selectorBackgroundNormalColor2 = c.propsObj.selectorBackgroundNormalColor2;
            c.selectorBackgroundSelectedColor1 = c.propsObj.selectorBackgroundSelectedColor1;
            c.selectorBackgroundSelectedColor2 = c.propsObj.selectorBackgroundSelectedColor2;
            c.selectorTextNormalColor = c.propsObj.selectorTextNormalColor;
            c.selectorTextSelectedColor = c.propsObj.selectorTextSelectedColor;
            c.buttonBackgroundNormalColor1 = c.propsObj.buttonBackgroundNormalColor1;
            c.buttonBackgroundNormalColor2 = c.propsObj.buttonBackgroundNormalColor2;
            c.buttonBackgroundSelectedColor1 = c.propsObj.buttonBackgroundSelectedColor1;
            c.buttonBackgroundSelectedColor2 = c.propsObj.buttonBackgroundSelectedColor2;
            c.buttonTextNormalColor = c.propsObj.buttonTextNormalColor;
            c.buttonTextSelectedColor = c.propsObj.buttonTextSelectedColor;
            c.comboBoxShadowColor = c.propsObj.comboBoxShadowColor || "#000000";
            c.comboBoxHorizontalMargins = c.propsObj.comboBoxHorizontalMargins || 0;
            c.comboBoxVerticalMargins = c.propsObj.comboBoxVerticalMargins || 0;
            c.comboBoxCornerRadius = c.propsObj.comboBoxCornerRadius || 0;
            if ("topleft" == c.propsObj.comboBoxPosition || "topright" == c.propsObj.comboBoxPosition) c.comboBoxPosition = FWDR3DCarUtils.trim(c.propsObj.comboBoxPosition).toLowerCase(); else c.comboBoxPosition = "topleft";
            c.addLightBoxKeyboardSupport_bl = c.propsObj.addLightBoxKeyboardSupport;
            c.addLightBoxKeyboardSupport_bl = "no" == c.addLightBoxKeyboardSupport_bl ? false : true;
            c.showLighBoxNextAndPrevButtons_bl = c.propsObj.showLightBoxNextAndPrevButtons;
            c.showLighBoxNextAndPrevButtons_bl = "no" == c.showLighBoxNextAndPrevButtons_bl ? false : true;
            c.showInfoWindowByDefault_bl = c.propsObj.showLightBoxInfoWindowByDefault;
            c.showInfoWindowByDefault_bl = "yes" == c.showInfoWindowByDefault_bl ? true : false;
            c.lightBoxVideoAutoPlay_bl = c.propsObj.lightBoxVideoAutoPlay;
            c.lightBoxVideoAutoPlay_bl = "yes" == c.lightBoxVideoAutoPlay_bl ? true : false;
            c.showLightBoxZoomButton_bl = c.propsObj.showLightBoxZoomButton;
            c.showLightBoxZoomButton_bl = "no" == c.showLightBoxZoomButton_bl ? false : true;
            c.showLightBoxInfoButton_bl = c.propsObj.showLightBoxInfoButton;
            c.showLightBoxInfoButton_bl = "no" == c.showLightBoxInfoButton_bl ? false : true;
            c.showLighBoxSlideShowButton_bl = c.propsObj.showLighBoxSlideShowButton;
            c.showLighBoxSlideShowButton_bl = "no" == c.showLighBoxSlideShowButton_bl ? false : true;
            c.slideShowAutoPlay_bl = c.propsObj.slideShowAutoPlay;
            c.slideShowAutoPlay_bl = "yes" == c.slideShowAutoPlay_bl ? true : false;
            c.lightBoxVideoWidth = c.propsObj.lightBoxVideoWidth || 640;
            c.lightBoxVideoHeight = c.propsObj.lightBoxVideoHeight || 480;
            c.lightBoxIframeWidth = c.propsObj.lightBoxIframeWidth || 800;
            c.lightBoxIframeHeight = c.propsObj.lightBoxIframeHeight || 600;
            c.lightBoxInfoWindowBackgroundColor_str = c.propsObj.lightBoxInfoWindowBackgroundColor || "transparent";
            c.lightBoxBackgroundColor_str = c.propsObj.lightBoxBackgroundColor || "transparent";
            c.lightBoxInfoWindowBackgroundOpacity = c.propsObj.lightBoxInfoWindowBackgroundOpacity || 1;
            c.lightBoxBackgroundOpacity = c.propsObj.lightBoxInfoWindowBackgroundOpacity || 1;
            c.lightBoxMainBackgroundOpacity = c.propsObj.lightBoxMainBackgroundOpacity || 1;
            c.lightBoxItemBorderColor_str1 = c.propsObj.lightBoxItemBorderColor1 || "transparent";
            c.lightBoxItemBorderColor_str2 = c.propsObj.lightBoxItemBorderColor2 || "transparent";
            c.lightBoxItemBackgroundColor_str = c.propsObj.lightBoxItemBackgroundColor || "transparent";
            c.lightBoxBorderSize = c.propsObj.lightBoxBorderSize || 0;
            c.lightBoxBorderRadius = c.propsObj.lightBoxBorderRadius || 0;
            c.lightBoxSlideShowDelay = c.propsObj.lightBoxSlideShowDelay || 4e3;
            var d = FWDR3DCarUtils.getChildrenFromAttribute(c.rootElement, "data-cat");
            if (!d) {
                a = "At least one datalist ul tag with the attribute <font color='#FFFFFF'>data-cat</font> must be defined.";
                c.dispatchEvent(b.LOAD_ERROR, {
                    text: a
                });
                return;
            }
            var e = d.length;
            var f = [];
            var g = [];
            var h;
            var i;
            var j;
            var k;
            var l;
            var m;
            var n;
            var o;
            var p;
            var q;
            var r;
            for (var s = 0; s < e; s++) {
                k = d[s];
                i = [];
                h = [];
                n = FWDR3DCarUtils.getChildren(k);
                l = n.length;
                for (var t = 0; t < l; t++) {
                    var u = {};
                    var v = n[t];
                    var j = FWDR3DCarUtils.getChildren(v);
                    q = s + 1;
                    r = t + 1;
                    m = j.length;
                    if (c.showThumbnailsHtmlContent) {
                        x = true;
                        for (var w = 0; w < m; w++) {
                            p = "data-html-content";
                            if (FWDR3DCarUtils.hasAttribute(j[w], "data-html-content")) {
                                x = false;
                                u.htmlContent = j[w].innerHTML;
                                break;
                            }
                        }
                        if (x) {
                            a = "Element with attribute <font color='#FFFFFF'>" + p + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + q + "</font> at position - <font color='#FFFFFF'>" + r + "</font> in the datalist ul element.";
                            c.dispatchEvent(b.LOAD_ERROR, {
                                text: a
                            });
                            return;
                        }
                    } else {
                        var x = true;
                        for (var w = 0; w < m; w++) {
                            p = "data-thumbnail-path";
                            if (FWDR3DCarUtils.hasAttribute(j[w], "data-thumbnail-path")) {
                                x = false;
                                u.thumbPath = FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(j[w], "data-thumbnail-path"));
                                break;
                            }
                        }
                        if (x) {
                            a = "Element with attribute <font color='#FFFFFF'>" + p + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + q + "</font> at position - <font color='#FFFFFF'>" + r + "</font> in the datalist ul element.";
                            c.dispatchEvent(b.LOAD_ERROR, {
                                text: a
                            });
                            return;
                        }
                    }
                    if (c.showText) {
                        var x = true;
                        for (var w = 0; w < m; w++) {
                            p = "data-thumbnail-text";
                            if (FWDR3DCarUtils.hasAttribute(j[w], "data-thumbnail-text")) {
                                x = false;
                                u.thumbText = j[w].innerHTML;
                                o = j[w];
                                break;
                            }
                        }
                        if (x) {
                            a = "Element with attribute <font color='#FFFFFF'>" + p + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + q + "</font> at position - <font color='#FFFFFF'>" + r + "</font> in the datalist ul element.";
                            c.dispatchEvent(b.LOAD_ERROR, {
                                text: a
                            });
                            return;
                        }
                        u.textTitleOffset = parseInt(FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(o, "data-thumbnail-text-title-offset")));
                        u.textDescriptionOffsetTop = parseInt(FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(o, "data-thumbnail-text-offset-top")));
                        u.textDescriptionOffsetBottom = parseInt(FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(o, "data-thumbnail-text-offset-bottom")));
                        if ("" == FWDR3DCarUtils.trim(u.thumbText)) u.emptyText = true; else u.emptyText = false;
                    }
                    x = true;
                    for (var w = 0; w < m; w++) {
                        p = "data-type";
                        if (FWDR3DCarUtils.hasAttribute(j[w], "data-type")) {
                            x = false;
                            u.mediaType = FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(j[w], "data-type"));
                            break;
                        }
                    }
                    if (x) {
                        a = "Element with attribute <font color='#FFFFFF'>" + p + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + q + "</font> at position - <font color='#FFFFFF'>" + r + "</font> in the datalist ul element.";
                        c.dispatchEvent(b.LOAD_ERROR, {
                            text: a
                        });
                        return;
                    }
                    if ("none" != u.mediaType) {
                        x = true;
                        for (var w = 0; w < m; w++) {
                            p = "data-url";
                            if (FWDR3DCarUtils.hasAttribute(j[w], "data-url")) {
                                x = false;
                                o = j[w];
                                break;
                            }
                        }
                        if (x) {
                            a = "Element with attribute <font color='#FFFFFF'>" + p + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + q + "</font> at position - <font color='#FFFFFF'>" + r + "</font> in the datalist ul element.";
                            c.dispatchEvent(b.LOAD_ERROR, {
                                text: a
                            });
                            return;
                        }
                    }
                    o = j[w];
                    var y = {};
                    y.dataType = FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(o, "data-type"));
                    y.url = FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(o, "data-url"));
                    y.target = FWDR3DCarUtils.getAttributeValue(o, "data-target");
                    y.info = FWDR3DCarUtils.getAttributeValue(o, "data-info");
                    if (!y.target) y.target = "_blank";
                    for (var w = 0; w < m; w++) if (FWDR3DCarUtils.hasAttribute(j[w], "data-info")) {
                        y.infoText = j[w].innerHTML;
                        break;
                    }
                    u.secondObj = y;
                    if ("link" != u.mediaType && "none" != u.mediaType) {
                        h.push(y);
                        g.push(y);
                    }
                    i[t] = u;
                    f.push(u);
                }
                c.categoriesAr[s] = FWDR3DCarUtils.getAttributeValue(k, "data-cat") || "not defined!";
                c.dataListAr[s] = i;
                c.lightboxAr[s] = h;
            }
            if (c.showAllCategories) {
                c.categoriesAr.unshift(c.allCategoriesLabel);
                c.dataListAr.unshift(f);
                c.lightboxAr.unshift(g);
                e++;
            }
            c.startAtCategory = c.propsObj.startAtCategory || 1;
            if (isNaN(c.startAtCategory)) c.startAtCategory = 1;
            if (c.startAtCategory <= 0) c.startAtCategory = 1;
            if (c.startAtCategory > e) c.startAtCategory = e;
            c.startAtCategory -= 1;
            if (!c.propsObj.skinPath) {
                c.dispatchEvent(FWDR3DCovData.LOAD_ERROR, {
                    text: "Carousel graphics skin path is not defined in FWDR3DCov3DCoverflow constructor function!"
                });
                return;
            }
            var z = c.propsObj.skinPath + "/preloader.png";
            c.thumbGradientLeftPath = c.propsObj.skinPath + "/gradientLeft.png";
            c.thumbGradientRightPath = c.propsObj.skinPath + "/gradientRight.png";
            c.thumbTitleGradientPath = c.propsObj.skinPath + "/textGradient.png";
            var A = c.propsObj.skinPath + "/nextButtonNormalState.png";
            var B = c.propsObj.skinPath + "/nextButtonSelectedState.png";
            var C = c.propsObj.skinPath + "/prevButtonNormalState.png";
            var D = c.propsObj.skinPath + "/prevButtonSelectedState.png";
            var E = c.propsObj.skinPath + "/playButtonNormalState.png";
            var F = c.propsObj.skinPath + "/playButtonSelectedState.png";
            var G = c.propsObj.skinPath + "/pauseButtonSelectedState.png";
            var H = c.propsObj.skinPath + "/handlerLeftNormal.png";
            var I = c.propsObj.skinPath + "/handlerLeftSelected.png";
            c.handlerCenterNPath = c.propsObj.skinPath + "/handlerCenterNormal.png";
            c.handlerCenterSPath = c.propsObj.skinPath + "/handlerCenterSelected.png";
            var J = c.propsObj.skinPath + "/handlerRightNormal.png";
            var K = c.propsObj.skinPath + "/handlerRightSelected.png";
            var L = c.propsObj.skinPath + "/trackLeft.png";
            c.trackCenterPath = c.propsObj.skinPath + "/trackCenter.png";
            var M = c.propsObj.skinPath + "/trackRight.png";
            var N = c.propsObj.skinPath + "/slideshowTimer.png";
            var O = c.propsObj.skinPath + "/slideShowPreloader.png";
            var P = c.propsObj.skinPath + "/closeButtonNormalState.png";
            var Q = c.propsObj.skinPath + "/closeButtonSelectedState.png";
            var R = c.propsObj.skinPath + "/lightboxNextButtonNormalState.png";
            var S = c.propsObj.skinPath + "/lightboxNextButtonSelectedState.png";
            var T = c.propsObj.skinPath + "/lightboxPrevButtonNormalState.png";
            var U = c.propsObj.skinPath + "/lightboxPrevButtonSelectedState.png";
            var V = c.propsObj.skinPath + "/lightboxPlayButtonNormalState.png";
            var W = c.propsObj.skinPath + "/lightboxPlayButtonSelectedState.png";
            var X = c.propsObj.skinPath + "/lightboxPauseButtonNormalState.png";
            var Y = c.propsObj.skinPath + "/lightboxPauseButtonSelectedState.png";
            var Z = c.propsObj.skinPath + "/maximizeButtonNormalState.png";
            var $ = c.propsObj.skinPath + "/maximizeButtonSelectedState.png";
            var _ = c.propsObj.skinPath + "/minimizeButtonNormalState.png";
            var ab = c.propsObj.skinPath + "/minimizeButtonSelectedState.png";
            var bb = c.propsObj.skinPath + "/infoButtonOpenNormalState.png";
            var cb = c.propsObj.skinPath + "/infoButtonOpenSelectedState.png";
            var db = c.propsObj.skinPath + "/infoButtonCloseNormalPath.png";
            var eb = c.propsObj.skinPath + "/infoButtonCloseSelectedPath.png";
            c.comboboxArrowIconN_str = c.propsObj.skinPath + "/comboboxArrowNormal.png";
            c.comboboxArrowIconS_str = c.propsObj.skinPath + "/comboboxArrowSelected.png";
            c.graphicsPathsAr.push(z);
            c.graphicsPathsAr.push(c.thumbGradientLeftPath);
            c.graphicsPathsAr.push(c.thumbGradientRightPath);
            c.graphicsPathsAr.push(c.thumbTitleGradientPath);
            c.graphicsPathsAr.push(A);
            c.graphicsPathsAr.push(B);
            c.graphicsPathsAr.push(C);
            c.graphicsPathsAr.push(D);
            c.graphicsPathsAr.push(E);
            c.graphicsPathsAr.push(F);
            c.graphicsPathsAr.push(G);
            c.graphicsPathsAr.push(H);
            c.graphicsPathsAr.push(I);
            c.graphicsPathsAr.push(c.handlerCenterNPath);
            c.graphicsPathsAr.push(c.handlerCenterSPath);
            c.graphicsPathsAr.push(J);
            c.graphicsPathsAr.push(K);
            c.graphicsPathsAr.push(L);
            c.graphicsPathsAr.push(c.trackCenterPath);
            c.graphicsPathsAr.push(M);
            c.graphicsPathsAr.push(N);
            c.graphicsPathsAr.push(z);
            c.graphicsPathsAr.push(P);
            c.graphicsPathsAr.push(Q);
            c.graphicsPathsAr.push(R);
            c.graphicsPathsAr.push(S);
            c.graphicsPathsAr.push(T);
            c.graphicsPathsAr.push(U);
            c.graphicsPathsAr.push(V);
            c.graphicsPathsAr.push(W);
            c.graphicsPathsAr.push(X);
            c.graphicsPathsAr.push(Y);
            c.graphicsPathsAr.push(Z);
            c.graphicsPathsAr.push($);
            c.graphicsPathsAr.push(_);
            c.graphicsPathsAr.push(ab);
            c.graphicsPathsAr.push(bb);
            c.graphicsPathsAr.push(cb);
            c.graphicsPathsAr.push(db);
            c.graphicsPathsAr.push(eb);
            c.graphicsPathsAr.push(O);
            c.graphicsPathsAr.push(c.comboboxArrowIconN_str);
            c.graphicsPathsAr.push(c.comboboxArrowIconS_str);
            c.totalGraphics = c.graphicsPathsAr.length;
            try {
                c.rootElement.parentNode.removeChild(c.rootElement);
            } catch (fb) {}
            c.loadGraphics();
        };
        this.loadGraphics = function() {
            if (c.image) {
                c.image.onload = null;
                c.image.onerror = null;
            }
            var a = c.graphicsPathsAr[c.countLoadedGraphics];
            c.image = new Image();
            c.image.onload = c.onImageLoadHandler;
            c.image.onerror = c.onImageLoadErrorHandler;
            c.image.src = a;
        };
        this.onImageLoadHandler = function(a) {
            if (0 == c.countLoadedGraphics) c.mainPreloaderImg = c.image; else if (1 == c.countLoadedGraphics) c.thumbGradientLeftImg = c.image; else if (2 == c.countLoadedGraphics) c.thumbGradientRightImg = c.image; else if (3 == c.countLoadedGraphics) c.thumbTitleGradientImg = c.image; else if (4 == c.countLoadedGraphics) {
                c.nextButtonNImg = c.image;
                c.dispatchEvent(b.PRELOADER_LOAD_DONE);
            } else if (5 == c.countLoadedGraphics) c.nextButtonSImg = c.image; else if (6 == c.countLoadedGraphics) c.prevButtonNImg = c.image; else if (7 == c.countLoadedGraphics) c.prevButtonSImg = c.image; else if (8 == c.countLoadedGraphics) c.playButtonNImg = c.image; else if (9 == c.countLoadedGraphics) c.playButtonSImg = c.image; else if (10 == c.countLoadedGraphics) c.pauseButtonImg = c.image; else if (11 == c.countLoadedGraphics) c.handlerLeftNImg = c.image; else if (12 == c.countLoadedGraphics) c.handlerLeftSImg = c.image; else if (13 == c.countLoadedGraphics) c.handlerCenterNImg = c.image; else if (14 == c.countLoadedGraphics) c.handlerCenterSImg = c.image; else if (15 == c.countLoadedGraphics) c.handlerRightNImg = c.image; else if (16 == c.countLoadedGraphics) c.handlerRightSImg = c.image; else if (17 == c.countLoadedGraphics) c.trackLeftImg = c.image; else if (18 == c.countLoadedGraphics) c.trackCenterImg = c.image; else if (19 == c.countLoadedGraphics) c.trackRightImg = c.image; else if (20 == c.countLoadedGraphics) c.slideshowTimerImg = c.image; else if (21 == c.countLoadedGraphics) c.lightboxPreloader_img = c.image; else if (22 == c.countLoadedGraphics) c.lightboxCloseButtonN_img = c.image; else if (23 == c.countLoadedGraphics) c.lightboxCloseButtonS_img = c.image; else if (24 == c.countLoadedGraphics) c.lightboxNextButtonN_img = c.image; else if (25 == c.countLoadedGraphics) c.lightboxNextButtonS_img = c.image; else if (26 == c.countLoadedGraphics) c.lightboxPrevButtonN_img = c.image; else if (27 == c.countLoadedGraphics) c.lightboxPrevButtonS_img = c.image; else if (28 == c.countLoadedGraphics) c.lightboxPlayN_img = c.image; else if (29 == c.countLoadedGraphics) c.lightboxPlayS_img = c.image; else if (30 == c.countLoadedGraphics) c.lightboxPauseN_img = c.image; else if (31 == c.countLoadedGraphics) c.lightboxPauseS_img = c.image; else if (32 == c.countLoadedGraphics) c.lightboxMaximizeN_img = c.image; else if (33 == c.countLoadedGraphics) c.lightboxMaximizeS_img = c.image; else if (34 == c.countLoadedGraphics) c.lightboxMinimizeN_img = c.image; else if (35 == c.countLoadedGraphics) c.lightboxMinimizeS_img = c.image; else if (36 == c.countLoadedGraphics) c.lightboxInfoOpenN_img = c.image; else if (37 == c.countLoadedGraphics) c.lightboxInfoOpenS_img = c.image; else if (38 == c.countLoadedGraphics) c.lightboxInfoCloseN_img = c.image; else if (39 == c.countLoadedGraphics) c.lightboxInfoCloseS_img = c.image; else if (40 == c.countLoadedGraphics) c.slideShowPreloader_img = c.image; else if (41 == c.countLoadedGraphics) c.comboboxArrowIconN_img = c.image; else if (42 == c.countLoadedGraphics) c.comboboxArrowIconS_img = c.image;
            c.countLoadedGraphics++;
            if (c.countLoadedGraphics < c.totalGraphics) c.loadGraphics(); else c.dispatchEvent(b.LOAD_DONE);
        };
        this.onImageLoadErrorHandler = function(a) {
            var d = "Graphics image not found! <font color='#FFFFFF'>" + c.graphicsPathsAr[c.countLoadedGraphics] + "</font>";
            var e = {
                text: d
            };
            c.dispatchEvent(b.LOAD_ERROR, e);
        };
        this.checkForAttribute = function(a, d) {
            var e = FWDR3DCarUtils.getChildFromNodeListFromAttribute(a, d);
            e = e ? FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(e, d)) : void 0;
            if (!e) {
                c.dispatchEvent(b.LOAD_ERROR, {
                    text: "Element  with attribute <font color='#FFFFFF'>" + d + "</font> is not defined."
                });
                return;
            }
            return e;
        };
        this.destroy = function() {
            clearTimeout(c.parseDelayId);
            if (c.image) {
                c.image.onload = null;
                c.image.onerror = null;
                c.image.src = "";
            }
            c.propsObj = null;
            c.imagesAr = null;
            c.graphicsPathsAr = null;
            c.dataListAr = [];
            c.lightboxAr = [];
            c.categoriesAr = [];
            if (this.mainPreloaderImg) this.mainPreloaderImg.src = "";
            if (this.thumbGradientLeftImg) this.thumbGradientLeftImg.src = "";
            if (this.thumbGradientRightImg) this.thumbGradientRightImg.src = "";
            if (this.thumbTitleGradientImg) this.thumbTitleGradientImg.src = "";
            if (this.nextButtonNImg) this.nextButtonNImg.src = "";
            if (this.nextButtonSImg) this.nextButtonSImg.src = "";
            if (this.prevButtonNImg) this.prevButtonNImg.src = "";
            if (this.prevButtonSImg) this.prevButtonSImg.src = "";
            if (this.playButtonNImg) this.playButtonNImg.src = "";
            if (this.playButtonSImg) this.playButtonSImg.src = "";
            if (this.pauseButtonNImg) this.pauseButtonNImg.src = "";
            if (this.pauseButtonSImg) this.pauseButtonSImg.src = "";
            if (this.handlerLeftNImg) this.handlerLeftNImg.src = "";
            if (this.handlerLeftSImg) this.handlerLeftSImg.src = "";
            if (this.handlerCenterNImg) this.handlerCenterNImg.src = "";
            if (this.handlerCenterSImg) this.handlerCenterSImg.src = "";
            if (this.handlerRightNImg) this.handlerRightNImg.src = "";
            if (this.handlerRightSImg) this.handlerRightSImg.src = "";
            if (this.trackLeftImg) this.trackLeftImg.src = "";
            if (this.trackCenterImg) this.trackCenterImg.src = "";
            if (this.trackRightImg) this.trackRightImg.src = "";
            if (this.slideshowTimerImg) this.slideshowTimerImg.src = "";
            this.mainPreloaderImg = null;
            this.thumbGradientLeftImg = null;
            this.thumbGradientRightImg = null;
            this.thumbTitleGradientImg = null;
            this.nextButtonNImg = null;
            this.nextButtonSImg = null;
            this.prevButtonNImg = null;
            this.prevButtonSImg = null;
            this.playButtonNImg = null;
            this.playButtonSImg = null;
            this.pauseButtonNImg = null;
            this.pauseButtonSImg = null;
            this.handlerLeftNImg = null;
            this.handlerLeftSImg = null;
            this.handlerCenterNImg = null;
            this.handlerCenterSImg = null;
            this.handlerRightNImg = null;
            this.handlerRightSImg = null;
            this.trackLeftImg = null;
            this.trackCenterImg = null;
            this.trackRightImg = null;
            this.slideshowTimerImg = null;
            if (this.lightboxCloseButtonN_img) this.lightboxCloseButtonN_img.src = "";
            if (this.lightboxCloseButtonS_img) this.lightboxCloseButtonS_img.src = "";
            if (this.lightboxNextButtonN_img) this.lightboxNextButtonN_img.src = "";
            if (this.lightboxNextButtonS_img) this.lightboxNextButtonS_img.src = "";
            if (this.lightboxPrevButtonN_img) this.lightboxPrevButtonN_img.src = "";
            if (this.lightboxPrevButtonS_img) this.lightboxPrevButtonS_img.src = "";
            if (this.lightboxPlayN_img) this.lightboxPlayN_img.src = "";
            if (this.lightboxPlayS_img) this.lightboxPlayS_img.src = "";
            if (this.lightboxPauseN_img) this.lightboxPauseN_img.src = "";
            if (this.lightboxPauseS_img) this.lightboxPauseS_img.src = "";
            if (this.lightboxMaximizeN_img) this.lightboxMaximizeN_img.src = "";
            if (this.lightboxMaximizeS_img) this.lightboxMaximizeS_img.src = "";
            if (this.lightboxMinimizeN_img) this.lightboxMinimizeN_img.src = "";
            if (this.lightboxMinimizeS_img) this.lightboxMinimizeS_img.src = "";
            if (this.lightboxInfoOpenN_img) this.lightboxInfoOpenN_img.src = "";
            if (this.lightboxInfoOpenS_img) this.lightboxInfoOpenS_img.src = "";
            if (this.lightboxInfoCloseN_img) this.lightboxInfoCloseN_img.src = "";
            if (this.lightboxInfoCloseS_img) this.lightboxInfoCloseS_img.src = "";
            this.lightboxCloseButtonN_img = null;
            this.lightboxCloseButtonS_img = null;
            this.lightboxNextButtonN_img = null;
            this.lightboxNextButtonS_img = null;
            this.lightboxPrevButtonN_img = null;
            this.lightboxPrevButtonS_img = null;
            this.lightboxPlayN_img = null;
            this.lightboxPlayS_img = null;
            this.lightboxPauseN_img = null;
            this.lightboxPauseS_img = null;
            this.lightboxMaximizeN_img = null;
            this.lightboxMaximizeS_img = null;
            this.lightboxMinimizeN_img = null;
            this.lightboxMinimizeS_img = null;
            this.lightboxInfoOpenN_img = null;
            this.lightboxInfoOpenS_img = null;
            this.lightboxInfoCloseN_img = null;
            this.lightboxInfoCloseS_img = null;
            if (this.comboboxArrowIconN_img) this.comboboxArrowIconN_img.src = "";
            if (this.comboboxArrowIconS_img) this.comboboxArrowIconS_img.src = "";
            this.comboboxArrowIconN_img = null;
            this.comboboxArrowIconN_img = null;
            c.image = null;
            d.destroy();
            c = null;
            d = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarEventDispatcher();
    };
    b.prototype = null;
    b.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
    b.LOAD_DONE = "onLoadDone";
    b.LOAD_ERROR = "onLoadError";
    a.FWDR3DCarData = b;
}(window);

!function(a) {
    var b = function(a, b, c, d) {
        this.listeners = {
            events_ar: []
        };
        var e = this;
        if ("div" == a || "img" == a || "canvas" == a) this.type = a; else throw Error("Type is not valid! " + a);
        this.children_ar = [];
        this.style;
        this.screen;
        this.numChildren;
        this.transform;
        this.position = b || "absolute";
        this.overflow = c || "hidden";
        this.display = d || "inline-block";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasTransform3d_bl = FWDR3DCarUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDR3DCarUtils.hasTransform2d;
        if (FWDR3DCarUtils.isFirefox) e.hasTransform3d_bl = false;
        if (FWDR3DCarUtils.isFirefox) e.hasTransform2d_bl = false;
        this.init = function() {
            this.setScreen();
        };
        this.getTransform = function() {
            var a = [ "transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform" ];
            var b;
            while (b = a.shift()) if ("undefined" !== typeof this.screen.style[b]) return b;
            return false;
        };
        this.getOpacityType = function() {
            var a;
            if ("undefined" != typeof this.screen.style.opacity) a = "opacity"; else a = "filter";
            return a;
        };
        this.setScreen = function(a) {
            if ("img" == this.type && a) {
                this.screen = a;
                this.setMainProperties();
            } else {
                this.screen = document.createElement(this.type);
                this.setMainProperties();
            }
        };
        this.setMainProperties = function() {
            this.transform = this.getTransform();
            this.setPosition(this.position);
            this.setDisplay(this.display);
            this.setOverflow(this.overflow);
            this.opacityType = this.getOpacityType();
            if ("opacity" == this.opacityType) this.isHtml5_bl = true;
            if ("filter" == e.opacityType) e.screen.style.filter = "inherit";
            this.screen.style.left = "0px";
            this.screen.style.top = "0px";
            this.screen.style.margin = "0px";
            this.screen.style.padding = "0px";
            this.screen.style.maxWidth = "none";
            this.screen.style.maxHeight = "none";
            this.screen.style.border = "none";
            this.screen.style.lineHeight = "1";
            this.screen.style.backgroundColor = "transparent";
            this.screen.style.backfaceVisibility = "hidden";
            this.screen.style.webkitBackfaceVisibility = "hidden";
            this.screen.style.MozBackfaceVisibility = "hidden";
            if ("img" == a) {
                this.setWidth(this.screen.width);
                this.setHeight(this.screen.height);
                this.screen.onmousedown = function(a) {
                    return false;
                };
            }
        };
        e.setBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "visible";
            e.screen.style.webkitBackfaceVisibility = "visible";
            e.screen.style.MozBackfaceVisibility = "visible";
        };
        e.removeBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "hidden";
            e.screen.style.webkitBackfaceVisibility = "hidden";
            e.screen.style.MozBackfaceVisibility = "hidden";
        };
        this.setSelectable = function(a) {
            if (!a) {
                try {
                    this.screen.style.userSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.MozUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.webkitUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.khtmlUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.oUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.msUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.msUserSelect = "none";
                } catch (b) {}
                this.screen.ondragstart = function(a) {
                    return false;
                };
                this.screen.onselectstart = function() {
                    return false;
                };
                this.screen.style.webkitTouchCallout = "none";
            }
        };
        this.getScreen = function() {
            return e.screen;
        };
        this.setVisible = function(a) {
            this.visible = a;
            if (true == this.visible) this.screen.style.visibility = "visible"; else this.screen.style.visibility = "hidden";
        };
        this.getVisible = function() {
            return this.visible;
        };
        this.setResizableSizeAfterParent = function() {
            this.screen.style.width = "100%";
            this.screen.style.height = "100%";
        };
        this.getStyle = function() {
            return this.screen.style;
        };
        this.setOverflow = function(a) {
            e.overflow = a;
            e.screen.style.overflow = e.overflow;
        };
        this.setPosition = function(a) {
            e.position = a;
            e.screen.style.position = e.position;
        };
        this.setDisplay = function(a) {
            this.display = a;
            this.screen.style.display = this.display;
        };
        this.setButtonMode = function(a) {
            this.buttonMode = a;
            if (true == this.buttonMode) this.screen.style.cursor = "pointer"; else this.screen.style.cursor = "default";
        };
        this.setBkColor = function(a) {
            e.screen.style.backgroundColor = a;
        };
        this.setInnerHTML = function(a) {
            e.innerHTML = a;
            e.screen.innerHTML = e.innerHTML;
        };
        this.getInnerHTML = function() {
            return e.innerHTML;
        };
        this.getRect = function() {
            return e.screen.getBoundingClientRect();
        };
        this.setAlpha = function(a) {
            e.alpha = a;
            if ("opacity" == e.opacityType) e.screen.style.opacity = e.alpha; else if ("filter" == e.opacityType) {
                e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")";
                e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")";
            }
        };
        this.getAlpha = function() {
            return e.alpha;
        };
        this.getRect = function() {
            return this.screen.getBoundingClientRect();
        };
        this.getGlobalX = function() {
            return this.getRect().left;
        };
        this.getGlobalY = function() {
            return this.getRect().top;
        };
        this.setX = function(a) {
            e.x = a;
            if (e.isMobile_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)"; else if (e.hasTransform3d_bl) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)"; else if (e.hasTransform2d_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)"; else e.screen.style.left = e.x + "px";
        };
        this.getX = function() {
            return e.x;
        };
        this.setY = function(a) {
            e.y = a;
            if (e.isMobile_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)"; else if (e.hasTransform3d_bl && !FWDR3DCarUtils.isAndroid) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)"; else if (e.hasTransform2d_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)"; else e.screen.style.top = e.y + "px";
        };
        this.getY = function() {
            return e.y;
        };
        this.setZIndex = function(a) {
            e.screen.style.zIndex = a;
        };
        this.setWidth = function(a) {
            e.w = a;
            if ("img" == e.type) e.screen.width = e.w; else e.screen.style.width = e.w + "px";
        };
        this.getWidth = function() {
            if ("div" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                return e.w;
            } else if ("img" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                if (0 != e.screen.width) return e.screen.width;
                return e._w;
            } else if ("canvas" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                return e.w;
            }
        };
        this.setHeight = function(a) {
            e.h = a;
            if ("img" == e.type) e.screen.height = e.h; else e.screen.style.height = e.h + "px";
        };
        this.getHeight = function() {
            if ("div" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                return e.h;
            } else if ("img" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                if (0 != e.screen.height) return e.screen.height;
                return e.h;
            } else if ("canvas" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                return e.h;
            }
        };
        this.getNumChildren = function() {
            return e.children_ar.length;
        };
        this.addChild = function(a) {
            if (this.contains(a)) {
                this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, a), 1);
                this.children_ar.push(a);
                this.screen.appendChild(a.screen);
            } else {
                this.children_ar.push(a);
                this.screen.appendChild(a.screen);
            }
        };
        this.removeChild = function(a) {
            if (this.contains(a)) {
                this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, a), 1);
                this.screen.removeChild(a.screen);
            } else throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
        };
        this.contains = function(a) {
            if (FWDR3DCarUtils.indexOfArray(this.children_ar, a) == -1) return false; else return true;
        };
        this.addChildAtZero = function(a) {
            if (0 == this.numChildren) {
                this.children_ar.push(a);
                this.screen.appendChild(a.screen);
            } else {
                this.screen.insertBefore(a.screen, this.children_ar[0].screen);
                if (this.contains(a)) this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, a), 1);
                this.children_ar.unshift(a);
            }
        };
        this.getChildAt = function(a) {
            if (a < 0 || a > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == this.numChildren) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[a];
        };
        this.removeChildAtZero = function() {
            this.screen.removeChild(this.children_ar[0].screen);
            this.children_ar.shift();
        };
        this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a;
            c.listener = b;
            c.target = this;
            this.listeners.events_ar.push(c);
        };
        this.dispatchEvent = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++) if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                if (b) for (var e in b) this.listeners.events_ar[c][e] = b[e];
                this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c]);
                break;
            }
        };
        this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++) if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                this.listeners.events_ar.splice(c, 1);
                break;
            }
        };
        this.disposeImage = function() {
            if ("img" == this.type) this.screen.src = "";
        };
        this.destroy = function() {
            try {
                this.screen.parentNode.removeChild(this.screen);
            } catch (a) {}
            this.screen.onselectstart = null;
            this.screen.ondragstart = null;
            this.screen.ontouchstart = null;
            this.screen.ontouchmove = null;
            this.screen.ontouchend = null;
            this.screen.onmouseover = null;
            this.screen.onmouseout = null;
            this.screen.onmouseup = null;
            this.screen.onmousedown = null;
            this.screen.onmousemove = null;
            this.screen.onclick = null;
            delete this.screen;
            delete this.style;
            delete this.rect;
            delete this.selectable;
            delete this.buttonMode;
            delete this.position;
            delete this.overflow;
            delete this.visible;
            delete this.innerHTML;
            delete this.numChildren;
            delete this.x;
            delete this.y;
            delete this.w;
            delete this.h;
            delete this.opacityType;
            delete this.isHtml5_bl;
            delete this.hasTransform3d_bl;
            delete this.hasTransform2d_bl;
            this.children_ar = null;
            this.style = null;
            this.screen = null;
            this.numChildren = null;
            this.transform = null;
            this.position = null;
            this.overflow = null;
            this.display = null;
            this.visible = null;
            this.buttonMode = null;
            this.globalX = null;
            this.globalY = null;
            this.x = null;
            this.y = null;
            this.w = null;
            this.h = null;
            this.rect = null;
            this.alpha = null;
            this.innerHTML = null;
            this.opacityType = null;
            this.isHtml5_bl = null;
            this.hasTransform3d_bl = null;
            this.hasTransform2d_bl = null;
            e = null;
        };
        this.init();
    };
    a.FWDR3DCarDisplayObject = b;
}(window);

!function(a) {
    var b = function(a, b, c, d) {
        this.listeners = {
            events_ar: []
        };
        var e = this;
        if ("div" == a || "img" == a || "canvas" == a) this.type = a; else throw Error("Type is not valid! " + a);
        this.children_ar = [];
        this.style;
        this.screen;
        this.numChildren;
        this.transform;
        this.position = b || "absolute";
        this.overflow = c || "hidden";
        this.display = d || "block";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.angleX = 0;
        this.angleY = 0;
        this.angleZ = 0;
        this.perspective = 0;
        this.zIndex = 0;
        this.scale = 1;
        this.w = 0;
        this.h = 0;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.hasTransform3d_bl = FWDR3DCarUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDR3DCarUtils.hasTransform2d;
        this.init = function() {
            this.setScreen();
        };
        this.getTransform = function() {
            var a = [ "transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform" ];
            var b;
            while (b = a.shift()) if ("undefined" !== typeof this.screen.style[b]) return b;
            return false;
        };
        this.getOpacityType = function() {
            var a;
            if ("undefined" != typeof this.screen.style.opacity) a = "opacity"; else a = "filter";
            return a;
        };
        this.setScreen = function(a) {
            if ("img" == this.type && a) {
                this.screen = a;
                this.setMainProperties();
            } else {
                this.screen = document.createElement(this.type);
                this.setMainProperties();
            }
        };
        this.setMainProperties = function() {
            this.transform = this.getTransform();
            this.setPosition(this.position);
            this.setOverflow(this.overflow);
            this.opacityType = this.getOpacityType();
            if ("opacity" == this.opacityType) this.isHtml5_bl = true;
            if ("filter" == e.opacityType) e.screen.style.filter = "inherit";
            this.screen.style.left = "0px";
            this.screen.style.top = "0px";
            this.screen.style.margin = "0px";
            this.screen.style.padding = "0px";
            this.screen.style.maxWidth = "none";
            this.screen.style.maxHeight = "none";
            this.screen.style.border = "none";
            this.screen.style.lineHeight = "1";
            this.screen.style.backgroundColor = "transparent";
            this.screen.style.backfaceVisibility = "hidden";
            this.screen.style.webkitBackfaceVisibility = "hidden";
            this.screen.style.MozBackfaceVisibility = "hidden";
            this.screen.style.MozImageRendering = "optimizeSpeed";
            this.screen.style.WebkitImageRendering = "optimizeSpeed";
            if ("img" == a) {
                this.setWidth(this.screen.width);
                this.setHeight(this.screen.height);
                this.screen.onmousedown = function(a) {
                    return false;
                };
            }
        };
        e.setBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "visible";
            e.screen.style.webkitBackfaceVisibility = "visible";
            e.screen.style.MozBackfaceVisibility = "visible";
        };
        e.removeBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "hidden";
            e.screen.style.webkitBackfaceVisibility = "hidden";
            e.screen.style.MozBackfaceVisibility = "hidden";
        };
        this.setSelectable = function(a) {
            if (!a) {
                try {
                    this.screen.style.userSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.MozUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.webkitUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.khtmlUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.oUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.style.msUserSelect = "none";
                } catch (b) {}
                try {
                    this.screen.msUserSelect = "none";
                } catch (b) {}
                this.screen.ondragstart = function(a) {
                    return false;
                };
                this.screen.onselectstart = function() {
                    return false;
                };
                this.screen.style.webkitTouchCallout = "none";
            }
        };
        this.getScreen = function() {
            return e.screen;
        };
        this.setVisible = function(a) {
            this.visible = a;
            if (true == this.visible) this.screen.style.visibility = "visible"; else this.screen.style.visibility = "hidden";
        };
        this.getVisible = function() {
            return this.visible;
        };
        this.setResizableSizeAfterParent = function() {
            this.screen.style.width = "100%";
            this.screen.style.height = "100%";
        };
        this.getStyle = function() {
            return this.screen.style;
        };
        this.setOverflow = function(a) {
            e.overflow = a;
            e.screen.style.overflow = e.overflow;
        };
        this.setPosition = function(a) {
            e.position = a;
            e.screen.style.position = e.position;
        };
        this.setDisplay = function(a) {
            this.display = a;
            this.screen.style.display = this.display;
        };
        this.setButtonMode = function(a) {
            this.buttonMode = a;
            if (true == this.buttonMode) this.screen.style.cursor = "pointer"; else this.screen.style.cursor = "default";
        };
        this.setBkColor = function(a) {
            e.screen.style.backgroundColor = a;
        };
        this.setInnerHTML = function(a) {
            e.innerHTML = a;
            e.screen.innerHTML = e.innerHTML;
        };
        this.getInnerHTML = function() {
            return e.innerHTML;
        };
        this.getRect = function() {
            return e.screen.getBoundingClientRect();
        };
        this.setAlpha = function(a) {
            e.alpha = a;
            if ("opacity" == e.opacityType) e.screen.style.opacity = e.alpha; else if ("filter" == e.opacityType) {
                e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")";
                e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")";
            }
        };
        this.getAlpha = function() {
            return e.alpha;
        };
        this.getRect = function() {
            return this.screen.getBoundingClientRect();
        };
        this.getGlobalX = function() {
            return this.getRect().left;
        };
        this.getGlobalY = function() {
            return this.getRect().top;
        };
        this.setX = function(a) {
            e.x = a;
            if (e.hasTransform3d_bl) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)"; else if (e.hasTransform2d_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ")"; else e.screen.style.left = e.x + "px";
        };
        this.getX = function() {
            return e.x;
        };
        this.setY = function(a) {
            e.y = a;
            if (e.hasTransform3d_bl) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)"; else if (e.hasTransform2d_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ")"; else e.screen.style.top = e.y + "px";
        };
        this.getY = function() {
            return e.y;
        };
        this.setZ = function(a) {
            e.z = a;
            if (e.hasTransform3d_bl) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)";
        };
        this.getZ = function() {
            return e.z;
        };
        this.setAngleX = function(a) {
            e.angleX = a;
            if (e.hasTransform3d_bl) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)";
        };
        this.getAngleX = function() {
            return e.angleX;
        };
        this.setAngleY = function(a) {
            e.angleY = a;
            if (e.hasTransform3d_bl) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)";
        };
        this.getAngleY = function() {
            return e.angleY;
        };
        this.setAngleZ = function(a) {
            e.angleZ = a;
            if (e.hasTransform3d_bl) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)";
        };
        this.getAngleZ = function() {
            return e.angleZ;
        };
        this.setScale2 = function(a) {
            e.scale = a;
            if (e.hasTransform2d_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ")";
        };
        this.getScale = function() {
            return e.scale;
        };
        this.setPerspective = function(a) {
            e.perspective = a;
            e.screen.style.perspective = e.perspective + "px";
            e.screen.style.WebkitPerspective = e.perspective + "px";
            e.screen.style.MozPerspective = e.perspective + "px";
            e.screen.style.msPerspective = e.perspective + "px";
            e.screen.style.OPerspective = e.perspective + "px";
        };
        this.setPreserve3D = function() {
            this.screen.style.transformStyle = "preserve-3d";
            this.screen.style.WebkitTransformStyle = "preserve-3d";
            this.screen.style.MozTransformStyle = "preserve-3d";
            this.screen.style.msTransformStyle = "preserve-3d";
            this.screen.style.OTransformStyle = "preserve-3d";
        };
        this.setZIndex = function(a) {
            e.zIndex = a;
            e.screen.style.zIndex = e.zIndex;
        };
        this.getZIndex = function() {
            return e.zIndex;
        };
        this.setWidth = function(a) {
            e.w = a;
            if ("img" == e.type) e.screen.width = e.w; else e.screen.style.width = e.w + "px";
        };
        this.getWidth = function() {
            if ("div" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                return e.w;
            } else if ("img" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                if (0 != e.screen.width) return e.screen.width;
                return e._w;
            } else if ("canvas" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                return e.w;
            }
        };
        this.setHeight = function(a) {
            e.h = a;
            if ("img" == e.type) e.screen.height = e.h; else e.screen.style.height = e.h + "px";
        };
        this.getHeight = function() {
            if ("div" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                return e.h;
            } else if ("img" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                if (0 != e.screen.height) return e.screen.height;
                return e.h;
            } else if ("canvas" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                return e.h;
            }
        };
        this.getNumChildren = function() {
            return e.children_ar.length;
        };
        this.addChild = function(a) {
            if (this.contains(a)) {
                this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, a), 1);
                this.children_ar.push(a);
                this.screen.appendChild(a.screen);
            } else {
                this.children_ar.push(a);
                this.screen.appendChild(a.screen);
            }
        };
        this.removeChild = function(a) {
            if (this.contains(a)) {
                this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, a), 1);
                this.screen.removeChild(a.screen);
            } else throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
        };
        this.contains = function(a) {
            if (FWDR3DCarUtils.indexOfArray(this.children_ar, a) == -1) return false; else return true;
        };
        this.addChildAtZero = function(a) {
            if (0 == this.numChildren) {
                this.children_ar.push(a);
                this.screen.appendChild(a.screen);
            } else {
                this.screen.insertBefore(a.screen, this.children_ar[0].screen);
                if (this.contains(a)) this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, a), 1);
                this.children_ar.unshift(a);
            }
        };
        this.getChildAt = function(a) {
            if (a < 0 || a > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == this.numChildren) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[a];
        };
        this.removeChildAtZero = function() {
            this.screen.removeChild(this.children_ar[0].screen);
            this.children_ar.shift();
        };
        this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a;
            c.listener = b;
            c.target = this;
            this.listeners.events_ar.push(c);
        };
        this.dispatchEvent = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++) if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                if (b) for (var e in b) this.listeners.events_ar[c][e] = b[e];
                this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c]);
                break;
            }
        };
        this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++) if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                this.listeners.events_ar.splice(c, 1);
                break;
            }
        };
        this.disposeImage = function() {
            if ("img" == this.type) this.screen.src = "";
        };
        this.destroy = function() {
            try {
                this.screen.parentNode.removeChild(this.screen);
            } catch (a) {}
            this.screen.onselectstart = null;
            this.screen.ondragstart = null;
            this.screen.ontouchstart = null;
            this.screen.ontouchmove = null;
            this.screen.ontouchend = null;
            this.screen.onmouseover = null;
            this.screen.onmouseout = null;
            this.screen.onmouseup = null;
            this.screen.onmousedown = null;
            this.screen.onmousemove = null;
            this.screen.onclick = null;
            delete this.screen;
            delete this.style;
            delete this.rect;
            delete this.selectable;
            delete this.buttonMode;
            delete this.position;
            delete this.overflow;
            delete this.visible;
            delete this.innerHTML;
            delete this.numChildren;
            delete this.x;
            delete this.y;
            delete this.w;
            delete this.h;
            delete this.opacityType;
            delete this.isHtml5_bl;
            delete this.hasTransform3d_bl;
            delete this.hasTransform2d_bl;
            this.children_ar = null;
            this.style = null;
            this.screen = null;
            this.numChildren = null;
            this.transform = null;
            this.position = null;
            this.overflow = null;
            this.display = null;
            this.visible = null;
            this.buttonMode = null;
            this.globalX = null;
            this.globalY = null;
            this.x = null;
            this.y = null;
            this.w = null;
            this.h = null;
            this.rect = null;
            this.alpha = null;
            this.innerHTML = null;
            this.opacityType = null;
            this.isHtml5_bl = null;
            this.hasTransform3d_bl = null;
            this.hasTransform2d_bl = null;
            e = null;
        };
        this.init();
    };
    a.FWDR3DCarDisplayObject3D = b;
}(window);

!function() {
    var a = function() {
        this.listeners = {
            events_ar: []
        };
        this.destroy = function() {
            this.listeners = null;
        };
        this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a;
            c.listener = b;
            c.target = this;
            this.listeners.events_ar.push(c);
        };
        this.dispatchEvent = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++) if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                if (b) for (var e in b) this.listeners.events_ar[c][e] = b[e];
                this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c]);
            }
        };
        this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++) if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                this.listeners.events_ar.splice(c, 1);
                break;
            }
        };
    };
    window.FWDR3DCarEventDispatcher = a;
}(window);

!function(a) {
    var b = function() {
        var a = this;
        var c = b.prototype;
        this.init = function() {
            this.setWidth(500);
            this.setBkColor("#FF0000");
            this.getStyle().padding = "10px";
        };
        this.showText = function(a) {
            this.setInnerHTML(a);
        };
        this.destroy = function() {
            c.destroy();
            b.prototype = null;
            a = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject("div", "relative");
    };
    b.prototype = null;
    a.FWDR3DCarInfo = b;
}(window);

!function(a) {
    var b = function(c, d, e, f, g) {
        var h = this;
        var i = b.prototype;
        this.main_do;
        this.text_do;
        this.background_do;
        this.backgroundColor_str = d;
        this.backgroundOpacity = e;
        this.margins = c;
        this.maxWidth;
        this.maxHeight;
        this.finalWidth;
        this.finalHeight;
        this.lastPresedY;
        this.borderRadius = f;
        this.vy = 0;
        this.vy2 = 0;
        this.friction = .9;
        this.obj = {
            currentWidth: 0
        };
        this.updateMobileScrollBarIntervalId_int;
        this.isShowed_bl = false;
        this.isScrollBarActive_bl = false;
        this.isMobile_bl = g;
        this.isDragging_bl = false;
        this.isHiddenDone_bl = true;
        this.init = function() {
            this.setOverflow("visible");
            this.setBkColor("#FF0000");
            this.setX(this.margins);
            this.setY(this.margins);
            this.setupMainContainers();
            this.setVisible(false);
        };
        this.setupMainContainers = function() {
            this.main_do = new FWDR3DCarDisplayObject("div");
            this.text_do = new FWDR3DCarDisplayObject("div");
            this.text_do.getStyle().fontSmoothing = "antialiased";
            this.text_do.getStyle().webkitFontSmoothing = "antialiased";
            this.text_do.getStyle().textRendering = "optimizeLegibility";
            this.background_do = new FWDR3DCarDisplayObject("div");
            this.background_do.setResizableSizeAfterParent();
            this.background_do.setBkColor(this.backgroundColor_str);
            this.background_do.setAlpha(this.backgroundOpacity);
            this.main_do.addChild(this.background_do);
            this.main_do.addChild(this.text_do);
            this.addChild(this.main_do);
        };
        this.setText = function(a, b, c, d, e) {
            this.maxWidth = b;
            this.maxHeight = c;
            if (!e && 0 != h.borderRadius) {
                h.background_do.getStyle().borderTopLeftRadius = h.borderRadius - 1 + "px";
                h.background_do.getStyle().borderTopRightRadius = h.borderRadius - 1 + "px";
            } else if (0 != h.borderRadius) {
                h.background_do.getStyle().borderTopLeftRadius = "0px";
                h.background_do.getStyle().borderTopRightRadius = "0px";
            }
            this.text_do.setInnerHTML(a);
            clearTimeout(this.resieId_to);
            this.resieId_to = setTimeout(function() {
                h.resize(h.maxWidth, h.maxHeight, d);
                if (!h.isShowed_bl) {
                    if (h.isHiddenDone_bl) h.hide(false);
                    h.show(true);
                } else h.show(true);
            }, 50);
            h.disableMobileScrollBar();
            h.onTweenUpdate();
        };
        this.resize = function(a, b, c) {
            h.maxWidth = a - 2 * h.margins;
            h.maxHeight = b - 2 * h.margins;
            h.finalWidth = h.maxWidth;
            h.setWidth(h.maxWidth);
            FWDR3DCarModTweenMax.killTweensOf(h.obj);
            if (c) FWDR3DCarModTweenMax.to(h.obj, .8, {
                delay: .1,
                currentWidth: h.maxWidth,
                onUpdate: h.onTweenUpdate,
                ease: Expo.easeInOut
            }); else h.obj.currentWidth = h.maxWidth;
            h.onTweenUpdate();
            h.text_do.setY(0);
        };
        this.onTweenUpdate = function() {
            h.main_do.setWidth(h.obj.currentWidth);
            h.finalHeight = h.text_do.getHeight() <= h.maxHeight ? h.text_do.getHeight() : h.maxHeight;
            h.main_do.setHeight(h.finalHeight);
            h.background_do.setHeight(h.finalHeight);
            if (h.text_do.getHeight() > h.maxHeight) h.enableMobileScrollBar(); else h.disableMobileScrollBar();
        };
        this.enableMobileScrollBar = function() {
            if (!this.isMobile_bl) return;
            if (this.isScrollBarActive_bl) return;
            this.getScreen().addEventListener("touchstart", this.touchStartHandler);
            clearInterval(this.updateMobileScrollBar);
            this.updateMobileScrollBarIntervalId_int = setInterval(this.updateMobileScrollBar, 16);
            this.isScrollBarActive_bl = true;
        };
        this.disableMobileScrollBar = function() {
            if (!this.isScrollBarActive_bl) return;
            this.getScreen().removeEventListener("touchstart", this.touchStartHandler);
            clearInterval(this.updateMobileScrollBar);
            this.isScrollBarActive_bl = false;
        };
        this.touchStartHandler = function(b) {
            b.preventDefault();
            a.addEventListener("touchend", h.touchEndHandler);
            a.addEventListener("touchmove", h.scrollBarOnMoveHandler);
            h.lastPresedY = b.touches[0].pageY - a.pageYOffset;
        };
        this.scrollBarOnMoveHandler = function(b) {
            b.preventDefault();
            var c = 0;
            h.isDragging_bl = true;
            c = b.touches[0].pageY - a.pageYOffset - h.lastPresedY;
            h.lastPresedY = b.touches[0].pageY - a.pageYOffset;
            h.text_do.setY(h.text_do.getY() + c);
            h.vy = 2 * c;
        };
        this.touchEndHandler = function(b) {
            a.removeEventListener("touchend", h.touchEndHandler);
            a.removeEventListener("touchmove", h.scrollBarOnMoveHandler);
            h.isDragging_bl = false;
        };
        this.updateMobileScrollBar = function() {
            var a = h.text_do.getY();
            var b = h.text_do.getHeight();
            if (!h.isDragging_bl) {
                h.vy *= h.friction;
                a += h.vy;
                if (a > 0) {
                    h.vy2 = .5 * (0 - a);
                    h.vy *= h.friction;
                    a += h.vy2;
                } else if (a <= h.maxHeight - b) {
                    h.vy2 = .5 * (h.maxHeight - b - a);
                    h.vy *= h.friction;
                    a += h.vy2;
                }
                h.text_do.setY(Math.round(a));
            }
        };
        this.hide = function(a) {
            FWDR3DCarModTweenMax.killTweensOf(this);
            if (a) {
                FWDR3DCarModTweenMax.to(this, .6, {
                    y: -this.finalHeight,
                    ease: Expo.easeInOut,
                    onComplete: this.hideComplete
                });
                this.isHiddenDone_bl = false;
            } else {
                this.setVisible(false);
                this.setY(-this.finalHeight);
                this.isShowed_bl = false;
                this.isHiddenDone_bl = true;
            }
            h.isShowed_bl = false;
        };
        this.hideComplete = function() {
            h.isHiddenDone_bl = true;
            h.setVisible(false);
        };
        this.show = function(a) {
            this.setVisible(true);
            FWDR3DCarModTweenMax.killTweensOf(this);
            if (a) FWDR3DCarModTweenMax.to(this, .6, {
                y: this.margins,
                ease: Expo.easeInOut
            }); else {
                this.setVisible(false);
                this.setY(this.margins);
            }
            this.isHiddenDone_bl = false;
            this.isShowed_bl = true;
        };
        this.init();
        this.destroy = function() {
            clearInterval(this.updateMobileScrollBar);
            if (this.isMobile_bl) {
                this.getScreen().removeEventListener("touchstart", this.touchStartHandler);
                a.removeEventListener("touchend", this.touchEndHandler);
                a.removeEventListener("touchmove", this.scrollBarOnMoveHandler);
            }
            FWDR3DCarModTweenMax.killTweensOf(this);
            FWDR3DCarModTweenMax.killTweensOf(this.obj);
            this.main_do.destroy();
            this.text_do.destroy();
            this.background_do.destroy();
            this.main_do = null;
            this.text_do = null;
            this.background_do = null;
            h.setInnerHTML("");
            i.destroy();
            h = null;
            i = null;
            b.prototype = null;
        };
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject("div");
    };
    b.HIDE_COMPLETE = "infoWindowHideComplete";
    b.prototype = null;
    a.FWDR3DCarInfoWindow = b;
}(window);

!function(a) {
    var b = function(c) {
        var d = this;
        var e = b.prototype;
        this.image_img;
        this.closeN_img = c.closeN_img;
        this.closeS_img = c.closeS_img;
        this.nextN_img = c.nextN_img;
        this.nextS_img = c.nextS_img;
        this.prevN_img = c.prevN_img;
        this.prevS_img = c.prevS_img;
        this.maximizeN_img = c.maximizeN_img;
        this.maximizeS_img = c.maximizeS_img;
        this.minimizeN_img = c.minimizeN_img;
        this.minimizeS_img = c.minimizeS_img;
        this.infoOpenN_img = c.infoOpenN_img;
        this.infoOpenS_img = c.infoOpenS_img;
        this.infoCloseN_img = c.infoCloseN_img;
        this.infoCloseS_img = c.infoCloseS_img;
        this.pauseN_img = c.pauseN_img;
        this.pauseS_img = c.pauseS_img;
        this.playN_img = c.playN_img;
        this.playS_img = c.playS_img;
        this.preloaderImg = c.lightboxPreloader_img;
        this.slideShowPreloader_img = c.slideShowPreloader_img;
        this.info_do;
        this.infoWindow_do;
        this.preloader_do;
        this.slideShowPreloader_do;
        this.customContextMenu;
        this.timerManager;
        this.bk_do;
        this.mainItemsHolder_do;
        this.itemsBackground_do;
        this.itemsBorder_do;
        this.itemsHolder_do;
        this.currentItem_do;
        this.prevItem_do;
        this.closeButton_do;
        this.nextButton_do;
        this.prevButton_do;
        this.zoomButton_do;
        this.infoButton_do;
        this.slideshowButtton_do;
        this.data_ar = c.data_ar;
        this.buttons_ar;
        this.backgroundColor_str = c.backgroundColor_str;
        this.transitionDirection_str = "next";
        this.mediaType_str;
        this.backgroundOpacity = c.backgroundOpacity;
        this.infoWindowBackgroundOpacity = c.infoWindowBackgroundOpacity || 1;
        this.videoWidth = c.videoWidth;
        this.videoHeight = c.videoHeight;
        this.iframeWidth = c.iframeWidth;
        this.iframeHeight = c.iframeHeight;
        this.slideShowDelay = c.slideShowDelay;
        this.slideshowPreloaderHeight = 29;
        this.iframeW;
        this.iframeH;
        this.borderSize = c.borderSize || 0;
        this.borderRadius = c.borderRadius || 0;
        this.transitionTotalDuration = 1200;
        this.buttonWidth = this.closeN_img.width;
        this.buttonHeight = this.closeN_img.height;
        this.totalItems = this.data_ar.length;
        this.originalW;
        this.originalH;
        this.finalX;
        this.finalY;
        this.finalWidth;
        this.finalHeight;
        this.videoIdOrIframeUrl;
        this.percentX;
        this.percentY;
        this.globalXMousePosition;
        this.globalYMousePosition;
        this.lastPressedX;
        this.lastPressedY;
        this.friction = .9;
        this.vx;
        this.vy;
        this.type_str;
        this.prevType_str;
        this.borderColor_str1 = c.borderColor_str1 || "#FFFFFF";
        this.borderColor_str2 = c.borderColor_str2 || "#FFFFFF";
        this.itemBackgroundColor_str = c.itemBackgroundColor_str || "#222222";
        this.infoWindowBackgroundColor = c.infoWindowBackgroundColor || "transparent";
        this.id;
        this.scrollOffestX;
        this.scrollOffsetY;
        this.updateImageWhenMaximized_int;
        this.transitionDoneId_to;
        this.transitionShapeDoneId_to;
        this.showVideoId_to;
        this.maximizeCompleteTimeOutId_to;
        this.minimizeCompleteTimeOutId_to;
        this.showFirstTimeWithDelayId_to;
        this.resizeHandlerId1_to;
        this.resizeHandlerId2_to;
        this.orientationChangeId_to;
        this.isShowed_bl = false;
        this.isTweeningOnShowOrHide_bl = false;
        this.firstTimeShowed_bl = true;
        this.isTweening_bl = false;
        this.addKeyboardSupport_bl = false == c.addKeyboardSupport_bl ? false : true;
        this.showContextMenu_bl = false == c.showContextMenu ? false : true;
        this.showNextAndPrevButtons_bl = false == c.showNextAndPrevButtons ? false : true;
        this.showZoomButton_bl = false == c.showZoomButton ? false : true;
        this.showInfoButton_bl = false == c.showInfoButton ? false : true;
        this.showSlideshowButton_bl = false == c.showSlideshowButton ? false : true;
        this.slideShowAutoPlay_bl = false == c.slideShowAutoPlay ? false : true;
        this.showInfoWindowByDefault_bl = true == c.showInfoWindowByDefault ? true : false;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.isMaximized_bl = false;
        this.isFirstItemShowed_bl = false;
        this.allowToPressKey_bl = true;
        this.isLoading_bl = false;
        this.videoAutoPlay_bl = c.lightBoxVideoAutoPlay;
        this.forceRoundBorderToIframe_bl = false;
        this.isIframe_bl = false;
        this.orintationChanceComplete_bl = true;
        this.init = function() {
            d.getStyle().msTouchAction = "none";
            d.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
            this.setupInfo();
            this.setupBackgorundAndMainItemHolder();
            this.setupPreloader();
            this.setupCloseButton();
            if (this.showNextAndPrevButtons_bl) this.setupNextAndPrevButtons();
            if (this.showZoomButton_bl) this.setupZoomButton();
            if (this.showInfoButton_bl) this.setupInfoButton();
            if (this.showInfoButton_bl || this.showInfoWindowByDefault_bl) this.setupInfoWindow();
            if (this.showSlideshowButton_bl) {
                this.setupTimerManager();
                this.setupSlideShowPreloader();
                this.setupSlideshowButton();
            }
            this.setupContextMenu();
            this.buttons_ar = [];
            this.buttons_ar.push(this.closeButton_do);
            if (this.infoButton_do) this.buttons_ar.push(this.infoButton_do);
            if (this.showSlideshowButton_bl) this.buttons_ar.push(this.slideshowButtton_do);
            if (this.zoomButton_do) this.buttons_ar.push(this.zoomButton_do);
            if (this.showNextAndPrevButtons_bl) this.buttons_ar.push(this.nextButton_do);
        };
        this.updateData = function(a) {
            d.data_ar = a;
            d.totalItems = d.data_ar.length;
        };
        this.startResizeHandler = function() {
            if (a.addEventListener) {
                a.addEventListener("resize", d.onResizeHandler);
                a.addEventListener("scroll", d.onScrollHandler);
                a.addEventListener("orientationchange", d.orientationChance);
                if (FWDR3DCarUtils.isFirefox) {
                    document.addEventListener("fullscreenchange", d.onFullScreenChange);
                    document.addEventListener("mozfullscreenchange", d.onFullScreenChange);
                }
            } else if (a.attachEvent) {
                a.attachEvent("onresize", d.onResizeHandler);
                a.attachEvent("onscroll", d.onScrollHandler);
            }
            d.resizeHandler();
            d.resizeHandlerId2_to = setTimeout(function() {
                d.resizeHandler();
            }, 100);
        };
        this.onFullScreenChange = function() {
            d.resizeHandler();
            clearTimeout(d.resizeHandlerId2_to);
            d.resizeHandlerId2_to = setTimeout(function() {
                d.resizeHandler();
            }, 50);
        };
        d.onScrollHandler = function(a) {
            if (!d.orintationChanceComplete_bl) return;
            var b = FWDR3DCarUtils.getScrollOffsets();
            d.setX(b.x);
            d.setY(b.y);
        };
        d.onResizeHandler = function(a) {
            if (d.isMobile_bl) {
                clearTimeout(d.resizeHandlerId2_to);
                d.resizeHandlerId2_to = setTimeout(function() {
                    d.resizeHandler();
                }, 200);
            } else {
                d.resizeHandler();
                clearTimeout(d.resizeHandlerId2_to);
                d.resizeHandlerId2_to = setTimeout(function() {
                    d.resizeHandler();
                }, 50);
            }
        };
        this.orientationChance = function() {
            d.orintationChanceComplete_bl = false;
            clearTimeout(d.resizeHandlerId2_to);
            clearTimeout(d.orientationChangeId_to);
            d.orientationChangeId_to = setTimeout(function() {
                d.orintationChanceComplete_bl = true;
                d.resizeHandler();
            }, 1e3);
            d.setX(0);
            d.setWidth(0);
        };
        this.resizeHandler = function() {
            if (!d.orintationChanceComplete_bl) return;
            var a = FWDR3DCarUtils.getViewportSize();
            var b = FWDR3DCarUtils.getScrollOffsets();
            if (d.stageWidth == a.w && d.stageHeight == a.h) return;
            d.isTweening_bl = false;
            d.stageWidth = a.w;
            d.stageHeight = a.h;
            d.scrollOffestX = b.x;
            d.scrollOffsetY = b.y;
            d.setX(b.x);
            d.setY(b.y);
            if (d.isMobile_bl) {
                d.setWidth(d.stageWidth);
                d.setHeight(d.stageHeight);
            } else {
                d.setWidth(d.stageWidth - .5);
                d.setHeight(d.stageHeight - .5);
            }
            d.positionPreloader();
            d.resizeCurrentItem();
            d.positionButtons(false);
            if (d.infoWindow_do && d.infoWindow_do.isShowed_bl) d.infoWindow_do.resize(d.finalWidth, d.finalHeight, false);
        };
        this.setupContextMenu = function() {
            this.customContextMenu = new FWDR3DCarContextMenu(this, this.showContextMenu_bl);
        };
        this.disableBrowserScrollBars = function() {
            if (this.isMobile_bl) a.addEventListener("touchmove", this.mouseDummyHandler); else if (a.addEventListener) {
                a.addEventListener("mousewheel", this.mouseDummyHandler);
                a.addEventListener("DOMMouseScroll", this.mouseDummyHandler);
            } else if (document.attachEvent) document.attachEvent("onmousewheel", this.mouseDummyHandler);
        };
        this.mouseDummyHandler = function(a) {
            if (a.preventDefault) a.preventDefault(); else return false;
        };
        this.setupInfo = function() {
            FWDR3DCarInfo.setPrototype();
            this.info_do = new FWDR3DCarInfo();
        };
        this.setupBackgorundAndMainItemHolder = function() {
            this.bk_do = new FWDR3DCarDisplayObject("div");
            this.bk_do.setBackfaceVisibility();
            this.bk_do.setResizableSizeAfterParent();
            this.bk_do.setBkColor(this.backgroundColor_str);
            this.mainItemsHolder_do = new FWDR3DCarDisplayObject("div");
            this.itemsBorder_do = new FWDR3DCarSimpleDisplayObject("div");
            this.itemsBorder_do.setCSSGradient(d.borderColor_str1, d.borderColor_str2);
            this.itemsBackground_do = new FWDR3DCarDisplayObject("div");
            this.itemsBackground_do.setBkColor(d.itemBackgroundColor_str);
            this.itemsHolder_do = new FWDR3DCarDisplayObject("div");
            this.itemsHolder_do.setOverflow("visible");
            this.mainItemsHolder_do.addChild(this.itemsBorder_do);
            this.mainItemsHolder_do.addChild(this.itemsBackground_do);
            this.mainItemsHolder_do.addChild(this.itemsHolder_do);
            this.addChild(this.bk_do);
            this.addChild(this.mainItemsHolder_do);
        };
        this.addCloseEventsWhenBkIsPressed = function() {
            if (d.isMobile_bl) if (d.hasPointerEvent_bl) d.bk_do.screen.addEventListener("MSPointerDown", d.onBkMouseDown); else d.bk_do.screen.addEventListener("touchstart", d.onBkMouseDown); else if (d.bk_do.screen.addEventListener) d.bk_do.screen.addEventListener("mousedown", d.onBkMouseDown); else if (d.bk_do.screen.attachEvent) d.bk_do.screen.attachEvent("onmousedown", d.onBkMouseDown);
        };
        this.onBkMouseDown = function(a) {
            d.hide();
        };
        this.show = function(a) {
            if (this.isShowed_bl) return;
            this.isShowed_bl = true;
            this.isTweeningOnShowOrHide_bl = true;
            this.getStyle().zIndex = 100000002;
            this.disableBrowserScrollBars();
            if (this.addKeyboardSupport_bl) this.addKeyboardSupport();
            this.hideButtons(false);
            if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1) document.getElementsByTagName("body")[0].appendChild(this.screen); else document.documentElement.appendChild(this.screen);
            this.id = a;
            this.startResizeHandler();
            this.bk_do.setAlpha(0);
            FWDR3DCarModTweenMax.to(this.bk_do, .8, {
                alpha: this.backgroundOpacity,
                ease: Quint.easeOut,
                onComplete: this.onShowComplete
            });
            this.showFirstTimeWithDelayId_to = setTimeout(function() {
                d.showCurrentItem();
            }, 100);
            this.dispatchEvent(b.SHOW_START);
        };
        this.onShowComplete = function() {
            d.isTweeningOnShowOrHide_bl = false;
            d.addCloseEventsWhenBkIsPressed();
        };
        this.showCurrentItem = function() {
            if (null == d) return;
            this.type_str = this.data_ar[this.id].url;
            if (!this.type_str) {
                this.addChild(this.info_do);
                this.info_do.showText("The data URL isn't formatted correctly! Please note that it must be an image path, a Youtube video or a Vimeo video URL.");
                return;
            }
            if ("iframe" == this.data_ar[this.id].dataType.toLowerCase()) {
                this.iframeW = this.iframeWidth;
                this.iframeH = this.iframeHeight;
                this.videoIdOrIframeUrl = this.type_str;
                this.type_str = b.IFRAME;
                if (d.forceRoundBorderToIframe_bl && 0 != d.borderRadius) d.itemsBorder_do.getStyle().borderRadius = d.borderRadius + "px"; else if (0 != d.borderRadius) {
                    d.itemsBorder_do.getStyle().borderRadius = "0px";
                    d.itemsBackground_do.getStyle().borderRadius = "0px";
                }
                d.isIframe_bl = true;
            } else if (this.type_str.toLowerCase().indexOf(".jpg") != -1 || this.type_str.toLowerCase().indexOf(".png") != -1 || this.type_str.toLowerCase().indexOf(".jpeg") != -1) this.type_str = b.IMAGE; else if (this.type_str.toLowerCase().indexOf("http://www.youtube") != -1 || this.type_str.toLowerCase().indexOf("http://youtube") != -1 || this.type_str.toLowerCase().indexOf("youtube.com") != -1) {
                args = FWDR3DCarUtils.getUrlArgs(this.type_str);
                if (!args.v) {
                    this.addChild(this.info_do);
                    this.info_do.showText("Make sure that the Youtube URL is formatted correctly, probably the <font color='#FFFFFF'>v</font> variable from the URL is missing, this represents the video id.");
                    return;
                }
                this.iframeW = this.videoWidth;
                this.iframeH = this.videoHeight;
                this.videoIdOrIframeUrl = args.v;
                this.type_str = b.YOUTUBE;
                if (d.forceRoundBorderToIframe_bl && 0 != d.borderRadius) d.itemsBorder_do.getStyle().borderRadius = d.borderRadius + "px"; else if (0 != d.borderRadius) {
                    d.itemsBorder_do.getStyle().borderRadius = "0px";
                    d.itemsBackground_do.getStyle().borderRadius = "0px";
                }
            } else if (this.type_str.toLowerCase().indexOf("http://www.vimeo") != -1 || this.type_str.toLowerCase().indexOf("http://vimeo") != -1 || this.type_str.toLowerCase().indexOf("vimeo.com") != -1) {
                this.iframeW = this.videoWidth;
                this.iframeH = this.videoHeight;
                this.videoIdOrIframeUrl = this.type_str.substr(this.type_str.lastIndexOf("/") + 1);
                this.type_str = b.VIMEO;
                if (d.forceRoundBorderToIframe_bl && 0 != d.borderRadius) d.itemsBorder_do.getStyle().borderRadius = d.borderRadius + "px"; else if (0 != d.borderRadius) {
                    d.itemsBorder_do.getStyle().borderRadius = "0px";
                    d.itemsBackground_do.getStyle().borderRadius = "0px";
                }
            } else {
                this.addChild(this.info_do);
                this.info_do.showText("The data URL isn't formatted correctly! Please note that it must be an image path, a Youtube video or a Vimeo video URL.");
                return;
            }
            this.createItem();
        };
        this.createItem = function() {
            clearTimeout(this.transitionShapeDoneId_to);
            clearTimeout(this.showVideoId_to);
            this.preloader_do.hide(true);
            if (this.showSlideshowButton_bl) this.timerManager.stop();
            if (this.contains(this.info_do)) this.removeChild(this.info_do);
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img.onerror = null;
                this.image_img = null;
            }
            if (this.infoButton_do) this.infoButton_do.isDisabled_bl = true;
            if (this.type_str == b.IMAGE) {
                if (this.prevItem_do) if ("filter" == this.opacityType && "img" != this.prevItem_do.type) this.prevItem_do.setVisible(false); else if (this.isMobile_bl || "img" != this.prevItem_do.type) this.cleanChildren(0);
                this.loadImage();
            } else if (this.type_str == b.YOUTUBE || this.type_str == b.VIMEO || this.type_str == b.IFRAME) {
                this.isTweening_bl = true;
                if (this.firstTimeShowed_bl) {
                    this.createIframeHolder();
                    this.resizeCurrentItem();
                    this.showItemFirstTime();
                    this.showVideoId_to = setTimeout(this.showIframeContent, 900);
                    this.prevItem_do = d.currentItem_do;
                } else {
                    if (this.prevItem_do) if ("filter" == this.opacityType && "img" != this.prevItem_do.type) this.prevItem_do.setVisible(false); else if (this.isMobile_bl || "img" != this.prevItem_do.type) this.cleanChildren(0); else FWDR3DCarModTweenMax.to(this.prevItem_do, .8, {
                        alpha: 0
                    });
                    this.createIframeHolder();
                    this.resizeCurrentItem(true);
                    this.positionButtons(true);
                    this.animMainDos();
                    this.showVideoId_to = setTimeout(this.showIframeContent, 900);
                    if (this.showZoomButton_bl && (this.type_str == b.YOUTUBE || this.type_str == b.VIMEO || d.type_str == b.IFRAME)) {
                        var a = FWDR3DCarUtils.indexOfArray(this.buttons_ar, this.zoomButton_do);
                        if (a != -1) {
                            this.buttons_ar.splice(a, 1);
                            this.removeChild(this.zoomButton_do);
                        }
                    }
                    this.prevItem_do = d.currentItem_do;
                }
                if (d.infoWindow_do) if (this.mainItemsHolder_do.contains(d.infoWindow_do) && this.infoWindow_do.isShowed_bl) this.infoWindow_do.setText(this.data_ar[d.id].infoText, this.finalWidth, this.finalHeight, false, this.type_str != b.IMAGE);
            }
            this.prevType_str = this.type_str;
        };
        this.createIframeHolder = function() {
            this.currentItem_do = new FWDR3DCarDisplayObject("div");
            if (this.type_str == b.IFRAME && this.isMobile_bl) {
                this.currentItem_do.getStyle().overflow = "scroll";
                this.currentItem_do.getStyle().webkitOverflowScrolling = "touch";
            }
            this.originalWidth = d.iframeW;
            this.originalHeight = d.iframeH;
            this.itemsHolder_do.addChild(d.currentItem_do);
        };
        this.loadImage = function() {
            this.isLoading_bl = true;
            this.preloader_do.show();
            var a = this.data_ar[this.id].url;
            this.image_img = new Image();
            this.image_img.onload = this.imageLoadComplete;
            this.image_img.onerror = this.imageLoadError;
            this.image_img.src = a;
            this.addChild(this.preloader_do);
            

            
        };
        this.imageLoadComplete = function(a) {
        
       
        
        
            if (d.prevItem_do) if (!d.isMobile_bl && "img" == d.prevItem_do.type) FWDR3DCarModTweenMax.to(d.prevItem_do, .6, {
                alpha: 0
            });
            d.originalWidth = d.image_img.width;
            d.originalHeight = d.image_img.height;
            d.currentItem_do = new FWDR3DCarDisplayObject("img");
            d.currentItem_do.setScreen(d.image_img);
            if (0 != d.borderRadius) d.currentItem_do.getStyle().borderRadius = d.borderRadius + "px";
            if (0 != d.borderRadius) d.itemsBorder_do.getStyle().borderRadius = d.borderRadius + "px";
            if (0 != d.borderRadius) d.itemsBackground_do.getStyle().borderRadius = d.borderRadius + "px";
            if (d.firstTimeShowed_bl) {
                d.transitionTotalDuration = 800;
                d.resizeCurrentItem(false);
                d.showItemFirstTime();
            } else {
                d.transitionTotalDuration = 1400;
                d.resizeCurrentItem(true);
                d.currentItem_do.setWidth(d.finalWidth - 2 * d.borderSize);
                d.currentItem_do.setHeight(d.finalHeight - 2 * d.borderSize);
                d.currentItem_do.setAlpha(0);
                FWDR3DCarModTweenMax.to(d.currentItem_do, .6, {
                    alpha: 1,
                    delay: .8
                });
                d.addZoomButtonBackToButtonsArray();
                d.animMainDos();
                d.positionButtons(true);
            }
            if (d.infoWindow_do && d.infoWindow_do.isShowed_bl) d.infoWindow_do.setText(d.data_ar[d.id].infoText, d.finalWidth, d.finalHeight, true, d.type_str != b.IMAGE);
            if (d.showSlideshowButton_bl) d.timerManager.stop();
            d.preloader_do.hide(true);
            d.prevItem_do = d.currentItem_do;
            d.isTweening_bl = true;
            d.isLoading_bl = false;
            d.transitionShapeDoneId_to = setTimeout(d.transitionShapeDoneHandler, 800);
            d.transitionDoneId_to = setTimeout(d.transitionDoneHandler, d.transitionTotalDuration);
            d.itemsHolder_do.addChild(d.currentItem_do);
        };
        this.transitionDoneHandler = function() {
            if (d.showSlideshowButton_bl) d.timerManager.start();
            d.isTweening_bl = false;
            d.cleanChildren(1);
        };
        this.transitionShapeDoneHandler = function() {
            if (d.infoButton_do) d.infoButton_do.isDisabled_bl = false;
        };
        this.imageLoadError = function() {
            var a = "Image can't be loaded probably the path is incorrect <font color='#FFFFFF'>" + d.data_ar[d.id].url + "</font>";
            d.addChild(d.info_do);
            d.info_do.showText(a);
        };
        this.animMainDos = function() {
            FWDR3DCarModTweenMax.to(this.mainItemsHolder_do, .8, {
                delay: .1,
                x: d.finalX,
                y: d.finalY,
                w: d.finalWidth,
                h: d.finalHeight,
                ease: Expo.easeInOut
            });
            FWDR3DCarModTweenMax.to(this.itemsBackground_do, .8, {
                delay: .1,
                x: d.borderSize,
                y: d.borderSize,
                w: d.finalWidth - 2 * d.borderSize,
                h: d.finalHeight - 2 * d.borderSize,
                ease: Expo.easeInOut
            });
            FWDR3DCarModTweenMax.to(this.itemsBorder_do, .8, {
                delay: .1,
                w: d.finalWidth,
                h: d.finalHeight,
                ease: Expo.easeInOut
            });
            FWDR3DCarModTweenMax.to(this.itemsHolder_do, .8, {
                delay: .1,
                x: d.borderSize,
                y: d.borderSize,
                w: d.finalWidth - 2 * d.borderSize,
                h: d.finalHeight - 2 * d.borderSize,
                ease: Expo.easeInOut
            });
            if (!this.isMobile_bl && "img" == this.prevItem_do.type) FWDR3DCarModTweenMax.to(d.prevItem_do, .8, {
                delay: .1,
                x: (d.finalWidth - 2 * d.borderSize - d.prevItem_do.getWidth()) / 2,
                y: (d.finalHeight - 2 * d.borderSize - d.prevItem_do.getHeight()) / 2,
                ease: Expo.easeInOut
            });
        };
        this.showIframeContent = function() {
            d.isTweening_bl = false;
            if (d.showSlideshowButton_bl) d.timerManager.start();
            if (d.infoButton_do) d.infoButton_do.isDisabled_bl = false;
            d.cleanChildren(1);
            var a = document.createElement("iframe");
            a.width = "100%";
            a.height = "100%";
            a.frameBorder = 0;
            a.allowfullscreen = true;
            if (d.type_str == b.YOUTUBE) if (d.videoAutoPlay_bl) a.src = "http://www.youtube.com/embed/" + d.videoIdOrIframeUrl + "?wmode=transparent&autoplay=1"; else a.src = "http://www.youtube.com/embed/" + d.videoIdOrIframeUrl + "?wmode=transparent"; else if (d.type_str == b.VIMEO) if (d.videoAutoPlay_bl) a.src = "http://player.vimeo.com/video/" + d.videoIdOrIframeUrl + "?autoplay=1"; else a.src = "http://player.vimeo.com/video/" + d.videoIdOrIframeUrl; else if (d.type_str == b.IFRAME) a.src = d.videoIdOrIframeUrl;
            d.currentItem_do.screen.appendChild(a);
            d.resizeCurrentItem();
        };
        this.showItemFirstTime = function() {
            this.firstTimeShowed_bl = false;
            this.showButtons();
            this.mainItemsHolder_do.setX(this.stageWidth / 2);
            this.mainItemsHolder_do.setY(this.stageHeight / 2);
            this.mainItemsHolder_do.setWidth(0);
            this.mainItemsHolder_do.setHeight(0);
            this.currentItem_do.setAlpha(0);
            this.itemsBorder_do.setAlpha(0);
            if (this.showInfoWindowByDefault_bl) this.showInfoWindowOnStart();
            FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                alpha: 1,
                delay: .9,
                ease: Quint.easeOut
            });
            FWDR3DCarModTweenMax.to(this.itemsBorder_do, .8, {
                alpha: 1,
                delay: .7,
                ease: Quint.easeOut
            });
            FWDR3DCarModTweenMax.to(this.mainItemsHolder_do, .8, {
                x: this.finalX,
                y: this.finalY,
                w: this.finalWidth,
                h: this.finalHeight,
                ease: Expo.easeInOut
            });
            if (this.showZoomButton_bl && (this.type_str == b.YOUTUBE || this.type_str == b.VIMEO || d.type_str == b.IFRAME)) {
                var a = FWDR3DCarUtils.indexOfArray(this.buttons_ar, this.zoomButton_do);
                if (a != -1) {
                    this.buttons_ar.splice(a, 1);
                    this.removeChild(this.zoomButton_do);
                }
            }
        };
        this.cleanChildren = function(a) {
            var b;
            var c;
            while (d.itemsHolder_do.getNumChildren() > a) {
                b = d.itemsHolder_do.getChildAt(0);
                FWDR3DCarModTweenMax.killTweensOf(b);
                d.itemsHolder_do.removeChild(b);
                if ("opacity" == d.opacityType && "img" != b.type) b.setInnerHTML("");
                b.destroy();
            }
            b = null;
        };
        this.resizeCurrentItem = function(a) {
            if (!this.currentItem_do) return;
            var b = this.stageWidth - 10;
            var c = this.stageHeight - 10;
            var d = b / this.originalWidth;
            var e = c / this.originalHeight;
            var f = 0;
            if (d <= e) f = d; else if (d >= e) f = e;
            if (d >= 1 && e >= 1) f = 1;
            this.finalWidth = Math.round(this.originalWidth * f);
            this.finalHeight = Math.round(this.originalHeight * f);
            if (this.finalWidth > this.stageWidth - 2 * this.buttonWidth - 4) {
                this.finalWidth = this.stageWidth - 2 * this.buttonWidth - 4;
                this.finalHeight = Math.round(this.originalHeight * (this.finalWidth / this.originalWidth));
            }
            this.finalX = Math.floor((b - this.finalWidth) / 2) + 5;
            this.finalY = Math.floor((c - this.finalHeight) / 2) + 5;
            if (a) return;
            FWDR3DCarModTweenMax.killTweensOf(this.mainItemsHolder_do);
            this.mainItemsHolder_do.setX(this.finalX);
            this.mainItemsHolder_do.setY(this.finalY);
            this.mainItemsHolder_do.setWidth(this.finalWidth);
            this.mainItemsHolder_do.setHeight(this.finalHeight);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsBackground_do);
            this.itemsBackground_do.setX(this.borderSize);
            this.itemsBackground_do.setY(this.borderSize);
            this.itemsBackground_do.setWidth(this.finalWidth - 2 * this.borderSize);
            this.itemsBackground_do.setHeight(this.finalHeight - 2 * this.borderSize);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsBorder_do);
            this.itemsBorder_do.setX(0);
            this.itemsBorder_do.setY(0);
            this.itemsBorder_do.setWidth(this.finalWidth);
            this.itemsBorder_do.setHeight(this.finalHeight);
            this.itemsBorder_do.setAlpha(1);
            FWDR3DCarModTweenMax.killTweensOf(this.currentItem_do);
            if (this.isMaximized_bl) {
                d = this.stageWidth / this.originalWidth;
                e = this.stageHeight / this.originalHeight;
                if (d >= e) f = d; else if (d <= e) f = e;
                this.currentItem_do.setX(parseInt((this.stageWidth - this.originalWidth * f) / 2));
                this.currentItem_do.setY(parseInt((this.stageHeight - this.originalHeight * f) / 2));
                this.currentItem_do.setWidth(parseInt(this.originalWidth * f));
                this.currentItem_do.setHeight(parseInt(this.originalHeight * f));
            } else {
                this.currentItem_do.setAlpha(1);
                this.currentItem_do.setX(0);
                this.currentItem_do.setY(0);
                this.currentItem_do.setWidth(this.finalWidth - 2 * this.borderSize);
                this.currentItem_do.setHeight(this.finalHeight - 2 * this.borderSize);
            }
            this.itemsHolder_do.setX(this.borderSize);
            this.itemsHolder_do.setY(this.borderSize);
            this.itemsHolder_do.setWidth(this.finalWidth - 2 * this.borderSize);
            this.itemsHolder_do.setHeight(this.finalHeight - 2 * this.borderSize);
        };
        this.goToNextItem = function() {
            if (this.isTweening_bl) return;
            this.transitionDirection_str = "next";
            this.id++;
            if (this.id > this.totalItems - 1) this.id = 0;
            this.showCurrentItem();
        };
        this.goToPrevItem = function() {
            if (this.isTweening_bl) return;
            this.transitionDirection_str = "prev";
            this.id--;
            if (this.id < 0) this.id = this.totalItems - 1;
            this.showCurrentItem();
        };
        this.maximizeOrMinimize = function() {
            if (this.isLoading_bl || d.isTweeningOnShowOrHide_bl) return;
            if (this.timerManager) this.timerManager.stop();
            var a;
            var c;
            var e;
            var f;
            var g;
            var h;
            var i;
            clearTimeout(this.maximizeCompleteTimeOutId_to);
            clearTimeout(this.minimizeCompleteTimeOutId_to);
            FWDR3DCarModTweenMax.killTweensOf(this.currentItem_do);
            if (this.isMaximized_bl) {
                this.isMaximized_bl = false;
                this.isTweening_bl = true;
                if (this.isMobile_bl) this.removeEventsForScrollngImageOnMobile(); else this.removeEventsForScrollngImageOnDesktop();
                this.bk_do.setAlpha(this.backgroundOpacity);
                this.mainItemsHolder_do.setVisible(true);
                this.closeButton_do.setVisible(true);
                if (d.nextButton_do) {
                    this.nextButton_do.setVisible(true);
                    this.prevButton_do.setVisible(true);
                }
                if (this.infoButton_do) this.infoButton_do.setVisible(true);
                if (this.slideshowButtton_do) this.slideshowButtton_do.setVisible(true);
                this.currentItem_do.setX(this.currentItem_do.getX() - this.finalX - this.borderSize);
                this.currentItem_do.setY(this.currentItem_do.getY() - this.finalY - this.borderSize);
                this.positionButtons(true);
                if (this.slideShowPreloader_do) this.positionSlideShowPreloader(false);
                FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                    x: 0,
                    y: 0,
                    w: this.finalWidth - 2 * this.borderSize,
                    h: this.finalHeight - 2 * this.borderSize,
                    ease: Expo.easeInOut
                });
                this.minimizeCompleteTimeOutId_to = setTimeout(this.minimizeCompleteHandler, 800);
                this.mainItemsHolder_do.setOverflow("visible");
                this.zoomButton_do.isMaximized_bl = false;
                this.itemsHolder_do.addChild(this.currentItem_do);
                this.addChild(this.mainItemsHolder_do);
                this.addChild(this.zoomButton_do);
                this.dispatchEvent(b.MINIMIZE_START);
            } else {
                this.isMaximized_bl = true;
                this.isTweening_bl = true;
                if (0 != d.borderRadius) d.currentItem_do.getStyle().borderRadius = "";
                a = this.stageWidth / this.originalWidth;
                c = this.stageHeight / this.originalHeight;
                i = 0;
                if (a >= c) i = a; else if (a <= c) i = c;
                g = parseInt(this.originalWidth * i);
                h = parseInt(this.originalHeight * i);
                e = parseInt((this.stageWidth - g) / 2);
                f = parseInt((this.stageHeight - h) / 2);
                this.currentItem_do.setAlpha(1);
                this.currentItem_do.setX(this.currentItem_do.getGlobalX());
                this.currentItem_do.setY(this.currentItem_do.getGlobalY());
                if (this.isMobile_bl) {
                    FWDR3DCarModTweenMax.to(this.zoomButton_do, .8, {
                        x: this.stageWidth - this.buttonWidth,
                        y: 1,
                        ease: Expo.easeInOut
                    });
                    FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                        x: e,
                        y: f,
                        w: g,
                        h: h,
                        ease: Expo.easeInOut
                    });
                } else {
                    this.zoomButton_do.isMaximized_bl = true;
                    if (a >= c) FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                        x: e,
                        w: g,
                        h: h,
                        ease: Expo.easeInOut
                    }); else if (a < c) FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                        y: f,
                        w: g,
                        h: h,
                        ease: Expo.easeInOut
                    });
                    this.addEventsForScrollngImageOnDesktop();
                }
                if (d.infoWindow_do) if (0 == d.infoButton_do.currentState) this.infoWindow_do.hide(false);
                this.itemsHolder_do.removeChild(this.currentItem_do);
                this.addChild(this.currentItem_do);
                this.addChild(this.zoomButton_do);
                this.maximizeCompleteTimeOutId_to = setTimeout(this.maximizeCompleteHandler, 800);
            }
        };
        this.maximizeCompleteHandler = function() {
            d.bk_do.setAlpha(1);
            d.mainItemsHolder_do.setVisible(false);
            d.closeButton_do.setVisible(false);
            if (d.nextButton_do) {
                d.nextButton_do.setVisible(false);
                d.prevButton_do.setVisible(false);
            }
            if (d.infoButton_do) d.infoButton_do.setVisible(false);
            if (d.slideshowButtton_do) {
                d.slideshowButtton_do.setVisible(false);
                d.slideShowPreloader_do.setX(3e3);
            }
            d.dispatchEvent(b.MAXIMIZE_COMPLETE);
            if (d.isMobile_bl) d.addEventsForScrollngImageOnMobile();
        };
        this.minimizeCompleteHandler = function() {
            if (d.infoWindow_do) if (0 == d.infoButton_do.currentState) d.infoWindow_do.show(true);
            if (d.showSlideshowButton_bl) d.timerManager.start();
            d.mainItemsHolder_do.setOverflow("hidden");
            if (0 != d.borderRadius) d.currentItem_do.getStyle().borderRadius = d.borderRadius + "px";
            d.itemsHolder_do.removeChild(d.currentItem_do);
            d.itemsHolder_do.addChild(d.currentItem_do);
            d.isTweening_bl = false;
        };
        this.addEventsForScrollngImageOnDesktop = function() {
            this.updateImageWhenMaximized_int = setInterval(this.updateMaximizedImageHandler, 16);
            if (a.addEventListener) a.addEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler); else document.attachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler);
        };
        this.removeEventsForScrollngImageOnDesktop = function() {
            clearInterval(this.updateImageWhenMaximized_int);
            if (a.addEventListener) a.removeEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler); else document.detachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler);
        };
        this.updateMaximizeImageOnMouseMovedHandler = function(a) {
            var b = FWDR3DCarUtils.getViewportMouseCoordinates(a);
            var c = FWDR3DCarUtils.getScrollOffsets();
            d.globalXMousePosition = b.screenX;
            d.globalYMousePosition = b.screenY;
            FWDR3DCarModTweenMax.to(d.zoomButton_do, .2, {
                x: d.globalXMousePosition - parseInt(d.buttonWidth / 2),
                y: d.globalYMousePosition - parseInt(d.buttonHeight / 2)
            });
        };
        this.updateMaximizedImageHandler = function() {
            var a;
            var b;
            d.percentX = d.globalXMousePosition / d.stageWidth;
            d.percentY = d.globalYMousePosition / d.stageHeight;
            if (d.percentX > 1) d.percentX = 1;
            if (d.percentY > 1) d.percentY = 1;
            var c = d.stageWidth / d.originalWidth;
            var e = d.stageHeight / d.originalHeight;
            if (c <= e) {
                a = Math.round((d.stageWidth - d.currentItem_do.getWidth()) * d.percentX);
                if (isNaN(a)) return;
                FWDR3DCarModTweenMax.to(d.currentItem_do, .4, {
                    x: a
                });
            } else {
                b = Math.round((d.stageHeight - d.currentItem_do.getHeight()) * d.percentY);
                if (isNaN(b)) return;
                FWDR3DCarModTweenMax.to(d.currentItem_do, .4, {
                    y: b
                });
            }
        };
        this.addEventsForScrollngImageOnMobile = function() {
            if (d.hasPointerEvent_bl) {
                a.addEventListener("MSPointerDown", d.onTouchStartScrollImage);
                a.addEventListener("MSPointerUp", d.onTouchEndScrollImage);
            } else {
                a.addEventListener("touchstart", d.onTouchStartScrollImage);
                a.addEventListener("touchend", d.onTouchEndScrollImage);
            }
            clearInterval(this.updateImageWhenMaximized_int);
            this.updateImageWhenMaximized_int = setInterval(this.updateMaximizedImageMobileHandler, 16);
        };
        this.removeEventsForScrollngImageOnMobile = function() {
            clearInterval(d.updateImageWhenMaximized_int);
            if (d.hasPointerEvent_bl) {
                a.removeEventListener("MSPointerDown", d.onTouchStartScrollImage);
                a.removeEventListener("MSPointerUp", d.onTouchEndScrollImage);
                a.removeEventListener("MSPointerMove", d.onTouchMoveScrollImage);
            } else {
                a.removeEventListener("touchstart", d.onTouchStartScrollImage);
                a.removeEventListener("touchend", d.onTouchEndScrollImage);
                a.removeEventListener("touchmove", d.onTouchMoveScrollImage);
            }
        };
        this.onTouchStartScrollImage = function(b) {
            var c = FWDR3DCarUtils.getViewportMouseCoordinates(b);
            if (d.hasPointerEvent_bl) a.addEventListener("MSPointerMove", d.onTouchMoveScrollImage); else a.addEventListener("touchmove", d.onTouchMoveScrollImage);
            d.lastPresedX = c.screenX;
            d.lastPresedY = c.screenY;
            b.preventDefault();
        };
        this.onTouchEndScrollImage = function(b) {
            if (d.hasPointerEvent_bl) a.removeEventListener("MSPointerMove", d.onTouchMoveScrollImage); else a.removeEventListener("touchmove", d.onTouchMoveScrollImage);
            d.isDragging_bl = false;
        };
        this.onTouchMoveScrollImage = function(a) {
            if (a.preventDefault) a.preventDefault();
            var b = FWDR3DCarUtils.getViewportMouseCoordinates(a);
            var c = d.stageWidth / d.originalWidth;
            var e = d.stageHeight / d.originalHeight;
            var f = 0;
            var g = 0;
            d.isDragging_bl = true;
            if (c < e) {
                f = b.screenX - d.lastPresedX;
                d.lastPresedX = b.screenX;
                d.currentItem_do.setX(d.currentItem_do.getX() + f);
            } else if (c > e) {
                g = b.screenY - d.lastPresedY;
                d.lastPresedY = b.screenY;
                d.currentItem_do.setY(d.currentItem_do.getY() + g);
            } else {
                f = b.screenX - d.lastPresedX;
                d.lastPresedX = b.screenX;
                d.currentItem_do.setX(d.currentItem_do.getX() + f);
                g = b.screenY - d.lastPresedY;
                d.lastPresedY = b.screenY;
                d.currentItem_do.setY(d.currentItem_do.getY() + g);
            }
            d.vx = 2 * f;
            d.vy = 2 * g;
        };
        this.updateMaximizedImageMobileHandler = function() {
            var a;
            var b;
            var c;
            var e;
            var f;
            var g;
            if (!d.isDragging_bl) {
                d.vy *= d.friction;
                d.vx *= d.friction;
                c = d.currentItem_do.getX();
                e = d.currentItem_do.getY();
                a = c + d.vx;
                b = e + d.vy;
                f = d.currentItem_do.getWidth();
                g = d.currentItem_do.getHeight();
                if (isNaN(a) || isNaN(b)) return;
                d.currentItem_do.setX(a);
                d.currentItem_do.setY(b);
                if (e >= 0) {
                    d.vy2 = .3 * (0 - e);
                    d.vy *= d.friction;
                    d.currentItem_do.setY(e + d.vy2);
                } else if (e <= d.stageHeight - g) {
                    d.vy2 = .5 * (d.stageHeight - g - e);
                    d.vy *= d.friction;
                    d.currentItem_do.setY(e + d.vy2);
                }
                if (c >= 0) {
                    d.vx2 = .3 * (0 - c);
                    d.vx *= d.friction;
                    d.currentItem_do.setX(c + d.vx2);
                } else if (c <= d.stageWidth - f) {
                    d.vx2 = .5 * (d.stageWidth - f - c);
                    d.vx *= d.friction;
                    d.currentItem_do.setX(c + d.vx2);
                }
            }
        };
        this.setupCloseButton = function() {
            FWDR3DCarSimpleButton.setPrototype();
            this.closeButton_do = new FWDR3DCarSimpleButton(this.closeN_img, this.closeS_img, this.isMobile_bl);
            this.closeButton_do.addListener(FWDR3DCarSimpleButton.CLICK, this.closeButtonOnClickHandler);
            this.addChild(this.closeButton_do);
        };
        this.closeButtonOnClickHandler = function(a) {
            d.hide();
        };
        this.setupNextAndPrevButtons = function() {
            FWDR3DCarSimpleButton.setPrototype();
            this.nextButton_do = new FWDR3DCarSimpleButton(this.nextN_img, this.nextS_img, this.isMobile_bl);
            this.nextButton_do.addListener(FWDR3DCarSimpleButton.CLICK, this.nextButtonOnClickHandler);
            FWDR3DCarSimpleButton.setPrototype();
            this.prevButton_do = new FWDR3DCarSimpleButton(this.prevN_img, this.prevS_img, this.isMobile_bl);
            this.prevButton_do.addListener(FWDR3DCarSimpleButton.CLICK, this.prevButtonOnClickHandler);
            this.addChild(this.nextButton_do);
            this.addChild(this.prevButton_do);
        };
        this.nextButtonOnClickHandler = function(a) {
            d.goToNextItem();
        };
        this.prevButtonOnClickHandler = function(a) {
            d.goToPrevItem();
        };
        this.setupZoomButton = function() {
            FWDR3DCarComplexButton.setPrototype();
            this.zoomButton_do = new FWDR3DCarComplexButton(this.minimizeN_img, this.minimizeS_img, this.maximizeN_img, this.maximizeS_img, this.isMobile_bl, true);
            this.zoomButton_do.addListener(FWDR3DCarComplexButton.CLICK, this.onZoomButtonClickHandler);
            this.addChild(this.zoomButton_do);
        };
        this.onZoomButtonClickHandler = function(a) {
            if (d.isLoading_bl) return;
            d.zoomButton_do.toggleButton();
            d.maximizeOrMinimize();
        };
        this.addZoomButtonBackToButtonsArray = function() {
            if (this.showZoomButton_bl) {
                var a = FWDR3DCarUtils.indexOfArray(this.buttons_ar, this.zoomButton_do);
                if (a == -1) {
                    if (this.buttons_ar.length > 1) {
                        this.zoomButton_do.setX(this.buttons_ar[this.buttons_ar.length - 2].finalX);
                        this.zoomButton_do.setY(this.buttons_ar[this.buttons_ar.length - 2].finalY + this.buttonHeight + 1);
                        this.buttons_ar.splice(this.buttons_ar.length - 1, 0, this.zoomButton_do);
                    } else {
                        this.zoomButton_do.setX(d.buttons_ar[this.buttons_ar.length - 1].finalX);
                        this.zoomButton_do.setY(d.buttons_ar[this.buttons_ar.length - 1].finalY + this.buttonHeight + 1);
                        this.buttons_ar.push(this.zoomButton_do);
                    }
                    this.addChild(this.zoomButton_do);
                }
            }
        };
        this.setupInfoButton = function() {
            FWDR3DCarComplexButton.setPrototype();
            this.infoButton_do = new FWDR3DCarComplexButton(this.infoCloseN_img, this.infoCloseS_img, this.infoOpenN_img, this.infoOpenS_img, this.isMobile_bl, false);
            this.infoButton_do.addListener(FWDR3DCarComplexButton.FIRST_BUTTON_CLICK, this.onHideInfoButtonPressedHandler);
            this.infoButton_do.addListener(FWDR3DCarComplexButton.SECOND_BUTTON_CLICK, this.onShowInfoButtonPressedHandler);
            this.addChild(this.infoButton_do);
        };
        this.onShowInfoButtonPressedHandler = function(a) {
            d.infoWindow_do.setText(d.data_ar[d.id].infoText, d.finalWidth, d.finalHeight, false, d.type_str != b.IMAGE);
            d.mainItemsHolder_do.addChild(d.infoWindow_do);
        };
        this.onHideInfoButtonPressedHandler = function(a) {
            d.infoWindow_do.hide(true);
        };
        this.showInfoWindowOnStart = function() {
            if (!d.infoWindow_do) return;
            if (this.infoButton_do) this.infoButton_do.setSecondButtonState();
            d.infoWindow_do.setText(d.data_ar[d.id].infoText, d.finalWidth, d.finalHeight, false, d.type_str != b.IMAGE);
            if (!d.mainItemsHolder_do.contains(d.infoWindow_do)) d.mainItemsHolder_do.addChild(d.infoWindow_do);
        };
        this.setupInfoWindow = function() {
            FWDR3DCarInfoWindow.setPrototype();
            this.infoWindow_do = new FWDR3DCarInfoWindow(this.borderSize, this.infoWindowBackgroundColor, this.infoWindowBackgroundOpacity, this.borderRadius, this.isMobile_bl);
        };
        this.setupSlideshowButton = function() {
            FWDR3DCarComplexButton.setPrototype();
            this.slideshowButtton_do = new FWDR3DCarComplexButton(this.pauseN_img, this.pauseS_img, this.playN_img, this.playS_img, this.isMobile_bl, false);
            this.slideshowButtton_do.addListener(FWDR3DCarComplexButton.FIRST_BUTTON_CLICK, this.onStopSlideShowHandler);
            this.slideshowButtton_do.addListener(FWDR3DCarComplexButton.SECOND_BUTTON_CLICK, this.onStartSlideShowHandler);
            if (this.slideShowAutoPlay_bl) {
                this.timerManager.isStopped_bl = false;
                this.slideShowPreloader_do.show(true);
                this.slideshowButtton_do.setSecondButtonState();
            }
            this.addChild(this.slideshowButtton_do);
        };
        this.onStopSlideShowHandler = function(a) {
            d.timerManager.isStopped_bl = true;
            d.slideShowPreloader_do.hide(true);
            d.timerManager.stop();
        };
        this.onStartSlideShowHandler = function(a) {
            d.timerManager.isStopped_bl = false;
            d.slideShowPreloader_do.show(true);
            if (!d.isLoading_bl) d.timerManager.start();
        };
        this.setupTimerManager = function() {
            FWDR3DCarTimerManager.setProtptype();
            this.timerManager = new FWDR3DCarTimerManager(this.slideShowDelay, this.slideShowAutoPlay_bl);
            this.timerManager.addListener(FWDR3DCarTimerManager.START, this.onTimerManagerStartHandler);
            this.timerManager.addListener(FWDR3DCarTimerManager.STOP, this.onTimerManagerStopHandler);
            this.timerManager.addListener(FWDR3DCarTimerManager.TIME, this.onTimerManagerTimeHandler);
        };
        this.onTimerManagerStartHandler = function() {
            if (!d.timerManager.isStopped_bl) d.slideShowPreloader_do.animIn();
        };
        this.onTimerManagerStopHandler = function() {
            d.slideShowPreloader_do.animOut();
        };
        this.onTimerManagerTimeHandler = function() {
            d.goToNextItem();
            d.slideShowPreloader_do.animOut();
        };
        this.setupSlideShowPreloader = function() {
            FWDR3DCarSlideShowPreloader.setPrototype();
            this.slideShowPreloader_do = new FWDR3DCarSlideShowPreloader(this.slideShowPreloader_img, 31, this.slideshowPreloaderHeight, 11, this.slideShowDelay);
            this.addChild(this.slideShowPreloader_do);
        };
        this.positionSlideShowPreloader = function(a) {
            if (!this.slideShowPreloader_do) return;
            this.slideShowPreloader_do.finalX = this.finalX + this.finalWidth;
            this.slideShowPreloader_do.finalY = this.finalY + this.finalHeight - this.slideshowPreloaderHeight;
            FWDR3DCarModTweenMax.killTweensOf(this.slideShowPreloader_do);
            if (a) FWDR3DCarModTweenMax.to(this.slideShowPreloader_do, .8, {
                x: this.slideShowPreloader_do.finalX,
                y: this.slideShowPreloader_do.finalY,
                delay: .1,
                ease: Expo.easeInOut
            }); else {
                this.slideShowPreloader_do.setX(this.slideShowPreloader_do.finalX);
                this.slideShowPreloader_do.setY(this.slideShowPreloader_do.finalY);
            }
        };
        this.positionButtons = function(a) {
            var b;
            var c = this.buttons_ar.length;
            var d = 1;
            var e = this.finalX + this.finalWidth;
            var f = this.finalY;
            var g = 0;
            for (var h = 0; h < c; h++) {
                b = this.buttons_ar[h];
                FWDR3DCarModTweenMax.killTweensOf(b);
                b.finalY = f + h * (this.buttonHeight + 1);
                if (b == this.nextButton_do) {
                    b.finalY = Math.round((this.stageHeight - this.buttonHeight) / 2);
                    if (b.finalY < this.buttons_ar[h - 1].finalY + this.buttonHeight + 1) b.finalY = this.buttons_ar[h - 1].finalY + this.buttonHeight + 1;
                }
                b.finalX = e;
                if (isNaN(b.finalX)) return;
                if (b) if (a) FWDR3DCarModTweenMax.to(b, .8, {
                    x: b.finalX,
                    y: b.finalY,
                    delay: .1,
                    ease: Expo.easeInOut
                }); else {
                    b.setX(b.finalX);
                    b.setY(b.finalY);
                }
            }
            if (this.showNextAndPrevButtons_bl) {
                FWDR3DCarModTweenMax.killTweensOf(this.prevButton_do);
                if (a) FWDR3DCarModTweenMax.to(this.prevButton_do, .8, {
                    x: this.finalX - this.buttonWidth,
                    y: Math.round((this.stageHeight - this.buttonHeight) / 2),
                    delay: .1,
                    ease: Expo.easeInOut
                }); else {
                    this.prevButton_do.setX(this.finalX - this.buttonWidth);
                    this.prevButton_do.setY(Math.round((this.stageHeight - this.buttonHeight) / 2));
                }
            }
            if (this.isMaximized_bl && this.zoomButton_do && this.isMobile_bl) {
                FWDR3DCarModTweenMax.killTweensOf(this.zoomButton_do);
                this.zoomButton_do.setX(this.stageWidth - this.buttonWidth);
                this.zoomButton_do.setY(1);
            }
            this.positionSlideShowPreloader(a);
        };
        this.setupPreloader = function() {
            FWDR3DCarPreloader.setPrototype();
            this.preloader_do = new FWDR3DCarPreloader(this.preloaderImg, 70, 40, 12, 50);
            this.preloader_do.addListener(FWDR3DCarPreloader.HIDE_COMPLETE, this.onPreloaderHideCompleteHandler);
        };
        this.positionPreloader = function() {
            if (this.preloader_do) {
                this.preloader_do.setX(parseInt((this.stageWidth - this.preloader_do.getWidth()) / 2));
                this.preloader_do.setY(Math.round((this.stageHeight - this.preloader_do.getHeight()) / 2));
            }
        };
        this.onPreloaderHideCompleteHandler = function() {
            d.removeChild(d.preloader_do);
        };
        this.addKeyboardSupport = function() {
            if (document.addEventListener) {
                document.addEventListener("keydown", this.onKeyDownHandler);
                document.addEventListener("keyup", this.onKeyUpHandler);
            } else {
                document.attachEvent("onkeydown", this.onKeyDownHandler);
                document.attachEvent("onkeyup", this.onKeyUpHandler);
            }
        };
        this.onKeyDownHandler = function(a) {
            if (39 == a.keyCode) d.goToNextItem(); else if (37 == a.keyCode) d.goToPrevItem();
            if (document.removeEventListener) document.removeEventListener("keydown", d.onKeyDownHandler); else document.detachEvent("onkeydown", d.onKeyDownHandler);
            if (a.preventDefault) a.preventDefault(); else return false;
        };
        this.onKeyUpHandler = function(a) {
            if (document.addEventListener) document.addEventListener("keydown", d.onKeyDownHandler); else document.attachEvent("onkeydown", d.onKeyDownHandler);
            if (a.preventDefault) a.preventDefault(); else return false;
        };
        this.hide = function() {
            if (d.isTweening_bl) return;
            d.isTweeningOnShowOrHide_bl = true;
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img.onerror = null;
            }
            this.clearMainEventsIntervalsAndTimeOuts();
            if (this.type_str == b.YOUTUBE || this.type_str == b.VIMEO || d.type_str == b.IFRAME) {
                if ("filter" == this.opacityType) this.currentItem_do.setVisible(false); else this.itemsHolder_do.removeChild(this.currentItem_do);
                FWDR3DCarModTweenMax.to(this.itemsBorder_do, .9, {
                    alpha: 0,
                    ease: Quint.easeOut
                });
                FWDR3DCarModTweenMax.to(this.mainItemsHolder_do, .9, {
                    x: this.stageWidth / 2,
                    y: this.stageHeight / 2,
                    w: 0,
                    h: 0,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(this.bk_do, .9, {
                    alpha: 0,
                    delay: .9,
                    ease: Quint.easeOut,
                    onComplete: this.onHideComplete
                });
            } else if (this.type_str == b.IMAGE) {
                if (this.currentItem_do && this.currentItem_do.screen) {
                    FWDR3DCarModTweenMax.killTweensOf(this.currentItem_do);
                    FWDR3DCarModTweenMax.to(this.currentItem_do, .7, {
                        alpha: 0,
                        ease: Quint.easeOut
                    });
                }
                FWDR3DCarModTweenMax.to(this.itemsBorder_do, .9, {
                    alpha: 0,
                    delay: .1,
                    ease: Quint.easeOut
                });
                FWDR3DCarModTweenMax.to(this.mainItemsHolder_do, .9, {
                    x: this.stageWidth / 2,
                    y: this.stageHeight / 2,
                    w: 0,
                    h: 0,
                    delay: .2,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(this.bk_do, .9, {
                    alpha: 0,
                    delay: 1.2,
                    ease: Quint.easeOut,
                    onComplete: this.onHideComplete
                });
            }
            this.preloader_do.hide(true);
            this.hideButtons(true);
            this.currentItem_do = null;
            this.prevItem_do = null;
            this.isTweening_bl = true;
            this.firstTimeShowed_bl = true;
            d.dispatchEvent(b.HIDE_START);
        };
        this.hideButtons = function(a) {
            if (a) {
                FWDR3DCarModTweenMax.to(this.closeButton_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                if (this.infoButton_do) FWDR3DCarModTweenMax.to(this.infoButton_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                if (this.slideshowButtton_do) FWDR3DCarModTweenMax.to(this.slideshowButtton_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                if (this.zoomButton_do) FWDR3DCarModTweenMax.to(this.zoomButton_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                if (this.nextButton_do) {
                    FWDR3DCarModTweenMax.to(this.nextButton_do, .8, {
                        x: this.stageWidth,
                        ease: Expo.easeInOut
                    });
                    FWDR3DCarModTweenMax.to(this.prevButton_do, .8, {
                        x: -this.buttonWidth,
                        ease: Expo.easeInOut
                    });
                }
                if (this.slideShowPreloader_do) FWDR3DCarModTweenMax.to(this.slideShowPreloader_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
            } else {
                this.closeButton_do.setVisible(false);
                if (this.infoButton_do) this.infoButton_do.setVisible(false);
                if (this.zoomButton_do) this.zoomButton_do.setVisible(false);
                if (this.slideshowButtton_do) this.slideshowButtton_do.setVisible(false);
                if (this.nextButton_do) {
                    this.nextButton_do.setVisible(false);
                    this.prevButton_do.setVisible(false);
                }
                if (this.slideShowPreloader_do) this.slideShowPreloader_do.image_do.setVisible(false);
            }
        };
        this.showButtons = function() {
            this.positionButtons(false);
            this.closeButton_do.setVisible(true);
            this.closeButton_do.setX(this.stageWidth);
            if (this.infoButton_do) {
                this.infoButton_do.setVisible(true);
                this.infoButton_do.setX(this.stageWidth);
            }
            if (this.zoomButton_do && (this.type_str != b.YOUTUBE || this.type_str != b.VIMEO || d.type_str == b.IFRAME)) {
                this.zoomButton_do.setVisible(true);
                this.zoomButton_do.setX(this.stageWidth);
            }
            if (this.slideshowButtton_do) {
                this.slideshowButtton_do.setVisible(true);
                this.slideshowButtton_do.setX(this.stageWidth);
            }
            if (this.nextButton_do) {
                this.nextButton_do.setVisible(true);
                this.nextButton_do.setX(this.stageWidth);
                this.prevButton_do.setVisible(true);
                this.prevButton_do.setX(-this.buttonWidth);
            }
            if (this.slideShowPreloader_do) {
                this.slideShowPreloader_do.image_do.setX(0);
                this.slideShowPreloader_do.setX(this.stageWidth);
                this.slideShowPreloader_do.image_do.setVisible(true);
            }
            this.positionButtons(true);
        };
        this.onHideComplete = function() {
            d.isShowed_bl = false;
            d.isTweeningOnShowOrHide_bl = false;
            d.stageWidth = 0;
            if (d.isMobile_bl) a.removeEventListener("touchmove", d.mouseDummyHandler); else if (a.removeEventListener) {
                a.removeEventListener("mousewheel", d.mouseDummyHandler);
                a.removeEventListener("DOMMouseScroll", d.mouseDummyHandler);
            } else if (document.detachEvent) document.detachEvent("onmousewheel", d.mouseDummyHandler);
            d.addZoomButtonBackToButtonsArray();
            d.screen.parentNode.removeChild(d.screen);
            d.dispatchEvent(b.HIDE_COMPLETE);
        };
        this.clearMainEventsIntervalsAndTimeOuts = function() {
            clearInterval(this.updateImageWhenMaximized_int);
            clearTimeout(this.transitionDoneId_to);
            clearTimeout(this.transitionShapeDoneId_to);
            clearTimeout(this.showVideoId_to);
            clearTimeout(this.maximizeCompleteTimeOutId_to);
            clearTimeout(this.minimizeCompleteTimeOutId_to);
            clearTimeout(this.showFirstTimeWithDelayId_to);
            clearTimeout(this.resizeHandlerId1_to);
            clearTimeout(this.resizeHandlerId2_to);
            clearTimeout(this.orientationChangeId_to);
            this.removeEventsForScrollngImageOnDesktop();
            if (this.timerManager) this.timerManager.stop();
            if (this.isMobile_bl) {
                if (d.hasPointerEvent_bl) {
                    a.removeEventListener("MSPointerDown", d.onTouchStartScrollImage);
                    a.removeEventListener("MSPointerUp", d.onTouchEndScrollImage);
                    a.removeEventListener("MSPointerMove", d.onTouchMoveScrollImage);
                    d.bk_do.screen.removeEventListener("MSPointerDown", d.onBkMouseDown);
                }
                a.removeEventListener("touchstart", d.onTouchStartScrollImage);
                a.removeEventListener("touchend", d.onTouchEndScrollImage);
                a.removeEventListener("touchmove", d.onTouchMoveScrollImage);
                d.bk_do.screen.removeEventListener("touchstart", d.onBkMouseDown);
            } else if (a.addEventListener) {
                a.removeEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler);
                d.bk_do.screen.removeEventListener("mousedown", d.onBkMouseDown);
            } else if (document.attachEvent) {
                document.detachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler);
                d.bk_do.screen.detachEvent("onmousedown", d.onBkMouseDown);
            }
            if (a.removeEventListener) {
                a.removeEventListener("resize", d.onResizeHandler);
                a.removeEventListener("scroll", d.onScrollHandler);
                a.removeEventListener("orientationchange", d.orientationChance);
                document.removeEventListener("fullscreenchange", d.onFullScreenChange);
                document.removeEventListener("mozfullscreenchange", d.onFullScreenChange);
            } else if (a.detachEvent) {
                a.detachEvent("onresize", d.onResizeHandler);
                a.detachEvent("onscroll", d.onScrollHandler);
            }
            if (this.addKeyboardSupport_bl) if (document.removeEventListener) {
                document.removeEventListener("keydown", this.onKeyDownHandler);
                document.removeEventListener("keyup", this.onKeyUpHandler);
            } else if (document.attachEvent) {
                document.detachEvent("onkeydown", this.onKeyDownHandler);
                document.detachEvent("onkeyup", this.onKeyUpHandler);
            }
        };
        this.destroy = function() {
            if (d.isMobile_bl) a.removeEventListener("touchmove", d.mouseDummyHandler); else if (a.removeEventListener) {
                a.removeEventListener("mousewheel", d.mouseDummyHandler);
                a.removeEventListener("DOMMouseScroll", d.mouseDummyHandler);
            } else if (document.detachEvent) document.detachEvent("onmousewheel", d.mouseDummyHandler);
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img.onerror = null;
            }
            if (this.slideShowPreloader_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.slideShowPreloader_do);
                this.slideShowPreloader_do.destroy();
            }
            this.info_do.destroy();
            if (this.infoWindow_do) this.infoWindow_do.destroy();
            if (this.timerManager) this.timerManager.destroy();
            this.preloader_do.destroy();
            if (this.customContextMenu) this.customContextMenu.destroy();
            this.clearMainEventsIntervalsAndTimeOuts();
            this.cleanChildren(0);
            if (this.nextButton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.nextButton_do);
                FWDR3DCarModTweenMax.killTweensOf(this.prevButton_do);
                this.nextButton_do.destroy();
                this.prevButton_do.destroy();
            }
            if (this.closeButton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.closeButton_do);
                this.closeButton_do.destroy();
            }
            if (this.zoomButton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.zoomButton_do);
                this.zoomButton_do.destroy();
            }
            if (this.infoButton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.infoButton_do);
                this.infoButton_do.destroy();
            }
            if (this.slideshowButtton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.slideshowButtton_do);
                this.slideshowButtton_do.destroy();
            }
            if (this.currentItem_do) if (this.contains(this.currentItem_do)) {
                FWDR3DCarModTweenMax.killTweensOf(this.currentItem_do);
                this.currentItem_do.destroy();
            }
            FWDR3DCarModTweenMax.killTweensOf(this.mainItemsHolder_do);
            FWDR3DCarModTweenMax.killTweensOf(this.bk_do);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsBackground_do);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsBorder_do);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsHolder_do);
            this.mainItemsHolder_do.destroy();
            this.bk_do.destroy();
            this.itemsBackground_do.destroy();
            this.itemsBorder_do.destroy();
            this.itemsHolder_do.destroy();
            this.image_img = null;
            this.closeN_img = null;
            this.closeS_img = null;
            this.nextN_img = null;
            this.nextS_img = null;
            this.prevN_img = null;
            this.prevS_img = null;
            this.maximizeN_img = null;
            this.maximizeS_img = null;
            this.minimizeN_img = null;
            this.minimizeS_img = null;
            this.pauseN_img = null;
            this.pauseS_img = null;
            this.playN_img = null;
            this.playS_img = null;
            this.infoOpenN_img = null;
            this.infoOpenS_img = null;
            this.infoCloseN_img = null;
            this.infoCloseS_img = null;
            this.preloaderImg = null;
            this.info_do = null;
            this.infoWindow_do = null;
            this.slideShowPreloader_do = null;
            this.timerManager = null;
            this.bk_do = null;
            this.mainItemsHolder_do = null;
            this.itemsBackground_do = null;
            this.itemsBorder_do = null;
            this.itemsHolder_do = null;
            this.currentItem_do = null;
            this.prevItem_do = null;
            this.closeButton_do = null;
            this.nextButton_do = null;
            this.prevButton_do = null;
            this.zoomButton_do = null;
            this.slideshowButtton_do = null;
            this.data_ar = null;
            c = null;
            d.setInnerHTML("");
            e.destroy();
            d = null;
            e = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject("div");
    };
    b.YOUTUBE = "youtube";
    b.VIMEO = "vimeo";
    b.IMAGE = "image_img";
    b.IFRAME = "htmlIframe";
    b.MAXIMIZE_COMPLETE = "maximizeComplete";
    b.MINIMIZE_START = "minimizeStart";
    b.SHOW_START = "showStart";
    b.HIDE_COMPLETE = "hideComplete";
    b.HIDE_START = "hideStart";
    b.prototype = null;
    a.FWDR3DCarLightBox = b;
}(window);

(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("FWDR3DCarModTweenMax", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        var d = [].slice, e = function(a, b, d) {
            c.call(this, a, b, d);
            this._cycle = 0;
            this._yoyo = true === this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._dirty = true;
        }, f = function(a) {
            return a.jquery || a.length && a[0] && a[0].nodeType && a[0].style;
        }, g = e.prototype = c.to({}, .1, {}), h = [];
        e.version = "1.9.7";
        g.constructor = e;
        g.kill()._gc = false;
        e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf;
        e.getTweensOf = c.getTweensOf;
        e.ticker = c.ticker;
        g.invalidate = function() {
            this._yoyo = true === this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return c.prototype.invalidate.call(this);
        };
        g.updateTo = function(a, b) {
            var d = this.ratio, e;
            if (b && this.timeline && this._startTime < this._timeline._time) {
                this._startTime = this._timeline._time;
                this._uncache(false);
                if (this._gc) this._enabled(true, false); else this._timeline.insert(this, this._startTime - this._delay);
            }
            for (e in a) this.vars[e] = a[e];
            if (this._initted) if (b) this._initted = false; else {
                if (this._notifyPluginsOfEnabled && this._firstPT) c._onPluginEvent("_onDisable", this);
                if (this._time / this._duration > .998) {
                    var f = this._time;
                    this.render(0, true, false);
                    this._initted = false;
                    this.render(f, true, false);
                } else if (this._time > 0) {
                    this._initted = false;
                    this._init();
                    var g = 1 / (1 - d), h = this._firstPT, i;
                    while (h) {
                        i = h.s + h.c;
                        h.c *= g;
                        h.s = i - h.c;
                        h = h._next;
                    }
                }
            }
            return this;
        };
        g.render = function(a, b, c) {
            var d = !this._dirty ? this._totalDuration : this.totalDuration(), e = this._time, f = this._totalTime, g = this._cycle, i, j, k, l, m, n, o;
            if (a >= d) {
                this._totalTime = d;
                this._cycle = this._repeat;
                if (this._yoyo && 0 !== (1 & this._cycle)) {
                    this._time = 0;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                } else {
                    this._time = this._duration;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
                }
                if (!this._reversed) {
                    i = true;
                    j = "onComplete";
                }
                if (0 === this._duration) {
                    if (0 === a || this._rawPrevTime < 0) if (this._rawPrevTime !== a) {
                        c = true;
                        if (this._rawPrevTime > 0) {
                            j = "onReverseComplete";
                            if (b) a = -1;
                        }
                    }
                    this._rawPrevTime = a;
                }
            } else if (a < 1e-7) {
                this._totalTime = this._time = this._cycle = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (0 !== f || 0 === this._duration && this._rawPrevTime > 0) {
                    j = "onReverseComplete";
                    i = this._reversed;
                }
                if (a < 0) {
                    this._active = false;
                    if (0 === this._duration) {
                        if (this._rawPrevTime >= 0) c = true;
                        this._rawPrevTime = a;
                    }
                } else if (!this._initted) c = true;
            } else {
                this._totalTime = this._time = a;
                if (0 !== this._repeat) {
                    l = this._duration + this._repeatDelay;
                    this._cycle = this._totalTime / l >> 0;
                    if (0 !== this._cycle) if (this._cycle === this._totalTime / l) this._cycle--;
                    this._time = this._totalTime - this._cycle * l;
                    if (this._yoyo) if (0 !== (1 & this._cycle)) this._time = this._duration - this._time;
                    if (this._time > this._duration) this._time = this._duration; else if (this._time < 0) this._time = 0;
                }
                if (this._easeType) {
                    m = this._time / this._duration;
                    n = this._easeType;
                    o = this._easePower;
                    if (1 === n || 3 === n && m >= .5) m = 1 - m;
                    if (3 === n) m *= 2;
                    if (1 === o) m *= m; else if (2 === o) m *= m * m; else if (3 === o) m *= m * m * m; else if (4 === o) m *= m * m * m * m;
                    if (1 === n) this.ratio = 1 - m; else if (2 === n) this.ratio = m; else if (this._time / this._duration < .5) this.ratio = m / 2; else this.ratio = 1 - m / 2;
                } else this.ratio = this._ease.getRatio(this._time / this._duration);
            }
            if (e === this._time && !c) {
                if (f !== this._totalTime) if (this._onUpdate) if (!b) this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h);
                return;
            } else if (!this._initted) {
                this._init();
                if (!this._initted) return;
                if (this._time && !i) this.ratio = this._ease.getRatio(this._time / this._duration); else if (i && this._ease._calcEnd) this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1);
            }
            if (!this._active) if (!this._paused) this._active = true;
            if (0 === f) {
                if (this._startAt) if (a >= 0) this._startAt.render(a, b, c); else if (!j) j = "_dummyGS";
                if (this.vars.onStart) if (0 !== this._totalTime || 0 === this._duration) if (!b) this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h);
            }
            k = this._firstPT;
            while (k) {
                if (k.f) k.t[k.p](k.c * this.ratio + k.s); else {
                    var p = k.c * this.ratio + k.s;
                    if ("x" == k.p) k.t.setX(p); else if ("y" == k.p) k.t.setY(p); else if ("z" == k.p) k.t.setZ(p); else if ("angleX" == k.p) k.t.setAngleX(p); else if ("angleY" == k.p) k.t.setAngleY(p); else if ("angleZ" == k.p) k.t.setAngleZ(p); else if ("w" == k.p) k.t.setWidth(p); else if ("h" == k.p) k.t.setHeight(p); else if ("alpha" == k.p) k.t.setAlpha(p); else if ("scale" == k.p) k.t.setScale2(p); else k.t[k.p] = p;
                }
                k = k._next;
            }
            if (this._onUpdate) {
                if (a < 0) if (this._startAt) this._startAt.render(a, b, c);
                if (!b) this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h);
            }
            if (this._cycle !== g) if (!b) if (!this._gc) if (this.vars.onRepeat) this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h);
            if (j) if (!this._gc) {
                if (a < 0 && this._startAt && !this._onUpdate) this._startAt.render(a, b, c);
                if (i) {
                    if (this._timeline.autoRemoveChildren) this._enabled(false, false);
                    this._active = false;
                }
                if (!b && this.vars[j]) this.vars[j].apply(this.vars[j + "Scope"] || this, this.vars[j + "Params"] || h);
            }
        };
        e.to = function(a, b, c) {
            return new e(a, b, c);
        };
        e.from = function(a, b, c) {
            c.runBackwards = true;
            c.immediateRender = false != c.immediateRender;
            return new e(a, b, c);
        };
        e.fromTo = function(a, b, c, d) {
            d.startAt = c;
            d.immediateRender = false != d.immediateRender && false != c.immediateRender;
            return new e(a, b, d);
        };
        e.staggerTo = e.allTo = function(a, b, g, i, j, k, l) {
            i = i || 0;
            var m = g.delay || 0, n = [], o = function() {
                if (g.onComplete) g.onComplete.apply(g.onCompleteScope || this, g.onCompleteParams || h);
                j.apply(l || this, k || h);
            }, p, q, r, s;
            if (!(a instanceof Array)) {
                if ("string" === typeof a) a = c.selector(a) || a;
                if (f(a)) a = d.call(a, 0);
            }
            p = a.length;
            for (r = 0; r < p; r++) {
                q = {};
                for (s in g) q[s] = g[s];
                q.delay = m;
                if (r === p - 1 && j) q.onComplete = o;
                n[r] = new e(a[r], b, q);
                m += i;
            }
            return n;
        };
        e.staggerFrom = e.allFrom = function(a, b, c, d, f, g, h) {
            c.runBackwards = true;
            c.immediateRender = false != c.immediateRender;
            return e.staggerTo(a, b, c, d, f, g, h);
        };
        e.staggerFromTo = e.allFromTo = function(a, b, c, d, f, g, h, i) {
            d.startAt = c;
            d.immediateRender = false != d.immediateRender && false != c.immediateRender;
            return e.staggerTo(a, b, d, f, g, h, i);
        };
        e.delayedCall = function(a, b, c, d, f) {
            return new e(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: false,
                useFrames: f,
                overwrite: 0
            });
        };
        e.set = function(a, b) {
            return new e(a, 0, b);
        };
        e.isTweening = function(a) {
            var b = c.getTweensOf(a), d = b.length, e;
            while (--d > -1) {
                e = b[d];
                if (e._active || e._startTime === e._timeline._time && e._timeline._active) return true;
            }
            return false;
        };
        var i = function(a, b) {
            var d = [], e = 0, f = a._first;
            while (f) {
                if (f instanceof c) d[e++] = f; else {
                    if (b) d[e++] = f;
                    d = d.concat(i(f, b));
                    e = d.length;
                }
                f = f._next;
            }
            return d;
        }, j = e.getAllTweens = function(b) {
            return i(a._rootTimeline, b).concat(i(a._rootFramesTimeline, b));
        };
        e.killAll = function(a, c, d, e) {
            if (null == c) c = true;
            if (null == d) d = true;
            var f = j(false != e), g = f.length, h = c && d && e, i, k, l;
            for (l = 0; l < g; l++) {
                k = f[l];
                if (h || k instanceof b || (i = k.target === k.vars.onComplete) && d || c && !i) if (a) k.totalTime(k.totalDuration()); else k._enabled(false, false);
            }
        };
        e.killChildTweensOf = function(a, b) {
            if (null == a) return;
            var g = c._tweenLookup, h, i, j, k, l;
            if ("string" === typeof a) a = c.selector(a) || a;
            if (f(a)) a = d(a, 0);
            if (a instanceof Array) {
                k = a.length;
                while (--k > -1) e.killChildTweensOf(a[k], b);
                return;
            }
            h = [];
            for (j in g) {
                i = g[j].target.parentNode;
                while (i) {
                    if (i === a) h = h.concat(g[j].tweens);
                    i = i.parentNode;
                }
            }
            l = h.length;
            for (k = 0; k < l; k++) {
                if (b) h[k].totalTime(h[k].totalDuration());
                h[k]._enabled(false, false);
            }
        };
        var k = function(a, c, d, e) {
            if (void 0 === c) c = true;
            if (void 0 === d) d = true;
            var f = j(e), g = c && d && e, h = f.length, i, k;
            while (--h > -1) {
                k = f[h];
                if (g || k instanceof b || (i = k.target === k.vars.onComplete) && d || c && !i) k.paused(a);
            }
        };
        e.pauseAll = function(a, b, c) {
            k(true, a, b, c);
        };
        e.resumeAll = function(a, b, c) {
            k(false, a, b, c);
        };
        g.progress = function(a) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), false);
        };
        g.totalProgress = function(a) {
            return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * a, false);
        };
        g.time = function(a, b) {
            if (!arguments.length) return this._time;
            if (this._dirty) this.totalDuration();
            if (a > this._duration) a = this._duration;
            if (this._yoyo && 0 !== (1 & this._cycle)) a = this._duration - a + this._cycle * (this._duration + this._repeatDelay); else if (0 !== this._repeat) a += this._cycle * (this._duration + this._repeatDelay);
            return this.totalTime(a, b);
        };
        g.duration = function(b) {
            if (!arguments.length) return this._duration;
            return a.prototype.duration.call(this, b);
        };
        g.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
                    this._dirty = false;
                }
                return this._totalDuration;
            }
            return this._repeat === -1 ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1));
        };
        g.repeat = function(a) {
            if (!arguments.length) return this._repeat;
            this._repeat = a;
            return this._uncache(true);
        };
        g.repeatDelay = function(a) {
            if (!arguments.length) return this._repeatDelay;
            this._repeatDelay = a;
            return this._uncache(true);
        };
        g.yoyo = function(a) {
            if (!arguments.length) return this._yoyo;
            this._yoyo = a;
            return this;
        };
        return e;
    }, true);
    window._gsDefine("TimelineLite", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        var d = function(a) {
            b.call(this, a);
            this._labels = {};
            this.autoRemoveChildren = true === this.vars.autoRemoveChildren;
            this.smoothChildTiming = true === this.vars.smoothChildTiming;
            this._sortChildren = true;
            this._onUpdate = this.vars.onUpdate;
            var c = this.vars, d = e.length, f, g;
            while (--d > -1) {
                g = c[e[d]];
                if (g) {
                    f = g.length;
                    while (--f > -1) if ("{self}" === g[f]) {
                        g = c[e[d]] = g.concat();
                        g[f] = this;
                    }
                }
            }
            if (c.tweens instanceof Array) this.add(c.tweens, 0, c.align, c.stagger);
        }, e = [ "onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams" ], f = [], g = function(a) {
            var b = {}, c;
            for (c in a) b[c] = a[c];
            return b;
        }, h = f.slice, i = d.prototype = new b();
        d.version = "1.9.7";
        i.constructor = d;
        i.kill()._gc = false;
        i.to = function(a, b, d, e) {
            return b ? this.add(new c(a, b, d), e) : this.set(a, d, e);
        };
        i.from = function(a, b, d, e) {
            return this.add(c.from(a, b, d), e);
        };
        i.fromTo = function(a, b, d, e, f) {
            return b ? this.add(c.fromTo(a, b, d, e), f) : this.set(a, e, f);
        };
        i.staggerTo = function(a, b, e, f, i, j, k, l) {
            var m = new d({
                onComplete: j,
                onCompleteParams: k,
                onCompleteScope: l
            }), n;
            if ("string" === typeof a) a = c.selector(a) || a;
            if (!(a instanceof Array) && a.length && a[0] && a[0].nodeType && a[0].style) a = h.call(a, 0);
            f = f || 0;
            for (n = 0; n < a.length; n++) {
                if (e.startAt) e.startAt = g(e.startAt);
                m.to(a[n], b, g(e), n * f);
            }
            return this.add(m, i);
        };
        i.staggerFrom = function(a, b, c, d, e, f, g, h) {
            c.immediateRender = false != c.immediateRender;
            c.runBackwards = true;
            return this.staggerTo(a, b, c, d, e, f, g, h);
        };
        i.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            d.startAt = c;
            d.immediateRender = false != d.immediateRender && false != c.immediateRender;
            return this.staggerTo(a, b, d, e, f, g, h, i);
        };
        i.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
        };
        i.set = function(a, b, d) {
            d = this._parseTimeOrLabel(d, 0, true);
            if (null == b.immediateRender) b.immediateRender = d === this._time && !this._paused;
            return this.add(new c(a, 0, b), d);
        };
        d.exportRoot = function(a, b) {
            a = a || {};
            if (null == a.smoothChildTiming) a.smoothChildTiming = true;
            var e = new d(a), f = e._timeline, g, h;
            if (null == b) b = true;
            f._remove(e, true);
            e._startTime = 0;
            e._rawPrevTime = e._time = e._totalTime = f._time;
            g = f._first;
            while (g) {
                h = g._next;
                if (!b || !(g instanceof c && g.target === g.vars.onComplete)) e.add(g, g._startTime - g._delay);
                g = h;
            }
            f.add(e, 0);
            return e;
        };
        i.add = function(e, f, g, h) {
            var i, j, k, l, m;
            if ("number" !== typeof f) f = this._parseTimeOrLabel(f, 0, true, e);
            if (!(e instanceof a)) if (e instanceof Array) {
                g = g || "normal";
                h = h || 0;
                i = f;
                j = e.length;
                for (k = 0; k < j; k++) {
                    if ((l = e[k]) instanceof Array) l = new d({
                        tweens: l
                    });
                    this.add(l, i);
                    if ("string" !== typeof l && "function" !== typeof l) if ("sequence" === g) i = l._startTime + l.totalDuration() / l._timeScale; else if ("start" === g) l._startTime -= l.delay();
                    i += h;
                }
                return this._uncache(true);
            } else if ("string" === typeof e) return this.addLabel(e, f); else if ("function" === typeof e) e = c.delayedCall(0, e); else throw "Cannot add " + e + " into the timeline; it is neither a tween, timeline, function, nor a string.";
            b.prototype.add.call(this, e, f);
            if (this._gc) if (!this._paused) if (this._time === this._duration) if (this._time < this.duration()) {
                m = this;
                while (m._gc && m._timeline) {
                    if (m._timeline.smoothChildTiming) m.totalTime(m._totalTime, true); else m._enabled(true, false);
                    m = m._timeline;
                }
            }
            return this;
        };
        i.remove = function(b) {
            if (b instanceof a) return this._remove(b, false); else if (b instanceof Array) {
                var c = b.length;
                while (--c > -1) this.remove(b[c]);
                return this;
            } else if ("string" === typeof b) return this.removeLabel(b);
            return this.kill(null, b);
        };
        i.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, true, a));
        };
        i.insert = i.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d);
        };
        i.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, true, a), c, d);
        };
        i.addLabel = function(a, b) {
            this._labels[a] = this._parseTimeOrLabel(b);
            return this;
        };
        i.removeLabel = function(a) {
            delete this._labels[a];
            return this;
        };
        i.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1;
        };
        i._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e); else if (e instanceof Array) {
                f = e.length;
                while (--f > -1) if (e[f] instanceof a && e[f].timeline === this) this.remove(e[f]);
            }
            if ("string" === typeof c) return this._parseTimeOrLabel(c, d && "number" === typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            c = c || 0;
            if ("string" === typeof b && (isNaN(b) || null != this._labels[b])) {
                f = b.indexOf("=");
                if (f === -1) {
                    if (null == this._labels[b]) return d ? this._labels[b] = this.duration() + c : c;
                    return this._labels[b] + c;
                }
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1));
                b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration();
            } else if (null == b) b = this.duration();
            return Number(b) + c;
        };
        i.seek = function(a, b) {
            return this.totalTime("number" === typeof a ? a : this._parseTimeOrLabel(a), false !== b);
        };
        i.stop = function() {
            return this.paused(true);
        };
        i.gotoAndPlay = function(a, b) {
            return this.play(a, b);
        };
        i.gotoAndStop = function(a, b) {
            return this.pause(a, b);
        };
        i.render = function(a, b, c) {
            if (this._gc) this._enabled(true, false);
            this._active = !this._paused;
            var d = !this._dirty ? this._totalDuration : this.totalDuration(), e = this._time, g = this._startTime, h = this._timeScale, i = this._paused, j, k, l, m, n;
            if (a >= d) {
                this._totalTime = this._time = d;
                if (!this._reversed) if (!this._hasPausedChild()) {
                    k = true;
                    m = "onComplete";
                    if (0 === this._duration) if (0 === a || this._rawPrevTime < 0) if (this._rawPrevTime !== a && this._first) {
                        n = true;
                        if (this._rawPrevTime > 0) m = "onReverseComplete";
                    }
                }
                this._rawPrevTime = a;
                a = d + 1e-6;
            } else if (a < 1e-7) {
                this._totalTime = this._time = 0;
                if (0 !== e || 0 === this._duration && this._rawPrevTime > 0) {
                    m = "onReverseComplete";
                    k = this._reversed;
                }
                if (a < 0) {
                    this._active = false;
                    if (0 === this._duration) if (this._rawPrevTime >= 0 && this._first) n = true;
                } else if (!this._initted) n = true;
                this._rawPrevTime = a;
                a = 0;
            } else this._totalTime = this._time = this._rawPrevTime = a;
            if ((this._time === e || !this._first) && !c && !n) return; else if (!this._initted) this._initted = true;
            if (0 === e) if (this.vars.onStart) if (0 !== this._time) if (!b) this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f);
            if (this._time >= e) {
                j = this._first;
                while (j) {
                    l = j._next;
                    if (this._paused && !i) break; else if (j._active || j._startTime <= this._time && !j._paused && !j._gc) if (!j._reversed) j.render((a - j._startTime) * j._timeScale, b, c); else j.render((!j._dirty ? j._totalDuration : j.totalDuration()) - (a - j._startTime) * j._timeScale, b, c);
                    j = l;
                }
            } else {
                j = this._last;
                while (j) {
                    l = j._prev;
                    if (this._paused && !i) break; else if (j._active || j._startTime <= e && !j._paused && !j._gc) if (!j._reversed) j.render((a - j._startTime) * j._timeScale, b, c); else j.render((!j._dirty ? j._totalDuration : j.totalDuration()) - (a - j._startTime) * j._timeScale, b, c);
                    j = l;
                }
            }
            if (this._onUpdate) if (!b) this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f);
            if (m) if (!this._gc) if (g === this._startTime || h !== this._timeScale) if (0 === this._time || d >= this.totalDuration()) {
                if (k) {
                    if (this._timeline.autoRemoveChildren) this._enabled(false, false);
                    this._active = false;
                }
                if (!b && this.vars[m]) this.vars[m].apply(this.vars[m + "Scope"] || this, this.vars[m + "Params"] || f);
            }
        };
        i._hasPausedChild = function() {
            var a = this._first;
            while (a) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return true;
                a = a._next;
            }
            return false;
        };
        i.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            var f = [], g = this._first, h = 0;
            while (g) {
                if (g._startTime < e) ; else if (g instanceof c) {
                    if (false !== b) f[h++] = g;
                } else {
                    if (false !== d) f[h++] = g;
                    if (false !== a) {
                        f = f.concat(g.getChildren(true, b, d));
                        h = f.length;
                    }
                }
                g = g._next;
            }
            return f;
        };
        i.getTweensOf = function(a, b) {
            var d = c.getTweensOf(a), e = d.length, f = [], g = 0;
            while (--e > -1) if (d[e].timeline === this || b && this._contains(d[e])) f[g++] = d[e];
            return f;
        };
        i._contains = function(a) {
            var b = a.timeline;
            while (b) {
                if (b === this) return true;
                b = b.timeline;
            }
            return false;
        };
        i.shiftChildren = function(a, b, c) {
            c = c || 0;
            var d = this._first, e = this._labels, f;
            while (d) {
                if (d._startTime >= c) d._startTime += a;
                d = d._next;
            }
            if (b) for (f in e) if (e[f] >= c) e[f] += a;
            return this._uncache(true);
        };
        i._kill = function(a, b) {
            if (!a && !b) return this._enabled(false, false);
            var c = !b ? this.getChildren(true, true, false) : this.getTweensOf(b), d = c.length, e = false;
            while (--d > -1) if (c[d]._kill(a, b)) e = true;
            return e;
        };
        i.clear = function(a) {
            var b = this.getChildren(false, true, true), c = b.length;
            this._time = this._totalTime = 0;
            while (--c > -1) b[c]._enabled(false, false);
            if (false !== a) this._labels = {};
            return this._uncache(true);
        };
        i.invalidate = function() {
            var a = this._first;
            while (a) {
                a.invalidate();
                a = a._next;
            }
            return this;
        };
        i._enabled = function(a, c) {
            if (a === this._gc) {
                var d = this._first;
                while (d) {
                    d._enabled(a, true);
                    d = d._next;
                }
            }
            return b.prototype._enabled.call(this, a, c);
        };
        i.progress = function(a) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * a, false);
        };
        i.duration = function(a) {
            if (!arguments.length) {
                if (this._dirty) this.totalDuration();
                return this._duration;
            }
            if (0 !== this.duration() && 0 !== a) this.timeScale(this._duration / a);
            return this;
        };
        i.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    var b = 0, c = this._last, d = 999999999999, e, f;
                    while (c) {
                        e = c._prev;
                        if (c._dirty) c.totalDuration();
                        if (c._startTime > d && this._sortChildren && !c._paused) this.add(c, c._startTime - c._delay); else d = c._startTime;
                        if (c._startTime < 0 && !c._paused) {
                            b -= c._startTime;
                            if (this._timeline.smoothChildTiming) this._startTime += c._startTime / this._timeScale;
                            this.shiftChildren(-c._startTime, false, -9999999999);
                            d = 0;
                        }
                        f = c._startTime + c._totalDuration / c._timeScale;
                        if (f > b) b = f;
                        c = e;
                    }
                    this._duration = this._totalDuration = b;
                    this._dirty = false;
                }
                return this._totalDuration;
            }
            if (0 !== this.totalDuration()) if (0 !== a) this.timeScale(this._totalDuration / a);
            return this;
        };
        i.usesFrames = function() {
            var b = this._timeline;
            while (b._timeline) b = b._timeline;
            return b === a._rootFramesTimeline;
        };
        i.rawTime = function() {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
        };
        return d;
    }, true);
    window._gsDefine("TimelineMax", [ "TimelineLite", "TweenLite", "easing.Ease" ], function(a, b, c) {
        var d = function(b) {
            a.call(this, b);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = true === this.vars.yoyo;
            this._dirty = true;
        }, e = [], f = new c(null, null, 1, 0), g = function(a) {
            while (a) {
                if (a._paused) return true;
                a = a._timeline;
            }
            return false;
        }, h = d.prototype = new a();
        h.constructor = d;
        h.kill()._gc = false;
        d.version = "1.9.7";
        h.invalidate = function() {
            this._yoyo = true === this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return a.prototype.invalidate.call(this);
        };
        h.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
        };
        h.removeCallback = function(a, b) {
            if (null == b) this._kill(null, a); else {
                var c = this.getTweensOf(a, false), d = c.length, e = this._parseTimeOrLabel(b);
                while (--d > -1) if (c[d]._startTime === e) c[d]._enabled(false, false);
            }
            return this;
        };
        h.tweenTo = function(a, c) {
            c = c || {};
            var d = {
                ease: f,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: false
            }, g, h;
            for (g in c) d[g] = c[g];
            d.time = this._parseTimeOrLabel(a);
            h = new b(this, Math.abs(Number(d.time) - this._time) / this._timeScale || .001, d);
            d.onStart = function() {
                h.target.paused(true);
                if (h.vars.time !== h.target.time()) h.duration(Math.abs(h.vars.time - h.target.time()) / h.target._timeScale);
                if (c.onStart) c.onStart.apply(c.onStartScope || h, c.onStartParams || e);
            };
            return h;
        };
        h.tweenFromTo = function(a, b, c) {
            c = c || {};
            a = this._parseTimeOrLabel(a);
            c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [ a ],
                onCompleteScope: this
            };
            c.immediateRender = false !== c.immediateRender;
            var d = this.tweenTo(b, c);
            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
        };
        h.render = function(a, b, c) {
            if (this._gc) this._enabled(true, false);
            this._active = !this._paused;
            var d = !this._dirty ? this._totalDuration : this.totalDuration(), f = this._duration, g = this._time, h = this._totalTime, i = this._startTime, j = this._timeScale, k = this._rawPrevTime, l = this._paused, m = this._cycle, n, o, p, q, r, s;
            if (a >= d) {
                if (!this._locked) {
                    this._totalTime = d;
                    this._cycle = this._repeat;
                }
                if (!this._reversed) if (!this._hasPausedChild()) {
                    o = true;
                    q = "onComplete";
                    if (0 === f) if (0 === a || this._rawPrevTime < 0) if (this._rawPrevTime !== a && this._first) {
                        r = true;
                        if (this._rawPrevTime > 0) q = "onReverseComplete";
                    }
                }
                this._rawPrevTime = a;
                if (this._yoyo && 0 !== (1 & this._cycle)) this._time = a = 0; else {
                    this._time = f;
                    a = f + 1e-6;
                }
            } else if (a < 1e-7) {
                if (!this._locked) this._totalTime = this._cycle = 0;
                this._time = 0;
                if (0 !== g || 0 === f && this._rawPrevTime > 0 && !this._locked) {
                    q = "onReverseComplete";
                    o = this._reversed;
                }
                if (a < 0) {
                    this._active = false;
                    if (0 === f) if (this._rawPrevTime >= 0 && this._first) r = true;
                } else if (!this._initted) r = true;
                this._rawPrevTime = a;
                a = 0;
            } else {
                this._time = this._rawPrevTime = a;
                if (!this._locked) {
                    this._totalTime = a;
                    if (0 !== this._repeat) {
                        s = f + this._repeatDelay;
                        this._cycle = this._totalTime / s >> 0;
                        if (0 !== this._cycle) if (this._cycle === this._totalTime / s) this._cycle--;
                        this._time = this._totalTime - this._cycle * s;
                        if (this._yoyo) if (0 !== (1 & this._cycle)) this._time = f - this._time;
                        if (this._time > f) {
                            this._time = f;
                            a = f + 1e-6;
                        } else if (this._time < 0) this._time = a = 0; else a = this._time;
                    }
                }
            }
            if (this._cycle !== m) if (!this._locked) {
                var t = this._yoyo && 0 !== (1 & m), u = t === (this._yoyo && 0 !== (1 & this._cycle)), v = this._totalTime, w = this._cycle, x = this._rawPrevTime, y = this._time;
                this._totalTime = m * f;
                if (this._cycle < m) t = !t; else this._totalTime += f;
                this._time = g;
                this._rawPrevTime = 0 === f ? k - 1e-5 : k;
                this._cycle = m;
                this._locked = true;
                g = t ? 0 : f;
                this.render(g, b, 0 === f);
                if (!b) if (!this._gc) if (this.vars.onRepeat) this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e);
                if (u) {
                    g = t ? f + 1e-6 : -1e-6;
                    this.render(g, true, false);
                }
                this._time = y;
                this._totalTime = v;
                this._cycle = w;
                this._rawPrevTime = x;
                this._locked = false;
            }
            if ((this._time === g || !this._first) && !c && !r) {
                if (h !== this._totalTime) if (this._onUpdate) if (!b) this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e);
                return;
            } else if (!this._initted) this._initted = true;
            if (0 === h) if (this.vars.onStart) if (0 !== this._totalTime) if (!b) this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e);
            if (this._time >= g) {
                n = this._first;
                while (n) {
                    p = n._next;
                    if (this._paused && !l) break; else if (n._active || n._startTime <= this._time && !n._paused && !n._gc) if (!n._reversed) n.render((a - n._startTime) * n._timeScale, b, c); else n.render((!n._dirty ? n._totalDuration : n.totalDuration()) - (a - n._startTime) * n._timeScale, b, c);
                    n = p;
                }
            } else {
                n = this._last;
                while (n) {
                    p = n._prev;
                    if (this._paused && !l) break; else if (n._active || n._startTime <= g && !n._paused && !n._gc) if (!n._reversed) n.render((a - n._startTime) * n._timeScale, b, c); else n.render((!n._dirty ? n._totalDuration : n.totalDuration()) - (a - n._startTime) * n._timeScale, b, c);
                    n = p;
                }
            }
            if (this._onUpdate) if (!b) this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e);
            if (q) if (!this._locked) if (!this._gc) if (i === this._startTime || j !== this._timeScale) if (0 === this._time || d >= this.totalDuration()) {
                if (o) {
                    if (this._timeline.autoRemoveChildren) this._enabled(false, false);
                    this._active = false;
                }
                if (!b && this.vars[q]) this.vars[q].apply(this.vars[q + "Scope"] || this, this.vars[q + "Params"] || e);
            }
        };
        h.getActive = function(a, b, c) {
            if (null == a) a = true;
            if (null == b) b = true;
            if (null == c) c = false;
            var d = [], e = this.getChildren(a, b, c), f = 0, h = e.length, i, j;
            for (i = 0; i < h; i++) {
                j = e[i];
                if (!j._paused) if (j._timeline._time >= j._startTime) if (j._timeline._time < j._startTime + j._totalDuration / j._timeScale) if (!g(j._timeline)) d[f++] = j;
            }
            return d;
        };
        h.getLabelAfter = function(a) {
            if (!a) if (0 !== a) a = this._time;
            var b = this.getLabelsArray(), c = b.length, d;
            for (d = 0; d < c; d++) if (b[d].time > a) return b[d].name;
            return null;
        };
        h.getLabelBefore = function(a) {
            if (null == a) a = this._time;
            var b = this.getLabelsArray(), c = b.length;
            while (--c > -1) if (b[c].time < a) return b[c].name;
            return null;
        };
        h.getLabelsArray = function() {
            var a = [], b = 0, c;
            for (c in this._labels) a[b++] = {
                time: this._labels[c],
                name: c
            };
            a.sort(function(a, b) {
                return a.time - b.time;
            });
            return a;
        };
        h.progress = function(a) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), false);
        };
        h.totalProgress = function(a) {
            return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * a, false);
        };
        h.totalDuration = function(b) {
            if (!arguments.length) {
                if (this._dirty) {
                    a.prototype.totalDuration.call(this);
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
                }
                return this._totalDuration;
            }
            return this._repeat === -1 ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1));
        };
        h.time = function(a, b) {
            if (!arguments.length) return this._time;
            if (this._dirty) this.totalDuration();
            if (a > this._duration) a = this._duration;
            if (this._yoyo && 0 !== (1 & this._cycle)) a = this._duration - a + this._cycle * (this._duration + this._repeatDelay); else if (0 !== this._repeat) a += this._cycle * (this._duration + this._repeatDelay);
            return this.totalTime(a, b);
        };
        h.repeat = function(a) {
            if (!arguments.length) return this._repeat;
            this._repeat = a;
            return this._uncache(true);
        };
        h.repeatDelay = function(a) {
            if (!arguments.length) return this._repeatDelay;
            this._repeatDelay = a;
            return this._uncache(true);
        };
        h.yoyo = function(a) {
            if (!arguments.length) return this._yoyo;
            this._yoyo = a;
            return this;
        };
        h.currentLabel = function(a) {
            if (!arguments.length) return this.getLabelBefore(this._time + 1e-8);
            return this.seek(a, true);
        };
        return d;
    }, true);
    !function() {
        var a = 180 / Math.PI, b = Math.PI / 180, c = [], d = [], e = [], f = {}, g = function(a, b, c, d) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.da = d - a;
            this.ca = c - a;
            this.ba = b - a;
        }, h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", i = function(a, b, c, d) {
            var e = {
                a: a
            }, f = {}, g = {}, h = {
                c: d
            }, i = (a + b) / 2, j = (b + c) / 2, k = (c + d) / 2, l = (i + j) / 2, m = (j + k) / 2, n = (m - l) / 8;
            e.b = i + (a - i) / 4;
            f.b = l + n;
            e.c = f.a = (e.b + f.b) / 2;
            f.c = g.a = (l + m) / 2;
            g.b = m - n;
            h.b = k + (d - k) / 4;
            g.c = h.a = (g.b + h.b) / 2;
            return [ e, f, g, h ];
        }, j = function(a, b, f, g, h) {
            var j = a.length - 1, k = 0, l = a[0].a, m, n, o, p, q, r, s, t, u, v, w, x, y;
            for (m = 0; m < j; m++) {
                q = a[k];
                n = q.a;
                o = q.d;
                p = a[k + 1].d;
                if (h) {
                    w = c[m];
                    x = d[m];
                    y = (x + w) * b * .25 / (g ? .5 : e[m] || .5);
                    r = o - (o - n) * (g ? .5 * b : 0 !== w ? y / w : 0);
                    s = o + (p - o) * (g ? .5 * b : 0 !== x ? y / x : 0);
                    t = o - (r + ((s - r) * (3 * w / (w + x) + .5) / 4 || 0));
                } else {
                    r = o - (o - n) * b * .5;
                    s = o + (p - o) * b * .5;
                    t = o - (r + s) / 2;
                }
                r += t;
                s += t;
                q.c = u = r;
                if (0 !== m) q.b = l; else q.b = l = q.a + .6 * (q.c - q.a);
                q.da = o - n;
                q.ca = u - n;
                q.ba = l - n;
                if (f) {
                    v = i(n, l, u, o);
                    a.splice(k, 1, v[0], v[1], v[2], v[3]);
                    k += 4;
                } else k++;
                l = s;
            }
            q = a[k];
            q.b = l;
            q.c = l + .4 * (q.d - l);
            q.da = q.d - q.a;
            q.ca = q.c - q.a;
            q.ba = l - q.a;
            if (f) {
                v = i(q.a, l, q.c, q.d);
                a.splice(k, 1, v[0], v[1], v[2], v[3]);
            }
        }, k = function(a, b, e, f) {
            var h = [], i, j, k, l, m, n;
            if (f) {
                a = [ f ].concat(a);
                j = a.length;
                while (--j > -1) if ("string" === typeof (n = a[j][b])) if ("=" === n.charAt(1)) a[j][b] = f[b] + Number(n.charAt(0) + n.substr(2));
            }
            i = a.length - 2;
            if (i < 0) {
                h[0] = new g(a[0][b], 0, 0, a[i < -1 ? 0 : 1][b]);
                return h;
            }
            for (j = 0; j < i; j++) {
                k = a[j][b];
                l = a[j + 1][b];
                h[j] = new g(k, 0, 0, l);
                if (e) {
                    m = a[j + 2][b];
                    c[j] = (c[j] || 0) + (l - k) * (l - k);
                    d[j] = (d[j] || 0) + (m - l) * (m - l);
                }
            }
            h[j] = new g(a[j][b], 0, 0, a[j + 1][b]);
            return h;
        }, l = function(a, b, g, i, l, m) {
            var n = {}, o = [], p = m || a[0], q, r, s, t, u, v, w, x;
            l = "string" === typeof l ? "," + l + "," : h;
            if (null == b) b = 1;
            for (r in a[0]) o.push(r);
            if (a.length > 1) {
                x = a[a.length - 1];
                w = true;
                q = o.length;
                while (--q > -1) {
                    r = o[q];
                    if (Math.abs(p[r] - x[r]) > .05) {
                        w = false;
                        break;
                    }
                }
                if (w) {
                    a = a.concat();
                    if (m) a.unshift(m);
                    a.push(a[1]);
                    m = a[a.length - 3];
                }
            }
            c.length = d.length = e.length = 0;
            q = o.length;
            while (--q > -1) {
                r = o[q];
                f[r] = l.indexOf("," + r + ",") !== -1;
                n[r] = k(a, r, f[r], m);
            }
            q = c.length;
            while (--q > -1) {
                c[q] = Math.sqrt(c[q]);
                d[q] = Math.sqrt(d[q]);
            }
            if (!i) {
                q = o.length;
                while (--q > -1) if (f[r]) {
                    s = n[o[q]];
                    v = s.length - 1;
                    for (t = 0; t < v; t++) {
                        u = s[t + 1].da / d[t] + s[t].da / c[t];
                        e[t] = (e[t] || 0) + u * u;
                    }
                }
                q = e.length;
                while (--q > -1) e[q] = Math.sqrt(e[q]);
            }
            q = o.length;
            t = g ? 4 : 1;
            while (--q > -1) {
                r = o[q];
                s = n[r];
                j(s, b, g, i, f[r]);
                if (w) {
                    s.splice(0, t);
                    s.splice(s.length - t, t);
                }
            }
            return n;
        }, m = function(a, b, c) {
            b = b || "soft";
            var d = {}, e = "cubic" === b ? 3 : 2, f = "soft" === b, h = [], i, j, k, l, m, n, o, p, q, r, s;
            if (f && c) a = [ c ].concat(a);
            if (null == a || a.length < e + 1) throw "invalid Bezier data";
            for (q in a[0]) h.push(q);
            n = h.length;
            while (--n > -1) {
                q = h[n];
                d[q] = m = [];
                r = 0;
                p = a.length;
                for (o = 0; o < p; o++) {
                    i = null == c ? a[o][q] : "string" === typeof (s = a[o][q]) && "=" === s.charAt(1) ? c[q] + Number(s.charAt(0) + s.substr(2)) : Number(s);
                    if (f) if (o > 1) if (o < p - 1) m[r++] = (i + m[r - 2]) / 2;
                    m[r++] = i;
                }
                p = r - e + 1;
                r = 0;
                for (o = 0; o < p; o += e) {
                    i = m[o];
                    j = m[o + 1];
                    k = m[o + 2];
                    l = 2 === e ? 0 : m[o + 3];
                    m[r++] = s = 3 === e ? new g(i, j, k, l) : new g(i, (2 * j + i) / 3, (2 * j + k) / 3, k);
                }
                m.length = r;
            }
            return d;
        }, n = function(a, b, c) {
            var d = 1 / c, e = a.length, f, g, h, i, j, k, l, m, n, o, p;
            while (--e > -1) {
                o = a[e];
                h = o.a;
                i = o.d - h;
                j = o.c - h;
                k = o.b - h;
                f = g = 0;
                for (m = 1; m <= c; m++) {
                    l = d * m;
                    n = 1 - l;
                    f = g - (g = (l * l * i + 3 * n * (l * j + n * k)) * l);
                    p = e * c + m - 1;
                    b[p] = (b[p] || 0) + f * f;
                }
            }
        }, o = function(a, b) {
            b = b >> 0 || 6;
            var c = [], d = [], e = 0, f = 0, g = b - 1, h = [], i = [], j, k, l, m;
            for (j in a) n(a[j], c, b);
            l = c.length;
            for (k = 0; k < l; k++) {
                e += Math.sqrt(c[k]);
                m = k % b;
                i[m] = e;
                if (m === g) {
                    f += e;
                    m = k / b >> 0;
                    h[m] = i;
                    d[m] = f;
                    e = 0;
                    i = [];
                }
            }
            return {
                length: f,
                lengths: d,
                segments: h
            };
        }, p = window._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            API: 2,
            global: true,
            init: function(a, b, c) {
                this._target = a;
                if (b instanceof Array) b = {
                    values: b
                };
                this._func = {};
                this._round = {};
                this._props = [];
                this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                var d = b.values || [], e = {}, f = d[0], g = b.autoRotate || c.vars.orientToBezier, h, i, j, k, n;
                this._autoRotate = g ? g instanceof Array ? g : [ [ "x", "y", "rotation", true === g ? 0 : Number(g) || 0 ] ] : null;
                for (h in f) this._props.push(h);
                j = this._props.length;
                while (--j > -1) {
                    h = this._props[j];
                    this._overwriteProps.push(h);
                    i = this._func[h] = "function" === typeof a[h];
                    e[h] = !i ? parseFloat(a[h]) : a[h.indexOf("set") || "function" !== typeof a["get" + h.substr(3)] ? h : "get" + h.substr(3)]();
                    if (!n) if (e[h] !== d[0][h]) n = e;
                }
                this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(d, isNaN(b.curviness) ? 1 : b.curviness, false, "thruBasic" === b.type, b.correlate, n) : m(d, b.type, e);
                this._segCount = this._beziers[h].length;
                if (this._timeRes) {
                    var p = o(this._beziers, this._timeRes);
                    this._length = p.length;
                    this._lengths = p.lengths;
                    this._segments = p.segments;
                    this._l1 = this._li = this._s1 = this._si = 0;
                    this._l2 = this._lengths[0];
                    this._curSeg = this._segments[0];
                    this._s2 = this._curSeg[0];
                    this._prec = 1 / this._curSeg.length;
                }
                if (g = this._autoRotate) {
                    if (!(g[0] instanceof Array)) this._autoRotate = g = [ g ];
                    j = g.length;
                    while (--j > -1) for (k = 0; k < 3; k++) {
                        h = g[j][k];
                        this._func[h] = "function" === typeof a[h] ? a[h.indexOf("set") || "function" !== typeof a["get" + h.substr(3)] ? h : "get" + h.substr(3)] : false;
                    }
                }
                return true;
            },
            set: function(b) {
                var c = this._segCount, d = this._func, e = this._target, f, g, h, i, j, k, l, m, n, o;
                if (!this._timeRes) {
                    f = b < 0 ? 0 : b >= 1 ? c - 1 : c * b >> 0;
                    k = (b - f * (1 / c)) * c;
                } else {
                    n = this._lengths;
                    o = this._curSeg;
                    b *= this._length;
                    h = this._li;
                    if (b > this._l2 && h < c - 1) {
                        m = c - 1;
                        while (h < m && (this._l2 = n[++h]) <= b) ;
                        this._l1 = n[h - 1];
                        this._li = h;
                        this._curSeg = o = this._segments[h];
                        this._s2 = o[this._s1 = this._si = 0];
                    } else if (b < this._l1 && h > 0) {
                        while (h > 0 && (this._l1 = n[--h]) >= b) ;
                        if (0 === h && b < this._l1) this._l1 = 0; else h++;
                        this._l2 = n[h];
                        this._li = h;
                        this._curSeg = o = this._segments[h];
                        this._s1 = o[(this._si = o.length - 1) - 1] || 0;
                        this._s2 = o[this._si];
                    }
                    f = h;
                    b -= this._l1;
                    h = this._si;
                    if (b > this._s2 && h < o.length - 1) {
                        m = o.length - 1;
                        while (h < m && (this._s2 = o[++h]) <= b) ;
                        this._s1 = o[h - 1];
                        this._si = h;
                    } else if (b < this._s1 && h > 0) {
                        while (h > 0 && (this._s1 = o[--h]) >= b) ;
                        if (0 === h && b < this._s1) this._s1 = 0; else h++;
                        this._s2 = o[h];
                        this._si = h;
                    }
                    k = (h + (b - this._s1) / (this._s2 - this._s1)) * this._prec;
                }
                g = 1 - k;
                h = this._props.length;
                while (--h > -1) {
                    i = this._props[h];
                    j = this._beziers[i][f];
                    l = (k * k * j.da + 3 * g * (k * j.ca + g * j.ba)) * k + j.a;
                    if (this._round[i]) l = l + (l > 0 ? .5 : -.5) >> 0;
                    if (d[i]) e[i](l); else if ("x" == i) e.setX(l); else if ("y" == i) e.setY(l); else if ("z" == i) e.setZ(l); else if ("angleX" == i) e.setAngleX(l); else if ("angleY" == i) e.setAngleY(l); else if ("angleZ" == i) e.setAngleZ(l); else if ("w" == i) e.setWidth(l); else if ("h" == i) e.setHeight(l); else if ("alpha" == i) e.setAlpha(l); else if ("scale" == i) e.setScale2(l); else e[i] = l;
                }
                if (this._autoRotate) {
                    var p = this._autoRotate, q, r, s, t, u, v, w;
                    h = p.length;
                    while (--h > -1) {
                        i = p[h][2];
                        v = p[h][3] || 0;
                        w = true === p[h][4] ? 1 : a;
                        j = this._beziers[p[h][0]];
                        q = this._beziers[p[h][1]];
                        if (j && q) {
                            j = j[f];
                            q = q[f];
                            r = j.a + (j.b - j.a) * k;
                            t = j.b + (j.c - j.b) * k;
                            r += (t - r) * k;
                            t += (j.c + (j.d - j.c) * k - t) * k;
                            s = q.a + (q.b - q.a) * k;
                            u = q.b + (q.c - q.b) * k;
                            s += (u - s) * k;
                            u += (q.c + (q.d - q.c) * k - u) * k;
                            l = Math.atan2(u - s, t - r) * w + v;
                            if (d[i]) e[i](l); else e[i] = l;
                        }
                    }
                }
            }
        }), q = p.prototype;
        p.bezierThrough = l;
        p.cubicToQuadratic = i;
        p._autoCSS = true;
        p.quadraticToCubic = function(a, b, c) {
            return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        };
        p._cssRegister = function() {
            var a = window._gsDefine.globals.CSSPlugin;
            if (!a) return;
            var c = a._internals, d = c._parseToProxy, e = c._setPluginRatio, f = c.CSSPropTween;
            c._registerComplexSpecialProp("bezier", {
                parser: function(a, c, g, h, i, j) {
                    if (c instanceof Array) c = {
                        values: c
                    };
                    j = new p();
                    var k = c.values, l = k.length - 1, m = [], n = {}, o, q, r;
                    if (l < 0) return i;
                    for (o = 0; o <= l; o++) {
                        r = d(a, k[o], h, i, j, l !== o);
                        m[o] = r.end;
                    }
                    for (q in c) n[q] = c[q];
                    n.values = m;
                    i = new f(a, "bezier", 0, 0, r.pt, 2);
                    i.data = r;
                    i.plugin = j;
                    i.setRatio = e;
                    if (0 === n.autoRotate) n.autoRotate = true;
                    if (n.autoRotate && !(n.autoRotate instanceof Array)) {
                        o = true === n.autoRotate ? 0 : Number(n.autoRotate) * b;
                        n.autoRotate = null != r.end.left ? [ [ "left", "top", "rotation", o, true ] ] : null != r.end.x ? [ [ "x", "y", "rotation", o, true ] ] : false;
                    }
                    if (n.autoRotate) {
                        if (!h._transform) h._enableTransforms(false);
                        r.autoRotate = h._target._gsTransform;
                    }
                    j._onInitTween(r.proxy, n, h._tween);
                    return i;
                }
            });
        };
        q._roundProps = function(a, b) {
            var c = this._overwriteProps, d = c.length;
            while (--d > -1) if (a[c[d]] || a.bezier || a.bezierThrough) this._round[c[d]] = b;
        };
        q._kill = function(a) {
            var b = this._props, c, d;
            for (c in this._beziers) if (c in a) {
                delete this._beziers[c];
                delete this._func[c];
                d = b.length;
                while (--d > -1) if (b[d] === c) b.splice(d, 1);
            }
            return this._super._kill.call(this, a);
        };
    }();
    window._gsDefine("plugins.CSSPlugin", [ "plugins.TweenPlugin", "TweenLite" ], function(a, b) {
        var c = function() {
            a.call(this, "css");
            this._overwriteProps.length = 0;
        }, d, e, f, g, h = {}, i = c.prototype = new a("css");
        i.constructor = c;
        c.version = "1.9.7";
        c.API = 2;
        c.defaultTransformPerspective = 0;
        i = "px";
        c.suffixMap = {
            top: i,
            right: i,
            bottom: i,
            left: i,
            width: i,
            height: i,
            fontSize: i,
            padding: i,
            margin: i,
            perspective: i
        };
        var j = /(?:\d|\-\d|\.\d|\-\.\d)+/g, k = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, l = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, m = /[^\d\-\.]/g, n = /(?:\d|\-|\+|=|#|\.)*/g, o = /opacity *= *([^)]*)/, p = /opacity:([^;]*)/, q = /alpha\(opacity *=.+?\)/i, r = /^(rgb|hsl)/, s = /([A-Z])/g, t = /-([a-z])/gi, u = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, v = function(a, b) {
            return b.toUpperCase();
        }, w = /(?:Left|Right|Width)/i, x = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, y = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, z = /,(?=[^\)]*(?:\(|$))/gi, A = Math.PI / 180, B = 180 / Math.PI, C = {}, D = document, E = D.createElement("div"), F = D.createElement("img"), G = c._internals = {
            _specialProps: h
        }, H = navigator.userAgent, I, J, K, L, M, N, O = function() {
            var a = H.indexOf("Android"), b = D.createElement("div"), c;
            K = H.indexOf("Safari") !== -1 && H.indexOf("Chrome") === -1 && (a === -1 || Number(H.substr(a + 8, 1)) > 3);
            M = K && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6;
            L = H.indexOf("Firefox") !== -1;
            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H);
            N = parseFloat(RegExp.$1);
            b.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
            c = b.getElementsByTagName("a")[0];
            return c ? /^0.55/.test(c.style.opacity) : false;
        }(), P = function(a) {
            return o.test("string" === typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        }, Q = function(a) {
            if (window.console) console.log(a);
        }, R = "", S = "", T = function(a, b) {
            b = b || E;
            var c = b.style, d, e;
            if (void 0 !== c[a]) return a;
            a = a.charAt(0).toUpperCase() + a.substr(1);
            d = [ "O", "Moz", "ms", "Ms", "Webkit" ];
            e = 5;
            while (--e > -1 && void 0 === c[d[e] + a]) ;
            if (e >= 0) {
                S = 3 === e ? "ms" : d[e];
                R = "-" + S.toLowerCase() + "-";
                return S + a;
            }
            return null;
        }, U = D.defaultView ? D.defaultView.getComputedStyle : function() {}, V = c.getStyle = function(a, b, c, d, e) {
            var f;
            if (!O) if ("opacity" === b) return P(a);
            if (!d && a.style[b]) f = a.style[b]; else if (c = c || U(a, null)) {
                a = c.getPropertyValue(b.replace(s, "-$1").toLowerCase());
                f = a || c.length ? a : c[b];
            } else if (a.currentStyle) {
                c = a.currentStyle;
                f = c[b];
            }
            return null != e && (!f || "none" === f || "auto" === f || "auto auto" === f) ? e : f;
        }, W = function(a, b, c, d, e) {
            if ("px" === d || !d) return c;
            if ("auto" === d || !c) return 0;
            var f = w.test(b), g = a, h = E.style, i = c < 0, j;
            if (i) c = -c;
            if ("%" === d && b.indexOf("border") !== -1) j = c / 100 * (f ? a.clientWidth : a.clientHeight); else {
                h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;";
                if ("%" === d || !g.appendChild) {
                    g = a.parentNode || D.body;
                    h[f ? "width" : "height"] = c + d;
                } else h[f ? "borderLeftWidth" : "borderTopWidth"] = c + d;
                g.appendChild(E);
                j = parseFloat(E[f ? "offsetWidth" : "offsetHeight"]);
                g.removeChild(E);
                if (0 === j && !e) j = W(a, b, c, d, true);
            }
            return i ? -j : j;
        }, X = function(a, b, c) {
            if ("absolute" !== V(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top", e = V(a, "margin" + d, c);
            return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(n, "")) || 0);
        }, Y = function(a, b) {
            var c = {}, d, e;
            if (b = b || U(a, null)) if (d = b.length) while (--d > -1) c[b[d].replace(t, v)] = b.getPropertyValue(b[d]); else for (d in b) c[d] = b[d]; else if (b = a.currentStyle || a.style) for (d in b) c[d.replace(t, v)] = b[d];
            if (!O) c.opacity = P(a);
            e = zb(a, b, false);
            c.rotation = e.rotation * B;
            c.skewX = e.skewX * B;
            c.scaleX = e.scaleX;
            c.scaleY = e.scaleY;
            c.x = e.x;
            c.y = e.y;
            if (yb) {
                c.z = e.z;
                c.rotationX = e.rotationX * B;
                c.rotationY = e.rotationY * B;
                c.scaleZ = e.scaleZ;
            }
            if (c.filters) delete c.filters;
            return c;
        }, Z = function(a, b, c, d, e) {
            var f = {}, g = a.style, h, i, j;
            for (i in c) if ("cssText" !== i) if ("length" !== i) if (isNaN(i)) if (b[i] !== (h = c[i]) || e && e[i]) if (i.indexOf("Origin") === -1) if ("number" === typeof h || "string" === typeof h) {
                f[i] = "auto" === h && ("left" === i || "top" === i) ? X(a, i) : ("" === h || "auto" === h || "none" === h) && "string" === typeof b[i] && "" !== b[i].replace(m, "") ? 0 : h;
                if (void 0 !== g[i]) j = new mb(g, i, g[i], j);
            }
            if (d) for (i in d) if ("className" !== i) f[i] = d[i];
            return {
                difs: f,
                firstMPT: j
            };
        }, $ = {
            width: [ "Left", "Right" ],
            height: [ "Top", "Bottom" ]
        }, _ = [ "marginLeft", "marginRight", "marginTop", "marginBottom" ], ab = function(a, b, c) {
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = $[b], f = e.length;
            c = c || U(a, null);
            while (--f > -1) {
                d -= parseFloat(V(a, "padding" + e[f], c, true)) || 0;
                d -= parseFloat(V(a, "border" + e[f] + "Width", c, true)) || 0;
            }
            return d;
        }, bb = function(a, b) {
            if (null == a || "" === a || "auto" === a || "auto auto" === a) a = "0 0";
            var c = a.split(" "), d = a.indexOf("left") !== -1 ? "0%" : a.indexOf("right") !== -1 ? "100%" : c[0], e = a.indexOf("top") !== -1 ? "0%" : a.indexOf("bottom") !== -1 ? "100%" : c[1];
            if (null == e) e = "0"; else if ("center" === e) e = "50%";
            if ("center" === d || isNaN(parseFloat(d))) d = "50%";
            if (b) {
                b.oxp = d.indexOf("%") !== -1;
                b.oyp = e.indexOf("%") !== -1;
                b.oxr = "=" === d.charAt(1);
                b.oyr = "=" === e.charAt(1);
                b.ox = parseFloat(d.replace(m, ""));
                b.oy = parseFloat(e.replace(m, ""));
            }
            return d + " " + e + (c.length > 2 ? " " + c[2] : "");
        }, cb = function(a, b) {
            return "string" === typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b);
        }, db = function(a, b) {
            return null == a ? b : "string" === typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a);
        }, eb = function(a, b, c, d) {
            var e = 1e-6, f, g, h, i;
            if (null == a) i = b; else if ("number" === typeof a) i = a * A; else {
                f = 2 * Math.PI;
                g = a.split("_");
                h = Number(g[0].replace(m, "")) * (a.indexOf("rad") === -1 ? A : 1) - ("=" === a.charAt(1) ? 0 : b);
                if (g.length) {
                    if (d) d[c] = b + h;
                    if (a.indexOf("short") !== -1) {
                        h %= f;
                        if (h !== h % (f / 2)) h = h < 0 ? h + f : h - f;
                    }
                    if (a.indexOf("_cw") !== -1 && h < 0) h = (h + 9999999999 * f) % f - (h / f | 0) * f; else if (a.indexOf("ccw") !== -1 && h > 0) h = (h - 9999999999 * f) % f - (h / f | 0) * f;
                }
                i = b + h;
            }
            if (i < e && i > -e) i = 0;
            return i;
        }, fb = {
            aqua: [ 0, 255, 255 ],
            lime: [ 0, 255, 0 ],
            silver: [ 192, 192, 192 ],
            black: [ 0, 0, 0 ],
            maroon: [ 128, 0, 0 ],
            teal: [ 0, 128, 128 ],
            blue: [ 0, 0, 255 ],
            navy: [ 0, 0, 128 ],
            white: [ 255, 255, 255 ],
            fuchsia: [ 255, 0, 255 ],
            olive: [ 128, 128, 0 ],
            yellow: [ 255, 255, 0 ],
            orange: [ 255, 165, 0 ],
            gray: [ 128, 128, 128 ],
            purple: [ 128, 0, 128 ],
            green: [ 0, 128, 0 ],
            red: [ 255, 0, 0 ],
            pink: [ 255, 192, 203 ],
            cyan: [ 0, 255, 255 ],
            transparent: [ 255, 255, 255, 0 ]
        }, gb = function(a, b, c) {
            a = a < 0 ? a + 1 : a > 1 ? a - 1 : a;
            return 255 * (6 * a < 1 ? b + (c - b) * a * 6 : a < .5 ? c : 3 * a < 2 ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
        }, hb = function(a) {
            var b, c, d, e, f, g;
            if (!a || "" === a) return fb.black;
            if ("number" === typeof a) return [ a >> 16, a >> 8 & 255, 255 & a ];
            if ("," === a.charAt(a.length - 1)) a = a.substr(0, a.length - 1);
            if (fb[a]) return fb[a];
            if ("#" === a.charAt(0)) {
                if (4 === a.length) {
                    b = a.charAt(1), c = a.charAt(2), d = a.charAt(3);
                    a = "#" + b + b + c + c + d + d;
                }
                a = parseInt(a.substr(1), 16);
                return [ a >> 16, a >> 8 & 255, 255 & a ];
            }
            if ("hsl" === a.substr(0, 3)) {
                a = a.match(j);
                e = Number(a[0]) % 360 / 360;
                f = Number(a[1]) / 100;
                g = Number(a[2]) / 100;
                c = g <= .5 ? g * (f + 1) : g + f - g * f;
                b = 2 * g - c;
                if (a.length > 3) a[3] = Number(a[3]);
                a[0] = gb(e + 1 / 3, b, c);
                a[1] = gb(e, b, c);
                a[2] = gb(e - 1 / 3, b, c);
                return a;
            }
            a = a.match(j) || fb.transparent;
            a[0] = Number(a[0]);
            a[1] = Number(a[1]);
            a[2] = Number(a[2]);
            if (a.length > 3) a[3] = Number(a[3]);
            return a;
        }, ib = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (i in fb) ib += "|" + i + "\\b";
        ib = new RegExp(ib + ")", "gi");
        var jb = function(a, b, c, d) {
            if (null == a) return function(a) {
                return a;
            };
            var e = b ? (a.match(ib) || [ "" ])[0] : "", f = a.split(e).join("").match(l) || [], g = a.substr(0, a.indexOf(f[0])), h = ")" === a.charAt(a.length - 1) ? ")" : "", i = a.indexOf(" ") !== -1 ? " " : ",", k = f.length, m = k > 0 ? f[0].replace(j, "") : "", n;
            if (!k) return function(a) {
                return a;
            };
            if (b) {
                n = function(a) {
                    var b, j, o, p;
                    if ("number" === typeof a) a += m; else if (d && z.test(a)) {
                        p = a.replace(z, "|").split("|");
                        for (o = 0; o < p.length; o++) p[o] = n(p[o]);
                        return p.join(",");
                    }
                    b = (a.match(ib) || [ e ])[0];
                    j = a.split(b).join("").match(l) || [];
                    o = j.length;
                    if (k > o--) while (++o < k) j[o] = c ? j[(o - 1) / 2 | 0] : f[o];
                    return g + j.join(i) + i + b + h + (a.indexOf("inset") !== -1 ? " inset" : "");
                };
                return n;
            }
            n = function(a) {
                var b, e, j;
                if ("number" === typeof a) a += m; else if (d && z.test(a)) {
                    e = a.replace(z, "|").split("|");
                    for (j = 0; j < e.length; j++) e[j] = n(e[j]);
                    return e.join(",");
                }
                b = a.match(l) || [];
                j = b.length;
                if (k > j--) while (++j < k) b[j] = c ? b[(j - 1) / 2 | 0] : f[j];
                return g + b.join(i) + h;
            };
            return n;
        }, kb = function(a) {
            a = a.split(",");
            return function(b, c, d, e, f, g, h) {
                var i = (c + "").split(" "), j;
                h = {};
                for (j = 0; j < 4; j++) h[a[j]] = i[j] = i[j] || i[(j - 1) / 2 >> 0];
                return e.parse(b, h, f, g);
            };
        }, lb = G._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            var b = this.data, c = b.proxy, d = b.firstMPT, e = 1e-6, f, g, h, i;
            while (d) {
                f = c[d.v];
                if (d.r) f = f > 0 ? f + .5 | 0 : f - .5 | 0; else if (f < e && f > -e) f = 0;
                d.t[d.p] = f;
                d = d._next;
            }
            if (b.autoRotate) b.autoRotate.rotation = c.rotation;
            if (1 === a) {
                d = b.firstMPT;
                while (d) {
                    g = d.t;
                    if (!g.type) g.e = g.s + g.xs0; else if (1 === g.type) {
                        i = g.xs0 + g.s + g.xs1;
                        for (h = 1; h < g.l; h++) i += g["xn" + h] + g["xs" + (h + 1)];
                        g.e = i;
                    }
                    d = d._next;
                }
            }
        }, mb = function(a, b, c, d, e) {
            this.t = a;
            this.p = b;
            this.v = c;
            this.r = e;
            if (d) {
                d._prev = this;
                this._next = d;
            }
        }, nb = G._parseToProxy = function(a, b, c, d, e, f) {
            var g = d, h = {}, i = {}, j = c._transform, k = C, l, m, n, o, p;
            c._transform = null;
            C = b;
            d = p = c.parse(a, b, d, e);
            C = k;
            if (f) {
                c._transform = j;
                if (g) {
                    g._prev = null;
                    if (g._prev) g._prev._next = null;
                }
            }
            while (d && d !== g) {
                if (d.type <= 1) {
                    m = d.p;
                    i[m] = d.s + d.c;
                    h[m] = d.s;
                    if (!f) {
                        o = new mb(d, "s", m, o, d.r);
                        d.c = 0;
                    }
                    if (1 === d.type) {
                        l = d.l;
                        while (--l > 0) {
                            n = "xn" + l;
                            m = d.p + "_" + n;
                            i[m] = d.data[n];
                            h[m] = d[n];
                            if (!f) o = new mb(d, n, m, o, d.rxp[n]);
                        }
                    }
                }
                d = d._next;
            }
            return {
                proxy: h,
                end: i,
                firstMPT: o,
                pt: p
            };
        }, ob = G.CSSPropTween = function(a, b, c, e, f, h, i, j, k, l, m) {
            this.t = a;
            this.p = b;
            this.s = c;
            this.c = e;
            this.n = i || "css_" + b;
            if (!(a instanceof ob)) g.push(this.n);
            this.r = j;
            this.type = h || 0;
            if (k) {
                this.pr = k;
                d = true;
            }
            this.b = void 0 === l ? c : l;
            this.e = void 0 === m ? c + e : m;
            if (f) {
                this._next = f;
                f._prev = this;
            }
        }, pb = c.parseComplex = function(a, b, c, d, e, f, g, h, i, l) {
            c = c || f || "";
            g = new ob(a, b, 0, 0, g, l ? 2 : 1, null, false, h, c, d);
            d += "";
            var m = c.split(", ").join(",").split(" "), n = d.split(", ").join(",").split(" "), o = m.length, p = false !== I, q, s, t, u, v, w, x, y, A, B, C, D;
            if (d.indexOf(",") !== -1 || c.indexOf(",") !== -1) {
                m = m.join(" ").replace(z, ", ").split(" ");
                n = n.join(" ").replace(z, ", ").split(" ");
                o = m.length;
            }
            if (o !== n.length) {
                m = (f || "").split(" ");
                o = m.length;
            }
            g.plugin = i;
            g.setRatio = l;
            for (q = 0; q < o; q++) {
                u = m[q];
                v = n[q];
                y = parseFloat(u);
                if (y || 0 === y) g.appendXtra("", y, cb(v, y), v.replace(k, ""), p && v.indexOf("px") !== -1, true); else if (e && ("#" === u.charAt(0) || fb[u] || r.test(u))) {
                    D = "," === v.charAt(v.length - 1) ? ")," : ")";
                    u = hb(u);
                    v = hb(v);
                    A = u.length + v.length > 6;
                    if (A && !O && 0 === v[3]) {
                        g["xs" + g.l] += g.l ? " transparent" : "transparent";
                        g.e = g.e.split(n[q]).join("transparent");
                    } else {
                        if (!O) A = false;
                        g.appendXtra(A ? "rgba(" : "rgb(", u[0], v[0] - u[0], ",", true, true).appendXtra("", u[1], v[1] - u[1], ",", true).appendXtra("", u[2], v[2] - u[2], A ? "," : D, true);
                        if (A) {
                            u = u.length < 4 ? 1 : u[3];
                            g.appendXtra("", u, (v.length < 4 ? 1 : v[3]) - u, D, false);
                        }
                    }
                } else {
                    w = u.match(j);
                    if (!w) g["xs" + g.l] += g.l ? " " + u : u; else {
                        x = v.match(k);
                        if (!x || x.length !== w.length) return g;
                        t = 0;
                        for (s = 0; s < w.length; s++) {
                            C = w[s];
                            B = u.indexOf(C, t);
                            g.appendXtra(u.substr(t, B - t), Number(C), cb(x[s], C), "", p && "px" === u.substr(B + C.length, 2), 0 === s);
                            t = B + C.length;
                        }
                        g["xs" + g.l] += u.substr(t);
                    }
                }
            }
            if (d.indexOf("=") !== -1) if (g.data) {
                D = g.xs0 + g.data.s;
                for (q = 1; q < g.l; q++) D += g["xs" + q] + g.data["xn" + q];
                g.e = D + g["xs" + q];
            }
            if (!g.l) {
                g.type = -1;
                g.xs0 = g.e;
            }
            return g.xfirst || g;
        }, qb = 9;
        i = ob.prototype;
        i.l = i.pr = 0;
        while (--qb > 0) {
            i["xn" + qb] = 0;
            i["xs" + qb] = "";
        }
        i.xs0 = "";
        i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null;
        i.appendXtra = function(a, b, c, d, e, f) {
            var g = this, h = g.l;
            g["xs" + h] += f && h ? " " + a : a || "";
            if (!c) if (0 !== h && !g.plugin) {
                g["xs" + h] += b + (d || "");
                return g;
            }
            g.l++;
            g.type = g.setRatio ? 2 : 1;
            g["xs" + g.l] = d || "";
            if (h > 0) {
                g.data["xn" + h] = b + c;
                g.rxp["xn" + h] = e;
                g["xn" + h] = b;
                if (!g.plugin) {
                    g.xfirst = new ob(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr);
                    g.xfirst.xs0 = 0;
                }
                return g;
            }
            g.data = {
                s: b + c
            };
            g.rxp = {};
            g.s = b;
            g.c = c;
            g.r = e;
            return g;
        };
        var rb = function(a, b) {
            b = b || {};
            this.p = b.prefix ? T(a) || a : a;
            h[a] = h[this.p] = this;
            this.format = b.formatter || jb(b.defaultValue, b.color, b.collapsible, b.multi);
            if (b.parser) this.parse = b.parser;
            this.clrs = b.color;
            this.multi = b.multi;
            this.keyword = b.keyword;
            this.dflt = b.defaultValue;
            this.pr = b.priority || 0;
        }, sb = G._registerComplexSpecialProp = function(a, b, c) {
            if ("object" !== typeof b) b = {
                parser: c
            };
            var d = a.split(","), e = b.defaultValue, f, g;
            c = c || [ e ];
            for (f = 0; f < d.length; f++) {
                b.prefix = 0 === f && b.prefix;
                b.defaultValue = c[f] || e;
                g = new rb(d[f], b);
            }
        }, tb = function(a) {
            if (!h[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                sb(a, {
                    parser: function(a, c, d, e, f, g, i) {
                        var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                        if (!j) {
                            Q("Error: " + b + " js file not loaded.");
                            return f;
                        }
                        j._cssRegister();
                        return h[d].parse(a, c, d, e, f, g, i);
                    }
                });
            }
        };
        i = rb.prototype;
        i.parseComplex = function(a, b, c, d, e, f) {
            var g = this.keyword, h, i, j, k, l, m;
            if (this.multi) if (z.test(c) || z.test(b)) {
                i = b.replace(z, "|").split("|");
                j = c.replace(z, "|").split("|");
            } else if (g) {
                i = [ b ];
                j = [ c ];
            }
            if (j) {
                k = j.length > i.length ? j.length : i.length;
                for (h = 0; h < k; h++) {
                    b = i[h] = i[h] || this.dflt;
                    c = j[h] = j[h] || this.dflt;
                    if (g) {
                        l = b.indexOf(g);
                        m = c.indexOf(g);
                        if (l !== m) {
                            c = m === -1 ? j : i;
                            c[h] += " " + g;
                        }
                    }
                }
                b = i.join(", ");
                c = j.join(", ");
            }
            return pb(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
        };
        i.parse = function(a, b, c, d, e, g, h) {
            return this.parseComplex(a.style, this.format(V(a, this.p, f, false, this.dflt)), this.format(b), e, g);
        };
        c.registerSpecialProp = function(a, b, c) {
            sb(a, {
                parser: function(a, d, e, f, g, h, i) {
                    var j = new ob(a, e, 0, 0, g, 2, e, false, c);
                    j.plugin = h;
                    j.setRatio = b(a, d, f._tween, e);
                    return j;
                },
                priority: c
            });
        };
        var ub = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","), vb = T("transform"), wb = R + "transform", xb = T("transformOrigin"), yb = null !== T("perspective"), zb = function(a, b, d) {
            var e = d ? a._gsTransform || {
                skewY: 0
            } : {
                skewY: 0
            }, f = e.scaleX < 0, g = 2e-5, h = 1e5, i = -Math.PI + 1e-4, j = Math.PI - 1e-4, k = yb ? parseFloat(V(a, xb, b, false, "0 0 0").split(" ")[2]) || e.zOrigin || 0 : 0, l, m, n, o, p, q, r, s, t, u, v, w, y;
            if (vb) l = V(a, wb, b, true); else if (a.currentStyle) {
                l = a.currentStyle.filter.match(x);
                if (l && 4 === l.length) l = [ l[0].substr(4), Number(l[2].substr(4)), Number(l[1].substr(4)), l[3].substr(4), e.x || 0, e.y || 0 ].join(","); else if (null != e.x) return e; else l = "";
            }
            m = (l || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
            n = m.length;
            while (--n > -1) {
                o = Number(m[n]);
                m[n] = (p = o - (o |= 0)) ? (p * h + (p < 0 ? -.5 : .5) | 0) / h + o : o;
            }
            if (16 === m.length) {
                var z = m[8], A = m[9], B = m[10], C = m[12], D = m[13], E = m[14];
                if (e.zOrigin) {
                    E = -e.zOrigin;
                    C = z * E - m[12];
                    D = A * E - m[13];
                    E = B * E + e.zOrigin - m[14];
                }
                if (!d || null == e.rotationX) {
                    var F = m[0], G = m[1], H = m[2], I = m[3], J = m[4], K = m[5], L = m[6], M = m[7], N = m[11], O = e.rotationX = Math.atan2(L, B), P = O < i || O > j, Q, R, S, T, U, W, X;
                    if (O) {
                        T = Math.cos(-O);
                        U = Math.sin(-O);
                        Q = J * T + z * U;
                        R = K * T + A * U;
                        S = L * T + B * U;
                        z = J * -U + z * T;
                        A = K * -U + A * T;
                        B = L * -U + B * T;
                        N = M * -U + N * T;
                        J = Q;
                        K = R;
                        L = S;
                    }
                    O = e.rotationY = Math.atan2(z, F);
                    if (O) {
                        W = O < i || O > j;
                        T = Math.cos(-O);
                        U = Math.sin(-O);
                        Q = F * T - z * U;
                        R = G * T - A * U;
                        S = H * T - B * U;
                        A = G * U + A * T;
                        B = H * U + B * T;
                        N = I * U + N * T;
                        F = Q;
                        G = R;
                        H = S;
                    }
                    O = e.rotation = Math.atan2(G, K);
                    if (O) {
                        X = O < i || O > j;
                        T = Math.cos(-O);
                        U = Math.sin(-O);
                        F = F * T + J * U;
                        R = G * T + K * U;
                        K = G * -U + K * T;
                        L = H * -U + L * T;
                        G = R;
                    }
                    if (X && P) e.rotation = e.rotationX = 0; else if (X && W) e.rotation = e.rotationY = 0; else if (W && P) e.rotationY = e.rotationX = 0;
                    e.scaleX = (Math.sqrt(F * F + G * G) * h + .5 | 0) / h;
                    e.scaleY = (Math.sqrt(K * K + A * A) * h + .5 | 0) / h;
                    e.scaleZ = (Math.sqrt(L * L + B * B) * h + .5 | 0) / h;
                    e.skewX = 0;
                    e.perspective = N ? 1 / (N < 0 ? -N : N) : 0;
                    e.x = C;
                    e.y = D;
                    e.z = E;
                }
            } else if ((!yb || 0 === m.length || e.x !== m[4] || e.y !== m[5] || !e.rotationX && !e.rotationY) && !(void 0 !== e.x && "none" === V(a, "display", b))) {
                var Y = m.length >= 6, Z = Y ? m[0] : 1, $ = m[1] || 0, _ = m[2] || 0, ab = Y ? m[3] : 1;
                e.x = m[4] || 0;
                e.y = m[5] || 0;
                q = Math.sqrt(Z * Z + $ * $);
                r = Math.sqrt(ab * ab + _ * _);
                s = Z || $ ? Math.atan2($, Z) : e.rotation || 0;
                t = _ || ab ? Math.atan2(_, ab) + s : e.skewX || 0;
                u = q - Math.abs(e.scaleX || 0);
                v = r - Math.abs(e.scaleY || 0);
                if (Math.abs(t) > Math.PI / 2 && Math.abs(t) < 1.5 * Math.PI) if (f) {
                    q *= -1;
                    t += s <= 0 ? Math.PI : -Math.PI;
                    s += s <= 0 ? Math.PI : -Math.PI;
                } else {
                    r *= -1;
                    t += t <= 0 ? Math.PI : -Math.PI;
                }
                w = (s - e.rotation) % Math.PI;
                y = (t - e.skewX) % Math.PI;
                if (void 0 === e.skewX || u > g || u < -g || v > g || v < -g || w > i && w < j && w * h | 0 !== 0 || y > i && y < j && y * h | 0 !== 0) {
                    e.scaleX = q;
                    e.scaleY = r;
                    e.rotation = s;
                    e.skewX = t;
                }
                if (yb) {
                    e.rotationX = e.rotationY = e.z = 0;
                    e.perspective = parseFloat(c.defaultTransformPerspective) || 0;
                    e.scaleZ = 1;
                }
            }
            e.zOrigin = k;
            for (n in e) if (e[n] < g) if (e[n] > -g) e[n] = 0;
            if (d) a._gsTransform = e;
            return e;
        }, Ab = function(a) {
            var b = this.data, c = -b.rotation, d = c + b.skewX, e = 1e5, f = (Math.cos(c) * b.scaleX * e | 0) / e, g = (Math.sin(c) * b.scaleX * e | 0) / e, h = (Math.sin(d) * -b.scaleY * e | 0) / e, i = (Math.cos(d) * b.scaleY * e | 0) / e, j = this.t.style, k = this.t.currentStyle, l, m;
            if (!k) return;
            m = g;
            g = -h;
            h = -m;
            l = k.filter;
            j.filter = "";
            var p = this.t.offsetWidth, q = this.t.offsetHeight, r = "absolute" !== k.position, s = "progid:DXImageTransform.Microsoft.Matrix(M11=" + f + ", M12=" + g + ", M21=" + h + ", M22=" + i, t = b.x, u = b.y, v, w;
            if (null != b.ox) {
                v = (b.oxp ? p * b.ox * .01 : b.ox) - p / 2;
                w = (b.oyp ? q * b.oy * .01 : b.oy) - q / 2;
                t += v - (v * f + w * g);
                u += w - (v * h + w * i);
            }
            if (!r) {
                var x = N < 8 ? 1 : -1, z, A, B;
                v = b.ieOffsetX || 0;
                w = b.ieOffsetY || 0;
                b.ieOffsetX = Math.round((p - ((f < 0 ? -f : f) * p + (g < 0 ? -g : g) * q)) / 2 + t);
                b.ieOffsetY = Math.round((q - ((i < 0 ? -i : i) * q + (h < 0 ? -h : h) * p)) / 2 + u);
                for (qb = 0; qb < 4; qb++) {
                    A = _[qb];
                    z = k[A];
                    m = z.indexOf("px") !== -1 ? parseFloat(z) : W(this.t, A, parseFloat(z), z.replace(n, "")) || 0;
                    if (m !== b[A]) B = qb < 2 ? -b.ieOffsetX : -b.ieOffsetY; else B = qb < 2 ? v - b.ieOffsetX : w - b.ieOffsetY;
                    j[A] = (b[A] = Math.round(m - B * (0 === qb || 2 === qb ? 1 : x))) + "px";
                }
                s += ", sizingMethod='auto expand')";
            } else {
                v = p / 2;
                w = q / 2;
                s += ", Dx=" + (v - (v * f + w * g) + t) + ", Dy=" + (w - (v * h + w * i) + u) + ")";
            }
            if (l.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) j.filter = l.replace(y, s); else j.filter = s + " " + l;
            if (0 === a || 1 === a) if (1 === f) if (0 === g) if (0 === h) if (1 === i) if (!r || s.indexOf("Dx=0, Dy=0") !== -1) if (!o.test(l) || 100 === parseFloat(RegExp.$1)) if (l.indexOf("gradient(") === -1) j.removeAttribute("filter");
        }, Bb = function(a) {
            var b = this.data, c = this.t.style, d = b.perspective, e = b.scaleX, f = 0, g = 0, h = 0, i = 0, j = b.scaleY, k = 0, l = 0, m = 0, n = 0, o = b.scaleZ, p = 0, q = 0, r = 0, s = d ? -1 / d : 0, t = b.rotation, u = b.zOrigin, v = 1e5, w, x, y, z, A, B, C, D, E;
            if (L) {
                C = c.top ? "top" : c.bottom ? "bottom" : parseFloat(V(this.t, "top", null, false)) ? "bottom" : "top";
                y = V(this.t, C, null, false);
                D = parseFloat(y) || 0;
                E = y.substr((D + "").length) || "px";
                b._ffFix = !b._ffFix;
                c[C] = (b._ffFix ? D + .05 : D - .05) + E;
            }
            if (t || b.skewX) {
                y = e * Math.cos(t);
                z = j * Math.sin(t);
                t -= b.skewX;
                f = e * -Math.sin(t);
                j *= Math.cos(t);
                e = y;
                i = z;
            }
            t = b.rotationY;
            if (t) {
                w = Math.cos(t);
                x = Math.sin(t);
                y = e * w;
                z = i * w;
                A = o * -x;
                B = s * -x;
                g = e * x;
                k = i * x;
                o *= w;
                s *= w;
                e = y;
                i = z;
                m = A;
                q = B;
            }
            t = b.rotationX;
            if (t) {
                w = Math.cos(t);
                x = Math.sin(t);
                y = f * w + g * x;
                z = j * w + k * x;
                A = n * w + o * x;
                B = r * w + s * x;
                g = f * -x + g * w;
                k = j * -x + k * w;
                o = n * -x + o * w;
                s = r * -x + s * w;
                f = y;
                j = z;
                n = A;
                r = B;
            }
            if (u) {
                p -= u;
                h = g * p;
                l = k * p;
                p = o * p + u;
            }
            h = (y = (h += b.x) - (h |= 0)) ? (y * v + (y < 0 ? -.5 : .5) | 0) / v + h : h;
            l = (y = (l += b.y) - (l |= 0)) ? (y * v + (y < 0 ? -.5 : .5) | 0) / v + l : l;
            p = (y = (p += b.z) - (p |= 0)) ? (y * v + (y < 0 ? -.5 : .5) | 0) / v + p : p;
            c[vb] = "matrix3d(" + [ (e * v | 0) / v, (i * v | 0) / v, (m * v | 0) / v, (q * v | 0) / v, (f * v | 0) / v, (j * v | 0) / v, (n * v | 0) / v, (r * v | 0) / v, (g * v | 0) / v, (k * v | 0) / v, (o * v | 0) / v, (s * v | 0) / v, h, l, p, d ? 1 + -p / d : 1 ].join(",") + ")";
        }, Cb = function(a) {
            var b = this.data, c = this.t, d = c.style, e, f, g, h, i, j, k, l, m;
            if (L) {
                e = d.top ? "top" : d.bottom ? "bottom" : parseFloat(V(c, "top", null, false)) ? "bottom" : "top";
                f = V(c, e, null, false);
                g = parseFloat(f) || 0;
                h = f.substr((g + "").length) || "px";
                b._ffFix = !b._ffFix;
                d[e] = (b._ffFix ? g + .05 : g - .05) + h;
            }
            if (!b.rotation && !b.skewX) d[vb] = "matrix(" + b.scaleX + ",0,0," + b.scaleY + "," + b.x + "," + b.y + ")"; else {
                i = b.rotation;
                j = i - b.skewX;
                k = 1e5;
                l = b.scaleX * k;
                m = b.scaleY * k;
                d[vb] = "matrix(" + (Math.cos(i) * l | 0) / k + "," + (Math.sin(i) * l | 0) / k + "," + (Math.sin(j) * -m | 0) / k + "," + (Math.cos(j) * m | 0) / k + "," + b.x + "," + b.y + ")";
            }
        };
        sb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
            parser: function(a, b, c, d, e, g, h) {
                if (d._transform) return e;
                var i = d._transform = zb(a, f, true), j = a.style, k = 1e-6, l = ub.length, m = h, n = {}, o, p, q, r, s, t, u;
                if ("string" === typeof m.transform && vb) {
                    q = j.cssText;
                    j[vb] = m.transform;
                    j.display = "block";
                    o = zb(a, null, false);
                    j.cssText = q;
                } else if ("object" === typeof m) {
                    o = {
                        scaleX: db(null != m.scaleX ? m.scaleX : m.scale, i.scaleX),
                        scaleY: db(null != m.scaleY ? m.scaleY : m.scale, i.scaleY),
                        scaleZ: db(null != m.scaleZ ? m.scaleZ : m.scale, i.scaleZ),
                        x: db(m.x, i.x),
                        y: db(m.y, i.y),
                        z: db(m.z, i.z),
                        perspective: db(m.transformPerspective, i.perspective)
                    };
                    u = m.directionalRotation;
                    if (null != u) if ("object" === typeof u) for (q in u) m[q] = u[q]; else m.rotation = u;
                    o.rotation = eb("rotation" in m ? m.rotation : "shortRotation" in m ? m.shortRotation + "_short" : "rotationZ" in m ? m.rotationZ : i.rotation * B, i.rotation, "rotation", n);
                    if (yb) {
                        o.rotationX = eb("rotationX" in m ? m.rotationX : "shortRotationX" in m ? m.shortRotationX + "_short" : i.rotationX * B || 0, i.rotationX, "rotationX", n);
                        o.rotationY = eb("rotationY" in m ? m.rotationY : "shortRotationY" in m ? m.shortRotationY + "_short" : i.rotationY * B || 0, i.rotationY, "rotationY", n);
                    }
                    o.skewX = null == m.skewX ? i.skewX : eb(m.skewX, i.skewX);
                    o.skewY = null == m.skewY ? i.skewY : eb(m.skewY, i.skewY);
                    if (p = o.skewY - i.skewY) {
                        o.skewX += p;
                        o.rotation += p;
                    }
                }
                s = i.z || i.rotationX || i.rotationY || o.z || o.rotationX || o.rotationY || o.perspective;
                if (!s && null != m.scale) o.scaleZ = 1;
                while (--l > -1) {
                    c = ub[l];
                    r = o[c] - i[c];
                    if (r > k || r < -k || null != C[c]) {
                        t = true;
                        e = new ob(i, c, i[c], r, e);
                        if (c in n) e.e = n[c];
                        e.xs0 = 0;
                        e.plugin = g;
                        d._overwriteProps.push(e.n);
                    }
                }
                r = m.transformOrigin;
                if (r || yb && s && i.zOrigin) if (vb) {
                    t = true;
                    r = (r || V(a, c, f, false, "50% 50%")) + "";
                    c = xb;
                    e = new ob(j, c, 0, 0, e, -1, "css_transformOrigin");
                    e.b = j[c];
                    e.plugin = g;
                    if (yb) {
                        q = i.zOrigin;
                        r = r.split(" ");
                        i.zOrigin = (r.length > 2 ? parseFloat(r[2]) : q) || 0;
                        e.xs0 = e.e = j[c] = r[0] + " " + (r[1] || "50%") + " 0px";
                        e = new ob(i, "zOrigin", 0, 0, e, -1, e.n);
                        e.b = q;
                        e.xs0 = e.e = i.zOrigin;
                    } else e.xs0 = e.e = j[c] = r;
                } else bb(r + "", i);
                if (t) d._transformType = s || 3 === this._transformType ? 3 : 2;
                return e;
            },
            prefix: true
        });
        sb("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: true,
            color: true,
            multi: true,
            keyword: "inset"
        });
        sb("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, d, g, h) {
                b = this.format(b);
                var i = [ "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius" ], j = a.style, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
                s = parseFloat(a.offsetWidth);
                t = parseFloat(a.offsetHeight);
                k = b.split(" ");
                for (l = 0; l < i.length; l++) {
                    if (this.p.indexOf("border")) i[l] = T(i[l]);
                    o = n = V(a, i[l], f, false, "0px");
                    if (o.indexOf(" ") !== -1) {
                        n = o.split(" ");
                        o = n[0];
                        n = n[1];
                    }
                    p = m = k[l];
                    q = parseFloat(o);
                    v = o.substr((q + "").length);
                    w = "=" === p.charAt(1);
                    if (w) {
                        r = parseInt(p.charAt(0) + "1", 10);
                        p = p.substr(2);
                        r *= parseFloat(p);
                        u = p.substr((r + "").length - (r < 0 ? 1 : 0)) || "";
                    } else {
                        r = parseFloat(p);
                        u = p.substr((r + "").length);
                    }
                    if ("" === u) u = e[c] || v;
                    if (u !== v) {
                        x = W(a, "borderLeft", q, v);
                        y = W(a, "borderTop", q, v);
                        if ("%" === u) {
                            o = x / s * 100 + "%";
                            n = y / t * 100 + "%";
                        } else if ("em" === u) {
                            z = W(a, "borderLeft", 1, "em");
                            o = x / z + "em";
                            n = y / z + "em";
                        } else {
                            o = x + "px";
                            n = y + "px";
                        }
                        if (w) {
                            p = parseFloat(o) + r + u;
                            m = parseFloat(n) + r + u;
                        }
                    }
                    g = pb(j, i[l], o + " " + n, p + " " + m, false, "0px", g);
                }
                return g;
            },
            prefix: true,
            formatter: jb("0px 0px 0px 0px", false, true)
        });
        sb("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, e, g) {
                var h = "background-position", i = f || U(a, null), j = this.format((i ? N ? i.getPropertyValue(h + "-x") + " " + i.getPropertyValue(h + "-y") : i.getPropertyValue(h) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), k = this.format(b), l, m, n, o, p, q;
                if (j.indexOf("%") !== -1 !== (k.indexOf("%") !== -1)) {
                    q = V(a, "backgroundImage").replace(u, "");
                    if (q && "none" !== q) {
                        l = j.split(" ");
                        m = k.split(" ");
                        F.setAttribute("src", q);
                        n = 2;
                        while (--n > -1) {
                            j = l[n];
                            o = j.indexOf("%") !== -1;
                            if (o !== (m[n].indexOf("%") !== -1)) {
                                p = 0 === n ? a.offsetWidth - F.width : a.offsetHeight - F.height;
                                l[n] = o ? parseFloat(j) / 100 * p + "px" : parseFloat(j) / p * 100 + "%";
                            }
                        }
                        j = l.join(" ");
                    }
                }
                return this.parseComplex(a.style, j, k, e, g);
            },
            formatter: bb
        });
        sb("backgroundSize", {
            defaultValue: "0 0",
            formatter: bb
        });
        sb("perspective", {
            defaultValue: "0px",
            prefix: true
        });
        sb("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: true
        });
        sb("transformStyle", {
            prefix: true
        });
        sb("backfaceVisibility", {
            prefix: true
        });
        sb("margin", {
            parser: kb("marginTop,marginRight,marginBottom,marginLeft")
        });
        sb("padding", {
            parser: kb("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        sb("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, e, g) {
                var h, i, j;
                if (N < 9) {
                    i = a.currentStyle;
                    j = N < 8 ? " " : ",";
                    h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")";
                    b = this.format(b).split(",").join(j);
                } else {
                    h = this.format(V(a, this.p, f, false, this.dflt));
                    b = this.format(b);
                }
                return this.parseComplex(a.style, h, b, e, g);
            }
        });
        sb("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: true,
            multi: true
        });
        sb("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e;
            }
        });
        sb("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, e, g) {
                return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", f, false, "0px") + " " + V(a, "borderTopStyle", f, false, "solid") + " " + V(a, "borderTopColor", f, false, "#000")), this.format(b), e, g);
            },
            color: true,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ib) || [ "#000" ])[0];
            }
        });
        sb("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e, f) {
                var g = a.style, h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                return new ob(g, h, 0, 0, e, -1, c, false, 0, g[h], b);
            }
        });
        var Db = function(a) {
            var b = this.t, c = b.filter, d = this.s + this.c * a | 0, e;
            if (100 === d) if (c.indexOf("atrix(") === -1 && c.indexOf("radient(") === -1) {
                b.removeAttribute("filter");
                e = !V(this.data, "filter");
            } else {
                b.filter = c.replace(q, "");
                e = true;
            }
            if (!e) {
                if (this.xn1) b.filter = c = c || "alpha(opacity=100)";
                if (c.indexOf("opacity") === -1) b.filter += " alpha(opacity=" + d + ")"; else b.filter = c.replace(o, "opacity=" + d);
            }
        };
        sb("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, e, g) {
                var h = parseFloat(V(a, "opacity", f, false, "1")), i = a.style, j;
                b = parseFloat(b);
                if ("autoAlpha" === c) {
                    j = V(a, "visibility", f);
                    if (1 === h && "hidden" === j && 0 !== b) h = 0;
                    e = new ob(i, "visibility", 0, 0, e, -1, null, false, 0, 0 !== h ? "visible" : "hidden", 0 === b ? "hidden" : "visible");
                    e.xs0 = "visible";
                    d._overwriteProps.push(e.n);
                }
                if (O) e = new ob(i, "opacity", h, b - h, e); else {
                    e = new ob(i, "opacity", 100 * h, 100 * (b - h), e);
                    e.xn1 = "autoAlpha" === c ? 1 : 0;
                    i.zoom = 1;
                    e.type = 2;
                    e.b = "alpha(opacity=" + e.s + ")";
                    e.e = "alpha(opacity=" + (e.s + e.c) + ")";
                    e.data = a;
                    e.plugin = g;
                    e.setRatio = Db;
                }
                return e;
            }
        });
        var Eb = function(a, b) {
            if (b) if (a.removeProperty) a.removeProperty(b.replace(s, "-$1").toLowerCase()); else a.removeAttribute(b);
        }, Fb = function(a) {
            this.t._gsClassPT = this;
            if (1 === a || 0 === a) {
                this.t.className = 0 === a ? this.b : this.e;
                var b = this.data, c = this.t.style;
                while (b) {
                    if (!b.v) Eb(c, b.p); else c[b.p] = b.v;
                    b = b._next;
                }
                if (1 === a && this.t._gsClassPT === this) this.t._gsClassPT = null;
            } else if (this.t.className !== this.e) this.t.className = this.e;
        };
        sb("className", {
            parser: function(a, b, c, e, g, h, i) {
                var j = a.className, k = a.style.cssText, l, m, n, o, p;
                g = e._classNamePT = new ob(a, c, 0, 0, g, 2);
                g.setRatio = Fb;
                g.pr = -11;
                d = true;
                g.b = j;
                m = Y(a, f);
                n = a._gsClassPT;
                if (n) {
                    o = {};
                    p = n.data;
                    while (p) {
                        o[p.p] = 1;
                        p = p._next;
                    }
                    n.setRatio(1);
                }
                a._gsClassPT = g;
                g.e = "=" !== b.charAt(1) ? b : j.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : "");
                if (e._tween._duration) {
                    a.className = g.e;
                    l = Z(a, m, Y(a), i, o);
                    a.className = j;
                    g.data = l.firstMPT;
                    a.style.cssText = k;
                    g = g.xfirst = e.parse(a, l.difs, g, h);
                }
                return g;
            }
        });
        var Gb = function(a) {
            if (1 === a || 0 === a) if (this.data._totalTime === this.data._totalDuration) {
                var b = "all" === this.e, c = this.t.style, d = b ? c.cssText.split(";") : this.e.split(","), e = d.length, f = h.transform.parse, g;
                while (--e > -1) {
                    g = d[e];
                    if (b) g = g.substr(0, g.indexOf(":")).split(" ").join("");
                    if (h[g]) g = h[g].parse === f ? vb : h[g].p;
                    Eb(c, g);
                }
            }
        };
        sb("clearProps", {
            parser: function(a, b, c, e, f) {
                f = new ob(a, c, 0, 0, f, 2);
                f.setRatio = Gb;
                f.e = b;
                f.pr = -10;
                f.data = e._tween;
                d = true;
                return f;
            }
        });
        i = "bezier,throwProps,physicsProps,physics2D".split(",");
        qb = i.length;
        while (qb--) tb(i[qb]);
        i = c.prototype;
        i._firstPT = null;
        i._onInitTween = function(a, b, h) {
            if (!a.nodeType) return false;
            this._target = a;
            this._tween = h;
            this._vars = b;
            I = b.autoRound;
            d = false;
            e = b.suffixMap || c.suffixMap;
            f = U(a, "");
            g = this._overwriteProps;
            var i = a.style, j, k, l, m, n, o, q, r, s;
            if (J) if ("" === i.zIndex) {
                j = V(a, "zIndex", f);
                if ("auto" === j || "" === j) i.zIndex = 0;
            }
            if ("string" === typeof b) {
                m = i.cssText;
                j = Y(a, f);
                i.cssText = m + ";" + b;
                j = Z(a, j, Y(a)).difs;
                if (!O && p.test(b)) j.opacity = parseFloat(RegExp.$1);
                b = j;
                i.cssText = m;
            }
            this._firstPT = k = this.parse(a, b, null);
            if (this._transformType) {
                s = 3 === this._transformType;
                if (!vb) i.zoom = 1; else if (K) {
                    J = true;
                    if ("" === i.zIndex) {
                        q = V(a, "zIndex", f);
                        if ("auto" === q || "" === q) i.zIndex = 0;
                    }
                    if (M) i.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (s ? "visible" : "hidden");
                }
                l = k;
                while (l && l._next) l = l._next;
                r = new ob(a, "transform", 0, 0, null, 2);
                this._linkCSSP(r, null, l);
                r.setRatio = s && yb ? Bb : vb ? Cb : Ab;
                r.data = this._transform || zb(a, f, true);
                g.pop();
            }
            if (d) {
                while (k) {
                    o = k._next;
                    l = m;
                    while (l && l.pr > k.pr) l = l._next;
                    if (k._prev = l ? l._prev : n) k._prev._next = k; else m = k;
                    if (k._next = l) l._prev = k; else n = k;
                    k = o;
                }
                this._firstPT = m;
            }
            return true;
        };
        i.parse = function(a, b, c, d) {
            var g = a.style, i, j, k, l, m, o, p, q, s, t;
            for (i in b) {
                o = b[i];
                j = h[i];
                if (j) c = j.parse(a, o, i, this, c, d, b); else {
                    m = V(a, i, f) + "";
                    s = "string" === typeof o;
                    if ("color" === i || "fill" === i || "stroke" === i || i.indexOf("Color") !== -1 || s && r.test(o)) {
                        if (!s) {
                            o = hb(o);
                            o = (o.length > 3 ? "rgba(" : "rgb(") + o.join(",") + ")";
                        }
                        c = pb(g, i, m, o, true, "transparent", c, 0, d);
                    } else if (s && (o.indexOf(" ") !== -1 || o.indexOf(",") !== -1)) c = pb(g, i, m, o, true, null, c, 0, d); else {
                        k = parseFloat(m);
                        p = k || 0 === k ? m.substr((k + "").length) : "";
                        if ("" === m || "auto" === m) if ("width" === i || "height" === i) {
                            k = ab(a, i, f);
                            p = "px";
                        } else if ("left" === i || "top" === i) {
                            k = X(a, i, f);
                            p = "px";
                        } else {
                            k = "opacity" !== i ? 0 : 1;
                            p = "";
                        }
                        t = s && "=" === o.charAt(1);
                        if (t) {
                            l = parseInt(o.charAt(0) + "1", 10);
                            o = o.substr(2);
                            l *= parseFloat(o);
                            q = o.replace(n, "");
                        } else {
                            l = parseFloat(o);
                            q = s ? o.substr((l + "").length) || "" : "";
                        }
                        if ("" === q) q = e[i] || p;
                        o = l || 0 === l ? (t ? l + k : l) + q : b[i];
                        if (p !== q) if ("" !== q) if (l || 0 === l) if (k || 0 === k) {
                            k = W(a, i, k, p);
                            if ("%" === q) {
                                k /= W(a, i, 100, "%") / 100;
                                if (k > 100) k = 100;
                                if (true !== b.strictUnits) m = k + "%";
                            } else if ("em" === q) k /= W(a, i, 1, "em"); else {
                                l = W(a, i, l, q);
                                q = "px";
                            }
                            if (t) if (l || 0 === l) o = l + k + q;
                        }
                        if (t) l += k;
                        if ((k || 0 === k) && (l || 0 === l)) {
                            c = new ob(g, i, k, l - k, c, 0, "css_" + i, false !== I && ("px" === q || "zIndex" === i), 0, m, o);
                            c.xs0 = q;
                        } else if (void 0 === g[i] || !o && (o + "" === "NaN" || null == o)) Q("invalid " + i + " tween value: " + b[i]); else {
                            c = new ob(g, i, l || k || 0, 0, c, -1, "css_" + i, false, 0, m, o);
                            c.xs0 = "none" === o && ("display" === i || i.indexOf("Style") !== -1) ? m : o;
                        }
                    }
                }
                if (d) if (c && !c.plugin) c.plugin = d;
            }
            return c;
        };
        i.setRatio = function(a) {
            var b = this._firstPT, c = 1e-6, d, e, f;
            if (1 === a && (this._tween._time === this._tween._duration || 0 === this._tween._time)) while (b) {
                if (2 !== b.type) b.t[b.p] = b.e; else b.setRatio(a);
                b = b._next;
            } else if (a || !(this._tween._time === this._tween._duration || 0 === this._tween._time) || this._tween._rawPrevTime === -1e-6) while (b) {
                d = b.c * a + b.s;
                if (b.r) d = d > 0 ? d + .5 | 0 : d - .5 | 0; else if (d < c) if (d > -c) d = 0;
                if (!b.type) b.t[b.p] = d + b.xs0; else if (1 === b.type) {
                    f = b.l;
                    if (2 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2; else if (3 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3; else if (4 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4; else if (5 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4 + b.xn4 + b.xs5; else {
                        e = b.xs0 + d + b.xs1;
                        for (f = 1; f < b.l; f++) e += b["xn" + f] + b["xs" + (f + 1)];
                        b.t[b.p] = e;
                    }
                } else if (b.type === -1) b.t[b.p] = b.xs0; else if (b.setRatio) b.setRatio(a);
                b = b._next;
            } else while (b) {
                if (2 !== b.type) b.t[b.p] = b.b; else b.setRatio(a);
                b = b._next;
            }
        };
        i._enableTransforms = function(a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2;
        };
        i._linkCSSP = function(a, b, c, d) {
            if (a) {
                if (b) b._prev = a;
                if (a._next) a._next._prev = a._prev;
                if (c) c._next = a; else if (!d && null === this._firstPT) this._firstPT = a;
                if (a._prev) a._prev._next = a._next; else if (this._firstPT === a) this._firstPT = a._next;
                a._next = b;
                a._prev = c;
            }
            return a;
        };
        i._kill = function(b) {
            var c = b, d, e, f;
            if (b.css_autoAlpha || b.css_alpha) {
                c = {};
                for (e in b) c[e] = b[e];
                c.css_opacity = 1;
                if (c.css_autoAlpha) c.css_visibility = 1;
            }
            if (b.css_className && (d = this._classNamePT)) {
                f = d.xfirst;
                if (f && f._prev) this._linkCSSP(f._prev, d._next, f._prev._prev); else if (f === this._firstPT) this._firstPT = d._next;
                if (d._next) this._linkCSSP(d._next, d._next._next, f._prev);
                this._classNamePT = null;
            }
            return a.prototype._kill.call(this, c);
        };
        var Hb = function(a, b, c) {
            var d, e, f, g;
            if (a.slice) {
                e = a.length;
                while (--e > -1) Hb(a[e], b, c);
                return;
            }
            d = a.childNodes;
            e = d.length;
            while (--e > -1) {
                f = d[e];
                g = f.type;
                if (f.style) {
                    b.push(Y(f));
                    if (c) c.push(f);
                }
                if ((1 === g || 9 === g || 11 === g) && f.childNodes.length) Hb(f, b, c);
            }
        };
        c.cascadeTo = function(a, c, d) {
            var e = b.to(a, c, d), f = [ e ], g = [], h = [], i = [], j = b._internals.reservedProps, k, l, m;
            a = e._targets || e.target;
            Hb(a, g, i);
            e.render(c, true);
            Hb(a, h);
            e.render(0, true);
            e._enabled(true);
            k = i.length;
            while (--k > -1) {
                l = Z(i[k], g[k], h[k]);
                if (l.firstMPT) {
                    l = l.difs;
                    for (m in d) if (j[m]) l[m] = d[m];
                    f.push(b.to(i[k], c, l));
                }
            }
            return f;
        };
        a.activate([ c ]);
        return c;
    }, true);
    !function() {
        var a = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(a, b, c) {
                this._tween = c;
                return true;
            }
        }), b = a.prototype;
        b._onInitAllProps = function() {
            var a = this._tween, b = a.vars.roundProps instanceof Array ? a.vars.roundProps : a.vars.roundProps.split(","), c = b.length, d = {}, e = a._propLookup.roundProps, f, g, h;
            while (--c > -1) d[b[c]] = 1;
            c = b.length;
            while (--c > -1) {
                f = b[c];
                g = a._firstPT;
                while (g) {
                    h = g._next;
                    if (g.pg) g.t._roundProps(d, true); else if (g.n === f) {
                        this._add(g.t, f, g.s, g.c);
                        if (h) h._prev = g._prev;
                        if (g._prev) g._prev._next = h; else if (a._firstPT === g) a._firstPT = h;
                        g._next = g._prev = null;
                        a._propLookup[f] = e;
                    }
                    g = h;
                }
            }
            return false;
        };
        b._add = function(a, b, c, d) {
            this._addTween(a, b, c, c + d, b, true);
            this._overwriteProps.push(b);
        };
    }();
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(a, b, c) {
            var d;
            if ("function" !== typeof a.setAttribute) return false;
            this._target = a;
            this._proxy = {};
            for (d in b) {
                this._addTween(this._proxy, d, parseFloat(a.getAttribute(d)), b[d], d);
                this._overwriteProps.push(d);
            }
            return true;
        },
        set: function(a) {
            this._super.setRatio.call(this, a);
            var b = this._overwriteProps, c = b.length, d;
            while (--c > -1) {
                d = b[c];
                this._target.setAttribute(d, this._proxy[d] + "");
            }
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(a, b, c) {
            if ("object" !== typeof b) b = {
                rotation: b
            };
            this.finals = {};
            var d = true === b.useRadians ? 2 * Math.PI : 360, e = 1e-6, f, g, h, i, j, k;
            for (f in b) if ("useRadians" !== f) {
                k = (b[f] + "").split("_");
                g = k[0];
                h = parseFloat("function" !== typeof a[f] ? a[f] : a[f.indexOf("set") || "function" !== typeof a["get" + f.substr(3)] ? f : "get" + f.substr(3)]());
                i = this.finals[f] = "string" === typeof g && "=" === g.charAt(1) ? h + parseInt(g.charAt(0) + "1", 10) * Number(g.substr(2)) : Number(g) || 0;
                j = i - h;
                if (k.length) {
                    g = k.join("_");
                    if (g.indexOf("short") !== -1) {
                        j %= d;
                        if (j !== j % (d / 2)) j = j < 0 ? j + d : j - d;
                    }
                    if (g.indexOf("_cw") !== -1 && j < 0) j = (j + 9999999999 * d) % d - (j / d | 0) * d; else if (g.indexOf("ccw") !== -1 && j > 0) j = (j - 9999999999 * d) % d - (j / d | 0) * d;
                }
                if (j > e || j < -e) {
                    this._addTween(a, f, h, h + j, f);
                    this._overwriteProps.push(f);
                }
            }
            return true;
        },
        set: function(a) {
            var b;
            if (1 !== a) this._super.setRatio.call(this, a); else {
                b = this._firstPT;
                while (b) {
                    if (b.f) b.t[b.p](this.finals[b.p]); else b.t[b.p] = this.finals[b.p];
                    b = b._next;
                }
            }
        }
    })._autoCSS = true;
    window._gsDefine("easing.Back", [ "easing.Ease" ], function(a) {
        var b = window.GreenSockGlobals || window, c = b.com.greensock, d = 2 * Math.PI, e = Math.PI / 2, f = c._class, g = function(b, c) {
            var d = f("easing." + b, function() {}, true), e = d.prototype = new a();
            e.constructor = d;
            e.getRatio = c;
            return d;
        }, h = a.register || function() {}, i = function(a, b, c, d, e) {
            var g = f("easing." + a, {
                easeOut: new b(),
                easeIn: new c(),
                easeInOut: new d()
            }, true);
            h(g, a);
            return g;
        }, j = function(a, b, c) {
            this.t = a;
            this.v = b;
            if (c) {
                this.next = c;
                c.prev = this;
                this.c = c.v - b;
                this.gap = c.t - a;
            }
        }, k = function(b, c) {
            var d = f("easing." + b, function(a) {
                this._p1 = a || 0 === a ? a : 1.70158;
                this._p2 = 1.525 * this._p1;
            }, true), e = d.prototype = new a();
            e.constructor = d;
            e.getRatio = c;
            e.config = function(a) {
                return new d(a);
            };
            return d;
        }, l = i("Back", k("BackOut", function(a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
        }), k("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1);
        }), k("BackInOut", function(a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
        })), m = f("easing.SlowMo", function(a, b, c) {
            b = b || 0 === b ? b : .7;
            if (null == a) a = .7; else if (a > 1) a = 1;
            this._p = 1 !== a ? b : 0;
            this._p1 = (1 - a) / 2;
            this._p2 = a;
            this._p3 = this._p1 + this._p2;
            this._calcEnd = true === c;
        }, true), n = m.prototype = new a(), o, p, q;
        n.constructor = m;
        n.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            if (a < this._p1) return this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b; else if (a > this._p3) return this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a;
            return this._calcEnd ? 1 : b;
        };
        m.ease = new m(.7, .7);
        n.config = m.config = function(a, b, c) {
            return new m(a, b, c);
        };
        o = f("easing.SteppedEase", function(a) {
            a = a || 1;
            this._p1 = 1 / a;
            this._p2 = a + 1;
        }, true);
        n = o.prototype = new a();
        n.constructor = o;
        n.getRatio = function(a) {
            if (a < 0) a = 0; else if (a >= 1) a = .999999999;
            return (this._p2 * a >> 0) * this._p1;
        };
        n.config = o.config = function(a) {
            return new o(a);
        };
        p = f("easing.RoughEase", function(b) {
            b = b || {};
            var c = b.taper || "none", d = [], e = 0, f = 0 | (b.points || 20), g = f, h = false !== b.randomize, i = true === b.clamp, k = b.template instanceof a ? b.template : null, l = "number" === typeof b.strength ? .4 * b.strength : .4, m, n, o, p, q, r;
            while (--g > -1) {
                m = h ? Math.random() : 1 / f * g;
                n = k ? k.getRatio(m) : m;
                if ("none" === c) o = l; else if ("out" === c) {
                    p = 1 - m;
                    o = p * p * l;
                } else if ("in" === c) o = m * m * l; else if (m < .5) {
                    p = 2 * m;
                    o = p * p * .5 * l;
                } else {
                    p = 2 * (1 - m);
                    o = p * p * .5 * l;
                }
                if (h) n += Math.random() * o - .5 * o; else if (g % 2) n += .5 * o; else n -= .5 * o;
                if (i) if (n > 1) n = 1; else if (n < 0) n = 0;
                d[e++] = {
                    x: m,
                    y: n
                };
            }
            d.sort(function(a, b) {
                return a.x - b.x;
            });
            r = new j(1, 1, null);
            g = f;
            while (--g > -1) {
                q = d[g];
                r = new j(q.x, q.y, r);
            }
            this._prev = new j(0, 0, 0 !== r.t ? r : r.next);
        }, true);
        n = p.prototype = new a();
        n.constructor = p;
        n.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                while (b.next && a >= b.t) b = b.next;
                b = b.prev;
            } else while (b.prev && a <= b.t) b = b.prev;
            this._prev = b;
            return b.v + (a - b.t) / b.gap * b.c;
        };
        n.config = function(a) {
            return new p(a);
        };
        p.ease = new p();
        i("Bounce", g("BounceOut", function(a) {
            if (a < 1 / 2.75) return 7.5625 * a * a; else if (a < 2 / 2.75) return 7.5625 * (a -= 1.5 / 2.75) * a + .75; else if (a < 2.5 / 2.75) return 7.5625 * (a -= 2.25 / 2.75) * a + .9375;
            return 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
        }), g("BounceIn", function(a) {
            if ((a = 1 - a) < 1 / 2.75) return 1 - 7.5625 * a * a; else if (a < 2 / 2.75) return 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75); else if (a < 2.5 / 2.75) return 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375);
            return 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
        }), g("BounceInOut", function(a) {
            var b = a < .5;
            if (b) a = 1 - 2 * a; else a = 2 * a - 1;
            if (a < 1 / 2.75) a = 7.5625 * a * a; else if (a < 2 / 2.75) a = 7.5625 * (a -= 1.5 / 2.75) * a + .75; else if (a < 2.5 / 2.75) a = 7.5625 * (a -= 2.25 / 2.75) * a + .9375; else a = 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
            return b ? .5 * (1 - a) : .5 * a + .5;
        }));
        i("Circ", g("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a);
        }), g("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1);
        }), g("CircInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
        }));
        q = function(b, c, e) {
            var g = f("easing." + b, function(a, b) {
                this._p1 = a || 1;
                this._p2 = b || e;
                this._p3 = this._p2 / d * (Math.asin(1 / this._p1) || 0);
            }, true), h = g.prototype = new a();
            h.constructor = g;
            h.getRatio = c;
            h.config = function(a, b) {
                return new g(a, b);
            };
            return g;
        };
        i("Elastic", q("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * d / this._p2) + 1;
        }, .3), q("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2));
        }, .3), q("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2) * .5 + 1;
        }, .45));
        i("Expo", g("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a);
        }), g("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001;
        }), g("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
        }));
        i("Sine", g("SineOut", function(a) {
            return Math.sin(a * e);
        }), g("SineIn", function(a) {
            return -Math.cos(a * e) + 1;
        }), g("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1);
        }));
        f("easing.EaseLookup", {
            find: function(b) {
                return a.map[b];
            }
        }, true);
        h(b.SlowMo, "SlowMo", "ease,");
        h(p, "RoughEase", "ease,");
        h(o, "SteppedEase", "ease,");
        return l;
    }, true);
});

!function(a) {
    "use strict";
    var b = a.GreenSockGlobals || a, c = function(a) {
        var c = a.split("."), d = b, e;
        for (e = 0; e < c.length; e++) d[c[e]] = d = d[c[e]] || {};
        return d;
    }, d = c("com.greensock"), e = [].slice, f = function() {}, g, h, i, j, k, l = {}, m = function(d, e, f, g) {
        this.sc = l[d] ? l[d].sc : [];
        l[d] = this;
        this.gsClass = null;
        this.func = f;
        var h = [];
        this.check = function(i) {
            var j = e.length, k = j, n, o, p, q;
            while (--j > -1) if ((n = l[e[j]] || new m(e[j], [])).gsClass) {
                h[j] = n.gsClass;
                k--;
            } else if (i) n.sc.push(this);
            if (0 === k && f) {
                o = ("com.greensock." + d).split(".");
                p = o.pop();
                q = c(o.join("."))[p] = this.gsClass = f.apply(f, h);
                if (g) {
                    b[p] = q;
                    if ("function" === typeof define && define.amd) define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").join("/"), [], function() {
                        return q;
                    }); else if ("undefined" !== typeof module && module.exports) module.exports = q;
                }
                for (j = 0; j < this.sc.length; j++) this.sc[j].check();
            }
        };
        this.check(true);
    }, n = a._gsDefine = function(a, b, c, d) {
        return new m(a, b, c, d);
    }, o = d._class = function(a, b, c) {
        b = b || function() {};
        n(a, [], function() {
            return b;
        }, c);
        return b;
    };
    n.globals = b;
    var p = [ 0, 0, 1, 1 ], q = [], r = o("easing.Ease", function(a, b, c, d) {
        this._func = a;
        this._type = c || 0;
        this._power = d || 0;
        this._params = b ? p.concat(b) : p;
    }, true), s = r.map = {}, t = r.register = function(a, b, c, e) {
        var f = b.split(","), g = f.length, h = (c || "easeIn,easeOut,easeInOut").split(","), i, j, k, l;
        while (--g > -1) {
            j = f[g];
            i = e ? o("easing." + j, null, true) : d.easing[j] || {};
            k = h.length;
            while (--k > -1) {
                l = h[k];
                s[j + "." + l] = s[l + j] = i[l] = a.getRatio ? a : a[l] || new a();
            }
        }
    };
    i = r.prototype;
    i._calcEnd = false;
    i.getRatio = function(a) {
        if (this._func) {
            this._params[0] = a;
            return this._func.apply(null, this._params);
        }
        var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : a < .5 ? 2 * a : 2 * (1 - a);
        if (1 === c) d *= d; else if (2 === c) d *= d * d; else if (3 === c) d *= d * d * d; else if (4 === c) d *= d * d * d * d;
        return 1 === b ? 1 - d : 2 === b ? d : a < .5 ? d / 2 : 1 - d / 2;
    };
    g = [ "Linear", "Quad", "Cubic", "Quart", "Quint,Strong" ];
    h = g.length;
    while (--h > -1) {
        i = g[h] + ",Power" + h;
        t(new r(null, null, 1, h), i, "easeOut", true);
        t(new r(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : ""));
        t(new r(null, null, 3, h), i, "easeInOut");
    }
    s.linear = d.easing.Linear.easeIn;
    s.swing = d.easing.Quad.easeInOut;
    var u = o("events.EventDispatcher", function(a) {
        this._listeners = {};
        this._eventTarget = a || this;
    });
    i = u.prototype;
    i.addEventListener = function(a, b, c, d, e) {
        e = e || 0;
        var f = this._listeners[a], g = 0, h, i;
        if (null == f) this._listeners[a] = f = [];
        i = f.length;
        while (--i > -1) {
            h = f[i];
            if (h.c === b && h.s === c) f.splice(i, 1); else if (0 === g && h.pr < e) g = i + 1;
        }
        f.splice(g, 0, {
            c: b,
            s: c,
            up: d,
            pr: e
        });
        if (this === j && !k) j.wake();
    };
    i.removeEventListener = function(a, b) {
        var c = this._listeners[a], d;
        if (c) {
            d = c.length;
            while (--d > -1) if (c[d].c === b) {
                c.splice(d, 1);
                return;
            }
        }
    };
    i.dispatchEvent = function(a) {
        var b = this._listeners[a], c, d, e;
        if (b) {
            c = b.length;
            d = this._eventTarget;
            while (--c > -1) {
                e = b[c];
                if (e.up) e.c.call(e.s || d, {
                    type: a,
                    target: d
                }); else e.c.call(e.s || d);
            }
        }
    };
    var v = a.requestAnimationFrame, w = a.cancelAnimationFrame, x = Date.now || function() {
        return new Date().getTime();
    };
    g = [ "ms", "moz", "webkit", "o" ];
    h = g.length;
    while (--h > -1 && !v) {
        v = a[g[h] + "RequestAnimationFrame"];
        w = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
    }
    o("Ticker", function(a, b) {
        var c = this, d = x(), e = false !== b && v, g, h, i, l, m, n = function(a) {
            c.time = (x() - d) / 1e3;
            var b = i, e = c.time - m;
            if (!g || e > 0 || true === a) {
                c.frame++;
                m += e + (e >= l ? .004 : l - e);
                c.dispatchEvent("tick");
            }
            if (true !== a && b === i) i = h(n);
        };
        u.call(c);
        this.time = this.frame = 0;
        this.tick = function() {
            n(true);
        };
        this.sleep = function() {
            if (null == i) return;
            if (!e || !w) clearTimeout(i); else w(i);
            h = f;
            i = null;
            if (c === j) k = false;
        };
        this.wake = function() {
            if (null !== i) c.sleep();
            h = 0 === g ? f : !e || !v ? function(a) {
                return setTimeout(a, 1e3 * (m - c.time) + 1 | 0);
            } : v;
            if (c === j) k = true;
            n(2);
        };
        this.fps = function(a) {
            if (!arguments.length) return g;
            g = a;
            l = 1 / (g || 60);
            m = this.time + l;
            c.wake();
        };
        this.useRAF = function(a) {
            if (!arguments.length) return e;
            c.sleep();
            e = a;
            c.fps(g);
        };
        c.fps(a);
        setTimeout(function() {
            if (e && (!i || c.frame < 5)) c.useRAF(false);
        }, 1500);
    });
    i = d.Ticker.prototype = new d.events.EventDispatcher();
    i.constructor = d.Ticker;
    var y = o("core.Animation", function(a, b) {
        this.vars = b || {};
        this._duration = this._totalDuration = a || 0;
        this._delay = Number(this.vars.delay) || 0;
        this._timeScale = 1;
        this._active = true === this.vars.immediateRender;
        this.data = this.vars.data;
        this._reversed = true === this.vars.reversed;
        if (!K) return;
        if (!k) j.wake();
        var c = this.vars.useFrames ? J : K;
        c.add(this, c._time);
        if (this.vars.paused) this.paused(true);
    });
    j = y.ticker = new d.Ticker();
    i = y.prototype;
    i._dirty = i._gc = i._initted = i._paused = false;
    i._totalTime = i._time = 0;
    i._rawPrevTime = -1;
    i._next = i._last = i._onUpdate = i._timeline = i.timeline = null;
    i._paused = false;
    i.play = function(a, b) {
        if (arguments.length) this.seek(a, b);
        return this.reversed(false).paused(false);
    };
    i.pause = function(a, b) {
        if (arguments.length) this.seek(a, b);
        return this.paused(true);
    };
    i.resume = function(a, b) {
        if (arguments.length) this.seek(a, b);
        return this.paused(false);
    };
    i.seek = function(a, b) {
        return this.totalTime(Number(a), false !== b);
    };
    i.restart = function(a, b) {
        return this.reversed(false).paused(false).totalTime(a ? -this._delay : 0, false !== b, true);
    };
    i.reverse = function(a, b) {
        if (arguments.length) this.seek(a || this.totalDuration(), b);
        return this.reversed(true).paused(false);
    };
    i.render = function() {};
    i.invalidate = function() {
        return this;
    };
    i._enabled = function(a, b) {
        if (!k) j.wake();
        this._gc = !a;
        this._active = a && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration;
        if (true !== b) if (a && !this.timeline) this._timeline.add(this, this._startTime - this._delay); else if (!a && this.timeline) this._timeline._remove(this, true);
        return false;
    };
    i._kill = function(a, b) {
        return this._enabled(false, false);
    };
    i.kill = function(a, b) {
        this._kill(a, b);
        return this;
    };
    i._uncache = function(a) {
        var b = a ? this : this.timeline;
        while (b) {
            b._dirty = true;
            b = b.timeline;
        }
        return this;
    };
    i.eventCallback = function(a, b, c, d) {
        if (null == a) return null; else if ("on" === a.substr(0, 2)) {
            var e = this.vars, f;
            if (1 === arguments.length) return e[a];
            if (null == b) delete e[a]; else {
                e[a] = b;
                e[a + "Params"] = c;
                e[a + "Scope"] = d;
                if (c) {
                    f = c.length;
                    while (--f > -1) if ("{self}" === c[f]) {
                        c = e[a + "Params"] = c.concat();
                        c[f] = this;
                    }
                }
            }
            if ("onUpdate" === a) this._onUpdate = b;
        }
        return this;
    };
    i.delay = function(a) {
        if (!arguments.length) return this._delay;
        if (this._timeline.smoothChildTiming) this.startTime(this._startTime + a - this._delay);
        this._delay = a;
        return this;
    };
    i.duration = function(a) {
        if (!arguments.length) {
            this._dirty = false;
            return this._duration;
        }
        this._duration = this._totalDuration = a;
        this._uncache(true);
        if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (0 !== a) this.totalTime(this._totalTime * (a / this._duration), true);
        return this;
    };
    i.totalDuration = function(a) {
        this._dirty = false;
        return !arguments.length ? this._totalDuration : this.duration(a);
    };
    i.time = function(a, b) {
        if (!arguments.length) return this._time;
        if (this._dirty) this.totalDuration();
        return this.totalTime(a > this._duration ? this._duration : a, b);
    };
    i.totalTime = function(a, b, c) {
        if (!k) j.wake();
        if (!arguments.length) return this._totalTime;
        if (this._timeline) {
            if (a < 0 && !c) a += this.totalDuration();
            if (this._timeline.smoothChildTiming) {
                if (this._dirty) this.totalDuration();
                var d = this._totalDuration, e = this._timeline;
                if (a > d && !c) a = d;
                this._startTime = (this._paused ? this._pauseTime : e._time) - (!this._reversed ? a : d - a) / this._timeScale;
                if (!e._dirty) this._uncache(false);
                if (!e._active) while (e._timeline) {
                    e.totalTime(e._totalTime, true);
                    e = e._timeline;
                }
            }
            if (this._gc) this._enabled(true, false);
            if (this._totalTime !== a) this.render(a, b, false);
        }
        return this;
    };
    i.startTime = function(a) {
        if (!arguments.length) return this._startTime;
        if (a !== this._startTime) {
            this._startTime = a;
            if (this.timeline) if (this.timeline._sortChildren) this.timeline.add(this, a - this._delay);
        }
        return this;
    };
    i.timeScale = function(a) {
        if (!arguments.length) return this._timeScale;
        a = a || 1e-6;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime();
            this._startTime = c - (c - this._startTime) * this._timeScale / a;
        }
        this._timeScale = a;
        return this._uncache(false);
    };
    i.reversed = function(a) {
        if (!arguments.length) return this._reversed;
        if (a != this._reversed) {
            this._reversed = a;
            this.totalTime(this._totalTime, true);
        }
        return this;
    };
    i.paused = function(a) {
        if (!arguments.length) return this._paused;
        if (a != this._paused) if (this._timeline) {
            if (!k && !a) j.wake();
            var b = this._timeline.rawTime(), c = b - this._pauseTime;
            if (!a && this._timeline.smoothChildTiming) {
                this._startTime += c;
                this._uncache(false);
            }
            this._pauseTime = a ? b : null;
            this._paused = a;
            this._active = !a && this._totalTime > 0 && this._totalTime < this._totalDuration;
            if (!a && 0 !== c && 0 !== this._duration) this.render(this._totalTime, true, true);
        }
        if (this._gc && !a) this._enabled(true, false);
        return this;
    };
    var z = o("core.SimpleTimeline", function(a) {
        y.call(this, 0, a);
        this.autoRemoveChildren = this.smoothChildTiming = true;
    });
    i = z.prototype = new y();
    i.constructor = z;
    i.kill()._gc = false;
    i._first = i._last = null;
    i._sortChildren = false;
    i.add = i.insert = function(a, b, c, d) {
        var e, f;
        a._startTime = Number(b || 0) + a._delay;
        if (a._paused) if (this !== a._timeline) a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale;
        if (a.timeline) a.timeline._remove(a, true);
        a.timeline = a._timeline = this;
        if (a._gc) a._enabled(true, true);
        e = this._last;
        if (this._sortChildren) {
            f = a._startTime;
            while (e && e._startTime > f) e = e._prev;
        }
        if (e) {
            a._next = e._next;
            e._next = a;
        } else {
            a._next = this._first;
            this._first = a;
        }
        if (a._next) a._next._prev = a; else this._last = a;
        a._prev = e;
        if (this._timeline) this._uncache(true);
        return this;
    };
    i._remove = function(a, b) {
        if (a.timeline === this) {
            if (!b) a._enabled(false, true);
            a.timeline = null;
            if (a._prev) a._prev._next = a._next; else if (this._first === a) this._first = a._next;
            if (a._next) a._next._prev = a._prev; else if (this._last === a) this._last = a._prev;
            if (this._timeline) this._uncache(true);
        }
        return this;
    };
    i.render = function(a, b, c) {
        var d = this._first, e;
        this._totalTime = this._time = this._rawPrevTime = a;
        while (d) {
            e = d._next;
            if (d._active || a >= d._startTime && !d._paused) if (!d._reversed) d.render((a - d._startTime) * d._timeScale, b, c); else d.render((!d._dirty ? d._totalDuration : d.totalDuration()) - (a - d._startTime) * d._timeScale, b, c);
            d = e;
        }
    };
    i.rawTime = function() {
        if (!k) j.wake();
        return this._totalTime;
    };
    var A = o("TweenLite", function(a, b, c) {
        y.call(this, b, c);
        if (null == a) throw "Cannot tween a null target.";
        this.target = a = "string" !== typeof a ? a : A.selector(a) || a;
        var d = a.jquery || a.length && a[0] && a[0].nodeType && a[0].style, f = this.vars.overwrite, g, h, i;
        this._overwrite = f = null == f ? I[A.defaultOverwrite] : "number" === typeof f ? f >> 0 : I[f];
        if ((d || a instanceof Array) && "number" !== typeof a[0]) {
            this._targets = i = e.call(a, 0);
            this._propLookup = [];
            this._siblings = [];
            for (g = 0; g < i.length; g++) {
                h = i[g];
                if (!h) {
                    i.splice(g--, 1);
                    continue;
                } else if ("string" === typeof h) {
                    h = i[g--] = A.selector(h);
                    if ("string" === typeof h) i.splice(g + 1, 1);
                    continue;
                } else if (h.length && h[0] && h[0].nodeType && h[0].style) {
                    i.splice(g--, 1);
                    this._targets = i = i.concat(e.call(h, 0));
                    continue;
                }
                this._siblings[g] = L(h, this, false);
                if (1 === f) if (this._siblings[g].length > 1) M(h, this, null, 1, this._siblings[g]);
            }
        } else {
            this._propLookup = {};
            this._siblings = L(a, this, false);
            if (1 === f) if (this._siblings.length > 1) M(a, this, null, 1, this._siblings);
        }
        if (this.vars.immediateRender || 0 === b && 0 === this._delay && false !== this.vars.immediateRender) this.render(-this._delay, false, true);
    }, true), B = function(a) {
        return a.length && a[0] && a[0].nodeType && a[0].style;
    }, C = function(a, b) {
        var c = {}, d;
        for (d in a) if (!H[d] && (!(d in b) || "x" === d || "y" === d || "width" === d || "height" === d || "className" === d) && (!E[d] || E[d] && E[d]._autoCSS)) {
            c[d] = a[d];
            delete a[d];
        }
        a.css = c;
    };
    i = A.prototype = new y();
    i.constructor = A;
    i.kill()._gc = false;
    i.ratio = 0;
    i._firstPT = i._targets = i._overwrittenProps = i._startAt = null;
    i._notifyPluginsOfEnabled = false;
    A.version = "1.9.7";
    A.defaultEase = i._ease = new r(null, null, 1, 1);
    A.defaultOverwrite = "auto";
    A.ticker = j;
    A.autoSleep = true;
    A.selector = a.$ || a.jQuery || function(b) {
        if (a.$) {
            A.selector = a.$;
            return a.$(b);
        }
        return a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b;
    };
    var D = A._internals = {}, E = A._plugins = {}, F = A._tweenLookup = {}, G = 0, H = D.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1
    }, I = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        "true": 1,
        "false": 0
    }, J = y._rootFramesTimeline = new z(), K = y._rootTimeline = new z();
    K._startTime = j.time;
    J._startTime = j.frame;
    K._active = J._active = true;
    y._updateRoot = function() {
        K.render((j.time - K._startTime) * K._timeScale, false, false);
        J.render((j.frame - J._startTime) * J._timeScale, false, false);
        if (!(j.frame % 120)) {
            var a, b, c;
            for (c in F) {
                b = F[c].tweens;
                a = b.length;
                while (--a > -1) if (b[a]._gc) b.splice(a, 1);
                if (0 === b.length) delete F[c];
            }
            c = K._first;
            if (!c || c._paused) if (A.autoSleep && !J._first && 1 === j._listeners.tick.length) {
                while (c && c._paused) c = c._next;
                if (!c) j.sleep();
            }
        }
    };
    j.addEventListener("tick", y._updateRoot);
    var L = function(a, b, c) {
        var d = a._gsTweenID, e, f;
        if (!F[d || (a._gsTweenID = d = "t" + G++)]) F[d] = {
            target: a,
            tweens: []
        };
        if (b) {
            e = F[d].tweens;
            e[f = e.length] = b;
            if (c) while (--f > -1) if (e[f] === b) e.splice(f, 1);
        }
        return F[d].tweens;
    }, M = function(a, b, c, d, e) {
        var f, g, h, i;
        if (1 === d || d >= 4) {
            i = e.length;
            for (f = 0; f < i; f++) if ((h = e[f]) !== b) {
                if (!h._gc) if (h._enabled(false, false)) g = true;
            } else if (5 === d) break;
            return g;
        }
        var j = b._startTime + 1e-10, k = [], l = 0, m = 0 === b._duration, n;
        f = e.length;
        while (--f > -1) if ((h = e[f]) === b || h._gc || h._paused) ; else if (h._timeline !== b._timeline) {
            n = n || N(b, 0, m);
            if (0 === N(h, n, m)) k[l++] = h;
        } else if (h._startTime <= j) if (h._startTime + h.totalDuration() / h._timeScale + 1e-10 > j) if (!((m || !h._initted) && j - h._startTime <= 2e-10)) k[l++] = h;
        f = l;
        while (--f > -1) {
            h = k[f];
            if (2 === d) if (h._kill(c, a)) g = true;
            if (2 !== d || !h._firstPT && h._initted) if (h._enabled(false, false)) g = true;
        }
        return g;
    }, N = function(a, b, c) {
        var d = a._timeline, e = d._timeScale, f = a._startTime, g = 1e-10;
        while (d._timeline) {
            f += d._startTime;
            e *= d._timeScale;
            if (d._paused) return -100;
            d = d._timeline;
        }
        f /= e;
        return f > b ? f - b : c && f === b || !a._initted && f - b < 2 * g ? g : (f += a.totalDuration() / a._timeScale / e) > b + g ? 0 : f - b - g;
    };
    i._init = function() {
        var a = this.vars, b = this._overwrittenProps, c = this._duration, d = a.ease, e, f, g, h;
        if (a.startAt) {
            a.startAt.overwrite = 0;
            a.startAt.immediateRender = true;
            this._startAt = A.to(this.target, 0, a.startAt);
            if (a.immediateRender) {
                this._startAt = null;
                if (0 === this._time && 0 !== c) return;
            }
        } else if (a.runBackwards && a.immediateRender && 0 !== c) if (this._startAt) {
            this._startAt.render(-1, true);
            this._startAt = null;
        } else if (0 === this._time) {
            g = {};
            for (h in a) if (!H[h] || "autoCSS" === h) g[h] = a[h];
            g.overwrite = 0;
            this._startAt = A.to(this.target, 0, g);
            return;
        }
        if (!d) this._ease = A.defaultEase; else if (d instanceof r) this._ease = a.easeParams instanceof Array ? d.config.apply(d, a.easeParams) : d; else this._ease = "function" === typeof d ? new r(d, a.easeParams) : s[d] || A.defaultEase;
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets) {
            e = this._targets.length;
            while (--e > -1) if (this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], b ? b[e] : null)) f = true;
        } else f = this._initProps(this.target, this._propLookup, this._siblings, b);
        if (f) A._onPluginEvent("_onInitAllProps", this);
        if (b) if (!this._firstPT) if ("function" !== typeof this.target) this._enabled(false, false);
        if (a.runBackwards) {
            g = this._firstPT;
            while (g) {
                g.s += g.c;
                g.c = -g.c;
                g = g._next;
            }
        }
        this._onUpdate = a.onUpdate;
        this._initted = true;
    };
    i._initProps = function(a, b, c, d) {
        var e, f, g, h, i, j, k;
        if (null == a) return false;
        if (!this.vars.css) if (a.style) if (a.nodeType) if (E.css) if (false !== this.vars.autoCSS) C(this.vars, a);
        for (e in this.vars) {
            if (H[e]) {
                if ("onStartParams" === e || "onUpdateParams" === e || "onCompleteParams" === e || "onReverseCompleteParams" === e || "onRepeatParams" === e) if (i = this.vars[e]) {
                    f = i.length;
                    while (--f > -1) if ("{self}" === i[f]) {
                        i = this.vars[e] = i.concat();
                        i[f] = this;
                    }
                }
            } else if (E[e] && (h = new E[e]())._onInitTween(a, this.vars[e], this)) {
                this._firstPT = j = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: true,
                    n: e,
                    pg: true,
                    pr: h._priority
                };
                f = h._overwriteProps.length;
                while (--f > -1) b[h._overwriteProps[f]] = this._firstPT;
                if (h._priority || h._onInitAllProps) g = true;
                if (h._onDisable || h._onEnable) this._notifyPluginsOfEnabled = true;
            } else {
                this._firstPT = b[e] = j = {
                    _next: this._firstPT,
                    t: a,
                    p: e,
                    f: "function" === typeof a[e],
                    n: e,
                    pg: false,
                    pr: 0
                };
                j.s = !j.f ? parseFloat(a[e]) : a[e.indexOf("set") || "function" !== typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]();
                k = this.vars[e];
                j.c = "string" === typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
            }
            if (j) if (j._next) j._next._prev = j;
        }
        if (d) if (this._kill(d, a)) return this._initProps(a, b, c, d);
        if (this._overwrite > 1) if (this._firstPT) if (c.length > 1) if (M(a, this, b, this._overwrite, c)) {
            this._kill(b, a);
            return this._initProps(a, b, c, d);
        }
        return g;
    };
    i.render = function(a, b, c) {
        var d = this._time, e, f, g;
        if (a >= this._duration) {
            this._totalTime = this._time = this._duration;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
            if (!this._reversed) {
                e = true;
                f = "onComplete";
            }
            if (0 === this._duration) {
                if (0 === a || this._rawPrevTime < 0) if (this._rawPrevTime !== a) {
                    c = true;
                    if (this._rawPrevTime > 0) {
                        f = "onReverseComplete";
                        if (b) a = -1;
                    }
                }
                this._rawPrevTime = a;
            }
        } else if (a < 1e-7) {
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (0 !== d || 0 === this._duration && this._rawPrevTime > 0) {
                f = "onReverseComplete";
                e = this._reversed;
            }
            if (a < 0) {
                this._active = false;
                if (0 === this._duration) {
                    if (this._rawPrevTime >= 0) c = true;
                    this._rawPrevTime = a;
                }
            } else if (!this._initted) c = true;
        } else {
            this._totalTime = this._time = a;
            if (this._easeType) {
                var h = a / this._duration, i = this._easeType, j = this._easePower;
                if (1 === i || 3 === i && h >= .5) h = 1 - h;
                if (3 === i) h *= 2;
                if (1 === j) h *= h; else if (2 === j) h *= h * h; else if (3 === j) h *= h * h * h; else if (4 === j) h *= h * h * h * h;
                if (1 === i) this.ratio = 1 - h; else if (2 === i) this.ratio = h; else if (a / this._duration < .5) this.ratio = h / 2; else this.ratio = 1 - h / 2;
            } else this.ratio = this._ease.getRatio(a / this._duration);
        }
        if (this._time === d && !c) return; else if (!this._initted) {
            this._init();
            if (!this._initted) return;
            if (this._time && !e) this.ratio = this._ease.getRatio(this._time / this._duration); else if (e && this._ease._calcEnd) this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1);
        }
        if (!this._active) if (!this._paused) this._active = true;
        if (0 === d) {
            if (this._startAt) if (a >= 0) this._startAt.render(a, b, c); else if (!f) f = "_dummyGS";
            if (this.vars.onStart) if (0 !== this._time || 0 === this._duration) if (!b) this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || q);
        }
        g = this._firstPT;
        while (g) {
            if (g.f) g.t[g.p](g.c * this.ratio + g.s); else g.t[g.p] = g.c * this.ratio + g.s;
            g = g._next;
        }
        if (this._onUpdate) {
            if (a < 0) if (this._startAt) this._startAt.render(a, b, c);
            if (!b) this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || q);
        }
        if (f) if (!this._gc) {
            if (a < 0 && this._startAt && !this._onUpdate) this._startAt.render(a, b, c);
            if (e) {
                if (this._timeline.autoRemoveChildren) this._enabled(false, false);
                this._active = false;
            }
            if (!b && this.vars[f]) this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || q);
        }
    };
    i._kill = function(a, b) {
        if ("all" === a) a = null;
        if (null == a) if (null == b || b === this.target) return this._enabled(false, false);
        b = "string" !== typeof b ? b || this._targets || this.target : A.selector(b) || b;
        var c, d, e, f, g, h, i, j;
        if ((b instanceof Array || B(b)) && "number" !== typeof b[0]) {
            c = b.length;
            while (--c > -1) if (this._kill(a, b[c])) h = true;
        } else {
            if (this._targets) {
                c = this._targets.length;
                while (--c > -1) if (b === this._targets[c]) {
                    g = this._propLookup[c] || {};
                    this._overwrittenProps = this._overwrittenProps || [];
                    d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                    break;
                }
            } else if (b !== this.target) return false; else {
                g = this._propLookup;
                d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
            }
            if (g) {
                i = a || g;
                j = a !== d && "all" !== d && a !== g && (null == a || true !== a._tempKill);
                for (e in i) {
                    if (f = g[e]) {
                        if (f.pg && f.t._kill(i)) h = true;
                        if (!f.pg || 0 === f.t._overwriteProps.length) {
                            if (f._prev) f._prev._next = f._next; else if (f === this._firstPT) this._firstPT = f._next;
                            if (f._next) f._next._prev = f._prev;
                            f._next = f._prev = null;
                        }
                        delete g[e];
                    }
                    if (j) d[e] = 1;
                }
                if (!this._firstPT && this._initted) this._enabled(false, false);
            }
        }
        return h;
    };
    i.invalidate = function() {
        if (this._notifyPluginsOfEnabled) A._onPluginEvent("_onDisable", this);
        this._firstPT = null;
        this._overwrittenProps = null;
        this._onUpdate = null;
        this._startAt = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = false;
        this._propLookup = this._targets ? {} : [];
        return this;
    };
    i._enabled = function(a, b) {
        if (!k) j.wake();
        if (a && this._gc) {
            var c = this._targets, d;
            if (c) {
                d = c.length;
                while (--d > -1) this._siblings[d] = L(c[d], this, true);
            } else this._siblings = L(this.target, this, true);
        }
        y.prototype._enabled.call(this, a, b);
        if (this._notifyPluginsOfEnabled) if (this._firstPT) return A._onPluginEvent(a ? "_onEnable" : "_onDisable", this);
        return false;
    };
    A.to = function(a, b, c) {
        return new A(a, b, c);
    };
    A.from = function(a, b, c) {
        c.runBackwards = true;
        c.immediateRender = false != c.immediateRender;
        return new A(a, b, c);
    };
    A.fromTo = function(a, b, c, d) {
        d.startAt = c;
        d.immediateRender = false != d.immediateRender && false != c.immediateRender;
        return new A(a, b, d);
    };
    A.delayedCall = function(a, b, c, d, e) {
        return new A(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            onCompleteScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            onReverseCompleteScope: d,
            immediateRender: false,
            useFrames: e,
            overwrite: 0
        });
    };
    A.set = function(a, b) {
        return new A(a, 0, b);
    };
    A.killTweensOf = A.killDelayedCallsTo = function(a, b) {
        var c = A.getTweensOf(a), d = c.length;
        while (--d > -1) c[d]._kill(b, a);
    };
    A.getTweensOf = function(a) {
        if (null == a) return [];
        a = "string" !== typeof a ? a : A.selector(a) || a;
        var b, c, d, e;
        if ((a instanceof Array || B(a)) && "number" !== typeof a[0]) {
            b = a.length;
            c = [];
            while (--b > -1) c = c.concat(A.getTweensOf(a[b]));
            b = c.length;
            while (--b > -1) {
                e = c[b];
                d = b;
                while (--d > -1) if (e === c[d]) c.splice(b, 1);
            }
        } else {
            c = L(a).concat();
            b = c.length;
            while (--b > -1) if (c[b]._gc) c.splice(b, 1);
        }
        return c;
    };
    var O = o("plugins.TweenPlugin", function(a, b) {
        this._overwriteProps = (a || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = b || 0;
        this._super = O.prototype;
    }, true);
    i = O.prototype;
    O.version = "1.9.1";
    O.API = 2;
    i._firstPT = null;
    i._addTween = function(a, b, c, d, e, f) {
        var g, h;
        if (null != d && (g = "number" === typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)))) {
            this._firstPT = h = {
                _next: this._firstPT,
                t: a,
                p: b,
                s: c,
                c: g,
                f: "function" === typeof a[b],
                n: e || b,
                r: f
            };
            if (h._next) h._next._prev = h;
        }
    };
    i.setRatio = function(a) {
        var b = this._firstPT, c = 1e-6, d;
        while (b) {
            d = b.c * a + b.s;
            if (b.r) d = d + (d > 0 ? .5 : -.5) >> 0; else if (d < c) if (d > -c) d = 0;
            if (b.f) b.t[b.p](d); else b.t[b.p] = d;
            b = b._next;
        }
    };
    i._kill = function(a) {
        var b = this._overwriteProps, c = this._firstPT, d;
        if (null != a[this._propName]) this._overwriteProps = []; else {
            d = b.length;
            while (--d > -1) if (null != a[b[d]]) b.splice(d, 1);
        }
        while (c) {
            if (null != a[c.n]) {
                if (c._next) c._next._prev = c._prev;
                if (c._prev) {
                    c._prev._next = c._next;
                    c._prev = null;
                } else if (this._firstPT === c) this._firstPT = c._next;
            }
            c = c._next;
        }
        return false;
    };
    i._roundProps = function(a, b) {
        var c = this._firstPT;
        while (c) {
            if (a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) c.r = b;
            c = c._next;
        }
    };
    A._onPluginEvent = function(a, b) {
        var c = b._firstPT, d, e, f, g, h;
        if ("_onInitAllProps" === a) {
            while (c) {
                h = c._next;
                e = f;
                while (e && e.pr > c.pr) e = e._next;
                if (c._prev = e ? e._prev : g) c._prev._next = c; else f = c;
                if (c._next = e) e._prev = c; else g = c;
                c = h;
            }
            c = b._firstPT = f;
        }
        while (c) {
            if (c.pg) if ("function" === typeof c.t[a]) if (c.t[a]()) d = true;
            c = c._next;
        }
        return d;
    };
    O.activate = function(a) {
        var b = a.length;
        while (--b > -1) if (a[b].API === O.API) E[new a[b]()._propName] = a[b];
        return true;
    };
    n.plugin = function(a) {
        if (!a || !a.propName || !a.init || !a.API) throw "illegal plugin definition.";
        var b = a.propName, c = a.priority || 0, d = a.overwriteProps, e = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_roundProps",
            initAll: "_onInitAllProps"
        }, f = o("plugins." + b.charAt(0).toUpperCase() + b.substr(1) + "Plugin", function() {
            O.call(this, b, c);
            this._overwriteProps = d || [];
        }, true === a.global), g = f.prototype = new O(b), h;
        g.constructor = f;
        f.API = a.API;
        for (h in e) if ("function" === typeof a[h]) g[e[h]] = a[h];
        f.version = a.version;
        O.activate([ f ]);
        return f;
    };
    g = a._gsQueue;
    if (g) {
        for (h = 0; h < g.length; h++) g[h]();
        for (i in l) if (!l[i].func) a.console.log("GSAP encountered missing dependency: com.greensock." + i);
    }
    k = false;
}(window);

!function(a) {
    var b = function(a, c, d, e, f) {
        var g = this;
        var h = b.prototype;
        this.imageSource_img = a;
        this.image_sdo = null;
        this.segmentWidth = c;
        this.segmentHeight = d;
        this.totalSegments = e;
        this.animDelay = f || 300;
        this.count = 0;
        this.delayTimerId_int;
        this.isShowed_bl = true;
        this.init = function() {
            this.setWidth(this.segmentWidth);
            this.setHeight(this.segmentHeight);
            this.image_sdo = new FWDR3DCarSimpleDisplayObject("img");
            this.image_sdo.setScreen(this.imageSource_img);
            this.addChild(this.image_sdo);
            this.hide(false);
        };
        this.start = function() {
            clearInterval(this.delayTimerId_int);
            this.delayTimerId_int = setInterval(this.updatePreloader, this.animDelay);
        };
        this.stop = function() {
            clearInterval(this.delayTimerId_int);
        };
        this.updatePreloader = function() {
            g.count++;
            if (g.count > g.totalSegments - 1) g.count = 0;
            var a = g.count * g.segmentWidth;
            g.image_sdo.setX(-a);
        };
        this.show = function() {
            g.setVisible(true);
            g.start();
            FWDR3DCarModTweenMax.killTweensOf(g);
            g.setAlpha(0);
            FWDR3DCarModTweenMax.to(g, 1, {
                alpha: 1
            });
            g.isShowed_bl = true;
        };
        this.hide = function(a) {
            if (!g.isShowed_bl) return;
            FWDR3DCarModTweenMax.killTweensOf(g);
            if (a) FWDR3DCarModTweenMax.to(g, 1, {
                alpha: 0,
                onComplete: g.onHideComplete
            }); else {
                g.setVisible(false);
                g.setAlpha(0);
                g.stop();
            }
            g.isShowed_bl = false;
        };
        this.onHideComplete = function() {
            g.setVisible(false);
            g.stop();
            g.dispatchEvent(b.HIDE_COMPLETE);
        };
        this.destroy = function() {
            FWDR3DCarModTweenMax.killTweensOf(g);
            g.stop();
            g.image_sdo.destroy();
            g.imageSource_img = null;
            g.image_sdo = null;
            a = null;
            g.setInnerHTML("");
            h.destroy();
            g = null;
            h = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject("div");
    };
    b.HIDE_COMPLETE = "hideComplete";
    b.prototype = null;
    a.FWDR3DCarPreloader = b;
}(window);

!function(a) {
    var b = function(c, d, e) {
        var f = this;
        var g = b.prototype;
        this.handlerLeftNImg = c.handlerLeftNImg;
        this.handlerLeftSImg = c.handlerLeftSImg;
        this.handlerCenterNImg = c.handlerCenterNImg;
        this.handlerCenterSImg = c.handlerCenterSImg;
        this.handlerRightNImg = c.handlerRightNImg;
        this.handlerRightSImg = c.handlerRightSImg;
        this.trackLeftImg = c.trackLeftImg;
        this.trackCenterImg = c.trackCenterImg;
        this.trackRightImg = c.trackRightImg;
        this.textColorNormal = c.scrollbarTextColorNormal;
        this.textColorSelected = c.scrollbarTextColorSelected;
        this.scrollbarHandlerDO;
        this.scrollbarHandlerLeftNDO;
        this.scrollbarHandlerLeftSDO;
        this.scrollbarHandlerCenterNDO;
        this.scrollbarHandlerCenterSDO;
        this.scrollbarHandlerRightNDO;
        this.scrollbarHandlerRightSDO;
        this.scrollbarHandlerTextDO;
        this.scrollbarHandlerOverDO;
        this.scrollbarTrackDO;
        this.scrollbarTrackLeftDO;
        this.scrollbarTrackCenterDO;
        this.scrollbarTrackRightDO;
        this.scrollbarMaxWidth = c.controlsMaxWidth;
        this.handlerWidth = c.handlerWidth;
        this.trackWidth = c.controlsMaxWidth;
        this.scrollbarHeight = c.trackLeftImg.height;
        this.trackLeftWidth = c.trackLeftImg.width;
        this.handlerLeftWidth = c.handlerLeftNImg.width;
        this.totalItems = d;
        this.curItemId = e;
        this.prevCurItemId;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isPressed = false;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent = FWDR3DCarUtils.hasPointerEvent;
        this.init = function() {
            f.setupMainContainers();
        };
        this.setupMainContainers = function() {
            f.setWidth(f.scrollbarMaxWidth);
            f.setHeight(f.scrollbarHeight);
            f.setTrack();
            f.setHandler();
            if (f.isMobile) if (f.hasPointerEvent) {
                f.scrollbarHandlerOverDO.screen.addEventListener("MSPointerOver", f.onScrollMouseOver);
                f.scrollbarHandlerOverDO.screen.addEventListener("MSPointerOut", f.onScrollMouseOut);
                f.scrollbarHandlerOverDO.screen.addEventListener("MSPointerDown", f.onScrollMouseDown);
            } else f.scrollbarHandlerOverDO.screen.addEventListener("touchstart", f.onScrollMouseDown); else {
                f.scrollbarHandlerOverDO.setButtonMode(true);
                if (f.screen.addEventListener) {
                    f.scrollbarHandlerOverDO.screen.addEventListener("mouseover", f.onScrollMouseOver);
                    f.scrollbarHandlerOverDO.screen.addEventListener("mouseout", f.onScrollMouseOut);
                    f.scrollbarHandlerOverDO.screen.addEventListener("mousedown", f.onScrollMouseDown);
                    a.addEventListener("mouseup", f.onScrollMouseUp);
                } else {
                    f.scrollbarHandlerOverDO.screen.attachEvent("onmouseover", f.onScrollMouseOver);
                    f.scrollbarHandlerOverDO.screen.attachEvent("onmouseout", f.onScrollMouseOut);
                    f.scrollbarHandlerOverDO.screen.attachEvent("onmousedown", f.onScrollMouseDown);
                    document.attachEvent("onmouseup", f.onScrollMouseUp);
                }
            }
        };
        this.setTrack = function() {
            f.scrollbarTrackDO = new FWDR3DCarDisplayObject("div");
            f.addChild(f.scrollbarTrackDO);
            f.scrollbarTrackDO.setWidth(f.trackWidth);
            f.scrollbarTrackDO.setHeight(f.scrollbarHeight);
            f.scrollbarTrackLeftDO = new FWDR3DCarSimpleDisplayObject("img");
            f.scrollbarTrackLeftDO.setScreen(f.trackLeftImg);
            f.scrollbarTrackDO.addChild(f.scrollbarTrackLeftDO);
            f.scrollbarTrackCenterDO = new FWDR3DCarSimpleDisplayObject("div");
            f.scrollbarTrackCenterDO.screen.style.backgroundImage = "url(" + c.trackCenterPath + ")";
            f.scrollbarTrackCenterDO.screen.style.backgroundRepeat = "repeat-x";
            f.scrollbarTrackDO.addChild(f.scrollbarTrackCenterDO);
            f.scrollbarTrackCenterDO.setWidth(f.trackWidth - 2 * f.trackLeftWidth);
            f.scrollbarTrackCenterDO.setHeight(f.scrollbarHeight);
            f.scrollbarTrackCenterDO.setX(f.trackLeftWidth);
            f.scrollbarTrackRightDO = new FWDR3DCarSimpleDisplayObject("img");
            f.scrollbarTrackRightDO.setScreen(f.trackRightImg);
            f.scrollbarTrackDO.addChild(f.scrollbarTrackRightDO);
            f.scrollbarTrackRightDO.setX(f.trackWidth - f.trackLeftWidth);
        };
        this.setHandler = function() {
            f.scrollbarHandlerDO = new FWDR3DCarDisplayObject("div");
            f.addChild(f.scrollbarHandlerDO);
            f.scrollbarHandlerDO.setWidth(f.handlerWidth);
            f.scrollbarHandlerDO.setHeight(f.scrollbarHeight);
            f.scrollbarHandlerLeftSDO = new FWDR3DCarSimpleDisplayObject("img");
            f.scrollbarHandlerLeftSDO.setScreen(f.handlerLeftSImg);
            f.scrollbarHandlerDO.addChild(f.scrollbarHandlerLeftSDO);
            f.scrollbarHandlerLeftNDO = new FWDR3DCarSimpleDisplayObject("img");
            f.scrollbarHandlerLeftNDO.setScreen(f.handlerLeftNImg);
            f.scrollbarHandlerDO.addChild(f.scrollbarHandlerLeftNDO);
            f.scrollbarHandlerCenterSDO = new FWDR3DCarSimpleDisplayObject("div");
            f.scrollbarHandlerCenterSDO.screen.style.backgroundImage = "url(" + c.handlerCenterSPath + ")";
            f.scrollbarHandlerCenterSDO.screen.style.backgroundRepeat = "repeat-x";
            f.scrollbarHandlerDO.addChild(f.scrollbarHandlerCenterSDO);
            f.scrollbarHandlerCenterSDO.setWidth(f.handlerWidth - 2 * f.handlerLeftWidth);
            f.scrollbarHandlerCenterSDO.setHeight(f.scrollbarHeight);
            f.scrollbarHandlerCenterSDO.setX(f.handlerLeftWidth);
            f.scrollbarHandlerCenterNDO = new FWDR3DCarSimpleDisplayObject("div");
            f.scrollbarHandlerCenterNDO.screen.style.backgroundImage = "url(" + c.handlerCenterNPath + ")";
            f.scrollbarHandlerCenterNDO.screen.style.backgroundRepeat = "repeat-x";
            f.scrollbarHandlerDO.addChild(f.scrollbarHandlerCenterNDO);
            f.scrollbarHandlerCenterNDO.setWidth(f.handlerWidth - 2 * f.handlerLeftWidth);
            f.scrollbarHandlerCenterNDO.setHeight(f.scrollbarHeight);
            f.scrollbarHandlerCenterNDO.setX(f.handlerLeftWidth);
            f.scrollbarHandlerRightSDO = new FWDR3DCarSimpleDisplayObject("img");
            f.scrollbarHandlerRightSDO.setScreen(f.handlerRightSImg);
            f.scrollbarHandlerDO.addChild(f.scrollbarHandlerRightSDO);
            f.scrollbarHandlerRightSDO.setX(f.handlerWidth - f.handlerLeftWidth);
            f.scrollbarHandlerRightNDO = new FWDR3DCarSimpleDisplayObject("img");
            f.scrollbarHandlerRightNDO.setScreen(f.handlerRightNImg);
            f.scrollbarHandlerDO.addChild(f.scrollbarHandlerRightNDO);
            f.scrollbarHandlerRightNDO.setX(f.handlerWidth - f.handlerLeftWidth);
            f.scrollbarHandlerTextDO = new FWDR3DCarDisplayObject("div");
            f.scrollbarHandlerDO.addChild(f.scrollbarHandlerTextDO);
            f.scrollbarHandlerTextDO.getStyle().fontSmoothing = "antialiased";
            f.scrollbarHandlerTextDO.getStyle().webkitFontSmoothing = "antialiased";
            f.scrollbarHandlerTextDO.getStyle().textRendering = "optimizeLegibility";
            f.scrollbarHandlerTextDO.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
            f.scrollbarHandlerTextDO.getStyle().fontSize = "10px";
            f.scrollbarHandlerTextDO.getStyle().color = f.textColorNormal;
            f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems);
            f.setTextPositionId = setTimeout(f.setTextPosition, 10);
            f.scrollbarHandlerOverDO = new FWDR3DCarDisplayObject("div");
            f.scrollbarHandlerDO.addChild(f.scrollbarHandlerOverDO);
            f.scrollbarHandlerOverDO.setWidth(f.handlerWidth);
            f.scrollbarHandlerOverDO.setHeight(f.scrollbarHeight);
            if (FWDR3DCarUtils.isIE) {
                f.scrollbarHandlerOverDO.setBkColor("#000000");
                f.scrollbarHandlerOverDO.setAlpha(.001);
            }
        };
        this.setTextPosition = function() {
            f.scrollbarHandlerTextDO.setX(Math.floor((f.handlerWidth - f.scrollbarHandlerTextDO.getWidth()) / 2));
            f.scrollbarHandlerTextDO.setY(Math.floor((f.scrollbarHeight - f.scrollbarHandlerTextDO.getHeight()) / 2) + 1);
        };
        this.resize = function(a, b) {
            if (a < b + f.scrollbarMaxWidth) if (a - b < f.handlerWidth) {
                f.resizeTrack(0);
                f.scrollbarHandlerDO.setY(500);
            } else {
                f.resizeTrack(Math.floor(a - b));
                f.scrollbarHandlerDO.setY(0);
            } else if (f.getWidth() < f.scrollbarMaxWidth) {
                f.resizeTrack(Math.floor(f.scrollbarMaxWidth));
                f.scrollbarHandlerDO.setY(0);
            }
            f.scrollbarHandlerDO.setX(Math.floor(f.curItemId * (f.trackWidth - f.handlerWidth) / (f.totalItems - 1)));
            f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems);
        };
        this.resize2 = function() {
            f.resizeTrack(Math.floor(f.scrollbarMaxWidth));
        };
        this.resizeTrack = function(a) {
            f.trackWidth = a;
            f.setWidth(f.trackWidth);
            f.scrollbarTrackDO.setWidth(f.trackWidth);
            f.scrollbarTrackCenterDO.setWidth(Math.floor(f.trackWidth - 2 * f.trackLeftWidth));
            f.scrollbarTrackCenterDO.setX(Math.floor(f.trackLeftWidth));
            f.scrollbarTrackRightDO.setX(Math.floor(f.trackWidth - f.trackLeftWidth));
        };
        this.onScrollMouseOver = function() {
            f.scrollbarOver = true;
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerLeftNDO, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerCenterNDO, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerRightNDO, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerTextDO.screen, .8, {
                css: {
                    color: f.textColorSelected
                },
                ease: Expo.easeOut
            });
        };
        this.onScrollMouseOut = function() {
            f.scrollbarOver = false;
            if (f.isPressed) return;
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerLeftNDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerCenterNDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerRightNDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerTextDO.screen, .8, {
                css: {
                    color: f.textColorNormal
                },
                ease: Expo.easeOut
            });
        };
        this.onScrollMouseDown = function(b) {
            if (b.preventDefault) b.preventDefault();
            var c = FWDR3DCarUtils.getViewportMouseCoordinates(b);
            f.mouseX = c.screenX;
            f.mouseY = c.screenY;
            f.curScrollX = f.scrollbarHandlerDO.getX();
            f.lastPressedX = f.mouseX;
            f.isPressed = true;
            FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerDO);
            if (f.isMobile) if (f.hasPointerEvent) {
                a.addEventListener("MSPointerMove", f.onScrollMove);
                a.addEventListener("MSPointerUp", f.onScrollMouseUp);
            } else {
                a.addEventListener("touchmove", f.onScrollMove);
                a.addEventListener("touchend", f.onScrollMouseUp);
            } else if (f.screen.addEventListener) a.addEventListener("mousemove", f.onScrollMove); else document.attachEvent("onmousemove", f.onScrollMove);
        };
        this.onScrollMove = function(a) {
            var c = FWDR3DCarUtils.getViewportMouseCoordinates(a);
            f.mouseX = c.screenX;
            f.mouseY = c.screenY;
            var d = f.mouseX - f.lastPressedX;
            var e = f.curScrollX + d;
            e = Math.max(e, 0);
            e = Math.min(f.trackWidth - f.handlerWidth, e);
            f.scrollbarHandlerDO.setX(Math.floor(e));
            f.curItemId = Math.floor(e / (f.trackWidth - f.handlerWidth) * f.totalItems);
            if (f.curItemId == f.totalItems) f.curItemId--;
            if (f.prevCurItemId != f.curItemId) {
                f.dispatchEvent(b.MOVE, {
                    id: f.curItemId
                });
                f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems);
            }
            f.prevCurItemId = f.curItemId;
        };
        this.onScrollMouseUp = function() {
            f.isPressed = false;
            if (f.isMobile) if (f.hasPointerEvent) {
                a.removeEventListener("MSPointerUp", f.onScrollMouseUp);
                a.removeEventListener("MSPointerMove", f.onScrollMove);
            } else {
                a.removeEventListener("touchend", f.onScrollMouseUp);
                a.removeEventListener("touchmove", f.onScrollMove);
            } else if (f.screen.addEventListener) a.removeEventListener("mousemove", f.onScrollMove); else document.detachEvent("onmousemove", f.onScrollMove);
            if (!f.scrollbarOver && !f.isMobile) f.onScrollMouseOut();
            f.gotoItem2();
        };
        this.gotoItem = function(a, b) {
            f.curItemId = a;
            if (f.prevCurItemId != f.curItemId) {
                if (b) {
                    FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerDO);
                    FWDR3DCarModTweenMax.to(f.scrollbarHandlerDO, .8, {
                        x: Math.floor(f.curItemId * (f.trackWidth - f.handlerWidth) / (f.totalItems - 1)),
                        ease: Expo.easeOut
                    });
                } else f.scrollbarHandlerDO.setX(Math.floor(f.curItemId * (f.trackWidth - f.handlerWidth) / (f.totalItems - 1)));
                f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems);
            }
            f.prevCurItemId = f.curItemId;
        };
        this.gotoItem2 = function() {
            FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerDO);
            FWDR3DCarModTweenMax.to(f.scrollbarHandlerDO, .8, {
                x: Math.floor(f.curItemId * (f.trackWidth - f.handlerWidth) / (f.totalItems - 1)),
                ease: Expo.easeOut
            });
            f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems);
        };
        this.destroy = function() {
            clearTimeout(f.setTextPositionId);
            if (f.isMobile) if (f.hasPointerEvent) {
                f.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerOver", f.onScrollMouseOver);
                f.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerOut", f.onScrollMouseOut);
                f.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerDown", f.onScrollMouseDown);
            } else f.scrollbarHandlerOverDO.screen.removeEventListener("touchstart", f.onScrollMouseDown); else {
                f.scrollbarHandlerOverDO.setButtonMode(true);
                if (f.screen.removeEventListener) {
                    f.scrollbarHandlerOverDO.screen.removeEventListener("mouseover", f.onScrollMouseOver);
                    f.scrollbarHandlerOverDO.screen.removeEventListener("mouseout", f.onScrollMouseOut);
                    f.scrollbarHandlerOverDO.screen.removeEventListener("mousedown", f.onScrollMouseDown);
                    a.removeEventListener("mouseup", f.onScrollMouseUp);
                } else {
                    f.scrollbarHandlerOverDO.screen.detachEvent("onmouseover", f.onScrollMouseOver);
                    f.scrollbarHandlerOverDO.screen.detachEvent("onmouseout", f.onScrollMouseOut);
                    f.scrollbarHandlerOverDO.screen.detachEvent("onmousedown", f.onScrollMouseDown);
                    document.detachEvent("onmouseup", f.onScrollMouseUp);
                }
            }
            if (f.isMobile) if (f.hasPointerEvent) {
                a.removeEventListener("MSPointerUp", f.onScrollMouseUp);
                a.removeEventListener("MSPointerMove", f.onScrollMove);
            } else {
                a.removeEventListener("touchend", f.onScrollMouseUp);
                a.removeEventListener("touchmove", f.onScrollMove);
            } else if (f.screen.addEventListener) a.removeEventListener("mousemove", f.onScrollMove); else document.detachEvent("onmousemove", f.onScrollMove);
            FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerLeftNDO);
            FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerCenterNDO);
            FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerRightNDO);
            FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerDO);
            FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerTextDO.screen);
            f.scrollbarHandlerDO.destroy();
            f.scrollbarHandlerLeftNDO.destroy();
            f.scrollbarHandlerLeftSDO.destroy();
            f.scrollbarHandlerCenterNDO.destroy();
            f.scrollbarHandlerCenterSDO.destroy();
            f.scrollbarHandlerRightNDO.destroy();
            f.scrollbarHandlerRightSDO.destroy();
            f.scrollbarHandlerTextDO.destroy();
            f.scrollbarHandlerOverDO.destroy();
            f.scrollbarTrackDO.destroy();
            f.scrollbarTrackLeftDO.destroy();
            f.scrollbarTrackCenterDO.destroy();
            f.scrollbarTrackRightDO.destroy();
            f.scrollbarHandlerDO = null;
            f.scrollbarHandlerLeftNDO = null;
            f.scrollbarHandlerLeftSDO = null;
            f.scrollbarHandlerCenterNDO = null;
            f.scrollbarHandlerCenterSDO = null;
            f.scrollbarHandlerRightNDO = null;
            f.scrollbarHandlerRightSDO = null;
            f.scrollbarHandlerTextDO = null;
            f.scrollbarHandlerOverDO = null;
            f.scrollbarTrackDO = null;
            f.scrollbarTrackLeftDO = null;
            f.scrollbarTrackCenterDO = null;
            f.scrollbarTrackRightDO = null;
            f.setInnerHTML("");
            g.destroy();
            f = null;
            g = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = null;
        b.prototype = new FWDR3DCarDisplayObject("div");
    };
    b.MOVE = "onMove";
    b.prototype = null;
    a.FWDR3DCarScrollbar = b;
}(window);

!function(a) {
    var b = function(a, c) {
        var d = this;
        var e = b.prototype;
        this.nImg = a;
        this.sImg = c;
        this.n_do;
        this.s_do;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.init = function() {
            this.setupMainContainers();
        };
        this.setupMainContainers = function() {
            this.n_do = new FWDR3DCarSimpleDisplayObject("img");
            this.n_do.setScreen(this.nImg);
            this.s_do = new FWDR3DCarSimpleDisplayObject("img");
            this.s_do.setScreen(this.sImg);
            this.addChild(this.s_do);
            this.addChild(this.n_do);
            this.setWidth(this.nImg.width);
            this.setHeight(this.nImg.height);
            this.setButtonMode(true);
            if (d.isMobile_bl) if (d.hasPointerEvent_bl) {
                d.screen.addEventListener("MSPointerOver", d.onMouseOver);
                d.screen.addEventListener("MSPointerOut", d.onMouseOut);
                d.screen.addEventListener("MSPointerUp", d.onClick);
            } else d.screen.addEventListener("touchstart", d.onClick); else if (d.screen.addEventListener) {
                d.screen.addEventListener("mouseover", d.onMouseOver);
                d.screen.addEventListener("mouseout", d.onMouseOut);
                d.screen.addEventListener("mouseup", d.onClick);
            } else if (d.screen.attachEvent) {
                d.screen.attachEvent("onmouseover", d.onMouseOver);
                d.screen.attachEvent("onmouseout", d.onMouseOut);
                d.screen.attachEvent("onmouseup", d.onClick);
            }
        };
        this.onMouseOver = function(a) {
            if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) FWDR3DCarModTweenMax.to(d.n_do, .9, {
                alpha: 0,
                ease: Expo.easeOut
            });
        };
        this.onMouseOut = function(a) {
            if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) FWDR3DCarModTweenMax.to(d.n_do, .9, {
                alpha: 1,
                ease: Expo.easeOu
            });
        };
        this.onClick = function(a) {
            d.dispatchEvent(b.CLICK);
        };
        this.destroy = function() {
            if (d.isMobile_bl) if (d.hasPointerEvent_bl) {
                d.screen.removeEventListener("MSPointerOver", d.onMouseOver);
                d.screen.removeEventListener("MSPointerOut", d.onMouseOut);
                d.screen.removeEventListener("MSPointerUp", d.onClick);
            } else d.screen.removeEventListener("touchstart", d.onClick); else if (d.screen.removeEventListener) {
                d.screen.removeEventListener("mouseover", d.onMouseOver);
                d.screen.removeEventListener("mouseout", d.onMouseOut);
                d.screen.removeEventListener("mouseup", d.onClick);
            } else if (d.screen.detachEvent) {
                d.screen.detachEvent("onmouseover", d.onMouseOver);
                d.screen.detachEvent("onmouseout", d.onMouseOut);
                d.screen.detachEvent("onmouseup", d.onClick);
            }
            FWDR3DCarModTweenMax.killTweensOf(d.n_do);
            d.n_do.destroy();
            d.s_do.destroy();
            d.nImg = null;
            d.sImg = null;
            d.n_do = null;
            d.s_do = null;
            a = null;
            c = null;
            d.setInnerHTML("");
            e.destroy();
            d = null;
            e = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = null;
        b.prototype = new FWDR3DCarDisplayObject("div");
    };
    b.CLICK = "onClick";
    b.prototype = null;
    a.FWDR3DCarSimpleButton = b;
}(window);

!function(a) {
    var b = function(a, b, c, d) {
        var e = this;
        if ("div" == a || "img" == a || "canvas" == a) e.type = a; else throw Error("Type is not valid! " + a);
        this.style;
        this.screen;
        this.transform;
        this.position = b || "absolute";
        this.overflow = c || "hidden";
        this.display = d || "block";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasTransform3d_bl = FWDR3DCarUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDR3DCarUtils.hasTransform2d;
        if (FWDR3DCarUtils.isFirefox) e.hasTransform3d_bl = false;
        if (FWDR3DCarUtils.isFirefox) e.hasTransform2d_bl = false;
        this.hasBeenSetSelectable_bl = false;
        e.init = function() {
            e.setScreen();
        };
        e.getTransform = function() {
            var a = [ "transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform" ];
            var b;
            while (b = a.shift()) if ("undefined" !== typeof e.screen.style[b]) return b;
            return false;
        };
        e.getOpacityType = function() {
            var a;
            if ("undefined" != typeof e.screen.style.opacity) a = "opacity"; else a = "filter";
            return a;
        };
        e.setScreen = function(a) {
            if ("img" == e.type && a) {
                e.screen = a;
                e.setMainProperties();
            } else {
                e.screen = document.createElement(e.type);
                e.setMainProperties();
            }
        };
        e.setMainProperties = function() {
            e.transform = e.getTransform();
            e.setPosition(e.position);
            e.setDisplay(e.display);
            e.setOverflow(e.overflow);
            e.opacityType = e.getOpacityType();
            if ("opacity" == e.opacityType) e.isHtml5_bl = true;
            if ("filter" == e.opacityType) e.screen.style.filter = "inherit";
            e.screen.style.left = "0px";
            e.screen.style.top = "0px";
            e.screen.style.margin = "0px";
            e.screen.style.padding = "0px";
            e.screen.style.maxWidth = "none";
            e.screen.style.maxHeight = "none";
            e.screen.style.border = "none";
            e.screen.style.lineHeight = "1";
            e.screen.style.backgroundColor = "transparent";
            e.screen.style.backfaceVisibility = "hidden";
            e.screen.style.webkitBackfaceVisibility = "hidden";
            e.screen.style.MozBackfaceVisibility = "hidden";
            if ("img" == a) {
                e.setWidth(e.screen.width);
                e.setHeight(e.screen.height);
                e.setSelectable(false);
            }
        };
        e.setSelectable = function(a) {
            if (!a) {
                e.screen.style.userSelect = "none";
                e.screen.style.MozUserSelect = "none";
                e.screen.style.webkitUserSelect = "none";
                e.screen.style.khtmlUserSelect = "none";
                e.screen.style.oUserSelect = "none";
                e.screen.style.msUserSelect = "none";
                e.screen.msUserSelect = "none";
                e.screen.ondragstart = function(a) {
                    return false;
                };
                e.screen.onselectstart = function() {
                    return false;
                };
                e.screen.ontouchstart = function(a) {
                    return false;
                };
                e.screen.style.webkitTouchCallout = "none";
                e.hasBeenSetSelectable_bl = true;
            }
        };
        e.setBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "visible";
            e.screen.style.webkitBackfaceVisibility = "visible";
            e.screen.style.MozBackfaceVisibility = "visible";
        };
        e.removeBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "hidden";
            e.screen.style.webkitBackfaceVisibility = "hidden";
            e.screen.style.MozBackfaceVisibility = "hidden";
        };
        e.getScreen = function() {
            return e.screen;
        };
        e.setVisible = function(a) {
            e.visible = a;
            if (true == e.visible) e.screen.style.visibility = "visible"; else e.screen.style.visibility = "hidden";
        };
        e.getVisible = function() {
            return e.visible;
        };
        e.setResizableSizeAfterParent = function() {
            e.screen.style.width = "100%";
            e.screen.style.height = "100%";
        };
        e.getStyle = function() {
            return e.screen.style;
        };
        e.setOverflow = function(a) {
            e.overflow = a;
            e.screen.style.overflow = e.overflow;
        };
        e.setPosition = function(a) {
            e.position = a;
            e.screen.style.position = e.position;
        };
        e.setDisplay = function(a) {
            e.display = a;
            e.screen.style.display = e.display;
        };
        e.setButtonMode = function(a) {
            e.buttonMode = a;
            if (true == e.buttonMode) e.screen.style.cursor = "pointer"; else e.screen.style.cursor = "default";
        };
        e.setBkColor = function(a) {
            e.screen.style.backgroundColor = a;
        };
        e.setInnerHTML = function(a) {
            e.innerHTML = a;
            e.screen.innerHTML = e.innerHTML;
        };
        e.getInnerHTML = function() {
            return e.innerHTML;
        };
        e.getRect = function() {
            return e.screen.getBoundingClientRect();
        };
        e.setAlpha = function(a) {
            e.alpha = a;
            if ("opacity" == e.opacityType) e.screen.style.opacity = e.alpha; else if ("filter" == e.opacityType) {
                e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")";
                e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")";
            }
        };
        e.getAlpha = function() {
            return e.alpha;
        };
        e.getRect = function() {
            return e.screen.getBoundingClientRect();
        };
        e.getGlobalX = function() {
            return e.getRect().left;
        };
        e.getGlobalY = function() {
            return e.getRect().top;
        };
        e.setX = function(a) {
            e.x = a;
            if (e.isMobile_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)"; else if (e.hasTransform3d_bl) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)"; else if (e.hasTransform2d_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)"; else e.screen.style.left = e.x + "px";
        };
        e.getX = function() {
            return e.x;
        };
        e.setY = function(a) {
            e.y = a;
            if (e.isMobile_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)"; else if (e.hasTransform3d_bl && !FWDR3DCarUtils.isAndroid) e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)"; else if (e.hasTransform2d_bl) e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)"; else e.screen.style.top = e.y + "px";
        };
        e.getY = function() {
            return e.y;
        };
        e.setWidth = function(a) {
            e.w = a;
            if ("img" == e.type) e.screen.width = e.w; else e.screen.style.width = e.w + "px";
        };
        e.getWidth = function() {
            if ("div" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                return e.w;
            } else if ("img" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                if (0 != e.screen.width) return e.screen.width;
                return e._w;
            } else if ("canvas" == e.type) {
                if (0 != e.screen.offsetWidth) return e.screen.offsetWidth;
                return e.w;
            }
        };
        e.setHeight = function(a) {
            e.h = a;
            if ("img" == e.type) e.screen.height = e.h; else e.screen.style.height = e.h + "px";
        };
        e.getHeight = function() {
            if ("div" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                return e.h;
            } else if ("img" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                if (0 != e.screen.height) return e.screen.height;
                return e.h;
            } else if ("canvas" == e.type) {
                if (0 != e.screen.offsetHeight) return e.screen.offsetHeight;
                return e.h;
            }
        };
        this.setCSSGradient = function(a, b) {
            if (FWDR3DCarUtils.isIEAndLessThen10) e.setBkColor(a); else {
                e.screen.style.backgroundImage = "-webkit-linear-gradient(top, " + a + ", " + b + ")";
                e.screen.style.backgroundImage = "-moz-linear-gradient(top, " + a + ", " + b + ")";
                e.screen.style.backgroundImage = "-ms-linear-gradient(top, " + a + ", " + b + ")";
                e.screen.style.backgroundImage = "-o-linear-gradient(top, " + a + ", " + b + ")";
            }
        };
        e.disposeImage = function() {
            if ("img" == e.type) {
                e.screen.onload = null;
                e.screen.onerror = null;
                e.screen.src = "";
            }
        };
        e.destroy = function() {
            if (e.hasBeenSetSelectable_bl) {
                e.screen.ondragstart = null;
                e.screen.onselectstart = null;
                e.screen.ontouchstart = null;
            }
            e.screen.removeAttribute("style");
            e.style = null;
            e.screen = null;
            e.transform = null;
            e.position = null;
            e.overflow = null;
            e.display = null;
            e.visible = null;
            e.buttonMode = null;
            e.x = null;
            e.y = null;
            e.w = null;
            e.h = null;
            e.rect = null;
            e.alpha = null;
            e.innerHTML = null;
            e.opacityType = null;
            e.isHtml5_bl = null;
            a = null;
            b = null;
            c = null;
            d = null;
            e.hasTransform3d_bl = null;
            e.hasTransform2d_bl = null;
            e = null;
        };
        e.init();
    };
    a.FWDR3DCarSimpleDisplayObject = b;
}(window);

!function(a) {
    var b = function(c) {
        var d = this;
        var e = b.prototype;
        this.playButtonNImg = c.playButtonNImg;
        this.playButtonSImg = c.playButtonSImg;
        this.pauseButtonImg = c.pauseButtonImg;
        this.timerButtonImg = c.slideshowTimerImg;
        this.playButtonDO;
        this.playButtonNDO;
        this.playButtonSDO;
        this.pauseButtonDO;
        this.timerButtonDO;
        this.timerButtonBgDO;
        this.timerButtonTextDO;
        this.delay = c.slideshowDelay;
        this.autoplay = c.autoplay;
        this.curSeconds = c.slideshowDelay / 1e3;
        this.isPlaying = false;
        this.isCounting = false;
        this.btnWidth = d.playButtonNImg.width;
        this.btnHeight = d.playButtonNImg.height;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent = FWDR3DCarUtils.hasPointerEvent;
        this.timeoutId;
        this.timerIntervalId;
        this.init = function() {
            d.setupMainContainers();
        };
        this.setupMainContainers = function() {
            d.setButtonMode(true);
            d.setWidth(d.btnWidth);
            d.setHeight(d.btnHeight);
            d.setPauseButton();
            d.setTimerButton();
            d.setPlayButton();
            if (d.isMobile) if (d.hasPointerEvent) {
                d.screen.addEventListener("MSPointerOver", d.onMouseOver);
                d.screen.addEventListener("MSPointerOut", d.onMouseOut);
                d.screen.addEventListener("MSPointerUp", d.onClick);
            } else d.screen.addEventListener("touchend", d.onClick); else if (a.addEventListener) {
                d.screen.addEventListener("mouseover", d.onMouseOver);
                d.screen.addEventListener("mouseout", d.onMouseOut);
                d.screen.addEventListener("click", d.onClick);
            } else {
                d.screen.attachEvent("onmouseover", d.onMouseOver);
                d.screen.attachEvent("onmouseout", d.onMouseOut);
                d.screen.attachEvent("onclick", d.onClick);
            }
            if (!c.showSlideshowButton) d.setVisible(false);
        };
        this.setTimerButton = function() {
            d.timerButtonDO = new FWDR3DCarDisplayObject("div");
            d.addChild(d.timerButtonDO);
            d.timerButtonDO.setWidth(d.btnWidth);
            d.timerButtonDO.setHeight(d.btnHeight);
            d.timerButtonBgDO = new FWDR3DCarSimpleDisplayObject("img");
            d.timerButtonBgDO.setScreen(d.timerButtonImg);
            d.timerButtonDO.addChild(d.timerButtonBgDO);
            d.timerButtonTextDO = new FWDR3DCarDisplayObject("div");
            d.timerButtonDO.addChild(d.timerButtonTextDO);
            d.timerButtonTextDO.getStyle().fontSmoothing = "antialiased";
            d.timerButtonTextDO.getStyle().webkitFontSmoothing = "antialiased";
            d.timerButtonTextDO.getStyle().textRendering = "optimizeLegibility";
            d.timerButtonTextDO.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
            d.timerButtonTextDO.getStyle().fontSize = "10px";
            d.timerButtonTextDO.getStyle().color = c.slideshowTimerColor;
            if (d.curSeconds < 10) d.timerButtonTextDO.setInnerHTML("0" + d.curSeconds); else d.timerButtonTextDO.setInnerHTML(d.curSeconds);
            d.setTextPositionId = setTimeout(d.setTextPosition, 10);
        };
        this.setTextPosition = function() {
            d.timerButtonTextDO.setX(Math.floor((d.btnWidth - d.timerButtonTextDO.getWidth()) / 2));
            d.timerButtonTextDO.setY(Math.floor((d.btnHeight - d.timerButtonTextDO.getHeight()) / 2));
        };
        this.setPauseButton = function() {
            d.pauseButtonDO = new FWDR3DCarSimpleDisplayObject("img");
            d.pauseButtonDO.setScreen(d.pauseButtonImg);
            d.addChild(d.pauseButtonDO);
            d.pauseButtonDO.setWidth(d.btnWidth);
            d.pauseButtonDO.setHeight(d.btnHeight);
        };
        this.setPlayButton = function() {
            d.playButtonDO = new FWDR3DCarDisplayObject("div");
            d.addChild(d.playButtonDO);
            d.playButtonSDO = new FWDR3DCarSimpleDisplayObject("img");
            d.playButtonSDO.setScreen(d.playButtonSImg);
            d.playButtonDO.addChild(d.playButtonSDO);
            d.playButtonNDO = new FWDR3DCarSimpleDisplayObject("img");
            d.playButtonNDO.setScreen(d.playButtonNImg);
            d.playButtonDO.addChild(d.playButtonNDO);
            d.playButtonDO.setWidth(d.btnWidth);
            d.playButtonDO.setHeight(d.btnHeight);
        };
        this.onMouseOver = function() {
            if (d.isPlaying) FWDR3DCarModTweenMax.to(d.timerButtonDO, .8, {
                alpha: 0,
                ease: Expo.easeOut
            }); else FWDR3DCarModTweenMax.to(d.playButtonNDO, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
        };
        this.onMouseOut = function() {
            if (d.isPlaying) FWDR3DCarModTweenMax.to(d.timerButtonDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }); else FWDR3DCarModTweenMax.to(d.playButtonNDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
        };
        this.onClick = function(a) {
            if (d.isPlaying) {
                d.stop();
                d.dispatchEvent(b.PAUSE_CLICK);
            } else {
                d.start();
                d.dispatchEvent(b.PLAY_CLICK);
            }
            if (!d.isMobile) d.onMouseOver();
        };
        this.start = function() {
            d.isPlaying = true;
            d.isCounting = true;
            d.playButtonDO.setAlpha(0);
            d.curSeconds = d.delay / 1e3;
            clearTimeout(d.timeoutId);
            clearInterval(d.timerIntervalId);
            d.timeoutId = setTimeout(d.onTimeHandler, d.delay);
            d.timerIntervalId = setInterval(d.onTickHandler, 1e3);
            if (d.curSeconds < 10) d.timerButtonTextDO.setInnerHTML("0" + d.curSeconds); else d.timerButtonTextDO.setInnerHTML(d.curSeconds);
        };
        this.stop = function() {
            d.isPlaying = false;
            d.isCounting = false;
            d.playButtonDO.setAlpha(1);
            clearTimeout(d.timeoutId);
            clearInterval(d.timerIntervalId);
        };
        this.resetCounter = function() {
            d.isCounting = false;
            clearTimeout(d.timeoutId);
            clearInterval(d.timerIntervalId);
            d.curSeconds = d.delay / 1e3;
            if (d.curSeconds < 10) d.timerButtonTextDO.setInnerHTML("0" + d.curSeconds); else d.timerButtonTextDO.setInnerHTML(d.curSeconds);
        };
        this.onTimeHandler = function() {
            d.isCounting = false;
            clearTimeout(d.timeoutId);
            clearInterval(d.timerIntervalId);
            d.onTickHandler();
            d.dispatchEvent(b.TIME);
        };
        this.onTickHandler = function() {
            d.curSeconds--;
            if (d.curSeconds < 10) d.timerButtonTextDO.setInnerHTML("0" + d.curSeconds); else d.timerButtonTextDO.setInnerHTML(d.curSeconds);
        };
        this.destroy = function() {
            clearTimeout(d.timeoutId);
            clearTimeout(d.setTextPositionId);
            clearInterval(d.timerIntervalId);
            if (d.isMobile) if (d.hasPointerEvent) {
                d.screen.removeEventListener("MSPointerOver", d.onMouseOver);
                d.screen.removeEventListener("MSPointerOut", d.onMouseOut);
                d.screen.removeEventListener("MSPointerUp", d.onClick);
            } else d.screen.removeEventListener("touchend", d.onClick); else if (a.addEventListener) {
                d.screen.removeEventListener("mouseover", d.onMouseOver);
                d.screen.removeEventListener("mouseout", d.onMouseOut);
                d.screen.removeEventListener("click", d.onClick);
            } else {
                d.screen.detachEvent("onmouseover", d.onMouseOver);
                d.screen.detachEvent("onmouseout", d.onMouseOut);
                d.screen.detachEvent("onclick", d.onClick);
            }
            FWDR3DCarModTweenMax.killTweensOf(d.timerButtonDO);
            FWDR3DCarModTweenMax.killTweensOf(d.playButtonNDO);
            d.playButtonDO.destroy();
            d.playButtonNDO.destroy();
            d.playButtonSDO.destroy();
            d.pauseButtonDO.destroy();
            d.timerButtonDO.destroy();
            d.timerButtonBgDO.destroy();
            d.timerButtonTextDO.destroy();
            e.destroy();
            d = null;
            e = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject("div");
    };
    b.PLAY_CLICK = "onPlayClick";
    b.PAUSE_CLICK = "onPauseClick";
    b.TIME = "onTime";
    b.prototype = null;
    a.FWDR3DCarSlideshowButton = b;
}(window);

!function(a) {
    var b = function(a, c, d, e, f) {
        var g = this;
        var h = b.prototype;
        this.imageSource_img = a;
        this.image_do = null;
        this.tweenObj = {
            currentPos: 0
        };
        this.segmentWidth = c;
        this.segmentHeight = d;
        this.totalSegments = e;
        this.duration = f / 1e3;
        this.delayTimerId_int;
        this.init = function() {
            this.setWidth(this.segmentWidth);
            this.setHeight(this.segmentHeight);
            this.image_do = new FWDR3DCarDisplayObject("img");
            this.image_do.setScreen(this.imageSource_img);
            this.addChild(this.image_do);
            this.onUpdateHandler();
            this.hide(false);
        };
        this.animIn = function() {
            FWDR3DCarModTweenMax.killTweensOf(this.tweenObj);
            this.currentPos = 0;
            FWDR3DCarModTweenMax.to(this.tweenObj, this.duration, {
                currentPos: 1,
                ease: Linear.easeNone,
                onUpdate: this.onUpdateHandler
            });
        };
        this.animOut = function() {
            FWDR3DCarModTweenMax.killTweensOf(this.tweenObj);
            FWDR3DCarModTweenMax.to(this.tweenObj, .8, {
                currentPos: 0,
                onUpdate: this.onUpdateHandler
            });
        };
        this.onUpdateHandler = function() {
            var a = Math.round(g.tweenObj.currentPos / 1 * (g.totalSegments - 1)) * g.segmentWidth;
            g.image_do.setX(-a);
        };
        this.show = function() {
            this.setVisible(true);
            if ("opacity" == this.opacityType) {
                FWDR3DCarModTweenMax.killTweensOf(this.image_do);
                FWDR3DCarModTweenMax.to(this.image_do, 1, {
                    alpha: 1
                });
            } else this.setWidth(this.segmentWidth);
        };
        this.hide = function(a) {
            if (a) if ("opacity" == this.opacityType) {
                FWDR3DCarModTweenMax.killTweensOf(this.image_do);
                FWDR3DCarModTweenMax.to(this.image_do, 1, {
                    alpha: 0
                });
            } else this.setWidth(0); else if ("opacity" == this.opacityType) {
                FWDR3DCarModTweenMax.killTweensOf(this.image_do);
                this.setVisible(false);
                this.image_do.setAlpha(0);
            } else this.setWidth(0);
        };
        this.destroy = function() {
            FWDR3DCarModTweenMax.killTweensOf(this);
            FWDR3DCarModTweenMax.killTweensOf(this.tweenObj);
            FWDR3DCarModTweenMax.killTweensOf(this.image_do);
            this.image_do.destroy();
            this.imageSource_img = null;
            this.image_do = null;
            this.tweenObj = null;
            a = null;
            this.setInnerHTML("");
            h.destroy();
            g = null;
            h = null;
            b.prototype = null;
        };
        this.init();
    };
    b.HIDE_COMPLETE;
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject("div");
    };
    b.prototype = null;
    a.FWDR3DCarSlideShowPreloader = b;
}(window);

!function(a) {
    var b = function(a, c, d) {
        var e = this;
        var f = b.prototype;
        this.id = a;
        this.borderSize = c.thumbBorderSize;
        this.backgroundColor = c.thumbBackgroundColor;
        this.borderColor1 = c.thumbBorderColor1;
        this.borderColor2 = c.thumbBorderColor2;
        this.mainDO = null;
        this.borderDO = null;
        this.bgDO = null;
        this.imageHolderDO = null;
        this.imageDO = null;
        this.htmlContentDO = null;
        this.reflCanvasDO = null;
        this.gradientDO = null;
        this.gradientLeftDO = null;
        this.gradientRightDO = null;
        this.textHolderDO = null;
        this.textGradientDO = null;
        this.textDO = null;
        this.thumbWidth = c.thumbWidth;
        this.thumbHeight = c.thumbHeight;
        this.mouseX = 0;
        this.mouseY = 0;
        this.pos;
        this.thumbScale = 1;
        this.showBoxShadow = c.showBoxShadow;
        this.curDataListAr;
        this.isOver = false;
        this.hasText = false;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent = FWDR3DCarUtils.hasPointerEvent;
        this.init = function() {
            e.setupScreen();
        };
        this.setupScreen = function() {
            e.mainDO = new FWDR3DCarDisplayObject("div");
            e.addChild(e.mainDO);
            e.mainDO.setWidth(e.thumbWidth);
            e.mainDO.setHeight(e.thumbHeight);
            e.setWidth(e.thumbWidth);
            e.setHeight(e.thumbHeight);
            if (c.showThumbnailsHtmlContent || !c.transparentImages) {
                e.borderDO = new FWDR3DCarSimpleDisplayObject("div");
                e.bgDO = new FWDR3DCarSimpleDisplayObject("div");
                e.mainDO.addChild(e.borderDO);
                e.mainDO.addChild(e.bgDO);
                e.borderDO.setWidth(e.thumbWidth);
                e.borderDO.setHeight(e.thumbHeight);
                e.bgDO.setWidth(e.thumbWidth - 2 * e.borderSize);
                e.bgDO.setHeight(e.thumbHeight - 2 * e.borderSize);
                e.bgDO.setX(e.borderSize);
                e.bgDO.setY(e.borderSize);
                e.borderDO.setCSSGradient(e.borderColor1, e.borderColor2);
                e.bgDO.setBkColor(e.backgroundColor);
                if (FWDR3DCarUtils.isAndroid) {
                    e.borderDO.setBackfaceVisibility();
                    e.bgDO.setBackfaceVisibility();
                }
            }
            e.imageHolderDO = new FWDR3DCarDisplayObject("div");
            e.mainDO.addChild(e.imageHolderDO);
            e.curDataListAr = d.curDataListAr;
            if (!e.isMobile && "none" != e.curDataListAr[e.id].mediaType) e.mainDO.setButtonMode(true);
            if (!e.isMobile && !FWDR3DCarUtils.isIEAndLessThen9 && c.showGradient) e.setupGradient();
            if (FWDR3DCarUtils.isAndroid) {
                e.setBackfaceVisibility();
                e.mainDO.setBackfaceVisibility();
                e.imageHolderDO.setBackfaceVisibility();
            }
            if (e.showBoxShadow) e.mainDO.screen.style.boxShadow = c.thumbBoxShadowCss;
            if (e.isMobile) if (e.hasPointerEvent) e.mainDO.screen.addEventListener("MSPointerUp", e.onMouseTouchHandler); else e.mainDO.screen.addEventListener("touchend", e.onMouseTouchHandler); else if (e.screen.addEventListener) e.mainDO.screen.addEventListener("click", e.onMouseClickHandler); else e.mainDO.screen.attachEvent("onclick", e.onMouseClickHandler);
        };
        this.addReflection = function() {
            if (!e.imageDO || e.isMobile || FWDR3DCarUtils.isIEAndLessThen9) return;
            var a = e.thumbWidth - 2 * e.borderSize;
            var b = e.thumbHeight - 2 * e.borderSize;
            e.reflCanvasDO = new FWDR3DCarSimpleDisplayObject("canvas");
            e.addChild(e.reflCanvasDO);
            e.reflCanvasDO.screen.width = e.thumbWidth;
            e.reflCanvasDO.screen.height = d.reflHeight;
            var f = e.reflCanvasDO.screen.getContext("2d");
            f.save();
            f.translate(0, e.thumbHeight);
            f.scale(1, -1);
            if (c.showThumbnailsHtmlContent || !c.transparentImages) {
                f.fillStyle = e.borderColor1;
                f.fillRect(0, 0, e.thumbWidth, e.thumbHeight);
            }
            f.drawImage(e.imageDO.screen, e.borderSize, e.borderSize, a, b);
            f.restore();
            f.globalCompositeOperation = "destination-out";
            var g = f.createLinearGradient(0, 0, 0, d.reflHeight);
            g.addColorStop(1, "rgba(255, 255, 255, 1.0)");
            g.addColorStop(0, "rgba(255, 255, 255, " + (1 - d.reflAlpha) + ")");
            f.fillStyle = g;
            f.fillRect(0, 0, e.thumbWidth, d.reflHeight + 2);
            e.setWidth(e.thumbWidth);
            e.reflCanvasDO.setY(e.thumbHeight + d.reflDist);
        };
        this.addImage = function(a) {
            e.imageDO = new FWDR3DCarSimpleDisplayObject("img");
            e.imageDO.setScreen(a);
            e.imageHolderDO.addChild(e.imageDO);
            e.imageDO.screen.ontouchstart = null;
            if (FWDR3DCarUtils.isAndroid) e.imageDO.setBackfaceVisibility();
            e.imageDO.setWidth(e.thumbWidth - 2 * e.borderSize);
            e.imageDO.setHeight(e.thumbHeight - 2 * e.borderSize);
            e.imageHolderDO.setX(e.borderSize);
            e.imageHolderDO.setY(e.borderSize);
            e.imageHolderDO.setWidth(e.thumbWidth - 2 * e.borderSize);
            e.imageHolderDO.setHeight(e.thumbHeight - 2 * e.borderSize);
            if (d.showRefl) e.addReflection();
        };
        this.addHtmlContent = function() {
            e.htmlContentDO = new FWDR3DCarSimpleDisplayObject("div");
            e.htmlContentDO.setInnerHTML(e.curDataListAr[e.id].htmlContent);
            e.imageHolderDO.addChild(e.htmlContentDO);
            if (FWDR3DCarUtils.isAndroid) e.htmlContentDO.setBackfaceVisibility();
            e.htmlContentDO.setWidth(e.thumbWidth - 2 * e.borderSize);
            e.htmlContentDO.setHeight(e.thumbHeight - 2 * e.borderSize);
            e.imageHolderDO.setX(e.borderSize);
            e.imageHolderDO.setY(e.borderSize);
            e.imageHolderDO.setWidth(e.thumbWidth - 2 * e.borderSize);
            e.imageHolderDO.setHeight(e.thumbHeight - 2 * e.borderSize);
        };
        this.setupGradient = function() {
            e.gradientDO = new FWDR3DCarDisplayObject("div");
            e.mainDO.addChild(e.gradientDO);
            e.gradientDO.setWidth(e.thumbWidth);
            e.gradientDO.setHeight(e.thumbHeight);
            e.gradientLeftDO = new FWDR3DCarSimpleDisplayObject("img");
            e.gradientDO.addChild(e.gradientLeftDO);
            e.gradientLeftDO.setWidth(e.thumbWidth);
            e.gradientLeftDO.setHeight(e.thumbHeight);
            e.gradientLeftDO.screen.src = c.thumbGradientLeftPath;
            e.gradientRightDO = new FWDR3DCarSimpleDisplayObject("img");
            e.gradientDO.addChild(e.gradientRightDO);
            e.gradientRightDO.setWidth(e.thumbWidth);
            e.gradientRightDO.setHeight(e.thumbHeight);
            e.gradientRightDO.screen.src = c.thumbGradientRightPath;
            e.gradientLeftDO.setAlpha(0);
            e.gradientRightDO.setAlpha(0);
        };
        this.setGradient = function(a) {
            if (e.pos == a) return;
            e.pos = a;
            if (!e.isMobile && !FWDR3DCarUtils.isIEAndLessThen9 && c.showGradient) switch (e.pos) {
              case 0:
                FWDR3DCarModTweenMax.to(e.gradientLeftDO, .8, {
                    alpha: 0
                });
                FWDR3DCarModTweenMax.to(e.gradientRightDO, .8, {
                    alpha: 0,
                    onComplete: e.setGradPos
                });
                break;

              case 1:
                e.gradientDO.setY(0);
                FWDR3DCarModTweenMax.to(e.gradientLeftDO, .8, {
                    alpha: 0
                });
                FWDR3DCarModTweenMax.to(e.gradientRightDO, .8, {
                    alpha: 1
                });
                break;

              case -1:
                e.gradientDO.setY(0);
                FWDR3DCarModTweenMax.to(e.gradientLeftDO, .8, {
                    alpha: 1
                });
                FWDR3DCarModTweenMax.to(e.gradientRightDO, .8, {
                    alpha: 0
                });
            }
        };
        this.setGradPos = function() {
            e.gradientDO.setY(2e3);
        };
        this.addText = function(a, b, c) {
            if (e.curDataListAr[e.id].emptyText) return;
            e.textHolderDO = a;
            e.textGradientDO = b;
            e.textDO = c;
            e.textHolderDO.setX(e.borderSize);
            e.textHolderDO.setY(e.borderSize);
            e.mainDO.addChild(e.textHolderDO);
            e.textDO.setInnerHTML(e.curDataListAr[e.id].thumbText);
            e.textTitleOffset = e.curDataListAr[e.id].textTitleOffset;
            e.textDescriptionOffsetTop = e.curDataListAr[e.id].textDescriptionOffsetTop;
            e.textDescriptionOffsetBottom = e.curDataListAr[e.id].textDescriptionOffsetBottom;
            e.textGradientDO.setY(e.thumbHeight - 2 * e.borderSize - e.textTitleOffset);
            e.textDO.setY(e.thumbHeight - 2 * e.borderSize - e.textTitleOffset + e.textDescriptionOffsetTop);
            e.textHolderDO.setAlpha(0);
            e.setTextHeightId = setTimeout(e.setTextHeight, 10);
        };
        this.setTextHeight = function() {
            if (!e.textHolderDO) return;
            e.textHeight = e.textDO.getHeight();
            FWDR3DCarModTweenMax.to(e.textHolderDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            e.hasText = true;
            e.checkThumbOver();
        };
        this.removeText = function() {
            if (e.textHolderDO) FWDR3DCarModTweenMax.to(e.textHolderDO, .6, {
                alpha: 0,
                ease: Expo.easeOut,
                onComplete: e.removeTextFinish
            });
        };
        this.removeTextFinish = function() {
            FWDR3DCarModTweenMax.killTweensOf(e.textHolderDO);
            FWDR3DCarModTweenMax.killTweensOf(e.textGradientDO);
            FWDR3DCarModTweenMax.killTweensOf(e.textDO);
            e.mainDO.removeChild(e.textHolderDO);
            e.textHolderDO = null;
            e.textGradientDO = null;
            e.textDO = null;
            e.isOver = false;
            e.hasText = false;
        };
        this.checkThumbOver = function() {
            if (!e.hasText) return;
            if (d.thumbMouseX >= 0 && d.thumbMouseX <= e.thumbWidth && d.thumbMouseY >= 0 && d.thumbMouseY <= e.thumbHeight) e.onThumbOverHandler(); else e.onThumbOutHandler();
        };
        this.onThumbOverHandler = function() {
            if (!e.isOver) {
                e.isOver = true;
                FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textDescriptionOffsetTop - e.textHeight - e.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(e.textDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textHeight - e.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                });
            }
        };
        this.onThumbOutHandler = function() {
            if (e.isOver) {
                e.isOver = false;
                FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textTitleOffset,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(e.textDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textTitleOffset + e.textDescriptionOffsetTop,
                    ease: Expo.easeOut
                });
            }
        };
        this.showThumb3D = function() {
            var a = e.thumbWidth - 2 * e.borderSize;
            var b = e.thumbHeight - 2 * e.borderSize;
            e.imageHolderDO.setX(parseInt(e.thumbWidth / 2));
            e.imageHolderDO.setY(parseInt(e.thumbHeight / 2));
            e.imageHolderDO.setWidth(0);
            e.imageHolderDO.setHeight(0);
            FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                x: e.borderSize,
                y: e.borderSize,
                w: a,
                h: b,
                ease: Expo.easeInOut
            });
            if (c.showThumbnailsHtmlContent) {
                e.htmlContentDO.setWidth(a);
                e.htmlContentDO.setHeight(b);
                e.htmlContentDO.setX(-parseInt(a / 2));
                e.htmlContentDO.setY(-parseInt(b / 2));
                FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                    x: 0,
                    y: 0,
                    ease: Expo.easeInOut
                });
            } else {
                e.imageDO.setWidth(a);
                e.imageDO.setHeight(b);
                e.imageDO.setX(-parseInt(a / 2));
                e.imageDO.setY(-parseInt(b / 2));
                FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                    x: 0,
                    y: 0,
                    ease: Expo.easeInOut
                });
                if (e.reflCanvasDO) {
                    e.reflCanvasDO.setAlpha(0);
                    FWDR3DCarModTweenMax.to(e.reflCanvasDO, .8, {
                        alpha: 1,
                        ease: Expo.easeInOut
                    });
                }
            }
        };
        this.showThumb2D = function() {
            if (!FWDR3DCarUtils.hasTransform2d) {
                var a = Math.floor(e.thumbWidth * e.thumbScale);
                var b = Math.floor(e.thumbHeight * e.thumbScale);
                var d = Math.floor(e.borderSize * e.thumbScale);
                if (e.borderSize > 0 && d < 1) d = 1;
                var f = a - 2 * d;
                var g = b - 2 * d;
                e.imageHolderDO.setX(parseInt(a / 2));
                e.imageHolderDO.setY(parseInt(b / 2));
                e.imageHolderDO.setWidth(0);
                e.imageHolderDO.setHeight(0);
                FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                    x: d,
                    y: d,
                    w: f,
                    h: g,
                    ease: Expo.easeInOut
                });
                if (c.showThumbnailsHtmlContent) {
                    if (e.htmlContentDO) {
                        e.htmlContentDO.setWidth(f);
                        e.htmlContentDO.setHeight(g);
                        e.htmlContentDO.setX(-parseInt(f / 2));
                        e.htmlContentDO.setY(-parseInt(g / 2));
                        FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                            x: 0,
                            y: 0,
                            ease: Expo.easeInOut
                        });
                    }
                } else if (e.imageDO) {
                    e.imageDO.setWidth(f);
                    e.imageDO.setHeight(g);
                    e.imageDO.setX(-parseInt(f / 2));
                    e.imageDO.setY(-parseInt(g / 2));
                    FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                        x: 0,
                        y: 0,
                        ease: Expo.easeInOut
                    });
                    if (e.reflCanvasDO) FWDR3DCarModTweenMax.to(e.reflCanvasDO, .8, {
                        alpha: 1,
                        ease: Expo.easeInOut
                    });
                }
            } else {
                e.setScale2(e.thumbScale);
                var f = e.thumbWidth - 2 * e.borderSize;
                var g = e.thumbHeight - 2 * e.borderSize;
                e.imageHolderDO.setX(parseInt(e.thumbWidth / 2));
                e.imageHolderDO.setY(parseInt(e.thumbHeight / 2));
                e.imageHolderDO.setWidth(0);
                e.imageHolderDO.setHeight(0);
                FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                    x: e.borderSize,
                    y: e.borderSize,
                    w: f,
                    h: g,
                    ease: Expo.easeInOut
                });
                if (c.showThumbnailsHtmlContent) {
                    if (e.htmlContentDO) {
                        e.htmlContentDO.setWidth(f);
                        e.htmlContentDO.setHeight(g);
                        e.htmlContentDO.setX(-parseInt(f / 2));
                        e.htmlContentDO.setY(-parseInt(g / 2));
                        FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                            x: 0,
                            y: 0,
                            ease: Expo.easeInOut
                        });
                    }
                } else if (e.imageDO) {
                    e.imageDO.setWidth(f);
                    e.imageDO.setHeight(g);
                    e.imageDO.setX(-parseInt(f / 2));
                    e.imageDO.setY(-parseInt(g / 2));
                    FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                        x: 0,
                        y: 0,
                        ease: Expo.easeInOut
                    });
                    if (e.reflCanvasDO) FWDR3DCarModTweenMax.to(e.reflCanvasDO, .8, {
                        alpha: 1,
                        ease: Expo.easeInOut
                    });
                }
            }
        };
        this.showThumbIntro2D = function(a, b) {
            e.thumbScale = a;
            if (!FWDR3DCarUtils.hasTransform2d) {
                var c = Math.floor(e.thumbWidth * a);
                var d = Math.floor(e.thumbHeight * a);
                var f = Math.floor(e.borderSize * a);
                if (e.borderSize > 0 && f < 1) f = 1;
                var g = c - 2 * f;
                var h = d - 2 * f;
                e.setWidth(c);
                e.setHeight(d);
                e.mainDO.setWidth(c);
                e.mainDO.setHeight(d);
                if (e.borderDO) {
                    e.borderDO.setWidth(c);
                    e.borderDO.setHeight(d);
                }
                if (e.bgDO) {
                    e.bgDO.setX(f);
                    e.bgDO.setY(f);
                    e.bgDO.setWidth(g);
                    e.bgDO.setHeight(h);
                }
                e.setX(-e.thumbWidth / 2);
                e.setY(-e.thumbHeight / 2);
                FWDR3DCarModTweenMax.to(e, .8, {
                    x: Math.floor(e.newX + (e.thumbWidth - c) / 2),
                    y: -Math.floor(d / 2),
                    delay: b,
                    ease: Expo.easeOut
                });
            } else {
                e.setScale2(e.thumbScale);
                e.setX(-e.thumbWidth / 2);
                e.setY(-e.thumbHeight / 2);
                FWDR3DCarModTweenMax.to(e, .8, {
                    x: e.newX,
                    scale: e.thumbScale,
                    delay: b,
                    ease: Quart.easeOut,
                    onComplete: e.setThumbVisibility
                });
            }
        };
        this.setScale = function(a) {
            e.thumbScale = a;
            e.setVisible(true);
            if (!FWDR3DCarUtils.hasTransform2d) {
                var b = Math.floor(e.thumbWidth * a);
                var d = Math.floor(e.thumbHeight * a);
                var f = Math.floor(e.borderSize * a);
                if (e.borderSize > 0 && f < 1) f = 1;
                if (e.borderDO) FWDR3DCarModTweenMax.to(e.borderDO, .8, {
                    w: b,
                    h: d,
                    ease: Quart.easeOut
                });
                if (e.bgDO) FWDR3DCarModTweenMax.to(e.bgDO, .8, {
                    x: f,
                    y: f,
                    w: b - 2 * f,
                    h: d - 2 * f,
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(e.mainDO, .8, {
                    w: b,
                    h: d,
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                    x: f,
                    y: f,
                    w: b - 2 * f,
                    h: d - 2 * f,
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(e, .8, {
                    x: Math.floor(e.newX + (e.thumbWidth - b) / 2),
                    y: -Math.floor(d / 2),
                    w: b,
                    h: d,
                    ease: Quart.easeOut
                });
                if (c.showThumbnailsHtmlContent) {
                    if (e.htmlContentDO) FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                        w: b - 2 * f,
                        h: d - 2 * f,
                        ease: Quart.easeOut
                    });
                } else if (e.imageDO) FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                    w: b - 2 * f,
                    h: d - 2 * f,
                    ease: Quart.easeOut
                });
            } else FWDR3DCarModTweenMax.to(e, .8, {
                x: Math.floor(e.newX),
                scale: e.thumbScale,
                ease: Quart.easeOut,
                onComplete: e.setThumbVisibility
            });
        };
        this.setThumbVisibility = function() {
            if (0 == e.getZIndex()) e.setVisible(false);
        };
        this.update = function() {
            if (d.showRefl) if (!e.reflCanvasDO) e.addReflection(); else {
                e.reflCanvasDO.setAlpha(1);
                e.reflCanvasDO.setY(e.thumbHeight + d.reflDist);
            } else if (e.reflCanvasDO) e.reflCanvasDO.setAlpha(0);
        };
        this.hide = function(a) {
            var b = e.thumbWidth - 2 * e.borderSize;
            var d = e.thumbHeight - 2 * e.borderSize;
            FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                x: parseInt(e.thumbWidth / 2),
                y: parseInt(e.thumbHeight / 2),
                w: 0,
                h: 0,
                delay: a,
                ease: Expo.easeInOut
            });
            if (c.showThumbnailsHtmlContent) {
                if (e.htmlContentDO) FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                    x: -parseInt(b / 2),
                    y: -parseInt(d / 2),
                    delay: a,
                    ease: Expo.easeInOut
                });
            } else if (e.imageDO) {
                FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                    x: -parseInt(b / 2),
                    y: -parseInt(d / 2),
                    delay: a,
                    ease: Expo.easeInOut
                });
                if (e.reflCanvasDO) FWDR3DCarModTweenMax.to(e.reflCanvasDO, .8, {
                    alpha: 0,
                    delay: a,
                    ease: Expo.easeInOut
                });
            }
        };
        this.onMouseClickHandler = function() {
            e.dispatchEvent(b.CLICK, {
                id: e.id
            });
        };
        this.onMouseTouchHandler = function(a) {
            if (a.preventDefault) a.preventDefault();
            e.dispatchEvent(b.CLICK, {
                id: e.id
            });
        };
        this.destroy = function() {
            FWDR3DCarModTweenMax.killTweensOf(e);
            FWDR3DCarModTweenMax.killTweensOf(e.mainDO);
            FWDR3DCarModTweenMax.killTweensOf(e.imageHolderDO);
            if (e.isMobile) if (e.hasPointerEvent) e.mainDO.screen.removeEventListener("MSPointerUp", e.onMouseTouchHandler); else e.mainDO.screen.removeEventListener("touchend", e.onMouseTouchHandler); else if (e.screen.addEventListener) e.mainDO.screen.removeEventListener("click", e.onMouseClickHandler); else e.mainDO.screen.detachEvent("onclick", e.onMouseClickHandler);
            clearTimeout(e.setTextHeightId);
            if (e.imageDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.imageDO);
                e.imageDO.disposeImage();
                e.imageDO.destroy();
            }
            if (e.htmlContentDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.htmlContentDO);
                e.htmlContentDO.destroy();
                e.htmlContentDO = null;
            }
            if (e.bgDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.bgDO);
                e.bgDO.destroy();
                e.bgDO = null;
            }
            if (e.borderDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.borderDO);
                e.borderDO.destroy();
                e.borderDO = null;
            }
            if (e.htmlContentDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.htmlContentDO);
                e.htmlContentDO.destroy();
            }
            if (e.gradientLeftDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.gradientLeftDO);
                e.gradientLeftDO.destroy();
            }
            if (e.gradientRightDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.gradientRightDO);
                e.gradientRightDO.destroy();
            }
            if (e.textGradientDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.textGradientDO);
                e.textGradientDO = null;
            }
            if (e.textDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.textDO);
                e.textDO = null;
            }
            if (e.textHolderDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.textHolderDO);
                e.textHolderDO = null;
            }
            e.imageHolderDO.destroy();
            e.mainDO.destroy();
            e.imageHolderDO = null;
            e.imageDO = null;
            e.htmlContentDO = null;
            e.mainDO = null;
            e.borderDO = null;
            e.bgDO = null;
            e.imageHolderDO = null;
            e.imageDO = null;
            e.htmlContentDO = null;
            e.gradientDO = null;
            e.gradientLeftDO = null;
            e.gradientRightDO = null;
            e.textHolderDO = null;
            e.textGradientDO = null;
            e.textDO = null;
            e.id = null;
            e.data = null;
            e.parent = null;
            e.backgroundColor = null;
            e.borderColor = null;
            e.screen.innerHTML = "";
            f.destroy();
            f = null;
            e = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject3D("div", "absolute", "visible");
    };
    b.CLICK = "click";
    b.prototype = null;
    a.FWDR3DCarThumb = b;
}(window);

!function(a) {
    var b = function(c, d) {
        var e = this;
        var f = b.prototype;
        this.data = c;
        this.parent = d;
        this.stageWidth = d.stageWidth;
        this.stageHeight = d.stageHeight;
        this.thumbsHolderDO;
        this.totalThumbs;
        this.thumbsAr = [];
        this.dataListId = c.startAtCategory;
        this.curDataListAr;
        this.nrThumbsToDisplay = c.nrThumbsToDisplay;
        this.dragCurId;
        this.prevCurId;
        this.curId;
        this.thumbWidth = c.thumbWidth;
        this.thumbHeight = c.thumbHeight;
        this.borderSize = c.thumbBorderSize;
        this.perspective = e.thumbWidth;
        this.sizeRatio = e.thumbWidth / 400;
        this.countLoadedThumbsLeft;
        this.countLoadedThumbsRight;
        this.controlsDO;
        this.prevButtonDO;
        this.nextButtonDO;
        this.scrollbarDO;
        this.slideshowButtonDO;
        this.showSlideshowButton = e.data.showSlideshowButton || e.data.autoplay;
        this.controlsHeight = e.data.nextButtonNImg.height;
        this.showText = e.data.showText;
        this.textDO;
        this.textHolderDO;
        this.textGradientDO;
        this.thumbOverDO;
        this.showRefl = c.showRefl;
        this.reflHeight = c.reflHeight;
        this.reflDist = c.reflDist;
        this.reflAlpha = c.reflAlpha;
        this.isThumbOver = false;
        this.hasThumbText = false;
        this.introFinished = false;
        this.isPlaying = false;
        this.disableThumbClick = false;
        this.isTextSet = false;
        this.allowToSwitchCat = false;
        this.hasPointerEvent = FWDR3DCarUtils.hasPointerEvent;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.loadWithDelayIdLeft;
        this.loadWithDelayIdRight;
        this.slideshowTimeoutId;
        this.textTimeoutId;
        this.zSortingId;
        this.hideThumbsFinishedId;
        this.loadHtmlContentsId;
        this.loadImagesId;
        this.setTextHeightId;
        this.setIntroFinishedId;
        this.showControlsId;
        this.init = function() {
            e.thumbsHolderDO = new FWDR3DCarDisplayObject3D("div", "absolute", "visible");
            e.addChild(e.thumbsHolderDO);
            e.thumbsHolderDO.setZ(1e5);
            e.thumbsHolderDO.setPerspective(e.perspective);
            e.thumbsHolderDO.setX(Math.floor(e.stageWidth / 2));
            e.thumbsHolderDO.setY(Math.floor(e.stageHeight / 2 - e.data.prevButtonNImg.height / 2));
            if (!e.isMobile && !FWDR3DCarUtils.isSafari || FWDR3DCarUtils.isAndroidAndWebkit) e.thumbsHolderDO.setPreserve3D();
            if (!e.isMobile) if (e.screen.addEventListener) a.addEventListener("mousemove", e.onThumbMove); else document.attachEvent("onmousemove", e.onThumbMove);
            if (e.hasPointerEvent) a.addEventListener("MSPointerMove", e.onThumbMove);
            e.showScrollbar = c.showScrollbar;
            e.showNextButton = c.showNextButton;
            e.showPrevButton = c.showPrevButton;
            if (e.isMobile) {
                if (c.disableScrollbarOnMobile) e.showScrollbar = false;
                if (c.disableNextAndPrevButtonsOnMobile) {
                    e.showNextButton = false;
                    e.showPrevButton = false;
                }
            }
            if (e.showText) {
                e.setupText();
                if (e.isMobile) e.setupThumbOver();
            }
            e.showCurrentCat(-1);
            e.setupControls();
        };
        this.onThumbMove = function(a) {
            if (!e.textHolderDO) return;
            if (e.disableThumbClick) return;
            var b = FWDR3DCarUtils.getViewportMouseCoordinates(a);
            e.thumbMouseX = b.screenX - d.rect.left - (e.stageWidth - e.thumbWidth) / 2;
            e.thumbMouseY = b.screenY - d.rect.top - (e.stageHeight - c.prevButtonNImg.height - e.thumbHeight) / 2;
            if (e.isTextSet) if (e.isMobile) e.checkThumbOver(); else e.thumbsAr[e.curId].checkThumbOver();
        };
        this.showCurrentCat = function(a) {
            if (a != e.dataListId && a >= 0) {
                e.allowToSwitchCat = false;
                e.hideCurrentCat();
                e.dataListId = a;
                return;
            }
            e.thumbsAr = [];
            e.curDataListAr = e.data.dataListAr[e.dataListId];
            e.totalThumbs = e.curDataListAr.length;
            if (0 == e.totalThumbs) {
                var d = "This category doesn't contain any thumbnails!";
                e.dispatchEvent(b.LOAD_ERROR, {
                    text: d
                });
                return;
            }
            if (e.isMobile) e.totalThumbs = Math.min(e.totalThumbs, c.maxNumberOfThumbsOnMobile);
            switch (e.data.carouselStartPosition) {
              case "left":
                e.curId = 0;
                break;

              case "right":
                e.curId = e.totalThumbs - 1;
                break;

              default:
                e.curId = Math.floor((e.totalThumbs - 1) / 2);
            }
            if (e.showScrollbar && e.scrollbarDO) {
                e.scrollbarDO.totalItems = e.totalThumbs;
                e.scrollbarDO.curItemId = e.curId;
                e.scrollbarDO.gotoItem2();
            }
            e.setupThumbs();
            e.prevCurId = e.curId;
            e.startIntro();
        };
        this.hideCurrentCat = function() {
            clearTimeout(e.loadWithDelayIdLeft);
            clearTimeout(e.loadWithDelayIdRight);
            clearTimeout(e.textTimeoutId);
            clearInterval(e.zSortingId);
            clearTimeout(e.hideThumbsFinishedId);
            clearTimeout(e.loadHtmlContentsId);
            clearTimeout(e.loadImagesId);
            clearTimeout(e.setTextHeightId);
            clearTimeout(e.setIntroFinishedId);
            clearTimeout(e.showControlsId);
            e.stopSlideshow();
            e.disableThumbClick = true;
            if (e.image) {
                e.image.onload = null;
                e.image.onerror = null;
            }
            if (e.imageLeft) {
                e.imageLeft.onload = null;
                e.imageLeft.onerror = null;
            }
            if (e.imageRight) {
                e.imageRight.onload = null;
                e.imageRight.onerror = null;
            }
            e.hideThumbs();
        };
        this.hideThumbs = function() {
            var a;
            var b = -e.thumbWidth / 2;
            for (var c = 0; c < e.totalThumbs; c++) {
                thumb = e.thumbsAr[c];
                if (c == e.curId) e.hideThumbsFinishedId = setTimeout(e.hideThumbsFinished, 1200 + 500); else if (Math.abs(c - e.curId) <= e.nrThumbsToDisplay) {
                    a = 300 * (e.nrThumbsToDisplay - Math.abs(c - e.curId) + 1);
                    FWDR3DCarModTweenMax.to(thumb, .5, {
                        x: Math.floor(b),
                        delay: a / 1e3,
                        ease: Expo.easeIn
                    });
                    thumb.hide((a - 250) / 1e3);
                } else thumb.setX(b);
            }
        };
        this.hideThumbsFinished = function() {
            for (var a = 0; a < e.totalThumbs; a++) {
                thumb = e.thumbsAr[a];
                if (a == e.curId) {
                    thumb.hide(0);
                    FWDR3DCarModTweenMax.to(thumb, .6, {
                        alpha: 0,
                        delay: .2,
                        onComplete: e.allThumbsAreTweened
                    });
                    if (e.isMobile && e.textHolderDO) {
                        FWDR3DCarModTweenMax.to(e.textHolderDO, .6, {
                            alpha: 0,
                            delay: .2,
                            ease: Expo.easeOut
                        });
                        FWDR3DCarModTweenMax.to(e.textGradientDO, .6, {
                            alpha: 0,
                            delay: .2,
                            ease: Expo.easeOut
                        });
                    }
                } else thumb.setAlpha(0);
            }
        };
        this.allThumbsAreTweened = function() {
            e.destroyCurrentCat();
            e.showCurrentCat();
        };
        this.destroyCurrentCat = function() {
            var a;
            for (var b = 0; b < e.totalThumbs; b++) {
                a = e.thumbsAr[b];
                FWDR3DCarModTweenMax.killTweensOf(a);
                e.thumbsHolderDO.removeChild(a);
                a.destroy();
                a = null;
            }
        };
        this.startIntro = function() {
            e.disableThumbClick = true;
            thumb = e.thumbsAr[e.curId];
            var a = -e.thumbWidth / 2;
            var b = -e.thumbHeight / 2;
            thumb.setGradient(0);
            thumb.setX(Math.floor(a));
            thumb.setY(Math.floor(b));
            thumb.setAlpha(0);
            FWDR3DCarModTweenMax.to(thumb, .8, {
                alpha: 1
            });
            e.thumbsHolderDO.addChild(thumb);
            if (e.data.showThumbnailsHtmlContent) {
                e.loadCenterHtmlContent();
                e.loadHtmlContentsId = setTimeout(e.loadHtmlContents, 600);
            } else {
                e.loadCenterImage();
                e.loadImagesId = setTimeout(e.loadImages, 600);
            }
        };
        this.setupThumbs = function() {
            var a;
            for (var b = 0; b < e.totalThumbs; b++) {
                FWDR3DCarThumb.setPrototype();
                a = new FWDR3DCarThumb(b, e.data, e);
                e.thumbsAr.push(a);
                a.addListener(FWDR3DCarThumb.CLICK, e.onThumbClick);
            }
        };
        this.onThumbClick = function(a) {
            if (e.disableThumbClick) return;
            e.curId = a.id;
            e.thumbClickHandler();
        };
        this.thumbClickHandler = function() {
            if (e.curId != e.prevCurId) e.gotoThumb(); else {
                var c = e.curDataListAr[e.curId].mediaType;
                var d = e.curId;
                if ("none" == c) return;
                if ("link" != c) for (var f = 0; f < e.totalThumbs; f++) if (f < e.curId && ("link" == e.curDataListAr[f].mediaType || "none" == e.curDataListAr[f].mediaType)) d -= 1;
                if ("link" == c) a.open(e.curDataListAr[e.curId].secondObj.url, e.curDataListAr[e.curId].secondObj.target); else e.dispatchEvent(b.THUMB_CLICK, {
                    id: d
                });
            }
        };
        this.resizeHandler = function() {
            if (e.stageWidth == d.stageWidth && e.stageHeight == d.stageHeight) return;
            e.stageWidth = d.stageWidth;
            e.stageHeight = d.stageHeight;
            e.thumbsHolderDO.setX(Math.floor(e.stageWidth / 2));
            e.thumbsHolderDO.setY(Math.floor(e.stageHeight / 2 - e.data.prevButtonNImg.height / 2));
            e.positionControls();
            if (e.textHolderDO && e.isMobile) {
                e.textHolderDO.setX(Math.floor((e.stageWidth - e.thumbWidth) / 2) + e.borderSize);
                e.textHolderDO.setY(Math.floor((e.stageHeight - e.thumbHeight) / 2 - e.data.prevButtonNImg.height / 2) + e.borderSize);
            }
            if (e.thumbOverDO) {
                e.thumbOverDO.setX(Math.floor((e.stageWidth - e.thumbWidth) / 2));
                e.thumbOverDO.setY(Math.floor((e.stageHeight - e.thumbHeight - e.data.prevButtonNImg.height) / 2));
            }
        };
        this.setupText = function() {
            e.textHolderDO = new FWDR3DCarDisplayObject3D("div");
            e.addChild(e.textHolderDO);
            if (e.isMobile) e.textHolderDO.setZ(2e5);
            e.textHolderDO.setWidth(e.thumbWidth - 2 * e.borderSize);
            e.textHolderDO.setHeight(e.thumbHeight - 2 * e.borderSize);
            if (e.isMobile) {
                e.textHolderDO.setX(Math.floor((e.stageWidth - e.thumbWidth) / 2) + e.borderSize);
                e.textHolderDO.setY(Math.floor((e.stageHeight - e.thumbHeight - e.data.prevButtonNImg.height) / 2) + e.borderSize);
            } else e.textHolderDO.setX(-1e3);
            if (e.data.showTextBackgroundImage) {
                e.textGradientDO = new FWDR3DCarSimpleDisplayObject("img");
                e.textHolderDO.addChild(e.textGradientDO);
                e.textGradientDO.setWidth(e.thumbWidth - 2 * e.borderSize);
                e.textGradientDO.setHeight(e.thumbHeight - 2 * e.borderSize);
                e.textGradientDO.screen.src = c.thumbTitleGradientPath;
            } else {
                e.textGradientDO = new FWDR3DCarSimpleDisplayObject("div");
                e.textHolderDO.addChild(e.textGradientDO);
                e.textGradientDO.setWidth(e.thumbWidth - 2 * e.borderSize);
                e.textGradientDO.setHeight(e.thumbHeight - 2 * e.borderSize);
                e.textGradientDO.setBkColor(e.data.textBackgroundColor);
                e.textGradientDO.setAlpha(e.data.textBackgroundOpacity);
            }
            e.textDO = new FWDR3DCarSimpleDisplayObject("div");
            e.textHolderDO.addChild(e.textDO);
            e.textDO.setWidth(e.thumbWidth - 2 * e.borderSize);
            e.textDO.getStyle().fontSmoothing = "antialiased";
            e.textDO.getStyle().webkitFontSmoothing = "antialiased";
            e.textDO.getStyle().textRendering = "optimizeLegibility";
        };
        this.setupThumbOver = function() {
            e.thumbOverDO = new FWDR3DCarDisplayObject("div");
            e.addChild(e.thumbOverDO);
            if (!e.isMobile) e.thumbOverDO.setButtonMode(true);
            if (FWDR3DCarUtils.isIE) {
                e.thumbOverDO.setBkColor("#000000");
                e.thumbOverDO.setAlpha(.001);
            }
            e.thumbOverDO.setWidth(e.thumbWidth);
            e.thumbOverDO.setHeight(e.thumbHeight);
            e.thumbOverDO.setX(Math.floor((e.stageWidth - e.thumbWidth) / 2));
            e.thumbOverDO.setY(Math.floor((e.stageHeight - e.thumbHeight - e.data.prevButtonNImg.height) / 2));
            if (e.isMobile) if (e.hasPointerEvent) e.thumbOverDO.screen.addEventListener("MSPointerUp", e.onThumbOverTouch); else e.thumbOverDO.screen.addEventListener("touchend", e.onThumbOverTouch); else if (e.screen.addEventListener) e.thumbOverDO.screen.addEventListener("click", e.onThumbOverClick); else e.thumbOverDO.screen.attachEvent("onclick", e.onThumbOverClick);
        };
        this.onThumbOverClick = function() {
            if (e.disableThumbClick) return;
            e.thumbClickHandler();
        };
        this.onThumbOverTouch = function(a) {
            if (a.preventDefault) a.preventDefault();
            if (e.disableThumbClick) return;
            e.thumbClickHandler();
        };
        this.addThumbText = function() {
            e.textHolderDO.setY(Math.floor((e.stageHeight - e.thumbHeight - e.data.prevButtonNImg.height) / 2) + e.borderSize);
            e.textDO.setInnerHTML(e.curDataListAr[e.curId].thumbText);
            e.textTitleOffset = e.curDataListAr[e.curId].textTitleOffset;
            e.textDescriptionOffsetTop = e.curDataListAr[e.curId].textDescriptionOffsetTop;
            e.textDescriptionOffsetBottom = e.curDataListAr[e.curId].textDescriptionOffsetBottom;
            e.textGradientDO.setY(e.thumbHeight - 2 * e.borderSize - e.textTitleOffset);
            e.textDO.setY(e.thumbHeight - 2 * e.borderSize - e.textTitleOffset + e.textDescriptionOffsetTop);
            e.textHolderDO.setAlpha(0);
            e.setTextHeightId = setTimeout(e.setTextHeight, 10);
        };
        this.setTextHeight = function() {
            e.textHeight = e.textDO.getHeight();
            FWDR3DCarModTweenMax.to(e.textHolderDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            e.hasThumbText = true;
            e.checkThumbOver();
        };
        this.removeThumbText = function() {
            if (e.isMobile) e.removeTextFinish(); else FWDR3DCarModTweenMax.to(e.textHolderDO, .6, {
                alpha: 0,
                ease: Expo.easeOut,
                onComplete: e.removeTextFinish
            });
        };
        this.removeTextFinish = function() {
            FWDR3DCarModTweenMax.killTweensOf(e.textHolderDO);
            FWDR3DCarModTweenMax.killTweensOf(e.textGradientDO);
            FWDR3DCarModTweenMax.killTweensOf(e.textDO);
            e.hasThumbText = false;
            e.isThumbOver = false;
            e.textHolderDO.setY(2e3);
        };
        this.checkThumbOver = function() {
            if (!e.hasThumbText) return;
            if (e.thumbMouseX >= 0 && e.thumbMouseX <= e.thumbWidth && e.thumbMouseY >= 0 && e.thumbMouseY <= e.thumbHeight) e.onThumbOverHandler(); else e.onThumbOutHandler();
        };
        this.onThumbOverHandler = function() {
            if (!e.isThumbOver) {
                e.isThumbOver = true;
                FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textDescriptionOffsetTop - e.textHeight - e.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(e.textDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textHeight - e.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                });
            }
        };
        this.onThumbOutHandler = function() {
            if (e.isThumbOver) {
                e.isThumbOver = false;
                FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textTitleOffset,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(e.textDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textTitleOffset + e.textDescriptionOffsetTop,
                    ease: Expo.easeOut
                });
            }
        };
        this.loadImages = function() {
            if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) e.setupIntro3D(); else e.setupIntro2D();
            e.countLoadedThumbsLeft = e.curId - 1;
            e.loadWithDelayIdLeft = setTimeout(e.loadThumbImageLeft, 100);
            e.countLoadedThumbsRight = e.curId + 1;
            e.loadWithDelayIdRight = setTimeout(e.loadThumbImageRight, 100);
        };
        this.loadCenterImage = function() {
            e.imagePath = e.curDataListAr[e.curId].thumbPath;
            e.image = new Image();
            e.image.onerror = e.onImageLoadErrorHandler;
            e.image.onload = e.onImageLoadHandlerCenter;
            e.image.src = e.imagePath;
        };
        this.onImageLoadHandlerCenter = function(a) {
            var b = e.thumbsAr[e.curId];
            b.addImage(e.image);
            if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) b.showThumb3D(); else b.showThumb2D();
            if (e.showText) {
                e.isTextSet = true;
                if (e.isMobile) e.addThumbText(); else b.addText(e.textHolderDO, e.textGradientDO, e.textDO);
            }
        };
        this.loadThumbImageLeft = function() {
            if (e.countLoadedThumbsLeft < 0) return;
            e.imagePath = e.curDataListAr[e.countLoadedThumbsLeft].thumbPath;
            e.imageLeft = new Image();
            e.imageLeft.onerror = e.onImageLoadErrorHandler;
            e.imageLeft.onload = e.onImageLoadHandlerLeft;
            e.imageLeft.src = e.imagePath;
        };
        this.onImageLoadHandlerLeft = function(a) {
            var b = e.thumbsAr[e.countLoadedThumbsLeft];
            b.addImage(e.imageLeft);
            if (Math.abs(e.countLoadedThumbsLeft - e.curId) <= e.nrThumbsToDisplay) if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) b.showThumb3D(); else b.showThumb2D();
            e.countLoadedThumbsLeft--;
            e.loadWithDelayIdLeft = setTimeout(e.loadThumbImageLeft, 200);
        };
        this.loadThumbImageRight = function() {
            if (e.countLoadedThumbsRight > e.totalThumbs - 1) return;
            e.imagePath = e.curDataListAr[e.countLoadedThumbsRight].thumbPath;
            e.imageRight = new Image();
            e.imageRight.onerror = e.onImageLoadErrorHandler;
            e.imageRight.onload = e.onImageLoadHandlerRight;
            e.imageRight.src = e.imagePath;
        };
        this.onImageLoadHandlerRight = function(a) {
            var b = e.thumbsAr[e.countLoadedThumbsRight];
            b.addImage(e.imageRight);
            if (Math.abs(e.countLoadedThumbsRight - e.curId) <= e.nrThumbsToDisplay) if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) b.showThumb3D(); else b.showThumb2D();
            e.countLoadedThumbsRight++;
            e.loadWithDelayIdRight = setTimeout(e.loadThumbImageRight, 200);
        };
        this.onImageLoadErrorHandler = function(a) {
            if (!e || !e.data) return;
            var c = "Thumb can't be loaded, probably the path is incorrect <font color='#FFFFFF'>" + e.imagePath + "</font>";
            e.dispatchEvent(b.LOAD_ERROR, {
                text: c
            });
        };
        this.loadHtmlContents = function() {
            if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) e.setupIntro3D(); else e.setupIntro2D();
            e.countLoadedThumbsLeft = e.curId - 1;
            e.loadWithDelayIdLeft = setTimeout(e.loadThumbHtmlContentLeft, 100);
            e.countLoadedThumbsRight = e.curId + 1;
            e.loadWithDelayIdRight = setTimeout(e.loadThumbHtmlContentRight, 100);
        };
        this.loadCenterHtmlContent = function() {
            var a = e.thumbsAr[e.curId];
            a.addHtmlContent();
            if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) a.showThumb3D(); else a.showThumb2D();
            if (e.showText) {
                e.isTextSet = true;
                if (e.isMobile) e.addThumbText(); else a.addText(e.textHolderDO, e.textGradientDO, e.textDO);
            }
        };
        this.loadThumbHtmlContentLeft = function() {
            if (e.countLoadedThumbsLeft < 0) return;
            var a = e.thumbsAr[e.countLoadedThumbsLeft];
            a.addHtmlContent();
            if (Math.abs(e.countLoadedThumbsLeft - e.curId) <= e.nrThumbsToDisplay) if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) a.showThumb3D(); else a.showThumb2D();
            e.countLoadedThumbsLeft--;
            e.loadWithDelayIdLeft = setTimeout(e.loadThumbHtmlContentLeft, 200);
        };
        this.loadThumbHtmlContentRight = function() {
            if (e.countLoadedThumbsRight > e.totalThumbs - 1) return;
            var a = e.thumbsAr[e.countLoadedThumbsRight];
            a.addHtmlContent();
            if (Math.abs(e.countLoadedThumbsRight - e.curId) <= e.nrThumbsToDisplay) if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) a.showThumb3D(); else a.showThumb2D();
            e.countLoadedThumbsRight++;
            e.loadWithDelayIdRight = setTimeout(e.loadThumbHtmlContentRight, 200);
        };
        this.setupIntro3D = function() {
            var a;
            var b;
            var c;
            var d;
            var f;
            var g;
            var h;
            for (var i = 0; i < e.totalThumbs; i++) {
                thumb = e.thumbsAr[i];
                a = 0;
                b = 0;
                c = 0;
                d = 0;
                f = 0;
                g = 0;
                a -= e.thumbWidth / 2;
                b -= e.thumbHeight / 2;
                var j = 0;
                if (i < e.curId) j = -1; else if (i > e.curId) j = 1;
                var k;
                var l;
                var m;
                var n;
                var o;
                var p;
                switch (e.nrThumbsToDisplay) {
                  case 1:
                    k = 250 * j;
                    l = -5;
                    m = -220;
                    n = 15;
                    o = 25 * j;
                    p = -4 * j;
                    break;

                  case 2:
                    k = 630 * j;
                    l = 0;
                    m = -500;
                    n = 25;
                    o = 28 * j;
                    p = -13 * j;
                    break;

                  case 3:
                    k = 1130 * j;
                    l = 0;
                    m = -900;
                    n = 32;
                    o = 28 * j;
                    p = -20 * j;
                    break;

                  default:
                    k = 1475 * j;
                    l = -20;
                    m = -1200;
                    n = 50;
                    o = 20 * j;
                    p = -28 * j;
                }
                switch (Math.abs(i - e.curId)) {
                  case 0:
                    break;

                  case 1:
                    c = -120;
                    break;

                  case 2:
                    if (e.nrThumbsToDisplay >= 2) c = -400; else c = m;
                    break;

                  case 3:
                    if (e.nrThumbsToDisplay >= 3) c = -800; else c = m;
                    break;

                  case 4:
                    if (e.nrThumbsToDisplay >= 4) c = -1100; else c = m;
                    break;

                  default:
                    c = m;
                }
                thumb.setX(Math.floor(a));
                thumb.setY(Math.floor(b));
                thumb.setZ(Math.floor(c));
                a = 0;
                b = 0;
                c = 0;
                switch (Math.abs(i - e.curId)) {
                  case 0:
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(5);
                    break;

                  case 1:
                    a = 350 * j;
                    b = -5;
                    c = -126 - Math.floor(Math.max(e.thumbHeight - 266, 0) / 2.5);
                    d = 15;
                    f = 25 * j;
                    g = -4 * j;
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(4);
                    break;

                  case 2:
                    if (e.nrThumbsToDisplay >= 2) {
                        a = 730 * j;
                        c = -400;
                        d = 25;
                        f = 28 * j;
                        g = -13 * j;
                    } else {
                        a = k;
                        b = l;
                        c = m;
                        d = n;
                        f = o;
                        g = p;
                    }
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(3);
                    break;

                  case 3:
                    if (e.nrThumbsToDisplay >= 3) {
                        a = 1230 * j;
                        c = -800;
                        d = 32;
                        f = 28 * j;
                        g = -20 * j;
                    } else {
                        a = k;
                        b = l;
                        c = m;
                        d = n;
                        f = o;
                        g = p;
                    }
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(2);
                    break;

                  case 4:
                    if (e.nrThumbsToDisplay >= 4) {
                        a = 1575 * j;
                        b = -20;
                        c = -1100;
                        d = 50;
                        f = 20 * j;
                        g = -28 * j;
                    } else {
                        a = k;
                        b = l;
                        c = m;
                        d = n;
                        f = o;
                        g = p;
                    }
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(1);
                    break;

                  default:
                    a = k;
                    b = l;
                    c = m;
                    d = n;
                    f = o;
                    g = p;
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(0);
                }
                a += e.data.thumbSpaceOffset3D * j * -c / 300;
                a *= e.sizeRatio;
                b *= e.sizeRatio;
                c *= e.sizeRatio;
                var q = e.thumbHeight / e.thumbWidth;
                if (q > .7) {
                    a *= Math.min(1 / q, .8);
                    b *= 1.5 * Math.max(q, 1.1);
                }
                a = Math.floor(a) - Math.floor(e.thumbWidth / 2);
                b = Math.floor(b) - Math.floor(e.thumbHeight / 2);
                thumb.setGradient(j);
                h = 200 * Math.min(Math.abs(i - e.curId), e.nrThumbsToDisplay);
                FWDR3DCarModTweenMax.to(thumb, .8, {
                    x: Math.floor(a),
                    y: Math.floor(b),
                    z: Math.floor(c),
                    angleX: d,
                    angleY: f,
                    angleZ: g,
                    delay: h / 1e3,
                    ease: Expo.easeOut
                });
                e.thumbsHolderDO.addChild(thumb);
            }
            e.setIntroFinishedId = setTimeout(e.setIntroFinished, h + 800);
            e.showControlsId = setTimeout(e.showControls, h);
        };
        this.setupIntro2D = function() {
            var a;
            var b;
            var c;
            for (var d = 0; d < e.totalThumbs; d++) {
                thumb = e.thumbsAr[d];
                a = 0;
                b = 1;
                var f = 0;
                if (d < e.curId) f = -1; else if (d > e.curId) f = 1;
                var g;
                var h;
                switch (e.nrThumbsToDisplay) {
                  case 1:
                    g = 100 * f;
                    h = .8;
                    break;

                  case 2:
                    g = 140 * f;
                    h = .7;
                    break;

                  case 3:
                    g = 200 * f;
                    h = .6;
                    break;

                  default:
                    g = 250 * f;
                    h = .5;
                }
                switch (Math.abs(d - e.curId)) {
                  case 0:
                    thumb.setZIndex(5);
                    break;

                  case 1:
                    a = 150 * f;
                    b = .9;
                    thumb.setZIndex(4);
                    break;

                  case 2:
                    if (e.nrThumbsToDisplay >= 2) {
                        a = 240 * f;
                        b = .8;
                    } else {
                        a = g;
                        b = h;
                    }
                    thumb.setZIndex(3);
                    break;

                  case 3:
                    if (e.nrThumbsToDisplay >= 3) {
                        a = 300 * f;
                        b = .7;
                    } else {
                        a = g;
                        b = h;
                    }
                    thumb.setZIndex(2);
                    break;

                  case 4:
                    if (e.nrThumbsToDisplay >= 4) {
                        a = 350 * f;
                        b = .6;
                    } else {
                        a = g;
                        b = h;
                    }
                    thumb.setZIndex(1);
                    break;

                  default:
                    a = g;
                    b = h;
                    thumb.setZIndex(0);
                }
                a += e.data.thumbSpaceOffset2D * f;
                if (1 == Math.abs(d - e.curId)) a -= e.data.thumbSpaceOffset2D / 4 * f;
                a *= e.sizeRatio;
                var i = e.thumbHeight / e.thumbWidth;
                if (i > .7) a *= Math.min(1 / i, .8);
                a -= e.thumbWidth / 2;
                thumb.newX = Math.floor(a);
                thumb.setGradient(f);
                c = 200 * Math.min(Math.abs(d - e.curId), e.nrThumbsToDisplay);
                thumb.showThumbIntro2D(b, c / 1e3);
                e.thumbsHolderDO.addChild(thumb);
            }
            e.setIntroFinishedId = setTimeout(e.setIntroFinished, c + 800);
            e.showControlsId = setTimeout(e.showControls, c);
        };
        this.setIntroFinished = function() {
            e.introFinished = true;
            e.allowToSwitchCat = true;
            e.disableThumbClick = false;
            e.dispatchEvent(b.THUMBS_INTRO_FINISH);
            if (e.isMobile) e.setupMobileDrag();
            if (FWDR3DCarUtils.isIEAndMoreThen9 || !FWDR3DCarUtils.hasTransform3d || e.data.showDisplay2DAlways) e.zSortingId = setInterval(e.sortZ, 16);
            if (e.data.autoplay) if (e.slideshowButtonDO) {
                e.slideshowButtonDO.onClick();
                e.slideshowButtonDO.onMouseOut();
            }
        };
        this.gotoThumb = function() {
            if (!e.introFinished) return;
            if (e.showScrollbar && !e.scrollbarDO.isPressed) e.scrollbarDO.gotoItem(e.curId, true);
            if (e.isPlaying) {
                clearTimeout(e.slideshowTimeoutId);
                e.slideshowTimeoutId = setTimeout(e.startTimeAgain, e.data.transitionDelay);
                if (e.slideshowButtonDO.isCounting) e.slideshowButtonDO.resetCounter();
            }
            if (e.showText) if (e.isTextSet) {
                e.isTextSet = false;
                if (e.isMobile) e.removeThumbText(); else e.thumbsAr[e.prevCurId].removeText();
                clearTimeout(e.textTimeoutId);
                e.textTimeoutId = setTimeout(e.setThumbText, 800);
            } else {
                clearTimeout(e.textTimeoutId);
                e.textTimeoutId = setTimeout(e.setThumbText, 800);
            }
            e.prevCurId = e.curId;
            if (FWDR3DCarUtils.hasTransform3d && !e.data.showDisplay2DAlways) e.gotoThumb3D(); else e.gotoThumb2D();
        };
        this.setThumbText = function() {
            e.isTextSet = true;
            if (e.isMobile) e.addThumbText(); else e.thumbsAr[e.curId].addText(e.textHolderDO, e.textGradientDO, e.textDO);
        };
        this.gotoThumb3D = function() {
            var a;
            var b;
            var c;
            var d;
            var f;
            var g;
            for (var h = 0; h < e.totalThumbs; h++) {
                thumb = e.thumbsAr[h];
                a = 0;
                b = 0;
                c = 0;
                d = 0;
                f = 0;
                g = 0;
                var i = 0;
                if (h < e.curId) i = -1; else if (h > e.curId) i = 1;
                var j;
                var k;
                var l;
                var m;
                var n;
                var o;
                switch (e.nrThumbsToDisplay) {
                  case 1:
                    j = 250 * i;
                    k = -5;
                    l = -220;
                    m = 15;
                    n = 25 * i;
                    o = -4 * i;
                    break;

                  case 2:
                    j = 630 * i;
                    k = 0;
                    l = -500;
                    m = 25;
                    n = 28 * i;
                    o = -13 * i;
                    break;

                  case 3:
                    j = 1130 * i;
                    k = 0;
                    l = -900;
                    m = 32;
                    n = 28 * i;
                    o = -20 * i;
                    break;

                  default:
                    j = 1475 * i;
                    k = -20;
                    l = -1200;
                    m = 50;
                    n = 20 * i;
                    o = -28 * i;
                }
                switch (Math.abs(h - e.curId)) {
                  case 0:
                    break;

                  case 1:
                    a = 350 * i;
                    b = -5;
                    c = -126 - Math.floor(Math.max(e.thumbHeight - 266, 0) / 2.5);
                    d = 15;
                    f = 25 * i;
                    g = -4 * i;
                    break;

                  case 2:
                    if (e.nrThumbsToDisplay >= 2) {
                        a = 730 * i;
                        c = -400;
                        d = 25;
                        f = 28 * i;
                        g = -13 * i;
                    } else {
                        a = j;
                        b = k;
                        c = l;
                        d = m;
                        f = n;
                        g = o;
                    }
                    break;

                  case 3:
                    if (e.nrThumbsToDisplay >= 3) {
                        a = 1230 * i;
                        c = -800;
                        d = 32;
                        f = 28 * i;
                        g = -20 * i;
                    } else {
                        a = j;
                        b = k;
                        c = l;
                        d = m;
                        f = n;
                        g = o;
                    }
                    break;

                  case 4:
                    if (e.nrThumbsToDisplay >= 4) {
                        a = 1575 * i;
                        b = -20;
                        c = -1100;
                        d = 50;
                        f = 20 * i;
                        g = -28 * i;
                    } else {
                        a = j;
                        b = k;
                        c = l;
                        d = m;
                        f = n;
                        g = o;
                    }
                    break;

                  default:
                    a = j;
                    b = k;
                    c = l;
                    d = m;
                    f = n;
                    g = o;
                }
                a += e.data.thumbSpaceOffset3D * i * -c / 300;
                a *= e.sizeRatio;
                b *= e.sizeRatio;
                c *= e.sizeRatio;
                var p = e.thumbHeight / e.thumbWidth;
                if (p > .7) {
                    a *= Math.min(1 / p, .8);
                    b *= 1.5 * Math.max(p, 1.1);
                }
                a = Math.floor(a) - Math.floor(e.thumbWidth / 2);
                b = Math.floor(b) - Math.floor(e.thumbHeight / 2);
                FWDR3DCarModTweenMax.killTweensOf(thumb);
                if ((thumb.getX() + Math.floor(e.thumbWidth / 2)) * (a + Math.floor(e.thumbWidth / 2)) < 0) {
                    FWDR3DCarModTweenMax.to(thumb, .8, {
                        bezier: {
                            values: [ {
                                x: -Math.floor(e.thumbWidth / 2),
                                y: -Math.floor(e.thumbHeight / 2),
                                z: 0,
                                angleX: 0,
                                angleY: 0,
                                angleZ: 0
                            }, {
                                x: Math.floor(a),
                                y: Math.floor(b),
                                z: Math.floor(c),
                                angleX: d,
                                angleY: f,
                                angleZ: g
                            } ]
                        },
                        ease: Quart.easeOut
                    });
                    thumb.setGradient(i);
                } else if (Math.abs(h - e.curId) < e.nrThumbsToDisplay || thumb.getX() != Math.floor(a)) {
                    FWDR3DCarModTweenMax.to(thumb, .8, {
                        x: Math.floor(a),
                        y: Math.floor(b),
                        z: Math.floor(c),
                        angleX: d,
                        angleY: f,
                        angleZ: g,
                        ease: Quart.easeOut
                    });
                    thumb.setGradient(i);
                }
            }
        };
        this.gotoThumb2D = function() {
            var a;
            var b;
            for (var c = 0; c < e.totalThumbs; c++) {
                thumb = e.thumbsAr[c];
                a = 0;
                newY = 0;
                b = 1;
                var d = 0;
                if (c < e.curId) d = -1; else if (c > e.curId) d = 1;
                var f;
                var g;
                switch (e.nrThumbsToDisplay) {
                  case 1:
                    f = 100 * d;
                    g = .8;
                    break;

                  case 2:
                    f = 140 * d;
                    g = .7;
                    break;

                  case 3:
                    f = 200 * d;
                    g = .6;
                    break;

                  default:
                    f = 250 * d;
                    g = .5;
                }
                switch (Math.abs(c - e.curId)) {
                  case 0:
                    break;

                  case 1:
                    a = 150 * d;
                    b = .9;
                    break;

                  case 2:
                    if (e.nrThumbsToDisplay >= 2) {
                        a = 240 * d;
                        b = .8;
                    } else {
                        a = f;
                        b = g;
                    }
                    break;

                  case 3:
                    if (e.nrThumbsToDisplay >= 3) {
                        a = 300 * d;
                        b = .7;
                    } else {
                        a = f;
                        b = g;
                    }
                    break;

                  case 4:
                    if (e.nrThumbsToDisplay >= 4) {
                        a = 350 * d;
                        b = .6;
                    } else {
                        a = f;
                        b = g;
                    }
                    break;

                  default:
                    a = f;
                    b = g;
                }
                a += e.data.thumbSpaceOffset2D * d;
                if (1 == Math.abs(c - e.curId)) a -= e.data.thumbSpaceOffset2D / 4 * d;
                a *= e.sizeRatio;
                var h = e.thumbHeight / e.thumbWidth;
                if (h > .7) a *= Math.min(1 / h, .8);
                a -= e.thumbWidth / 2;
                if (Math.abs(c - e.curId) < e.nrThumbsToDisplay || thumb.getX() != Math.floor(a)) {
                    thumb.newX = Math.floor(a);
                    thumb.setScale(b);
                    thumb.setGradient(d);
                }
            }
        };
        this.sortZ = function() {
            var a = 1e4;
            var b;
            var c;
            for (var d = 0; d < e.totalThumbs; d++) {
                thumb = e.thumbsAr[d];
                var f = thumb.getX() + e.thumbWidth / 2;
                if (Math.abs(f) < a) {
                    a = Math.abs(f);
                    b = d;
                }
            }
            for (var d = 0; d < e.totalThumbs; d++) {
                thumb = e.thumbsAr[d];
                switch (Math.abs(d - b)) {
                  case 0:
                    c = 5;
                    break;

                  case 1:
                    c = 4;
                    break;

                  case 2:
                    c = 3;
                    break;

                  case 3:
                    c = 2;
                    break;

                  case 4:
                    c = 1;
                    break;

                  default:
                    c = 0;
                }
                if (c != thumb.getZIndex()) thumb.setZIndex(c);
            }
        };
        this.setupControls = function() {
            e.controlsDO = new FWDR3DCarDisplayObject3D("div");
            e.addChild(e.controlsDO);
            e.controlsDO.setZ(2e5);
            e.controlsWidth = e.data.prevButtonNImg.width;
            if (e.showScrollbar) e.setupScrollbar();
            if (e.showPrevButton) e.setupPrevButton();
            if (e.showNextButton) e.setupNextButton();
            if (e.showSlideshowButton) e.setupSlideshowButton();
            if (e.data.enableMouseWheelScroll) e.addMouseWheelSupport();
            if (e.data.addKeyboardSupport) e.addKeyboardSupport();
            if (e.showScrollbar) {
                e.controlsWidth -= e.scrollbarDO.getWidth();
                e.scrollbarDO.scrollbarMaxWidth -= e.controlsWidth;
                e.scrollbarDO.resize2();
                e.scrollbarDO.resize(e.stageWidth, e.controlsWidth);
                var a = e.scrollbarDO.getX() + e.scrollbarDO.getWidth();
                if (e.showNextButton) {
                    e.nextButtonDO.setX(a);
                    a += e.nextButtonDO.getWidth();
                }
                if (e.showSlideshowButton) e.slideshowButtonDO.setX(a);
            }
            if (e.showScrollbar) {
                e.controlsDO.setX(Math.floor((e.stageWidth - (e.controlsWidth + e.scrollbarDO.getWidth())) / 2));
                e.controlsDO.setWidth(e.controlsWidth + e.scrollbarDO.getWidth());
            } else {
                e.controlsDO.setX(Math.floor((e.stageWidth - e.controlsWidth) / 2));
                e.controlsDO.setWidth(e.controlsWidth);
            }
            e.controlsDO.setY(e.stageHeight);
            e.controlsDO.setHeight(e.data.prevButtonNImg.height);
        };
        this.showControls = function() {
            FWDR3DCarModTweenMax.to(e.controlsDO, .8, {
                y: e.stageHeight - e.controlsHeight,
                ease: Expo.easeOut
            });
        };
        this.positionControls = function() {
            if (e.showScrollbar) {
                e.scrollbarDO.resize(e.stageWidth, e.controlsWidth);
                var a = e.scrollbarDO.getX() + e.scrollbarDO.getWidth();
                if (e.showNextButton) {
                    e.nextButtonDO.setX(a);
                    a += e.nextButtonDO.getWidth();
                }
                if (e.showSlideshowButton) e.slideshowButtonDO.setX(a);
            }
            if (e.showScrollbar) {
                e.controlsDO.setX(Math.floor((e.stageWidth - (e.controlsWidth + e.scrollbarDO.getWidth())) / 2));
                e.controlsDO.setWidth(e.controlsWidth + e.scrollbarDO.getWidth());
            } else {
                e.controlsDO.setX(Math.floor((e.stageWidth - e.controlsWidth) / 2));
                e.controlsDO.setWidth(e.controlsWidth);
            }
            e.controlsDO.setY(e.stageHeight - e.controlsHeight);
        };
        this.setupPrevButton = function() {
            FWDR3DCarSimpleButton.setPrototype();
            e.prevButtonDO = new FWDR3DCarSimpleButton(e.data.prevButtonNImg, e.data.prevButtonSImg);
            e.prevButtonDO.addListener(FWDR3DCarSimpleButton.CLICK, e.prevButtonOnClickHandler);
            e.controlsDO.addChild(e.prevButtonDO);
        };
        this.prevButtonOnClickHandler = function() {
            if (e.curId > 0) {
                e.curId--;
                e.gotoThumb();
            }
        };
        this.setupNextButton = function() {
            FWDR3DCarSimpleButton.setPrototype();
            e.nextButtonDO = new FWDR3DCarSimpleButton(e.data.nextButtonNImg, e.data.nextButtonSImg);
            e.nextButtonDO.addListener(FWDR3DCarSimpleButton.CLICK, e.nextButtonOnClickHandler);
            e.controlsDO.addChild(e.nextButtonDO);
            e.nextButtonDO.setX(e.controlsWidth);
            e.controlsWidth += e.nextButtonDO.getWidth();
        };
        this.nextButtonOnClickHandler = function() {
            if (e.curId < e.totalThumbs - 1) {
                e.curId++;
                e.gotoThumb();
            }
        };
        this.setupSlideshowButton = function() {
            FWDR3DCarSlideshowButton.setPrototype();
            e.slideshowButtonDO = new FWDR3DCarSlideshowButton(e.data);
            e.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.PLAY_CLICK, e.onSlideshowButtonPlayClickHandler);
            e.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.PAUSE_CLICK, e.onSlideshowButtonPauseClickHandler);
            e.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.TIME, e.onSlideshowButtonTime);
            e.controlsDO.addChild(e.slideshowButtonDO);
            e.slideshowButtonDO.setX(e.controlsWidth);
            e.controlsWidth += e.slideshowButtonDO.getWidth();
        };
        this.onSlideshowButtonPlayClickHandler = function() {
            e.isPlaying = true;
        };
        this.onSlideshowButtonPauseClickHandler = function() {
            e.isPlaying = false;
            clearTimeout(e.slideshowTimeoutId);
        };
        this.startSlideshow = function() {
            if (!e.isPlaying) {
                e.isPlaying = true;
                e.slideshowButtonDO.start();
                e.slideshowButtonDO.onMouseOut();
            }
        };
        this.stopSlideshow = function() {
            if (e.isPlaying) {
                e.isPlaying = false;
                clearTimeout(e.slideshowTimeoutId);
                e.slideshowButtonDO.stop();
                e.slideshowButtonDO.onMouseOut();
            }
        };
        this.onSlideshowButtonTime = function() {
            if (e.curId == e.totalThumbs - 1) e.curId = 0; else e.curId++;
            e.gotoThumb();
        };
        this.startTimeAgain = function() {
            e.slideshowButtonDO.start();
        };
        this.setupScrollbar = function() {
            FWDR3DCarScrollbar.setPrototype();
            e.scrollbarDO = new FWDR3DCarScrollbar(e.data, e.totalThumbs, e.curId);
            e.scrollbarDO.addListener(FWDR3DCarScrollbar.MOVE, e.onScrollbarMove);
            e.controlsDO.addChild(e.scrollbarDO);
            e.scrollbarDO.setX(e.controlsWidth);
            e.controlsWidth += e.scrollbarDO.getWidth();
        };
        this.onScrollbarMove = function(a) {
            e.curId = a.id;
            e.gotoThumb();
        };
        this.addMouseWheelSupport = function() {
            if (a.addEventListener) {
                e.parent.mainDO.screen.addEventListener("mousewheel", e.mouseWheelHandler);
                e.parent.mainDO.screen.addEventListener("DOMMouseScroll", e.mouseWheelHandler);
            } else if (document.attachEvent) e.parent.mainDO.screen.attachEvent("onmousewheel", e.mouseWheelHandler);
        };
        this.mouseWheelHandler = function(a) {
            if (!e.introFinished || !e.allowToSwitchCat) return;
            if (e.showScrollbar && e.scrollbarDO.isPressed) return;
            var b = a.detail || a.wheelDelta;
            if (a.wheelDelta) b *= -1;
            if (b > 0) {
                if (e.curId < e.totalThumbs - 1) {
                    e.curId++;
                    e.gotoThumb();
                }
            } else if (b < 0) if (e.curId > 0) {
                e.curId--;
                e.gotoThumb();
            }
            if (a.preventDefault) a.preventDefault(); else return false;
        };
        this.setupMobileDrag = function() {
            if (e.hasPointerEvent) e.parent.mainDO.screen.addEventListener("MSPointerDown", e.mobileDragStartHandler); else e.parent.mainDO.screen.addEventListener("touchstart", e.mobileDragStartTest);
        };
        this.mobileDragStartTest = function(b) {
            var c = FWDR3DCarUtils.getViewportMouseCoordinates(b);
            if (c.screenY > e.controlsDO.getY()) return;
            e.lastPressedX = c.screenX;
            e.lastPressedY = c.screenY;
            e.dragCurId = e.curId;
            a.addEventListener("touchmove", e.mobileDragMoveTest);
            a.addEventListener("touchend", e.mobileDragEndTest);
        };
        this.mobileDragMoveTest = function(b) {
            if (1 != b.touches.length) return;
            e.disableThumbClick = true;
            var c = FWDR3DCarUtils.getViewportMouseCoordinates(b);
            e.mouseX = c.screenX;
            e.mouseY = c.screenY;
            var d = Math.atan2(e.mouseY - e.lastPressedY, e.mouseX - e.lastPressedX);
            var f = 180 * Math.abs(d) / Math.PI;
            if (f > 120 || f < 60) {
                if (b.preventDefault) b.preventDefault();
                e.curId = e.dragCurId + Math.floor(-(e.mouseX - e.lastPressedX) / 100);
                if (e.curId < 0) e.curId = 0; else if (e.curId > e.totalThumbs - 1) e.curId = e.totalThumbs - 1;
                e.gotoThumb();
            } else a.removeEventListener("touchmove", e.mobileDragMoveTest);
        };
        this.mobileDragEndTest = function(b) {
            e.disableThumbClick = false;
            a.removeEventListener("touchmove", e.mobileDragMoveTest);
            a.removeEventListener("touchend", e.mobileDragEndTest);
        };
        this.mobileDragStartHandler = function(b) {
            var c = FWDR3DCarUtils.getViewportMouseCoordinates(b);
            if (c.screenY > e.controlsDO.getY()) return;
            e.lastPressedX = c.screenX;
            e.dragCurId = e.curId;
            a.addEventListener("MSPointerUp", e.mobileDragEndHandler, false);
            a.addEventListener("MSPointerMove", e.mobileDragMoveHandler);
        };
        this.mobileDragMoveHandler = function(a) {
            if (a.preventDefault) a.preventDefault();
            e.disableThumbClick = true;
            var b = FWDR3DCarUtils.getViewportMouseCoordinates(a);
            e.mouseX = b.screenX;
            e.curId = e.dragCurId + Math.floor(-(e.mouseX - e.lastPressedX) / 100);
            if (e.curId < 0) e.curId = 0; else if (e.curId > e.totalThumbs - 1) e.curId = e.totalThumbs - 1;
            e.gotoThumb();
        };
        this.mobileDragEndHandler = function(b) {
            e.disableThumbClick = false;
            a.removeEventListener("MSPointerUp", e.mobileDragEndHandler);
            a.removeEventListener("MSPointerMove", e.mobileDragMoveHandler);
        };
        this.addKeyboardSupport = function() {
            if (document.addEventListener) {
                document.addEventListener("keydown", this.onKeyDownHandler);
                document.addEventListener("keyup", this.onKeyUpHandler);
            } else {
                document.attachEvent("onkeydown", this.onKeyDownHandler);
                document.attachEvent("onkeyup", this.onKeyUpHandler);
            }
        };
        this.onKeyDownHandler = function(a) {
            if (!e.introFinished || !e.allowToSwitchCat) return;
            if (e.showScrollbar && e.scrollbarDO.isPressed) return;
            if (d.lightboxDO && d.lightboxDO.isShowed_bl) return;
            if (document.removeEventListener) document.removeEventListener("keydown", e.onKeyDownHandler); else document.detachEvent("onkeydown", e.onKeyDownHandler);
            if (39 == a.keyCode) {
                if (e.curId < e.totalThumbs - 1) {
                    e.curId++;
                    e.gotoThumb();
                }
                if (a.preventDefault) a.preventDefault(); else return false;
            } else if (37 == a.keyCode) {
                if (e.curId > 0) {
                    e.curId--;
                    e.gotoThumb();
                }
                if (a.preventDefault) a.preventDefault(); else return false;
            }
        };
        this.onKeyUpHandler = function(a) {
            if (document.addEventListener) document.addEventListener("keydown", e.onKeyDownHandler); else document.attachEvent("onkeydown", e.onKeyDownHandler);
        };
        this.update = function(a) {
            e.showRefl = a.showRefl;
            e.reflDist = a.reflDist;
            for (var b = 0; b < e.totalThumbs; b++) e.thumbsAr[b].update();
        };
        this.destroy = function() {
            clearTimeout(e.loadWithDelayIdLeft);
            clearTimeout(e.loadWithDelayIdRight);
            clearTimeout(e.slideshowTimeoutId);
            clearTimeout(e.textTimeoutId);
            clearInterval(e.zSortingId);
            clearTimeout(e.hideThumbsFinishedId);
            clearTimeout(e.loadHtmlContentsId);
            clearTimeout(e.loadImagesId);
            clearTimeout(e.setTextHeightId);
            clearTimeout(e.setIntroFinishedId);
            clearTimeout(e.showControlsId);
            if (!e.isMobile) if (e.screen.addEventListener) a.removeEventListener("mousemove", e.onThumbMove); else document.detachEvent("onmousemove", e.onThumbMove);
            if (e.hasPointerEvent) a.removeEventListener("MSPointerMove", e.onThumbMove);
            if (e.hasPointerEvent) {
                e.parent.mainDO.screen.removeEventListener("MSPointerDown", e.mobileDragStartHandler);
                a.removeEventListener("MSPointerUp", e.mobileDragEndHandler);
                a.removeEventListener("MSPointerMove", e.mobileDragMoveHandler);
            } else if (a.addEventListener) {
                e.parent.mainDO.screen.removeEventListener("touchstart", e.mobileDragStartTest);
                a.removeEventListener("touchmove", e.mobileDragMoveTest);
                a.removeEventListener("touchend", e.mobileDragEndTest);
            }
            if (a.addEventListener) {
                e.parent.mainDO.screen.removeEventListener("mousewheel", e.mouseWheelHandler);
                e.parent.mainDO.screen.removeEventListener("DOMMouseScroll", e.mouseWheelHandler);
            } else if (document.attachEvent) e.parent.mainDO.screen.detachEvent("onmousewheel", e.mouseWheelHandler);
            if (e.addKeyboardSupport) if (document.removeEventListener) {
                document.removeEventListener("keydown", this.onKeyDownHandler);
                document.removeEventListener("keyup", this.onKeyUpHandler);
            } else if (document.attachEvent) {
                document.detachEvent("onkeydown", this.onKeyDownHandler);
                document.detachEvent("onkeyup", this.onKeyUpHandler);
            }
            if (e.image) {
                e.image.onload = null;
                e.image.onerror = null;
                e.image.src = "";
            }
            if (e.imageLeft) {
                e.imageLeft.onload = null;
                e.imageLeft.onerror = null;
                e.imageLeft.src = "";
            }
            if (e.imageRight) {
                e.imageRight.onload = null;
                e.imageRight.onerror = null;
                e.imageRight.src = "";
            }
            e.image = null;
            e.imageLeft = null;
            e.imageRight = null;
            for (var c = 0; c < e.totalThumbs; c++) {
                FWDR3DCarModTweenMax.killTweensOf(e.thumbsAr[c]);
                e.thumbsAr[c].destroy();
                e.thumbsAr[c] = null;
            }
            e.thumbsAr = null;
            if (e.prevButtonDO) {
                e.prevButtonDO.destroy();
                e.prevButtonDO = null;
            }
            if (e.nextButtonDO) {
                e.nextButtonDO.destroy();
                e.nextButtonDO = null;
            }
            if (e.scrollbarDO) {
                e.scrollbarDO.destroy();
                e.scrollbarDO = null;
            }
            if (e.slideshowButtonDO) {
                e.slideshowButtonDO.destroy();
                e.slideshowButtonDO = null;
            }
            if (e.textGradientDO && e.textGradientDO.screen) {
                FWDR3DCarModTweenMax.killTweensOf(e.textGradientDO);
                e.textGradientDO.destroy();
                e.textGradientDO = null;
            }
            if (e.textDO && e.textDO.screen) {
                FWDR3DCarModTweenMax.killTweensOf(e.textDO);
                e.textDO.destroy();
                e.textDO = null;
            }
            if (e.textHolderDO && e.textHolderDO.screen) {
                FWDR3DCarModTweenMax.killTweensOf(e.textHolderDO);
                e.textHolderDO.destroy();
                e.textHolderDO = null;
            }
            if (e.thumbOverDO) {
                e.thumbOverDO.destroy();
                e.thumbOverDO = null;
            }
            if (e.thumbsHolderDO) {
                e.thumbsHolderDO.destroy();
                e.thumbsHolderDO = null;
            }
            if (e.controlsDO) {
                FWDR3DCarModTweenMax.killTweensOf(e.controlsDO);
                e.controlsDO.destroy();
                e.controlsDO = null;
            }
            e.screen.innerHTML = "";
            e = null;
            f.destroy();
            f = null;
            b.prototype = null;
        };
        this.init();
    };
    b.setPrototype = function() {
        b.prototype = new FWDR3DCarDisplayObject3D("div", "relative", "visible");
    };
    b.THUMB_CLICK = "onThumbClick";
    b.LOAD_ERROR = "onLoadError";
    b.THUMBS_INTRO_FINISH = "onThumbsIntroFinish";
    a.FWDR3DCarThumbsManager = b;
}(window);

!function(a) {
    var b = function(a, c) {
        var d = this;
        var e = b.prototype;
        this.timeOutId;
        this.delay = a;
        this.isStopped_bl = !c;
        this.stop = function() {
            clearTimeout(this.timeOutId);
            this.dispatchEvent(b.STOP);
        };
        this.start = function() {
            if (!this.isStopped_bl) {
                this.timeOutId = setTimeout(this.onTimeHanlder, this.delay);
                this.dispatchEvent(b.START);
            }
        };
        this.onTimeHanlder = function() {
            d.dispatchEvent(b.TIME);
        };
        this.destroy = function() {
            clearTimeout(this.timeOutId);
            e.destroy();
            d = null;
            e = null;
            b.prototype = null;
        };
    };
    b.setProtptype = function() {
        b.prototype = new FWDR3DCarEventDispatcher();
    };
    b.START = "start";
    b.STOP = "stop";
    b.TIME = "time";
    b.prototype = null;
    a.FWDR3DCarTimerManager = b;
}(window);

!function(a) {
    function b() {
        var a = [ "transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform" ];
        var b;
        var c;
        while (b = a.shift()) if ("undefined" !== typeof d.dumy.style[b]) {
            d.dumy.style.position = "absolute";
            c = d.dumy.getBoundingClientRect().left;
            d.dumy.style[b] = "translate3d(500px, 0px, 0px)";
            c = Math.abs(d.dumy.getBoundingClientRect().left - c);
            if (c > 100 && c < 900) {
                try {
                    document.documentElement.removeChild(d.dumy);
                } catch (e) {}
                return true;
            }
        }
        try {
            document.documentElement.removeChild(d.dumy);
        } catch (e) {}
        return false;
    }
    function c() {
        var a = [ "transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform" ];
        var b;
        while (b = a.shift()) if ("undefined" !== typeof d.dumy.style[b]) return true;
        try {
            document.documentElement.removeChild(d.dumy);
        } catch (c) {}
        return false;
    }
    var d = function() {};
    d.dumy = document.createElement("div");
    d.trim = function(a) {
        if (a) return a.replace(/\s/g, ""); else return void 0;
    };
    d.trimAndFormatUrl = function(a) {
        a = a.toLocaleLowerCase();
        a = a.replace(/ /g, "-");
        a = a.replace(/ä/g, "a");
        a = a.replace(/â/g, "a");
        a = a.replace(/â/g, "a");
        a = a.replace(/à/g, "a");
        a = a.replace(/è/g, "e");
        a = a.replace(/é/g, "e");
        a = a.replace(/ë/g, "e");
        a = a.replace(/ï/g, "i");
        a = a.replace(/î/g, "i");
        a = a.replace(/ù/g, "u");
        a = a.replace(/ô/g, "o");
        a = a.replace(/ù/g, "u");
        a = a.replace(/û/g, "u");
        a = a.replace(/ÿ/g, "y");
        a = a.replace(/ç/g, "c");
        a = a.replace(/œ/g, "ce");
        return a;
    };
    d.splitAndTrim = function(a, b) {
        var c = a.split(",");
        var e = c.length;
        for (var f = 0; f < e; f++) if (b) c[f] = d.trim(c[f]);
        return c;
    };
    d.indexOfArray = function(a, b) {
        var c = a.length;
        for (var d = 0; d < c; d++) if (a[d] === b) return d;
        return -1;
    };
    d.randomizeArray = function(a) {
        var b = [];
        var c = a.concat();
        var d = c.length;
        for (var e = 0; e < d; e++) {
            var f = Math.floor(Math.random() * c.length);
            b.push(c[f]);
            c.splice(f, 1);
        }
        return b;
    };
    d.parent = function(a, b) {
        if (void 0 === b) b = 1;
        while (b-- && a) a = a.parentNode;
        if (!a || 1 !== a.nodeType) return null;
        return a;
    };
    d.sibling = function(a, b) {
        while (a && 0 !== b) if (b > 0) {
            if (a.nextElementSibling) a = a.nextElementSibling; else for (var a = a.nextSibling; a && 1 !== a.nodeType; a = a.nextSibling) ;
            b--;
        } else {
            if (a.previousElementSibling) a = a.previousElementSibling; else for (var a = a.previousSibling; a && 1 !== a.nodeType; a = a.previousSibling) ;
            b++;
        }
        return a;
    };
    d.getChildAt = function(a, b) {
        var c = d.getChildren(a);
        if (b < 0) b += c.length;
        if (b < 0) return null;
        return c[b];
    };
    d.getChildById = function(a) {
        return document.getElementById(a) || void 0;
    };
    d.getChildren = function(a, b) {
        var c = [];
        for (var d = a.firstChild; null != d; d = d.nextSibling) if (b) c.push(d); else if (1 === d.nodeType) c.push(d);
        return c;
    };
    d.getChildrenFromAttribute = function(a, b, c) {
        var e = [];
        for (var f = a.firstChild; null != f; f = f.nextSibling) if (c && d.hasAttribute(f, b)) e.push(f); else if (1 === f.nodeType && d.hasAttribute(f, b)) e.push(f);
        return 0 == e.length ? void 0 : e;
    };
    d.getChildFromNodeListFromAttribute = function(a, b, c) {
        for (var e = a.firstChild; null != e; e = e.nextSibling) if (c && d.hasAttribute(e, b)) return e; else if (1 === e.nodeType && d.hasAttribute(e, b)) return e;
        return void 0;
    };
    d.getAttributeValue = function(a, b) {
        if (!d.hasAttribute(a, b)) return void 0;
        return a.getAttribute(b);
    };
    d.hasAttribute = function(a, b) {
        if (a.hasAttribute) return a.hasAttribute(b); else {
            var c = a.attributes[b];
            return c ? true : false;
        }
    };
    d.insertNodeAt = function(a, b, c) {
        var e = d.children(a);
        if (c < 0 || c > e.length) throw new Error("invalid index!"); else a.insertBefore(b, e[c]);
    };
    d.hasCanvas = function() {
        return Boolean(document.createElement("canvas"));
    };
    d.hitTest = function(a, b, c) {
        var d = false;
        if (!a) throw Error("Hit test target is null!");
        var e = a.getBoundingClientRect();
        if (b >= e.left && b <= e.right && c >= e.top && c <= e.bottom) return true;
        return false;
    };
    d.getScrollOffsets = function() {
        if (null != a.pageXOffset) return {
            x: a.pageXOffset,
            y: a.pageYOffset
        };
        if ("CSS1Compat" == document.compatMode) return {
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop
        };
    };
    d.getViewportSize = function() {
        if (d.hasPointerEvent && navigator.msMaxTouchPoints > 1) return {
            w: document.documentElement.clientWidth || a.innerWidth,
            h: document.documentElement.clientHeight || a.innerHeight
        };
        if (d.isMobile) return {
            w: a.innerWidth,
            h: a.innerHeight
        };
        return {
            w: document.documentElement.clientWidth || a.innerWidth,
            h: document.documentElement.clientHeight || a.innerHeight
        };
    };
    d.getViewportMouseCoordinates = function(a) {
        var b = d.getScrollOffsets();
        if (a.touches) return {
            screenX: void 0 == a.changedTouches[0] ? a.changedTouches.pageX - b.x : a.changedTouches[0].pageX - b.x,
            screenY: void 0 == a.changedTouches[0] ? a.changedTouches.pageY - b.y : a.changedTouches[0].pageY - b.y
        };
        return {
            screenX: void 0 == a.clientX ? a.pageX - b.x : a.clientX,
            screenY: void 0 == a.clientY ? a.pageY - b.y : a.clientY
        };
    };
    d.hasPointerEvent = function() {
        return Boolean(a.navigator.msPointerEnabled);
    }();
    d.isMobile = function() {
        if (d.hasPointerEvent && navigator.msMaxTouchPoints > 1) return true;
        var a = [ "android", "webos", "iphone", "ipad", "blackberry" ];
        for (i in a) if (navigator.userAgent.toLowerCase().indexOf(a[i].toLowerCase()) != -1) return true;
        return false;
    }();
    d.isAndroid = function() {
        return navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1;
    }();
    d.isChrome = function() {
        return navigator.userAgent.toLowerCase().indexOf("chrome") != -1;
    }();
    d.isSafari = function() {
        return navigator.userAgent.toLowerCase().indexOf("safari") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1;
    }();
    d.isOpera = function() {
        return navigator.userAgent.toLowerCase().indexOf("opera") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1;
    }();
    d.isFirefox = function() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") != -1;
    }();
    d.isIE = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie") != -1;
    }();
    d.isIEAndLessThen9 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1;
    }();
    d.isIEAndLessThen10 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 9") != -1;
    }();
    d.isIEAndMoreThen8 = function() {
        return d.isIE9 || d.isIE10 || d.isIE11;
    }();
    d.isIE7 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1;
    }();
    d.isIE9 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 9") != -1;
    }();
    d.isIE10 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 10") != -1;
    }();
    d.isIE11 = function() {
        return Boolean(!d.isIE && document.documentElement.msRequestFullscreen);
    }();
    d.isIEAndMoreThen9 = function() {
        return d.isIE10 || d.isIE11;
    }();
    d.isApple = function() {
        return navigator.appVersion.toLowerCase().indexOf("mac") != -1;
    }();
    d.isAndroidAndWebkit = function() {
        return (d.isOpera || d.isChrome) && d.isAndroid;
    }();
    d.hasFullScreen = function() {
        return d.dumy.requestFullScreen || d.dumy.mozRequestFullScreen || d.dumy.webkitRequestFullScreen || d.dumy.msieRequestFullScreen;
    }();
    d.onReady = function(a) {
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", function() {
            d.checkIfHasTransofrms();
            a();
        }); else document.onreadystatechange = function() {
            d.checkIfHasTransofrms();
            if ("complete" == document.readyState) a();
        };
    };
    d.checkIfHasTransofrms = function() {
        if (d.isReadyMethodCalled_bl) return;
        document.documentElement.appendChild(d.dumy);
        d.hasTransform3d = b();
        d.hasTransform2d = c();
        d.isReadyMethodCalled_bl = true;
    };
    d.disableElementSelection = function(a) {
        try {
            a.style.userSelect = "none";
        } catch (a) {}
        try {
            a.style.MozUserSelect = "none";
        } catch (a) {}
        try {
            a.style.webkitUserSelect = "none";
        } catch (a) {}
        try {
            a.style.khtmlUserSelect = "none";
        } catch (a) {}
        try {
            a.style.oUserSelect = "none";
        } catch (a) {}
        try {
            a.style.msUserSelect = "none";
        } catch (a) {}
        try {
            a.msUserSelect = "none";
        } catch (a) {}
        a.onselectstart = function() {
            return false;
        };
    };
    d.getUrlArgs = function(a) {
        var b = {};
        var c = a.substr(a.indexOf("?") + 1) || location.search.substring(1);
        var d = c.split("&");
        for (var e = 0; e < d.length; e++) {
            var f = d[e].indexOf("=");
            var g = d[e].substring(0, f);
            var h = d[e].substring(f + 1);
            h = decodeURIComponent(h);
            b[g] = h;
        }
        return b;
    };
    d.validateEmail = function(a) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)) return true;
        return false;
    };
    d.resizeDoWithLimit = function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        var b = b - f;
        var c = c - g;
        var n = b / d;
        var o = c / e;
        var p = 0;
        if (n <= o) p = n; else if (n >= o) p = o;
        var q = Math.round(d * p);
        var r = Math.round(e * p);
        var s = Math.floor((b - d * p) / 2 + h);
        var t = Math.floor((c - e * p) / 2 + i);
        if (j) FWDR3DCarModTweenMax.to(a, k, {
            x: s,
            y: t,
            w: q,
            h: r,
            delay: l,
            ease: m
        }); else {
            a.x = s;
            a.y = t;
            a.w = q;
            a.h = r;
        }
    };
    a.requestAnimFrame = function() {
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(b, c) {
            return a.setTimeout(b, 1e3 / 60);
        };
    }();
    a.cancelRequestAnimFrame = function() {
        return a.cancelAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || clearTimeout;
    }();
    d.isReadyMethodCalled_bl = false;
    a.FWDR3DCarUtils = d;
}(window);

!function() {
    var a = 0;
    var b = [ "ms", "moz", "webkit", "o" ];
    for (var c = 0; c < b.length && !window.requestAnimationFrame; ++c) {
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(b, c) {
        var d = new Date().getTime();
        var e = Math.max(0, 16 - (d - a));
        var f = window.setTimeout(function() {
            b(d + e);
        }, e);
        a = d + e;
        return f;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(a) {
        clearTimeout(a);
    };
}();

!function(a) {
    var b = function(c) {
        var d = this;
        this.mainDO;
        this.preloaderDO;
        this.customContextMenuDO;
        this.infoDO;
        this.thumbsManagerDO;
        this.bgDO;
        this.thumbsBgDO;
        this.scrollbarBgDO;
        this.comboBoxDO;
        this.disableDO;
        this.stageWidth;
        this.stageHeight;
        this.originalWidth;
        this.originalHeight;
        this.resizeHandlerId1;
        this.resizeHandlerId2;
        this.orientationChangeId;
        this.rect;
        this.listeners = {
            events_ar: []
        };
        this.autoScale = false;
        this.doNotExceedOriginalSize = true;
        this.orientationChangeComplete = true;
        this.isFullScreen = false;
        this.preloaderLoaded = false;
        this.apiReady = false;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.init = function() {
            TweenLite.ticker.useRAF(false);
            d.propsObj = c;
            if (!d.propsObj) {
                alert("3DCarousel properties object is undefined!");
                return;
            }
            if (!d.propsObj.displayType) {
                alert("Display type is not specified!");
                return;
            }
            d.displayType = c.displayType.toLowerCase();
            d.body = document.getElementsByTagName("body")[0];
            if (!d.propsObj.carouselHolderDivId) {
                alert("Property carouselHolderDivId is not defined in the FWDRoyal3DCarousel object constructor!");
                return;
            }
            if (!FWDR3DCarUtils.getChildById(d.propsObj.carouselHolderDivId)) {
                alert("FWDRoyal3DCarousel holder div is not found, please make sure that the div exists and the id is correct! " + d.propsObj.carouselHolderDivId);
                return;
            }
            if (!d.propsObj.carouselWidth) {
                alert("The carousel width is not defined, plese make sure that the carouselWidth property is definded in the FWDRoyal3DCarousel constructor!");
                return;
            }
            if (!d.propsObj.carouselHeight) {
                alert("The carousel height is not defined, plese make sure that the carouselHeight property is definded in the FWDRoyal3DCarousel constructor!");
                return;
            }
            d.stageContainer = FWDR3DCarUtils.getChildById(d.propsObj.carouselHolderDivId);
            d.autoScale = "yes" == d.propsObj.autoScale ? true : false;
            d.originalWidth = d.propsObj.carouselWidth;
            d.originalHeight = d.propsObj.carouselHeight;
            d.setupMainDO();
            d.setupInfo();
            d.setupData();
            d.startResizeHandler();
        };
        this.setupMainDO = function() {
            d.mainDO = new FWDR3DCarDisplayObject("div", "relative");
            d.mainDO.setSelectable(false);
            d.mainDO.setBkColor(d.propsObj.backgroundColor);
            d.mainDO.getStyle().msTouchAction = "none";
            if (d.displayType == b.FLUID_WIDTH) {
                d.mainDO.getStyle().position = "absolute";
                if (FWDR3DCarUtils.isIE7) d.body.appendChild(d.mainDO.screen); else document.documentElement.appendChild(d.mainDO.screen);
            } else d.stageContainer.appendChild(d.mainDO.screen);
        };
        this.setBackgrounds = function() {
            if (d.propsObj.backgroundImagePath) {
                d.bgDO = new FWDR3DCarDisplayObject("div");
                d.mainDO.addChild(d.bgDO);
                d.bgDO.setWidth(d.originalWidth);
                d.bgDO.setHeight(d.originalHeight);
                d.bgDO.screen.style.backgroundImage = "url(" + d.propsObj.backgroundImagePath + ")";
                d.bgDO.screen.style.backgroundRepeat = d.propsObj.backgroundRepeat;
                d.bgDO.setAlpha(0);
                FWDR3DCarModTweenMax.to(d.bgDO, .8, {
                    alpha: 1
                });
            }
            if (d.propsObj.thumbnailsBackgroundImagePath) {
                d.thumbsBgDO = new FWDR3DCarDisplayObject("div");
                d.mainDO.addChild(d.thumbsBgDO);
                d.thumbsBgDO.setWidth(d.originalWidth);
                d.thumbsBgDO.setHeight(d.originalHeight - d.data.nextButtonNImg.height);
                d.thumbsBgDO.screen.style.backgroundImage = "url(" + d.propsObj.thumbnailsBackgroundImagePath + ")";
                d.thumbsBgDO.screen.style.backgroundRepeat = d.propsObj.backgroundRepeat;
                d.thumbsBgDO.setAlpha(0);
                FWDR3DCarModTweenMax.to(d.thumbsBgDO, .8, {
                    alpha: 1
                });
            }
            if (d.propsObj.scrollbarBackgroundImagePath) {
                d.scrollbarBgDO = new FWDR3DCarDisplayObject("div");
                d.mainDO.addChild(d.scrollbarBgDO);
                d.scrollbarBgDO.setWidth(d.originalWidth);
                d.scrollbarBgDO.setHeight(d.data.nextButtonNImg.height);
                d.scrollbarBgDO.screen.style.backgroundImage = "url(" + d.propsObj.scrollbarBackgroundImagePath + ")";
                d.scrollbarBgDO.screen.style.backgroundRepeat = d.propsObj.backgroundRepeat;
                d.scrollbarBgDO.setAlpha(0);
                FWDR3DCarModTweenMax.to(d.scrollbarBgDO, .8, {
                    alpha: 1
                });
            }
        };
        this.setupInfo = function() {
            FWDR3DCarInfo.setPrototype();
            d.infoDO = new FWDR3DCarInfo();
        };
        this.startResizeHandler = function() {
            if (a.addEventListener) {
                a.addEventListener("resize", d.onResizeHandler);
                a.addEventListener("scroll", d.onScrollHandler);
                a.addEventListener("orientationchange", d.orientationChange);
            } else if (a.attachEvent) {
                a.attachEvent("onresize", d.onResizeHandler);
                a.attachEvent("onscroll", d.onScrollHandler);
            }
            d.resizeHandlerId2 = setTimeout(d.resizeHandler, 50);
            if (d.displayType == b.FLUID_WIDTH) d.resizeHandlerId1 = setTimeout(d.resizeHandler, 800);
        };
        this.onResizeHandler = function(a) {
            if (d.isMobile) {
                clearTimeout(d.resizeHandlerId2);
                d.resizeHandlerId2 = setTimeout(d.resizeHandler, 200);
            } else d.resizeHandler();
        };
        this.onScrollHandler = function(a) {
            if (d.displayType == b.FLUID_WIDTH) d.scrollHandler();
            d.rect = d.mainDO.screen.getBoundingClientRect();
        };
        this.orientationChange = function() {
            if (d.displayType == b.FLUID_WIDTH) {
                d.orientationChangeComplete = false;
                clearTimeout(d.scrollEndId);
                clearTimeout(d.resizeHandlerId2);
                clearTimeout(d.orientationChangeId);
                d.orientationChangeId = setTimeout(function() {
                    d.orientationChangeComplete = true;
                    d.resizeHandler();
                }, 1e3);
                d.mainDO.setX(0);
                d.mainDO.setWidth(0);
            }
        };
        this.scrollHandler = function() {
            if (!d.orientationChangeComplete) return;
            var a = FWDR3DCarUtils.getScrollOffsets();
            d.pageXOffset = a.x;
            d.pageYOffset = a.y;
            if (d.displayType == b.FLUID_WIDTH) {
                if (d.isMobile) {
                    clearTimeout(d.scrollEndId);
                    d.scrollEndId = setTimeout(d.resizeHandler, 200);
                } else d.mainDO.setX(d.pageXOffset);
                d.mainDO.setY(Math.round(d.stageContainer.getBoundingClientRect().top + d.pageYOffset));
            }
        };
        this.resizeHandler = function() {
            if (!d.orientationChangeComplete) return;
            var a = FWDR3DCarUtils.getScrollOffsets();
            var c = FWDR3DCarUtils.getViewportSize();
            var e;
            d.viewportWidth = parseInt(c.w);
            d.viewportHeight = parseInt(c.h);
            d.pageXOffset = parseInt(a.x);
            d.pageYOffset = parseInt(a.y);
            if (d.displayType == b.FLUID_WIDTH) {
                d.stageWidth = c.w;
                d.stageHeight = c.h;
                if (d.autoScale) {
                    e = Math.min(d.stageWidth / d.originalWidth, 1);
                    d.stageHeight = Math.max(parseInt(e * d.originalHeight), d.propsObj.thumbnailHeight + 40);
                    d.stageContainer.style.height = d.stageHeight + "px";
                } else {
                    d.stageHeight = d.originalHeight;
                    d.stageContainer.style.height = d.stageHeight + "px";
                }
                d.mainDO.setX(d.pageXOffset);
                d.mainDO.setY(Math.round(d.stageContainer.getBoundingClientRect().top + d.pageYOffset));
            } else {
                if (d.autoScale) {
                    d.stageContainer.style.width = "100%";
                    if (d.stageContainer.offsetWidth > d.originalWidth) d.stageContainer.style.width = d.originalWidth + "px";
                    e = d.stageContainer.offsetWidth / d.originalWidth;
                    d.stageWidth = parseInt(e * d.originalWidth);
                    d.stageHeight = Math.max(parseInt(e * d.originalHeight), d.propsObj.thumbnailHeight + 40);
                    d.stageContainer.style.height = d.stageHeight + "px";
                } else {
                    d.stageContainer.style.width = "100%";
                    if (d.stageContainer.offsetWidth > d.originalWidth) d.stageContainer.style.width = d.originalWidth + "px";
                    d.stageWidth = d.stageContainer.offsetWidth;
                    d.stageHeight = d.originalHeight;
                    d.stageContainer.style.height = d.originalHeight + "px";
                }
                d.mainDO.setX(0);
                d.mainDO.setY(0);
            }
            d.mainDO.setWidth(d.stageWidth);
            d.mainDO.setHeight(d.stageHeight);
            d.rect = d.mainDO.screen.getBoundingClientRect();
            d.positionPreloader();
            if (d.thumbsManagerDO) {
                d.thumbsManagerDO.resizeHandler();
                if (!d.thumbsManagerDO.allowToSwitchCat) {
                    d.disableDO.setWidth(d.stageWidth);
                    d.disableDO.setHeight(d.stageHeight);
                }
            }
            if (d.preloaderLoaded) {
                if (d.propsObj.backgroundImagePath) {
                    if (d.displayType == b.RESPONSIVE) d.bgDO.setX(Math.floor((d.stageWidth - d.originalWidth) / 2)); else d.bgDO.setWidth(d.stageWidth);
                    d.bgDO.setY(Math.floor((d.stageHeight - d.originalHeight) / 2));
                }
                if (d.propsObj.thumbnailsBackgroundImagePath) {
                    if (d.displayType == b.RESPONSIVE) d.thumbsBgDO.setX(Math.floor((d.stageWidth - d.originalWidth) / 2)); else d.thumbsBgDO.setWidth(d.stageWidth);
                    d.thumbsBgDO.setY(Math.floor((d.stageHeight - d.originalHeight) / 2));
                }
                if (d.propsObj.scrollbarBackgroundImagePath) {
                    if (d.displayType == b.RESPONSIVE) d.scrollbarBgDO.setX(Math.floor((d.stageWidth - d.originalWidth) / 2)); else d.scrollbarBgDO.setWidth(d.stageWidth);
                    d.scrollbarBgDO.setY(Math.floor(d.stageHeight - d.data.nextButtonNImg.height));
                }
            }
            if (d.comboBoxDO) d.comboBoxDO.position();
        };
        this.setupContextMenu = function() {
            d.customContextMenuDO = new FWDR3DCarContextMenu(d.mainDO, d.data.showContextMenu);
        };
        this.setupData = function() {
            FWDR3DCarData.setPrototype();
            d.data = new FWDR3DCarData(d.propsObj);
            d.data.addListener(FWDR3DCarData.PRELOADER_LOAD_DONE, d.onPreloaderLoadDone);
            d.data.addListener(FWDR3DCarData.LOAD_ERROR, d.dataLoadError);
            d.data.addListener(FWDR3DCarData.LOAD_DONE, d.dataLoadComplete);
        };
        this.onPreloaderLoadDone = function() {
            d.setBackgrounds();
            d.setupPreloader();
            d.positionPreloader();
            if (!d.isMobile) d.setupContextMenu();
            d.preloaderLoaded = true;
            d.resizeHandler();
        };
        this.dataLoadError = function(a, b) {
            d.mainDO.addChild(d.infoDO);
            d.infoDO.showText(a.text);
        };
        this.dataLoadComplete = function(a) {
            d.dispatchEvent(b.DATA_LOADED);
            if (d.data.showDisplay2DAlways) FWDR3DCarUtils.hasTransform3d = false;
            d.preloaderDO.hide(true);
            d.setupThumbsManager();
            if (d.data.showComboBox) d.setupComboBox();
            if (!d.data.enableHtmlContent) d.setupLightBox();
            d.setupDisable();
        };
        this.setupPreloader = function() {
            FWDR3DCarPreloader.setPrototype();
            d.preloaderDO = new FWDR3DCarPreloader(d.data.mainPreloaderImg, 70, 40, 12, 50);
            d.mainDO.addChild(d.preloaderDO);
            d.preloaderDO.show();
        };
        this.positionPreloader = function() {
            if (d.preloaderDO) {
                d.preloaderDO.setX(parseInt((d.stageWidth - d.preloaderDO.getWidth()) / 2));
                d.preloaderDO.setY(parseInt((d.stageHeight - d.preloaderDO.getHeight() - d.data.nextButtonNImg.height) / 2));
            }
        };
        this.setupThumbsManager = function() {
            FWDR3DCarThumbsManager.setPrototype();
            d.thumbsManagerDO = new FWDR3DCarThumbsManager(d.data, d);
            d.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.THUMB_CLICK, d.onThumbsManagerThumbClick);
            d.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.LOAD_ERROR, d.onThumbsManagerLoadError);
            d.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.THUMBS_INTRO_FINISH, d.onThumbsManagerIntroFinish);
            d.mainDO.addChild(d.thumbsManagerDO);
            if (d.stageWidth) d.thumbsManagerDO.resizeHandler();
        };
        this.onThumbsManagerThumbClick = function(a) {
            if (!d.data.enableHtmlContent) if (!d.lightboxDO.isShowed_bl) {
                d.thumbsManagerDO.stopSlideshow();
                d.lightboxDO.show(a.id);
            }
        };
        this.onThumbsManagerLoadError = function(a) {


            d.mainDO.addChild(d.infoDO);
            d.infoDO.showText(a.text);
        };
        this.onThumbsManagerIntroFinish = function() {
            d.enableAll();
            d.dispatchEvent(b.INTRO_FINISH);
            d.apiReady = true;
            d.dispatchEvent(b.IS_API_READY);
            d.dispatchEvent(b.CATEGORY_CHANGED);
			
			
			
			
        };
        this.update = function(a) {
            d.thumbsManagerDO.update(a);
        };
        this.setupComboBox = function() {
            FWDR3DCarComboBox.setPrototype();
            d.comboBoxDO = new FWDR3DCarComboBox(d, {
                arrowW: d.data.comboboxArrowIconN_img.width,
                arrowH: d.data.comboboxArrowIconN_img.height,
                arrowN_str: d.data.comboboxArrowIconN_str,
                arrowS_str: d.data.comboboxArrowIconS_str,
                categories_ar: d.data.categoriesAr,
                selectorLabel: d.data.selectLabel,
                position: d.data.comboBoxPosition,
                startAtCategory: d.data.startAtCategory,
                comboBoxHorizontalMargins: d.data.comboBoxHorizontalMargins,
                comboBoxVerticalMargins: d.data.comboBoxVerticalMargins,
                comboBoxCornerRadius: d.data.comboBoxCornerRadius,
                selectorBackgroundNormalColor1: d.data.selectorBackgroundNormalColor1,
                selectorBackgroundSelectedColor1: d.data.selectorBackgroundSelectedColor1,
                selectorBackgroundNormalColor2: d.data.selectorBackgroundNormalColor2,
                selectorBackgroundSelectedColor2: d.data.selectorBackgroundSelectedColor2,
                selectorTextNormalColor: d.data.selectorTextNormalColor,
                selectorTextSelectedColor: d.data.selectorTextSelectedColor,
                buttonBackgroundNormalColor1: d.data.buttonBackgroundNormalColor1,
                buttonBackgroundSelectedColor1: d.data.buttonBackgroundSelectedColor1,
                buttonBackgroundNormalColor2: d.data.buttonBackgroundNormalColor2,
                buttonBackgroundSelectedColor2: d.data.buttonBackgroundSelectedColor2,
                buttonTextNormalColor: d.data.buttonTextNormalColor,
                buttonTextSelectedColor: d.data.buttonTextSelectedColor,
                shadowColor: d.data.comboBoxShadowColor
            });
            d.comboBoxDO.addListener(FWDR3DCarComboBox.BUTTON_PRESSED, d.onComboboxButtonPressHandler);
            d.mainDO.addChild(d.comboBoxDO);
        };
        this.onComboboxButtonPressHandler = function(a) {
            if (d.thumbsManagerDO.allowToSwitchCat) {
                d.disableAll();
                d.thumbsManagerDO.showCurrentCat(a.id);
                d.dispatchEvent(b.INTRO_START);
                if (!d.data.enableHtmlContent) d.lightboxDO.updateData(d.data.lightboxAr[a.id]);
                d.apiReady = false;
            }
        };
        this.setupLightBox = function() {
            FWDR3DCarLightBox.setPrototype();
            this.lightboxDO = new FWDR3DCarLightBox({
                data_ar: d.data.lightboxAr[d.data.startAtCategory],
                lightboxPreloader_img: this.data.lightboxPreloader_img,
                slideShowPreloader_img: this.data.slideShowPreloader_img,
                closeN_img: this.data.lightboxCloseButtonN_img,
                closeS_img: this.data.lightboxCloseButtonS_img,
                nextN_img: this.data.lightboxNextButtonN_img,
                nextS_img: this.data.lightboxNextButtonS_img,
                prevN_img: this.data.lightboxPrevButtonN_img,
                prevS_img: this.data.lightboxPrevButtonS_img,
                maximizeN_img: this.data.lightboxMaximizeN_img,
                maximizeS_img: this.data.lightboxMaximizeS_img,
                minimizeN_img: this.data.lightboxMinimizeN_img,
                minimizeS_img: this.data.lightboxMinimizeS_img,
                infoOpenN_img: this.data.lightboxInfoOpenN_img,
                infoOpenS_img: this.data.lightboxInfoOpenS_img,
                infoCloseN_img: this.data.lightboxInfoCloseN_img,
                infoCloseS_img: this.data.lightboxInfoCloseS_img,
                playN_img: this.data.lightboxPlayN_img,
                playS_img: this.data.lightboxPlayS_img,
                pauseN_img: this.data.lightboxPauseN_img,
                pauseS_img: this.data.lightboxPauseS_img,
                showContextMenu: d.data.showContextMenu,
                addKeyboardSupport_bl: d.data.addLightBoxKeyboardSupport_bl,
                showNextAndPrevButtons: d.data.showLighBoxNextAndPrevButtons_bl,
                showZoomButton: d.data.showLightBoxZoomButton_bl,
                showInfoButton: d.data.showLightBoxInfoButton_bl,
                showSlideshowButton: d.data.showLighBoxSlideShowButton_bl,
                slideShowAutoPlay: d.data.slideShowAutoPlay_bl,
                showInfoWindowByDefault: d.data.showInfoWindowByDefault_bl,
                lightBoxVideoAutoPlay: d.data.lightBoxVideoAutoPlay_bl,
                infoWindowBackgroundColor: d.data.lightBoxInfoWindowBackgroundColor_str,
                infoWindowBackgroundOpacity: d.data.lightBoxInfoWindowBackgroundOpacity,
                backgroundColor_str: d.data.lightBoxBackgroundColor_str,
                backgroundOpacity: d.data.lightBoxMainBackgroundOpacity,
                itemBackgroundColor_str: d.data.lightBoxItemBackgroundColor_str,
                borderColor_str1: d.data.lightBoxItemBorderColor_str1,
                borderColor_str2: d.data.lightBoxItemBorderColor_str2,
                borderSize: d.data.lightBoxBorderSize,
                borderRadius: d.data.lightBoxBorderRadius,
                slideShowDelay: d.data.lightBoxSlideShowDelay,
                videoWidth: d.data.lightBoxVideoWidth,
                videoHeight: d.data.lightBoxVideoHeight,
                iframeWidth: d.data.lightBoxIframeWidth,
                iframeHeight: d.data.lightBoxIframeHeight
            });
        };
        this.setupDisable = function() {
            d.disableDO = new FWDR3DCarDisplayObject3D("div");
            d.disableDO.setZ(3e5);
            if (FWDR3DCarUtils.isIE) {
                d.disableDO.setBkColor("#000000");
                d.disableDO.setAlpha(.001);
            }
            d.mainDO.addChild(d.disableDO);
            d.disableAll();
        };
        this.disableAll = function() {
            d.disableDO.setWidth(d.stageWidth);
            d.disableDO.setHeight(d.stageHeight);
        };
        this.enableAll = function() {
            d.disableDO.setWidth(0);
            d.disableDO.setHeight(0);
        };
        this.isAPIReady = function() {
            return d.apiReady;
        };
        this.getCurrentCategoryId = function() {
            if (d.apiReady) return d.thumbsManagerDO.dataListId;
        };
        this.switchCategory = function(a) {
            if (d.apiReady) if (a >= 0 && a < d.data.dataListAr.length) {
                d.disableAll();
                d.thumbsManagerDO.showCurrentCat(a);
                d.dispatchEvent(b.INTRO_START);
                if (!d.data.enableHtmlContent && d.lightboxDO) d.lightboxDO.updateData(d.data.lightboxAr[a]);
                if (d.comboBoxDO) d.comboBoxDO.setValue(a);
                d.apiReady = false;
            }
        };
        this.getCurrentThumbId = function() {
            if (d.apiReady) return d.thumbsManagerDO.curId;
        };
        this.gotoThumb = function(a) {
            if (d.apiReady) if (a >= 0 && a < d.thumbsManagerDO.totalThumbs && a != d.thumbsManagerDO.curId) {
                d.thumbsManagerDO.curId = a;
                d.thumbsManagerDO.gotoThumb();
            }
        };
        this.isSlideshowPlaying = function() {
            return d.thumbsManagerDO.isPlaying;
        };
        this.startSlideshow = function() {
            if (d.apiReady) d.thumbsManagerDO.startSlideshow();
        };
        this.stopSlideshow = function() {
            if (d.apiReady) d.thumbsManagerDO.stopSlideshow();
        };
        this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a;
            c.listener = b;
            c.target = this;
            this.listeners.events_ar.push(c);
        };
        this.dispatchEvent = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++) if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                if (b) for (var e in b) this.listeners.events_ar[c][e] = b[e];
                this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c]);
            }
        };
        this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" === typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++) if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                this.listeners.events_ar.splice(c, 1);
                break;
            }
        };
        this.destroy = function() {
            if (a.removeEventListener) {
                a.removeEventListener("resize", d.onResizeHandler);
                a.removeEventListener("scroll", d.onScrollHandler);
                a.removeEventListener("orientationchange", d.orientationChance);
            } else if (a.detachEvent) {
                a.detachEvent("onresize", d.onResizeHandler);
                a.detachEvent("onscroll", d.onScrollHandler);
            }
            clearTimeout(d.scrollEndId);
            clearTimeout(d.resizeHandlerId1);
            clearTimeout(d.resizeHandlerId2);
            clearTimeout(d.orientationChangeId);
            if (d.data) d.data.destroy();
            if (d.customContextMenuDO) d.customContextMenuDO.destroy();
            if (d.infoDO) d.infoDO.destroy();
            if (d.preloaderDO) d.preloaderDO.destroy();
            if (d.thumbsManagerDO) d.thumbsManagerDO.destroy();
            if (d.bgDO) {
                FWDR3DCarModTweenMax.killTweensOf(d.bgDO);
                d.bgDO.destroy();
            }
            if (d.thumbsBgDO) {
                FWDR3DCarModTweenMax.killTweensOf(d.thumbsBgDO);
                d.thumbsBgDO.destroy();
            }
            if (d.scrollbarBgDO) {
                FWDR3DCarModTweenMax.killTweensOf(d.scrollbarBgDO);
                d.scrollbarBgDO.destroy();
            }
            if (d.comboBoxDO) d.comboBoxDO.destroy();
            if (d.disableDO) d.disableDO.destroy();
            if (d.displayType == b.FLUID_WIDTH) if (FWDR3DCarUtils.isIE7) d.body.removeChild(d.mainDO.screen); else document.documentElement.removeChild(d.mainDO.screen); else d.stageContainer.removeChild(d.mainDO.screen);
            if (d.mainDO) {
                d.mainDO.screen.innerHTML = "";
                d.mainDO.destroy();
            }
            d.preloaderDO = null;
            d.customContextMenuDO = null;
            d.infoDO = null;
            d.thumbsManagerDO = null;
            d.bgDO = null;
            d.thumbsBgDO = null;
            d.scrollbarBgDO = null;
            d.comboBoxDO = null;
            d.disableDO = null;
            d.mainDO = null;
            d = null;
        };
        this.init();
    };
    b.RESIZE = "resize";
    b.LIGHTBOX = "lightbox";
    b.RESPONSIVE = "responsive";
    b.FLUID_WIDTH = "fluidwidth";
    b.INTRO_START = "onIntroStart";
    b.INTRO_FINISH = "onIntroFinish";
    b.DATA_LOADED = "onDataLoaded";
    b.IS_API_READY = "isAPIReady";
    b.CATEGORY_CHANGED = "categoryChanged";
    a.FWDRoyal3DCarousel = b;
}(window);