var service = [
    {
      title: 'Pet Grooming',
      image: "./groom.jpeg",
      price: '24.99-34.99',
      description: "Small pets to Large pets           All welcome!"
    },

    {
      title: 'Cat color',
      image: './catcoll.jpeg',
      price: '19.99-$22.99',
      description: " Collar for the cat's night out! "
    },
    {
    title: 'Stud collar',
    image: './pinkstud.jpg',
    price: '14.99-$19.99',
    description: "Stylish and pink!"
  },
  {
    title: 'Stylish leash',
    image: './styleash.jpg',
    price: '17.99-$21.99',
    description: "Full harness leash "
  },
  {
    title: 'Dish this!',
    image: './bowler.jpg',
    price: '11.99-$14.99',
    description: "Matching food/water"
  },
  {
    title: 'Organic Treat!',
    image: './orgbone.jpg',
    price: '7.99-$9.99',
    description: "Organic variety bones"
  },
  {
    title: 'Pet Shop Brand',
    image: "./dfood.jpg",
    price: '14.99-$17.99',
    description: "Delicious!"
  },
  {
    title: 'Pet Comfort',
    image: "./petcove.jpg",
    price: '22.99-$26.99',
    description: "Let's get COZY"
  },
  {
    title: 'Pet carrier',
    image: "./carrydog.jpg",
    price: '24.99-$34.99',
    description: "Carry On!"
  },
  {
    title: 'Puppy sweater',
    image: "./dsweater.jpg",
    price: '14.99-$17.99',
    description: "Wrap Me UP!"
  },
  {
    title: 'Cat Dishin\'',
    image: "./cdish.jpg",
    price: '16.99-$18.99',
    description: "Eat In Style"
  },
  {
    title: 'Bouncing Balls',
    image: "./petballs.jpg",
    price: '.99 -  $2.99',
    description: "Get the ball Jack!"
  },
  {
    title: 'Lounging Pad',
    image: "./Princess.jpg",
    price: '24.99-$29.99',
    description: "Just Be Lazy"
  },
  {
    title: 'Feline Tower',
    image: "./scratchtow.jpg",
    price: '20.99-$49.99',
    description: "For The Claws!"
  },
  {
    title: 'Pet Sitting/Walking',
    image: "./bluepark.jpg",
    price: '1-100....',
    description: "Inquire Within!!!"
  },
  {
    title: 'Kitty Play Toy',
    image: "./kittytoy.jpg",
    price: '2.99-$9.99',
    description: "Wide Variety"
  },







    ]










    
    
    var postHTML = " "
  
  
   
  
  
    for (var i=1; i < service.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + service[i].title + '</h5>'
        var image = '<img src="' + service[i].image + '"/'
        var price = '<p> $' + service[i].price + '</p></span>'
        var description = '<div class=""><p>'+ service[i].description + '</p><button type="button" class="btn"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('services').innerHTML = postHTML
  