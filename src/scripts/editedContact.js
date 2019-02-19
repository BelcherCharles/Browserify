const buildEditedEmployee = (firstName, lastName, gender, email, phone, birthdate, department, supervisor) => {
    return { FirstName: firstName,
             LastName: lastName,
             Gender: gender,
             Email: email,
             Phone: phone,
             Birthdate: birthdate,
             Department: department,
             Supervisor: supervisor
            };
  }

  export default buildEditedEmployee;