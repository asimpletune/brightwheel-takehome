import emailConfig from '../config/email-configuration'
import escape from 'escape-html'
import express from 'express';
const router = express.Router();


/* Validate input */
/*
  1. Test presence of fields according to email config
  2. Validate "to" and "from" fields according to email config
*/
router.post('/', (req, res, next) => {
  // 1.
  if(!(emailConfig.validate.fields(req.body))) {
    res.status(400).send(`Missing fields!`)
  }
  // 2. (to field)
  if(!emailConfig.validate.to(req.body.to)) {
    res.status(400).send(`Malformed "to" field!`)
  }
  // 2. (from field)
  if(!emailConfig.validate.to(req.body.from)) {
    res.status(400).send(`Malformed "from" field!`)
  }
  next()
});

/* Escape keys according to email config */
router.post('/', (req, res, next) => {
  emailConfig.escape.forEach((field) => {
    req.body[field] = escape(req.body[field])
  })
  next()
})

/* POST email */
router.post('/', (req, res, next) => {  
  res.end()
});

function guard(expression, callback) {
  if (!expression) { callback() }
}

export default router
