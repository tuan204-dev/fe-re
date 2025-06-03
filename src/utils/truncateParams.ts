export const truncateParams = (
    params: Record<string, string | number | (string | number)[] | null | undefined | unknown> = {}
) => {
    // Loại bỏ các giá trị null hoặc rỗng
    const cleanedParams = Object.fromEntries(
        Object.entries(params).filter(
            ([_, value]) => value != null && !(Array.isArray(value) && value.length === 0) && value !== ''
        )
    );

    // Chuyển đổi các giá trị thành mảng [key, value] phù hợp cho URLSearchParams
    const entries: [string, string][] = [];
    Object.entries(cleanedParams).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((v) => {
                entries.push([key, String(v)]);
            });
        } else {
            entries.push([key, String(value)]);
        }
    });

    const _searchParams = new URLSearchParams(entries).toString();
    const _params = _searchParams ? `?${_searchParams}` : '';

    return _params;
};
