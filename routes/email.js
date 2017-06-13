import emailConfig from '../config/email.config'
import mailgun from '../config/mailgun/settings'
import escape from 'escape-html'
import unescape from 'unescape'
import request from 'request'
import express from 'express'
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
  request(
    {
      "auth": emailConfig.auth,
      "method": 'POST',
      "uri": emailConfig.endpoint,
      "form": {
        "from": req.body.from,
        "to": req.body.to,
        "subject": unescape(req.body.subject),
        "html": unescape(req.body.body)
      }
    },
    function (error, response, body) {
      if(response.statusCode != 200){
        console.error('error: '+ response.statusCode)
      } else {
        res.end()
      }
    }
  )
});

function guard(expression, callback) {
  if (!expression) { callback() }
}

export default router
