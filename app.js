const app = Vue.createApp({  //Vue => we have access to this obj, because of our CDN we have in html(script tag for Vue)
  // template: '<h1>Hello {{firstName}}</h1>', we can move our template into html
  // data is func that returns an obj
  data() {
    return {
      firstName: "Mahsa",
      lastName: "Ameri",
      email: "amerimahsa@yahoo.com",
      gender: "female",
      picture: "https://e7.pngegg.com/pngimages/961/160/png-clipart-bitstrips-avatar-emoji-avatar-comics-face.png"
    }
  },
  methodes: {
    getUser() {
      console.log(this.firstName);
    }
  }
});

// to mount this app to that div in html:
app.mount('#app');