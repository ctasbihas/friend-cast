import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="First Name"
            name="FirstName"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last Name"
            name="LastName"
          />
        </div>
        <div>
        <input
            type="text"
            className="infoInput"
            placeholder="Works At"
            name="WorksAt"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Lives in"
            name="LivesIn"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Country"
            name="Country"
          />
        </div>
        <div>
            <input type="text" className="infoInput" placeholder="RelationShip Status" />
        </div>
        <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModal;
