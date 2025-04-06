"use client";
import { useState, useEffect } from "react";
import "../styles/Contact.css";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews/approved`)
      .then((res) => res.json())
      .then((data) => setComments(data.reverse()));
  }, []);

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });      

    if (!res.ok) {
        throw new Error("Failed to upload file.");
    }

    const data = await res.json();
    return data.fileName;
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let photoName = null;
    if (photo) {
      photoName = await handleUpload(photo);
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message, photo: photoName }),
    });

    setName("");
    setMessage("");
    setPhoto(null);
    window.location.reload();
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with EmailJS or Formspree if needed.
    alert("Email sent! (Integrate with EmailJS/Formspree)");
  };

  return (
    <div className="contact-page">
      {/* CONTACT FORM */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleEmailSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">
            <FaPaperPlane /> Send Message
          </button>
        </form>

        <h4>Follow Me</h4>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">GitHub</a>
          <a href="#">YouTube</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      {/* COMMENT SECTION */}
      <div className="comment-section">
        <h2>Leave a Comment</h2>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Your Comment"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && setPhoto(e.target.files[0])}
          />
          <button type="submit">
            <FaPaperPlane /> Submit Comment
          </button>
        </form>

        <div className="comment-list">
          {comments.map((c, i) => (
            <div className="comment-box" key={i}>
              {c.photo && (
                <img src={`/upload/${c.photo}`} alt={c.name} loading="lazy" />
              )}
              <div>
                <strong>{c.name}</strong>
                <p>{c.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
