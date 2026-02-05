# 📝 To-Do App (React)

A simple and interactive **To-Do application built with React**.
This app allows users to **add, edit, delete, and mark tasks as completed** using a clean Bootstrap-based UI.

---

## 🚀 Features

- ➕ Add new to-do items  
- ✏️ Edit existing items  
- 💾 Save updated items  
- 🗑️ Delete items  
- ✅ Mark items as completed  
- 🔄 Toggle between **Add** and **Edit (Save)** modes  
- 📱 Responsive UI using Bootstrap  

---

## 🛠️ Built With

- React (Functional Components & Hooks)
- Bootstrap 5
- Bootstrap Icons
- CSS

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   └── Content.jsx
│
├── App.js
├── index.js
└── index.css
```

---

## ⚙️ How It Works

- State is managed in the **Content** component.
- The **Header** component receives state and handlers via props.
- Clicking **Edit** fills the input and switches the button to **Save**.
- Saving updates the item and resets the form.

---

## ▶️ Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/todo-app.git
```

### Install dependencies
```bash
npm install
```

### Run the app
```bash
npm start
```

The app runs at `http://localhost:3000`

---

## 🧪 Example To-Do Item

```js
{
  id: 1,
  label: "Learn React",
  checked: false
}
```

---

## 🧠 Concepts Practiced

- React Hooks (`useState`)
- Props and state management
- Conditional rendering
- Array updates with `map` and `filter`
- Controlled components

---

## ✨ Future Improvements

- LocalStorage persistence
- Task priorities
- Due dates
- Animations

---

## 👩‍💻 Author

**Rampriya Karthick**
Frontend Developer
