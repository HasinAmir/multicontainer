# 📝 Todo API — Multi-Container Application

A simple REST API for managing todos, built with **Node.js**, **Express**, and **MongoDB** — containerized with **Docker Compose**.

---

## 🚀 Tech Stack

- **Node.js** + **Express** — API server
- **MongoDB** — database
- **Mongoose** — ODM for MongoDB
- **Docker & Docker Compose** — containerization
- **Nodemon** — hot reload during development

---

## 📁 Project Structure

```
todo-api/
├── src/
│   ├── index.js          # Entry point
│   ├── routes/
│   │   └── todos.js      # Todo routes
│   └── models/
│       └── Todo.js       # Todo schema
├── Dockerfile            # API container recipe
├── docker-compose.yml    # Multi-container setup
└── .env                  # Environment variables
```

---

## ⚙️ Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

That's it. You don't need Node.js or MongoDB installed locally.

### Run the app

```bash
git clone https://github.com/HasinAmir/multicontainer.git
cd multicontainer
docker compose up --build
```

The API will be available at **http://localhost:3000**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| POST | `/todos` | Create a new todo |
| GET | `/todos/:id` | Get a single todo |
| PUT | `/todos/:id` | Update a todo |
| DELETE | `/todos/:id` | Delete a todo |

### Example Requests

**Create a todo**
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Docker"}'
```

**Get all todos**
```bash
curl http://localhost:3000/todos
```

**Update a todo**
```bash
curl -X PUT http://localhost:3000/todos/<id> \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

**Delete a todo**
```bash
curl -X DELETE http://localhost:3000/todos/<id>
```

---

## 🐳 Docker Setup

This project uses two containers managed by Docker Compose:

| Container | Description |
|-----------|-------------|
| `api` | Node.js Express server on port 3000 |
| `mongo` | MongoDB database on port 27017 |

Data is persisted via a Docker named volume (`mongo_data`), so your todos survive container restarts.

### Useful commands

```bash
docker compose up --build   # Start all containers
docker compose down         # Stop all containers
docker compose logs         # View logs
```

---

## 🌱 Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `MONGO_URI` | `mongodb://mongo:27017/tododb` | MongoDB connection string |

---

## 📌 Roadmap

- [x] Basic CRUD API
- [x] MongoDB integration
- [x] Docker Compose setup
- [ ] Remote server deployment (DigitalOcean / AWS)
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Nginx reverse proxy

---

## 👤 Author

**Hasin Amir**  
[GitHub](https://github.com/HasinAmir)
https://roadmap.sh/projects/multi-container-service
