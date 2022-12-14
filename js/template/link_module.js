const nav_lists = [
    {
        link: 'about.html',
        name: '製床所時光機',
        show: 'block',
        lists: '',
    },
    {
        link: 'customize.html',
        name: '職人客製',
        show: 'block',
        lists: '',
    },
    {
        link: 'limited.html',
        name: '限時優惠',
        show: 'block',
        lists: '',
    },
    {
        link: 'products.html',
        name: '好眠商品',
        show: 'block',
        lists: [
            {
                listName: '床墊',
                listMainId: 0,
            },
            {
                listName: '床架/床頭櫃',
                listMainId: 1,
            },
            {
                listName: '衣櫃',
                listMainId: 2,
            },
        ]
    },
    {
        link: 'contactUs.html',
        name: '御柴客服',
        show: 'block',
        lists: '',
    },
]
let page_id = '';
switch(this_page){
    case 'main_page':
        page_id = 0;
        break;
    case 'about_page':
        page_id = 1;
        break;
    case 'customize_page':
        page_id = 2;
        break;
    case 'limited_page':
        page_id = 3;
        break;
    case 'products_page':
        page_id = 4;
        break;
    case 'contact_page':
        page_id = 5;
        break;
    default:
        page_id = 0;
        break;
}
export {nav_lists ,page_id};