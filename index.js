require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const github={
    "login": "AbhiiMiishraa",
    "id": 137890134,
    "node_id": "U_kgDOCDgJVg",
    "avatar_url": "https://avatars.githubusercontent.com/u/137890134?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AbhiiMiishraa",
    "html_url": "https://github.com/AbhiiMiishraa",
    "followers_url": "https://api.github.com/users/AbhiiMiishraa/followers",
    "following_url": "https://api.github.com/users/AbhiiMiishraa/following{/other_user}",
    "gists_url": "https://api.github.com/users/AbhiiMiishraa/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AbhiiMiishraa/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AbhiiMiishraa/subscriptions",
    "organizations_url": "https://api.github.com/users/AbhiiMiishraa/orgs",
    "repos_url": "https://api.github.com/users/AbhiiMiishraa/repos",
    "events_url": "https://api.github.com/users/AbhiiMiishraa/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AbhiiMiishraa/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abhishek Raj",
    "company": "Infosys",
    "blog": "",
    "location": "Hyderabad",
    "email": null,
    "hireable": null,
    "bio": "Hello there! I'm Abhishek Raj, a passionate software engineer 💻\r\n\r\n🎓 done B.Tech in Computer Science & Engineering",
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2023-06-27T10:52:07Z",
    "updated_at": "2024-03-03T09:36:29Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twitter',(req,res)=>{
    res.send('Hello Friends, this is twitter');

})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai and code</h1>');

})

app.get('/git',(req,res)=>{
    res.json(github);

})




app.listen(4000, () => {
  console.log(`Example app listening on port ${port}`)
})