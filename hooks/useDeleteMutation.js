const { showToast } = require("@/lib/showtoast")
const { useQueryClient, useMutation } = require("@tanstack/react-query")
const { default: axios } = require("axios")

const useDeleteMutation = (queryKey, deleteEndpoint)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({ids,deleteType}) => {
        const {data:response} = await axios({
            url: deleteEndpoint,
            method: deleteType === 'PD' ? DELETE : 'PUT',
            data : {ids,deleteType}
        })
        if (!response.success){
            throw new Error(response.message)
        }
        return response.data
        },
     onSuccess: (data)=>{
        showToast('success',message)
        queryClient.invalidateQueries([queryKey])
     },
     onError: (error)=>{
        showToast('error',error.message)
     }
  })
}
export default useDeleteMutation;