/* =========================================
   JavaScript 功能模組
   
   1. Loading 動畫控制
   2. 導覽列與手機選單 (含點擊外部收合)
   3. 手風琴效果 (Accordion)
   4. 滾動動畫偵測 (Intersection Observer)
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
  // =========================================
  // 1. Loading 動畫控制
  // =========================================
  const loader = document.getElementById("loader-overlay");
  if (loader) {
    // 延遲 1 秒後開始消失，增加質感
    setTimeout(() => {
      loader.classList.add("loader-hidden");
      // 動畫結束後從 DOM 中完全移除，避免阻擋點擊
      loader.addEventListener("transitionend", () => {
        loader.remove();
      });
    }, 1000);
  }

  // =========================================
  // 2. 手機版選單控制
  // =========================================
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // (A) 漢堡按鈕點擊切換
  if (hamburger) {
    hamburger.addEventListener("click", (e) => {
      // 阻止冒泡：避免點擊按鈕時同時觸發 document 的關閉事件
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // (B) 點擊選單內的連結後 -> 自動收合選單
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // (C) 點擊選單「外部」-> 自動收合選單
  document.addEventListener("click", function (e) {
    // 只有在選單開啟時才偵測
    if (navMenu.classList.contains("active")) {
      // 如果點擊目標不是「選單內容」也不是「漢堡按鈕」，就關閉
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    }
  });

  // =========================================
  // 3. 手風琴效果 (Accordion) - 用於接案服務
  // =========================================
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach((acc) => {
    acc.addEventListener("click", function () {
      // 1. 切換標題的 active 狀態 (控制箭頭旋轉)
      this.classList.toggle("active");

      // 2. 控制內容的高度展開/收合
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        // 如果已經展開，就設為 null (收合)
        content.style.maxHeight = null;
      } else {
        // 如果是收合，就設為內容的實際高度 scrollHeight
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // =========================================
  // 4. 滾動動畫偵測 (Intersection Observer)
  // =========================================
  const observerOptions = {
    root: null, // 視窗本身
    rootMargin: "0px",
    threshold: 0.1, // 當元件進入視窗 10% 時觸發
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 加入 visible class 觸發 CSS transition
        entry.target.classList.add("visible");
        // 動畫只跑一次，跑完就不再偵測，節省效能
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 選取所有帶有動畫 class 的元素
  const animatedElements = document.querySelectorAll(
    ".fade-in-up, .fade-in-left, .fade-in-right"
  );
  animatedElements.forEach((el) => observer.observe(el));
});
