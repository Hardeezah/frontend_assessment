'use client'

// components/Modal.tsx
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#353342] w-full h-full flex flex-col">
        <div className="flex justify-between m-3">
        <Image
            onClick={() => router.push('/')}
            alt="logo"
            className="cursor-pointer m-3 "
            height="30"
            width="70"
            src="/images/logo.png"
        />
        <Image
            alt="close-btn"
            className="cursor-pointer block md:hidden self-end m-4 p-2"
            height="30"
            width="30"
            src="/images/close.png"
            onClick={onClose}
        />
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-[50px] text-white">
          <a href="#" className="text-[18px]">Home</a>
          <a href="#" className="text-[18px]">Services</a>
          <a href="#" className="text-[18px]">Careers</a>
          <a href="#" className="text-[18px]">Contact</a>
          <Button variant="outline" className='text-black text-xl bg-[#FEF6E4] p-7'>Get Started</Button>

        </nav>
      </div>
    </div>
  );
};

export default Modal;
