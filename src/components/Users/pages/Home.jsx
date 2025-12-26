import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaBookmark, FaStar, FaFilter } from "react-icons/fa";
import p1 from "../../../assets/images/p1.jpg";
import p2 from "../../../assets/images/p2.jpg";
import p3 from "../../../assets/images/p3.jpg";
import "./Home.css";

const Home = ({ list, borrow, handleBorrowedBook }) => {
  const [newBooks, setNewBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredBook, setHoveredBook] = useState(null);

  useEffect(() => {
    if (!list || list.length === 0) return;

    setNewBooks(list.slice(0, 6));
    setAllBooks(list);

    const cats = new Set();
    list.forEach(book => {
      if (book.category) cats.add(book.category);
      if (Array.isArray(book.categories)) book.categories.forEach(c => c && cats.add(c));
    });

    setCategories(["All", ...Array.from(cats)]);
  }, [list]);

  const getQty = (id) => {
    const b = borrow.find(item => item.id === id);
    return b ? b.qty : 0;
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setAllBooks(list);
    } else {
      const filtered = list.filter(
        b => b.category === category || (Array.isArray(b.categories) && b.categories.includes(category))
      );
      setAllBooks(filtered);
    }
  };

  const scrollRow = (direction, rowId) => {
    const row = document.getElementById(rowId);
    if (row) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="netflix-home">
      {/* Hero Section with Carousel */}
      <div className="hero-section">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={p1} className="d-block w-100 hero-image" alt="Library" />
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">Welcome to Digital Library</h1>
                  <p className="hero-description">Discover thousands of books at your fingertips. Borrow, read, and explore a world of knowledge.</p>
                  <button className="hero-btn">
                    <FaBookmark className="me-2" /> Browse Collection
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={p2} className="d-block w-100 hero-image" alt="Teachers Day" />
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">Expand Your Mind</h1>
                  <p className="hero-description">From classics to contemporary, find books that inspire and educate.</p>
                  <button className="hero-btn">
                    <FaStar className="me-2" /> Featured Books
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={p3} className="d-block w-100 hero-image" alt="Books" />
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">Your Reading Journey Starts Here</h1>
                  <p className="hero-description">Access a curated collection of books across all genres and subjects.</p>
                  <button className="hero-btn">
                    <FaFilter className="me-2" /> Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section mt-5 px-4">
        {/* New Arrivals - Horizontal Scroll */}
        <div className="book-row-container">
          <div className="row-header">
            <h2 className="section-title">
              <span className="title-highlight">New On My Books</span>
            </h2>
          </div>
          <div className="book-row-wrapper">
            <button className="scroll-btn scroll-left" onClick={() => scrollRow('left', 'new-books-row')}>
              <FaChevronLeft />
            </button>
            <div className="book-row" id="new-books-row">
              {newBooks.map(book => {
                const qty = getQty(book.id);
                const out = book.quantity <= 0;
                return (
                  <div 
                    className="book-card-netflix" 
                    key={book.id}
                    onMouseEnter={() => setHoveredBook(book.id)}
                    onMouseLeave={() => setHoveredBook(null)}
                  >
                    <div className="book-card-inner">
                      <img src={book.image} alt={book.title} className="book-thumbnail" />
                      <div className="book-overlay">
                        <div className="book-info">
                          <h6 className="book-title">{book.title}</h6>
                          <p className="book-author">{book.author}</p>
                          <span className={`status-badge ${out ? "status-out" : "status-available"}`}>
                            {out ? "Out of Stock" : "Available"}
                          </span>
                          <button
                            className={`netflix-borrow-btn ${out ? "disabled" : ""}`}
                            disabled={out}
                            onClick={() => handleBorrowedBook(book, "add")}
                          >
                            {out ? "Unavailable" : qty === 0 ? "Borrow Now" : "Add More"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="scroll-btn scroll-right" onClick={() => scrollRow('right', 'new-books-row')}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="category-section">
          <h2 className="section-title mb-4">
            <span className="title-highlight">Browse by Category</span>
          </h2>
          <div className="category-pills">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`category-pill ${selectedCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Books - Grid View */}
        <div className="all-books-section">
          <div className="row-header mb-4">
            <h2 className="section-title">
              <span className="title-highlight">
                {selectedCategory === "All" ? "All Books" : selectedCategory}
              </span>
              <span className="book-count">({allBooks.length} books)</span>
            </h2>
          </div>
          <div className="books-grid">
            {allBooks.map(book => {
              const qty = getQty(book.id);
              const out = book.quantity <= 0;
              return (
                <div 
                  className="book-card-grid" 
                  key={book.id}
                  onMouseEnter={() => setHoveredBook(book.id)}
                  onMouseLeave={() => setHoveredBook(null)}
                >
                  <div className="book-card-inner">
                    <img src={book.image} alt={book.title} className="book-thumbnail" />
                    <div className="book-overlay">
                      <div className="book-info">
                        <h6 className="book-title">{book.title}</h6>
                        <p className="book-author">{book.author}</p>
                        <p className="book-category">{book.category}</p>
                        <span className={`status-badge ${out ? "status-out" : "status-available"}`}>
                          {out ? "Out of Stock" : "Available"}
                        </span>
                        <button
                          className={`netflix-borrow-btn ${out ? "disabled" : ""}`}
                          disabled={out}
                          onClick={() => handleBorrowedBook(book, "add")}
                        >
                          {out ? "Unavailable" : qty === 0 ? "Borrow Now" : "Add More"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;