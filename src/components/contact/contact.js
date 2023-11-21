import React from 'react';
import { SpotifyLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "@phosphor-icons/react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { YoutubeLogo } from "@phosphor-icons/react";
//import { SoundcloudLogo } from "@phosphor-icons/react";
import { Parallelogram } from "@phosphor-icons/react";
import './style.css';
import Container from '@mui/material/Container';
import { InstagramLogo } from '@phosphor-icons/react';

function Contact() {

    return (

        <Container className="containercontact" sx={{ px: 0 }}>

            <ul className="socialList">
                <li>
                    <a href="https://www.facebook.com/curlukfr/">
                        <FacebookLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/curl_ukfr_official/">
                        <InstagramLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li>
                    <a href="https://open.spotify.com/artist/1iaM4Y9Ns6FcVwJ0Zp177O?si=o1Pue1GUTjSEmg293nsQiA">
                        <SpotifyLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@CURLmusicTV">
                        <YoutubeLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li>
                    <a href="https://curlukfr.bandcamp.com/">
                        <Parallelogram className="icon" weight="bold" />
                    </a>
                </li>
                <li>
                    <a href="mailto:curlukfrance@gmail.com">
                        <EnvelopeSimple className="icon" weight="bold" />
                    </a>
                </li>
            </ul>
        </Container>
    )
}

export default Contact;