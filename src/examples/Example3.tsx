

import { IconButton, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react'
import { FaBell, FaMinus, FaPhoneVolume, FaPlus } from 'react-icons/fa';
const srcAudio = require("./piano.mp3");

interface Props {

}

export default function Example3({ }: Props): ReactElement {

    const [sliderValue, setSliderValue] = React.useState(1)
    const [showTooltip, setShowTooltip] = React.useState(false)

    let audioContext: any;
    let audio: any;
    let gainNode: any;
    // const [gainNodeState, setGainNode] = useState(audioContext.createGain())

    function play() {
        if (!audioContext) {
            // Create a new audio context
            audioContext = new AudioContext();

            // Create <audio> tag
            audio = document.createElement("audio");

            // set URL to the MP3 within your Glitch.com assets
            audio.src = srcAudio;

            // To play audio through Glitch.com CDN
            audio.crossOrigin = "Anonymous";

            // Enable looping so the audio never stops
            audio.loop = true;

            // Play audio
            audio.play();

            // Create a "Media Element" source node
            const source = audioContext.createMediaElementSource(audio);

            // Create a gain for volume adjustment
            gainNode = audioContext.createGain();
            console.log(gainNode.gain.setTargetAtTime(v, audioContext?.currentTime, 0.01))
            // wire source to gain
            source.connect(gainNode);

            // wire the gain -> speaker
            gainNode.connect(audioContext.destination);
        } else {
            // Clean up our element and audio context
            audio.pause();
            audioContext.close();
            audioContext = audio = null;
        }
    }

    return (
        <>
            <IconButton
                aria-label="play"
                icon={<FaPhoneVolume />}
                onClick={play}>
            </IconButton>

            <Slider
                id='slider'
                step={0.01}
                min={0}
                max={1}
                colorScheme='teal'
                onChange={(v) => {
                    setSliderValue(v)
                    setVolume(v)
                }
                }
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderMark value={0.25} mt='1' ml='-2.5' fontSize='sm'>
                    25%
                </SliderMark>
                <SliderMark value={0.50} mt='1' ml='-2.5' fontSize='sm'>
                    50%
                </SliderMark>
                <SliderMark value={0.75} mt='1' ml='-2.5' fontSize='sm'>
                    75%
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg='teal.500'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${sliderValue}%`}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
            {/* <audio loop src={srcAudio} ref={audioRef}></audio> */}
        </>
    )
}
