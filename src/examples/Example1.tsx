import { Button, IconButton } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
const srcAudio = require("./piano.mp3");
export default function Example1() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [play, setPlay] = useState(false)
    function handleAudio() {
        if (audioRef?.current?.paused) {
            audioRef?.current?.play()
            setPlay(true)

        } else {
            audioRef?.current?.pause()
            setPlay(false)
        }
    }

    return (
        <>
            <IconButton
                aria-label="play"
                icon={play ? <FaPause /> : <FaPlay />}
                onClick={handleAudio}>
            </IconButton>
            <audio loop src={srcAudio} ref={audioRef}></audio>
        </>
    )
}