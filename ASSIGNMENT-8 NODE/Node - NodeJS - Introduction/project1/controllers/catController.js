let catModel = require("../models/catModel")

const add = async (req, res) => {
  await catModel.insertOne(req.body)
  res.redirect("/category")
}

const disp = async (req, res) => {
  let result = await catModel.find()
  res.render("category", {
    catdata: result
  })
}

const del = async (req, res) => {
  let id = req.params.id
  let result = await catModel.findByIdAndDelete(id)  // <-- correct method
  if (result) {
    res.redirect("/category")
  } else {
    res.redirect("/category") // still redirect even if not found
  }
}

module.exports = { add, disp, del }
