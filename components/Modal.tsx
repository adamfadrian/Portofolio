import { motion, AnimatePresence } from 'framer-motion'
import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
  showModal?: boolean
  onClose?: () => void
}

const Modal: FC<Props> = ({ showModal = false, children, onClose }) => {
  const handleOverlayClick = () => {
    if (onClose) onClose();
  };

  if (!showModal) return null;

  return (
    <AnimatePresence>
      {
        showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center m-2">
            <motion.div className="fixed inset-0 backdrop-blur-sm" onClick={handleOverlayClick}></motion.div>
            <motion.div className="bg-white rounded-lg shadow-lg z-10 p-6">{children}</motion.div>
          </motion.div>

        )
      }
    </AnimatePresence>

  )
}

export default Modal