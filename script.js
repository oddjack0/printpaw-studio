// PrintPaw Studio — light enhancements: footer year + product category filter.
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Category filter for the product grid
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".filter-btn"));
  var cards = Array.prototype.slice.call(document.querySelectorAll(".product-grid .card"));
  var status = document.getElementById("filter-status");
  if (!buttons.length || !cards.length) return;

  function applyFilter(filter, clickedBtn) {
    var visible = 0;
    cards.forEach(function (card) {
      var show = filter === "all" || card.getAttribute("data-category") === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });
    buttons.forEach(function (btn) {
      var active = btn === clickedBtn;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (status) {
      status.textContent = "Showing " + visible + " product" + (visible === 1 ? "" : "s") +
        (filter === "all" ? "." : " in " + clickedBtn.textContent.trim() + ".");
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"), btn);
    });
  });
})();
