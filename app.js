const app = Vue.createApp({  //Vue => we have access to this obj, because of our CDN we have in html(script tag for Vue)
  template: '<h1>Hello Wolrd</h1>'
});

// to mount this app to that div in html:
app.mount('#app');