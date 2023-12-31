// not in use now but am keeping for the future when I may need it!!

import { useState, useEffect } from 'react'

function useBodyScrollLock() {
    const bodyStyle = document.body.style

    const [isLocked, setIsLocked] = useState(
        bodyStyle.overflowY = 'hidden'
    )

    useEffect(() => {
        bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
    }, [isLocked, bodyStyle])

    const toggle = () => setIsLocked(!isLocked)

    return [isLocked, toggle]
}

export default useBodyScrollLock