var service = [
    {
      title: 'Pet Grooming',
      image: './img/gerbile.jpg',
      price: '$7,500-15,000',
      description: "hello"
    },

    {
      title: 'Pet Grooming',
      image: './Princess.jpg',
      price: '$7,500-15,000',
      description: "hello"
    }
    
  
    
    ]
    
    var postHTML = " "
  
  
   
  
  
    for (var i=0; i < service.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + service[i].title + '</h5>'
        var image = '<img src="' + service[i].image + '"/'
        var price = '<p> $' + service[i].price + '</p></span>'
        var description = '<div class=""><p>'+ service[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('services').innerHTML = postHTML
  