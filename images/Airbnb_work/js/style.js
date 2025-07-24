document.addEventListener("DOMContentLoaded", function () {
  // 하트 아이콘 클릭 이벤트
  document.querySelectorAll(".heart-icon").forEach((heart) => {
    heart.addEventListener("click", function (e) {
      e.stopPropagation();
      if (this.textContent === "♡") {
        this.textContent = "♥";
        this.style.color = "#ff385c";
      } else {
        this.textContent = "♡";
        this.style.color = "#222";
      }
    });
  });

  // 슬라이더 스크롤 함수
  window.scrollSlider = function (direction) {
    const slider = document.getElementById("slider");
    const slideWidth = slider.querySelector(".slide").offsetWidth;
    slider.scrollLeft += direction * slideWidth;
  };

  function scrollSlider(id, direction) {
    const slider = document.getElementById(id);
    const scrollAmount = slider.clientWidth; // 한 화면씩 이동
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }

  // 슬라이더 스크롤 버튼 이벤트
  window.scrollSlider = function (sliderId, direction) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    const slide = slider.querySelector(".experience-card");
    const slideWidth = slide ? slide.offsetWidth + 20 : 200; // 여유간격 포함
    slider.scrollLeft += direction * slideWidth;
  };

  let currentIndex = 0;
  const photos = document.querySelectorAll(".photo-item");
  const totalPhotos = photos.length;

  function scrollPhotos(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalPhotos - 1;
    } else if (currentIndex >= totalPhotos) {
      currentIndex = 0;
    }

    // 간단한 시각적 피드백
    photos.forEach((photo, index) => {
      photo.style.opacity = index === currentIndex ? "1" : "0.7";
      photo.style.transform =
        index === currentIndex ? "scale(1.05)" : "scale(1)";
    });
  }

  // 초기 설정
  scrollPhotos(0);

  // 카드 클릭 이벤트
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateY(-2px)";
      }, 100);
    });
  });

  // 검색 계속하기 버튼 클릭 이벤트
  const continueBtn = document.querySelector(".continue-search-btn");
  if (continueBtn) {
    continueBtn.addEventListener("click", function () {
      this.style.transform = "translateY(-4px) scale(1.05)";
      setTimeout(() => {
        this.style.transform = "translateY(-2px)";
      }, 150);
    });
  }

  // 패키지 클릭 시 상세보기 기능용 예시
  document.querySelectorAll(".package-item").forEach((item) => {
    item.addEventListener("click", () => {
      const altText = item.querySelector("img").alt;
      alert(`"${altText}" 패키지를 선택하셨습니다.`);
    });
  });

  // footer grid 여행지 클릭 시 알림
  document.querySelectorAll(".footer-grid div").forEach((item) => {
    item.addEventListener("click", () => {
      alert(`${item.textContent} 관련 여행지를 탐색합니다.`);
      // window.location.href = "/search?query=" + encodeURIComponent(item.textContent);
    });
  });
});

