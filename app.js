new Vue({
  el: "#vue-app",
  data: {
    characters:['Batman', 'Superman', 'Aquaman'],
    marvel:[
      {name: 'Ironman', age:25},
      {name: 'Captian', age:99},
      {name: 'Thor', age:75},
    ]
  },
  methods: {
    // addtoA:function () {
    //   return this.a+this.age;
    // },
    // addtoB:function () {
    //   return this.b+this.age;
    // }
  },
  computed: {

  },
});
