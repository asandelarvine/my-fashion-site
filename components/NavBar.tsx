// // components/NavBar.tsx
// import contentfulClient from '@/lib/contentfulClient';
// import { Entry } from 'contentful';
// import Link from 'next/link';

// interface NavBarItemFields {
//   title: string;
//   link: string;
//   order: number;
// }

// const fetchNavItems = async (): Promise<Entry<NavBarItemFields>[]> => {
//   const entries = await contentfulClient.getEntries<NavBarItemFields>({
//     content_type: 'navBar',
//     order: 'fields.order',
//   });
//   return entries.items;
// };

// const NavBar = async () => {
//   const navItems = await fetchNavItems();

//   return (
//     <nav>
//       <ul>
//         {navItems.map((item) => (
//           <li key={item.sys.id}>
//             <Link href={item.fields.link}>{item.fields.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
