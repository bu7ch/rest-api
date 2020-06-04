exports.index = (req, res) => {
  throw new Error("erreur aléatoire")
  res.send({message: "coucou"})
}