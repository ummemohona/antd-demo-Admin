import React, {useEffect, useState} from "react";
import {FC, Fragment, ReactNode} from "react";
import {useRouter} from "next/router";

const Protected: FC<{children: ReactNode}> = ({children}) => {
    const route = useRouter();

    useEffect(() => {
        const access = localStorage.getItem("accessToken");
        if (!access) route.push("/");
    }, [])

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default Protected;