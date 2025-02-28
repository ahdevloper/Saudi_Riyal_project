# 📌 مكتبة رمز الريال السعودي

🚀 **مكتبة مرنة وسهلة الاستخدام لعرض رمز الريال السعودي (`SAR`) في صفحات الويب مع خيارات تخصيص متقدمة!**

---

## 📖 كيفية الاستخدام

### 1️⃣ تضمين المكتبة في مشروعك
أضف ملف `ryal-symbol.js` إلى مشروعك:
```html
<script src="library/ryal-symbol.js"></script>
```

### 2️⃣ إضافة عنصر HTML لعرض الرمز
```html
<span id="ryal-symbol"></span>
```

### 3️⃣ تضمين ملف التنسيق (اختياري)
للحصول على تصميم أفضل، أضف `style.css`:
```html
<link rel="stylesheet" href="test/style.css">
```

### 4️⃣ استدعاء وظيفة `createRyalSymbol`
قم بإنشاء رمز الريال السعودي باستخدام:
```javascript
createRyalSymbol("ryal-symbol", {
    type: "new",
    color: "green",
    fontSize: "2em",
    animation: "rotate"
});
```

---

## ⚙️ خيارات التخصيص

| **الخاصية**  | **الوصف**  | **القيم المتاحة**  |
|-------------|------------|------------------|
| `type` | تحديد نوع الرمز | `"new"` (الرمز الجديد) أو `"old"` (الرمز القديم `SAR`) |
| `color` | لون الرمز | أي قيمة ألوان صالحة (مثل `"green"`, `"#FF5733"`) |
| `fontSize` | حجم الخط للرمز | أي حجم خط صالح (`"2em"`, `"16px"`, `"larger"`) |
| `animation` | حركة الرمز | `"rotate"`, `"pulse"`, `"blink"`, `"shake"`, `"fade"` |
| `effect` | تأثير بصري إضافي | `"pulse"`, `"blink"`, `"shake"`, `"fade"` |
| `element` | نوع العنصر الحاوي للرمز | `"span"`, `"button"`, `"div"` |
| `className` | فئة CSS مخصصة | اسم الفئة CSS |
| `shadow` | تأثير الظل | مثال: `"0 4px 8px rgba(0, 0, 0, 0.2)"` |

---

## 🛠️ أمثلة عملية

### 🔹 رمز باللون الأخضر وحجم 2em مع دوران وتأثير النبض
```javascript
createRyalSymbol("ryal-symbol", {
    type: "new",
    color: "green",
    fontSize: "2em",
    animation: "rotate",
    effect: "pulse"
});
```

### 🔹 رمز قديم (SAR) باللون الأزرق
```javascript
createRyalSymbol("ryal-symbol", {
    type: "old",
    color: "blue"
});
```

### 🔹 رمز داخل زر مع فئة CSS مخصصة
```javascript
createRyalSymbol("ryal-symbol", {
    type: "new",
    element: "button",
    className: "custom-style"
});
```

### 🔹 رمز مع تأثير الظل
```javascript
createRyalSymbol("ryal-symbol", {
    type: "new",
    shadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
});
```

---

## ✨ قائمة التأثيرات المدعومة

| **التأثير** | **الوصف**  |
|------------|------------|
| `pulse` | تأثير النبض |
| `blink` | تأثير الوميض |
| `shake` | تأثير الاهتزاز |
| `fade` | تأثير التلاشي |

---

## 📢 ملاحظات هامة
✔ **متوافق مع جميع المتصفحات الحديثة.**  
✔ **يمكن دمجه بسهولة مع مشاريع HTML و JavaScript.**  
✔ **مصمم ليكون خفيف الوزن وسريع التحميل.**  

🔗 **للمزيد من التفاصيل، راجع كود المصدر!** 🚀
