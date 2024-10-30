// // components/Footer.tsx
// import contentfulClient from '@/lib/contentfulClient';
// import { Entry } from 'contentful';

// interface FooterFields {
//   links: string[];
//   socialMedia: string[];
// }

// const fetchFooter = async (): Promise<Entry<FooterFields> | undefined> => {
//   const entry = await contentfulClient.getEntries<FooterFields>({
//     content_type: 'footer',
//   });
//   return entry.items[0];
// };

// const Footer = async () => {
//   const footer = await fetchFooter();

//   if (!footer) {
//     return <p>No footer data available.</p>;
//   }

//   return (
//     <footer>
//       <ul>
//         {footer.fields.links.map((link, index) => (
//           <li key={index}>{link}</li>
//         ))}
//       </ul>
//       <ul>
//         {footer.fields.socialMedia.map((social, index) => (
//           <li key={index}>{social}</li>
//         ))}
//       </ul>
//     </footer>
//   );
// };

// export default Footer;
