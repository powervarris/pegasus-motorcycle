import React from "react";

let motorcycles = [
    {
        motorKey: "1",
        imgSRC:
            "https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr/hero/hero-right/cbr1000rr/2024/2024-cbr1000rr-hero-1023x450.jpg",
        brand: "Honda",
        model: "CBR1000RR",
        color: "Red",
        price: 15000,
    },
    {
        motorKey: "2",
        imgSRC:
            "https://www.yamaha-motor.com.au:443/-/media/products/motorcycle/road/supersport/2022/yzf-r6n/overview-panel/2022_yzf-r6_mdnm6_aus_stu_003_450x375.ashx",
        brand: "Yamaha",
        model: "YZF-R6",
        color: "Black",
        price: 12000,
    },
    {
        motorKey: "3",
        imgSRC:
            "https://kawasakileisurebikes.ph/assets/img-motorcycles/selected/images/2024-Ninja-650.jpg",
        brand: "Kawasaki",
        model: "Ninja 650",
        color: "Green",
        price: 9000,
    },
    {
        motorKey: "4",
        imgSRC:
            "https://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/gsx-r750/2022/gallery/gsx-r750m2_b9e_right_gallery_2400x1500.png?mh=500&mw=768&hash=CE03282C637DF1034E3E3F1E4A9725EE",
        brand: "Suzuki",
        model: "GSX-R750",
        color: "Red",
        price: 12500,
    },
    {
        motorKey: "5",
        imgSRC:
            "https://media.ducati.com/img/sbk6/panv4sp2/nmb/ee/sbk6-panv4sp2-nmb-22-bike-ee-99-100.png?p=sbk6-panv4sp2-nmb-&f=img%2Fsbk6%2Fpanv4sp2%2Fnmb%2Fee&c=_22-sellam-ee-01-095+_22-prfpst-ee-01-087+_22-cerchi-ee-01-085+_22-silnzt-ee-01-050+_22-winstd-ee-01-050+_22-portar-ee-01-050+_22-pnzfrn-ee-01-016+_22-cprfrz-ee-01-014+_22-pogpie-ee-01-010+_22-mancap-ee-01-010+resize=1920%3A%2A",
        brand: "Ducati",
        model: "Panigale V4",
        color: "Black",
        price: 20000,
    },
    {
        motorKey: "6",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/5e0de94f0dd75.webp",
        brand: "BMW",
        model: "S1000RR",
        color: "White",
        price: 18000,
    },
    {
        motorKey: "7",
        imgSRC:
            "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto/sitecoremedialibrary/media-library/images/motorcycles/roadsters-supersports/my23%20colours/speed%20triple%201200%20rs/pb1%20tyre%20image%20update/base%20images/speed-triple-1200-rs-matt-silver-ice-promo-tyre-update-955x537.jpg",
        brand: "Triumph",
        model: "Speed Triple",
        color: "Black",
        price: 14000,
    },
    {
        motorKey: "8",
        imgSRC:
            "https://d2bywgumb0o70j.cloudfront.net/2019/10/03/313445a19c356c063cfbf349777b5fac_94441d90178cfeb2.png",
        brand: "Harley-Davidson",
        model: "Sportster Iron 883",
        color: "Silver",
        price: 11000,
    },
    {
        motorKey: "9",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2022-ktm-rc-390-63213caee8c1b.webp",
        brand: "KTM",
        model: "RC 390",
        color: "Orange",
        price: 8500,
    },
    {
        motorKey: "10",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2023-present-aprilia-rsv4-1100-factory-658e5bd57085e.webp",
        brand: "Aprilia",
        model: "RSV4",
        color: "Black",
        price: 19500,
    },
    {
        motorKey: "11",
        imgSRC:
            "https://www.mvagusta.ro/media/filer_public/cf/94/cf94c88e-5624-444d-a0b1-eb33cf946357/_m802411-racing-.jpg",
        brand: "MV Agusta",
        model: "F4",
        color: "Red",
        price: 22000,
    },
    {
        motorKey: "12",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/5d7b873934e4a.webp",
        brand: "Indian",
        model: "Scout",
        color: "Brown",
        price: 13000,
    },
    {
        motorKey: "13",
        imgSRC:
            "https://www.webbikeworld.com/wp-content/uploads/2021/02/2021-Ducati-Monster-821-Side-View.pngv",
        brand: "Ducati",
        model: "Monster 821",
        color: "Red",
        price: 14500,
    },
    {
        motorKey: "14",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/suzuki-hayabusa-63da1f4fcc64b.webp",
        brand: "Suzuki",
        model: "Hayabusa",
        color: "Black",
        price: 17000,
    },
    {
        motorKey: "15",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2022-kawasaki-z900-624035af93e0e.webp",
        brand: "Kawasaki",
        model: "Z900",
        color: "Green",
        price: 10000,
    },
    {
        motorKey: "16",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2022-kawasaki-z900-624035af93e0e.webp",
        brand: "Honda",
        model: "CB650R",
        color: "Green",
        price: 13500,
    },
    {
        motorKey: "17",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2021-yamaha-mt-09-6121de4d7295f.webp",
        brand: "Yamaha",
        model: "MT-09",
        color: "Blue",
        price: 11000,
    },
    {
        motorKey: "18",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/5e184edf8e43d.webp",
        brand: "BMW",
        model: "R1250GS",
        color: "White",
        price: 22000,
    },
    {
        motorKey: "19",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2023-triumph-tiger-900-rally-pro-645a08e9ad281.webp",
        brand: "Triumph",
        model: "Tiger 900",
        color: "White",
        price: 15500,
    },
    {
        motorKey: "20",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2018-present-harley-davidson-fat-boy-114-64dc2bddc5740.webp",
        brand: "Harley-Davidson",
        model: "Fat Boy",
        color: "Black",
        price: 25000,
    },
    {
        motorKey: "21",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/ktm-1290-super-duke-r-6121de7ee70a8.webp",
        brand: "KTM",
        model: "Super Duke R",
        color: "Orange",
        price: 18000,
    },
    {
        motorKey: "22",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2023-present-aprilia-tuono-v4-1100-factory-658e65e62e3a0.webp",
        brand: "Aprilia",
        model: "Tuono V4",
        color: "Red",
        price: 19500,
    },
    {
        motorKey: "23",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2021-mv-agusta-brutale-800-611f3404dbad2.webp",
        brand: "MV Agusta",
        model: "Brutale 800",
        color: "Black",
        price: 17000,
    },
    {
        motorKey: "24",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/indian-chieftain-5f6b43cc4d9b7.webp",
        brand: "Indian",
        model: "Chieftain",
        color: "Black",
        price: 28000,
    },
    {
        motorKey: "25",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2020-ducati-diavel-1260-s-philippines-5e98043364620.webp",
        brand: "Ducati",
        model: "Diavel",
        color: "Black",
        price: 23000,
    },
    {
        motorKey: "26",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/5e1e642035446.webp",
        brand: "Suzuki",
        model: "V-Strom 650",
        color: "Yellow",
        price: 10000,
    },
    {
        motorKey: "27",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/5e1ea6ffe1128.webp",
        brand: "Kawasaki",
        model: "Versys 1000",
        color: "Green",
        price: 19000,
    },
    {
        motorKey: "28",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/5dda0486bde4a.webp",
        brand: "Honda",
        model: "Gold Wing",
        color: "Silver",
        price: 30000,
    },
    {
        motorKey: "29",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2022-yamaha-xsr900-62a5b5b8e4b67.webp",
        brand: "Yamaha",
        model: "XSR900",
        color: "Blue",
        price: 12000,
    },
    {
        motorKey: "30",
        imgSRC:
            "https://d29c80i09kxy2a.cloudfront.net/custom/motorcycle-model-photo/original/2020-bmw-f-850-gs-light-white-racing-philippines-5ea63c9ee1057.webp",
        brand: "BMW",
        model: "F850GS",
        color: "White",
        price: 18500,
    },
];

export default motorcycles;
