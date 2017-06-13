```bash
curl -vX POST http://localhost:3000/email -d @email.json \
--header "Content-Type: application/json"
```

```bash
curl -s --user 'api:key-f2bedeba0adcf6833094868602115ff5' \
    https://api.mailgun.net/v3/sandbox91c6bb123f5f4dfe97f71f856517f2c9.mailgun.org/messages \
        -F from='Mailgun Sandbox <postmaster@sandbox91c6bb123f5f4dfe97f71f856517f2c9.mailgun.org>' \
        -F to='Spencer Scorcelletti <spencerscorcelletti@gmail.com>' \
        -F subject='Hello Spencer Scorcelletti' \
        -F text='Congratulations Spencer Scorcelletti, you just sent an email with Mailgun!  You are truly awesome!'
```
