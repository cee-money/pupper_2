const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pupper");
const pupSeed = [{
    dogName: "Buddy",
    size: "small",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Frank",
    ownerLastName: "Smith",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/51493028_3156638835047_8658433406201233408_o.jpg?_nc_cat=110&_nc_oc=AQkc_MhcuTpB9iVgfKU_IkL2FG6AhkVyeum48eeLXIqvAnsvT8L5iuVHmpagV5njyL4&_nc_ht=scontent-den4-1.xx&oh=77179099655e14e0b253dcac70676e3c&oe=5DEC2FED"
},
{
    dogName: "Pupper",
    size: "small",
    familyFriendly: "yes",
    energetic: "no",
    lazy: "no",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Fred",
    ownerLastName: "Johnson",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
},
{
    dogName: "Lilo",
    size: "small",
    familyFriendly: "yes",
    energetic: "no",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Betty",
    ownerLastName: "Ford",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080"
},
{
    dogName: "Hooch",
    size: "small",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Tom",
    ownerLastName: "Hanks",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2019%2F06%2Fshetland-sheepdog.jpg&w=400&c=sc&poi=face&q=85"
},
{
    dogName: "Rose",
    size: "small",
    familyFriendly: "yes",
    energetic: "no",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Rosie",
    ownerLastName: "O'Donnell",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://amp.businessinsider.com/images/5ab514477708e97acc0f0cc9-750-562.jpg"
},
{
    dogName: "Lady",
    size: "medium",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Bill",
    ownerLastName: "Nye",
    ownerEmail: "cdaltonparsons@gmail.com.com",
    url: "https://i.huffpost.com/gen/3754046/original.jpg"
},
{
    dogName: "Tramp",
    size: "medium",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Ivanka",
    ownerLastName: "Tramp",
    ownerEmail: "cdaltonparsons@gmail.com.com",
    url: "https://cdn.vox-cdn.com/thumbor/lQHYF_Gqpv77XSfMJZseaSDLFzQ=/0x0:4000x1672/1200x800/filters:focal(379x414:1019x1054)/cdn.vox-cdn.com/uploads/chorus_image/image/59108275/isle1.0.jpg"
},
{
    dogName: "Bobo",
    size: "medium",
    familyFriendly: "yes",
    energetic: "no",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Amy",
    ownerLastName: "Poehler",
    ownerEmail: "cdaltonparsons@gmail.com.com",
    url: "https://cdn.the-scientist.com/assets/articleNo/64930/aImg/29067/labs-s.jpg"
},
{
    dogName: "Waffles",
    size: "small",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "no",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "no",
    smallDogDanger: "no",
    dominant: "no",
    doesntShare: "no",
    chaser: "no",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Charlie",
    ownerLastName: "Parsons",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/60390902_10101008321996756_1175734588471771136_n.jpg?_nc_cat=109&_nc_oc=AQlQ2yiAQVXdBVoLObUfurGUCWreTIx1L8JJYlG3EN0vl5Q-zfcWdKuXtCkkttLh3U4&_nc_ht=scontent-den4-1.xx&oh=44a1743e943720321d47c9abdb7ec65a&oe=5DB0"
},
{
    dogName: "Aphrodite",
    size: "medium",
    familyFriendly: "yes",
    energetic: "no",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Zeus",
    ownerLastName: "",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://www.holidogtimes.com/wp-content/uploads/2017/12/corgi-raisons-fi.png"
},
{
    dogName: "Stitch",
    size: "large",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Pete",
    ownerLastName: "Buttigieg",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/220px-Stitch_%28Lilo_%26_Stitch%29.svg.png"
},
{
    dogName: "Brutus",
    size: "large",
    familyFriendly: "yes",
    energetic: "no",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Kamala",
    ownerLastName: "Harris",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://i.ytimg.com/vi/M2Hl-lkupcc/hqdefault.jpg"
},
{
    dogName: "Tiana",
    size: "large",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Mitch",
    ownerLastName: "Doe",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://i.ytimg.com/vi/3dcli9i_pvA/hqdefault.jpg"
},
{
    dogName: "Poppy",
    size: "large",
    familyFriendly: "yes",
    energetic: "no",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Megan",
    ownerLastName: "Markle",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAllSxXVEKByW0xZ8k5M0kZvRen6XWahCqVjYopw0riVG6wmC"
},
{
    dogName: "Tugger",
    size: "medium",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "no",
    dogDanger: "no",
    largeDogDanger: "no",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "no",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Steve",
    ownerLastName: "Miller",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdnzC2i0lle1vduvJ_BvfgX5c8c98kIdARxxVqpuka_Rx8XxLCw"
},
{
    dogName: "Larry",
    size: "large",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "no",
    dogDanger: "no",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "no",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Larry",
    ownerLastName: "Jones",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://cdn.editorchoice.com/wp-content/uploads/2019/06/dogtilt.jpg"
},
{
    dogName: "Leila",
    size: "small",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Eric",
    ownerLastName: "Clapton",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://i.imgur.com/mHnEQaQ.jpg"
},
{
    dogName: "Mika",
    size: "large",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "no",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Beyonce",
    ownerLastName: "Knowles",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://i.imgur.com/52jBCEB.jpg"
},
{
    dogName: "Mizu",
    size: "medium",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "yes",
    strangerDanger: "yes",
    dogDanger: "yes",
    largeDogDanger: "yes",
    smallDogDanger: "yes",
    dominant: "yes",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Jim",
    ownerLastName: "James",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://i.imgur.com/KaT5ZLu.jpg"
},
{
    dogName: "Hermione",
    size: "large",
    familyFriendly: "yes",
    energetic: "no",
    lazy: "yes",
    strangerDanger: "no",
    dogDanger: "yes",
    largeDogDanger: "no",
    smallDogDanger: "no",
    dominant: "no",
    doesntShare: "yes",
    chaser: "no",
    wrestler: "no",
    allDogFriendly: "yes",
    ownerFirstName: "JK",
    ownerLastName: "Rowling",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://s3.us-west-2.amazonaws.com/photos.puppyspot.com/breeds/299/card/500000290_medium.jpg"
},
{
    dogName: "Walter",
    size: "medium",
    familyFriendly: "yes",
    energetic: "yes",
    lazy: "no",
    strangerDanger: "no",
    dogDanger: "no",
    largeDogDanger: "no",
    smallDogDanger: "no",
    dominant: "yes",
    doesntShare: "yes",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "John",
    ownerLastName: "Goodman",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://live.staticflickr.com/65535/48332499507_5ca1c05331_z.jpg"
},
{
    dogName: "PJ",
    size: "medium",
    familyFriendly: "no",
    energetic: "yes",
    lazy: "no",
    strangerDanger: "no",
    dogDanger: "no",
    largeDogDanger: "no",
    smallDogDanger: "no",
    dominant: "no",
    doesntShare: "no",
    chaser: "yes",
    wrestler: "yes",
    allDogFriendly: "yes",
    ownerFirstName: "Tim",
    ownerLastName: "Ryan",
    ownerEmail: "cdaltonparsons@gmail.com",
    url: "https://live.staticflickr.com/65535/48332363666_b99a1edce8_z.jpg"
}
]
  
  db.Pupper.remove({})
    .then(() => db.Pupper.collection.insertMany(pupSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });