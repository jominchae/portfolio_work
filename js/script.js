let currentCodingProject = 1;
const totalCodingProjects = 2;

// ===== 페이지 로드 완료 후 실행 =====
document.addEventListener("DOMContentLoaded", function () {
  initializePortfolio();
});

// ===== 포트폴리오 초기화 함수 =====
function initializePortfolio() {
  setupNavigation();
  setupStartButton();
  setupResumeButton();
  setupWindowControls();
  setupScrollActiveNav();
  setupSearchButton();
  setupTrashIcon();
  setupPortfolioGallery(); // 포트폴리오 갤러리 초기화
  setupTouchNavigation(); // 터치 네비게이션 초기화
}

const codingSwiper = new Swiper(".cardnews-swiper", {
  effect: "cards", // 카드 효과 적용
  grabCursor: true, // 마우스 커서 모양 변경
  // 필요한 옵션 추가 가능
});

function initializePortfolio() {
  // 기존 설정들...
  setupNavigation();
  // ...
  // Swiper 초기화 추가
  const codingSwiper = new Swiper(".cardnews-swiper", {
    effect: "cards",
    grabCursor: true,
  });
}

// ===== 네비게이션 설정 =====
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // 모든 링크에서 active 클래스 제거
      navLinks.forEach((l) => l.classList.remove("active"));

      // 클릭한 링크에 active 클래스 추가
      this.classList.add("active");

      // 해당 섹션으로 스크롤
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 페이지 로드 시 첫 번째 섹션 활성화
  const firstNavLink = document.querySelector(".nav-link");
  if (firstNavLink) {
    firstNavLink.classList.add("active");
  }
}

// ===== START 버튼 설정 =====
// function setupStartButton() {
//   const startButton = document.getElementById("startBtn");

//   if (startButton) {
//     startButton.addEventListener("click", function () {
//       // About 섹션으로 부드럽게 이동
//       const aboutSection = document.getElementById("about");
//       if (aboutSection) {
//         aboutSection.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         });

//         // 네비게이션 상태 업데이트
//         document.querySelectorAll(".nav-link").forEach((link) => {
//           link.classList.remove("active");
//         });

//         const aboutNavLink = document.querySelector('a[href="#about"]');
//         if (aboutNavLink) {
//           aboutNavLink.classList.add("active");
//         }
//       }

//       // 클릭 효과 추가
//       this.style.transform = "scale(0.95)";
//       setTimeout(() => {
//         this.style.transform = "scale(1)";
//       }, 150);
//     });
//   }
// }

function setupStartButton() {
  const startButton = document.getElementById("startBtn");

  if (!startButton) return;

  startButton.addEventListener("click", function () {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // "center" 대신 "start"로 변경해서 스크롤 위치 문제 해결
      });

      // 네비게이션 상태 업데이트
      document
        .querySelectorAll(".nav-link")
        .forEach((link) => link.classList.remove("active"));
      const aboutNavLink = document.querySelector('a[href="#about"]');
      if (aboutNavLink) aboutNavLink.classList.add("active");
    }

    // 클릭 애니메이션
    this.style.transform = "scale(0.95)";
    setTimeout(() => (this.style.transform = "scale(1)"), 150);
  });
}

document.addEventListener("DOMContentLoaded", setupStartButton);

// ===== 스크롤 위치에 따라 네비게이션 활성화 =====
function setupScrollActiveNav() {
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// ===== 이력서 버튼 설정 =====
function setupResumeButton() {
  const resumeButton = document.querySelector(".resume-button");

  if (resumeButton) {
    resumeButton.addEventListener("click", function () {
      const resumeUrl = "images/resume.pdf"; // 실제 경로로 변경 필요
      window.open(resumeUrl, "_blank");
    });
  }
}

// 페이지 로드 시 호출
setupResumeButton();

// ===== 창 제어 버튼 설정 =====
function changeColor(button, color) {
  button.style.backgroundColor = color;
  setTimeout(function () {
    button.style.backgroundColor = "";
  }, 200);
}

// ===== 검색 버튼 설정 =====
function setupSearchButton() {
  const searchBtn = document.querySelector(".search-btn");

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      console.log("Search clicked");
      alert("검색 기능은 준비중입니다!");
    });
  }
}

