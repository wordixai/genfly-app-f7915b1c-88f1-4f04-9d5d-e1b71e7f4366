export interface Organization {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Department {
  id: string;
  name: string;
  organizationId: string;
  managerId?: string;
  description: string;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  departmentId: string;
  role: string;
  joinDate: string;
}