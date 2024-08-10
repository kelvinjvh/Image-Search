import create from "zustand";

export const useStore = create((set, get) => ({
    data:[],   
    /* loading:true, */

    FecthData(text){
        fetch(`https://pixabay.com/api/?key=9282272-f79492e8cdab8071e29b5e802&q=${text}&image_type=photo&pretty=true`)
        .then(response=>response.json())
        .then(results=>{
            set({data:results.hits})
            /* set({loading:false}) */
        })
    }
  
}))

export default useStore