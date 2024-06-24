import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
 
const a = 25

// Table data
export const data = [

  {
    name: {
      prenom: "Cheikh Ahmed Tidiane",
      nom: "Gueye",
    },
    age: [`${a} ans`],
    address: "81 Rue Ahmadou Assane Ndoye",
    ville: "Dakar",
    email: "cheikhahmedtidiane219@gmail.com",
    action: (
      <>
        <div className="flex items-center">
          <button className="pe-9">
            {" "}
            <FaEye className="text-B"/>{" "}
          </button>
          <button className="pe-9">
            {" "}
            <FaEdit className="text-O"/>{" "}
          </button>
          <button className="pe-9">
            {" "}
            <FaTrash className="text-R"/>{" "}
          </button>
        </div>
      </>
    ),
  },
];

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
    accessorKey: "address",
    header: "Address",
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
