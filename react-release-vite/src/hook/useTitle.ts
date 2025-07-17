import { useEffect } from "react";
function useTitle(title:string){
    useEffect(() => {
        console.log('App mounted');
        document.title = title
    }, []);
}
export default useTitle