import { Router } from 'express'

const router = Router()

function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}
/* GET users listing. */
router.get('/yumyum', function (req, res, next) {
  var letter = req.query.letter
  setTimeout(function() {
    if(!isVowel(letter)) {
      res.json(letter)
    } else {
      res.json('x')
    }
  }, Math.random() * 1000)

})

export default router
