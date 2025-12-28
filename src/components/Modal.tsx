import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import "./Modal.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])
    
    if ( !isOpen ) return null;

    const modalContent = (
        <div className='modal-overlay' onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    { title && <h2>{title}</h2> }
                </div>
                <div className="close-container">
                    <svg 
                        onClick={onClose}
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="modal-close"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                {children}
            </div>
        </div>
    )

    // mount to modal-root
    return createPortal(
        modalContent,
        document.getElementById('modal-root')!
    )
}