import React from 'react';
import {FaDiscord, FaGithub, FaTwitter} from 'react-icons/fa';

const Icons = () => {
    return (
        <div className="flex flex-row gap gap-6 px-4 py-2 my-6 rounded-3xl text-5xl bg-white">
            <FaDiscord />
            <FaGithub />
            <FaTwitter />
        </div>
    );
    }

export default Icons;
