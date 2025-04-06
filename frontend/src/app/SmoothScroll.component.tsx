"use client";

import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";
import "./styles/SmoothScroller.css";

const SmoothScroll = ({ children }) => {
  // scroll container
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    if (!scrollRef.current) return; // Ensure scrollRef.current is not null
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    resizeObserver.observe(scrollRef.current);

    return () => resizeObserver.disconnect();
  }, [resizePageHeight]);

  const { scrollY } = useViewportScroll(); // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      {/* Outer container to maintain layout */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Dynamic height spacer to maintain native scroll */}
        <div style={{ height: pageHeight }} />
        {/* Smooth scrolling container */}
        <motion.div
          ref={scrollRef}
          style={{ y: spring, position: "absolute", top: 0, left: 0, right: 0 }}
          className="scroll-container"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default SmoothScroll;