//Prints All Employees to DOM

import apiManager from "./contactCollection.js"
import buildSingleEmployee from "./singleContact.js"

// apiManager()

const printAllEmployees = () => {
    document.querySelector("#employee-Container").innerHTML = "";
    apiManager.getAllEmployees()
    .then(allEmployees => {
      allEmployees.forEach(singleEmployee => {
          document.querySelector("#employee-Container").innerHTML += buildSingleEmployee(singleEmployee)
        //   console.log(singleEmployee)
        })
    }
)}

export default printAllEmployees;