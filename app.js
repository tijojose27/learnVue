new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: 0,
    y: 2,
  },
  methods: {
    logName: function() {
      console.log('You have entered your name');
    },
    logAge: function() {
      console.log('You have entered your age');
    },
  }
});
