const form = document.querySelector("#form-habits")
const checkList = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  // const today = "27/05"

  const dayExists = checkList.dayExists(today)

  if (dayExists) {
    alert("Dia já cadastrado")
    return
  }

  checkList.addDay(today)
}

function save() {
  localStorage.setItem("checkList@habits", JSON.stringify(checkList.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
//   water: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
//   bodybuilding: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
//   sleep: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
//   walk: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
//   eat: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
// }

const data = JSON.parse(localStorage.getItem("checkList@habits")) || {}
checkList.setData(data)
checkList.load()
