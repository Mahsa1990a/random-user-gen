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
  methods: {         // we want to fetch random users through API with async await
    async getUser() {

      const response = await fetch("https://randomuser.me/api");
      // OR : const { results } = await response.json();
      const data = await response.json();
      const result = data.results;
      console.log(result); // will be arr of 1 obj will all data of person
      
      // console.log(this.firstName);
      this.firstName =  "Mohsen",
      this.lastName = "Manouchehri",
      this.email = "manouchehri62@gmail.com",
      this.gender = "male",
      this.picture = "https://e7.pngegg.com/pngimages/870/211/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png"
    }
  }
});

// to mount this app to that div in html:
app.mount('#app');