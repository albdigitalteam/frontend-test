import { useState, useEffect, useCallback } from 'react';

export const useLayout = () => {

    const [layout, setLayout] = useState(null);

    const onLayout = useCallback(layout => {
        setLayout(layout)
    }, [])

    return [layout, onLayout]

}