// createSlider 함수와 실행 부분
function createSlider(sliderId, toggleId, interval = 3000) {
  const wrapper = document.getElementById(sliderId);
  if (!wrapper) return; // 존재하지 않으면 함수 종료

  const track = wrapper.querySelector(".slider-track");
  const slides = wrapper.querySelectorAll(".slide");
  const toggleBtn = document.getElementById(toggleId);

  let index = 0;
  let playing = true;

  function updateSlideClasses() {
    slides.forEach((slide, i) => {
      slide.classList.remove("active-center", "side-1", "side-2");
      if (i === index) {
        slide.classList.add("active-center");
      } else if (
        i === (index + 1) % slides.length ||
        i === (index - 1 + slides.length) % slides.length
      ) {
        slide.classList.add("side-1");
      } else if (
        i === (index + 2) % slides.length ||
        i === (index - 2 + slides.length) % slides.length
      ) {
        slide.classList.add("side-2");
      }
    });
  }

  updateSlideClasses();

  function nextSlide() {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(calc(50% - ${(index + 0.5) * 220}px))`;
    updateSlideClasses();
  }

  let autoSlide = setInterval(nextSlide, interval);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (playing) {
        clearInterval(autoSlide);
        toggleBtn.textContent = "▶️";
      } else {
        autoSlide = setInterval(nextSlide, interval);
        toggleBtn.textContent = "⏸️";
      }
      playing = !playing;
    });
  }
}

// 사진 슬라이더
// airbnb-service-slider.js
document.addEventListener("DOMContentLoaded", function () {
  // 기존 슬라이더 초기화 (첫 번째 슬라이더용)
  const sliderTrack = document.getElementById("service-slider");
  const toggleBtn = document.getElementById("toggle-slider");

  if (sliderTrack && toggleBtn) {
    let isPlaying = true;
    let currentIndex = 0;
    const slides = sliderTrack.children;
    const slideCount = slides.length;

    function updateSlides() {
      for (let i = 0; i < slideCount; i++) {
        slides[i].classList.remove("active-center", "side-blur");
        if (i === currentIndex) {
          slides[i].classList.add("active-center");
        } else {
          slides[i].classList.add("side-blur");
        }
      }
      const offset = -(currentIndex * 220) + (window.innerWidth / 2 - 100);
      sliderTrack.style.transform = `translateX(${offset}px)`;
    }

    function autoSlide() {
      if (!isPlaying) return;
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlides();
    }

    let slideInterval = setInterval(autoSlide, 2500);

    toggleBtn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      toggleBtn.textContent = isPlaying ? "⏸️" : "▶️";
      if (isPlaying) {
        slideInterval = setInterval(autoSlide, 2500);
      } else {
        clearInterval(slideInterval);
      }
    });

    updateSlides();
  }

  // 에어비앤비 서비스 슬라이더 초기화
  massageSlider = new SliderController("massage");
  photoSlider = new SliderController("photo");

  // 키보드 이벤트
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      if (massageSlider) massageSlider.previousSlide();
      if (photoSlider) photoSlider.previousSlide();
    }
    if (e.key === "ArrowRight") {
      if (massageSlider) massageSlider.nextSlide();
      if (photoSlider) photoSlider.nextSlide();
    }
    if (e.key === " ") {
      e.preventDefault();
      if (massageSlider) massageSlider.toggleAutoPlay();
      if (photoSlider) photoSlider.toggleAutoPlay();
    }
  });

  // 터치 이벤트
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        if (massageSlider) massageSlider.nextSlide();
        if (photoSlider) photoSlider.nextSlide();
      } else {
        if (massageSlider) massageSlider.previousSlide();
        if (photoSlider) photoSlider.previousSlide();
      }
    }
  }
});

// 단일 슬라이더 클래스 - 깔끔하게 정리
class SliderController {
  constructor(sliderId) {
    this.sliderId = sliderId;
    this.currentSlide = 0;
    this.totalSlides = 5;
    this.isAutoPlay = false; // 초기에는 정지 상태로 시작
    this.autoPlayInterval = null;
    this.progressInterval = null;
    this.currentProgress = 0;
    this.progressDuration = 100; // 진행 바 업데이트 간격 (ms)
    this.slideDuration = 3000; // 슬라이드 변경 간격 (ms)
    this.init();
  }

  init() {
    // DOM 요소 존재 확인
    const sliderWrapper = document.getElementById(`${this.sliderId}-slider`);
    if (!sliderWrapper) {
      console.error(
        `슬라이더 요소를 찾을 수 없습니다: ${this.sliderId}-slider`
      );
      return;
    }

    const track = document.getElementById(`${this.sliderId}-track`);
    if (track && track.children.length > 0) {
      this.totalSlides = track.children.length;
    }

    this.createDots();
    this.updateCounter();
    this.updateProgress();
    this.setInitialButtonState(); // 초기 버튼 상태 설정
    this.startAutoPlay();
    this.bindEvents();
  }

  setInitialButtonState() {
    const toggleBtn = document.getElementById(`${this.sliderId}-toggle`);
    if (toggleBtn) {
      const img = toggleBtn.querySelector("img");
      if (img) {
        // 초기 상태: 정지 상태이므로 재생 버튼 이미지 표시
        img.src = "/images/pause-btn.png";
        img.alt = "정지";
      }
    }
  }

  createDots() {
    const dotsContainer = document.getElementById(`${this.sliderId}-dots`);
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";

    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement("div");
      dot.className = `progress-dot ${i === 0 ? "active" : ""}`;
      dot.addEventListener("click", () => this.goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  updateCounter() {
    const currentEl = document.getElementById(`${this.sliderId}-current`);
    const totalEl = document.getElementById(`${this.sliderId}-total`);

    if (currentEl) currentEl.textContent = this.currentSlide + 1;
    if (totalEl) totalEl.textContent = this.totalSlides;
  }

  updateProgress() {
    const progressFill = document.getElementById(`${this.sliderId}-progress`);
    if (progressFill) {
      const progress = (this.currentProgress / this.slideDuration) * 100;
      progressFill.style.width = `${Math.min(progress, 100)}%`;
    }

    // 도트 업데이트
    const dots = document.querySelectorAll(
      `#${this.sliderId}-dots .progress-dot`
    );
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide);
    });
  }

  goToSlide(slideIndex) {
    this.currentSlide = slideIndex;
    const track = document.getElementById(`${this.sliderId}-track`);
    if (track) {
      track.style.transform = `translateX(-${slideIndex * 20}%)`;
    }
    this.updateCounter();
    this.resetProgress();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(this.currentSlide);
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(this.currentSlide);
  }

  resetProgress() {
    this.currentProgress = 0;
    this.updateProgress();
  }

  startAutoPlay() {
    this.stopAutoPlay();

    if (!this.isAutoPlay) return;

    this.progressInterval = setInterval(() => {
      if (!this.isAutoPlay) return;

      this.currentProgress += this.progressDuration;
      this.updateProgress();

      if (this.currentProgress >= this.slideDuration) {
        this.nextSlide();
      }
    }, this.progressDuration);
  }

  stopAutoPlay() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  toggleAutoPlay() {
    this.isAutoPlay = !this.isAutoPlay;

    const toggleBtn = document.getElementById(`${this.sliderId}-toggle`);
    if (toggleBtn) {
      const img = toggleBtn.querySelector("img");
      if (img) {
        // 자동 재생 중이면 정지 버튼, 정지 중이면 재생 버튼 표시
        if (this.isAutoPlay) {
          img.src = "/images/pause-btn.png";
          img.alt = "정지";
        } else {
          img.src = "/images/play-btn.png";
          img.alt = "재생";
        }
      }
    }

    if (this.isAutoPlay) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  bindEvents() {
    const toggleBtn = document.getElementById(`${this.sliderId}-toggle`);
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => this.toggleAutoPlay());
    }

    // 마우스 호버 이벤트 제거 - 클릭으로만 제어
    // 호버 관련 코드를 모두 제거했습니다
  }
}

// 슬라이더 인스턴스 변수 선언
let massageSlider, photoSlider;

// 전역 함수 (HTML onclick 이벤트용)
function nextSlide(sliderId) {
  if (sliderId === "massage" && massageSlider) {
    massageSlider.nextSlide();
  } else if (sliderId === "photo" && photoSlider) {
    photoSlider.nextSlide();
  }
}

function previousSlide(sliderId) {
  if (sliderId === "massage" && massageSlider) {
    massageSlider.previousSlide();
  } else if (sliderId === "photo" && photoSlider) {
    photoSlider.previousSlide();
  }
}

// createSlider 함수 (호환성을 위해 추가)
function createSlider(sliderId, toggleId, interval) {
  // 이미 SliderController로 처리되므로 빈 함수로 유지
  console.log(
    `createSlider called for ${sliderId} - handled by SliderController`
  );
}
