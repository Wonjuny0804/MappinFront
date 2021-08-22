import { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import Share from "../Content/Share";
import Modal from "./Modal";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

export default {
  title: "component/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const ShareModal = (): JSX.Element => {
  const [isVisible, setVisibility] = useState(false);

  const closeModal = () => {
    setVisibility(false);
  };

  return (
    <>
      <Button type="button" onClick={() => setVisibility(true)} rounded>
        <Icon type="Share" />
      </Button>
      <Modal visible={isVisible} onClose={closeModal} title="공유하기">
        <Share />
      </Modal>
    </>
  );
};
