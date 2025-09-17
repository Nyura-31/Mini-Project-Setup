# Mini Project 1
## Assignment | Mini Project Setup – I

### 1. **Project Title & Short Description**

* Name of project: *Fullstack Docker App*
* One-line description: A simple fullstack application with React frontend, Express backend, and PostgreSQL database, all running with Docker.

---

### 2. **Folder Structure**

Show the project layout so reviewers can see how it’s organized:

```
fullstack-docker-app/
├── backend/        # Express + Node.js server
├── frontend/       # React app
├── db-data/        # Database volume (Postgres data)
├── docker-compose.yml
├── .env
└── README.md
```

---

### 3. **Tech Stack**

* **Frontend**: React
* **Backend**: Node.js + Express
* **Database**: PostgreSQL
* **Containerization**: Docker + Docker Compose

---

### 4. **Setup Instructions**

Explain how to run it (step by step):

1. Clone repo
2. Install dependencies (`npm install` in both `frontend` and `backend`)
3. Start containers (`docker-compose up -d`)
4. Visit:

   * React app → `http://localhost:3000`
   * Backend API → `http://localhost:5000/api`

---

### 5. **How It Works**

* React fetches from `/api` endpoint (proxy to backend).
* Express backend connects to PostgreSQL and returns server time.
* Shows message: *“Hello from Express + Postgres! Server time: …”*

---

### 6. **Environment Variables**

Mention `.env` file (currently empty, but can later hold DB credentials, etc.).

---

### 7. **Future Improvements** (optional but nice)

* Add user authentication
* Add CRUD endpoints for data
* Dockerize frontend & backend fully
* Deploy on cloud (Heroku/Render/DigitalOcean)


---

Here’s a **README** written in the same style and structure you showed, but tailored for **Mini Project Setup – II**:

---

# Mini Project 2 – Full-Stack App Dockerization

## Assignment | Mini Project Setup – I

**Objective:**
Set up a full-stack application with a React frontend, Express backend, and PostgreSQL database using Docker Compose.

**Steps Completed:**

1. **Project Structure**

```
root/
├─ backend/
│  ├─ Dockerfile
│  ├─ package.json
│  └─ src/
├─ frontend/
│  ├─ Dockerfile
│  ├─ package.json
│  └─ src/
├─ docker-compose.yml
└─ .env
```

2. **Backend Dockerfile**

* Based on Node.js image
* Copies source code
* Installs dependencies
* Runs backend server

3. **Frontend Dockerfile**

* Based on Node.js image
* Copies source code
* Installs dependencies
* Builds React app
* Serves using `serve` package

4. **docker-compose.yml**

* Services: `db`, `backend`, `frontend`
* Database container with PostgreSQL image and environment variables from `.env`
* Networking between containers using default bridge network
* Mounted volumes for persistent database storage

5. **Environment Variables (.env)**

```
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=mydatabase
DB_PORT=5432
BACKEND_PORT=5000
FRONTEND_PORT=3000
```

6. **Running the app**

```
docker-compose up --build
```

---

## Assignment | Mini Project Setup – II

**Objective:**
Debug and finalize the Docker setup, ensuring all containers work correctly together and the full-stack app runs without errors.

**Steps Completed:**

1. **Debugging Database Issues**

* Resolved `POSTGRES_PASSWORD` missing error by updating `.env`
* Verified PostgreSQL initialized properly with user and database

2. **Backend Configuration**

* Connected Express backend to PostgreSQL using `pg` package
* Verified database connection in logs: `✅ Connected to Postgres`
* Added routes and tested API locally

3. **Frontend Configuration**

* Created `src/index.js` for React entry point
* Built React frontend successfully inside Docker
* Served frontend using `serve` package

4. **Container Logs & Verification**

* Used `docker-compose logs backend` and `docker-compose logs frontend` to confirm proper startup
* Backend confirmed database connection
* Frontend confirmed successful build and serving

5. **Networking and Environment Variables**

* Backend connects to database using `db` as hostname
* Ports mapped correctly:

  * Backend → `http://localhost:5000`
  * Frontend → `http://localhost:3000`

6. **Final Testing**

* Backend API endpoints reachable
* Frontend app loads successfully in browser
* CRUD operations tested and confirmed functional with PostgreSQL

---

**Next Steps / Submission:**

* Capture screenshots of:

  * Running containers (`docker ps`)
  * Logs of backend and frontend
  * Application running in browser
* Push the project to GitHub
* Submit repository link along with screenshots in a PDF/DOC

---