// ===== 쓰레기통 아이콘 설정 =====
function setupTrashIcon() {
  // querySelectorAll로 모든 쓰레기통 아이콘 선택
  const trashIcons = document.querySelectorAll(".imac-trash-icon");

  console.log(`쓰레기통 아이콘 개수: ${trashIcons.length}`);

  trashIcons.forEach((trashIcon, index) => {
    trashIcon.style.cursor = "pointer";

    trashIcon.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      console.log(`쓰레기통 ${index + 1} 클릭됨`);
      alert("휴지통 기능은 준비중입니다!");
    });
  });
}

// DOM 로딩 완료 후 실행
document.addEventListener("DOMContentLoaded", function () {
  setupTrashIcon();
  // setupPortfolioGallery();
});

// ===== 디자인 섹션 포트폴리오 갤러리 =====
let currentdesignProject = 1;
const totaldesignProjects = 9;
// const totaldesignProjects = document.querySelectorAll(
//   ".design-project-item"
// ).length;

// 포트폴리오 갤러리 설정
function setupPortfolioGallery() {
  // updateProjectDisplay();
  setupKeyboardNavigation();
  setupProjectImageClicks();

  // 도트 네비게이션 클릭 이벤트 설정
  const dotsContainer = document.querySelector(".portfolio-dots");
  if (!dotsContainer) return;

  dotsContainer.addEventListener("click", (event) => {
    const clickedDot = event.target.closest(".dot");
    if (!clickedDot) return;

    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));
    const index = dots.indexOf(clickedDot);
    if (index === -1) return;

    console.log("✅ 디자인 도트 클릭됨:", index + 1);
    goTodesignProject(index + 1);
  });
}

// DOMContentLoaded 이벤트에 setupPortfolioGallery 호출 추가
document.addEventListener("DOMContentLoaded", function () {
  setupPortfolioGallery();
  // 그 외 초기화 함수도 이곳에서 호출 중이면 함께 호출 가능
});

// 프로젝트 변경 함수
function changedesignProject(direction) {
  // 현재 활성 프로젝트 제거
  const currentItem = document.querySelector(".project-item.active");

  if (currentItem) {
    currentItem.classList.remove("active");
  }

  // 새로운 프로젝트 번호 계산
  currentdesignProject += direction;

  if (currentdesignProject > totaldesignProjects) {
    currentdesignProject = 1;
  } else if (currentdesignProject < 1) {
    currentdesignProject = totaldesignProjects;
  }

  updatedesignProjectDisplay();
}

// 특정 프로젝트로 이동
function goTodesignProject(projectNumber) {
  if (projectNumber < 1 || projectNumber > totaldesignProjects) {
    return;
  }

  // 현재 활성 프로젝트 제거
  const currentItem = document.querySelector(".design-project-item.active");
  if (currentItem) {
    currentItem.classList.remove("active");
  }

  currentdesignProject = projectNumber;
  updatedesignProjectDisplay();
}

