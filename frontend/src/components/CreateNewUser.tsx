import {
  Badge,
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";
import { useFormActions } from "../hooks/useFormActions";
import { useAppSelector } from "../hooks/store";

export function CreateNewUser() {
  const { addNewUser, modifyUser } = useUserActions();
  const { changeGithub, changeMail, changeName, resetForm, switchModal } =
    useFormActions();
  const { values, openModal, userIdToEdit } = useAppSelector(
    (state) => state.form,
  );
  const [showErrorNotification, setshowErrorNotification] = useState(false);

  const handleClose = () => {
    resetForm();
    setshowErrorNotification(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, github } = values;

    if (!name || !email || !github) {
      return setshowErrorNotification(true);
    }

    if (userIdToEdit) {
      modifyUser({ name, email, github, id: userIdToEdit });
      return resetForm();
    }
    addNewUser({ name, email, github });
    setshowErrorNotification(false);

    resetForm();
  };

  return (
    <>
      <Button onClick={switchModal} className="my-10">
        Crea un nuevo usuario
      </Button>
      <Modal show={openModal} size="md" onClose={handleClose} popup>
        <ModalHeader />
        <ModalBody>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Tu nombre</Label>
              </div>
              <TextInput
                id="name"
                placeholder="Juancito"
                value={values.name}
                onChange={(event) => changeName(event.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Tu email</Label>
              </div>
              <TextInput
                value={values.email}
                onChange={(event) => changeMail(event.target.value)}
                id="email"
                placeholder="juancito@gmail.com"
                type="email"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="github">Tu github</Label>
              </div>
              <TextInput
                id="github"
                type="text"
                placeholder="juancito44"
                value={values.github}
                onChange={(event) => changeGithub(event.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button type="submit">
                {userIdToEdit ? "Editar Usuario" : "Crear Usuario"}
              </Button>
              {showErrorNotification && (
                <Badge color="failure">Problema con los campos</Badge>
              )}
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}
