import { customStyles } from "./ModalStyle";
import Modal from "react-modal";
export default function ModalElement(props) {
  const setIsOpen = props.setIsOpen;
  const modalIsOpen = props.modalIsOpen;
  const userData = props.userData;
  const closeModal = () => setIsOpen(false);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Profile Modal"
      overlayClassName="Overlay"
    >
      <div
        className="bg-blue relative  md:min-w-[32rem]  rounded-xl 
       border-gray-200  dark:bg-gray-800 dark:border-gray-700
        "
      >
        <button onClick={closeModal} className="text-red-700 text-md">
          close
        </button>
        <div className="flex justify-center ">
          <img
            src={userData.results.picture.large}
            className="rounded-full self-center border-2"
            alt="User"
          />
        </div>
        <div className="flex gap-8 text-lg content-center justify-center m-1 ">
          <div className="flex flex-col text-right text-lg self-center m-2 text-gray-700 dark:text-gray-500">
            <div className="mb-2 text-3xl  tracking-tight text-gray-800 dark:text-gray-200">
              Name:
            </div>
            <div className="mb-0.5 font-normal ">Gender:</div>
            <div className="mb-0.5 font-normal ">Age:</div>
            <div className="mb-0.5 font-normal ">Phone No:</div>
            <div className="mb-0.5 font-normal ">Email:</div>
            <div className="mb-0.5 font-normal ">Registered On:</div>
            <div className="mb-0.5 font-normal ">Cell:</div>
            <div className="mb-0.5 font-normal ">Location:</div>
          </div>
          <div className="flex flex-col text-left text-lg self-center m-2 font-normal text-gray-700 dark:text-gray-400">
            <div className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
              {userData.results.name.title + " "}
              {userData.results.name.first + " "}
              {userData.results.name.last}
            </div>
            <div className="mb-0.5">
              {userData.results.gender === "female" ? "Female" : "Male"}
            </div>
            <div className="mb-0.5">{userData.results.dob.age}</div>
            <div className="mb-0.5">{userData.results.phone}</div>
            <div className="mb-0.5">{userData.results.email}</div>
            <div className="mb-0.5">{userData.results.registered.date}</div>
            <div className="mb-0.5">{userData.results.cell}</div>
            <div className="mb-0.5">
              {userData.results.location.state + ", "}
              {userData.results.location.country}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
