'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AdmissionForm from './widgets/AdmissionForm';

export default function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('hasSeenAdmissionModal');
    if (!hasSeenModal) {
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasSeenAdmissionModal', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Admission enquiry form</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <AdmissionForm />
        </div>
      </DialogContent>
    </Dialog>
  );
} 