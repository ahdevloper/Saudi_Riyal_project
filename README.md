# 📌 Saudi Riyal Symbol Library

🚀 **A flexible and easy-to-use library for displaying the Saudi Riyal symbol (`SAR`) in web pages with advanced customization options!**

---

## 📖 How to Use

### 1️⃣ Include the library in your project
Add the `ryal-symbol.js` file to your project:
```html
<script src="library/ryal-symbol.js"></script>
```

### 2️⃣ Add an HTML element to display the symbol
```html
<span id="ryal-symbol"></span>
```

### 3️⃣ Include the stylesheet (optional)
For a better design, add `style.css`:
```html
<link rel="stylesheet" href="test/style.css">
```

### 4️⃣ Call the `createRyalSymbol` function
Create the Saudi Riyal symbol using:
```javascript
createRyalSymbol("ryal-symbol", {
    type: "new",
    color: "green",
    fontSize: "2em",
    animation: "rotate"
});
```

---

## ⚙️ Customization Options

| **Property**  | **Description**  | **Available Values**  |
|-------------|------------|------------------|
| `type` | Specifies the type of symbol | `"new"` (new symbol) or `"old"` (old symbol `SAR`) |
| `color` | Symbol color | Any valid color value (e.g., `"green"`, `"#FF5733"`) |
| `fontSize` | Symbol font size | Any valid font size (`"2em"`, `"16px"`, `"larger"`) |
| `animation` | Symbol animation | `"rotate"`, `"pulse"`, `"blink"`, `"shake"`, `"fade"` |
| `effect` | Additional visual effect | `"pulse"`, `"blink"`, `"shake"`, `"fade"` |
| `element` | Type of element containing the symbol | `"span"`, `"button"`, `"div"` |
| `className` | Custom CSS class | CSS class name |
| `shadow` | Shadow effect | Example: `"0 4px 8px rgba(0, 0, 0, 0.2)"` |

---

## 🛠️ Practical Examples

### 🔹 Symbol in green with a size of 2em with rotation and pulse effect
```javascript
createRyalSymbol("ryal-symbol", {
    type: "new",
    color: "green",
    fontSize: "2em",
    animation: "rotate",
    effect: "pulse"
});
```

### 🔹 Old symbol (SAR) in blue
```javascript
createRyalSymbol("ryal-symbol", {
    type: "old",
    color: "blue"
});
```

### 🔹 Symbol inside a button with a custom CSS class
```javascript
createRyalSymbol("ryal-symbol", {
    type: "new",
    element: "button",
    className: "custom-style"
});
```

### 🔹 Symbol with shadow effect
```javascript
createRyalSymbol("ryal-symbol", {
    type: "new",
    shadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
});
```

---

## ✨ List of Supported Effects

| **Effect** | **Description**  |
|------------|------------|
| `pulse` | Pulse effect |
| `blink` | Blink effect |
| `shake` | Shake effect |
| `fade` | Fade effect |

---

## 📢 Important Notes
✔ **Compatible with all modern browsers.**  
✔ **Easily integrated with HTML and JavaScript projects.**  
✔ **Designed to be lightweight and fast loading.**  

🔗 **For more details, see the source code!** 🚀
