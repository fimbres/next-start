import React, { useState, HTMLElement } from 'react';
import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

import Logo from "@images/logo.png";

const NavBar = () => {
    const router = useRouter();
    const { data, status } = useSession();
    const [open, setOpen] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const pages = [
        {
            title: "Products",
            onClick: () => router.push("/products")
        },
        {
            title: "Posts",
            onClick: () => router.push("/posts")
        },
        {
            title: "Comments",
            onClick: () => router.push("/comments")
        },
        {
            title: "Users",
            onClick: () => router.push("/users")
        }
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        setOpen(!open);
    };

    return (
        <AppBar sx={{ backgroundColor: "#0F0E0E" }}>
            <Container>
                <Toolbar disableGutters>
                    <Link href="/">
                        <Image src={Logo} alt="Logo" width={45} height={45} style={{ cursor: "pointer"}} placeholder="blur" />
                    </Link>

                    <Box sx={{ marginLeft: 5, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={page.onClick}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: "flex", display: { xs: 'none', md: 'flex' } }}>
                        <div style={{ display: "flex", marginRight: 10 }}>
                            {status !== "authenticated" ? (
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    onClick={signIn}
                                >
                                    Log In
                                </Button>) : (
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    onClick={signOut}
                                >
                                    Log Out
                                </Button>
                            )}
                        </div>
                        {status === "authenticated" && <Tooltip title="My Profile">
                            <IconButton sx={{ p: 0 }} onClick={() => router.push("/profile")}>
                                <Avatar alt="Remy Sharp" src={data?.user.image} />
                            </IconButton>
                        </Tooltip>}
                        
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "flex-end" }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon sx={{ color: "#fff"}}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            open={open}
                            onBlur={() => setOpen(false)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                            <MenuItem key={page.title} onClick={page.onClick}>
                                <Typography textAlign="center">{page.title}</Typography>
                            </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;
