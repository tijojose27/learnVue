new Vue({
  el: "#vue-app",
  data: {
    available:false,
    nearby:false
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
    compClasses: function () {
      return {
        available: this.available,
        nearby:this.nearby
      }
    }
  },
});
