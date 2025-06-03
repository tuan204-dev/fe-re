import axios from 'axios';

const locationInstance = axios.create({
    baseURL: 'https://esgoo.net/api-tinhthanh',
});

export interface IESLocation {
    id: string;
    name: string;
    name_en: string;
    full_name: string;
    full_name_en: string;
    latitude: string;
    longitude: string;
}

const getProvinces = async () => {
    const { data } = await locationInstance.get<{
        data: IESLocation[];
    }>('/1/0.htm');

    return data.data;
};

const getDistricts = async (provinceId: string) => {
    const { data } = await locationInstance.get<{
        data: IESLocation[];
    }>(`/2/${provinceId}.htm`);

    return data.data;
};

const getWards = async (districtId: string) => {
    const { data } = await locationInstance.get<{
        data: IESLocation[];
    }>(`/3/${districtId}.htm`);

    return data.data;
};

const getFullLocation = async (wardId: string) => {
    const { data } = await locationInstance.get<{
        data: IESLocation;
    }>(`/5/${wardId}.htm`);

    return data.data;
};

const LocationServices = { getProvinces, getDistricts, getWards, getFullLocation };

export default LocationServices;
