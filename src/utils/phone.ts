
export function formatPhoneNumber(phone?: string) {
    if (!phone) return '';
    // Loại bỏ ký tự không phải số
    const digits = phone.replace(/\D/g, '');
    // Format: 080-1234-5678 hoặc 090-123-4567
    if (digits.length === 10) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    if (digits.length === 11) {
        return `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
    }
    return phone; // Trả về nguyên bản nếu không đúng định dạng
}