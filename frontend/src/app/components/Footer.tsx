"use client";
import React from "react";

export default function Footer() {
	return (
		<footer style={{ padding: "2rem 1rem", textAlign: "center", color: "#a1a1aa" }}>
			<span>© {new Date().getFullYear()} Ali Bourak</span>
		</footer>
	);
}
