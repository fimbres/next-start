import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile = () => {
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status !== "authenticated"){
            router.push("/api/auth/signin");
        }
    }, [router, status]);
    
    
    return <div>
        <h1>{data?.user.email}</h1>
        <Image src={data?.user.image} alt="Logo" width={200} height={200}/>
    </div>
}

export default Profile;