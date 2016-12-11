describe("For displaying index with photo card components",function(){

/* Simple request to get (all) post data */
  describe("For grabbing all wp post data",function(){
    it("should return jason data for each post",function(){
      $.getJSON("http://www.usernameisnull.com/data/wp-json/wp/v2/posts/?_embed",function(data){
        $.each(data,function(i){
          console.log(data[i]);
        })
      })
      expect("foo").toEqual("bar");
    })
  })

  /* Now we have to grab the first x and lazy load into an infinite scroll
  /* Simple request to get (all) post data */
    describe("For grabbing first x wp post data and lazy loading x amount with infite scroll",function(){
      it("should return initial x jason data for each post",function(){
        $.getJSON("http://www.usernameisnull.com/data/wp-json/wp/v2/posts/?_embed",function(data){
          // $.each(data,function(i){
          //   console.log(data[i]);
          // })
        })
        expect("foo").toEqual("bar");
      })
      it("should return x number of post data when the user hits height cap",function(){
        $.getJSON("http://www.usernameisnull.com/data/wp-json/wp/v2/posts/?_embed",function(data){
          // $.each(data,function(i){
          //   console.log(data[i]);
          // })
        })
        expect("foo").toEqual("bar");
      })
    })

    describe("For tossing wp post data into photocard components",function(){
      it("should have wp posts data from api",function(){

        expect('foo').toEqual('bar')
      })
      it("should take that json response and for each post render a new photo card component to the dom",function(){

        expect('foo').toEqual('bar')
      })


    })


})
