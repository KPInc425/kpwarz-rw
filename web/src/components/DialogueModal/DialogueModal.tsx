import { useEffect } from 'react'

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

const DialogueModal = ({
  title,
  dialogue,
  primaryAction,
  secondaryAction = null,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    console.log('DialogueModal mounted')
    onOpen()
  }, [])

  const handlePrimaryAction = () => {
    console.log('primary action')
    primaryAction.action()
  }

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title || 'Modal Title'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {dialogue || 'Insert something here, get from calling component.'}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" onClick={handlePrimaryAction}>
              {primaryAction.name || 'Primary Action'}
            </Button>
            {secondaryAction && (
              <Button colorScheme="grey" variant="ghost">
                {secondaryAction.name || 'Secondary Action'}
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DialogueModal
