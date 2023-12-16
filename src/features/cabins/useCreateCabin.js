import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
export function useCreateCabin() {
  // React-queryClient
  const queryClient = useQueryClient();

  // React query mutaion hook to manage create new cabin async task
  const { mutate: createCabin, isLoading } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      {
        toast.success("New cabin successfully created");
        queryClient.invalidateQueries({ queryKey: ["cabins"] });
      }
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, createCabin };
}
