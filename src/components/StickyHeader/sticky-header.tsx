"use client";

import { useEffect, useState } from "react";

import Header from "../Header";
import styles from "./sticky-header.module.css"

export default function StickyHeader() {
    const [menuOpacity, setMenuOpacity] = useState(0)

    useEffect(() => {
        function updateOpacity() {
        setMenuOpacity(window.pageYOffset - window.innerHeight + 130)
        }

        window.addEventListener('scroll', updateOpacity, { passive: true })

        return () => window.removeEventListener('scroll', updateOpacity)
    }, [])

    return (
        <header className={styles.header} style={{ opacity: menuOpacity }}>
          <Header />
        </header>
    )
}