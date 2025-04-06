"use client";
import "../styles/HomeContact.css";
import { useState } from "react";

export default function Contact() {
    const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
    const [commentForm, setCommentForm] = useState({ name: "", email: "", message: "", profilePhoto: null });

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact Form Submitted:", contactForm);
        // Add logic to send contact form data to the backend
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Comment Form Submitted:", commentForm);
        // Add logic to send comment form data to the backend
    };

    return (
        <section className="contact-section">
            <div className="form-container">
                {/* Contact Form */}
                <h2 className="form-heading">Contact Me</h2>
                <form className="contact-form" onSubmit={handleContactSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        required
                    ></textarea>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>

            <div className="form-container">
                {/* Comments Form */}
                <h2 className="form-heading">Leave a Comment</h2>
                <form className="comment-form" onSubmit={handleCommentSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Your Comment"
                        value={commentForm.message}
                        onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                        required
                    ></textarea>
                    <label className="file-upload">
                        <span>Choose Profile Photo (optional)</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setCommentForm({ ...commentForm, profilePhoto: e.target.files ? e.target.files[0] : null })
                            }
                        />
                    </label>
                    <button type="submit" className="submit-button">Post Comment</button>
                </form>
            </div>
        </section>
    );
}