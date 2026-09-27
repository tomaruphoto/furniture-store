
const items = [
    {
        //写真: Rumman Amin(https://unsplash.com/ja/@rumanamin)
        img: "img/rumman-amin-sideboard.jpg",
        id: "sideboard",
        name: "サイドボード",
        size: "幅45×奥行50×高さ80cm",
        material: "スチール、天然木",
        description: "シンプルながら、木の温もりを感じられるサイドボード",
        price: 99999
    },
    {
        //写真: Kam Idris(https://unsplash.com/ja/@ka_idris)
        img: "img/kam-idris-_chair.jpg",
        id: "chair",
        name: "チェア",
        size: "幅45×奥行50×高さ80cm",
        material: "座面:ファブリック、脚部:スチール",
        description: "温かみのある外観と座り心地を両立したチェア",
        price: 99999
    },
    {
        //写真: Phillip Goldsberry(https://unsplash.com/ja/@phillipgold)
        img: "img/phillip-goldsberry-sofa.jpg",
        id: "sofa",
        name: "ソファ",
        size: "幅180×奥行85×高さ80cm",
        material: "張地:ファブリック、脚部:天然木",
        description: "ご家族のだんらんの時間にぴったりなゆったりとしたサイズ",
        price: 99999
    },
    {
        //写真: Connor Home(https://unsplash.com/ja/@connorhome)
        img: "img/connor-home-cafetable.jpg",
        id: "cafetable",
        name: "コーヒーテーブル",
        size: "幅60×奥行60×高さ40cm",
        material: "天板:ガラス、脚部:スチール",
        description: "利便性とシックな見た目を両立したテーブル",
        price: 99999
    },
    {
        //写真: Frank Weichelt(https://unsplash.com/ja/@frankweichelt)
        img: "img/frank-weichelt-walllamp.jpg",
        id: "wallramp",
        name: "ウォールランプ",
        size: "幅30×奥行15×高さ20cm",
        material: "スチール",
        description: "夕日のような暖かな光と手ごろなサイズ",
        price: 99999
    },
    {
        //写真: Kam Idris(https://unsplash.com/ja/@ka_idris)
        img: "img/kam-idris-leathersofa.jpg",
        id: "leathersofa",
        name: "レザーソファ",
        size: "幅70×奥行50×高さ80cm",
        material: "レザー",
        description: "レザーの高級感を感じられる座り心地の良いソファ",
        price: 99999
    },
    {
        //写真:Kellin McClintock(https://unsplash.com/ja/@kelli_mcclintock)
        img: "img/kelli-mcclintock-sidetable.jpg",
        id: "sidetable",
        name: "サイドテーブル",
        size: "幅45×奥行50×高さ80cm",
        material: "天然木",
        description: "モダンな色合いでどんな部屋でも",
        price: 99999
    },
    {
        //写真: Hannah Busing(https://unsplash.com/ja/@hannahbusing)
        img: "img/hannah-busing-desk.jpg",
        id: "desk",
        name: "デスク",
        size: "幅45×奥行50×高さ80cm",
        material: "天然木",
        description: "木材の温かみのあるデザインでどんな部屋とも",
        price: 99999
    },
    {
        //写真: Kam Idris(https://unsplash.com/ja/@ka_idris)
        img: "img/kam-idris-desks.jpg",
        id: "desks",
        name: "デスク",
        size: "幅45×奥行50×高さ40cm",
        material: "ガラス",
        description: "クリアでモダンな雰囲気を感じる作り",
        price: 99999
    },
    {
        //写真: Denys Striyeshyn(https://unsplash.com/ja/@denysstriyeshyn)
        img: "img/denys-striyeshyn-woodtables.jpg",
        id: "woodtables",
        name: "ウッドテーブル",
        size: "幅110×奥行50×高さ80cm",
        material: "天然木",
        description: "シンプルな見た目 リビングにも自室にも",
        price: 99999
    },
    {
        //写真: Raygar He(https://unsplash.com/ja/@raygar)
        img: "img/raygar-he-counterchair.jpg",
        id: "counterchair",
        name: "カウンターチェア",
        size: "幅45×奥行50×高さ80cm",
        material: "座面:天然木、脚部:スチール",
        description: "シンプルかつ木目を生かした温かみを感じる見た目",
        price: 99999
    },
    {
        //写真: Sarah khan(https://unsplash.com/ja/@itssarahkhan)
        img: "img/sarah-khan-sofa.jpg",
        id: "largesofa",
        name: "ソファ",
        size: "幅100×奥行50×高さ55cm",
        material: "ファブリック",
        description: "ベーシックな見た目 大人数でゆったりと腰掛けられるサイズ",
        price: 99999
    },
    {
        //写真: Urban Vintage(https://unsplash.com/ja/@urban_vintage)
        img: "img/urban-vintage-pairchair.jpg",
        id: "pairchair",
        name: "ペアーチェア",
        size: "幅45×奥行40×高さ45cm",
        material: "座面:ファブリック、脚部:スチール",
        description: "白を基調としたペアチェア 特別なひと時を",
        price: 99999
    },
    {
        //写真: Clay Banks(https://unsplash.com/ja/@claybanks)
        img: "img/clay-banks-relaxchair.jpg",
        id: "relaxchair",
        name: "リラックスチェア",
        size: "幅50×奥行55×高さ40cm",
        material: "天然木",
        description: "深く腰掛けられるゆったりとしたチェア",
        price: 99999
    },
    {
        //写真: Tiana Borcherding(https://unsplash.com/ja/@tianabo)
        img: "img/tiana-borcherding-woodensideboard.jpg",
        id: "woodensideboard",
        name: "ウッドサイドボード",
        size: "幅45×奥行40×高さ70cm",
        material: "天然木、スチール",
        description: "明るい色みで部屋に暖かさを感じられる仕上がり",
        price: 99999
    },
    {
        //写真: Inside Weather(https://unsplash.com/ja/@insideweather)
        img: "img/inside-weather-minichair.jpg",
        id: "minichair",
        name: "ミニチェア",
        size: "幅40×奥行30×高さ60cm",
        material: "スチール、天然木",
        description: "お子さんやちょっとした作業スペースに",
        price: 99999
    }
];
