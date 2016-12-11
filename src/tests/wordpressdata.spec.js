describe("For consuming wordpress endpoind",function(){

it("initial json respsone should return image and date",function(){
  $.getJSON("http://www.usernameisnull.com/data/wp-json/wp/v2/posts/?_embed",function(data){
    $.each(data,function(i){
      console.log(data[i]);
    })

  })
expect("foo").toEqual("bar");
})

})
