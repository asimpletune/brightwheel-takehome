export default {
  "validate": {
    "fields": function(body) {
      return body["to"] && body["to_name"] && body["from"] && body["from_name"] && body["subject"] && body["body"]
    },
    "to": function(address) {
      return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(address)
    },
    "from": function(address) {
      return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(address)
    }
  },
  "escape": ["to_name", "from_name", "subject", "body"]
}
