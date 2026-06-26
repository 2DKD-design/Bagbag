    // ═══════════════════════════════════════════
    //  CHECKOUT PAGE — JAVASCRIPT
    // ═══════════════════════════════════════════

    // ── State ──
    let cartItems     = JSON.parse(localStorage.getItem("cartItems")) || [];
    let shippingCost  = 0;
    let discountAmt   = 0;
    let selectedPay   = "cod";
    let summaryOpen   = true;

    const PROMOS = {
      "LUXURY10": 0.10,
      "WELCOME15": 0.15,
      "VIP20": 0.20
    };

    // ── Init ──
    document.addEventListener("DOMContentLoaded", () => {
      if (cartItems.length === 0) {
        document.getElementById("emptyCartState").style.display = "block";
        document.getElementById("checkoutWrap").style.display  = "none";
      } else {
        renderCheckoutItems();
        updateTotals();
      }
    });

    // ── Render items in summary (with qty controls + remove) ──
    function renderCheckoutItems() {
      const list = document.getElementById("checkoutItemsList");
      list.innerHTML = "";

      if (cartItems.length === 0) {
        document.getElementById("emptyCartState").style.display = "block";
        document.getElementById("checkoutWrap").style.display  = "none";
        return;
      }

      cartItems.forEach(item => {
        const row = document.createElement("div");
        row.className = "gl-item-row";
        row.id = `checkout-item-${item.id}`;
        row.innerHTML = `
          <div class="gl-item-img-wrap">
            <img class="gl-item-img"
                 src="Assets/Products/product-${item.id}.png"
                 onerror="this.src='Assets/logo/logoo.png'"
                 alt="${item.name}">
          </div>
          <div class="gl-item-meta">
            <div class="gl-item-name" title="${item.name}">${item.name}</div>
            <div class="gl-qty-controls">
              <button class="gl-qty-btn" onclick="checkoutQtyChange(${item.id}, -1)" aria-label="Decrease quantity">−</button>
              <span class="gl-qty-val" id="qty-val-${item.id}">${item.quantity}</span>
              <button class="gl-qty-btn" onclick="checkoutQtyChange(${item.id}, 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="gl-item-right">
            <span class="gl-item-price" id="item-price-${item.id}">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
            <button class="gl-item-remove" onclick="checkoutRemoveItem(${item.id})" aria-label="Remove item" title="Remove">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        `;
        list.appendChild(row);
      });
    }

    // ── Adjust quantity (+ or –) ──
    function checkoutQtyChange(id, delta) {
      const item = cartItems.find(i => i.id === id);
      if (!item) return;

      item.quantity += delta;

      if (item.quantity <= 0) {
        checkoutRemoveItem(id);
        return;
      }

      // Patch the DOM in-place (no full re-render flicker)
      const qtyEl   = document.getElementById(`qty-val-${id}`);
      const priceEl = document.getElementById(`item-price-${id}`);
      if (qtyEl)   qtyEl.textContent   = item.quantity;
      if (priceEl) priceEl.textContent = `Rs. ${(item.price * item.quantity).toLocaleString()}`;

      saveAndRefresh();
    }

    // ── Remove item ──
    function checkoutRemoveItem(id) {
      cartItems = cartItems.filter(i => i.id !== id);

      // Animate row out then remove it
      const row = document.getElementById(`checkout-item-${id}`);
      if (row) {
        row.style.transition = "opacity 0.2s, transform 0.2s";
        row.style.opacity    = "0";
        row.style.transform  = "translateX(12px)";
        setTimeout(() => {
          row.remove();
          if (cartItems.length === 0) {
            document.getElementById("emptyCartState").style.display = "block";
            document.getElementById("checkoutWrap").style.display  = "none";
          }
        }, 210);
      }

      saveAndRefresh();
    }

    // ── Persist to localStorage and refresh totals ──
    function saveAndRefresh() {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Recalculate discount against new subtotal
      const code = document.getElementById("promoInput").value.trim().toUpperCase();
      if (PROMOS[code]) {
        discountAmt = Math.round(getSubtotal() * PROMOS[code]);
        document.getElementById("promoMsg").textContent =
          `✓ "${code}" applied — ${Math.round(PROMOS[code]*100)}% off (–Rs. ${discountAmt.toLocaleString()})`;
      }

      updateTotals();
    }

    // ── Totals ──
    function getSubtotal() {
      return cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    }

    function getTotalQty() {
      return cartItems.reduce((sum, i) => sum + i.quantity, 0);
    }

    function updateTotals() {
      const sub   = getSubtotal();
      const total = sub + shippingCost - discountAmt;

      document.getElementById("itemCountLabel").textContent  = getTotalQty();
      document.getElementById("summarySubtotal").textContent = `Rs. ${sub.toLocaleString()}`;
      document.getElementById("summaryTotal").textContent    = `Rs. ${Math.max(0, total).toLocaleString()}`;

      // Keep mobile sticky bar in sync
      const mobileAmt = document.getElementById("mobileCtaTotal");
      if (mobileAmt) mobileAmt.textContent = `Rs. ${Math.max(0, total).toLocaleString()}`;

      // Shipping
      const shipEl = document.getElementById("summaryShipping");
      if (shippingCost === 0) {
        shipEl.textContent  = "Free";
        shipEl.className    = "gl-shipping-free";
      } else {
        shipEl.textContent  = `Rs. ${shippingCost.toLocaleString()}`;
        shipEl.className    = "";
      }

      // Discount
      const discRow = document.getElementById("discountRow");
      if (discountAmt > 0) {
        discRow.style.display = "flex";
        document.getElementById("summaryDiscount").textContent = `– Rs. ${discountAmt.toLocaleString()}`;
      } else {
        discRow.style.display = "none";
      }
    }

    // ── Delivery selection ──
    function selectDelivery(type) {
      document.getElementById("deliveryStandard").classList.remove("selected");
      document.getElementById("deliveryExpress").classList.remove("selected");

      if (type === "express") {
        document.getElementById("deliveryExpress").classList.add("selected");
        shippingCost = 200;
      } else {
        document.getElementById("deliveryStandard").classList.add("selected");
        shippingCost = 0;
      }
      updateTotals();
    }

    // ── Payment selection ──
    function selectPayment(method) {
      ["payCOD", "payJazz", "payEasy"].forEach(id =>
        document.getElementById(id).classList.remove("selected")
      );

      selectedPay = method;
      const onlineFields = document.getElementById("onlinePayFields");

      if (method === "cod") {
        document.getElementById("payCOD").classList.add("selected");
        onlineFields.style.display = "none";
      } else if (method === "jazzcash") {
        document.getElementById("payJazz").classList.add("selected");
        document.getElementById("onlinePayLabel").textContent = "JazzCash Account Number";
        document.getElementById("onlinePayNum").textContent   = "0300-0000000";
        onlineFields.style.display = "block";
      } else if (method === "easypaisa") {
        document.getElementById("payEasy").classList.add("selected");
        document.getElementById("onlinePayLabel").textContent = "Easypaisa Account Number";
        document.getElementById("onlinePayNum").textContent   = "0300-0000000";
        onlineFields.style.display = "block";
      }
    }

    // ── Promo code ──
    function applyPromo() {
      const code    = document.getElementById("promoInput").value.trim().toUpperCase();
      const msgEl   = document.getElementById("promoMsg");
      const sub     = getSubtotal();

      if (!code) { msgEl.textContent = ""; return; }

      if (PROMOS[code]) {
        discountAmt = Math.round(sub * PROMOS[code]);
        msgEl.className   = "gl-promo-msg success";
        msgEl.textContent = `✓ "${code}" applied — ${Math.round(PROMOS[code]*100)}% off (–Rs. ${discountAmt.toLocaleString()})`;
        updateTotals();
      } else {
        discountAmt = 0;
        msgEl.className   = "gl-promo-msg error";
        msgEl.textContent = `"${code}" is not a valid promo code.`;
        updateTotals();
      }
    }

    // ── Summary toggle (mobile) ──
    function toggleSummary() {
      summaryOpen = !summaryOpen;
      document.getElementById("summaryBody").style.display = summaryOpen ? "block" : "none";
      document.getElementById("summaryToggleIcon").className = summaryOpen ? "bi bi-chevron-up" : "bi bi-chevron-down";
    }

    // ── Validation ──
    function validateForm() {
      let valid = true;

      const required = [
        { id: "firstName", test: v => v.trim().length >= 2 },
        { id: "lastName",  test: v => v.trim().length >= 2 },
        { id: "phone",     test: v => /^[0-9+\s\-]{10,15}$/.test(v.trim()) },
        { id: "address",   test: v => v.trim().length >= 5 },
        { id: "city",      test: v => v !== "" },
      ];

      required.forEach(({ id, test }) => {
        const el  = document.getElementById(id);
        const val = el.value;
        if (!test(val)) {
          el.classList.add("error");
          valid = false;
        } else {
          el.classList.remove("error");
        }
      });

      return valid;
    }

    // Remove error on input
    ["firstName","lastName","phone","address","city"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", () => el.classList.remove("error"));
    });

    // ── Place Order ──
    function placeOrder() {
      if (!validateForm()) {
        // Scroll to first error
        const firstError = document.querySelector("input.error, select.error");
        if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      const btn       = document.getElementById("placeOrderBtn");
      const mobileBtn = document.getElementById("mobileCtaBtn");

      [btn, mobileBtn].forEach(b => { if (b) { b.disabled = true; b.textContent = "Placing Order…"; } });

      // Simulate order processing
      setTimeout(() => {
        const orderId = "GL-" + Math.floor(100000 + Math.random() * 900000);
        document.getElementById("successOrderId").textContent = `Order #${orderId}`;

        // Clear cart from localStorage
        localStorage.removeItem("cartItems");

        // Show success overlay
        document.getElementById("successOverlay").classList.add("show");

        [btn, mobileBtn].forEach(b => { if (b) { b.disabled = false; b.textContent = "Place Order"; } });
      }, 1400);
    }
 