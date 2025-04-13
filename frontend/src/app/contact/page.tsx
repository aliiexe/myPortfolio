"use client";

import { useState, useEffect } from "react";
import { FaPaperPlane, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaTiktok } from "react-icons/fa";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";
import { gsap } from "gsap";
import emailjs from "emailjs-com";

export default function Contact() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isContactPage, setIsContactPage] = useState(false);


  type Comment = {
    name: string;
    email: string;
    content: string;
    rating: number;
    image: string | null;
  };

    const fetchComments = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews/approved`);
      if (!res.ok) throw new Error("Failed to fetch comments.");
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsContactPage(window.location.pathname === "/contact");
    }
    gsap.from(".contact-title", {
          y: 100,
          filter: "blur(10px)",
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
              trigger: ".carousel",
              start: "top 60%",
              end: "top 50%",
              once: true,
          },
    });

    gsap.from(".contact-page", {
          y: 100,
          filter: "blur(10px)",
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
              trigger: ".carousel",
              start: "top 60%",
              end: "top 50%",
              once: true,
          },
          stagger: 0.8,
          delay: 0.5,
    });

    fetchComments();
  }, []);

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Failed to upload file.");
    const data = await res.json();
    return data.fileName;
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!name.trim() || !message.trim()) {
      toast.error("Name and message are required.");
      return;
    }
  
    let photoName = null;
    if (photo) {
      try {
        photoName = await handleUpload(photo);
      } catch (error) {
        console.error("File upload failed:", error);
        toast.error("Failed to upload photo.");
        return;
      }
    }
  
    const newComment = {
      name: name.trim(),
      email: email.trim(),
      content: message.trim(),
      rating,
      image: photoName,
    };
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to submit comment.");
        return;
      }
  
      setName("");
      setEmail("");
      setMessage("");
      setPhoto(null);
      setRating(5);
      toast.success("Comment submitted successfully!");
  
      await fetchComments();
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("An error occurred while submitting your comment.");
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      toast.error("All fields are required.");
      return;
    }

    const templateParams = {
      from_name: contactName,
      from_email: contactEmail,
      message: contactMessage,
    };

    try {
      await emailjs.send(
        "service_f25770c",
        "template_xw44xkr",
        templateParams,
        "8LNefsQAfbsvtE4z6"
      );

      toast.success("Email sent successfully!");
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="contact-page-container" style={{ marginTop: isContactPage ? "150px" : "0" }}>
      <h1 className="contact-title" data-animate="true">Contact Me</h1>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="contact-page">
        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2 className="sectionTitle">Get in Touch</h2>
          <p className="form-subtitle">
            Have something to discuss? Send me a message and let’s talk.
          </p>
          <form onSubmit={handleEmailSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                required
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              <FaPaperPlane /> Send Message
            </button>
          </form>

          <h4 className="sectionTitle">Connect With Me</h4>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="#" aria-label="YouTube"><FaYoutube size={24} /></a>
            <a href="#" aria-label="GitHub"><FaGithub size={24} /></a>
            <a href="#" aria-label="TikTok"><FaTiktok size={24} /></a>
          </div>
        </div>

        <div className="comment-section">
          <h2 className="sectionTitle">
            💬 Comments <span className="comment-count">({comments.length})</span>
          </h2>
          <p className="form-subtitle">Leave a comment below. Your feedback matters!</p>
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Comment"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="star-rating">
              <label>Rating</label>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  title={`Rate ${star} star${star > 1 ? "s" : ""}`}
                  onClick={() => setRating(star)}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    color: star <= rating ? "#facc15" : "#4b5563",
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            <div className="form-group">
              <label className="file-label">Upload Profile Photo (Optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && setPhoto(e.target.files[0])}
              />
              <small className="file-note">Max file size: 5MB</small>
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane /> Submit Comment
            </button>
          </form>
        </div>
        {/* COMMENTS DISPLAY */}
        <div className="comment-list">
            {comments.map((c, i) => (
              <div className="comment-box" key={i}>
                <div className="comment-avatar">
                  {c.image ? (
                    <img src={`/upload/${c.image}`} alt={c.name} loading="lazy" />
                  ) : (
                    <div className="default-avatar">{c.name[0].toUpperCase()}</div>
                  )}
                </div>
                <div className="comment-content">
                  <strong>{c.name}</strong>
                  <p>{c.content}</p>
                </div>
                <div className="comment-date">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
