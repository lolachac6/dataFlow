import { Injectable } from '@angular/core';
import { Icontract } from '../interfaces/icontract.interface';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

 contracts: Icontract[] = [
  {
    "id": "f07d12ce-2a6d-4ed6-aec1-0ff3e3ad6a93",
    "firstName": "John",
    "lastName": "Doe",
    "position": "Software Engineer",
    "department": "IT",
    "salary": 75000,
    "startDate": "2024-01-01",
    "endDate": "2025-01-01",
    "status": "active",
    "createdAt": "2024-01-01T10:00:00Z",
    "updatedAt": "2024-06-01T10:00:00Z"
  },
  {
    "id": "a8e412c0-8f38-47f9-8506-3a2e72d017a9",
    "firstName": "Jane",
    "lastName": "Smith",
    "position": "Product Manager",
    "department": "Product",
    "salary": 90000,
    "startDate": "2023-05-01",
    "endDate": "2024-05-01",
    "status": "expired",
    "createdAt": "2023-05-01T09:30:00Z",
    "updatedAt": "2024-05-02T09:30:00Z"
  },
  {
    "id": "3c9055df-0d55-4d66-a888-3c67f7b7f20f",
    "firstName": "Alice",
    "lastName": "Johnson",
    "position": "UX Designer",
    "department": "Design",
    "salary": 68000,
    "startDate": "2024-03-15",
    "endDate": "2025-03-15",
    "status": "active",
    "createdAt": "2024-03-15T11:00:00Z",
    "updatedAt": "2024-07-01T11:00:00Z"
  },
  {
    "id": "b78c5a57-389d-4f08-bca6-4a4dfeb6c2d5",
    "firstName": "Robert",
    "lastName": "Brown",
    "position": "DevOps Engineer",
    "department": "IT",
    "salary": 80000,
    "startDate": "2023-09-01",
    "endDate": "2024-09-01",
    "status": "active",
    "createdAt": "2023-09-01T08:00:00Z",
    "updatedAt": "2024-06-01T08:00:00Z"
  },
  {
    "id": "9f6074ee-dfae-45c1-8ad6-d8fef1f13e42",
    "firstName": "Emily",
    "lastName": "Clark",
    "position": "HR Specialist",
    "department": "Human Resources",
    "salary": 60000,
    "startDate": "2023-11-01",
    "endDate": "2024-11-01",
    "status": "terminated",
    "createdAt": "2023-11-01T13:00:00Z",
    "updatedAt": "2024-04-01T13:00:00Z"
  },
  {
    "id": "63d94a9b-d703-49f3-a138-327d5e3482a4",
    "firstName": "Michael",
    "lastName": "Davis",
    "position": "Data Scientist",
    "department": "Analytics",
    "salary": 95000,
    "startDate": "2024-02-01",
    "endDate": "2025-02-01",
    "status": "active",
    "createdAt": "2024-02-01T12:00:00Z",
    "updatedAt": "2024-06-01T12:00:00Z"
  },
  {
    "id": "fb2a1f4c-bef5-48ef-96e1-5cbfb326ec30",
    "firstName": "Laura",
    "lastName": "Wilson",
    "position": "Finance Analyst",
    "department": "Finance",
    "salary": 72000,
    "startDate": "2023-06-01",
    "endDate": "2024-06-01",
    "status": "expired",
    "createdAt": "2023-06-01T10:00:00Z",
    "updatedAt": "2024-06-01T10:00:00Z"
  },
  {
    "id": "c882c437-f3ec-4056-a25b-b9c95ffea1b2",
    "firstName": "Kevin",
    "lastName": "Martinez",
    "position": "Marketing Manager",
    "department": "Marketing",
    "salary": 87000,
    "startDate": "2024-04-01",
    "endDate": "2025-04-01",
    "status": "active",
    "createdAt": "2024-04-01T14:00:00Z",
    "updatedAt": "2024-07-01T14:00:00Z"
  },
  {
    "id": "d0214578-33e5-4e67-9d56-9e118d6e4b7d",
    "firstName": "Natalie",
    "lastName": "Turner",
    "position": "Legal Advisor",
    "department": "Legal",
    "salary": 98000,
    "startDate": "2023-10-01",
    "endDate": "2024-10-01",
    "status": "terminated",
    "createdAt": "2023-10-01T15:00:00Z",
    "updatedAt": "2024-02-01T15:00:00Z"
  },
  {
    "id": "ea3a31b1-85fa-46cd-998e-fca7a1871c83",
    "firstName": "Tom",
    "lastName": "Anderson",
    "position": "QA Engineer",
    "department": "Quality Assurance",
    "salary": 70000,
    "startDate": "2024-05-01",
    "endDate": "2025-05-01",
    "status": "active",
    "createdAt": "2024-05-01T09:00:00Z",
    "updatedAt": "2024-07-01T09:00:00Z"
  }
]

}
