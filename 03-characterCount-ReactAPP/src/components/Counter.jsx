import { useState } from "react";

const Counter = () => {
    const [text, setText] = useState('')
    const [excludeSpaces, setExcludeSpaces] = useState(false);

    function handleChange(e) {
        console.log('event value', (e.target.value))
        setText(e.target.value)
    }

// Character count
  const charCount = excludeSpaces ? text.replace(/\s/g, "").length : text.length;

  // Word count
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Sentence count
  const sentenceCount = text.trim() === "" ? 0 : text.split(/[.?!]+/).filter(sentence => sentence.trim().length > 0).length;


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <h2>Analyze your text on real-time</h2>
                <textarea
                    value={text}
                    onChange={handleChange}
                    name="textHere" id="text"
                    placeholder="Starting typing here...(or paste your text"
                    style={{ height: '30vh', width: '40vw' }}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }} >
                <label>
                    <input type="checkbox"
                        checked={excludeSpaces}
                        onChange={e => setExcludeSpaces(e.target.checked)}
                    />
                    Exclude Spaces
                </label>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
                <p>Character Count:
                    <spna>{charCount}</spna>
                </p>
                <p> Word Count:
                    <spna> {wordCount}</spna>
                </p>
                <p> Sentence Count:
                    <spna>{sentenceCount}</spna>
                </p>
            </div>

            <div>
                <p>Letter density</p>
                <spna>Loading ......</spna>
            </div>


        </div>
    )
}

export default Counter;