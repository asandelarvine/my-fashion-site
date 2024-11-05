interface IMenu {
    name: string;
    url: string;
}

interface IItems {
    imageUrl: string;
    title: string;
    description: string;
    btnContent: string;
}

export const menus: IMenu[] = [
    {name: 'Explore Membership', url: '#'},
    {name: 'Shop Our Brands', url: '#'},
    {name: 'Work With Our Brands', url: '#'},
    {name: 'Pricing', url: '#'},
    {name: 'Blog', url: '#'}
]

export const items: IItems[] = [
    {
        imageUrl: 'https://www.thefolklore.com/cdn/shop/files/1_ea10a335-29b4-4333-be34-bd9c74007598_460x.png?v=1682427363',
        title: 'Folklore for Brands',
        description: 'Apply for a brand membership to access our tech, education, and community.',
        btnContent: 'Request to join'
    },
    {
        imageUrl: 'https://www.thefolklore.com/cdn/shop/files/2_58dd1b4a-3a88-4aa1-8d4f-52334e60fddd_460x.png?v=1682427331',
        title: 'The Folklore for Retailers',
        description: 'Apply to access our wholesale marketplace for free to start discovering and shopping brands.',
        btnContent: 'Join for free'
    },
    {
        imageUrl: 'https://www.thefolklore.com/cdn/shop/files/3_276b939d-c3c8-4634-aaca-21dc39ff7510_460x.png?v=1682427299',
        title: 'Folklore for Service Providers',
        description: 'Apply as a manufacturer or as a freelancer to offer services to our community of brands.',
        btnContent: 'Join for free'
    },
]

export const fotter1 = ['About', 'Consumer Shop', 'Careers', 'Newsroom', 'Contact']
export const fotter2 = ['Blog', 'Webinars', 'Newsletter', 'FAQs']
