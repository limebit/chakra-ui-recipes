import {
  useDisclosure,
  Modal,
  Button,
  IconButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";

interface DeleteModalProps {
  deleteHandler: () => void;
  title: string;
  ariaLabel: string;
}
export const DeleteModal = ({
  deleteHandler,
  title,
  ariaLabel,
}: DeleteModalProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        data-testid="delete-modal-icon"
        onClick={(e): void => {
          e.preventDefault();
          onOpen();
        }}
        width="5%"
        variant="ghost"
        aria-label={ariaLabel}
        icon={<DeleteIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay zIndex={1500} data-testid="modal-over-lay">
          <ModalContent data-testid="delete-modal-popup">
            <ModalHeader>Delete</ModalHeader>
            <ModalCloseButton data-testid="delete-modal-x-button" />
            <ModalBody>
              <Text>{title}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                mr={3}
                onClick={onClose}
                data-testid="delete-modal-cancel-button"
              >
                Cancel
              </Button>
              <Button
                data-testid="delete-modal-delete-button"
                variant="ghost"
                colorScheme="red"
                onClick={(): void => {
                  deleteHandler();
                  onClose();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
export default DeleteModal;
