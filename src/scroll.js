import Scrollbar from "smooth-scrollbar";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const scrollbar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
});
ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
        if (arguments.length) {
            scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
});
ScrollTrigger.defaults({ scroller: document.body });