// 프로젝트 표시 업데이트
function updatedesignProjectDisplay() {
  const projectItems = document.querySelectorAll(".project-item");
  const dots = document.querySelectorAll(".portfolio-dots .dot");
  const currentProjectSpan = document.getElementById("current-project");
  const projectUrl = document.getElementById("project-url");

  // 모든 프로젝트 아이템 숨기기
  projectItems.forEach((item, index) => {
    if (index === currentdesignProject - 1) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 도트 네비게이션 업데이트
  dots.forEach((dot, index) => {
    if (index === currentdesignProject - 1) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  // 카운터 업데이트
  if (currentProjectSpan) {
    currentProjectSpan.textContent = currentdesignProject;
  }

  // URL 표시 업데이트
  if (projectUrl) {
    projectUrl.textContent = "DESIGN PAGE";
  }
}

// 키보드 네비게이션 설정
function setupKeyboardNavigation() {
  document.addEventListener("keydown", function (e) {
    const designSection = document.getElementById("design");
    const modal = document.getElementById("image-modal");

    // 모달이 열려 있으면 키보드 네비게이션 비활성화
    if (modal && modal.style.display === "block") return;

    if (designSection && isElementInViewport(designSection)) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        changedesignProject(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        changedesignProject(1);
      }
    }
  });
}

// 프로젝트 이미지 클릭 이벤트 설정
function setupProjectImageClicks() {
  const projectImages = document.querySelectorAll(".project-image");
  projectImages.forEach((image, index) => {
    image.addEventListener("click", function () {
      openFigma(`project${index + 1}`);
    });
  });
}

// // Figma 링크 열기
// function openFigma(projectId) {
//   // 실제 Figma 링크로 교체해야 함
//   const figmaLinks = {
//     project1: "https://figma.com/project1-link",
//     project2:
//       "https://www.figma.com/proto/OGH2s8j1Rt2pdNOfSVF1FO/4%EC%A1%B0-%EB%B0%A5%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%95%B1%EB%94%94%EC%9E%90%EC%9D%B8?page-id=163%3A1441&node-id=458-1320&p=f&viewport=-240%2C375%2C0.12&t=vq76r8RJNiyOSDld-1&scaling=min-zoom&content-scaling=fixed",
//     project3: "https://figma.com/project3-link",
//     // project4: "https://figma.com/project4-link",
//     // project5: "https://figma.com/project5-link",
//     project6: "https://figma.com/project6-link",
//     project7: "https://figma.com/project7-link",
//     project8: "https://figma.com/project8-link",
//     // project9: "https://figma.com/project9-link",
//   };

//   const link = figmaLinks[projectId];
//   if (link) {
//     window.open(link, "_blank");
//   } else {
//     alert(`${projectId} Figma 링크가 준비 중입니다.`);
//   }
// }

// // 제작 프로세스 보기 (Figma 링크 열기)
// function openProcess(projectId) {
//   console.log("버튼 클릭됨: ", projectId);
//   const processLinks = {
//     project2:
//       "https://www.figma.com/proto/OGH2s8j1Rt2pdNOfSVF1FO/4%EC%A1%B0-%EB%B0%A5%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%95%B1%EB%94%94%EC%9E%90%EC%9D%B8?page-id=503%3A800&node-id=503-802&viewport=671%2C68%2C0.06&t=W6vmaC8nGUbZNw9t-1&scaling=min-zoom&content-scaling=fixed",
//     // project3: "https://www.figma.com/file/다른프로세스링크",
//   };

//   const link = processLinks[projectId];
//   if (link) {
//     window.open(link, "_blank");
//   } else {
//     alert(`${projectId}의 제작 프로세스 링크가 준비 중입니다.`);
//   }
// }

// 터치 스와이프 지원 (모바일)
function setupTouchNavigation() {
  let touchStartX = 0;
  let touchEndX = 0;

  const portfolioGallery = document.querySelector(".portfolio-gallery");

  if (portfolioGallery) {
    portfolioGallery.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    portfolioGallery.addEventListener(
      "touchend",
      function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true }
    );
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // 왼쪽으로 스와이프 - 다음 프로젝트
        changeProject(1);
      } else {
        // 오른쪽으로 스와이프 - 이전 프로젝트
        changeProject(-1);
      }
    }
  }
}

// 엘리먼트가 뷰포트에 있는지 확인하는 함수
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 상세페이지 보기 버튼들 선택
const buttons = document.querySelectorAll(".view-project-btn");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.getElementById("close-modal");

// 버튼 클릭 시 모달 열기
// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const imgSrc = btn.getAttribute("data-image");
//     console.log("클릭된 이미지 경로:", imgSrc); // 여기에 로그 추가
//     modalImg.src = imgSrc;
//     modal.style.display = "flex";
//     document.body.style.overflow = "hidden";
//   });
// });

// 모달 닫기 버튼 클릭 시
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalImg.src = ""; // 이미지 초기화
  document.body.style.overflow = ""; // 배경 스크롤 복원
});

// 모달 바깥 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = "";
  }
});

// ESC 키 눌러도 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = "";
  }
});

function openContactModal() {
  document.getElementById("contactModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  document.getElementById("contactModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function handleContactSubmit(event) {
  event.preventDefault();

  // 실제 메시지 전송 로직을 여기에 구현
  alert("메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.");
  closeContactModal();

  // 폼 초기화
  event.target.reset();
}

// 모달 외부 클릭 시 닫기
document.getElementById("contactModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeContactModal();
  }
});

