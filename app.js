new Vue({
  el: "#vue-app",
  data: {
    age: 21,
    a:0,
    b:0
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
    addtoA:function () {
      return this.a+this.age;
    },
    addtoB:function () {
      return this.b+this.age;
    }
  },
});
