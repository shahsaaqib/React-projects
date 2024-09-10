import { collection, deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../../config/firebase";
import useDisclose from "../../hooks/useDisclose";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();
  const deleteContact = async (id) => {
    try {
      const contactRef = collection(db, "contacts");
      await deleteDoc(doc(contactRef, id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between rounded-lg bg-yellow p-2">
        <div className="ml-2 flex gap-2">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name} </h2>
            <p className="text-sm">{contact.email} </p>
          </div>
        </div>
        <div className="mr-2 flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        isUpdate
        contact={contact}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
