function createRyalSymbol(containerId, options) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container not found: " + containerId);
        return;
    }

    let symbolElement = document.createElement("span"); // العنصر الافتراضي هو span
    if (options && options.element) {
        symbolElement = document.createElement(options.element);
    }

    symbolElement.classList.add("ryal-symbol"); // إضافة فئة CSS

    if (options && options.className) {
        symbolElement.classList.add(options.className);
    }

    let svgData = "";
    if (options && options.type === "old") {
        svgData = `<span style="font-size:1em">SAR</span>`; // رمز الريال القديم
    } else {
        svgData = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39">
  <defs>
    <style>
      .cls-1 {
        fill: #231f20;
      }
    </style>
  </defs>
  <path class="cls-1" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"/>
  <path class="cls-1" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
</svg>`; // رمز الريال الجديد
    }

    symbolElement.innerHTML = svgData;

    // تخصيص الخيارات
    if (options) {
        if (options.color) {
            symbolElement.querySelector(".cls-1").style.fill = options.color;
        }
        if (options.fontSize) {
            symbolElement.style.fontSize = options.fontSize;
        }
        if (options.animation) {
            symbolElement.classList.add(options.animation);
        }
        if (options.effect) {
            symbolElement.classList.add(options.effect);
        }
        if (options.shadow) {
            symbolElement.style.boxShadow = options.shadow;
        }
    }

    container.appendChild(symbolElement);
}

// مثال للاستخدام:
document.addEventListener("DOMContentLoaded", function() {
    createRyalSymbol("ryal-symbol-1", {
        type: "new",
        color: "green",
        fontSize: "2em",
        animation: "rotate",
        effect: "pulse",
        element: "button",
        className: "custom-style",
        shadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
    });
});