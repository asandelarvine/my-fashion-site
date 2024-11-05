// import React from 'react';
// import { Button } from '@/components/ui/button.ui';


// import { Logs, Sheet } from 'lucide-react';
// import { menus } from '@/constants/menu.constants';
// import { SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet.ui';

// function NavbarShared() {
//   return (
//     <div className={`flex justify-around items-center w-screen p-2`}>
//       <div className={`mr-20`}>Logo</div>
//       <div className='hidden md:flex items-center pr-5'>
//         <div className={`flex gap-3 text-lg space-x-6 mr-10`}>
//           {menus.map((menu) => (
//             <div key={menu.name}>
//               <h2 className={`gap-5`}>
//                 <a href={menu.url} className={`hover:underline`}>
//                   {menu.name}
//                 </a>
//               </h2>
//             </div>
//           ))}
//         </div>
//         <div className={`flex gap-3 ml-5`}>
//           <Button variant={`outline`} size={`lg`}>
//             Join
//           </Button>
//           <Button variant={`outline`} size={`lg`}>
//             Login
//           </Button>
//           <Button variant={`outline`} size={`lg`}>
//             Request Demo
//           </Button>
//         </div>
//       </div>
//       <div className='flex  md:hidden '>
//         <Sheet>
//           <SheetTrigger>
//             <Logs />
//           </SheetTrigger>
//           <SheetContent>
//             <SheetTitle className='underline mb-5'>Menu</SheetTitle>
//             <div
//               className={`flex flex-col items-start gap-3 text-lg space-x-6 mr-10`}
//             >
//               {menus.map((menu) => (
//                 <div key={menu.name}>
//                   <h2 className={`gap-5`}>
//                     <a href={menu.url}>{menu.name}</a>
//                   </h2>
//                 </div>
//               ))}
//             </div>
//             <div className={`flex flex-col gap-3 ml-5`}>
//               <Button variant={`outline`} size={`lg`}>
//                 Join
//               </Button>
//               <Button variant={`outline`} size={`lg`}>
//                 Login
//               </Button>
//               <Button variant={`outline`} size={`lg`}>
//                 Request Demo
//               </Button>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// export default NavbarShared;
