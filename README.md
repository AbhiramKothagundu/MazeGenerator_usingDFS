# Maze Generator using DFS  

This project is a **random maze generator** implemented in JavaScript using the **Depth-First Search (DFS) algorithm**. It utilizes **p5.js** to visualize the process of maze generation, where the algorithm explores, carves out paths, and backtracks when needed.

## 🚀 Features  
- **Procedural Maze Generation** using DFS  
- **Dynamic Visualization** of visited and backtracked cells  
- **Real-time Animation** with intuitive color representation  
- **Built with p5.js**, a creative coding framework  

## 🛠️ How It Works  
1. The grid is initialized with all walls intact.  
2. The DFS algorithm selects a random unvisited neighbor, removes walls between them, and moves forward.  
3. If no unvisited neighbor exists, it backtracks using a stack.  
4. The process continues until all cells are visited, forming a complete maze.  

## 🎨 Visualization  
- **Blue Cells** → Visited cells  
- **Green Cell** → Currently active cell  
- **Red Cells** → Backtracking path  

## 📦 Installation & Usage  
1. Clone this repository:  
   ```sh
   git clone https://github.com/AbhiramKothagundu/MazeGenerator_usingDFS.git
   ```
2. Open `index.html` in a browser.  

## 📜 Dependencies  
- **p5.js** (included via CDN)

## 🎓 Credits & Inspiration  
This project was **inspired by Daniel Shiffman** from **The Coding Train** on YouTube.  
Check out his amazing tutorials: [The Coding Train](https://www.youtube.com/@TheCodingTrain)  
