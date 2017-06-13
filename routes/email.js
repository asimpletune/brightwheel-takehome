import express from 'express';
const router = express.Router();

/* Validate input */
/*
  1. Has "to", "to_name", "from", "from_name", "subject", "body" fields
  2. Test email address are valid (according to MDN https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
*/
router.post('/', (req, res, next) => {
  // 1.
  if(!(req.body["to"] && req.body["to_name"] && req.body["from"] && req.body["from_name"] && req.body["subject"] && req.body["body"])) {
    res.status(400).end()
  }
  // 2. (to field)
  if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(req.body.to)) {
    res.status(401).end()
  }
  // 2. (from field)
  if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(req.body.from)) {
    res.status(402).end()
  }
  next()
});

/* POST email */
router.post('/', (req, res, next) => {
  res.end()
});

function guard(expression, callback) {
  if (!expression) { callback() }
}

export default router
