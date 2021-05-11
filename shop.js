var service = [
    {
      title: 'Pet Grooming',
      image: "./groom.jpeg",
      price: '24.99-34.99',
      description: "Small pets to Large pets All welcome!"
    },

    {
      title: 'Cat collars',
      image: './Fuckincollar.jpeg',
      price: '19.99-$22.99',
      description: "Stylish new collar for the cat's night out! "
    },
    {
    title: 'Stud collar',
    image: './pinkstud.jpg',
    price: '14.99-$19.99',
    description: "Stylish and pink studded collar!"
  },
  {
    title: 'Pet Spanking',
    image: './groom.jpeg',
    price: '$7,500-15,000',
    description: "hello I think cheese is best melted"
  },
  {
    title: 'Pet Spanking',
    image: './groom.jpeg',
    price: '$7,500-15,000',
    description: "hello my whiskers are peppered"
  },
  {
    title: 'Pet Spanking',
    image: './groom.jpeg',
    price: '$7,500-15,000',
    description: "hello I crave moisture as well as cat feces"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },
  {
    title: 'Pet Grooming',
    image: "./groom.jpeg",
    price: '24.99-34.99',
    description: "Small pets to Large pets"
  },







    ]










    
    
    var postHTML = " "
  
  
   
  
  
    for (var i=0; i < 12; i++){
        var heading = '<div class="product ' + '"><span><h5>' + service[i].title + '</h5>'
        var image = '<img src="' + service[i].image + '"/'
        var price = '<p> $' + service[i].price + '</p></span>'
        var description = '<div class=""><p>'+ service[i].description + '</p><button type="button" class="btn"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('services').innerHTML = postHTML
  