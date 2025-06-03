import JobService from '@/services/jobServices';
import { IRecruitingDetail } from '@/types/job';
import { scrollToLastMessage } from '@/utils/scrollTo';
import useSWR from 'swr';

export const useJobs = (params?: any) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(`/job?${JSON.stringify(params)}`, () =>
        JobService.getJobs(params)
    );

    return {
        jobs: data ?? [],
        error,
        isLoading,
        isValidating,
        mutate,
    };
};

export const useRecruiting = (jobId: string) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(`/job/${jobId}/recruiting`, () =>
        JobService.getAllRecruiting(jobId)
    );

    return {
        recruiting: data ?? [],
        error,
        isLoading,
        isValidating,
        mutate,
    };
};

export const useRecruitingDetail = (recruitingId: string) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(
        `/recruiting/${recruitingId}`,
        () => JobService.getRecruitingDetail(recruitingId),
        {
            refreshInterval: 5000, // Refresh every 10 seconds
            revalidateOnFocus: true,
        }
    );

    return {
        recruitingDetail: (data ?? {}) as IRecruitingDetail,
        error,
        isLoading,
        isValidating,
        mutate,
    };
};
