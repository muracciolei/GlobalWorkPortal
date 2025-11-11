# GlobalWork Portal - Development Guide

## Project Overview

GlobalWork Portal è un progetto full-stack completo di gestione HR con payroll internazionale, ispirato a Safeguard Global.

### Stack Creato
- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: NestJS + TypeScript + PostgreSQL
- **DevOps**: Docker Compose
- **State Management**: Zustand
- **API Client**: Axios
- **Form Validation**: React Hook Form + Zod
- **Charts**: Recharts

---

## File Creati

### Backend (NestJS)

#### Core
- `backend/package.json` - NestJS dependencies configurate
- `backend/Dockerfile` - Multi-stage build optimizzato
- `backend/src/main.ts` - Entry point con Swagger, CORS, validazione globale
- `backend/src/app.module.ts` - Root module con TypeORM, JWT, Passport, Config

#### Auth Module
- `backend/src/auth/auth.module.ts` - JWT + Passport integration
- `backend/src/auth/auth.service.ts` - Register, Login, Token validation
- `backend/src/auth/auth.controller.ts` - Auth endpoints
- `backend/src/auth/jwt.strategy.ts` - JWT strategy (da creare)
- `backend/src/auth/entities/user.entity.ts` - User database entity (da creare)
- `backend/src/auth/dto/register.dto.ts` - Register DTO (da creare)
- `backend/src/auth/dto/login.dto.ts` - Login DTO (da creare)

#### Employee Module
- `backend/src/employee/employee.module.ts` - (da creare)
- `backend/src/employee/employee.service.ts` - CRUD operations
- `backend/src/employee/employee.controller.ts` - REST endpoints
- `backend/src/employee/entities/employee.entity.ts` - Employee entity
- `backend/src/employee/dto/create-employee.dto.ts` - Create DTO
- `backend/src/employee/dto/update-employee.dto.ts` - Update DTO

#### Payroll Module
- `backend/src/payroll/payroll.module.ts` - (da creare)
- `backend/src/payroll/payroll.service.ts` - Payroll CRUD
- `backend/src/payroll/payroll.controller.ts` - Payroll endpoints
- `backend/src/payroll/entities/payroll.entity.ts` - Payroll entity

#### Country Module
- `backend/src/country/country.module.ts` - (da creare)
- `backend/src/country/country.service.ts` - Country CRUD
- `backend/src/country/country.controller.ts` - Country endpoints

---

### Frontend (React)

#### Core
- `frontend/package.json` - React + TypeScript + Tailwind
- `frontend/src/App.tsx` - Root component con routing

#### Components
- `frontend/src/components/Navbar.tsx` - Header con logout
- `frontend/src/components/Sidebar.tsx` - Navigation menu
- `frontend/src/components/EmployeeCard.tsx` - Employee card display
- `frontend/src/components/PayrollCard.tsx` - (da creare) Payroll card
- `frontend/src/components/DashboardWidgets.tsx` - (da creare) Dashboard stats

#### Pages
- `frontend/src/pages/LoginPage.tsx` - (da creare) Login form
- `frontend/src/pages/RegisterPage.tsx` - (da creare) Registration form
- `frontend/src/pages/DashboardPage.tsx` - (da creare) Main dashboard
- `frontend/src/pages/EmployeeListPage.tsx` - (da creare) Employee management
- `frontend/src/pages/EmployeeDetailPage.tsx` - (da creare) Single employee
- `frontend/src/pages/PayrollPage.tsx` - (da creare) Payroll management

#### Services & API
- `frontend/src/services/api.ts` - Axios instance con interceptors
  - authAPI: register, login, refresh
  - employeeAPI: CRUD operations
  - payrollAPI: CRUD operations
  - countryAPI: read operations

#### Store (State Management)
- `frontend/src/store/auth.store.ts` - Zustand auth store
  - user state
  - token management
  - register, login, logout functions

#### Utilities
- `frontend/src/utils/validators.ts` - (da creare) Form validators
- `frontend/src/utils/formatters.ts` - (da creare) Data formatting
- `frontend/src/utils/constants.ts` - (da creare) App constants

#### Types
- `frontend/src/types/Employee.ts` - (da creare) Employee interface
- `frontend/src/types/Payroll.ts` - (da creare) Payroll interface
- `frontend/src/types/Country.ts` - (da creare) Country interface

#### Hooks
- `frontend/src/hooks/useFetch.ts` - (da creare) Data fetching hook
- `frontend/src/hooks/useForm.ts` - (da creare) Form handling hook

---

### Configuration Files

- `docker-compose.yml` - PostgreSQL, Backend, Frontend services
- `.env.example` - Environment variables template
- `.gitignore` - Node.js template
- `README.md` - Project documentation (272 lines)
- `DEVELOPMENT.md` - This file

---

## API Endpoints Reference

### Authentication
```
POST /auth/register
POST /auth/login
POST /auth/refresh
```

### Employees
```
GET    /employees
GET    /employees/:id
POST   /employees
PUT    /employees/:id
DELETE /employees/:id
```

### Payroll
```
GET    /payrolls
GET    /payrolls/:id
POST   /payrolls
PUT    /payrolls/:id
DELETE /payrolls/:id
```

### Countries
```
GET  /countries
POST /countries
PUT  /countries/:id
DELETE /countries/:id
```

---

## Next Steps to Complete

### Backend Priority
1. Create DTO files (RegisterDto, LoginDto, CreateEmployeeDto, etc.)
2. Create User entity
3. Create Employee, Payroll, Country entities
4. Complete auth controllers
5. Complete employee, payroll, country modules
6. Add database seeders
7. Add error handling filters
8. Add request/response interceptors
9. Add database migrations
10. Add unit tests

### Frontend Priority
1. Create all page components (Login, Dashboard, Employees, Payroll)
2. Create PayrollCard component
3. Create DashboardWidgets component
4. Create utility functions (validators, formatters)
5. Create TypeScript interfaces
6. Create custom hooks (useFetch, useForm)
7. Add form validation
8. Add loading states
9. Add error handling
10. Add tests with React Testing Library

---

## Running the Project

### With Docker Compose
```bash
docker-compose up -d
```

### Local Development
```bash
# Backend
cd backend
npm install
npm run start:dev

# Frontend
cd frontend
npm install
npm start
```

---

## Commit History

Tutti i file sono stati commitati su GitHub:
- Initial structure con docker-compose.yml
- Backend configuration (app.module, auth module)
- Frontend configuration (App.tsx, components)
- Services API con Axios
- Zustand auth store

---

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

## License

MIT
