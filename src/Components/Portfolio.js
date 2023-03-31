import { Link } from "react-router-dom";
import "../App.css"

import React, { useState } from 'react';

function Portfolio() {
    return (
        <div>
            <h1>Projects</h1>
            <figure>
                <a href="https://alifawatkins.github.io/vtuberDebut/" target="_blank">
                <img src="https://cdn.discordapp.com/attachments/761768235350622228/1090364377410048050/vtuberscreenshot.png" alt="VTuber Debut Game Screenshot" width="50%"/>
                </a>
                <figcaption>VTuber Debut Game built with HTML, CSS, and JavaScript.</figcaption>
            </figure>
            <br />
            <figure>
                <a href="https://github.com/alifawatkins/aliens-vs-humans" target="_blank">
                <img src="https://cdn.discordapp.com/attachments/761768235350622228/1091228212484374599/F449B1BB126D8301A257326F48B2437499277FD5.jpeg" alt="Space battle" width="50%"/>
                </a>
                <figcaption>Aliens vs Human Space Battle "Game" built with JavaScript (Only "plays" in console).</figcaption>
            </figure>
            <br />
            <figure>
                <a href="https://github.com/alifawatkins/alifawatkins.github.io/tree/main/module2/react-star-wars" target="_blank">
                <img src="https://cdn.discordapp.com/attachments/761768235350622228/1091226463145050212/Star_Wars_Logo.svg.png" width="50%"/>
                </a>
                <figcaption>StarWars Ship Names on a Card cuz... why not? Built with React.</figcaption>
            </figure>
        </div>
      );
    }

export default Portfolio;