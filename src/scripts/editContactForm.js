// Displays prepopulated contact edit form
import apiManager from "./contactCollection.js"
import printAllEmployees from "./contactList.js";
import buildEditedEmployee from "./editedContact.js"

const buildEditForm = (empId) => {
  return `
     <legend>Edit Employee Information</legend>
   <label for=firstName>First Name</label>
   <input value=${empId.FirstName} id="editedFirstName" name="employee_editor" type="text" autofocus />
   <br>
   <label for="lastName">Last Name</label>
   <input value=${empId.LastName} id="editedLastName" name="employee_editor" type="text" autofocus />
   <br>
   <label for="Gender">Gender</label><br>
     <select id="editedGender" value=${empId.Gender}>
         <option ${empId.Gender === "Male" ? "selected" : ""} value="Male">Male</option>
         <option ${empId.Gender === "Female" ? "selected" : ""} value="Female">Female</option>
         <option value="Other">Other</option>
     </select>
   <br>
   <label for="emailAddress">Email Address</label>
   <input value=${empId.Email} id="editedEmail" name="employee_editor" type="text" autofocus />
   <br>
   <label for="phoneNumber">Phone Number</label>
   <input value="${empId.Phone}" id="editedPhone" name="employee_editor" type="text" autofocus />
   <br>
   <label for="birthday">Birthdate</label>
   <input value=${empId.Birthdate} id="editedBirthdate" name="employee_editor" type="date" autofocus />
   <br>
   <label for="department">Department</label>
   <select value=${empId.Department} id="editedDepartment">
     <option value="Executive">Executive</option>
     <option value="Administrative">Administrative</option>
     <option value="Production">Production</option>
     <option value="Customer Service">Customer Service</option>
     <option value="Maintenance">Maintenance</option>
   </select>
   <br>
   <label for="supervisor">Supervisor?</label>
   <input value=${empId.Supervisor} id="editedSupervisor" name="employee_creator" type="checkbox" autofocus />
   <br>
   <button id="saveBtn-${empId.id}" class="saveBtn">Update Employee</button>
   <input type="hidden" value="${empId.id}" id="${empId.id}"/>
     </div><br>
     `
}
export default buildEditForm;
