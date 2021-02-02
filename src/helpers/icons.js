import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faMobile, faPaw, faLink, faFile } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faMobile, faPaw, faLink, faFile );
};

export default Icons;