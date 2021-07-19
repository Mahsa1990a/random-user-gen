const app = Vue.createApp({  //Vue => we have access to this obj, because of our CDN we have in html(script tag for Vue)
  template: '<h1>Hello {{firstName}}</h1>',
  // data is func that returns an obj
  data() {
    return {
      firstName: "John"
    }
  }
});

// to mount this app to that div in html:
app.mount('#app');