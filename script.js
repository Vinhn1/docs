// Hui Viet Documentation Interactive Engine
document.addEventListener("DOMContentLoaded", function () {
  initDarkMode();
  initMobileSidebar();
  initRoleFilter();
  initSearch();
  initLightbox();
  initScrollSpy();
});

// Dark Mode Support
function initDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  // Determine initial theme
  const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("huiviet-docs-theme");
  const isDark = savedTheme === "dark" || (!savedTheme && userPrefersDark);

  if (isDark) {
    document.documentElement.classList.add("dark");
    if (darkIcon) darkIcon.classList.remove("hidden");
    if (lightIcon) lightIcon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    if (darkIcon) darkIcon.classList.add("hidden");
    if (lightIcon) lightIcon.classList.remove("hidden");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const willBeDark = !document.documentElement.classList.contains("dark");
      if (willBeDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("huiviet-docs-theme", "dark");
        if (darkIcon) darkIcon.classList.remove("hidden");
        if (lightIcon) lightIcon.classList.add("hidden");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("huiviet-docs-theme", "light");
        if (darkIcon) darkIcon.classList.add("hidden");
        if (lightIcon) lightIcon.classList.remove("hidden");
      }
    });
  }
}

// Mobile Sidebar Toggle
function initMobileSidebar() {
  const toggleBtn = document.getElementById("sidebar-toggle");
  const closeBtn = document.getElementById("sidebar-close");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  if (!toggleBtn || !sidebar) return;

  function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    if (overlay) overlay.classList.remove("hidden");
  }

  function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    if (overlay) overlay.classList.add("hidden");
  }

  toggleBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  // Close when clicking a nav link on mobile
  const navLinks = sidebar.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        closeSidebar();
      }
    });
  });
}

// Role Filter (All, Admin, User, Onboarding)
function initRoleFilter() {
  const filterButtons = document.querySelectorAll(".role-filter-btn");
  const sections = document.querySelectorAll("[data-role]");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const selectedRole = this.getAttribute("data-filter");

      filterButtons.forEach((b) => {
        b.classList.remove("bg-indigo-600", "text-white", "shadow-sm");
        b.classList.add("bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300");
      });
      this.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300");
      this.classList.add("bg-indigo-600", "text-white", "shadow-sm");

      sections.forEach((sec) => {
        const roles = sec.getAttribute("data-role").split(" ");
        if (selectedRole === "all" || roles.includes(selectedRole)) {
          sec.classList.remove("hidden");
        } else {
          sec.classList.add("hidden");
        }
      });
    });
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById("docs-search");
  const searchResults = document.getElementById("search-results");

  if (!searchInput) return;

  searchInput.addEventListener("input", function (e) {
    const query = e.target.value.trim().toLowerCase();
    const searchableItems = document.querySelectorAll("[data-searchable]");

    if (!query) {
      if (searchResults) searchResults.classList.add("hidden");
      searchableItems.forEach((item) => (item.style.display = ""));
      return;
    }

    let matchCount = 0;
    searchableItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = "";
        matchCount++;
      } else {
        item.style.display = "none";
      }
    });

    if (searchResults) {
      searchResults.textContent = "Tìm thấy " + matchCount + " mục";
      searchResults.classList.remove("hidden");
    }
  });
}

// Lightbox for Screenshots
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalTitle = document.getElementById("lightbox-title");
  const closeBtn = document.getElementById("lightbox-close");

  if (!modal || !modalImg) return;

  const triggerImages = document.querySelectorAll(".screenshot-zoomable");
  triggerImages.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      if (modalTitle) modalTitle.textContent = this.alt || "Ảnh chụp màn hình giao diện";
      modal.classList.add("active");
    });
  });

  function closeModal() {
    modal.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

// Scrollspy for sidebar links
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id], div[id^='sec-']");
  const navLinks = document.querySelectorAll(".nav-item-sub, .nav-item");

  function onScroll() {
    const scrollPos = window.scrollY + 130;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
}
