import JobService from "@/services/jobServices"
import useSWR from "swr"


export const useJobs = () => {
    const { data, error, isLoading, isValidating, mutate } = useSWR('/job', JobService.getJobs)

    return {
        jobs: data ?? [],
        error,
        isLoading,
        isValidating,
        mutate
    }
}