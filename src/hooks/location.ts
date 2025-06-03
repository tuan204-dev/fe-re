import LocationServices from '@/services/locationServices';
import useSWR from 'swr';

export const useProvinces = () => {
    const { data, error, isLoading, isValidating, mutate } = useSWR('/provinces', LocationServices.getProvinces);

    return {
        provinces: data,
        isLoading,
        isValidating,
        error,
        mutate,
    };
};

export const useDistricts = (provinceId: string) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(
        provinceId ? `/districts/${provinceId}` : null,
        () => LocationServices.getDistricts(provinceId)
    );

    return {
        districts: data ?? [],
        isLoading,
        isValidating,
        error,
        mutate,
    };
};

export const useWards = (districtId: string) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(districtId ? `/wards/${districtId}` : null, () =>
        LocationServices.getWards(districtId)
    );

    return {
        wards: data ?? [],
        isLoading,
        isValidating,
        error,
        mutate,
    };
};
