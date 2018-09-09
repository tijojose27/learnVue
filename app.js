var one = new Vue({
  el: "#vue-app-one",
  data: {
    title:'View App One'
  },
  methods: {
  },
  computed: {
      greet: function () {
        return 'Hello from app 1'
      }
  },
});


var two = new Vue({
  el: "#vue-app-two",
  data: {
    title:'View App Two'
  },
  methods: {
    changeTitle: function () {
      one.title="Title is changed";
    }
  },
  computed: {
    greet: function () {
      return 'hey app 1 from app two'
    },
  },
});

two.title="Changed from outside"
