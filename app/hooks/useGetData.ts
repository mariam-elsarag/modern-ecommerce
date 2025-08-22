// import { useQuery } from "@tanstack/react-query";
// import type { UseFormSetError } from "react-hook-form";
// import { useTranslation } from "react-i18next";
// import { handleError } from "~/common/utils/handleError";
// import axiosInstance from "~/services/axiosInstance";

// function useGetData<T>(endpoint: string, key: (string | number)[]) {
//   const { t } = useTranslation();

//   const fetchData = async (): Promise<T[]> => {
//     try {
//       const response = await axiosInstance.get(endpoint);
//       return response.data;
//     } catch (err) {
//       handleError(err, t);
//       throw err;
//     }
//   };

//   const { data, isLoading, error } = useQuery<T[], Error>({
//     queryKey: key,
//     queryFn: fetchData,
//     retry: false,
//   });

//   return { data, isLoading, error };
// }

// export default useGetData;
