import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

const readmeURL = 'https://raw.githubusercontent.com/tobinsouth/covid19-forecasting-aus/master/README.md'

export default function DisplayModel() {

    let params = useParams();

    const [gitREADME, setGitREADME] = useState("Loading README");

    fetch(readmeURL)
        .then(response => response.text())
        .then((response) => {setGitREADME(response)})
        .catch(err => console.log(err))

    return (
        <div className="model-card">
            {params.creator} - {params.name}
            <div className="markdown-content">
                <ReactMarkdown children={gitREADME} remarkPlugins={[remarkGfm, remarkMath]} /> 
            </div>
        </div>
    );
}