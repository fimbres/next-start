import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Profile = () => {
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status !== "authenticated"){
            router.push("/api/auth/signin");
        }
    }, [router, status]);
    
    
    return <Box sx={{ backgroundColor: "#EEEEEE", height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Container>
            <Paper elevation={3} sx={{ padding: 15, textAlign: "center" }}>
                <Image src={data?.user.image} alt="Logo" width={200} height={200} style={{ borderRadius: 15 }}/>
                <div style={{ marginTop: 15 }}>
                    <Typography variant="h3" marginBottom={1} marginTop={3}>{data?.user.name}</Typography>
                    <Typography variant="h6">{data?.user.email}</Typography>
                </div>
            </Paper>
        </Container>
    </Box>
}

export default Profile;