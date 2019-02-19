(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Handles API calls
const apiManager = {
  createEmployee: employeeObject => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeObject)
    });
  },
  getAllEmployees: () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json());
  },
  getOneEmployee: empId => {
    return fetch(`http://localhost:8088/employees/${empId}`).then(employees => employees.json());
  },
  editEmployee: (idParam, editedEmployeeObject) => {
    return fetch(`http://localhost:8088/employees/${idParam}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEmployeeObject)
    });
  }
};
var _default = apiManager;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

var _singleContact = _interopRequireDefault(require("./singleContact.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Prints All Employees to DOM
// apiManager()
const printAllEmployees = () => {
  document.querySelector("#employee-Container").innerHTML = "";

  _contactCollection.default.getAllEmployees().then(allEmployees => {
    allEmployees.forEach(singleEmployee => {
      document.querySelector("#employee-Container").innerHTML += (0, _singleContact.default)(singleEmployee); //   console.log(singleEmployee)
    });
  });
};

var _default = printAllEmployees;
exports.default = _default;

},{"./contactCollection.js":1,"./singleContact.js":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

var _contactList = _interopRequireDefault(require("./contactList.js"));

var _editedContact = _interopRequireDefault(require("./editedContact.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Displays prepopulated contact edit form
const buildEditForm = empId => {
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
     `;
};

var _default = buildEditForm;
exports.default = _default;

},{"./contactCollection.js":1,"./contactList.js":2,"./editedContact.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const buildEditedEmployee = (firstName, lastName, gender, email, phone, birthdate, department, supervisor) => {
  return {
    FirstName: firstName,
    LastName: lastName,
    Gender: gender,
    Email: email,
    Phone: phone,
    Birthdate: birthdate,
    Department: department,
    Supervisor: supervisor
  };
};

var _default = buildEditedEmployee;
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

var _contactList = _interopRequireDefault(require("./contactList.js"));

var _searchForContacts = _interopRequireDefault(require("./searchForContacts.js"));

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import buildSingleEmployee from "./singleContact.js"
(0, _contactList.default)();

_contactCollection.default.createEmployee();

_searchForContacts.default.supervisors();

_searchForContacts.default.department();

_searchForContacts.default.byFirstName();

_searchForContacts.default.byLastName();

_searchForContacts.default.remove();

_searchForContacts.default.save();

_searchForContacts.default.edit();

