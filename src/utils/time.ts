import { formatDistanceToNow } from 'date-fns';

export const formatTime = (date: string): string => {
    if (!date) return '';
    return formatDistanceToNow(new Date(date), { addSuffix: true })
}

