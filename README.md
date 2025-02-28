# مكتبة رمز الريال السعودي

هذه المكتبة تسهل استخدام رمز الريال السعودي في مشاريع الويب الخاصة بك.

## كيفية الاستخدام

1.  قم بتضمين ملف `ryal-symbol.js` في مشروعك:

    ```html
    <script src="library/ryal-symbol.js"></script>
    ```

2.  أضف عنصر HTML حيث تريد عرض رمز الريال:

    ```html
    <span id="ryal-symbol"></span>
    ```

3.  استخدم وظيفة `createRyalSymbol` لتخصيص الرمز:

    ```javascript
    createRyalSymbol("ryal-symbol", {
        color: "green",
        fontSize: "2em",
        animation: "rotate"
    });
    ```

## الخيارات

*   `type`: نوع الرمز ("new" للرمز الجديد، "old" للرمز القديم SAR).
*   `color`: لون الرمز.
*   `fontSize`: حجم الخط للرمز.
*   `animation`: اسم الحركة (مثل `rotate`).
*   `effect`: اسم التأثير (مثل `pulse`, `blink`, `shake`).
*   `element`: نوع العنصر الذي سيحتوي على الرمز (مثل `span`, `button`, `div`).
*   `className`: اسم الفئة CSS المخصصة.
*   `shadow`: تأثير الظل على الرمز.

## أمثلة

*   **رمز باللون الأخضر وحجم 2em مع حركة دوران وتأثير النبض:**

    ```javascript
    createRyalSymbol("ryal-symbol", {
        type: "new",
        color: "green",
        fontSize: "2em",
        animation: "rotate",
        effect: "pulse"
    });
    ```

*   **رمز قديم (SAR) باللون الأزرق:**

    ```javascript
    createRyalSymbol("ryal-symbol", {
        type: "old",
        color: "blue"
    });
    ```

*   **رمز داخل زر مع فئة CSS مخصصة:**

    ```javascript
    createRyalSymbol("ryal-symbol", {
        type: "new",
        element: "button",
        className: "custom-style"
    });
    ```

*   **رمز مع تأثير الظل:**

    ```javascript
    createRyalSymbol("ryal-symbol", {
        type: "new",
        shadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
    });
    ```