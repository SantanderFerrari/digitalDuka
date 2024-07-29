export const PRODUCT_CATEGORIES = [
    {
        label:"UI kits",
        value: "ui_kits" as const,
        featured: [
            {
                name:"Editor picks",
                href:"#",
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name:"New Arrivals",
                href:"#",
                imageSrc: '/nav/ui-kits/new.jpg',
            },
            {
                name:"Best Sellers",
                href:"#",
                imageSrc: '/nav/ui-kits/purple.jpg',
            },
        ],
    },
    {
        label:"Icons",
        value: "icons" as const,
        featured: [
            {
                name:"Favourite Icon picks",
                href:"#",
                imageSrc: '/nav/icons/blue.jpg',
            },
            {
                name:"New Arrivals",
                href:"#",
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name:"Bestselling icons",
                href:"#",
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
]
