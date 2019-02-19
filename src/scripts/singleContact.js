//Builds single contact string

const buildSingleEmployee = (singleEmployeeObject) => {
    if (singleEmployeeObject.Supervisor === true) {
      return `<div id="emp-${singleEmployeeObject.id}" class="supervisor emp-${singleEmployeeObject.id}" >
        <span>Employee Name - ${singleEmployeeObject.FirstName} ${singleEmployeeObject.LastName}</span>
        <p>Gender - ${singleEmployeeObject.Gender}</p>
        <p>Email - ${singleEmployeeObject.Email}</p>
        <p>Phone # ${singleEmployeeObject.Phone}</p>
        <p>Birthday - ${singleEmployeeObject.Birthdate}</p>
        <p>Department - ${singleEmployeeObject.Department}</p>
        <button id="editBtn-${singleEmployeeObject.id}" class="editBtn">Edit Employee Info.</button>
        <button id="removeBtn-${singleEmployeeObject.id}" class="removeBtn">Remove Employee</button>
        </div><br>
    `
    } else {
      return `<div id="emp-${singleEmployeeObject.id}" class="employee emp-${singleEmployeeObject.id}" >
        <span>Employee Name - ${singleEmployeeObject.FirstName} ${singleEmployeeObject.LastName}</span>
        <p>Gender - ${singleEmployeeObject.Gender}</p>
        <p>Email - ${singleEmployeeObject.Email}</p>
        <p>Phone # ${singleEmployeeObject.Phone}</p>
        <p>Birthday - ${singleEmployeeObject.Birthdate}</p>
        <p>Department - ${singleEmployeeObject.Department}</p>
        <button id="editBtn-${singleEmployeeObject.id}" class="editBtn">Edit Employee Info.</button>
        <button id="removeBtn-${singleEmployeeObject.id}" class="removeBtn">Remove Employee</button>
        </div><br>
    `
    }
  }

export default buildSingleEmployee;

  // const buildEditedEmployee = (firstName, lastName, gender, email, phone, birthdate, department, supervisor) => {
  //   return { FirstName: firstName,
  //            LastName: lastName,
  //            Gender: gender,
  //            Email: email,
  //            Phone: phone,
  //            Birthdate: birthdate,
  //            Department: department,
  //            Supervisor: supervisor
  //           };
  // }

  // export default buildEditedEmployee;