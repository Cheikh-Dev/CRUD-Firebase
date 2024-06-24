import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
 
const a = 25

// Table data
// export const data = [
//   {
//     name: {
//       prenom: "Cheikh Ahmed Tidiane",
//       nom: "Gueye",
//     },
//     age: [`${a} ans`],
//     adresse: "81 Rue Ahmadou Assane Ndoye",
//     ville: "Dakar",
//     email: "cheikhahmedtidiane219@gmail.com",
//     action: (
//       <>
//         <div className="flex items-center">
//           <button className="pe-9">
//             {" "}
//             <FaEye className="text-B"/>{" "}
//           </button>
//           <button className="pe-9">
//             {" "}
//             <FaEdit className="text-O"/>{" "}
//           </button>
//           <button className="pe-9">
//             {" "}
//             <FaTrash className="text-R"/>{" "}
//           </button>
//         </div>
//       </>
//     ),
//   },
// ];

export const columns = [
  {
    accessorKey: "name.prenom",
    header: "Prenom",
    size: 150,
  },
  {
    accessorKey: "name.nom",
    header: "Nom",
    size: 150,
  },
  {
    accessorKey: "age",
    header: "Age",
    size: 150,
  },
  {
    accessorKey: "adresse",
    header: "Adresse",
    size: 200,
  },
  {
    accessorKey: "ville",
    header: "Ville",
    size: 150,
  },
  {
    accessorKey: "email",
    header: "Email",
    size: 150,
  },
  {
    accessorKey: "action",
    header: "Bouttons d'action",
    size: 150,
  },
];

export const fields = [
  { id: "prenom", type: "text", name: "prenom", placeholder: "Prenom" },
  { id: "nom", type: "text", name: "nom", placeholder: "Nom" },
  { id: "age", type: "number", name: "age", placeholder: "Age" },
  { id: "adresse", type: "text", name: "adresse", placeholder: "Adresse" },
  { id: "ville", type: "text", name: "ville", placeholder: "Ville" },
  { id: "email", type: "email", name: "email", placeholder: "Email Address" },
];