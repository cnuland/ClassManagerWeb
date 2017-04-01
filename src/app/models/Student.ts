export let Student = {
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  gpa: Number,
  totalCredits: Number,
  currentCredits: Number,
  init: function(id, firstName, lastName, email, phone, gpa, totalCredits, currentCredits){
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.gpa = gpa
    this.totalCredits = totalCredits
    this.currentCredits = currentCredits
    return this
  } 
}
