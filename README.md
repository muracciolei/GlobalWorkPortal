# GlobalWorkPortal
Full-stack HR Management Platform with International Payroll - React + NestJS + PostgreSQL + Docker

## Overview

GlobalWork Portal is a modern, full-stack HR Management platform designed for international companies. Inspired by Safeguard Global, it provides comprehensive employee management, international payroll processing, and compliance tracking.

### Key Features

✅ **HR Management**
- Employee CRUD operations
- Contract status tracking
- Multi-country employee database
- Real-time dashboards

✅ **International Payroll**
- Multi-currency payroll processing
- Country-specific compliance
- Payment status tracking
- Automated payroll scheduling

✅ **Security**
- JWT-based authentication
- Role-based access control
- Encrypted sensitive data
- CORS protection

✅ **Modern Stack**
- React 18 Frontend with TypeScript
- NestJS Backend
- PostgreSQL Database
- Docker containerization
- Swagger API documentation

---

## Tech Stack

### Frontend
- **React** 18.2 - UI framework
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Hook Form + Zod** - Form validation
- **Recharts** - Data visualization
- **Tailwind CSS** - Styling
- **Zustand** - State management

### Backend
- **NestJS** 10 - Node.js framework
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Passport** - Security
- **Swagger** - API docs
- **Jest** - Testing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Orchestration
- **Multi-stage builds** - Optimized images

---

## Project Structure

```
GlobalWorkPortal/
├── backend/
│   ├── src/
│   │   ├── auth/          # Authentication module
│   │   ├── employee/      # Employee management
│   │   ├── payroll/       # Payroll processing
│   │   ├── country/       # Country management
│   │   └── main.ts        # Application entry
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── context/       # Auth context
│   │   └── App.tsx
│   └── package.json
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 15 (or use Docker)

### Local Development

1. **Clone & Setup**
```bash
git clone https://github.com/yourusername/GlobalWorkPortal.git
cd GlobalWorkPortal
cp .env.example .env
```

2. **Install Dependencies**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. **Start Database (Optional - use Docker Compose instead)**
```bash
docker run --name globalwork-db -e POSTGRES_PASSWORD=globalwork123 -p 5432:5432 postgres:15
```

4. **Run Backend**
```bash
cd backend
npm run start:dev
# API running on http://localhost:3001
# Swagger docs: http://localhost:3001/api/docs
```

5. **Run Frontend**
```bash
cd frontend
npm start
# App running on http://localhost:3000
```

---

## Docker Setup

### Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

This starts:
- Frontend on http://localhost:3000
- Backend API on http://localhost:3001
- PostgreSQL on localhost:5432

### Stop Services
```bash
docker-compose down
```

---

## API Documentation

Swagger API documentation available at: **http://localhost:3001/api/docs**

### Key Endpoints

#### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login
- `POST /auth/refresh` - Refresh token

#### Employees
- `GET /employees` - List all employees
- `GET /employees/:id` - Get employee details
- `POST /employees` - Create employee
- `PUT /employees/:id` - Update employee
- `DELETE /employees/:id` - Delete employee

#### Payroll
- `GET /payrolls` - List payroll records
- `GET /payrolls/:id` - Get payroll details
- `POST /payrolls` - Create payroll
- `PUT /payrolls/:id` - Update payroll
- `DELETE /payrolls/:id` - Delete payroll

#### Countries
- `GET /countries` - List all countries
- `POST /countries` - Add country
- `PUT /countries/:id` - Update country
- `DELETE /countries/:id` - Delete country

---

## Authentication

The app uses JWT (JSON Web Tokens) for authentication.

1. Register/Login to get `access_token`
2. Include token in Authorization header:
```
Authorization: Bearer <your_token>
```

3. Token expires in 7 days by default (configurable via .env)

---

## Environment Variables

Create `.env` file based on `.env.example`:

```env
NODE_ENV=development
API_PORT=3001

# Database
DATABASE_URL=postgresql://globalwork:globalwork123@localhost:5432/globalwork_db

# JWT
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRATION=7d

# Frontend
FRONTEND_URL=http://localhost:3000

# Redis (optional)
REDIS_URL=redis://localhost:6379
```

---

## Future Enhancements

- ✨ Advanced analytics dashboard
- 📊 CSV/Excel export
- 📱 Mobile app (React Native)
- 🔔 Email notifications
- 📈 Tax compliance automation
- 🌍 Multi-language support
- 🎯 Performance optimization
- 📚 Comprehensive test coverage

---

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

MIT License - see LICENSE file for details

---

## Support

For issues, questions, or suggestions:
- Open an [Issue](https://github.com/yourusername/GlobalWorkPortal/issues)
- Contact: support@globalworkportal.com

---

**Made with ❤️ by the GlobalWork Team**