// ESC 키로 모달 닫기
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeContactModal();
  }
});

// ===== 코딩 섹션 =====
// let currentCodingProject = 1;
// const totalCodingProjects = 3;

// 코딩 프로젝트 변경 함수
function changeCodingProject(direction) {
  // 변수들이 정의되어 있는지 확인
  if (
    typeof currentCodingProject === "undefined" ||
    typeof totalCodingProjects === "undefined"
  ) {
    console.error("변수가 초기화되지 않았습니다");
    return;
  }

  const currentItem = document.querySelector(".coding-project-item.active");
  if (currentItem) {
    currentItem.classList.remove("active");
  }

  currentCodingProject += direction;

  if (currentCodingProject > totalCodingProjects) {
    currentCodingProject = 1;
  } else if (currentCodingProject < 1) {
    currentCodingProject = totalCodingProjects;
  }

  const newItem = document.querySelector(
    `.coding-project-item[data-project="${currentCodingProject}"]`
  );
  if (newItem) {
    newItem.classList.add("active");
  }

  updateCodingProjectCounter();
  updateCodingDots();
}

// 특정 코딩 프로젝트로 이동하는 함수
function goToCodingProject(projectNumber) {
  const currentItem = document.querySelector(".coding-project-item.active");
  if (currentItem) {
    currentItem.classList.remove("active");
  }

  currentCodingProject = projectNumber;

  const newItem = document.querySelector(
    `.coding-project-item[data-project="${currentCodingProject}"]`
  );
  if (newItem) {
    newItem.classList.add("active");
  }

  updateCodingProjectCounter();
  updateCodingDots();
}

// 코딩 프로젝트 카운터 업데이트
function updateCodingProjectCounter() {
  const currentElement = document.getElementById("current-coding-project");
  if (currentElement) {
    currentElement.textContent = currentCodingProject;
  }
}

// 코딩 도트 네비게이션 업데이트
function updateCodingDots() {
  const dots = document.querySelectorAll(".coding-portfolio-dots .dot");
  dots.forEach((dot, index) => {
    if (index + 1 === currentCodingProject) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// 코딩 프로젝트 열기 함수
function openCodingProject(projectId) {
  const projectLinks = {
    // project1: "https://github.com/your-username/responsive-website",
    project2: "https://github.com/your-username/portfolio-website",
    project3: "https://github.com/your-username/portfolio-website",
  };

  const link = projectLinks[projectId];
  if (link) {
    window.open(link, "_blank");
  } else {
    alert("프로젝트 링크를 준비 중입니다.");
  }
}

// 코딩 섹션 키보드 네비게이션
document.addEventListener("keydown", function (event) {
  const codingSection = document.getElementById("coding");
  if (codingSection && isElementInViewport(codingSection)) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeCodingProject(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      changeCodingProject(1);
    }
  }
});

// 코딩 섹션 터치 이벤트
let codingTouchStartX = 0;
let codingTouchEndX = 0;

document.addEventListener(
  "touchstart",
  function (event) {
    const codingSection = document.getElementById("coding");
    if (codingSection && codingSection.contains(event.target)) {
      codingTouchStartX = event.changedTouches[0].screenX;
    }
  },
  { passive: true }
);

document.addEventListener(
  "touchend",
  function (event) {
    const codingSection = document.getElementById("coding");
    if (codingSection && codingSection.contains(event.target)) {
      codingTouchEndX = event.changedTouches[0].screenX;
      handleCodingTouchGesture();
    }
  },
  { passive: true }
);

function handleCodingTouchGesture() {
  const threshold = 50;
  const difference = codingTouchStartX - codingTouchEndX;

  if (Math.abs(difference) > threshold) {
    if (difference > 0) {
      changeCodingProject(1);
    } else {
      changeCodingProject(-1);
    }
  }
}

// 초기화 함수에 코딩 섹션도 추가
document.addEventListener("DOMContentLoaded", function () {
  // 코딩 섹션 초기 설정
  updateCodingProjectCounter();
  updateCodingDots();

  // 코딩 섹션 도트 클릭 이벤트 설정
  const codingDots = document.querySelectorAll(".coding-portfolio-dots .dot");
  codingDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToCodingProject(index + 1);
    });
  });
});