_searchForContacts.default.new();

},{"./contactCollection.js":1,"./contactList.js":2,"./searchForContacts.js":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactList = _interopRequireDefault(require("./contactList.js"));

var _singleContact = _interopRequireDefault(require("./singleContact.js"));

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

var _editContactForm = _interopRequireDefault(require("./editContactForm.js"));

var _editedContact = _interopRequireDefault(require("./editedContact.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Allows for DB search functions
const clickEvents = {
  supervisors: () => {
    document.querySelector("#isSuper").addEventListener("click", () => {
      if (document.querySelector("#isSuper").checked === true) {
        document.querySelector("#employee-Container").innerHTML = "";
        fetch("http://localhost:8088/employees?Supervisor=true").then(supervisors => supervisors.json().then(parsedSupers => {
          parsedSupers.forEach(singleEmployee => {
            document.querySelector("#employee-Container").innerHTML += (0, _singleContact.default)(singleEmployee);
          });
        }));
      } else {
        (0, _contactList.default)();
      }
    });
  },
  department: () => {
    document.querySelector("#departmentSearch").addEventListener("change", () => {
      if (document.querySelector("#departmentSearch").value !== "All") {
        document.querySelector("#employee-Container").innerHTML = "";
        let empDept = document.querySelector("#departmentSearch").value;
        fetch(`http://localhost:8088/employees?Department=${empDept}`).then(deptEmployees => deptEmployees.json().then(parsedDeptEmployees => {
          parsedDeptEmployees.forEach(singleEmployee => {
            document.querySelector("#employee-Container").innerHTML += (0, _singleContact.default)(singleEmployee);
          });
        }));
      } else {
        (0, _contactList.default)();
      }
    });
  },
  byFirstName: () => {
    document.querySelector("#firstNameSearch").addEventListener("keyup", () => {
      if (document.querySelector("#firstNameSearch").value !== "") {
        document.querySelector("#employee-Container").innerHTML = "";
        let firstName = document.querySelector("#firstNameSearch").value;
        fetch(`http://localhost:8088/employees?FirstName=${firstName}`).then(firstNameEmployees => firstNameEmployees.json().then(parsedFirstNameEmployees => {
          parsedFirstNameEmployees.forEach(singleEmployee => {
            document.querySelector("#employee-Container").innerHTML += (0, _singleContact.default)(singleEmployee);
          });
        }));
      } else {
        (0, _contactList.default)();
      }
    });
  },
  byLastName: () => {
    document.querySelector("#lastNameSearch").addEventListener("keyup", () => {
      if (document.querySelector("#lastNameSearch").value !== "") {
        document.querySelector("#employee-Container").innerHTML = "";
        let lastName = document.querySelector("#lastNameSearch").value;
        fetch(`http://localhost:8088/employees?lastName=${lastName}`).then(lastNameEmployees => lastNameEmployees.json().then(parsedlastNameEmployees => {
          parsedlastNameEmployees.forEach(singleEmployee => {
            document.querySelector("#employee-Container").innerHTML += (0, _singleContact.default)(singleEmployee);
          });
        }));
      } else {
        (0, _contactList.default)();
      }
    });
  },
  remove: () => {
    document.querySelector("#employee-Container").addEventListener("click", () => {
      if (event.target.classList.contains("removeBtn")) {
        let empId = event.target.id.split("-")[1]; // console.log(`you clicked the remove button ${empId}`)

        return fetch(`http://localhost:8088/employees/${empId}`, {
          method: "DELETE"
        }).then(_contactList.default);
      }
    });
  },
  edit: () => {
    document.querySelector("#employee-Container").addEventListener("click", () => {
      if (event.target.classList.contains("editBtn")) {
        let empId = event.target.id.split("-")[1];

        _contactCollection.default.getOneEmployee(empId).then(employeeInfo => {
          document.querySelector(`#emp-${empId}`).innerHTML = (0, _editContactForm.default)(employeeInfo);
        });
      }
    });
  },
  save: () => {
    document.querySelector("#employee-Container").addEventListener("click", () => {
      if (event.target.classList.contains("saveBtn")) {
        let empId = event.target.id.split("-")[1];
        const editedFirstName = document.querySelector("#editedFirstName").value;
        const editedLastName = document.querySelector("#editedLastName").value;
        const editedGender = document.querySelector("#editedGender").value;
        const editedEmail = document.querySelector("#editedEmail").value;
        const editedPhone = document.querySelector("#editedPhone").value;
        const editedBirthdate = document.querySelector("#editedBirthdate").value;
        const editedDepartment = document.querySelector("#editedDepartment").value;
        const editedSupervisor = document.querySelector("#editedSupervisor").checked;
        const editedEmployeeObject = (0, _editedContact.default)(editedFirstName, editedLastName, editedGender, editedEmail, editedPhone, editedBirthdate, editedDepartment, editedSupervisor);

        _contactCollection.default.editEmployee(empId, editedEmployeeObject).then(_contactList.default);
      }
    });
  },
  new: () => {
    document.querySelector("#createNewEmployee").addEventListener("click", () => {
      const empFirstName = document.querySelector("#empFirstName").value;
      const empLastName = document.querySelector("#empLastName").value;
      const empGender = document.querySelector("#empGender").value;
      const empEmail = document.querySelector("#empEmail").value;
      const empPhone = document.querySelector("#empPhone").value;
      const empBirthdate = document.querySelector("#empBirthdate").value;
      const empDepartment = document.querySelector("#empDepartment").value;
      const isSupervisor = document.querySelector("#empSupervisor").checked;
      const employeeToAdd = {
        FirstName: empFirstName,
        LastName: empLastName,
        Gender: empGender,
        Email: empEmail,
        Phone: empPhone,
        Birthdate: empBirthdate,
        Department: empDepartment,
        Supervisor: isSupervisor
      };

      _contactCollection.default.createEmployee(employeeToAdd).then(() => {
        (0, _contactList.default)();
        document.querySelector("#empFirstName").value = "";
        document.querySelector("#empLastName").value = "";
        document.querySelector("#empGender").value = "";
        document.querySelector("#empEmail").value = "";
        document.querySelector("#empPhone").value = "";
        document.querySelector("#empBirthdate").value = "";
        document.querySelector("#empDepartment").value = "";
        document.querySelector("#empSupervisor").checked = "";
      });
    });
  }
};
var _default = clickEvents;
exports.default = _default;

},{"./contactCollection.js":1,"./contactList.js":2,"./editContactForm.js":3,"./editedContact.js":4,"./singleContact.js":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//Builds single contact string
const buildSingleEmployee = singleEmployeeObject => {
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
    `;
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
    `;
  }
};

var _default = buildSingleEmployee; // const buildEditedEmployee = (firstName, lastName, gender, email, phone, birthdate, department, supervisor) => {
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

exports.default = _default;

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0TGlzdC5qcyIsIi4uL3NjcmlwdHMvZWRpdENvbnRhY3RGb3JtLmpzIiwiLi4vc2NyaXB0cy9lZGl0ZWRDb250YWN0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9zZWFyY2hGb3JDb250YWN0cy5qcyIsIi4uL3NjcmlwdHMvc2luZ2xlQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBR0EsTUFBTSxVQUFVLEdBQUc7QUFFZixFQUFBLGNBQWMsRUFBRyxjQUFELElBQW9CO0FBQ2hDLFdBQU8sS0FBSyxDQUFDLGlDQUFELEVBQW9DO0FBQzVDLE1BQUEsTUFBTSxFQUFFLE1BRG9DO0FBRTVDLE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGbUM7QUFLNUMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxjQUFmO0FBTHNDLEtBQXBDLENBQVo7QUFPSCxHQVZjO0FBWWYsRUFBQSxlQUFlLEVBQUUsTUFBTTtBQUNuQixXQUFPLEtBQUssQ0FBQyxpQ0FBRCxDQUFMLENBQXlDLElBQXpDLENBQThDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBVixFQUEzRCxDQUFQO0FBQ0gsR0FkYztBQWdCZixFQUFBLGNBQWMsRUFBRyxLQUFELElBQVc7QUFDdkIsV0FBTyxLQUFLLENBQUUsbUNBQWtDLEtBQU0sRUFBMUMsQ0FBTCxDQUFrRCxJQUFsRCxDQUF1RCxTQUFTLElBQUksU0FBUyxDQUFDLElBQVYsRUFBcEUsQ0FBUDtBQUNILEdBbEJjO0FBb0JmLEVBQUEsWUFBWSxFQUFFLENBQUMsT0FBRCxFQUFVLG9CQUFWLEtBQW1DO0FBQzdDLFdBQU8sS0FBSyxDQUFFLG1DQUFrQyxPQUFRLEVBQTVDLEVBQStDO0FBQ3ZE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QXJCLEtBQW9DLElBQXhDLEVBQThDO0FBQzVDLFdBQVEsZ0JBQWUsb0JBQW9CLENBQUMsRUFBRywyQkFBMEIsb0JBQW9CLENBQUMsRUFBRztnQ0FDdkUsb0JBQW9CLENBQUMsU0FBVSxJQUFHLG9CQUFvQixDQUFDLFFBQVM7c0JBQzFFLG9CQUFvQixDQUFDLE1BQU87cUJBQzdCLG9CQUFvQixDQUFDLEtBQU07cUJBQzNCLG9CQUFvQixDQUFDLEtBQU07d0JBQ3hCLG9CQUFvQixDQUFDLFNBQVU7MEJBQzdCLG9CQUFvQixDQUFDLFVBQVc7OEJBQzVCLG9CQUFvQixDQUFDLEVBQUc7Z0NBQ3RCLG9CQUFvQixDQUFDLEVBQUc7O0tBUmxEO0FBV0QsR0FaRCxNQVlPO0FBQ0wsV0FBUSxnQkFBZSxvQkFBb0IsQ0FBQyxFQUFHLHlCQUF3QixvQkFBb0IsQ0FBQyxFQUFHO2dDQUNyRSxvQkFBb0IsQ0FBQyxTQUFVLElBQUcsb0JBQW9CLENBQUMsUUFBUztzQkFDMUUsb0JBQW9CLENBQUMsTUFBTztxQkFDN0Isb0JBQW9CLENBQUMsS0FBTTtxQkFDM0Isb0JBQW9CLENBQUMsS0FBTTt3QkFDeEIsb0JBQW9CLENBQUMsU0FBVTswQkFDN0Isb0JBQW9CLENBQUMsVUFBVzs4QkFDNUIsb0JBQW9CLENBQUMsRUFBRztnQ0FDdEIsb0JBQW9CLENBQUMsRUFBRzs7S0FSbEQ7QUFXRDtBQUNGLENBMUJIOztlQTRCZSxtQixFQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEhhbmRsZXMgQVBJIGNhbGxzXHJcblxyXG5cclxuY29uc3QgYXBpTWFuYWdlciA9IHtcclxuXHJcbiAgICBjcmVhdGVFbXBsb3llZTogKGVtcGxveWVlT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VtcGxveWVlc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVtcGxveWVlT2JqZWN0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGdldEFsbEVtcGxveWVlczogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXNcIikudGhlbihlbXBsb3llZXMgPT4gZW1wbG95ZWVzLmpzb24oKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldE9uZUVtcGxveWVlOiAoZW1wSWQpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXMvJHtlbXBJZH1gKS50aGVuKGVtcGxveWVlcyA9PiBlbXBsb3llZXMuanNvbigpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZWRpdEVtcGxveWVlOiAoaWRQYXJhbSwgZWRpdGVkRW1wbG95ZWVPYmplY3QpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXMvJHtpZFBhcmFtfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlZGl0ZWRFbXBsb3llZU9iamVjdClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlNYW5hZ2VyO1xyXG5cclxuIiwiLy9QcmludHMgQWxsIEVtcGxveWVlcyB0byBET01cclxuXHJcbmltcG9ydCBhcGlNYW5hZ2VyIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uLmpzXCJcclxuaW1wb3J0IGJ1aWxkU2luZ2xlRW1wbG95ZWUgZnJvbSBcIi4vc2luZ2xlQ29udGFjdC5qc1wiXHJcblxyXG4vLyBhcGlNYW5hZ2VyKClcclxuXHJcbmNvbnN0IHByaW50QWxsRW1wbG95ZWVzID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llZS1Db250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGFwaU1hbmFnZXIuZ2V0QWxsRW1wbG95ZWVzKClcclxuICAgIC50aGVuKGFsbEVtcGxveWVlcyA9PiB7XHJcbiAgICAgIGFsbEVtcGxveWVlcy5mb3JFYWNoKHNpbmdsZUVtcGxveWVlID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZWUtQ29udGFpbmVyXCIpLmlubmVySFRNTCArPSBidWlsZFNpbmdsZUVtcGxveWVlKHNpbmdsZUVtcGxveWVlKVxyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coc2luZ2xlRW1wbG95ZWUpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaW50QWxsRW1wbG95ZWVzOyIsIi8vIERpc3BsYXlzIHByZXBvcHVsYXRlZCBjb250YWN0IGVkaXQgZm9ybVxyXG5pbXBvcnQgYXBpTWFuYWdlciBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvbi5qc1wiXHJcbmltcG9ydCBwcmludEFsbEVtcGxveWVlcyBmcm9tIFwiLi9jb250YWN0TGlzdC5qc1wiO1xyXG5pbXBvcnQgYnVpbGRFZGl0ZWRFbXBsb3llZSBmcm9tIFwiLi9lZGl0ZWRDb250YWN0LmpzXCJcclxuXHJcbmNvbnN0IGJ1aWxkRWRpdEZvcm0gPSAoZW1wSWQpID0+IHtcclxuICByZXR1cm4gYFxyXG4gICAgIDxsZWdlbmQ+RWRpdCBFbXBsb3llZSBJbmZvcm1hdGlvbjwvbGVnZW5kPlxyXG4gICA8bGFiZWwgZm9yPWZpcnN0TmFtZT5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgPGlucHV0IHZhbHVlPSR7ZW1wSWQuRmlyc3ROYW1lfSBpZD1cImVkaXRlZEZpcnN0TmFtZVwiIG5hbWU9XCJlbXBsb3llZV9lZGl0b3JcIiB0eXBlPVwidGV4dFwiIGF1dG9mb2N1cyAvPlxyXG4gICA8YnI+XHJcbiAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgIDxpbnB1dCB2YWx1ZT0ke2VtcElkLkxhc3ROYW1lfSBpZD1cImVkaXRlZExhc3ROYW1lXCIgbmFtZT1cImVtcGxveWVlX2VkaXRvclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XHJcbiAgIDxicj5cclxuICAgPGxhYmVsIGZvcj1cIkdlbmRlclwiPkdlbmRlcjwvbGFiZWw+PGJyPlxyXG4gICAgIDxzZWxlY3QgaWQ9XCJlZGl0ZWRHZW5kZXJcIiB2YWx1ZT0ke2VtcElkLkdlbmRlcn0+XHJcbiAgICAgICAgIDxvcHRpb24gJHtlbXBJZC5HZW5kZXIgPT09IFwiTWFsZVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gdmFsdWU9XCJNYWxlXCI+TWFsZTwvb3B0aW9uPlxyXG4gICAgICAgICA8b3B0aW9uICR7ZW1wSWQuR2VuZGVyID09PSBcIkZlbWFsZVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gdmFsdWU9XCJGZW1hbGVcIj5GZW1hbGU8L29wdGlvbj5cclxuICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk90aGVyXCI+T3RoZXI8L29wdGlvbj5cclxuICAgICA8L3NlbGVjdD5cclxuICAgPGJyPlxyXG4gICA8bGFiZWwgZm9yPVwiZW1haWxBZGRyZXNzXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgIDxpbnB1dCB2YWx1ZT0ke2VtcElkLkVtYWlsfSBpZD1cImVkaXRlZEVtYWlsXCIgbmFtZT1cImVtcGxveWVlX2VkaXRvclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XHJcbiAgIDxicj5cclxuICAgPGxhYmVsIGZvcj1cInBob25lTnVtYmVyXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgPGlucHV0IHZhbHVlPVwiJHtlbXBJZC5QaG9uZX1cIiBpZD1cImVkaXRlZFBob25lXCIgbmFtZT1cImVtcGxveWVlX2VkaXRvclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XHJcbiAgIDxicj5cclxuICAgPGxhYmVsIGZvcj1cImJpcnRoZGF5XCI+QmlydGhkYXRlPC9sYWJlbD5cclxuICAgPGlucHV0IHZhbHVlPSR7ZW1wSWQuQmlydGhkYXRlfSBpZD1cImVkaXRlZEJpcnRoZGF0ZVwiIG5hbWU9XCJlbXBsb3llZV9lZGl0b3JcIiB0eXBlPVwiZGF0ZVwiIGF1dG9mb2N1cyAvPlxyXG4gICA8YnI+XHJcbiAgIDxsYWJlbCBmb3I9XCJkZXBhcnRtZW50XCI+RGVwYXJ0bWVudDwvbGFiZWw+XHJcbiAgIDxzZWxlY3QgdmFsdWU9JHtlbXBJZC5EZXBhcnRtZW50fSBpZD1cImVkaXRlZERlcGFydG1lbnRcIj5cclxuICAgICA8b3B0aW9uIHZhbHVlPVwiRXhlY3V0aXZlXCI+RXhlY3V0aXZlPC9vcHRpb24+XHJcbiAgICAgPG9wdGlvbiB2YWx1ZT1cIkFkbWluaXN0cmF0aXZlXCI+QWRtaW5pc3RyYXRpdmU8L29wdGlvbj5cclxuICAgICA8b3B0aW9uIHZhbHVlPVwiUHJvZHVjdGlvblwiPlByb2R1Y3Rpb248L29wdGlvbj5cclxuICAgICA8b3B0aW9uIHZhbHVlPVwiQ3VzdG9tZXIgU2VydmljZVwiPkN1c3RvbWVyIFNlcnZpY2U8L29wdGlvbj5cclxuICAgICA8b3B0aW9uIHZhbHVlPVwiTWFpbnRlbmFuY2VcIj5NYWludGVuYW5jZTwvb3B0aW9uPlxyXG4gICA8L3NlbGVjdD5cclxuICAgPGJyPlxyXG4gICA8bGFiZWwgZm9yPVwic3VwZXJ2aXNvclwiPlN1cGVydmlzb3I/PC9sYWJlbD5cclxuICAgPGlucHV0IHZhbHVlPSR7ZW1wSWQuU3VwZXJ2aXNvcn0gaWQ9XCJlZGl0ZWRTdXBlcnZpc29yXCIgbmFtZT1cImVtcGxveWVlX2NyZWF0b3JcIiB0eXBlPVwiY2hlY2tib3hcIiBhdXRvZm9jdXMgLz5cclxuICAgPGJyPlxyXG4gICA8YnV0dG9uIGlkPVwic2F2ZUJ0bi0ke2VtcElkLmlkfVwiIGNsYXNzPVwic2F2ZUJ0blwiPlVwZGF0ZSBFbXBsb3llZTwvYnV0dG9uPlxyXG4gICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiJHtlbXBJZC5pZH1cIiBpZD1cIiR7ZW1wSWQuaWR9XCIvPlxyXG4gICAgIDwvZGl2Pjxicj5cclxuICAgICBgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRFZGl0Rm9ybTtcclxuIiwiY29uc3QgYnVpbGRFZGl0ZWRFbXBsb3llZSA9IChmaXJzdE5hbWUsIGxhc3ROYW1lLCBnZW5kZXIsIGVtYWlsLCBwaG9uZSwgYmlydGhkYXRlLCBkZXBhcnRtZW50LCBzdXBlcnZpc29yKSA9PiB7XHJcbiAgICByZXR1cm4geyBGaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgIExhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgIEdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICAgICAgICAgRW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgUGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgQmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgICAgICAgICBEZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgU3VwZXJ2aXNvcjogc3VwZXJ2aXNvclxyXG4gICAgICAgICAgICB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgYnVpbGRFZGl0ZWRFbXBsb3llZTsiLCJpbXBvcnQgcHJpbnRBbGxFbXBsb3llZXMgZnJvbSBcIi4vY29udGFjdExpc3QuanNcIjtcclxuaW1wb3J0IGNsaWNrRXZlbnRzIGZyb20gXCIuL3NlYXJjaEZvckNvbnRhY3RzLmpzXCI7XHJcbmltcG9ydCBhcGlNYW5hZ2VyIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uLmpzXCI7XHJcbi8vIGltcG9ydCBidWlsZFNpbmdsZUVtcGxveWVlIGZyb20gXCIuL3NpbmdsZUNvbnRhY3QuanNcIlxyXG5cclxucHJpbnRBbGxFbXBsb3llZXMoKTtcclxuYXBpTWFuYWdlci5jcmVhdGVFbXBsb3llZSgpO1xyXG5jbGlja0V2ZW50cy5zdXBlcnZpc29ycygpO1xyXG5jbGlja0V2ZW50cy5kZXBhcnRtZW50KCk7XHJcbmNsaWNrRXZlbnRzLmJ5Rmlyc3ROYW1lKCk7XHJcbmNsaWNrRXZlbnRzLmJ5TGFzdE5hbWUoKTtcclxuY2xpY2tFdmVudHMucmVtb3ZlKCk7XHJcbmNsaWNrRXZlbnRzLnNhdmUoKTtcclxuY2xpY2tFdmVudHMuZWRpdCgpO1xyXG5jbGlja0V2ZW50cy5uZXcoKTsiLCIvLyBBbGxvd3MgZm9yIERCIHNlYXJjaCBmdW5jdGlvbnNcclxuXHJcbmltcG9ydCBwcmludEFsbEVtcGxveWVlcyBmcm9tIFwiLi9jb250YWN0TGlzdC5qc1wiO1xyXG5pbXBvcnQgYnVpbGRTaW5nbGVFbXBsb3llZSBmcm9tIFwiLi9zaW5nbGVDb250YWN0LmpzXCI7XHJcbmltcG9ydCBhcGlNYW5hZ2VyIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBidWlsZEVkaXRGb3JtIGZyb20gXCIuL2VkaXRDb250YWN0Rm9ybS5qc1wiXHJcbmltcG9ydCBidWlsZEVkaXRlZEVtcGxveWVlIGZyb20gXCIuL2VkaXRlZENvbnRhY3QuanNcIlxyXG5cclxuY29uc3QgY2xpY2tFdmVudHMgPSB7XHJcblxyXG4gICAgc3VwZXJ2aXNvcnM6ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lzU3VwZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNTdXBlclwiKS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcGxveWVlLUNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXM/U3VwZXJ2aXNvcj10cnVlXCIsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3VwZXJ2aXNvcnMgPT4gc3VwZXJ2aXNvcnMuanNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHBhcnNlZFN1cGVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRTdXBlcnMuZm9yRWFjaChzaW5nbGVFbXBsb3llZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llZS1Db250YWluZXJcIikuaW5uZXJIVE1MICs9IGJ1aWxkU2luZ2xlRW1wbG95ZWUoc2luZ2xlRW1wbG95ZWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaW50QWxsRW1wbG95ZWVzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGRlcGFydG1lbnQ6ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcGFydG1lbnRTZWFyY2hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcGFydG1lbnRTZWFyY2hcIikudmFsdWUgIT09IFwiQWxsXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZWUtQ29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGxldCBlbXBEZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXBhcnRtZW50U2VhcmNoXCIpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VtcGxveWVlcz9EZXBhcnRtZW50PSR7ZW1wRGVwdH1gLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRlcHRFbXBsb3llZXMgPT4gZGVwdEVtcGxveWVlcy5qc29uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocGFyc2VkRGVwdEVtcGxveWVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWREZXB0RW1wbG95ZWVzLmZvckVhY2goc2luZ2xlRW1wbG95ZWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZWUtQ29udGFpbmVyXCIpLmlubmVySFRNTCArPSBidWlsZFNpbmdsZUVtcGxveWVlKHNpbmdsZUVtcGxveWVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmludEFsbEVtcGxveWVlcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBieUZpcnN0TmFtZTogKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lU2VhcmNoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpcnN0TmFtZVNlYXJjaFwiKS52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llZS1Db250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lU2VhcmNoXCIpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VtcGxveWVlcz9GaXJzdE5hbWU9JHtmaXJzdE5hbWV9YCxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmaXJzdE5hbWVFbXBsb3llZXMgPT4gZmlyc3ROYW1lRW1wbG95ZWVzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihwYXJzZWRGaXJzdE5hbWVFbXBsb3llZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkRmlyc3ROYW1lRW1wbG95ZWVzLmZvckVhY2goc2luZ2xlRW1wbG95ZWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZWUtQ29udGFpbmVyXCIpLmlubmVySFRNTCArPSBidWlsZFNpbmdsZUVtcGxveWVlKHNpbmdsZUVtcGxveWVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmludEFsbEVtcGxveWVlcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBieUxhc3ROYW1lOiAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZVNlYXJjaFwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZVNlYXJjaFwiKS52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llZS1Db250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZVNlYXJjaFwiKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXM/bGFzdE5hbWU9JHtsYXN0TmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGxhc3ROYW1lRW1wbG95ZWVzID0+IGxhc3ROYW1lRW1wbG95ZWVzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihwYXJzZWRsYXN0TmFtZUVtcGxveWVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRsYXN0TmFtZUVtcGxveWVlcy5mb3JFYWNoKHNpbmdsZUVtcGxveWVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcGxveWVlLUNvbnRhaW5lclwiKS5pbm5lckhUTUwgKz0gYnVpbGRTaW5nbGVFbXBsb3llZShzaW5nbGVFbXBsb3llZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRBbGxFbXBsb3llZXMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZW1vdmU6ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcGxveWVlLUNvbnRhaW5lclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZUJ0blwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVtcElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKVsxXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB5b3UgY2xpY2tlZCB0aGUgcmVtb3ZlIGJ1dHRvbiAke2VtcElkfWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXMvJHtlbXBJZH1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHByaW50QWxsRW1wbG95ZWVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBlZGl0OiAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llZS1Db250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXRCdG5cIikpIHtcclxuICAgICAgICAgIGxldCBlbXBJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi1cIilbMV07XHJcbiAgICAgICAgICBhcGlNYW5hZ2VyLmdldE9uZUVtcGxveWVlKGVtcElkKVxyXG4gICAgICAgICAgICAudGhlbigoZW1wbG95ZWVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VtcC0ke2VtcElkfWApLmlubmVySFRNTCA9IGJ1aWxkRWRpdEZvcm0oZW1wbG95ZWVJbmZvKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9fSlcclxuICAgIH0sXHJcbiAgICBzYXZlIDogKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZWUtQ29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXZlQnRuXCIpKSB7XHJcbiAgICAgICAgICBsZXQgZW1wSWQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzFdO1xyXG4gICAgICAgICAgY29uc3QgZWRpdGVkRmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0ZWRGaXJzdE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBlZGl0ZWRMYXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdGVkTGFzdE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBlZGl0ZWRHZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRlZEdlbmRlclwiKS52YWx1ZVxyXG4gICAgICAgICAgY29uc3QgZWRpdGVkRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRlZEVtYWlsXCIpLnZhbHVlXHJcbiAgICAgICAgICBjb25zdCBlZGl0ZWRQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdGVkUGhvbmVcIikudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBlZGl0ZWRCaXJ0aGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRlZEJpcnRoZGF0ZVwiKS52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGVkaXRlZERlcGFydG1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRlZERlcGFydG1lbnRcIikudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBlZGl0ZWRTdXBlcnZpc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0ZWRTdXBlcnZpc29yXCIpLmNoZWNrZWQ7XHJcblxyXG4gICAgICAgICAgY29uc3QgZWRpdGVkRW1wbG95ZWVPYmplY3QgPSBidWlsZEVkaXRlZEVtcGxveWVlKGVkaXRlZEZpcnN0TmFtZSwgZWRpdGVkTGFzdE5hbWUsIGVkaXRlZEdlbmRlciwgZWRpdGVkRW1haWwsIGVkaXRlZFBob25lLCBlZGl0ZWRCaXJ0aGRhdGUsIGVkaXRlZERlcGFydG1lbnQsIGVkaXRlZFN1cGVydmlzb3IpXHJcblxyXG4gICAgICAgICAgYXBpTWFuYWdlci5lZGl0RW1wbG95ZWUoZW1wSWQsIGVkaXRlZEVtcGxveWVlT2JqZWN0KVxyXG4gICAgICAgICAgICAudGhlbihwcmludEFsbEVtcGxveWVlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbmV3OiAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVOZXdFbXBsb3llZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbXBGaXJzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcEZpcnN0TmFtZVwiKS52YWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBlbXBMYXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wTGFzdE5hbWVcIikudmFsdWVcclxuICAgICAgICAgICAgY29uc3QgZW1wR2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBHZW5kZXJcIikudmFsdWVcclxuICAgICAgICAgICAgY29uc3QgZW1wRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcEVtYWlsXCIpLnZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IGVtcFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBQaG9uZVwiKS52YWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBlbXBCaXJ0aGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcEJpcnRoZGF0ZVwiKS52YWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBlbXBEZXBhcnRtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBEZXBhcnRtZW50XCIpLnZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IGlzU3VwZXJ2aXNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wU3VwZXJ2aXNvclwiKS5jaGVja2VkXHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbXBsb3llZVRvQWRkID0ge1xyXG4gICAgICAgICAgICAgICAgRmlyc3ROYW1lOiBlbXBGaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBMYXN0TmFtZTogZW1wTGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBHZW5kZXI6IGVtcEdlbmRlcixcclxuICAgICAgICAgICAgICAgIEVtYWlsOiBlbXBFbWFpbCxcclxuICAgICAgICAgICAgICAgIFBob25lOiBlbXBQaG9uZSxcclxuICAgICAgICAgICAgICAgIEJpcnRoZGF0ZTogZW1wQmlydGhkYXRlLFxyXG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudDogZW1wRGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIFN1cGVydmlzb3I6IGlzU3VwZXJ2aXNvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcGlNYW5hZ2VyLmNyZWF0ZUVtcGxveWVlKGVtcGxveWVlVG9BZGQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRBbGxFbXBsb3llZXMoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wRmlyc3ROYW1lXCIpLnZhbHVlID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBMYXN0TmFtZVwiKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wR2VuZGVyXCIpLnZhbHVlID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBFbWFpbFwiKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wUGhvbmVcIikudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcEJpcnRoZGF0ZVwiKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wRGVwYXJ0bWVudFwiKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wU3VwZXJ2aXNvclwiKS5jaGVja2VkID0gXCJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGlja0V2ZW50czsiLCIvL0J1aWxkcyBzaW5nbGUgY29udGFjdCBzdHJpbmdcclxuXHJcbmNvbnN0IGJ1aWxkU2luZ2xlRW1wbG95ZWUgPSAoc2luZ2xlRW1wbG95ZWVPYmplY3QpID0+IHtcclxuICAgIGlmIChzaW5nbGVFbXBsb3llZU9iamVjdC5TdXBlcnZpc29yID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiBgPGRpdiBpZD1cImVtcC0ke3NpbmdsZUVtcGxveWVlT2JqZWN0LmlkfVwiIGNsYXNzPVwic3VwZXJ2aXNvciBlbXAtJHtzaW5nbGVFbXBsb3llZU9iamVjdC5pZH1cIiA+XHJcbiAgICAgICAgPHNwYW4+RW1wbG95ZWUgTmFtZSAtICR7c2luZ2xlRW1wbG95ZWVPYmplY3QuRmlyc3ROYW1lfSAke3NpbmdsZUVtcGxveWVlT2JqZWN0Lkxhc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICA8cD5HZW5kZXIgLSAke3NpbmdsZUVtcGxveWVlT2JqZWN0LkdlbmRlcn08L3A+XHJcbiAgICAgICAgPHA+RW1haWwgLSAke3NpbmdsZUVtcGxveWVlT2JqZWN0LkVtYWlsfTwvcD5cclxuICAgICAgICA8cD5QaG9uZSAjICR7c2luZ2xlRW1wbG95ZWVPYmplY3QuUGhvbmV9PC9wPlxyXG4gICAgICAgIDxwPkJpcnRoZGF5IC0gJHtzaW5nbGVFbXBsb3llZU9iamVjdC5CaXJ0aGRhdGV9PC9wPlxyXG4gICAgICAgIDxwPkRlcGFydG1lbnQgLSAke3NpbmdsZUVtcGxveWVlT2JqZWN0LkRlcGFydG1lbnR9PC9wPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJlZGl0QnRuLSR7c2luZ2xlRW1wbG95ZWVPYmplY3QuaWR9XCIgY2xhc3M9XCJlZGl0QnRuXCI+RWRpdCBFbXBsb3llZSBJbmZvLjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJyZW1vdmVCdG4tJHtzaW5nbGVFbXBsb3llZU9iamVjdC5pZH1cIiBjbGFzcz1cInJlbW92ZUJ0blwiPlJlbW92ZSBFbXBsb3llZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2Pjxicj5cclxuICAgIGBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgPGRpdiBpZD1cImVtcC0ke3NpbmdsZUVtcGxveWVlT2JqZWN0LmlkfVwiIGNsYXNzPVwiZW1wbG95ZWUgZW1wLSR7c2luZ2xlRW1wbG95ZWVPYmplY3QuaWR9XCIgPlxyXG4gICAgICAgIDxzcGFuPkVtcGxveWVlIE5hbWUgLSAke3NpbmdsZUVtcGxveWVlT2JqZWN0LkZpcnN0TmFtZX0gJHtzaW5nbGVFbXBsb3llZU9iamVjdC5MYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHA+R2VuZGVyIC0gJHtzaW5nbGVFbXBsb3llZU9iamVjdC5HZW5kZXJ9PC9wPlxyXG4gICAgICAgIDxwPkVtYWlsIC0gJHtzaW5nbGVFbXBsb3llZU9iamVjdC5FbWFpbH08L3A+XHJcbiAgICAgICAgPHA+UGhvbmUgIyAke3NpbmdsZUVtcGxveWVlT2JqZWN0LlBob25lfTwvcD5cclxuICAgICAgICA8cD5CaXJ0aGRheSAtICR7c2luZ2xlRW1wbG95ZWVPYmplY3QuQmlydGhkYXRlfTwvcD5cclxuICAgICAgICA8cD5EZXBhcnRtZW50IC0gJHtzaW5nbGVFbXBsb3llZU9iamVjdC5EZXBhcnRtZW50fTwvcD5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiZWRpdEJ0bi0ke3NpbmdsZUVtcGxveWVlT2JqZWN0LmlkfVwiIGNsYXNzPVwiZWRpdEJ0blwiPkVkaXQgRW1wbG95ZWUgSW5mby48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwicmVtb3ZlQnRuLSR7c2luZ2xlRW1wbG95ZWVPYmplY3QuaWR9XCIgY2xhc3M9XCJyZW1vdmVCdG5cIj5SZW1vdmUgRW1wbG95ZWU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj48YnI+XHJcbiAgICBgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRTaW5nbGVFbXBsb3llZTtcclxuXHJcbiAgLy8gY29uc3QgYnVpbGRFZGl0ZWRFbXBsb3llZSA9IChmaXJzdE5hbWUsIGxhc3ROYW1lLCBnZW5kZXIsIGVtYWlsLCBwaG9uZSwgYmlydGhkYXRlLCBkZXBhcnRtZW50LCBzdXBlcnZpc29yKSA9PiB7XHJcbiAgLy8gICByZXR1cm4geyBGaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAvLyAgICAgICAgICAgIExhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAvLyAgICAgICAgICAgIEdlbmRlcjogZ2VuZGVyLFxyXG4gIC8vICAgICAgICAgICAgRW1haWw6IGVtYWlsLFxyXG4gIC8vICAgICAgICAgICAgUGhvbmU6IHBob25lLFxyXG4gIC8vICAgICAgICAgICAgQmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgLy8gICAgICAgICAgICBEZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gIC8vICAgICAgICAgICAgU3VwZXJ2aXNvcjogc3VwZXJ2aXNvclxyXG4gIC8vICAgICAgICAgICB9O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZXhwb3J0IGRlZmF1bHQgYnVpbGRFZGl0ZWRFbXBsb3llZTsiXX0=
