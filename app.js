new Vue({
  el:"#vue-app",
  data:{
    age: 25,
    x:0,
    y:2,
  },
  methods:{
    add: function (inc) {
      this.age+=inc;
    },
    subtract: function (dec) {
      this.age-=dec;
    },
    updateXY: function (event) {
      console.log(event.offsetX +" , "+event.offsetY);
      this.x=event.offsetX;
      this.y=event.offsetY;
    },
    click: function () {
      alert("You clicked me");
    }
  }
});
