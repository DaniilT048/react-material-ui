import axios from "axios";
import {ReactElement, useEffect, useState} from "react";


type User = {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: {
        city: string;
        street: string;
    }
};



    return (
            <>
                {loading ? (<p>Loading</p>): error?(): userData ? (<div)}
            </>
)
}