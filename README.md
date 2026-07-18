# VectorShift Frontend Technical Assessment

This project demonstrates a node-based pipeline editor built with React Flow and FastAPI as part of the VectorShift Frontend Technical Assessment. The application features reusable node abstractions, dynamic variable parsing, backend graph analysis, and DAG validation.

---

## Features

### Part 1: Node Abstraction

- Created a reusable `BaseNode` component to eliminate duplicated code.
- Common node layout, styling, and handle rendering are managed through the abstraction.
- Implemented the following nodes:
  - Input
  - Output
  - LLM
  - Text
- Added five additional custom nodes:
  - API
  - Email
  - Database
  - Image
  - Condition

This approach makes it easy to create new node types with minimal code.

---

### Part 2: Styling

- Implemented a consistent dark-themed UI.
- Styled all nodes with rounded corners and unified spacing.
- Added hover animations for toolbar buttons.
- Improved overall layout and visual consistency.

---

### Part 3: Text Node Logic

Implemented both required features:

#### Dynamic Node Resizing

- The Text node automatically adjusts its width and height based on the content entered by the user.

#### Dynamic Variable Handles

- Detects valid JavaScript variables enclosed within double curly braces.

Example:

```
{{input}}
{{email}}
{{userName}}
```

- For every detected variable, a corresponding input handle is dynamically created on the left side of the Text node.

---

### Part 4: Backend Integration

Integrated the frontend with a FastAPI backend.

When the **Submit** button is clicked:

- Sends all nodes and edges to the backend.
- Calculates:
  - Total number of nodes
  - Total number of edges
  - Whether the graph is a Directed Acyclic Graph (DAG) using NetworkX.
- Displays the results in a user-friendly popup.

Example response:

```json
{
  "num_nodes": 6,
  "num_edges": 5,
  "is_dag": true
}
```

---

## Tech Stack

### Frontend

- React
- React Flow
- Zustand
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Pydantic
- NetworkX

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs on:

```
http://localhost:8000
```

---

## Project Structure

```
frontend/
│
├── src/
│   ├── nodes/
│   │   ├── BaseNode.js
│   │   ├── inputNode.js
│   │   ├── outputNode.js
│   │   ├── llmNode.js
│   │   ├── textNode.js
│   │   ├── apiNode.js
│   │   ├── conditionNode.js
│   │   ├── databaseNode.js
│   │   ├── emailNode.js
│   │   └── imageNode.js
│   │
│   ├── App.js
│   ├── draggableNode.js
│   ├── index.js
│   └── store.js
│   ├── toolbar.js
│   ├── submit.js
│   ├── ui.js
│
backend/
│
└── main.py
```

---

## Demo

A screen recording demonstrating:

- Node abstraction
- UI design
- Dynamic Text node resizing
- Dynamic variable handles
- Backend integration
- DAG validation

is included with the submission.

---

## Author

**Aanjali Kumari**
