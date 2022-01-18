

import { IconButton } from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react'
import { FaBell } from 'react-icons/fa';

interface Props {

}

export default function Example2({ }: Props): ReactElement {
    const [play, setPlay] = useState(false)

    let audioContext: any
    let audioBuffer: any

    async function loadSound() {
        // Re-use the same context if it exists
        if (!audioContext) {
            audioContext = new AudioContext();
        }

        // Re-use the audio buffer as a source
        if (!audioBuffer) {
            // Fetch MP3 from URL
            const resp = await fetch("audio/chime.mp3");

            // Turn into an array buffer of raw binary data
            const buf = await resp.arrayBuffer();

            // Decode the entire binary MP3 into an AudioBuffer
            audioBuffer = await audioContext.decodeAudioData(buf);
        }
    }

    async function playSound() {
        // Ensure we are all loaded up
        await loadSound();

        // Ensure we are in a resumed state
        await audioContext.resume();

        // Now create a new "Buffer Source" node for playing AudioBuffers
        const source = audioContext.createBufferSource();

        // Connect to destination
        source.connect(audioContext.destination);

        // Assign the loaded buffer
        source.buffer = audioBuffer;

        // Start (zero = play immediately)
        source.start(0);
    }

    return (
        <>
            <IconButton
                aria-label="play"
                icon={<FaBell />}
                onClick={playSound}>
            </IconButton>
            {/* <audio loop src={srcAudio} ref={audioRef}></audio> */}
        </>
    )
}
