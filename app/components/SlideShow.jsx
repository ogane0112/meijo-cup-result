"use client";
import { useEffect } from "react";

export default function SlideShow() {
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#slideshow .slide');
    const slideInterval = setInterval(nextSlide, 6000); // 6秒間隔で切り替わる

    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      setTimeout(() => {
        slides[currentSlide].classList.add('active');
      }, 200);  // 0.2秒前からアクティブなスライドを切り替える
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div id="slideshow">
      <div id="slide1" className="slide active">
        <img src="https://placehold.jp/150x150.png" alt="Image 1" />
        <div className="slide-text">
          <h2>第2回名城CUP</h2>
          <h2>開催決定!</h2>
          <h3><p>2024年10月12日(土)</p></h3>
          <div className="slide-button-container">
            <a href="https://www.meijo-u.ac.jp/" className="slide-button">エントリーはこちら！</a>
          </div>
        </div>
      </div>
      <div id="slide2" className="slide">
        <img src="https://placehold.jp/300x300.png" alt="Image 2" />
        <div className="slide-text">
          <h2>第2回名城CUP</h2>
          <h2>開催決定!</h2>
          <h3><p>2024年10月12日(土)</p></h3>
          <div className="slide-button-container">
            <a href="ttps://placehold.jp/150x150.png" className="slide-button">エントリーはこちら！</a>
          </div>
        </div>
      </div>
      <div id="slide3" className="slide">
        <img src="https://placehold.jp/450x450.png" alt="Image 3" />
        <div className="slide-text">
          <h2>第2回名城CUP</h2>
          <h2>開催決定!</h2>
          <h3><p>2024年10月12日(土)</p></h3>
          <div className="slide-button-container">
            <a href="https://www.meijo-u.ac.jp/" className="slide-button">エントリーはこちら！</a>
          </div>
        </div>
      </div>
    </div>
  );
}
