import printAllEmployees from "./contactList.js";
import clickEvents from "./searchForContacts.js";
import apiManager from "./contactCollection.js";
// import buildSingleEmployee from "./singleContact.js"

printAllEmployees();
apiManager.createEmployee();
clickEvents.supervisors();
clickEvents.department();
clickEvents.byFirstName();
clickEvents.byLastName();
clickEvents.remove();
clickEvents.save();
clickEvents.edit();
clickEvents.new();