import React from 'react';
import {FaDiscord, FaGithub, FaTwitter} from 'react-icons/fa';

const Icons = () => {
    return (
        <div className="flex flex-row gap gap-3 text-5xl bg-white">
            <FaDiscord className="text-blue text-5xl" />
            <FaGithub />
            <FaTwitter />
        </div>
    );
    }

export default Icons;
