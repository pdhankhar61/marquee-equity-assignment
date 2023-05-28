import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function useAuthHook() {
    const value = useContext(AuthContext);
    return { ...value };
}

export default useAuthHook;