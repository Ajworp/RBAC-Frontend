
# **Role-Based Access Control (RBAC) React App**

This React application demonstrates role-based access control, including **User Management** and **Role Management**. The app allows users to register, log in, and manage access levels (User or Admin), with features tailored to their role.

---

## **Table of Contents**
- [Features](#features)
- [How It Works](#how-it-works)
  - [Login and Registration](#login-and-registration)
  - [Navigation and Access](#navigation-and-access)
  - [User Management](#user-management)
  - [Role Management](#role-management)
  - [Logout](#logout)
- [Data Flow](#data-flow)
  - [Mock API Data](#mock-api-data)
  - [Local Storage](#local-storage)
- [Setup and Installation](#setup-and-installation)
- [Login Data](#For-login-data)
- [Usage Instructions](#usage-instructions)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)

---

## **Features**
- **Role-Based Access Control**: Permissions are granted based on roles (User/Admin).
- **User Management**:
  - View a list of users (name, status).
  - Admin users can activate or deactivate, delete other users.
- **Role Management**:
  - View roles and permissions.
  - Admin users can update permissions (Read, Write, Delete).
- **Mock API Integration**: Data is fetched from a JSON file stored in the public folder.
- **Local Storage**:
  - New users (registered or created by Admin) are stored in `localStorage`.
  - Session is managed using `localStorage`.
- **Logout**: Clears session data and redirects to the login page.

---

## **How It Works**

### **1. Login and Registration**
- **Login**:
  - Users log in with their email and password.
  - Credentials are validated using mock API data.
- **Registration**:
  - New users can register with email, username, and password.
  - Registered user data is saved in `localStorage`.

---

### **2. Navigation and Access**
- After login, users are redirected to the **User Management** page.
- The navbar updates to show:
  - **User Management**
  - **Role Management**
  - **Logout**
- Access to pages and actions is determined by the user's role:
  - **User Role**:
    - Can view a list of users (username, status).
    - Can view roles and permissions (Read, Write, Delete).
  - **Admin Role**:
    - Can activate or deactivate anddelete users.
    - Can update role permissions.

---

### **3. User Management**
- **User Role**:
  - Displays a table of users with the following columns:
    - Username
    - Status (Active/Inactive)
- **Admin Role**:
  - Displays a table of users with the following actions:
    - **Activate/Deactivate Button**: Changes the user’s status but it is temporary.
    - **Delete Button**: Removes the user but it is temporary delete.

---

### **4. Role Management**
- **User Role**:
  - Displays a table of roles and permissions (Read, Write, Delete).
- **Admin Role**:
  - Displays a table with options to update permissions for roles but it is temporary.

---

### **5. Logout**
- Clears all `localStorage` data.
- Redirects the user to the login page.

---

## **Data Flow**

### **1. Mock API Data**
- Initial data (users, roles, permissions) is stored in a JSON file under the `public` folder.
- Example: `public/mock-data/users.json`
  ```json
  [
    {
      "id": 1,
      "username": "JohnDoe",
      "email": "john@example.com",
      "role": "User",
      "status": "Active",
      "permissions": {
        "read": true,
        "write": false,
        "delete": false
      }
    }
  ]
  ```

### **2. Local Storage**
- **Registered Users**:
  - When a user registers, their data is saved in `localStorage`.
- **Admin-Created Users**:
  - Users added by the Admin are also saved in `localStorage`.
- **Session Management**:
  - User session and role information are managed using `localStorage`.

---

## **Setup and Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/erAbhishekJaiswal/RBAC-Frontend.git
   cd RBAC-Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---
## **For Login Data**
For **Admin Login**:
``` 
                     Email:tony@gmail.com
                     Password:Tony123
```

For **User Login**:
```
                     Email:arav@gmail.com
                     Password:arav
```

---
## **Usage Instructions**
1. Register or log in using the mock API data.
2. After login:
   - **Users**: View users and roles with permissions.
   - **Admins**: Manage users (activate/deactivate/delete) and update roles and permissions.
3. Use the **Logout** option to end the session.

---

## **Tech Stack**
- **Frontend**: React.js
- **State Management**: React Hooks
- **Storage**: Local Storage
- **Mock API**: JSON files in the public folder

---

## **Folder Structure**
```
public
├── mock-data/ (stored in public folder)
│   ├── users.json
│   └── roles.json
src/
├── components/
│   ├── Login.js
│   ├── Register.js
│   ├── UserManagement.js
│   ├── RoleManagement.js
│   └── Navbar.js
├── App.js
├── index.js
```

---

## **Future Enhancements**
- **Database Integration**:
  - Replace mock API and local storage with a backend database.
- **Token-Based Authentication**:
  - Implement JWT for secure login sessions.
- **Role Customization**:
  - Allow Admins to create custom roles with specific permissions.
- **Audit Logs**:
  - Track actions performed by Admins and Users.
- **Responsive Design**:
  - Optimize the UI for mobile devices.

---

