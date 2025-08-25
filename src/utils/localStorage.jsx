
const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "e@e.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve the issue causing login failures for some users",
        "date": "2025-08-20",
        "category": "Bug Fix",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write unit tests",
        "description": "Add unit tests for authentication module",
        "date": "2025-08-21",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update docs",
        "description": "Document the new API endpoints",
        "date": "2025-08-22",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Aryan",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Create dashboard UI",
        "description": "Design and build dashboard components in React",
        "date": "2025-08-20",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "API integration",
        "description": "Integrate dashboard with backend APIs",
        "date": "2025-08-23",
        "category": "Integration",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Fix CSS issues",
        "description": "Resolve styling problems on mobile view",
        "date": "2025-08-21",
        "category": "UI/UX",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Database backup",
        "description": "Perform full database backup",
        "date": "2025-08-19",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Optimize queries",
        "description": "Improve performance of order queries",
        "date": "2025-08-22",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Migrate tables",
        "description": "Migrate old schema to new normalized tables",
        "date": "2025-08-24",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Bhumi",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Customer feedback",
        "description": "Analyze customer feedback from surveys",
        "date": "2025-08-18",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Marketing strategy",
        "description": "Draft campaign strategy for Q4",
        "date": "2025-08-25",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social media posts",
        "description": "Prepare posts for upcoming product launch",
        "date": "2025-08-21",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Pandit",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Security audit",
        "description": "Perform application security audit",
        "date": "2025-08-19",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update dependencies",
        "description": "Upgrade outdated npm packages",
        "date": "2025-08-20",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Deploy hotfix",
        "description": "Deploy urgent hotfix to production",
        "date": "2025-08-23",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];


const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees' , JSON.stringify(employees))
  localStorage.setItem('admin' , JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}