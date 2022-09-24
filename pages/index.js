import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Typography from '@mui/material/Typography';
import { Container, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import Logo from "@images/logo.png";
import { Box } from "@mui/system";

const Home = () => {
    const router = useRouter();
    const user = process.env.DB_USER;

    return (
        <Box sx={{ backgroundColor: "#EEEEEE", height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Container sx={{ marginLeft: "auto", marginRight: "auto", textAlign: 'center' }}>
                <Image src={Logo} alt="Logo" placeholder="blur" width={200} height={200} />
                <Typography variant="h2" marginTop={5}>Next & MUI Project</Typography>
            </Container>
        </Box>
    )
}

export default Home;