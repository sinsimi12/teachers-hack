import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { MdOutlineQrCode } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";

import LinkButton from "../../../ui/LinkButton/LinkButton.component";

import "./SecretPhrase.styles.scss";

const SecretPhrase = () => {
    const [secretPhrase, setSecretPhrase] = useState("");

    const [showCopyMessage, setShowCopyMessage] = useState(false);

    const copyToClipboardHandler = () => {
        setShowCopyMessage(true);
        navigator.clipboard.writeText(secretPhrase);
    };

    const generatePhraseHandler = () => {
        setShowCopyMessage(false);
        setSecretPhrase(uuidv4());
    };

    return (
        <div className="phrase">
            <div className="phrase__heading">
                <h2>
                    <MdOutlineQrCode />
                    <span>Secret Phrase:</span>
                </h2>
            </div>

            {secretPhrase && (
                <>
                    {showCopyMessage && <p>Copied to clipboard.</p>}

                    <div className="phrase__value">
                        <button
                            title="Copy to Clipboard"
                            className="copy"
                            onClick={copyToClipboardHandler}
                        >
                            <FaRegCopy />
                        </button>

                        <p>{secretPhrase}</p>
                    </div>
                </>
            )}

            <LinkButton text="Generate Phrase" onClick={generatePhraseHandler} />
        </div>
    );
};

export default SecretPhrase;
