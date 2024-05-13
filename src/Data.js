import React from "react";

const motorcycles = [
    {
        "motorKey": 1001,
        "imgSRC": "https://wieck-honda-production.s3.amazonaws.com/photos/d7f21bc0737eec5d174ec4d54c15b26321ac62ac/preview-928x522.jpg",
        "brand": "Honda",
        "model": "CB500F",
        "color": "Black",
        "manuDate": "2021",
        "price": 6000
    },
    {
        "motorKey": 1002,
        "imgSRC": "https://www.webbikeworld.com/wp-content/uploads/2022/06/2022-Yamaha-R1-7.jpg",
        "brand": "Yamaha",
        "model": "YZF-R1",
        "color": "Blue",
        "manuDate": "2022",
        "price": 15000
    },
    {
        "motorKey": 1003,
        "imgSRC": "https://cdn-fastly.motorcycle.com/media/2023/03/06/9382966/media.jpg?size=414x575&nocrop=1",
        "brand": "Kawasaki",
        "model": "Ninja 300",
        "color": "Black",
        "manuDate": "2020",
        "price": 5000
    },
    {
        "motorKey": 1004,
        "imgSRC": "https://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/gsx-r750/2022/gallery/gsx-r750m2_b9e_right_gallery_2400x1500.png?mh=500&mw=768&hash=CE03282C637DF1034E3E3F1E4A9725EE",
        "brand": "Suzuki",
        "model": "GSX-R750",
        "color": "Red",
        "manuDate": "2021",
        "price": 10000
    },
    {
        "motorKey": 1005,
        "imgSRC": "https://cloudfront-us-east-1.images.arcpublishing.com/octane/4FT7KWDGQ5DGFFRLXYRKW4LS6I.jpg",
        "brand": "Harley-Davidson",
        "model": "Sportster Iron 883",
        "color": "Gray",
        "manuDate": "2022",
        "price": 12000
    },
    {
        "motorKey": 1006,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/5e0de94f0dd75.jpeg",
        "brand": "BMW",
        "model": "S1000RR",
        "color": "White",
        "manuDate": "2020",
        "price": 18000
    },
    {
        "motorKey": 1007,
        "imgSRC": "https://images.ctfassets.net/x7j9qwvpvr5s/70b4lv7p81N2JVB2oFK2Fc/fef96461401213f2ba464652b86c8841/Panigale-V4-SP-MY21-Model-Preview-1050x650.png",
        "brand": "Ducati",
        "model": "Panigale V4",
        "color": "Black",
        "manuDate": "2021",
        "price": 25000
    },
    {
        "motorKey": 1008,
        "imgSRC": "https://imgcdn.zigwheels.ph/large/gallery/color/134/2150/triumph-bonneville-t120-color-612694.jpg",
        "brand": "Triumph",
        "model": "Bonneville T120",
        "color": "Blue",
        "manuDate": "2022",
        "price": 13000
    },
    {
        "motorKey": 1009,
        "imgSRC": "https://cdn.motor1.com/images/mgl/qz9OZ/s1/2021-ktm-390-duke---right-white.jpg",
        "brand": "KTM",
        "model": "390 Duke",
        "color": "Orange",
        "manuDate": "2021",
        "price": 7000
    },
    {
        "motorKey": 1010,
        "imgSRC": "https://www.cycleworld.com/resizer/RIH7g7JKFFGdh8ZshviWGOLbXys=/1037x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/NYJMA3MHNJG2JPCLA5QFQ3FLIE.png",
        "brand": "Indian",
        "model": "Scout",
        "color": "Blue",
        "manuDate": "2020",
        "price": 11000
    },
    {
        "motorKey": 1011,
        "imgSRC": "https://cloudfront-us-east-1.images.arcpublishing.com/octane/ZAA7ALUHQ5F4VMUKRKPVZJPHHU.jpg",
        "brand": "Aprilia",
        "model": "RSV4",
        "color": "Gray",
        "manuDate": "2021",
        "price": 22000
    },
    {
        "motorKey": 1012,
        "imgSRC": "https://img.webike-cdn.net/moto_img/cg/9/8835/L_67d71ca5f55a8cb40aa9346c96.jpg",
        "brand": "MV Agusta",
        "model": "F4",
        "color": "White",
        "manuDate": "2022",
        "price": 28000
    },
    {
        "motorKey": 1013,
        "imgSRC": "https://www.totalmotorcycle.com/wp-content/uploads/2020/11/2021-Honda-CBR1000RR-ABS2.jpg",
        "brand": "Honda",
        "model": "CBR1000RR",
        "color": "Black",
        "manuDate": "2021",
        "price": 17000
    },
    {
        "motorKey": 1014,
        "imgSRC": "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/MT07/2020-Yamaha-MT07-EU-Ice_Fluo_-360-Degrees-001-03_Mobile.jpg",
        "brand": "Yamaha",
        "model": "MT-07",
        "color": "Grey",
        "manuDate": "2020",
        "price": 9000
    },
    {
        "motorKey": 1015,
        "imgSRC": "https://content2.kawasaki.com/ContentStorage/KMC/Products/9159/f146c739-ca81-4d96-80fd-c32d8a38b562.png?w=767",
        "brand": "Kawasaki",
        "model": "Vulcan S",
        "color": "Green",
        "manuDate": "2021",
        "price": 8000
    },
    {
        "motorKey": 1016,
        "imgSRC": "https://mc.suzuki.com.ph/app/uploads/2020/01/Hayabusa_0001_Hayabusa-Pearl-White-1.webp",
        "brand": "Suzuki",
        "model": "Hayabusa",
        "color": "White",
        "manuDate": "2022",
        "price": 20000
    },
    {
        "motorKey": 1017,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/harley-davidson-street-glide-special-vivid-black-606beece5f554.jpg",
        "brand": "Harley-Davidson",
        "model": "Street Glide",
        "color": "Black",
        "manuDate": "2021",
        "price": 25000
    },
    {
        "motorKey": 1018,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHTV8WbVm45UgieLbAgzHoG2RcXc8sBBw9LtVwnaPYA&s",
        "brand": "BMW",
        "model": "R1250GS",
        "color": "White",
        "manuDate": "2022",
        "price": 23000
    },
    {
        "motorKey": 1019,
        "imgSRC": "https://cdnmedia.endeavorsuite.com/images/catalogs/21028/products/detail/cda95fae-d34a-47ac-a4e4-7c41d7f1b19c.jpg",
        "brand": "Ducati",
        "model": "Monster 821",
        "color": "Black",
        "manuDate": "2021",
        "price": 16000
    },
    {
        "motorKey": 1020,
        "imgSRC": "https://cdn-0.totalmotorcycle.com/wp-content/uploads/2020/01/2020-Triumph-Speed-Triple-RS3.jpg",
        "brand": "Triumph",
        "model": "Speed Triple",
        "color": "White",
        "manuDate": "2020",
        "price": 18000
    },
    {
        "motorKey": 1021,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorvGz6AiCzCme2o94uXV8OTQQouRL16MzViCO6a8Smw&s",
        "brand": "KTM",
        "model": "1290 Super Duke R",
        "color": "Orange",
        "manuDate": "2022",
        "price": 25000
    },
    {
        "motorKey": 1022,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoerNrcR8PuhOiS7yh7KvvVTwJdGS1RZmKTMCji4SfGg&s",
        "brand": "Indian",
        "model": "Chieftain",
        "color": "Black",
        "manuDate": "2021",
        "price": 27000
    },
    {
        "motorKey": 1023,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8LLfS6QyvkQdlywF2s_SbHmFICU7QQ2nZf2PQjfPaQ&s",
        "brand": "Aprilia",
        "model": "Tuono V4",
        "color": "Black",
        "manuDate": "2020",
        "price": 19000
    },
    {
        "motorKey": 1024,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLPQkbnyYe6p3XwhqAuq69GdIXimsXcpUlF55qgTLtQ&s",
        "brand": "MV Agusta",
        "model": "Brutale",
        "color": "Black",
        "manuDate": "2022",
        "price": 26000
    },
    {
        "motorKey": 1025,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWj2AoS6813XCn87PMwu7brxoT-9KgPbZSEV8lJ5xKg&s",
        "brand": "Honda",
        "model": "Africa Twin",
        "color": "Blue",
        "manuDate": "2021",
        "price": 17000
    },
    {
        "motorKey": 1026,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/2022-yamaha-xsr900-62a5b5b8e4b67.jpeg",
        "brand": "Yamaha",
        "model": "XSR900",
        "color": "Blue",
        "manuDate": "2022",
        "price": 11000
    },
    {
        "motorKey": 1027,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/2022-kawasaki-z900-se-62e773faabec3.jpeg",
        "brand": "Kawasaki",
        "model": "Z900",
        "color": "Green",
        "manuDate": "2021",
        "price": 12000
    },
    {
        "motorKey": 1028,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS75ZGsF87vBo7N7Mjp-HH_Ggy4wIF23mm9vXCA_0UIQ&s",
        "brand": "Suzuki",
        "model": "Boulevard M109R",
        "color": "Black",
        "manuDate": "2020",
        "price": 14000
    },
    {
        "motorKey": 1029,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-aQa3BgVjzJgJAXQKzxJtwXKCeUDD2Y5e4ZfS34uPg&s",
        "brand": "Harley-Davidson",
        "model": "Street Glide",
        "color": "Red",
        "manuDate": "2022",
        "price": 30000
    },
    {
        "motorKey": 1030,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR015IyaPXGHGnOLQyJ5jMbn3RminD8FAr_7G4nRJNZgg&s",
        "brand": "BMW",
        "model": "R1250GS Adventure",
        "color": "Yellow",
        "manuDate": "2021",
        "price": 25000
    },
    {
        "motorKey": 1031,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Xm74e42QFngACoUPYp94VrQufIjVuX31oH4KBDhdEw&s",
        "brand": "Ducati",
        "model": "Diavel",
        "color": "Red",
        "manuDate": "2022",
        "price": 28000
    },
    {
        "motorKey": 1032,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7auoxhVDrrUVQzU_oLjxoL4EFDb75HUI-9k9emF_ig&s",
        "brand": "Triumph",
        "model": "Tiger 800",
        "color": "Black",
        "manuDate": "2020",
        "price": 15000
    },
    {
        "motorKey": 1033,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/ktm-790-duke-6320290fb2824.jpg",
        "brand": "KTM",
        "model": "790 Duke",
        "color": "Orange",
        "manuDate": "2021",
        "price": 12000
    },
    {
        "motorKey": 1034,
        "imgSRC": "https://cdn1.polaris.com/globalassets/indian/2021/model/vehicle-cards/chief-vintage-crimson-metallic.png?v=84e92d2b&format=webp",
        "brand": "Indian",
        "model": "Chief Vintage",
        "color": "Brown",
        "manuDate": "2022",
        "price": 26000
    },
    {
        "motorKey": 1035,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiH3EnDMUrKtBqT2uBVdrerFxB4kW-uCL6n2KO4NuuQw&s",
        "brand": "Aprilia",
        "model": "RS 660",
        "color": "Red",
        "manuDate": "2021",
        "price": 15000
    },
    {
        "motorKey": 1036,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-variant-photo/original/2021-mv-agusta-dragster-800-rr-611f3398a572e.png",
        "brand": "MV Agusta",
        "model": "Dragster",
        "color": "Black",
        "manuDate": "2020",
        "price": 24000
    },
    {
        "motorKey": 1037,
        "imgSRC": "https://cloudfront-us-east-1.images.arcpublishing.com/octane/66EPRLOUIJGO5BHCAZ3C7J436Y.jpg",
        "brand": "Honda",
        "model": "Gold Wing",
        "color": "Red",
        "manuDate": "2021",
        "price": 30000
    },
    {
        "motorKey": 1038,
        "imgSRC": "https://cdn-fastly.motorcycle.com/media/2023/06/26/11790901/media.jpg?size=1200x628",
        "brand": "Yamaha",
        "model": "FJR1300",
        "color": "Blue",
        "manuDate": "2022",
        "price": 22000
    },
    {
        "motorKey": 1039,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xf5Pix0xYrulZn_cxdyEiX4r1wn_HvALU9vK-MO1Jg&s",
        "brand": "Kawasaki",
        "model": "Versys",
        "color": "Green",
        "manuDate": "2021",
        "price": 14000
    },
    {
        "motorKey": 1040,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6sua2s3-Sb9a4q2oV-v1EyvUfq63BcdVzrRR1mkDUg&s",
        "brand": "Suzuki",
        "model": "V-Strom",
        "color": "Yellow",
        "manuDate": "2020",
        "price": 11000
    },
    {
        "motorKey": 1041,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-HjxixknNUeS0z1qkBaF73TiPoBNjF__vkTsEsrk1w&s",
        "brand": "Harley-Davidson",
        "model": "Road King",
        "color": "Black",
        "manuDate": "2021",
        "price": 28000
    },
    {
        "motorKey": 1042,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCl3LtQdPjljskT9h1AJS2A1O1W9EV373Q9GDRhAD6qw&s",
        "brand": "BMW",
        "model": "R nineT",
        "color": "Silver",
        "manuDate": "2022",
        "price": 17000
    },
    {
        "motorKey": 1043,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-variant-photo/original/ducati-multistrada-v4-s-radar-spoked-wheels-red-2021-present-65a0edf340030.jpg",
        "brand": "Ducati",
        "model": "Multistrada",
        "color": "Red",
        "manuDate": "2021",
        "price": 25000
    },
    {
        "motorKey": 1044,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvA3CIpvmcOAT0lvijJavkiwmV0pWLHjzUVCZ453n1SA&s",
        "brand": "Triumph",
        "model": "Rocket 3",
        "color": "Red",
        "manuDate": "2020",
        "price": 30000
    },
    {
        "motorKey": 1045,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaYkt4fMqIuKby9YLh-7UuEVI3pxzwhgvOTp032tLRg&s",
        "brand": "KTM",
        "model": "690 Enduro R",
        "color": "Orange",
        "manuDate": "2021",
        "price": 13000
    },
    {
        "motorKey": 1046,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGpJ5GBXe3DquTrAH0OramDhuI5PnautFnOtyg-GRfw&s",
        "brand": "Indian",
        "model": "Springfield",
        "color": "Brown",
        "manuDate": "2022",
        "price": 27000
    },
    {
        "motorKey": 1047,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOC5v8e1k-VnZUb4eGT1QyfKaNcH0qTi0T_O3w_3872A&s",
        "brand": "Aprilia",
        "model": "Caponord",
        "color": "Red",
        "manuDate": "2021",
        "price": 19000
    },
    {
        "motorKey": 1048,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_PzVp0Guv9vgaChBGi7uI1xexVw0iDp0_FQ-vyLcEQ&s",
        "brand": "MV Agusta",
        "model": "Rivale",
        "color": "Red",
        "manuDate": "2020",
        "price": 22000
    },
    {
        "motorKey": 1049,
        "imgSRC": "https://media.drive.com.au/obj/tx_rs:fit:1920:1080,q:50,w:1920/driveau/upload/cms/uploads/Xp9BoRTlRvOOHiFeJLmT",
        "brand": "Honda",
        "model": "VFR800",
        "color": "Silver",
        "manuDate": "2021",
        "price": 18000
    },
    {
        "motorKey": 1050,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdc0Xh1phta5nzjRNActH-WqlNapbODQ2-jPQ4i3Yxg&s",
        "brand": "Yamaha",
        "model": "Super Ténéré",
        "color": "Yellow",
        "manuDate": "2022",
        "price": 20000
    },
    {
        "motorKey": 1051,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboONGPNtASurcOCpAfCUHOp-UGChw2NelTs_dFpAmUw&s",
        "brand": "Kawasaki",
        "model": "Ninja H2",
        "color": "Green",
        "manuDate": "2021",
        "price": 35000
    },
    {
        "motorKey": 1052,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NCnWhib0ofKHH4a3y0r00udQ9jkG8DEhnvB_xMNjBw&s",
        "brand": "Suzuki",
        "model": "DR-Z400",
        "color": "Blue",
        "manuDate": "2020",
        "price": 8000
    },
    {
        "motorKey": 1053,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb12KlYbPqABDsrUJ3G4crJTu9AvlxFpBDq_Q1d7QNmw&s",
        "brand": "Harley-Davidson",
        "model": "Electra Glide",
        "color": "Blue",
        "manuDate": "2022",
        "price": 32000
    },
    {
        "motorKey": 1054,
        "imgSRC": "https://www.motorcyclistonline.com/resizer/YyPiYPpJ13awqEro09WtvY3jnk8=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/VJ2EYKFIANEQBNODLCUKJLEAUQ.jpg",
        "brand": "BMW",
        "model": "G310GS",
        "color": "White",
        "manuDate": "2021",
        "price": 8000
    },
    {
        "motorKey": 1055,
        "imgSRC": "https://images.ctfassets.net/x7j9qwvpvr5s/FiyNwh7dLeeum8wcWZWKS/fb5a1ec89a2cfe9073c726f1b954a3b5/Model-Menu-MY22-HYM-950-v06.png",
        "brand": "Ducati",
        "model": "Hypermotard",
        "color": "Red",
        "manuDate": "2020",
        "price": 15000
    },

    {
        "motorKey": 1056,
        "imgSRC": "https://media.triumphmotorcycles.co.uk/image/upload/q_auto/sitecoremedialibrary/media-library/images/motorcycles/modern-classics/my21/dx4%20bonneville%20bobber/base%20images/matt%20storm%20grey%20-%20matt%20ironstone/bonneville-bobber-matt-storm-grey-matt-ironstone-rhs-629.png",
        "brand": "Triumph",
        "model": "Bonneville Bobber",
        "color": "Black",
        "manuDate": "2022",
        "price": 14500
    },
    {
        "motorKey": 1057,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIjXM7bReozgqqQX7_BRWnrlr6WPY_ZiPIg5VvtgIow&s",
        "brand": "KTM",
        "model": "890 Duke",
        "color": "Orange",
        "manuDate": "2021",
        "price": 12500
    },
    {
        "motorKey": 1058,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6J6MWiVKmEFY8P0ZBNM-hLJ22jSjtW35VtCzmQ0SPA&s",
        "brand": "Indian",
        "model": "FTR 1200",
        "color": "Black",
        "manuDate": "2022",
        "price": 17000
    },
    {
        "motorKey": 1059,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEi7R5eqFH2pD6z6uSLg4K6pYjBRD6oyndA20lHi6gQ&s",
        "brand": "Aprilia",
        "model": "Shiver 900",
        "color": "Red",
        "manuDate": "2021",
        "price": 11000
    },
    {
        "motorKey": 1060,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Y_V5n9Kcmk4bdiMz0aShoOQzSJ-VqzbyBtemeteEEw&s",
        "brand": "MV Agusta",
        "model": "Turismo Veloce",
        "color": "Red",
        "manuDate": "2020",
        "price": 22000
    },
    {
        "motorKey": 1061,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHy4Uxw7aC7tPcS9nvzIPGnHAXaMJiw-XvhJEx6Aqhw&s",
        "brand": "Honda",
        "model": "CB650R",
        "color": "Black",
        "manuDate": "2021",
        "price": 8500
    },
    {
        "motorKey": 1062,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKEvhsgvKws2B4kM0pQaR6vdqXezcoltydzrZPCjRpw&s",
        "brand": "Yamaha",
        "model": "YZF-R6",
        "color": "Black",
        "manuDate": "2022",
        "price": 13500
    },
    {
        "motorKey": 1063,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRunf0EJ0NrfrDiCTHPIpjAVSSlpW5-oIm95qw_poFKHw&s",
        "brand": "Kawasaki",
        "model": "Z650",
        "color": "Green",
        "manuDate": "2021",
        "price": 8000
    },
    {
        "motorKey": 1064,
        "imgSRC": "https://cloudfront-us-east-1.images.arcpublishing.com/octane/D7KXSO7I7ZGF3AKT4XC2DBCK5E.jpg",
        "brand": "Suzuki",
        "model": "GSX-S750",
        "color": "Black",
        "manuDate": "2020",
        "price": 9500
    },
    {
        "motorKey": 1065,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1slPDTaX3UVaOqgWJQVVIDX3yi_EVnabkhx0FWkAfA&s",
        "brand": "Harley-Davidson",
        "model": "Fat Boy",
        "color": "Black",
        "manuDate": "2022",
        "price": 27000
    },
    {
        "motorKey": 1066,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNofYX1m6VWwGcvlU5HOAXA35zsRu5aMCyePKez8yBsQ&s",
        "brand": "BMW",
        "model": "S1000XR",
        "color": "Black",
        "manuDate": "2021",
        "price": 18000
    },
    {
        "motorKey": 1067,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/2020-ducati-streetfighter-v4-philippines-5e9e617cb4647.jpg",
        "brand": "Ducati",
        "model": "Streetfighter V4",
        "color": "Red",
        "manuDate": "2020",
        "price": 25000
    },
    {
        "motorKey": 1068,
        "imgSRC": "https://media.triumphmotorcycles.co.uk/image/upload/q_auto/sitecoremedialibrary/media-library/images/motorcycles/roadsters-supersports/my23%20colours/street%20triple%20rs/street-triple-rs_my22_carbon-black_rhs_629px.png",
        "brand": "Triumph",
        "model": "Street Triple RS",
        "color": "Black",
        "manuDate": "2022",
        "price": 14000
    },
    {
        "motorKey": 1069,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/ktm-390-adventure-philippines-2020-orange-5fe2edca8c203.jpg",
        "brand": "KTM",
        "model": "390 Adventure",
        "color": "Orange",
        "manuDate": "2021",
        "price": 11000
    },
    {
        "motorKey": 1070,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lQDqfCTaCZBQ_yY872C5nbKJrmnxgbzGRkcz-AGsPQ&s",
        "brand": "Indian",
        "model": "Chief Dark Horse",
        "color": "Black",
        "manuDate": "2021",
        "price": 24000
    },
    {
        "motorKey": 1071,
        "imgSRC": "https://wlassets.aprilia.com/wlassets/aprilia/master/Range/tuareg/hotspot/Aprilia_Tuareg_veicolo_750x500/original/Aprilia_Tuareg_veicolo_750x500.png?1695648762263",
        "brand": "Aprilia",
        "model": "Tuareg 660",
        "color": "Blue",
        "manuDate": "2022",
        "price": 15000
    },
    {
        "motorKey": 1072,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-variant-photo/original/2021-mv-agusta-brutale-800-rr-611f30d803508.png",
        "brand": "MV Agusta",
        "model": "Brutale 800",
        "color": "Red",
        "manuDate": "2021",
        "price": 17000
    },
    {
        "motorKey": 1073,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbsAOjJWRyHpF_C-IHvPZGmeYuQNgQGjNbeU8wnxbTg&s",
        "brand": "Honda",
        "model": "CBR650R",
        "color": "Red",
        "manuDate": "2022",
        "price": 12000
    },
    {
        "motorKey": 1074,
        "imgSRC": "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/2021-yamaha-tenere-700-609cfa1c2d695.jpg",
        "brand": "Yamaha",
        "model": "Tenere 700",
        "color": "Blue",
        "manuDate": "2021",
        "price": 13000
    },
    {
        "motorKey": 1075,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNTupLxacWCtwyOmz8nUOQLjvt2FbCSmWQbg6AB-0Bw&s",
        "brand": "Kawasaki",
        "model": "Ninja 400",
        "color": "Green",
        "manuDate": "2020",
        "price": 7000
    },
    {
        "motorKey": 1076,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PRavqxpOreW3zqQOOim9I5L3asI7PTNa1sNJjESr-w&s",
        "brand": "Suzuki",
        "model": "SV650",
        "color": "Blue",
        "manuDate": "2022",
        "price": 8000
    },
    {
        "motorKey": 1077,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPM8bB_IcA5yi-NAe7xPdz0LmVEULbDj7jJutkpK6O4g&s",
        "brand": "Harley-Davidson",
        "model": "Roadster",
        "color": "Black",
        "manuDate": "2021",
        "price": 15000
    },
    {
        "motorKey": 1078,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNSfaCpoGLBsQ8gkbkFI7K6tQ-zfvicMhvDBC4t93eA&s",
        "brand": "BMW",
        "model": "F850GS",
        "color": "Blue",
        "manuDate": "2020",
        "price": 14000
    },
    {
        "motorKey": 1079,
        "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRrEBwFgp1r2Cni4iRsJRIsGqEAhFu3vSfI24pPuYpw&s",
        "brand": "Ducati",
        "model": "Scrambler 1100",
        "color": "Yellow",
        "manuDate": "2022",
        "price": 17000
    },
    {
        "motorKey": 1080,
        "imgSRC": "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto/sitecoremedialibrary/media-library/images/motorcycles/adventure-touring/my22/2022%20tiger%201200/base%20images/rally%20pro/my22-tiger-1200-rally-pro-sapphire-black-rhs-629.png",
        "brand": "Triumph",
        "model": "Tiger 1200",
        "color": "Black",
        "manuDate": "2021",
        "price": 18000
    },
    
  
];

export default motorcycles;
