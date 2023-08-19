import React from "react";
import {Container} from "./styles.ts";
import {useScroll, useTransform} from "framer-motion";

const Header: React.FC = () => {
    const {scrollYProgress} = useScroll()
    const headerY = useTransform(scrollYProgress,
        [0.188, 0.198], ['0%', '-100%'])
    return <Container
        style={{
            y: headerY
        }}
    ></Container>
}

export default Header