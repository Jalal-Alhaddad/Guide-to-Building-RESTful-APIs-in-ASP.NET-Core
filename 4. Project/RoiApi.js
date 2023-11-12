
import { getRequest, deleteRequest, postRequest, putRequest } from './Api';

// Root URL for the API backend
const apiUrl = 'http://localhost:5219/api';

// Get all departments
export function RoiGetDepartments() {
  // Call API endpoint: GET /Departments
  console.log(`${apiUrl}/Departments`);
  return getRequest(`${apiUrl}/Departments`).then((response) => {
    // If request/response is successful, return JSON data
    return response;
  });
}

// Get all people
export function RoiGetPeople() {
  // Call API endpoint: GET /People
  return getRequest(`${apiUrl}/People`).then((response) => {
    // If request/response is successful, return JSON data
    return response;
  });
}

// Get person
export function RoiGetPerson(id) {
  // Call API endpoint: GET /Person/{id}
  console.log(`${apiUrl}/People/${id}`);
  return getRequest(`${apiUrl}/People/${id}`).then((response) => {
    // If request/response is successful, return JSON data
    return response;
  });
}

// Delete person
export function RoiDeletePerson(id) {
  // Call API endpoint: DELETE /Person/{id}
  return deleteRequest(`${apiUrl}/People/${id}`, { id }).then((response) => {
    // If request/response is successful, return true (no data in response)
    return true;
  });
}

// Add person
export function RoiAddPerson(name, phone, departmentId, street, city, state, zip, country) {
  // Call API endpoint: POST /Person
  return postRequest(`${apiUrl}/People`, { name, phone, departmentId, street, city, state, zip, country }).then((response) => {
    // If request/response is successful, return JSON data
    return response;
  });
}

// Update person
export function RoiUpdatePerson(id, name, phone, departmentId, street, city, state, zip, country) {
  // Call API endpoint: PUT /Person/{id}
  return putRequest(`${apiUrl}/People/${id}`, { id, name, phone, departmentId, street, city, state, zip, country }).then((response) => {
    // If request/response is successful, return true (no data in response)
    return true;
  });
}