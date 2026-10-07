import { TrashIcon } from 'lucide-react';
import type { Booking } from '@/app/_lib/types';

interface DeleteReservationProps {
  bookingId: Booking['id'];
}

function DeleteReservation({ bookingId }: DeleteReservationProps) {
  return (
    <button className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
      <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
      <span className='mt-1'>Delete</span>
    </button>
  );
}

export default DeleteReservation;
