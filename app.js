new Vue({
  el:"#vue-app",
  data:{
    name: 'Tijo',
    job:'Ninja',
    website:'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.google.com">GOOGLE</a>',
  },
  methods:{
    greet:function (time) {
      return 'Good '+time+" "+this.name+" and my website is "+this.website;
    }
  }
});
