describe("For consuming wordpress endpoind",function(){
  $.getJSON("http://www.usernameisnull.com/data/wp-json/wp/v2/posts/?_embed",function(data){
    console.log(data);
  })
it("should have a json response",function(){
expect("foo").toEqual("bar");
})

})
